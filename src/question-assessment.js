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
    +'<p>Complete your attempt first. Then choose how you worked and compare with the full worked solution.</p></div>'
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

  function persist(){
    const ok=typeof onChange==="function"?onChange({...state}):true;
    saveStatus.textContent=ok===false
      ?"Could not save: browser storage may be full."
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
  function readMark(){
    const raw=score.value.trim();
    if(raw===""){
      delete state.score;
      persist();updateCompletion();
      return;
    }
    const value=Number(raw);
    if(!Number.isInteger(value)||value<0||value>question.marks){
      delete state.score;
      persist();
      updateCompletion("Enter a whole number from 0 to "+question.marks+" to finish this question.");
      markMessage.classList.add("mark-error");
      return;
    }
    state.score=value;
    persist();updateCompletion();
  }
  score.addEventListener("input",readMark);
  score.addEventListener("change",readMark);
  clear.addEventListener("click",()=>{
    score.value="";
    delete state.score;
    persist();updateCompletion();
    score.focus();
  });
  root.querySelector("#self-error").addEventListener("change",event=>{
    state.error=event.target.value;
    persist();
  });
  updateCompletion();
}
