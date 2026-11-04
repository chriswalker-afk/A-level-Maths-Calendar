import {siteConfig} from "./config.js";
import {isWeekReleased} from "./publication.js";
import {programmeOne,programmeTwo} from "./data/programmes.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions,taggedWeek10Questions} from "./data/tagged-questions.js";
import {getSpecSkill} from "./data/specification.js";
import {mountWorkingSpace} from "./working-space.js";
import {isQuestionFinished,mountQuestionAssessment} from "./question-assessment.js";
import {mountSpecification} from "./specification-view.js";
import {calculateSpecificationProgress} from "./specification-analytics.js";
import {renderTopicProgressDashboard} from "./specification-progress-view.js";
import {renderRevisionSuggestions} from "./revision-recommendations-view.js";
import {renderProgressTransfer,mountProgressTransfer} from "./progress-transfer-view.js";
import {startNewAttempt,latestFinishedRecord,hasNewAttemptInProgress} from "./attempt-history.js";
import {mountAttemptHistory} from "./attempt-history-view.js";
import {renderCalendarHome,firstWeekQuestionRoute,adjacentQuestionRoute,renderSectionNavigation,renderQuestionIndex,STUDY_SEQUENCE} from "./calendar-view.js";
import {mockPaperForSection,mockTimerInfo,mockTimerUpdate,formatMockClock} from "./mock-week.js";
import {renderMockPaperBanner,renderMockReview} from "./mock-week-view.js";
import {mountStudyReviewModes} from "./study-review-modes.js";

