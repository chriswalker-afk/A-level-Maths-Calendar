import {siteConfig} from "./config.js";
import {programmeOne,programmeTwo} from "./data/programmes.js";
import {taggedWeek01Questions} from "./data/tagged-questions.js";
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

const $=s=>document.querySelector(s);
const el=$('#app');
const sections={R:'Quick retrieval',P:'Connected problems',M:'Modelling & reasoning',A:'Year 1 Applied',T:'Timed mixed set',X:'Extension / repair'};
const target={R:10,P:3,M:2,A:3,T:3,X:1};
const essentialSections=new Set(['R','P','M','A']);
const studyTimes={R:'30 min',P:'70 min',M:'70 min',A:'50 min',T:'45 min + 15 min marking',X:'40 min + 20 min review'};
const allQuestions={1:taggedWeek01Questions};
let disposeWorkspace=null;
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
function countDone(){return Object.values(allQuestions).flat().filter(q=>essentialSections.has(q.section)&&everCompleted(q)).length}
function coreQuestions(week){return (allQuestions[week]||[]).filter(q=>essentialSections.has(q.section))}
function releasedQuestions(){return Object.entries(allQuestions).flatMap(([week,qs])=>released(Number(week))?qs:[])}
function released(week){const c=siteConfig.stage1;const meta=programmeOne.weeks[week-1];if(!meta?.hasPublishedContent||!allQuestions[week]?.length)return false;if(c.releaseMode==='manual')return week<=c.releasedWeeks;if(c.releaseMode==='scheduled'&&c.startDate){const from=new Date(c.startDate+'T00:00:00+08:00').getTime();const now=new Date(new Date().toLocaleString('en-US',{timeZone:siteConfig.timezone})).getTime();return now>=from+(week-1)*7*86400000}return false}
function heading(t,subtitle){return '<div class="section-heading"><div><span class="eyebrow">'+esc(subtitle||'Programme one')+'</span><h2>'+esc(t)+'</h2></div></div>'}
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
 const sectionNav=renderSectionNavigation({week:n,section:sec,questions:all,isFinished:everCompleted});
 const questionNav=renderQuestionIndex({section:sec,questions:qs,index:i,isFinished:completed,
   isRetrying:item=>hasNewAttemptInProgress(item,saved[item.id]||{})});
 const marked=all.filter(everCompleted).length;
 return '<section class="page study-page">'+
 '<header class="study-header"><a class="study-back" href="#/calendar">← CALENDAR</a>'+
 '<div class="study-header-title"><span class="eyebrow">WEEK '+String(n).padStart(2,"0")+' / INTERNAL EXAM</span>'+
 '<h1>'+esc(week.title)+'</h1></div>'+
 '<div class="study-header-progress"><strong>'+marked+'<span>/'+all.length+'</span></strong>'+
 '<small>QUESTIONS MARKED</small></div></header>'+
 sectionNav+
 '<div class="study-layout study-workbench">'+questionNav+
 '<article class="paper exam-sheet">'+
 '<div class="exam-sheet-topline"><span class="exam-question-number">QUESTION '+String(i+1).padStart(2,"0")+
 ' / '+String(qs.length).padStart(2,"0")+'</span>'+
 '<span class="exam-sheet-points">'+q.marks+' MARKS</span>'+
 '<span class="exam-sheet-time">ABOUT '+q.minutes+' MIN</span></div>'+
 '<div class="exam-sheet-title"><span class="exam-sheet-code">'+esc(q.id)+'</span>'+
 '<h2>'+esc(q.title)+'</h2></div>'+
 '<p class="stem math">'+mathHtml(q.stem)+'</p>'+
 questionTable(q.table)+
 '<ol class="parts">'+q.parts.map((part,j)=>
  '<li><span class="letter">('+'abcdefghijklmnopqrstuvwxyz'[j]+')</span>'+
  '<div class="question-part math">'+mathHtml(part[0])+'</div>'+
  '<span class="marks">['+part[1]+']</span></li>').join('')+'</ol>'+
 '<hr><div id="question-working-space"></div>'+
 '<div class="actions" style="margin-top:15px">'+
 '<button class="btn ghost small" type="button" id="hint-toggle" aria-expanded="false" aria-controls="hint-box">Show first-step hint</button>'+
 '<button class="btn ghost small" type="button" id="solution-toggle" aria-expanded="false" aria-controls="solution-box">Show worked solution</button></div>'+
 '<div id="hint-box" hidden class="helper"><h3>First-step hint</h3><p class="math">'+mathHtml(q.hint)+'</p></div>'+
 '<div id="solution-box" hidden class="helper solution"><h3>Worked solution</h3><ol>'+
  q.steps.map(step=>'<li class="math">'+mathHtml(step)+'</li>').join('')+'</ol>'+
  '<p class="math"><strong>Answer:</strong> '+mathHtml(q.answer)+'</p>'+
  '<div class="line"></div><p><strong>Common misconception:</strong> '+esc(q.misconception)+'</p>'+
  '<p><strong>Reflect:</strong> '+esc(q.reflection)+'</p></div>'+
 relatedSkillsMarkup(q)+
 '<div id="question-assessment"></div><div id="attempt-history-root"></div>'+
 '<div class="foot-nav">'+
 '<button type="button" class="btn ghost small" id="previous"'+(prev?' data-target-route="'+prev+'"':' disabled')+'>'+
   (previousSection?'← Previous section':'← Previous question')+'</button>'+
 '<button type="button" class="btn small" id="next"'+(next?' data-target-route="'+next+'"':' disabled')+'>'+
   (nextSection?'Next section →':'Next question →')+'</button>'+
 '</div></article></div></section>';
}
function progressPage(scope="internal",strand="all"){
 const published=releasedQuestions();
 const report=calculateSpecificationProgress({questions:published,records:saved,scope});
 const qs=taggedWeek01Questions,core=coreQuestions(1),attempts=qs.filter(everCompleted),coreAttempts=core.filter(everCompleted);
 const scored=attempts.map(q=>({q,mark:latestFinishedRecord(q,saved[q.id]||{})})).filter(item=>Number.isInteger(item.mark?.score));
 const total=scored.reduce((sum,item)=>sum+item.mark.score,0),available=scored.reduce((sum,item)=>sum+item.q.marks,0);
 return '<section class="page"><span class="eyebrow">Your independent study record</span><h1 class="page-title">My progress</h1><p class="intro">Self-assessed scores and reflection notes live in this browser only. They are not teacher-verified and do not sync automatically across devices.</p>'+(importNotice?'<p class="import-notice" role="status">'+esc(importNotice)+'</p>':'')+'<div class="metrics"><div class="metric"><span>ESSENTIAL MARKED</span><strong>'+coreAttempts.length+'/'+core.length+'</strong><span>core questions</span></div><div class="metric"><span>INDEPENDENT</span><strong>'+attempts.filter(q=>lastStatus(q)==='I').length+'</strong><span>finished on own</span></div><div class="metric"><span>WITH HELP</span><strong>'+attempts.filter(q=>lastStatus(q)==='P').length+'</strong><span>marked with help</span></div><div class="metric"><span>CORE REMAINING</span><strong>'+(core.length-coreAttempts.length)+'</strong><span>essential questions still to mark</span></div></div>'+
 renderRevisionSuggestions({questions:published,records:saved,report,scope})+
 renderTopicProgressDashboard(report,{scope,strand})+
 heading('Your Week 1 question record','A valid mark is what makes a question finished')+'<div class="progress-grid">'+Object.entries(sections).map(([code,label])=>{const set=qs.filter(q=>q.section===code),done=set.filter(everCompleted).length;return '<div class="progress-item"><span class="eyebrow">'+code+' · '+esc(label)+'</span><h3>'+done+' / '+set.length+' attempts marked</h3><div class="meter"><span style="width:'+(100*done/(set.length||1))+'%"></span></div><p style="margin-top:10px">'+(essentialSections.has(code)?'Included in the four essential hours.':'Recommended or optional beyond the four essential hours.')+'</p><a class="link" href="#/study/1/'+code+'/0">Open practice →</a></div>'}).join('')+'</div>'+
 heading('My revision notes','Make your next action specific')+'<div class="panel"><div class="reflection-row"><label for="strength">A method I can now use independently</label><textarea id="strength" class="reflection" placeholder="For example: I check the domain before solving a composite inequality…">'+esc(saved.reflections?.strength||'')+'</textarea></div><div class="reflection-row"><label for="repair">My next misconception to repair</label><textarea id="repair" class="reflection" placeholder="Name the exact step to practise…">'+esc(saved.reflections?.repair||'')+'</textarea></div><div class="reflection-row"><label for="strategy">My strategy for an unfamiliar question</label><textarea id="strategy" class="reflection" placeholder="What will you do when you are unsure where to begin?">'+esc(saved.reflections?.strategy||'')+'</textarea></div><p id="reflection-message" class="small muted">Notes save automatically in this browser.</p></div>'+
 '<div class="panel" style="margin-top:16px"><h3>Recorded self-marks</h3><p>'+(scored.length?total+' / '+available+' available marks across '+scored.length+' scored questions.':'No numerical scores recorded yet. Use the mark scheme to self-award marks after attempting a question.')+' The I / P / S rating measures independence, not just whether the final answer is correct.</p></div>'+renderProgressTransfer(saved)+'</section>';
}
function guidePage(){return '<section class="page"><span class="eyebrow">A thoughtful routine</span><h1 class="page-title">How to use the calendar</h1><p class="intro">This is not a race through question numbers. Your goal is to become more independent in deciding which mathematics to use.</p>'+heading('Your four essential hours','Week 1–8 question blueprint')+'<div class="card-grid">'+[['30 min','AO1 quick retrieval','Ten short questions: remember familiar procedures.'],['70 min','Connected problems','Three questions joining two or more techniques.'],['70 min','Mathematical modelling','Two extended questions with context, justification and limitations.'],['50 min','Year 1 Applied','Three questions on Statistics or Mechanics.'],['20 min','Mark and repair','Identify a specific misconception and reattempt the first incorrect step.'],['Optional','The extra two hours','One 60-minute timed set, then an optional 60-minute challenge or targeted repair.']].map(a=>'<article class="card"><span class="pill teal">'+a[0]+'</span><h3>'+a[1]+'</h3><p>'+a[2]+'</p></article>').join('')+'</div>'+heading('How to approach a hard question','Before you open a solution')+'<div class="step-grid"><div class="step"><b>01</b><strong>Understand</strong><p>Underline the required outcome, constraints and units.</p></div><div class="step"><b>02</b><strong>Connect</strong><p>Identify a useful representation and at least one possible method.</p></div><div class="step"><b>03</b><strong>Try</strong><p>Attempt the first step. Reveal only the hint when necessary.</p></div><div class="step"><b>04</b><strong>Repair</strong><p>Self-mark the full method, record the first error, then retry.</p></div></div>'+heading('The assessment objectives','What each means in these resources')+'<div class="panel"><p><strong>AO1:</strong> accurately use techniques and recall facts. <strong>AO2:</strong> reason, communicate mathematics, deduce and prove. <strong>AO3:</strong> solve problems, create and interpret models, and evaluate assumptions and conclusions.</p><p>The revision set intentionally emphasises AO2 and AO3 more than the official final paper weighting. The final mock will be closer to actual examination conditions.</p></div><div class="warning" style="margin-top:15px"><strong>Privacy and access.</strong> Working and progress are stored only in your current browser. Clearing browser storage may remove them. Future question content is withheld until publication; topic previews are visible in advance.</div></section>'}
function finalPage(){return '<section class="page"><a class="back" href="#/">← Overview</a><span class="eyebrow">Programme 02 · Future expansion</span><h1 class="page-title">The road to the final papers.</h1><p class="intro">A planned 20-week full-course programme from 1 February to 16 June 2027, including Year 2 Statistics and Mechanics, synoptic questions and timed examinations. Question packs are not published yet.</p><div class="banner"><div><strong>The same study system, a wider syllabus</strong><p>Your internal-exam programme stays separate. The future stage can reuse tagged questions and build upon the same progress model.</p></div><span class="pill">PLANNED ONLY</span></div>'+heading('Five phases','1 February – 16 June 2027')+'<div class="phases">'+programmeTwo.phases.map(p=>'<div class="phase"><span class="eyebrow">WEEKS '+p.start+'–'+p.end+'</span><h3>'+esc(p.title)+'</h3><p>'+esc(p.theme)+'</p></div>').join('')+'</div>'+heading('Official 2027 dates','Pearson timetable · Afternoon session')+programmeTwo.exams.map(x=>{const d=new Date(x.date+'T12:00:00Z');const day=d.toLocaleDateString('en-GB',{day:'numeric',month:'short',timeZone:'UTC'});return '<div class="exam"><div class="exam-date"><strong>'+day.split(' ')[0]+'</strong>'+day.split(' ')[1].toUpperCase()+'</div><div><strong>'+esc(x.name)+'</strong><p>'+esc(x.code)+' · Wednesday '+esc(x.date)+' · '+esc(x.session)+' · '+esc(x.duration)+'</p></div></div>'}).join('')+'<div class="warning" style="margin-top:18px">These are the published Pearson GCE paper dates. School-specific local start times in Brunei must be confirmed separately. Papers 1 and 2 can both test the entire Pure syllabus.</div></section>'}
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
    a.classList.toggle("active",a.dataset.nav===(top==="week"||top==="study"||top==="home"?"calendar":top)));
  if(top==="home")el.innerHTML=overview();
  else if(top==="calendar")el.innerHTML=calendar();
  else if(top==="week")el.innerHTML=weekPage(Number(p[1]));
  else if(top==="study")el.innerHTML=studyPage(Number(p[1]),p[2]||"R",p[3]||0);
  else if(top==="progress")el.innerHTML=progressPage(p[1]||"internal",p[2]||"all");
  else if(top==="specification")disposeSpecification=mountSpecification(el,{scope:p[1]||"internal",topicId:p[2]||null,skillId:p[3]||null,questions:releasedQuestions(),records:saved});
  else if(top==="guide")el.innerHTML=guidePage();
  else if(top==="final")el.innerHTML=finalPage();
  else el.innerHTML=notFound();

  document.title=(top==="home"?"A Level Maths Calendar":
    top==="study"?"Questions":top==="week"?"Weekly questions":top==="specification"?"My Specification":
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
    const assessment=el.querySelector("#question-assessment");
    if(q&&assessment&&released(week)){
      remountHistory(q);
      mountQuestionAssessment(assessment,{
        question:q,
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
  typeset();
}
window.addEventListener('hashchange',()=>{render();window.scrollTo({top:0,behavior:'instant'})});
document.addEventListener('click',event=>{
 const week=event.target.closest('button[data-week]');if(week){navigate(week.dataset.destination||'#/study/'+week.dataset.week+'/R/0');return}
 const section=event.target.closest('[data-section]');if(section){navigate('#/study/'+section.dataset.week+'/'+section.dataset.section+'/0');return}
 const jump=event.target.closest('[data-jump]');if(jump){const p=routeInfo();navigate('#/study/'+p[1]+'/'+p[2]+'/'+jump.dataset.jump);return}
 const hint=event.target.closest('#hint-toggle');if(hint){const box=$('#hint-box');box.hidden=!box.hidden;hint.setAttribute('aria-expanded',String(!box.hidden));hint.textContent=box.hidden?'Show first-step hint':'Hide first-step hint';if(!box.hidden){const p=routeInfo(),q=(allQuestions[Number(p[1])]||[]).filter(q=>q.section===p[2])[Number(p[3])||0];if(q){saved[q.id]??={};saved[q.id].hintSeen=true;store()}}return}
 const solution=event.target.closest('#solution-toggle');if(solution){const box=$('#solution-box');box.hidden=!box.hidden;solution.setAttribute('aria-expanded',String(!box.hidden));solution.textContent=box.hidden?'Show worked solution':'Hide worked solution';if(!box.hidden)typeset();return}
 const prev=event.target.closest('#previous,#next');if(prev&&!prev.disabled){const destination=prev.dataset.targetRoute;if(destination)navigate(destination);return;}
});
document.addEventListener('input',event=>{
 if(['strength','repair','strategy'].includes(event.target.id)){saved.reflections??={};saved.reflections[event.target.id]=event.target.value;store();const msg=$('#reflection-message');if(msg)msg.textContent='Notes saved on this device.'}
});
render();
