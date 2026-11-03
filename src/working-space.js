import {WORKSPACE_HTML} from "./working-space-template.js";
import {WORKING_MODES,normalizeWorkspace} from "./working-state.js";
import {mountMathsEditor} from "./workspace-maths.js";
import {mountDrawing} from "./workspace-drawing.js";

/**
 * Three independent ways to show mathematical working, all saved in a single
 * per-question record. Switching modes never destroys the other modes' work.
 */
export function mountWorkingSpace(root,{initial,legacyWorking="",questionId="working",onChange}={}){
  if(!root)return()=>{};
  root.innerHTML=WORKSPACE_HTML;
  const $=s=>root.querySelector(s),$$=s=>[...root.querySelectorAll(s)];
  const state=normalizeWorkspace(initial,legacyWorking);
  const note=$("#work-notes");
  note.value=state.notes;
  let disposed=false;
  function announce(text,warning=false){
    const output=$("#work-save-status");
    output.textContent=text;
    output.classList.toggle("save-error",warning);
  }
  function save(){
    if(disposed)return false;
    const success=typeof onChange==="function"?onChange(state):true;
    announce(success===false
      ?"Browser storage full — copy your maths or export your drawing"
      :"Saved on this device",success===false);
    return success;
  }

  const maths=mountMathsEditor(root,{state,save});
  const drawing=mountDrawing(root,{state,save,notify:announce,questionId});

  function updateMode(){
    for(const mode of WORKING_MODES){
      const active=mode===state.mode;
      const tab=$("#work-tab-"+mode),panel=$("#work-panel-"+mode);
      tab.setAttribute("aria-selected",String(active));
      tab.tabIndex=active?0:-1;
      panel.hidden=!active;
    }
    if(state.mode==="maths")void maths.activate();
    if(state.mode==="draw")drawing.activate();
  }
  function setMode(mode){
    if(!WORKING_MODES.includes(mode))return;
    state.mode=mode;updateMode();save();
  }
  note.addEventListener("input",()=>{
    state.notes=note.value;save();
  });
  $$("[data-work-mode]").forEach(tab=>{
    tab.addEventListener("click",()=>setMode(tab.dataset.workMode));
    tab.addEventListener("keydown",event=>{
      if(!["ArrowLeft","ArrowRight","Home","End"].includes(event.key))return;
      event.preventDefault();
      const current=WORKING_MODES.indexOf(tab.dataset.workMode);
      const next=event.key==="Home"?0:event.key==="End"?WORKING_MODES.length-1
        :(current+(event.key==="ArrowRight"?1:WORKING_MODES.length-1))%WORKING_MODES.length;
      setMode(WORKING_MODES[next]);
      $("#work-tab-"+WORKING_MODES[next]).focus();
    });
  });
  $("#work-expand").addEventListener("click",()=>{
    const expanded=$(".student-workspace").classList.toggle("work-expanded");
    $("#work-expand").textContent=expanded?"Reduce space":"Expand space";
    $("#work-expand").setAttribute("aria-pressed",String(expanded));
    if(state.mode==="draw")drawing.resize();
  });
  updateMode();
  return ()=>{
    drawing.dispose();maths.dispose();
    disposed=true;
  };
}