const $=s=>document.querySelector(s);
const el=$('#app');
const sections={R:'Quick retrieval',P:'Connected problems',M:'Modelling & reasoning',A:'Year 1 Applied',T:'Timed mixed set',X:'Extension / repair'};
const essentialSections=new Set(['R','P','M','A']);
const allQuestions={1:taggedWeek01Questions,2:taggedWeek02Questions,3:taggedWeek03Questions,4:taggedWeek04Questions,5:taggedWeek05Questions,6:taggedWeek06Questions,7:taggedWeek07Questions,8:taggedWeek08Questions,9:taggedWeek09Questions,10:taggedWeek10Questions};
let mockClockId=null;
let disposeWorkspace=null;
let disposeStudyModes=null;
let disposeSpecification=null;
let disposeHistory=null;
let disposeTransfer=null;
let importNotice="";
const storageKey=siteConfig.storageKey;
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function read(){try{const s=JSON.parse(localStorage.getItem(storageKey)||'{}');return s&&typeof s==='object'?s:{}}catch{return {}}}
let saved=read();
function store(){try{localStorage.setItem(storageKey,JSON.stringify(saved));return true}catch{return false}}
function completed(q){return isQuestionFinished(saved[q.id],q.marks)}
function everCompleted(q){return latestFinishedRecord(q,saved[q.id]||{})!==null}
function lastStatus(q){return latestFinishedRecord(q,saved[q.id]||{})?.status||""}
function status(q){return saved[q.id]?.status||''}
function countDone(){return releasedQuestions().filter(q=>essentialSections.has(q.section)&&everCompleted(q)).length}
function coreQuestions(week){return (allQuestions[week]||[]).filter(q=>essentialSections.has(q.section))}
function releasedQuestions(){return Object.entries(allQuestions).flatMap(([week,qs])=>released(Number(week))?qs:[])}
function released(week){return isWeekReleased(week,allQuestions[week]||[]);}
function heading(t,subtitle){return '<div class="section-heading"><div>'+(subtitle?'<span class="eyebrow">'+esc(subtitle)+'</span>':'')+'<h2>'+esc(t)+'</h2></div></div>'}
function mathHtml(t){return '<span class="math">'+esc(t)+'</span>'}
function relatedSkillsMarkup(q){
 const all=[...q.primarySkillIds.map(id=>({id,role:"Main skill"})),
  ...q.connectedSkillIds.map(id=>({id,role:"Connected skill"}))];
 if(!all.length)return "";
 return '<details class="question-skill-links"><summary>Which specification skills does this question practise? <span aria-hidden="true">⌄</span></summary>'+
 '<p>Reveal these links after your attempt to avoid giving away the method. Primary skills are used for detailed mark reporting; connected skills indicate useful cross-topic practice.</p>'+
 '<div class="question-skill-list">'+all.map(({id,role})=>{
   const skill=getSpecSkill(id);
   if(!skill)return "";
   return '<a href="#/specification/internal/'+skill.topicId+'/'+id+'"><span>'+esc(role)+' · '+id+'</span><strong>'+esc(skill.statement)+'</strong></a>';
 }).join('')+'</div></details>';
}
function questionTable(data){if(!data)return '';return '<div class="table-scroll" role="region" aria-label="'+esc(data.caption)+'" tabindex="0"><table class="data-table"><caption>'+esc(data.caption)+'</caption><thead><tr>'+data.header.map(v=>'<th scope="col">'+mathHtml(v)+'</th>').join('')+'</tr></thead><tbody>'+data.rows.map(row=>'<tr>'+row.map((v,i)=>i===0?'<th scope="row">'+mathHtml(v)+'</th>':'<td>'+mathHtml(v)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>'}
function typeset(){const jax=window.MathJax;if(typeof jax?.typesetPromise==='function'){jax.typesetPromise([el]).catch(err=>console.warn('Math typesetting failed',err));}else if(jax?.startup?.promise){jax.startup.promise.then(()=>jax.typesetPromise?.([el])).catch(err=>console.warn('Math typesetting unavailable',err));}}
function navigate(route){if(location.hash!==route)location.hash=route;else render();}
function buttonLink(href,label,cls=''){return '<a href="'+esc(href)+'" class="btn '+cls+'">'+esc(label)+'</a>'}
function weekStatus(w){
 const qs=allQuestions[w.number]||[];
 const core=coreQuestions(w.number);
 return {
  released:released(w.number),
  done:core.filter(everCompleted).length,
  total:core.length,
  url:firstWeekQuestionRoute(w.number,qs,everCompleted,
    q=>hasNewAttemptInProgress(q,saved[q.id]||{}))
 };
}
function overview(){
 return renderCalendarHome({weeks:programmeOne.weeks,
   getStatus:weekStatus,totalCompleted:countDone()});
}
function calendar(){return overview();}
function weekPage(n){
 const w=programmeOne.weeks[n-1];
 if(!w)return notFound();
 if(released(n))return studyPage(n,"R",0);
 return '<section class="page locked-week-page"><a class="back" href="#/calendar">← Study calendar</a>'+
  '<div class="locked-week-notice"><span class="eyebrow">WEEK '+String(n).padStart(2,"0")+' · NOT RELEASED</span>'+
  '<h1>'+esc(w.title)+'</h1>'+
  '<p>Questions for this week are not available yet.</p>'+
  '<div class="locked-week-topics"><div><strong>PURE</strong><p>'+esc(w.pure)+'</p></div>'+
  '<div><strong>APPLIED</strong><p>'+esc(w.applied)+'</p></div></div>'+
  buttonLink("#/calendar","Return to calendar","ghost")+'</div></section>';
}
function studyPage(n,sec,idx){
 if(!released(n))return weekPage(n);
 const week=programmeOne.weeks[n-1];
 const all=allQuestions[n]||[];
 if(!all.some(q=>q.section===sec))sec=STUDY_SEQUENCE.find(code=>all.some(q=>q.section===code))||"R";
 const qs=all.filter(q=>q.section===sec);
 if(!qs.length)return '<section class="page"><a class="back" href="#/calendar">← Calendar</a><h1>No questions published</h1></section>';
 const i=Math.max(0,Math.min(Number(idx)||0,qs.length-1)),q=qs[i];
 const prev=adjacentQuestionRoute(n,all,sec,i,-1);
 const next=adjacentQuestionRoute(n,all,sec,i,1);
 const nextSection=next?.split("/")[3]!==sec;
 const previousSection=prev?.split("/")[3]!==sec;
 const mock=n===10&&Boolean(mockPaperForSection(sec));
 const timed=mock&&mockTimerInfo(saved.reflections,sec).active;
 const sectionNav=renderSectionNavigation({week:n,section:sec,questions:all,
   isFinished:timed?()=>false:everCompleted,
   labels:mock?{P:"Pure mock · 100 marks",A:"Applied mini-mock · 50 marks"}:undefined});
 const questionNav=renderQuestionIndex({section:sec,questions:qs,index:i,isFinished:timed?()=>false:completed,
   isRetrying:item=>hasNewAttemptInProgress(item,saved[item.id]||{})});
 const marked=all.filter(everCompleted).length;
 return '<section class="page study-page'+(mock?' study-page-mock':'')+'">'+
 '<header class="study-header"><a class="study-back" href="#/calendar">← CALENDAR</a>'+
 '<div class="study-header-title"><span class="eyebrow">WEEK '+String(n).padStart(2,"0")+(mock?' / ORIGINAL MOCK':' / INTERNAL EXAM')+'</span>'+
 '<h1>'+esc(week.title)+'</h1></div>'+
 '<div class="study-header-progress"><strong>'+(timed?'—':marked)+'<span>/'+all.length+'</span></strong>'+
 '<small>'+(timed?'MARKING HIDDEN':'QUESTIONS MARKED')+'</small></div></header>'+
 (mock?renderMockPaperBanner({section:sec,questions:all,records:saved,reflections:saved.reflections}):"")+
 sectionNav+
 '<div class="study-layout study-workbench">'+
 '<div class="study-question-toolbar" role="group" aria-label="Question navigation">'+
 '<button type="button" class="btn ghost small study-step-nav" id="previous" aria-label="'+(previousSection?'Previous section':'Previous question')+'"'+
  (prev?' data-target-route="'+prev+'"':' disabled')+'>← <span>Previous</span></button>'+
 questionNav+
 '<button type="button" class="btn small study-step-nav" id="next" aria-label="'+(nextSection?'Next section':'Next question')+'"'+
  (next?' data-target-route="'+next+'"':' disabled')+'><span>Next</span> →</button></div>'+
 '<nav class="study-mobile-tabs" role="tablist" aria-label="Study view" hidden>'+
 '<button type="button" id="study-mobile-question" class="study-mobile-tab is-active" role="tab" aria-controls="study-question-pane" aria-selected="true" tabindex="0">Question</button>'+
 '<button type="button" id="study-mobile-work" class="study-mobile-tab" role="tab" aria-controls="study-panel-work" aria-selected="false" tabindex="-1">My working</button>'+
 '<button type="button" id="study-mobile-review" class="study-mobile-tab" role="tab" aria-selected="false" tabindex="-1"'+
 (timed?' disabled aria-disabled="true" title="Finish the timed paper to unlock checking"':' aria-controls="study-panel-review"')+
 '>Check &amp; mark</button></nav>'+
 '<article class="paper exam-sheet" aria-labelledby="active-question-title">'+
 '<div class="study-answer-layout">'+
 '<section id="study-question-pane" class="study-question-pane" role="region" tabindex="0" aria-label="Question prompt">'+
 '<div class="exam-sheet-topline"><span class="exam-question-number">QUESTION '+String(i+1).padStart(2,"0")+
 ' / '+String(qs.length).padStart(2,"0")+'</span>'+
 '<span class="exam-sheet-points">'+q.marks+' MARKS</span>'+
 '<span class="exam-sheet-time">ABOUT '+q.minutes+' MIN</span></div>'+
 '<div class="exam-sheet-title"><span class="exam-sheet-code">'+esc(q.id)+'</span>'+
 '<h2 id="active-question-title" aria-label="Question '+esc(q.id)+', '+q.marks+' marks: '+esc(q.title)+'">'+esc(q.title)+'</h2></div>'+
 '<p class="stem math">'+mathHtml(q.stem)+'</p>'+
 questionTable(q.table)+
 '<ol class="parts">'+q.parts.map((part,j)=>
  '<li><span class="letter">('+'abcdefghijklmnopqrstuvwxyz'[j]+')</span>'+
  '<div class="question-part math">'+mathHtml(part[0])+'</div>'+
  '<span class="marks">['+part[1]+']</span></li>').join('')+'</ol>'+
 '</section><section id="study-writing-pane" class="study-writing-pane" role="region" tabindex="0" aria-label="Working and review">'+
 '<div class="study-answer-modes" role="tablist" aria-label="Question workspace">'+
 '<button type="button" id="study-tab-work" class="study-answer-mode is-active" role="tab" aria-controls="study-panel-work" aria-selected="true" tabindex="0">My working</button>'+
 '<button type="button" id="study-tab-review" class="study-answer-mode" role="tab" aria-selected="false" tabindex="-1"'+
 (timed?' disabled aria-disabled="true" title="Finish the timed paper before checking"':' aria-controls="study-panel-review"')+
 '>Check &amp; mark</button></div>'+
 '<section id="study-panel-work" class="study-work-panel" role="tabpanel" aria-labelledby="study-tab-work">'+
 '<div id="question-working-space"></div>'+
 (timed?'<div class="mock-exam-lock" role="note"><strong>Exam conditions are active.</strong><p>Hints, worked solutions and self-marking unlock when you finish the timed paper. Your working continues to save.</p></div>':
 '<div class="study-hint-toolbar"><button class="btn ghost small" type="button" id="hint-toggle" aria-expanded="false" aria-controls="hint-box">Show first-step hint</button></div>'+
 '<div id="hint-box" hidden class="helper"><h3>First-step hint</h3><p class="math">'+mathHtml(q.hint)+'</p></div>')+
 '</section>'+
 (timed?'':'<section id="study-panel-review" class="study-check-panel" role="tabpanel" aria-labelledby="study-tab-review" hidden>'+
 '<div class="study-solution-area" role="region" tabindex="0" aria-label="Worked solution">'+
 '<div class="study-solution-toolbar"><strong>Worked solution</strong>'+
 '<button type="button" class="btn ghost small" id="solution-toggle" aria-expanded="false" aria-controls="solution-box">Show solution</button></div>'+
 '<div id="solution-box" class="helper solution" hidden><ol>'+
 q.steps.map(step=>'<li class="math">'+mathHtml(step)+'</li>').join('')+'</ol>'+
 '<p class="math"><strong>Answer:</strong> '+mathHtml(q.answer)+'</p>'+
 '<details class="study-solution-notes"><summary>Misconception &amp; reflection</summary>'+
 '<p><strong>Common misconception:</strong> '+esc(q.misconception)+'</p>'+
 '<p><strong>Reflect:</strong> '+esc(q.reflection)+'</p></details></div></div>'+
 '<div class="study-marking-dock" role="region" tabindex="0" aria-label="Mark your attempt">'+
 '<div id="question-assessment"></div></div></section>')+
 '</section></div>'+
 (timed?'':'<section class="study-review-and-more" aria-label="Additional review tools">'+
 '<div id="attempt-history-root"></div>'+relatedSkillsMarkup(q)+'</section>')+
 '</article></div></section>';
}
function progressPage(scope="internal",strand="all"){
 const published=releasedQuestions();
 const report=calculateSpecificationProgress({questions:published,records:saved,scope});
 const qs=published,core=published.filter(q=>essentialSections.has(q.section)),
  attempts=qs.filter(everCompleted),coreAttempts=core.filter(everCompleted);
 const scored=attempts.map(q=>({q,mark:latestFinishedRecord(q,saved[q.id]||{})}))
  .filter(item=>Number.isInteger(item.mark?.score));
 const total=scored.reduce((sum,item)=>sum+item.mark.score,0),
  available=scored.reduce((sum,item)=>sum+item.q.marks,0);
 const weeklyRecords=programmeOne.weeks.filter(w=>released(w.number)).map(w=>{
  const items=allQuestions[w.number]||[];
  const marked=items.filter(everCompleted).length;
  const coreItems=items.filter(q=>essentialSections.has(q.section));
  return '<section class="weekly-progress-group" aria-label="Week '+w.number+' question record">'+
   '<div class="weekly-progress-heading"><div><span class="eyebrow">WEEK '+String(w.number).padStart(2,"0")+
   ' / '+marked+' OF '+items.length+' MARKED</span><h3>'+esc(w.title)+'</h3></div>'+
   '<span class="weekly-progress-core">'+coreItems.filter(everCompleted).length+'/'+coreItems.length+' ESSENTIAL</span></div>'+
   '<div class="progress-grid">'+Object.entries(sections).map(([code,label])=>{
    const set=items.filter(q=>q.section===code),done=set.filter(everCompleted).length;
    if(!set.length)return '';
    return '<div class="progress-item"><span class="eyebrow">'+code+' · '+esc(label)+'</span>'+
     '<h3>'+done+' / '+set.length+' questions marked</h3>'+
     '<div class="meter" aria-label="'+done+' of '+set.length+' finished"><span style="width:'+
       (100*done/set.length)+'%"></span></div>'+
     '<p class="weekly-progress-type">'+(essentialSections.has(code)?'Essential':'Recommended or optional')+'</p>'+
     '<a class="link" href="#/study/'+w.number+'/'+code+'/0">Open Week '+w.number+' practice →</a></div>';
   }).join('')+'</div></section>';
 }).join('');
 return '<section class="page">'+
 '<h1 class="page-title">My progress</h1>'+
 '<p class="intro">Scores and working are saved in this browser. Use a backup to move them to another device.</p>'+
 (importNotice?'<p class="import-notice" role="status">'+esc(importNotice)+'</p>':'')+
 '<div class="metrics"><div class="metric"><span>ESSENTIAL MARKED</span><strong>'+coreAttempts.length+'/'+core.length+'</strong></div>'+
 '<div class="metric"><span>INDEPENDENT</span><strong>'+attempts.filter(q=>lastStatus(q)==='I').length+'</strong></div>'+
 '<div class="metric"><span>WITH HELP</span><strong>'+attempts.filter(q=>lastStatus(q)==='P').length+'</strong></div>'+
 '<div class="metric"><span>CORE REMAINING</span><strong>'+(core.length-coreAttempts.length)+'</strong></div></div>'+
 renderRevisionSuggestions({questions:published,records:saved,report,scope})+
 renderTopicProgressDashboard(report,{scope,strand})+
 heading('Weekly question record')+weeklyRecords+
 heading('Revision notes')+
 '<div class="panel"><div class="reflection-row"><label for="strength">A method I can now use independently</label>'+
 '<textarea id="strength" class="reflection" placeholder="For example: I can justify a tangent using its perpendicular radius.">'+esc(saved.reflections?.strength||'')+'</textarea></div>'+
 '<div class="reflection-row"><label for="repair">My next misconception to repair</label>'+
 '<textarea id="repair" class="reflection" placeholder="Name the exact step to practise…">'+esc(saved.reflections?.repair||'')+'</textarea></div>'+
 '<div class="reflection-row"><label for="strategy">My strategy for an unfamiliar question</label>'+
 '<textarea id="strategy" class="reflection" placeholder="What will you do when you are unsure where to begin?">'+esc(saved.reflections?.strategy||'')+'</textarea></div>'+
 '<p id="reflection-message" class="small muted">Notes save automatically in this browser.</p></div>'+
 '<div class="panel" style="margin-top:16px"><h3>Recorded self-marks</h3><p>'+
 (scored.length?total+' / '+available+' available marks across '+scored.length+' scored questions.':
  'No numerical scores recorded yet. Use the mark scheme to self-award marks after attempting a question.')+
 ' Independence/help records how you worked, not whether your answer was correct.</p></div>'+
 renderProgressTransfer(saved)+'</section>';
}
function guidePage(){
 const expandedPlan=[
  ["01","24 min","Retrieval","10 questions · 20 marks"],
  ["02","84 min","Connected Pure","7 linked problems · 70 marks"],
  ["03","48 min","Modelling & reasoning","3 investigations · 40 marks"],
  ["04","54 min","Year 1 Applied","5 questions · 45 marks"],
  ["05","30 min","Mark, reflect and repair","30-minute core review"],
  ["06","+60 min","Recommended timed practice","40 marks · 48 working + 12 review"],
  ["07","+60 min","Optional A/A* extension","30 marks · 36 working + 24 reflection"]
 ];
 return '<section class="page guide-page"><a class="back" href="#/calendar">← Calendar</a>'+
 '<h1 class="page-title">Study guide</h1>'+
 heading("Expanded Weeks 1–9","175 essential marks · 215 recommended · 245 optional")+
 '<p>These are examination-paced planning targets at approximately 1.2 working minutes per mark, not measured completion times. A four-hour core includes 30 minutes of marking and reflection. The additional hour for each optional pathway also includes review.</p>'+
 '<div class="guide-routine">'+expandedPlan.map(row=>'<div class="guide-routine-row">'+
   '<span class="guide-routine-index">'+row[0]+'</span>'+
   '<strong>'+row[1]+'</strong><span>'+row[2]+'</span><p>'+row[3]+'</p></div>').join('')+'</div>'+
 '<div class="warning" style="margin:19px 0 25px"><strong>Week 10 uses a different format.</strong> The final week has a 100-mark Pure mock (120 minutes), a 50-mark Year 1 Applied mini-mock (60 minutes), and a separate 60-minute marking and repair plan. Its optional timer hides help and marking while active, but never erases work. Start from Week 10 on the calendar.</div>'+
 heading("Using a question")+
 '<div class="guide-instructions">'+
 '<div><b>1</b><strong>Work independently</strong><p>Use Notes, Maths steps or Draw. Work is saved for each question.</p></div>'+
 '<div><b>2</b><strong>Check the solution</strong><p>Use a hint when needed, then compare your working with the mark scheme.</p></div>'+
 '<div><b>3</b><strong>Record your mark</strong><p>Enter an overall mark, or optionally score each part. Even 0 marks counts as finished.</p></div>'+
 '<div><b>4</b><strong>Retry or move on</strong><p>Archived attempts preserve previous working. Use My Progress to find questions to revisit.</p></div></div>'+
 heading("Assessment objectives")+
 '<div class="guide-ao"><div><strong>AO1</strong><p>Recall and carry out mathematical procedures.</p></div>'+
 '<div><strong>AO2</strong><p>Reason, explain, deduce and prove.</p></div>'+
 '<div><strong>AO3</strong><p>Model, solve problems, interpret and evaluate.</p></div></div>'+
 '<div class="warning guide-privacy"><strong>Saved locally.</strong> Marks and working remain in this browser. Use <a href="#/progress">My Progress</a> to download a backup if you change devices.</div></section>';
}
function finalPage(){
 return '<section class="page final-page"><a class="back" href="#/calendar">← Calendar</a>'+
 '<span class="eyebrow">FULL A LEVEL / NOT YET RELEASED</span>'+
 '<h1 class="page-title">Final examination preparation</h1>'+
 '<p class="intro">Planned from 1 February to 16 June 2027. This stage will include Year 2 Statistics and Mechanics. Its questions are not available yet.</p>'+
 heading("Programme phases","20-week plan")+
 '<div class="phases">'+programmeTwo.phases.map(p=>'<div class="phase"><span class="eyebrow">WEEKS '+p.start+'–'+p.end+'</span><h3>'+esc(p.title)+'</h3><p>'+esc(p.theme)+'</p></div>').join('')+'</div>'+
 heading("Exam dates","Pearson 9MA0 · 2027")+
 programmeTwo.exams.map(x=>{const d=new Date(x.date+'T12:00:00Z');const day=d.toLocaleDateString('en-GB',{day:'numeric',month:'short',timeZone:'UTC'});return '<div class="exam"><div class="exam-date"><strong>'+day.split(' ')[0]+'</strong>'+day.split(' ')[1].toUpperCase()+'</div><div><strong>'+esc(x.name)+'</strong><p>'+esc(x.code)+' · Wednesday '+esc(x.date)+' · '+esc(x.session)+' · '+esc(x.duration)+'</p></div></div>'}).join('')+
 '<div class="warning" style="margin-top:18px">Confirm examination start times with your centre in Brunei. Both Pure papers can assess the full Pure syllabus.</div></section>';
}
function notFound(){return '<section class="page"><h1>Page not found</h1>'+buttonLink('#/','Return home')+'</section>'}
function remountHistory(q){
 const mount=el.querySelector("#attempt-history-root");
 if(!mount)return;
 if(disposeHistory){disposeHistory();disposeHistory=null;}
 disposeHistory=mountAttemptHistory(mount,{
  question:q,record:saved[q.id]||{},
  onStart(){
   const previous=saved[q.id]||{};
   const next=startNewAttempt(q,previous);
   saved[q.id]=next;
   if(!store()){saved[q.id]=previous;return false;}
   render();
   return true;
  }
 });
}
function routeInfo(){const path=(location.hash||'#/').slice(1).split('/').filter(Boolean);return path}
function render(){
  if(mockClockId!==null){window.clearInterval(mockClockId);mockClockId=null;}
  if(disposeStudyModes){disposeStudyModes();disposeStudyModes=null;}
  if(disposeWorkspace){disposeWorkspace();disposeWorkspace=null;}
  if(disposeSpecification){disposeSpecification();disposeSpecification=null;}
  if(disposeHistory){disposeHistory();disposeHistory=null;}
  if(disposeTransfer){disposeTransfer();disposeTransfer=null;}
  const p=routeInfo();
  const top=p[0]||"home";
  // Old links to the removed week overview open the exercises immediately.
  if(top==="week"&&released(Number(p[1]))){
    const n=Number(p[1]);
    navigate(firstWeekQuestionRoute(n,allQuestions[n]||[],everCompleted,
      q=>hasNewAttemptInProgress(q,saved[q.id]||{}))||"#/calendar");
    return;
  }
  document.querySelectorAll("[data-nav]").forEach(a=>
    a.classList.toggle("active",a.dataset.nav===(top==="week"||top==="study"||top==="home"||top==="mock-review"?"calendar":top)));
  if(top==="home")el.innerHTML=overview();
  else if(top==="calendar")el.innerHTML=calendar();
  else if(top==="week")el.innerHTML=weekPage(Number(p[1]));
  else if(top==="study")el.innerHTML=studyPage(Number(p[1]),p[2]||"R",p[3]||0);
  else if(top==="mock-review")el.innerHTML=Number(p[1])===10&&released(10)?renderMockReview({questions:allQuestions[10],records:saved,reflections:saved.reflections}):notFound();
  else if(top==="progress")el.innerHTML=progressPage(p[1]||"internal",p[2]||"all");
  else if(top==="specification")disposeSpecification=mountSpecification(el,{scope:p[1]||"internal",topicId:p[2]||null,skillId:p[3]||null,questions:releasedQuestions(),records:saved});
  else if(top==="guide")el.innerHTML=guidePage();
  else if(top==="final")el.innerHTML=finalPage();
  else el.innerHTML=notFound();

  document.title=(top==="home"?"A Level Maths Calendar":
    top==="study"?"Questions":top==="mock-review"?"Mock marking & review":top==="week"?"Weekly questions":top==="specification"?"My Specification":
    top.charAt(0).toUpperCase()+top.slice(1))+" — A Level Maths Calendar";

  if(top==="progress"){
    const mount=el.querySelector("#progress-transfer");
    if(mount)disposeTransfer=mountProgressTransfer(mount,{
      getRecords:()=>saved,
      onImport(records,counts){
        const previous=saved;
        saved=records;
        if(!store()){saved=previous;return false;}
        importNotice="Backup imported: "+counts.added+" new record(s), "+counts.replaced+
          " replaced, "+counts.kept+" kept unchanged, "+counts.removed+" removed.";
        render();
        return true;
      }
    });
    importNotice="";
  }
  if(top==="study"){
    const week=Number(p[1]),section=p[2]||"R",index=Number(p[3]||0);
    const items=(allQuestions[week]||[]).filter(q=>q.section===section);
    const q=items[Math.max(0,Math.min(index,items.length-1))];
    const mount=el.querySelector("#question-working-space");
    if(q&&mount&&released(week)){
      disposeWorkspace=mountWorkingSpace(mount,{
        initial:saved[q.id]?.workspace,
        legacyWorking:saved[q.id]?.working||"",
        questionId:q.id,
        onChange(workspace){
          saved[q.id]??={};
          saved[q.id].workspace=workspace;
          // Preserve the old plain-text field for backwards compatibility.
          saved[q.id].working=workspace.notes;
          return store();
        }
      });
    }
    // Switching panels preserves the mounted working editor and its saved state.
    disposeStudyModes=mountStudyReviewModes(el.querySelector(".study-writing-pane"),{
      questionPane:el.querySelector("#study-question-pane"),
      mobileTabs:el.querySelector(".study-mobile-tabs"),
      onFirstReview(){
        if(el.querySelector("#solution-box")?.hidden)el.querySelector("#solution-toggle")?.click();
      },
      onReturnToWork(){
        // Refresh drawing layout after the hidden canvas becomes visible again.
        window.requestAnimationFrame?.(()=>window.dispatchEvent(new window.Event("resize")));
      }
    });
    const assessment=el.querySelector("#question-assessment");
    if(q&&assessment&&released(week)){
      remountHistory(q);
      mountQuestionAssessment(assessment,{
        question:q,
        compact:true,
        record:saved[q.id]||{},
        onChange(marking){
          const previous=saved[q.id]||{};
          const current={...previous};
          const priorScore=current.score,priorSource=current.scoreSource,
            wasFinished=isQuestionFinished(current,q.marks),
            previousParts=JSON.stringify(current.partMarks||{});
          // Preserve maths lines, drawings and the separate archived attempt history.
          if(marking.status==="I"||marking.status==="P")current.status=marking.status;
          if(typeof marking.error==="string")current.error=marking.error;
          for(const key of ["score","scoreSource","partMarks"]){
            if(Object.hasOwn(marking,key))current[key]=marking[key];
            else delete current[key];
          }
          if(isQuestionFinished(current,q.marks)&&
             (!wasFinished||priorScore!==current.score||priorSource!==current.scoreSource||
              previousParts!==JSON.stringify(current.partMarks||{}))){
            current.lastMarkedAt=new Date().toISOString();
          }
          saved[q.id]=current;
          const ok=store();
          if(!ok){saved[q.id]=previous;return false;}
          remountHistory(q);
          return true;
        },
        onCompletionChange(finished){
          const jump=el.querySelector('[data-jump="'+Math.max(0,Math.min(index,items.length-1))+'"]');
          const indicator=jump?.querySelector(".q-complete-indicator");
          if(indicator)indicator.hidden=!finished;
          jump?.classList.toggle("finished",finished);
        }
      });
    }
  }
  if(top==="study"){
    // On small screens the category/question strips scroll sideways. Keep
    // the current choice visible when entering a linked subsection.
    for(const [container,selected] of [
      [".study-section-strip",".study-section-link.is-selected"],
      [".question-index .question-links",".question-index-item.active"]
    ]){
      const rail=el.querySelector(container),active=rail?.querySelector(selected);
      if(rail&&active&&rail.scrollWidth>rail.clientWidth){
        const offset=active.offsetLeft-rail.offsetLeft;
        rail.scrollLeft=Math.max(0,offset-(rail.clientWidth-active.clientWidth)/2);
      }
    }
  }
  if(top==="study"&&Number(p[1])===10){
    const section=p[2];
    const timer=mockPaperForSection(section)?mockTimerInfo(saved.reflections,section):null;
    const clock=el.querySelector("#mock-clock");
    if(timer?.active&&clock){
      const updateClock=()=>{
        const info=mockTimerInfo(saved.reflections,section);
        clock.textContent=formatMockClock(info.remainingSeconds);
        clock.classList.toggle("mock-clock-expired",info.overtime);
        clock.setAttribute("aria-label",info.overtime?"Allocated time elapsed":"Time remaining");
      };
      updateClock();
      mockClockId=window.setInterval(updateClock,1000);
    }
  }
  typeset();
}
window.addEventListener('hashchange',()=>{
  render();
  window.scrollTo({top:0,behavior:'instant'});
  // A route change is also an accessibility landmark change.
  const title=el.querySelector(routeInfo()[0]==='study'?'#active-question-title':'h1');
  if(title){title.setAttribute('tabindex','-1');title.focus({preventScroll:true});}
});
document.addEventListener('click',event=>{
 const timedPaper=event.target.closest("button[data-mock-action]");
 if(timedPaper){
   const section=timedPaper.dataset.mockSection;
   if(released(10)&&mockPaperForSection(section)){
     const previous=saved.reflections;
     try{
       saved.reflections=mockTimerUpdate(saved.reflections||{},section,timedPaper.dataset.mockAction);
       if(!store()){saved.reflections=previous;return;}
       render();
     }catch(err){saved.reflections=previous;console.warn("Unable to change mock sitting",err);}
   }
   return;
 }
 const week=event.target.closest('button[data-week]');if(week){navigate(week.dataset.destination||'#/study/'+week.dataset.week+'/R/0');return}
 const section=event.target.closest('[data-section]');if(section){navigate('#/study/'+section.dataset.week+'/'+section.dataset.section+'/0');return}
 const jump=event.target.closest('[data-jump]');if(jump){const p=routeInfo();navigate('#/study/'+p[1]+'/'+p[2]+'/'+jump.dataset.jump);return}
 const hint=event.target.closest('#hint-toggle');if(hint){const box=$('#hint-box');box.hidden=!box.hidden;hint.setAttribute('aria-expanded',String(!box.hidden));hint.textContent=box.hidden?'Show first-step hint':'Hide first-step hint';if(!box.hidden){typeset();const p=routeInfo(),q=(allQuestions[Number(p[1])]||[]).filter(q=>q.section===p[2])[Number(p[3])||0];if(q){saved[q.id]??={};saved[q.id].hintSeen=true;store()}}return}
 const solution=event.target.closest('#solution-toggle');if(solution){const box=$('#solution-box');box.hidden=!box.hidden;solution.setAttribute('aria-expanded',String(!box.hidden));solution.textContent=box.hidden?'Show worked solution':'Hide worked solution';if(!box.hidden)typeset();return}
 const prev=event.target.closest('#previous,#next');if(prev&&!prev.disabled){const destination=prev.dataset.targetRoute;if(destination)navigate(destination);return;}
});
document.addEventListener('input',event=>{
 const note=event.target.dataset?.mockNote;
 if(released(10)&&["firstError","repairMethod","reattemptPlan"].includes(note)){
   saved.reflections??={};saved.reflections.week10??={};saved.reflections.week10.notes??={};
   saved.reflections.week10.notes[note]=event.target.value;
   const ok=store(),message=$('#mock-review-save');
   if(message)message.textContent=ok?"Review notes saved to this browser.":"Could not save these notes. Check browser storage and export a backup.";
   return;
 }
 if(['strength','repair','strategy'].includes(event.target.id)){saved.reflections??={};saved.reflections[event.target.id]=event.target.value;store();const msg=$('#reflection-message');if(msg)msg.textContent='Notes saved on this device.'}
});
render();
