import {
 attemptArchive,completedAttemptTimeline,attemptComparison,
 hasNewAttemptInProgress,hasFinishedAttempt,MAX_PAST_ATTEMPTS
} from "./attempt-history.js";
import {isQuestionFinished} from "./question-assessment.js";
import {drawStrokes} from "./workspace-drawing.js";
const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const status=x=>x==="I"?"Independently":x==="P"?"With help":"Support not recorded";
const niceDate=x=>{
 if(typeof x!=="string"||Number.isNaN(Date.parse(x)))return "Earlier saved work";
 return "Saved "+new Date(x).toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"});
};
function workingPreview(entry,index){
 const w=entry.record?.workspace||{},note=String(w.notes??entry.record?.working??"");
 const lines=Array.isArray(w.mathLines)?w.mathLines.filter(line=>String(line?.latex||"").trim()||String(line?.reason||"").trim()):[];
 const ink=Array.isArray(w.strokes)&&w.strokes.length>0;
 if(!note.trim()&&!lines.length&&!ink)return '<p class="attempt-no-working">No written or drawn working was saved for this attempt.</p>';
 return (note.trim()?'<div class="attempt-working-block"><strong>Notes from this attempt</strong><pre>'+esc(note)+'</pre></div>':'')+
 (lines.length?'<div class="attempt-working-block"><strong>Saved maths steps</strong><ol>'+lines.map(line=>
   '<li><span class="math">\\('+esc(line.latex||"")+'\\)</span>'+
   (line.reason?'<p>'+esc(line.reason)+'</p>':'')+'</li>').join('')+'</ol></div>':'')+
 (ink?'<div class="attempt-working-block"><strong>Earlier freehand drawing</strong>'+
 '<canvas data-history-ink="'+index+'" width="640" height="250" role="img" aria-label="Drawing saved in an earlier question attempt"></canvas></div>':'');
}
export function renderAttemptHistory(question,record={}){
 // No retry panel until a valid self-awarded mark exists (including zero).
 // An archived finished attempt keeps it visible during an unmarked retry.
 if(!hasFinishedAttempt(question,record))return "";
 const archive=attemptArchive(record);
 const timeline=completedAttemptTimeline(question,record);
 const comparison=attemptComparison(question,record);
 const currentFinished=isQuestionFinished(record,question.marks);
 const pending=hasNewAttemptInProgress(question,record);
 const canStart=currentFinished&&archive.length<MAX_PAST_ATTEMPTS;
 const trend=comparison?(
  comparison.change>0?"Improved by "+comparison.change+" mark"+(comparison.change===1?"":"s")+" since the previous finished attempt."
  :comparison.change<0?"Changed by "+comparison.change+" marks since the previous finished attempt. Try reviewing your method."
  :"Same mark as the previous finished attempt; compare your methods to see what improved."
 ):"A score history appears here after you finish a second attempt.";
 return '<section class="reattempt-panel" id="reattempt-panel" aria-labelledby="reattempt-heading">'+
 '<div class="reattempt-head"><div><h3 id="reattempt-heading">Try again & track improvement</h3>'+
 '</div>'+
 (canStart?'<button class="btn small" type="button" id="start-reattempt">Start a fresh attempt</button>':
  pending?'<span class="reattempt-state">Fresh attempt in progress</span>':
  currentFinished?'<span class="reattempt-state">History limit reached · export a backup</span>':
  '<span class="reattempt-state">Mark your attempt first</span>')+
 '</div>'+
 (archive.length?'<div class="attempt-trend"><strong>'+timeline.length+' finished attempt'+(timeline.length===1?"":"s")+'</strong><span>'+esc(trend)+'</span></div>':'')+
 (archive.length?'<div class="attempt-history-list">'+timeline.map((entry,index)=>{
  const label=(entry.fromHistory?"Previous":"Current")+" attempt "+entry.number;
  const percent=Math.round(100*entry.score/(question.marks||1));
  const saved=entry.fromHistory?niceDate(entry.savedAt):"Latest marked result";
  return '<details class="attempt-history-item"><summary>'+
   '<span class="attempt-badge">'+esc(label)+'</span>'+
   '<strong>'+entry.score+' / '+question.marks+' marks</strong>'+
   '<span>'+esc(status(entry.status))+'</span>'+
   '<small>'+esc(saved)+'</small><span class="attempt-chevron" aria-hidden="true">⌄</span></summary>'+
   '<div class="attempt-detail"><div class="attempt-bar" role="img" aria-label="'+percent+' percent of marks on attempt '+entry.number+'"><span style="width:'+percent+'%"></span></div>'+
   (entry.fromHistory?workingPreview(entry,index):'<p class="attempt-current-note">This is your current marked attempt. Your working is in the editor above.</p>')+
   '</div></details>';
 }).join('')+'</div>':
 '')+
 (archive.length?'<p class="attempt-history-privacy">Older attempts are included in your progress backup, but do not count as extra completed questions.</p>':'')+
 '<p class="attempt-history-status" id="attempt-history-status" role="status" aria-live="polite"></p>'+
 '</section>';
}
export function mountAttemptHistory(root,{question,record,onStart}={}){
 if(!root||!question)return()=>{};
 root.innerHTML=renderAttemptHistory(question,record);
 if(!root.firstElementChild)return()=>{};
 const win=root.ownerDocument.defaultView;
 const paint=details=>{
  const canvas=details.querySelector("canvas[data-history-ink]");
  if(!canvas)return;
  const index=Number(canvas.dataset.historyInk);
  const strokes=attemptArchive(record)[index]?.workspace?.strokes;
  if(!Array.isArray(strokes)||!strokes.length)return;
  const ctx=canvas.getContext?.("2d");
  if(!ctx)return;
  ctx.clearRect(0,0,640,250);
  drawStrokes(ctx,640,250,strokes);
 };
 const toggle=event=>{
  if(!event.target.matches?.(".attempt-history-item")||!event.target.open)return;
  paint(event.target);
  if(typeof win.MathJax?.typesetPromise==="function")
   win.MathJax.typesetPromise([event.target]).catch(()=>{});
 };
 root.addEventListener("toggle",toggle,true);
 const button=root.querySelector("#start-reattempt");
 const click=()=>{
  const ok=win.confirm(
   "Start a fresh attempt on "+question.id+"? The current marks and all saved working will be preserved in attempt history. The new maths workspace and mark fields will be blank."
  );
  if(!ok)return;
  try{
   const result=onStart?.();
   if(result===false)
    root.querySelector("#attempt-history-status").textContent=
      "Couldn't save the previous attempt. Nothing has been cleared. Browser storage may be full.";
  }catch(err){
   root.querySelector("#attempt-history-status").textContent=err.message;
  }
 };
 button?.addEventListener("click",click);
 return ()=>{root.removeEventListener("toggle",toggle,true);button?.removeEventListener("click",click);};
}
