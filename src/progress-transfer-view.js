import {
 backupToJSON,parseProgressBackup,summarizeProgressRecords,
 mergeProgressRecords,MAX_BACKUP_SIZE
} from "./progress-portability.js";

export function renderProgressTransfer(records={}){
 const summary=summarizeProgressRecords(records);
 return '<section class="progress-transfer" id="progress-transfer" aria-labelledby="transfer-title">'+
 '<div class="transfer-title"><div>'+
 '<h2 id="transfer-title">Save or restore your progress</h2>'+
 '<p>Download a backup before changing devices or clearing browser data.</p></div>'+
 '<button type="button" class="btn small" id="export-progress">Download my backup</button></div>'+
 '<p class="transfer-local-count">Stored here: '+summary.questions+' question records · '+summary.history+' archived attempts · '+summary.drawings+' with drawings.</p>'+
 '<div class="transfer-import"><h3>Restore a backup file</h3>'+
 '<label for="progress-import-file">Backup file</label>'+
 '<input type="file" id="progress-import-file" accept=".json,application/json">'+
 '<div class="transfer-import-preview" id="transfer-import-preview" hidden>'+
 '<p id="transfer-preview-summary" aria-live="polite"></p>'+
 '<fieldset><legend>What should happen if this device already has progress?</legend>'+
 '<label><input type="radio" name="import-mode" value="keep-current" checked><span><strong>Keep my current work</strong><small>Add only questions and notes missing from this device. Matching records stay as they are.</small></span></label>'+
 '<label><input type="radio" name="import-mode" value="use-imported"><span><strong>Use the imported version for matching questions</strong><small>Replace matching records with the backup, but keep unrelated records already on this device.</small></span></label>'+
 '<label><input type="radio" name="import-mode" value="replace-all"><span><strong>Replace everything with this backup</strong><small>Remove local records not present in the backup. Make a backup of this device first.</small></span></label>'+
 '</fieldset><button type="button" id="apply-import" class="btn small">Import selected backup</button></div>'+
 '<p class="transfer-status" id="transfer-status" role="status" aria-live="polite">No file selected. Backups remain on your device; this website does not upload them.</p>'+
 '</div><p class="transfer-privacy"><strong>Privacy:</strong> Downloaded JSON files can contain your written work and drawings. Keep the file somewhere private. For full restoration, select “Replace everything” only after checking and backing up any work already on this device.</p>'+
 '</section>';
}
/**
 * onImport must atomically save or roll back the supplied merged records.
 * Called only in the real button click handler after explicit user choice.
 */
export function mountProgressTransfer(root,{getRecords=()=>({}),onImport=()=>false}={}){
 const doc=root.ownerDocument,win=doc.defaultView;
 const $=selector=>root.querySelector(selector);
 let pending=null,active=true;
 const status=$("#transfer-status"),fileInput=$("#progress-import-file"),
  preview=$("#transfer-import-preview"),summary=$("#transfer-preview-summary");
 function message(text,error=false){
  if(!active)return;
  status.textContent=text;status.classList.toggle("transfer-error",error);
 }
 $("#export-progress").addEventListener("click",()=>{
  try{
   const json=backupToJSON(getRecords());
   const blob=new win.Blob([json],{type:"application/json;charset=utf-8"});
   const date=new Date().toISOString().slice(0,10);
   const url=win.URL?.createObjectURL?.(blob);
   const a=doc.createElement("a");
   a.download="a-level-maths-calendar-progress-"+date+".json";
   if(url){
    a.href=url;a.style.display="none";doc.body.append(a);a.click();a.remove();
    // Revoke after the download has been handed to the browser.
    win.setTimeout(()=>win.URL?.revokeObjectURL?.(url),3000);
    message("A progress backup download was requested. Save this file somewhere private.");
   }else{
    // Graceful support for browsers without blob-object URLs.
    a.href="data:application/json;charset=utf-8,"+encodeURIComponent(json);
    a.click();
    message("A progress backup download was requested. Save this file somewhere private.");
   }
  }catch(err){message("Unable to prepare a backup: "+err.message,true);}
 });
 fileInput.addEventListener("change",async()=>{
  pending=null;preview.hidden=true;
  const file=fileInput.files?.[0];if(!file){message("No file selected.");return;}
  if(file.size>MAX_BACKUP_SIZE){message("The selected backup is larger than 10 MiB.",true);return;}
  try{
   const raw=typeof file.text==="function"?await file.text()
    :await new Promise((resolve,reject)=>{
     const reader=new win.FileReader();
     reader.onload=()=>resolve(reader.result);
     reader.onerror=()=>reject(new Error("Could not read this file."));
     reader.readAsText(file);
    });
   if(!active)return;
   pending=parseProgressBackup(raw);
   const counts=summarizeProgressRecords(pending.data);
   const local=getRecords();
   const overlap=Object.keys(pending.data).filter(k=>Object.hasOwn(local,k)).length;
   summary.textContent="Backup dated "+new Date(pending.exportedAt).toLocaleString()+
    ": "+counts.questions+" question records, "+counts.history+" earlier attempts, "+
    counts.drawings+" records with drawings. "+overlap+" record(s) also exist on this device.";
   preview.hidden=false;
   message("Review the options below, then select Import selected backup.");
  }catch(err){
   pending=null;preview.hidden=true;
   message("Could not import this file: "+err.message,true);
  }
 });
 $("#apply-import").addEventListener("click",()=>{
  if(!pending){message("Choose and check a valid backup file first.",true);return;}
  try{
   const mode=root.querySelector('input[name="import-mode"]:checked')?.value||"keep-current";
   const current=getRecords();
   const result=mergeProgressRecords(current,pending.data,mode);
   if(mode!=="keep-current"&&(result.counts.replaced>0||result.counts.removed>0)){
    const warning=mode==="replace-all"
      ?"This will replace all progress on this device with the selected backup. Export your current progress first if you need it."
      :"This will overwrite "+result.counts.replaced+" existing record(s) using the backup. Export your current progress first if needed.";
    if(!win.confirm(warning))return;
   }
   const ok=onImport(result.records,result.counts);
   if(ok===false)message("The import could not be saved. Your previous progress has been kept. Storage may be full.",true);
  }catch(err){message("Import cancelled: "+err.message,true);}
 });
 return ()=>{active=false;};
}
