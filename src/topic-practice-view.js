import {getSpecTopic,getSpecSkill,STRANDS} from "./data/specification.js";
import {getTopicPracticeSlots,topicPracticeRoute} from "./data/topic-practice/index.js";
import {originalPracticeState,originalPracticeSummary} from "./topic-practice-progress.js";

const escape=value=>String(value??"").replace(/[&<>"']/g,char=>
 ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
const topicHref=(scope,topicId)=>"#/specification/"+scope+"/"+topicId;

/** Three independent AO alternatives to weekly practice with separate attempt states. */
export function renderTopicPracticeSlots(topic,scope="internal",records={}){
 const slots=getTopicPracticeSlots(topic.id,scope);
 if(!slots.length)return "";
 const future=scope==="internal"&&topic.skills.every(skill=>skill.scope!=="internal");
 const ready=slots.filter(slot=>slot.question).length;
 const summary=originalPracticeSummary(records,scope);
 const topicProgress=summary.byTopic[topic.id];
 const title='<div class="spec-section-heading"><div><span class="eyebrow">Extra independent practice</span>'+
 '<h2 id="topic-practice-title">Try a fresh question</h2>'+
 '<p>Three original exam-style questions, separate from weekly practice. Choose a new challenge or continue where you left off.</p>'+
 '</div><span class="topic-practice-count">'+(future?"Year 2 only":
 topicProgress.completed+' / '+ready+' marked')+'</span></div>';
 if(future){
  return '<section class="topic-practice-section" aria-labelledby="topic-practice-title">'+title+
   '<div class="topic-practice-future"><strong>Year 2 topic</strong>'+
   '<p>Moments is part of the Full A Level course, not the internal examination.</p>'+
   '<a class="btn ghost small" href="'+topicHref("full",topic.id)+'">View Full A Level topic →</a></div></section>';
 }
 const cards=slots.map(slot=>{
  const q=slot.question,record=q?records[q.id]||{}:{};
  const progress=q?originalPracticeState(q,record):null;
  const state=progress?.state||"unavailable";
  const label=state==="retry"?"Trying again":state==="marked"?"Marked":
   state==="started"?"In progress":q?"Not started":"Coming soon";
  const action=state==="retry"?"Continue retry →":state==="marked"?"Review or retry →":
   state==="started"?"Continue question →":q?"Try question →":"Not available yet";
  const detail=progress?.complete?
   progress.score+' / '+q.marks+' marks'+(progress.independence?' · '+progress.independence:''):
   q?q.marks+' marks · about '+q.minutes+' min':
    slot.status==="future"?"Year 2 content":"Original question not published";
  const contents='<div class="topic-practice-card-top"><span class="topic-practice-ao">'+slot.id+'</span>'+
   '<span class="topic-practice-state">'+label+'</span></div>'+
   '<h3>'+escape(slot.name)+'</h3><p>'+escape(slot.description)+'</p>'+
   (q?'<div class="topic-practice-question-title">'+escape(q.title)+'</div>':'')+
   '<div class="topic-practice-card-bottom"><span>'+detail+'</span><strong>'+action+'</strong></div>';
  return q?'<a class="topic-practice-card is-ready" data-ao="'+slot.id+
   '" data-progress="'+state+'" href="'+topicPracticeRoute(scope,topic.id,slot.id)+
   '" aria-label="Original '+slot.id+' '+escape(q.title)+', '+label+'">'+contents+'</a>':
   '<div class="topic-practice-card is-planned" data-ao="'+slot.id+'">'+contents+'</div>';
 }).join("");
 return '<section class="topic-practice-section" aria-labelledby="topic-practice-title">'+title+
 '<div class="topic-practice-grid">'+cards+'</div>'+
 '<p class="topic-practice-footnote">'+topicProgress.completed+' marked · '+topicProgress.started+
 ' in progress in this topic. These self-marks do not affect your weekly calendar targets or specification skill accuracy.</p>'+
 '</section>';
}

function questionTable(data){
 if(!data)return "";
 const rows=(data.rows||[]).map(row=>'<tr>'+row.map((value,i)=>
  (i===0?'<th scope="row" class="math">':'<td class="math">')+
  escape(value)+(i===0?'</th>':'</td>')).join('')+'</tr>').join('');
 return '<div class="table-scroll" role="region" aria-label="'+escape(data.caption)+'" tabindex="0">'+
  '<table class="data-table"><caption>'+escape(data.caption)+'</caption><thead><tr>'+
  (data.header||[]).map(value=>'<th scope="col" class="math">'+escape(value)+'</th>').join('')+
  '</tr></thead><tbody>'+rows+'</tbody></table></div>';
}
function skillLinks(question,scope){
 const ids=[...question.primarySkillIds,...question.connectedSkillIds];
 if(!ids.length)return "";
 return '<details class="question-skill-links"><summary>Which specification skills does this practise? <span aria-hidden="true">⌄</span></summary>'+
 '<p>These links are optional: try solving the question before checking its skill tags.</p>'+
 '<div class="question-skill-list">'+ids.map(id=>{
  const skill=getSpecSkill(id);
  if(!skill)return "";
  const role=question.primarySkillIds.includes(id)?"Main":"Connected";
  return '<a href="'+topicHref(scope,skill.topicId)+'/'+escape(id)+'"><span>'+
   role+' skill · '+escape(id)+'</span><strong>'+escape(skill.statement)+'</strong></a>';
 }).join('')+'</div></details>';
}

/**
 * A standalone route that mounts exactly the same working, review and marking
 * components as a weekly study question. No published question means no
 * working pane, hint, solution or mark input can be reached.
 */
export function renderTopicPracticeQuestion({
 scope="internal",topicId="",aoFocus="",question=null,records={}
}={}){
 const topic=getSpecTopic(topicId);
 const valid=scope==="internal"||scope==="full";
 const back=topic?topicHref(valid?scope:"internal",topicId):"#/specification/internal";
 if(!valid||!topic||!["AO1","AO2","AO3"].includes(aoFocus))
  return '<section class="page spec-page"><h1>Question not found</h1>'+
   '<p>This is not a valid specification practice link.</p>'+
   '<a class="btn ghost small" href="#/specification/internal">Back to My Specification →</a></section>';
 if(!question){
  return '<section class="page spec-page topic-practice-empty"><a class="back" href="'+back+
   '">← Back to '+escape(topic.title)+'</a><h1>Original question not yet available</h1>'+
   '<p>There is no published '+aoFocus+' question for this topic and syllabus view yet.</p>'+
   '<a class="btn ghost small" href="'+back+'">Explore topic skills →</a></section>';
 }
 const slots=getTopicPracticeSlots(topicId,scope);
 const progress=records[question.id]||{};
 const attempt=originalPracticeState(question,progress);
 const done=attempt.complete;
 const navigation=slots.map(slot=>
  slot.question?
  '<a class="topic-practice-nav-item'+(slot.id===aoFocus?' is-current':'')+
  '" href="'+topicPracticeRoute(scope,topicId,slot.id)+'"'+
  (slot.id===aoFocus?' aria-current="page"':'')+'><strong>'+slot.id+'</strong><span>'+
  escape(slot.name)+'</span><small>'+(
   originalPracticeState(slot.question,records[slot.question.id]||{}).complete?"✓ Marked":
   originalPracticeState(slot.question,records[slot.question.id]||{}).state==="started"?"In progress":
   "Not started")+'</small></a>':
  '<span class="topic-practice-nav-item is-unavailable"><strong>'+slot.id+
  '</strong><span>'+ (slot.status==="future"?"Full course":"Coming soon")+
  '</span></span>').join('');
 const parts=question.parts.map((part,i)=>
  '<li><span class="letter">('+"abcdefghijklmnopqrstuvwxyz"[i]+')</span>'+
  '<div class="question-part math">'+escape(part[0])+'</div>'+
  '<span class="marks">['+part[1]+']</span></li>').join('');
 return '<section class="page study-page topic-practice-page">'+
  '<header class="study-header"><a class="study-back" href="'+back+'">← TOPIC '+escape(topic.id)+'</a>'+
  '<div class="study-header-title"><span class="eyebrow">FRESH PRACTICE / '+escape(STRANDS[topic.strand].name)+' / '+aoFocus+'</span>'+
  '<h1>'+escape(topic.title)+'</h1></div>'+
  '<div class="study-header-progress"><strong>'+question.marks+'</strong><small>AVAILABLE MARKS</small></div></header>'+
  '<div class="topic-practice-context">An original '+aoFocus+'-focused question, separate from your weekly practice.'+
  (done?' Latest marked attempt: '+attempt.score+' / '+question.marks+
   (attempt.retrying?' (new attempt in progress).':'.'):attempt.state==="started"?
   ' Your unmarked work is saved on this device.':'')+'</div>'+
  '<div class="study-layout study-workbench">'+
  '<nav class="study-question-toolbar topic-practice-nav" aria-label="Fresh topic practice by assessment objective">'+navigation+'</nav>'+
  '<nav class="study-mobile-tabs" role="tablist" aria-label="Study view" hidden>'+
  '<button type="button" id="study-mobile-question" class="study-mobile-tab is-active" role="tab" aria-controls="study-question-pane" aria-selected="true" tabindex="0">Question</button>'+
  '<button type="button" id="study-mobile-work" class="study-mobile-tab" role="tab" aria-controls="study-panel-work" aria-selected="false" tabindex="-1">My working</button>'+
  '<button type="button" id="study-mobile-review" class="study-mobile-tab" role="tab" aria-controls="study-panel-review" aria-selected="false" tabindex="-1">Check &amp; mark</button></nav>'+
  '<article class="paper exam-sheet" aria-labelledby="active-question-title"><div class="study-answer-layout">'+
  '<section id="study-question-pane" class="study-question-pane" role="region" tabindex="0" aria-label="Question prompt">'+
  '<div class="exam-sheet-topline"><span class="exam-question-number">'+escape(question.id)+'</span>'+
  '<span class="exam-sheet-points">'+question.marks+' MARKS</span>'+
  '<span class="exam-sheet-time">ABOUT '+question.minutes+' MIN</span></div>'+
  '<div class="exam-sheet-title"><span class="exam-sheet-code">ORIGINAL / '+aoFocus+'</span>'+
  '<h2 id="active-question-title">'+escape(question.title)+'</h2></div>'+
  '<p class="stem math">'+escape(question.stem)+'</p>'+questionTable(question.table)+
  '<ol class="parts">'+parts+'</ol></section>'+
  '<section id="study-writing-pane" class="study-writing-pane" role="region" tabindex="0" aria-label="Working and review">'+
  '<div class="study-answer-modes" role="tablist" aria-label="Question workspace">'+
  '<button type="button" id="study-tab-work" class="study-answer-mode is-active" role="tab" aria-controls="study-panel-work" aria-selected="true" tabindex="0">My working</button>'+
  '<button type="button" id="study-tab-review" class="study-answer-mode" role="tab" aria-controls="study-panel-review" aria-selected="false" tabindex="-1">Check &amp; mark</button></div>'+
  '<section id="study-panel-work" class="study-work-panel" role="tabpanel" aria-labelledby="study-tab-work">'+
  '<div id="question-working-space"></div>'+
  '<div class="study-hint-toolbar"><button class="btn ghost small" type="button" id="hint-toggle" aria-expanded="false" aria-controls="hint-box">Show first-step hint</button></div>'+
  '<div id="hint-box" hidden class="helper"><h3>First-step hint</h3><p class="math">'+escape(question.hint)+'</p></div></section>'+
  '<section id="study-panel-review" class="study-check-panel" role="tabpanel" aria-labelledby="study-tab-review" hidden>'+
  '<div class="study-solution-area" role="region" tabindex="0" aria-label="Worked solution">'+
  '<div class="study-solution-toolbar"><strong>Worked solution</strong>'+
  '<button type="button" class="btn ghost small" id="solution-toggle" aria-expanded="false" aria-controls="solution-box">Show solution</button></div>'+
  '<div id="solution-box" class="helper solution" hidden><ol>'+
  question.steps.map(step=>'<li class="math">'+escape(step)+'</li>').join('')+'</ol>'+
  '<p class="math"><strong>Answer:</strong> '+escape(question.answer)+'</p>'+
  '<details class="study-solution-notes"><summary>Misconception &amp; reflection</summary>'+
  '<p><strong>Common misconception:</strong> '+escape(question.misconception)+'</p>'+
  '<p><strong>Reflect:</strong> '+escape(question.reflection)+'</p></details></div></div>'+
  '<div class="study-marking-dock" role="region" tabindex="0" aria-label="Mark your attempt"><div id="question-assessment"></div></div>'+
  '</section></section></div>'+
  '<section class="study-review-and-more" aria-label="Additional review tools">'+
  '<div id="attempt-history-root"></div>'+skillLinks(question,scope)+
  '<p class="topic-practice-footnote"><a href="'+back+'">← Return to '+escape(topic.title)+
  '</a> · This question does not count towards the ten-week calendar targets.</p></section>'+
  '</article></div></section>';
}

/** A separate progress report on the My Specification overview. */
export function renderOriginalPracticeOverview(scope="internal",records={}){
 const stats=originalPracticeSummary(records,scope);
 const rows=["AO1","AO2","AO3"].map(id=>{
  const part=stats.perAO[id];
  const percentage=part.total?Math.round(100*part.completed/part.total):0;
  return '<div class="topic-practice-metric">'+
   '<div class="topic-practice-metric-top"><strong>'+id+'</strong><span>'+
   part.completed+' / '+part.total+' marked</span></div>'+
   '<div class="topic-practice-meter" role="progressbar" aria-label="'+id+' marked questions" '+
   'aria-valuemin="0" aria-valuemax="'+part.total+'" aria-valuenow="'+part.completed+'">'+
   '<span style="width:'+percentage+'%"></span></div></div>';
 }).join("");
 const scores=stats.possible?stats.earned+' / '+stats.possible+' marks across marked questions':
  'No answers marked yet';
 return '<section class="topic-practice-overview" aria-labelledby="topic-practice-overview-heading">'+
  '<div class="topic-practice-overview-heading"><div><span class="eyebrow">Extra independent practice</span>'+
  '<h2 id="topic-practice-overview-heading">My fresh-question progress</h2>'+
  '<p>See the original AO questions you have marked. These results stay separate from your calendar targets and specification skill accuracy.</p>'+
  '</div><div class="topic-practice-overview-total"><strong>'+stats.completed+
  '<span> / '+stats.total+'</span></strong><small>QUESTIONS MARKED</small></div></div>'+
  '<div class="topic-practice-metrics">'+rows+'</div>'+
  '<p class="topic-practice-overview-foot">'+stats.started+' in progress · '+
  stats.independent+' marked independently · '+scores+
  '. Self-marked results are not predicted grades.</p></section>';
}
