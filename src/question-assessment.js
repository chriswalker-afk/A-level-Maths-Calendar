import {marksBreakdown,applyPartMark,applyOverallMark,clearAllMarks,clearBreakdown,partKey} from "./part-marking.js";
import {getSpecSkill} from "./data/specification.js";
/**
 * Finishing a question has two independent signals:
 * - independence: how a learner worked (optional I / P)
 * - completion: a valid self-awarded mark was recorded (including zero)
 *
 * Never equate choosing independence with finishing a question.
 */
export function isQuestionFinished(record, maxMarks) {
  return Number.isInteger(record?.score)
    && Number.isInteger(maxMarks)
    && record.score >= 0
    && record.score <= maxMarks;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

const difficulties=["Technique","Method choice","Reasoning","Interpretation","Calculator","Time"];

function partMarkingMarkup(question,record){
 if(!Array.isArray(question.parts)||question.parts.length<2)return "";
 const pieces=question.parts.map((part,index)=>{
  const key=partKey(question,index);
  const meta=part[2]||{};
  const skill=getSpecSkill(meta.primarySkillId);
  const existing=record.partMarks?.[key];
  const entered=Number.isInteger(existing)&&existing>=0&&existing<=part[1];
  return '<div class="detail-part-row"><div class="detail-part-label"><label for="self-part-'+key+'"><strong>Part ('+key+')</strong>'
   +'<span>'+part[1]+' available mark'+(part[1]===1?'':'s')+'</span></label>'
   +(skill?'<a href="#/specification/internal/'+escapeHtml(skill.topicId)+'/'+escapeHtml(skill.id)+'" title="See this skill in My Specification">'+escapeHtml(skill.statement)+'</a>':'')+'</div>'
   +'<div class="detail-part-score"><input id="self-part-'+key+'" data-part-mark="'+key+'"'
   +' type="number" min="0" max="'+part[1]+'" step="1" inputmode="numeric"'
   +' aria-label="Marks earned for part ('+key+'), out of '+part[1]+'"'
   +' value="'+(entered?existing:"")+'"><span>/ '+part[1]+'</span></div></div>';
 }).join("");
 return '<details id="mark-by-parts" class="mark-by-parts"'+(record.scoreSource==="parts"?' open':'')+'>'
  +'<summary><span><strong>Optional: mark each part separately</strong>'
  +'<small>Useful for seeing which specification skills earned marks</small></span><span class="detail-chevron" aria-hidden="true">⌄</span></summary>'
  +'<div class="mark-by-parts-body"><p>Enter a mark for every part, including 0 if no marks were earned. When all parts are scored, your total is calculated automatically. Only completed part breakdowns can provide precise skill-accuracy data.</p>'
  +'<div class="detail-part-grid">'+pieces+'</div>'
  +'<div class="detail-part-bottom"><span id="detail-part-summary" aria-live="polite" role="status"></span>'
  +'<button type="button" id="clear-part-breakdown" class="btn ghost small">Clear part scores</button></div>'
  +'<p id="detail-part-info" class="detail-part-info" role="status" aria-live="polite"></p></div></details>';
}

function assessmentMarkup(question, record) {
  const marks=question.marks;
  const hasScore=isQuestionFinished(record,marks);
  const score=hasScore?String(record.score):"";
  const choice=(code,title,description,symbol)=>
    '<button type="button" class="assessment-choice" data-attempt-support="'+code+'" aria-pressed="'+String(record.status===code)+'">'
    +'<span class="assessment-choice-symbol" aria-hidden="true">'+symbol+'</span>'
    +'<span><strong>'+title+'</strong><small>'+description+'</small></span>'
    +'<span class="assessment-choice-tick" aria-hidden="true">✓</span></button>';

  return '<section class="finish-assessment" aria-labelledby="finish-assessment-title">'
    +'<div class="finish-heading"><div><span class="eyebrow">When you finish the question</span>'
    +'<h3 id="finish-assessment-title">Check, mark & finish</h3>'
    +'<p>Compare your working with the solution, record how independently you worked, then enter a mark.</p></div>'
    +'<span id="question-finish-badge" class="finish-state" data-finished="'+String(hasScore)+'" role="status" aria-live="polite">'
    +(hasScore?'✓ Finished':'○ Not yet finished')+'</span></div>'
    +'<div class="finish-flow">'
    +'<div class="finish-step"><div class="finish-number" aria-hidden="true">1</div><div class="finish-step-content">'
    +'<strong>How did you complete this question?</strong>'
    +'<p>Select one. This records whether you needed support, but does <strong>not</strong> mark the question as finished.</p>'
    +'<div class="assessment-choices" role="group" aria-label="How independently did you work?">'
    +choice("I","Independently","I worked it out without hints, notes or help during my attempt.","◇")
    +choice("P","With help","I needed a hint, notes, a worked example or someone’s help during my attempt.","✦")
    +'</div></div></div>'
    +'<div class="finish-step"><div class="finish-number" aria-hidden="true">2</div><div class="finish-step-content">'
    +'<strong>How many marks did you earn?</strong>'
    +'<p>Open the worked solution, check each part and enter your mark. <strong>Entering a mark—including 0—automatically finishes the question.</strong></p>'
    +'<button type="button" class="btn ghost small finish-review-button" id="mark-view-solution">View the worked solution ↑</button>'
    +'<div class="finish-score-row"><label for="self-mark-input">Your mark</label>'
    +'<input id="self-mark-input" class="finish-score" type="number" min="0" max="'+marks+'" step="1" inputmode="numeric"'
    +' value="'+escapeHtml(score)+'" aria-describedby="self-mark-message">'
    +'<span class="finish-out-of">/ '+marks+' marks</span>'
    +'<button type="button" class="clear-self-mark" id="clear-self-mark"'+(hasScore?'':' disabled')+'>Clear mark</button></div>'
    +partMarkingMarkup(question,record)
    +'<p id="self-mark-message" class="finish-mark-message" role="status" aria-live="polite">'
    +(hasScore?'Recorded. This question is finished.':'No mark entered yet. This question is still in progress.')+'</p>'
    +'</div></div></div>'
    +'<div class="finish-followup"><label for="self-error">Optional: What should you revisit?</label>'
    +'<select id="self-error"><option value="">Nothing to record yet</option>'
    +difficulties.map(d=>'<option value="'+escapeHtml(d)+'"'+(record.error===d?' selected':'')+'>'+escapeHtml(d)+'</option>').join('')
    +'</select></div>'
    +'<p class="finish-saving" id="finish-save-status" role="status" aria-live="polite">Your choices and mark save automatically on this device.</p>'
    +'</section>';
}

/** Mount self-marking UI for one question. DOM listeners are scoped to root. */
export function mountQuestionAssessment(root,{question,record={},onChange,onCompletionChange}={}) {
  if(!root||!question)return;
  // Preserve unrelated fields: workspace, hintSeen and legacy working.
  const state={...record};
  root.innerHTML=assessmentMarkup(question,state);
  const score=root.querySelector("#self-mark-input");
  const badge=root.querySelector("#question-finish-badge");
  const markMessage=root.querySelector("#self-mark-message");
  const clear=root.querySelector("#clear-self-mark");
  const saveStatus=root.querySelector("#finish-save-status");

  // A failed browser write must never leave a new score or finished badge
  // appearing to be saved. Preserve unrelated working, hints and history.
  const MARKING_FIELDS=["status","error","score","scoreSource","partMarks"];
  const snapshot=()=>Object.fromEntries(MARKING_FIELDS
    .filter(key=>Object.hasOwn(state,key))
    .map(key=>[key,key==="partMarks"?{...state[key]}:state[key]]));
  let lastSaved=snapshot();
  function restoreMarking(){
    for(const key of MARKING_FIELDS)delete state[key];
    Object.assign(state,lastSaved);
    score.value=isQuestionFinished(state,question.marks)?String(state.score):"";
    root.querySelectorAll("[data-attempt-support]").forEach(button=>
      button.setAttribute("aria-pressed",String(button.dataset.attemptSupport===state.status)));
    root.querySelectorAll("[data-part-mark]").forEach(part=>{
      const value=state.partMarks?.[part.dataset.partMark];
      part.value=Number.isInteger(value)?String(value):"";
      part.removeAttribute("aria-invalid");
    });
    root.querySelector("#self-error").value=state.error||"";
    updateCompletion("Could not save this change. Your previously saved result is unchanged.");
    markMessage.classList.add("mark-error");
    refreshDetailed("Storage write failed. Your previous part marks remain recorded.");
  }
  function persist(){
    const ok=typeof onChange==="function"?onChange({...state}):true;
    if(ok===false)restoreMarking();
    else lastSaved=snapshot();
    saveStatus.textContent=ok===false
      ?"Could not save this change. Check browser storage and export a backup."
      :"Your choices and mark are saved on this device.";
    saveStatus.classList.toggle("save-error",ok===false);
    return ok;
  }
  function updateCompletion(message=""){
    const finished=isQuestionFinished(state,question.marks);
    badge.dataset.finished=String(finished);
    badge.textContent=finished?"✓ Finished":"○ Not yet finished";
    clear.disabled=!finished;
    markMessage.classList.remove("mark-error");
    markMessage.textContent=message||(finished
      ?"Mark recorded: "+state.score+" out of "+question.marks+". This question is finished."
      :"No mark entered yet. This question is still in progress.");
    if(typeof onCompletionChange==="function")onCompletionChange(finished);
  }
  const review=root.querySelector("#mark-view-solution");
  review.addEventListener("click",()=>{
    const solution=root.ownerDocument.querySelector("#solution-box");
    const toggle=root.ownerDocument.querySelector("#solution-toggle");
    if(solution?.hidden && toggle)toggle.click();
    if(solution && !solution.hidden){
      solution.scrollIntoView?.({block:"start",behavior:"smooth"});
      review.textContent="View worked solution again ↑";
    }
  });
  root.querySelectorAll("[data-attempt-support]").forEach(button=>{
    button.addEventListener("click",()=>{
      state.status=button.dataset.attemptSupport;
      root.querySelectorAll("[data-attempt-support]").forEach(choice=>{
        choice.setAttribute("aria-pressed",String(choice===button));
      });
      persist();
    });
  });
  const detail=root.querySelector("#mark-by-parts");
  const partInputs=[...root.querySelectorAll("[data-part-mark]")];
  const detailSummary=root.querySelector("#detail-part-summary");
  const detailInfo=root.querySelector("#detail-part-info");

  function replaceMarkState(next){
    for(const key of ["score","scoreSource","partMarks"])delete state[key];
    for(const key of ["score","scoreSource","partMarks"])
      if(Object.prototype.hasOwnProperty.call(next,key))state[key]=next[key];
  }
  function refreshDetailed(message=""){
    if(!detail)return;
    const result=marksBreakdown(question,state.partMarks);
    const derived=state.scoreSource==="parts";
    score.readOnly=derived||detail.open;
    score.setAttribute("aria-readonly",String(score.readOnly));
    if(derived)score.title="This total is calculated from the individual parts. Edit those parts or clear the breakdown.";
    else if(detail.open)score.title="Close detailed marking to edit the overall total.";
    else score.removeAttribute("title");
    if(detailSummary)
      detailSummary.textContent=result.entered+" / "+result.count+" parts marked · subtotal "+result.subtotal+" / "+question.marks;
    if(detailInfo){
      detailInfo.textContent=message||
        (result.complete&&derived?"All parts marked. The total has been calculated automatically.":
         isQuestionFinished(state,question.marks)&&!derived
          ?"Your previous overall mark stays recorded until you finish the part breakdown."
          :"Fill in every part (including 0s) to calculate a total and finish.");
    }
  }
  function refreshMark(message="",invalid=false){
    const finished=isQuestionFinished(state,question.marks);
    score.value=finished?String(state.score):"";
    updateCompletion(message);
    markMessage.classList.toggle("mark-error",invalid);
    refreshDetailed();
  }
  function readMark(){
    if(score.readOnly)return;
    const {record:next,invalid}=applyOverallMark(state,question,score.value);
    replaceMarkState(next);
    // A manual total deliberately supersedes partial marks.
    for(const input of partInputs)input.value="";
    if(!persist())return;
    refreshMark(invalid
      ?"Enter a whole number from 0 to "+question.marks+" to finish this question.":"",invalid);
  }
  score.addEventListener("input",readMark);
  score.addEventListener("change",readMark);

  for(const input of partInputs){
    input.addEventListener("input",()=>{
      const key=input.dataset.partMark;
      const {record:next,summary,invalid}=applyPartMark(state,question,key,input.value);
      replaceMarkState(next);
      input.setAttribute("aria-invalid",String(invalid));
      if(!persist())return;
      const message=invalid
        ?"Enter a whole number between 0 and "+input.max+" for part ("+key+")."
        :summary.complete
          ?"All parts marked. Total: "+summary.subtotal+" out of "+question.marks+". Question finished."
          :summary.entered+" of "+summary.count+" parts marked. Finish every part to calculate the total."+
            (isQuestionFinished(state,question.marks)&&state.scoreSource!=="parts"?" Your existing overall mark remains recorded until this breakdown is complete.":"");
      refreshMark(
        invalid?message:
        summary.complete?"All parts marked. The question is finished.":"",
        invalid
      );
      if(detailInfo)detailInfo.textContent=message;
      if(invalid&&detailInfo)detailInfo.classList.add("mark-error");
      else detailInfo?.classList.remove("mark-error");
    });
  }
  detail?.addEventListener("toggle",()=>refreshDetailed());
  detail?.querySelector("#clear-part-breakdown")?.addEventListener("click",()=>{
    const next=clearBreakdown(state);
    replaceMarkState(next);
    for(const input of partInputs){
      input.value="";
      input.removeAttribute("aria-invalid");
    }
    if(!persist())return;
    refreshMark();
  });
  clear.addEventListener("click",()=>{
    replaceMarkState(clearAllMarks(state));
    score.value="";
    for(const input of partInputs){
      input.value="";
      input.removeAttribute("aria-invalid");
    }
    if(!persist())return;
    refreshMark();
    if(detail&&!detail.open)score.focus();
    else partInputs[0]?.focus();
  });
  root.querySelector("#self-error").addEventListener("change",event=>{
    state.error=event.target.value;
    persist();
  });
  updateCompletion();
  refreshDetailed();
}
