import {siteConfig} from "./config.js";
import {programmeOne,programmeTwo} from "./data/programmes.js";
import {taggedWeek01Questions} from "./data/tagged-questions.js";
import {getSpecSkill} from "./data/specification.js";
import {mountWorkingSpace} from "./working-space.js";
import {isQuestionFinished,mountQuestionAssessment} from "./question-assessment.js";
import {mountSpecification} from "./specification-view.js";
import {calculateSpecificationProgress} from "./specification-analytics.js";
import {renderTopicProgressDashboard} from "./specification-progress-view.js";

const $=s=>document.querySelector(s);
const el=$('#app');
const sections={R:'Quick retrieval',P:'Connected problems',M:'Modelling & reasoning',A:'Year 1 Applied',T:'Timed mixed set',X:'Extension / repair'};
const target={R:10,P:3,M:2,A:3,T:3,X:1};
const essentialSections=new Set(['R','P','M','A']);
const studyTimes={R:'30 min',P:'70 min',M:'70 min',A:'50 min',T:'45 min + 15 min marking',X:'40 min + 20 min review'};
const allQuestions={1:taggedWeek01Questions};
let disposeWorkspace=null;
let disposeSpecification=null;
const storageKey=siteConfig.storageKey;
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function read(){try{const s=JSON.parse(localStorage.getItem(storageKey)||'{}');return s&&typeof s==='object'?s:{}}catch{return {}}}
let saved=read();
function store(){try{localStorage.setItem(storageKey,JSON.stringify(saved));return true}catch{return false}}
function completed(q){return isQuestionFinished(saved[q.id],q.marks)}
function status(q){return saved[q.id]?.status||''}
function countDone(){return Object.values(allQuestions).flat().filter(q=>essentialSections.has(q.section)&&completed(q)).length}
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
function heroArt(){return '<div class="hero-art" aria-hidden="true"><svg viewBox="0 0 430 280" role="img"><path d="M-15 236 C70 235 100 240 152 203 S205 60 255 100 S335 206 445 23" stroke="#1d8879" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M-15 236 C70 235 100 240 152 203 S205 60 255 100 S335 206 445 23 L445 300 L-15 300 Z" fill="#74c6a0" opacity=".13"/><circle cx="255" cy="100" r="7" fill="#e6a25f" stroke="white" stroke-width="3"/><path d="M255 100 V250 M30 150 H405" stroke="#88a99c" stroke-width="1.4" stroke-dasharray="5 7" opacity=".7"/></svg><div class="float-card"><small>THE AIM</small><strong>Think deeper.</strong></div></div>'}
function buttonLink(href,label,cls=''){return '<a href="'+esc(href)+'" class="btn '+cls+'">'+esc(label)+'</a>'}
function weekCards(){return '<div class="weeks">'+programmeOne.weeks.map(w=>{const on=released(w.number);const qs=allQuestions[w.number]||[];const done=coreQuestions(w.number).filter(completed).length;return '<button type="button" class="week-card '+(on?'current':'locked')+'" data-week="'+w.number+'" aria-label="Week '+w.number+': '+esc(w.title)+', '+(on?'questions available':'topic overview only')+'"><div class="top"><span class="week-no">WEEK '+String(w.number).padStart(2,'0')+'</span><span class="pill '+(on?'teal':'')+'">'+(on?'AVAILABLE':'PREVIEW')+'</span></div><h3>'+esc(w.title)+'</h3><p>'+esc(w.subtitle)+'</p><div class="bottom"><span>'+(on?done+' / '+coreQuestions(w.number).length+' core marked':'4–6 hrs / week')+'</span><span aria-hidden="true">'+(on?'↗':'◇')+'</span></div></button>'}).join('')+'</div>'}
function overview(){return '<section class="page"><div class="hero"><div class="hero-content"><span class="eyebrow">A better way to prepare</span><h1>Master the connections.<br>Not just the methods.</h1><p class="lead">Ten weeks of purposeful A Level Mathematics revision, built around problem solving, mathematical reasoning and meaningful modelling. Every week links ideas you already know.</p><div class="actions">'+buttonLink('#/week/1','Explore Week 1 →')+buttonLink('#/calendar','View the calendar','ghost')+'</div></div>'+heroArt()+'</div>'+
heading('Choose your programme','One calendar. Two preparation journeys.')+
'<div class="card-grid"><article class="card featured"><div class="card-head"><span class="pill teal">PROGRAMME 01 · WEEK 1 LIVE</span><span class="eyebrow">10 WEEKS</span></div><h3>Internal exam preparation</h3><p>All Pure Mathematics, with Year 1 Statistics and Mechanics. Revisit every topic, then practise connecting ideas and justifying decisions.</p><div class="line"></div><div class="card-foot"><span class="small muted">4–6 hours each week</span><a class="link" href="#/calendar">Explore programme →</a></div></article><article class="card"><div class="card-head"><span class="pill">PROGRAMME 02 · PLANNED</span><span class="eyebrow">20 WEEKS</span></div><h3>Final A Level preparation</h3><p>Beginning 1 February 2027. Full 9MA0, including Year 2 Applied, with timed papers and exam-specific revision through June.</p><div class="line"></div><div class="card-foot"><span class="small muted">1 Feb – 16 Jun 2027</span><a class="link" href="#/final">See future programme →</a></div></article></div>'+
'<div class="spec-home-link"><div><span class="eyebrow">NEW · Your complete syllabus map</span><h3>What could an examiner ask me to do?</h3><p>Explore all 19 specification topics, searchable “I can” skills and examples of examination demands. See what belongs to the internal exams and what comes later.</p></div><a class="btn small" href="#/specification/internal">Explore My Specification →</a></div>'+heading('Your preparation at a glance','Made for thoughtful independent study')+
'<div class="metrics"><div class="metric"><span>THE PROGRAMME</span><strong>10</strong><span>weekly releases</span></div><div class="metric"><span>WEEKLY COMMITMENT</span><strong>4–6h</strong><span>essential + extension</span></div><div class="metric"><span>MAIN EMPHASIS</span><strong>AO2/3</strong><span>reasoning & modelling</span></div><div class="metric"><span>CORE QUESTION PROGRESS</span><strong>'+countDone()+'/'+coreQuestions(1).length+'</strong><span>self-assessed locally</span></div></div>'+
heading('Your weekly calendar','Browse every week; full sets release progressively')+weekCards()+
heading('The learning routine','Independent first, then reflective')+
'<div class="step-grid"><div class="step"><b>01</b><strong>Recall</strong><p>Test basic techniques without notes.</p></div><div class="step"><b>02</b><strong>Connect</strong><p>Solve problems combining several topics.</p></div><div class="step"><b>03</b><strong>Reason</strong><p>Explain, model, evaluate and prove.</p></div><div class="step"><b>04</b><strong>Reflect</strong><p>Self-mark, fix and log the first error.</p></div></div></section>'}
function calendar(){return '<section class="page"><a class="back" href="#/">← Overview</a><span class="eyebrow">Programme 01 · Your route through revision</span><h1 class="page-title">The ten-week calendar</h1><p class="intro">All Pure Mathematics plus Year 1 Statistics and Mechanics. Each week deliberately connects techniques. Week 1 has its complete core pack, timed set and optional challenge; later weeks remain curriculum previews until their material is authored and released.</p><div class="banner"><div><strong>Designed for four to six hours each week</strong><p>Four hours essential, an extra timed hour recommended, a sixth hour for challenge or targeted repair.</p></div><span class="pill teal">AO2 / AO3 FOCUS</span></div>'+weekCards()+heading('What comes after the internal exams?','Future expansion')+'<div class="panel"><h3>Full A Level preparation · February to June 2027</h3><p>Designed into the calendar from the start. Full Pure and both years of Statistics and Mechanics, leading into your final examinations.</p><a href="#/final" class="link">View the planned next stage →</a></div></section>'}
function weekPage(n){
 const w=programmeOne.weeks[n-1];if(!w)return notFound();
 const on=released(n),qs=allQuestions[n]||[],core=coreQuestions(n),done=core.filter(completed).length;
 const top='<section class="page"><a class="back" href="#/calendar">← Back to calendar</a><div class="card-head"><span class="eyebrow">Programme one · Week '+String(n).padStart(2,'0')+'</span><span class="pill '+(on?'teal':'')+'">'+(on?'QUESTIONS AVAILABLE':'PREVIEW · NOT YET RELEASED')+'</span></div><h1 class="page-title">'+esc(w.title)+'</h1><p class="intro">'+esc(w.subtitle)+'</p><div class="tag-row"><span class="pill">4 hours essential</span><span class="pill">+1 timed hour</span><span class="pill">+1 optional hour</span></div>'+
 heading('This week’s mathematical connections','Topic overview')+'<div class="topic-pair"><article class="panel"><span class="eyebrow">Pure mathematics</span><h3>Techniques to connect</h3><p>'+esc(w.pure)+'</p></article><article class="panel"><span class="eyebrow">Year 1 applied</span><h3>Statistics & mechanics</h3><p>'+esc(w.applied)+'</p></article></div>'+
 heading('Your extended challenge','Think beyond the method')+'<div class="panel"><h3>Where the ideas meet</h3><p>'+esc(w.challenge)+'</p></div>';
 if(!on)return top+heading('Coming later','Curriculum preview')+'<div class="locked-panel"><h2>Questions are not published yet</h2><p>Explore the topics now. Questions and solutions will be released after authoring and checking.</p>'+buttonLink('#/calendar','Back to calendar','ghost')+'</div></section>';
 const labels={R:'Recall key techniques',P:'Connect methods',M:'Model and reason',A:'Year 1 Applied',T:'Timed mixed challenge',X:'A/A* extension'};
 const time={R:'30 min · 20 marks',P:'70 min · 30 marks',M:'70 min · 26 marks',A:'50 min · 22 marks',T:'60 min incl. marking · 32 marks',X:'60 min incl. review · 14 marks'};
 return top+heading('Your Week '+String(n).padStart(2,'0')+' pathway',done+' of '+core.length+' essential questions self-marked')+
 '<div class="progress-grid">'+Object.entries(labels).map(([code,label])=>{const section=qs.filter(q=>q.section===code),scored=section.filter(completed).length;return '<div class="progress-item"><div class="card-head"><span class="eyebrow">'+(essentialSections.has(code)?'ESSENTIAL':code==='T'?'RECOMMENDED':'OPTIONAL')+'</span><span class="pill '+(scored===section.length?'teal':'')+'">'+scored+'/'+section.length+'</span></div><h3>'+esc(label)+'</h3><p>'+time[code]+'</p><div class="meter"><span style="width:'+(100*scored/Math.max(1,section.length))+'%"></span></div><div style="margin-top:14px"><a class="link" href="#/study/'+n+'/'+code+'/0">Open '+esc(label.toLowerCase())+' →</a></div></div>'}).join('')+'</div>'+
 '<div class="banner" style="margin-top:19px"><div><strong>Your four essential hours</strong><p>30 minutes retrieval + 70 connected problems + 70 modelling + 50 Applied + 20 minutes checking. Add the timed set (60 minutes) and, if helpful, extension or targeted repair (60 minutes).</p></div><a class="btn small" href="#/study/'+n+'/R/0">Start Week '+n+' →</a></div></section>';
}
function studyPage(n,sec,idx){if(!released(n))return weekPage(n);const qs=(allQuestions[n]||[]).filter(q=>q.section===sec);if(!qs.length){return '<section class="page"><a class="back" href="#/week/'+n+'">← Week '+n+'</a><h1>Not yet authored</h1><p>Questions for this section are still in development.</p></section>'}const i=Math.max(0,Math.min(Number(idx)||0,qs.length-1)),q=qs[i];const group=Object.entries(sections).map(([code,label])=>'<button type="button" class="tab" role="tab" aria-selected="'+String(sec===code)+'" data-section="'+code+'" data-week="'+n+'">'+label+' ('+(allQuestions[n]||[]).filter(t=>t.section===code).length+'/'+target[code]+')</button>').join('');const nav=qs.map((item,j)=>'<button type="button" data-jump="'+j+'" class="'+(j===i?'active':'')+'"><span class="qid">'+esc(item.id.split('-')[1])+'</span><span>'+esc(item.title)+'</span>'+'<span class="q-complete-indicator" aria-label="Question finished"'+(completed(item)?'':' hidden')+'>✓</span>'+'</button>').join('');let result='<section class="page"><a class="back" href="#/week/'+n+'">← Week '+n+' overview</a><div class="card-head"><span class="eyebrow">Week '+String(n).padStart(2,'0')+' · '+esc(sections[sec]||sec)+'</span><span class="pill teal">ORIGINAL EXAM-STYLE QUESTION</span></div><h1 class="page-title">Practice with purpose.</h1><p class="intro">Attempt independently first. Use a hint only if needed, compare with the worked solution, and record the marks you actually earned.</p><div class="tabs" role="tablist" aria-label="Question categories">'+group+'</div><div class="study-layout"><aside class="side"><h3>Questions in this section</h3><div class="question-links">'+nav+'</div><div class="line"></div><p class="small muted">4-hour essentials · 1 timed set · 1 optional challenge.</p></aside><article class="paper"><div class="card-head"><span class="pill blue">'+esc(q.id)+'</span><span class="small muted">'+q.marks+' marks · ~'+q.minutes+' min</span></div><h2>'+esc(q.title)+'</h2><p class="stem math">'+mathHtml(q.stem)+'</p>'+questionTable(q.table)+'<ol class="parts">'+q.parts.map((p,j)=>'<li><span class="letter">('+'abcdefgh'[j]+')</span><div class="question-part math">'+mathHtml(p[0])+'</div><span class="marks">['+p[1]+']</span></li>').join('')+'</ol><hr><div id="question-working-space"></div><div class="actions" style="margin-top:15px"><button class="btn ghost small" type="button" id="hint-toggle" aria-expanded="false" aria-controls="hint-box">Show first-step hint</button><button class="btn ghost small" type="button" id="solution-toggle" aria-expanded="false" aria-controls="solution-box">Show worked solution</button></div><div id="hint-box" hidden class="helper"><h3>A small nudge</h3><p class="math">'+mathHtml(q.hint)+'</p></div><div id="solution-box" hidden class="helper solution"><h3>Fully worked solution</h3><ol>'+q.steps.map(s=>'<li class="math">'+mathHtml(s)+'</li>').join('')+'</ol><p class="math"><strong>Answer:</strong> '+mathHtml(q.answer)+'</p><div class="line"></div><p><strong>Common misconception:</strong> '+esc(q.misconception)+'</p><p><strong>Reflect:</strong> '+esc(q.reflection)+'</p></div>'+relatedSkillsMarkup(q)+'<div id="question-assessment"></div><div class="foot-nav"><button type="button" class="btn ghost small" id="previous" '+(i===0?'disabled':'')+'>← Previous</button><button type="button" class="btn small" id="next" '+(i===qs.length-1?'disabled':'')+'>Next question →</button></div></article></div></section>';return result}
function progressPage(scope="internal",strand="all"){
 const report=calculateSpecificationProgress({questions:releasedQuestions(),records:saved,scope});
 const qs=taggedWeek01Questions,core=coreQuestions(1),attempts=qs.filter(completed),coreAttempts=core.filter(completed);
 const scored=attempts.filter(q=>Number.isInteger(saved[q.id]?.score));
 const total=scored.reduce((s,q)=>s+saved[q.id].score,0),available=scored.reduce((s,q)=>s+q.marks,0);
 const priority=qs.filter(q=>completed(q)&&(status(q)==='P'||status(q)==='S'||saved[q.id].score<q.marks)).slice(0,5);
 return '<section class="page"><span class="eyebrow">Your independent study record</span><h1 class="page-title">My progress</h1><p class="intro">Self-assessed scores and reflection notes live in this browser only. They are not teacher-verified and do not sync across devices.</p><div class="metrics"><div class="metric"><span>ESSENTIAL MARKED</span><strong>'+coreAttempts.length+'/'+core.length+'</strong><span>core questions</span></div><div class="metric"><span>INDEPENDENT</span><strong>'+attempts.filter(q=>status(q)==='I').length+'</strong><span>finished on own</span></div><div class="metric"><span>WITH HELP</span><strong>'+attempts.filter(q=>status(q)==='P').length+'</strong><span>marked with help</span></div><div class="metric"><span>CORE REMAINING</span><strong>'+(core.length-coreAttempts.length)+'</strong><span>essential questions still to mark</span></div></div>'+
 renderTopicProgressDashboard(report,{scope,strand})+
 heading('Your Week 1 question record','A valid mark is what makes a question finished')+'<div class="progress-grid">'+Object.entries(sections).map(([code,label])=>{const set=qs.filter(q=>q.section===code),done=set.filter(completed).length;return '<div class="progress-item"><span class="eyebrow">'+code+' · '+esc(label)+'</span><h3>'+done+' / '+set.length+' attempts marked</h3><div class="meter"><span style="width:'+(100*done/(set.length||1))+'%"></span></div><p style="margin-top:10px">'+(essentialSections.has(code)?'Included in the four essential hours.':'Recommended or optional beyond the four essential hours.')+'</p><a class="link" href="#/study/1/'+code+'/0">Open practice →</a></div>'}).join('')+'</div>'+
 (priority.length?heading('Your next targeted reattempts','Questions needing repair')+'<div class="panel"><div class="tag-row">'+priority.map(q=>'<a class="pill '+(status(q)==='S'?'amber':'blue')+'" href="#/study/1/'+q.section+'/'+qs.filter(i=>i.section===q.section).findIndex(i=>i.id===q.id)+'">'+esc(q.id)+' · '+esc(q.title)+'</a>').join('')+'</div><p class="small muted" style="margin-top:12px">Attempt a fresh solution without your old working. Review the first uncertain step and compare again.</p></div>':'')+
 heading('My revision notes','Make your next action specific')+'<div class="panel"><div class="reflection-row"><label for="strength">A method I can now use independently</label><textarea id="strength" class="reflection" placeholder="For example: I check the domain before solving a composite inequality…">'+esc(saved.reflections?.strength||'')+'</textarea></div><div class="reflection-row"><label for="repair">My next misconception to repair</label><textarea id="repair" class="reflection" placeholder="Name the exact step to practise…">'+esc(saved.reflections?.repair||'')+'</textarea></div><div class="reflection-row"><label for="strategy">My strategy for an unfamiliar question</label><textarea id="strategy" class="reflection" placeholder="What will you do when you are unsure where to begin?">'+esc(saved.reflections?.strategy||'')+'</textarea></div><p id="reflection-message" class="small muted">Notes save automatically in this browser.</p></div>'+
 '<div class="panel" style="margin-top:16px"><h3>Recorded self-marks</h3><p>'+(scored.length?total+' / '+available+' available marks across '+scored.length+' scored questions.':'No numerical scores recorded yet. Use the mark scheme to self-award marks after attempting a question.')+' The I / P / S rating measures independence, not just whether the final answer is correct.</p></div></section>';
}
function guidePage(){return '<section class="page"><span class="eyebrow">A thoughtful routine</span><h1 class="page-title">How to use the calendar</h1><p class="intro">This is not a race through question numbers. Your goal is to become more independent in deciding which mathematics to use.</p>'+heading('Your four essential hours','Week 1–8 question blueprint')+'<div class="card-grid">'+[['30 min','AO1 quick retrieval','Ten short questions: remember familiar procedures.'],['70 min','Connected problems','Three questions joining two or more techniques.'],['70 min','Mathematical modelling','Two extended questions with context, justification and limitations.'],['50 min','Year 1 Applied','Three questions on Statistics or Mechanics.'],['20 min','Mark and repair','Identify a specific misconception and reattempt the first incorrect step.'],['Optional','The extra two hours','One 60-minute timed set, then an optional 60-minute challenge or targeted repair.']].map(a=>'<article class="card"><span class="pill teal">'+a[0]+'</span><h3>'+a[1]+'</h3><p>'+a[2]+'</p></article>').join('')+'</div>'+heading('How to approach a hard question','Before you open a solution')+'<div class="step-grid"><div class="step"><b>01</b><strong>Understand</strong><p>Underline the required outcome, constraints and units.</p></div><div class="step"><b>02</b><strong>Connect</strong><p>Identify a useful representation and at least one possible method.</p></div><div class="step"><b>03</b><strong>Try</strong><p>Attempt the first step. Reveal only the hint when necessary.</p></div><div class="step"><b>04</b><strong>Repair</strong><p>Self-mark the full method, record the first error, then retry.</p></div></div>'+heading('The assessment objectives','What each means in these resources')+'<div class="panel"><p><strong>AO1:</strong> accurately use techniques and recall facts. <strong>AO2:</strong> reason, communicate mathematics, deduce and prove. <strong>AO3:</strong> solve problems, create and interpret models, and evaluate assumptions and conclusions.</p><p>The revision set intentionally emphasises AO2 and AO3 more than the official final paper weighting. The final mock will be closer to actual examination conditions.</p></div><div class="warning" style="margin-top:15px"><strong>Privacy and access.</strong> Working and progress are stored only in your current browser. Clearing browser storage may remove them. Future question content is withheld until publication; topic previews are visible in advance.</div></section>'}
function finalPage(){return '<section class="page"><a class="back" href="#/">← Overview</a><span class="eyebrow">Programme 02 · Future expansion</span><h1 class="page-title">The road to the final papers.</h1><p class="intro">A planned 20-week full-course programme from 1 February to 16 June 2027, including Year 2 Statistics and Mechanics, synoptic questions and timed examinations. Question packs are not published yet.</p><div class="banner"><div><strong>The same study system, a wider syllabus</strong><p>Your internal-exam programme stays separate. The future stage can reuse tagged questions and build upon the same progress model.</p></div><span class="pill">PLANNED ONLY</span></div>'+heading('Five phases','1 February – 16 June 2027')+'<div class="phases">'+programmeTwo.phases.map(p=>'<div class="phase"><span class="eyebrow">WEEKS '+p.start+'–'+p.end+'</span><h3>'+esc(p.title)+'</h3><p>'+esc(p.theme)+'</p></div>').join('')+'</div>'+heading('Official 2027 dates','Pearson timetable · Afternoon session')+programmeTwo.exams.map(x=>{const d=new Date(x.date+'T12:00:00Z');const day=d.toLocaleDateString('en-GB',{day:'numeric',month:'short',timeZone:'UTC'});return '<div class="exam"><div class="exam-date"><strong>'+day.split(' ')[0]+'</strong>'+day.split(' ')[1].toUpperCase()+'</div><div><strong>'+esc(x.name)+'</strong><p>'+esc(x.code)+' · Wednesday '+esc(x.date)+' · '+esc(x.session)+' · '+esc(x.duration)+'</p></div></div>'}).join('')+'<div class="warning" style="margin-top:18px">These are the published Pearson GCE paper dates. School-specific local start times in Brunei must be confirmed separately. Papers 1 and 2 can both test the entire Pure syllabus.</div></section>'}
function notFound(){return '<section class="page"><h1>Page not found</h1>'+buttonLink('#/','Return home')+'</section>'}
function routeInfo(){const path=(location.hash||'#/').slice(1).split('/').filter(Boolean);return path}
function render(){
  if(disposeWorkspace){disposeWorkspace();disposeWorkspace=null;}
  if(disposeSpecification){disposeSpecification();disposeSpecification=null;}
  const p=routeInfo();
  const top=p[0]||"home";
  document.querySelectorAll("[data-nav]").forEach(a=>
    a.classList.toggle("active",a.dataset.nav===(top==="week"||top==="study"?"calendar":top)));
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
    top==="study"?"Practice":top==="week"?"Weekly overview":top==="specification"?"My Specification":
    top.charAt(0).toUpperCase()+top.slice(1))+" — A Level Maths Calendar";

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
      mountQuestionAssessment(assessment,{
        question:q,
        record:saved[q.id]||{},
        onChange(marking){
          const current=saved[q.id]||{};
          // Do not overwrite newer working-space strokes or maths lines.
          if(marking.status==="I"||marking.status==="P")current.status=marking.status;
          if(typeof marking.error==="string")current.error=marking.error;
          for(const key of ["score","scoreSource","partMarks"]){
            if(Object.hasOwn(marking,key))current[key]=marking[key];
            else delete current[key];
          }
          saved[q.id]=current;
          return store();
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
 const week=event.target.closest('[data-week]');if(week){navigate('#/week/'+week.dataset.week);return}
 const section=event.target.closest('[data-section]');if(section){navigate('#/study/'+section.dataset.week+'/'+section.dataset.section+'/0');return}
 const jump=event.target.closest('[data-jump]');if(jump){const p=routeInfo();navigate('#/study/'+p[1]+'/'+p[2]+'/'+jump.dataset.jump);return}
 const hint=event.target.closest('#hint-toggle');if(hint){const box=$('#hint-box');box.hidden=!box.hidden;hint.setAttribute('aria-expanded',String(!box.hidden));hint.textContent=box.hidden?'Show first-step hint':'Hide first-step hint';if(!box.hidden){const p=routeInfo(),q=(allQuestions[Number(p[1])]||[]).filter(q=>q.section===p[2])[Number(p[3])||0];if(q){saved[q.id]??={};saved[q.id].hintSeen=true;store()}}return}
 const solution=event.target.closest('#solution-toggle');if(solution){const box=$('#solution-box');box.hidden=!box.hidden;solution.setAttribute('aria-expanded',String(!box.hidden));solution.textContent=box.hidden?'Show worked solution':'Hide worked solution';if(!box.hidden)typeset();return}
 const prev=event.target.closest('#previous,#next');if(prev){const p=routeInfo(),n=Number(p[3]||0)+(prev.id==='next'?1:-1);navigate('#/study/'+p[1]+'/'+p[2]+'/'+n);}
});
document.addEventListener('input',event=>{
 if(['strength','repair','strategy'].includes(event.target.id)){saved.reflections??={};saved.reflections[event.target.id]=event.target.value;store();const msg=$('#reflection-message');if(msg)msg.textContent='Notes saved on this device.'}
});
render();
