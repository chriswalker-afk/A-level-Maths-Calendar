/**
 * The calendar IS the homepage. Deliberately designed as a printed
 * 10-week term planner, not a set of promotional dashboard cards.
 *
 * Navigation is native anchor-based. A released week goes straight into
 * its question workspace; unpublished weeks are visible but not clickable.
 */
export const STUDY_SEQUENCE=["R","P","M","A","T","X"];
export const STUDY_LABELS={
 R:"Retrieval",P:"Connected problems",M:"Modelling & reasoning",
 A:"Year 1 Applied",T:"Timed set",X:"Extension"
};
export const STUDY_TYPES={R:"ESSENTIAL",P:"ESSENTIAL",M:"ESSENTIAL",A:"ESSENTIAL",T:"RECOMMENDED",X:"OPTIONAL"};
const esc=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pad=n=>String(n).padStart(2,"0");
const weekPath=(week,section,index)=>"#/study/"+week+"/"+section+"/"+index;

export function firstWeekQuestionRoute(week,questions=[],isFinished=()=>false,isRetrying=()=>false){
 const entries=STUDY_SEQUENCE.flatMap(section=>
  questions.filter(q=>q.section===section).map((q,index)=>({q,section,index})));
 if(!entries.length)return null;
 // If a fresh reattempt is underway, returning to the calendar should
 // resume that work before pointing to an as-yet-unstarted question.
 const next=entries.find(x=>isRetrying(x.q))||
   entries.find(x=>STUDY_TYPES[x.section]==="ESSENTIAL"&&!isFinished(x.q))||
   entries.find(x=>!isFinished(x.q))||entries[0];
 return weekPath(week,next.section,next.index);
}
export function adjacentQuestionRoute(week,questions,section,index,direction){
 if(direction!==1&&direction!==-1)return null;
 const list=STUDY_SEQUENCE.flatMap(code=>
  questions.filter(q=>q.section===code).map((q,j)=>({section:code,index:j})));
 const at=list.findIndex(item=>item.section===section&&item.index===index);
 if(at<0)return null;
 const target=list[at+direction];
 return target?weekPath(week,target.section,target.index):null;
}
export function renderSectionNavigation({week,section,questions,isFinished=()=>false,labels=STUDY_LABELS}){
 const links=STUDY_SEQUENCE.map(code=>{
  const items=questions.filter(q=>q.section===code);
  if(!items.length)return "";
  const done=items.filter(isFinished).length;
  const selected=code===section;
  return '<a class="study-section-link'+(selected?' is-selected':'')+'" href="'+weekPath(week,code,0)+'"'+
   (selected?' aria-current="page"':'')+
   '><span class="study-section-code">'+code+'</span>'+
   '<span class="study-section-name">'+esc(labels[code]||STUDY_LABELS[code])+'</span>'+
   '<span class="study-section-progress">'+done+'/'+items.length+'</span></a>';
 }).join("");
 return '<nav class="study-section-nav" aria-label="Subsections in Week '+week+'">'+
 '<div class="study-section-nav-heading"><strong>THIS WEEK</strong></div>'+
 '<div class="study-section-strip">'+links+'</div></nav>';
}
export function renderQuestionIndex({section,questions,index,isFinished=()=>false,isRetrying=()=>false}){
 const nav=questions.map((q,i)=>{
  const label=q.id.split("-")[1]||String(i+1);
  return '<button type="button" data-jump="'+i+'" class="question-index-item'+(i===index?' active':'')+'"'+
    (i===index?' aria-current="true"':'')+'>'+
    '<span class="qid">'+esc(label)+'</span>'+
    '<span class="question-index-title">'+esc(q.title)+'</span>'+
    '<span class="q-complete-indicator" aria-label="Question finished"'+(isFinished(q)?'':' hidden')+'>✓</span>'+
    (isRetrying(q)?'<span class="q-retrying" aria-label="Reattempt in progress">↻</span>':'')+
    '</button>';
 }).join("");
 return '<aside class="side question-index"><div class="question-index-heading"><span>SECTION '+esc(section)+'</span>'+
 '<strong>'+questions.length+' QUESTIONS</strong></div>'+
 '<div class="question-links" aria-label="Questions in this section">'+nav+'</div>'+
 '<div class="question-index-foot"><span>✓ MARKED</span><span>↻ REATTEMPT</span></div></aside>';
}
function renderCell(week,status){
 const ready=Boolean(status?.released);
 const finished=ready&&status?.total>0&&status.done===status.total;
 const n=week.number;
 const number=pad(n);
 const main='<div class="planner-cell-top"><span class="planner-cell-label">WEEK</span>'+
  '<span class="planner-cell-flag '+(ready?'ready':'future')+'">'+(finished?'COMPLETE':ready?'OPEN':'UPCOMING')+'</span></div>'+
  '<div class="planner-cell-number" aria-hidden="true">'+number+'</div>'+
  '<h3>'+esc(week.title)+'</h3>'+
  '<div class="planner-cell-bottom">'+(ready
    ?'<div class="planner-cell-meter"><span style="width:'+Math.max(0,Math.min(100,100*status.done/Math.max(1,status.total)))+'%"></span></div>'+
     '<span>'+status.done+'/'+status.total+' ESSENTIAL MARKED</span>'
    :'<span>NOT RELEASED</span>')+
   '<strong aria-hidden="true">'+(ready?'↗':'—')+'</strong></div>';
 if(ready){
  const link=status.url||weekPath(n,"R",0);
  return '<a class="planner-cell is-open'+(finished?' is-finished':'')+'" href="'+esc(link)+'"'+
    ' aria-label="Week '+n+': '+esc(week.title)+'. '+status.done+' of '+status.total+' essential questions marked. Go to questions.">'+main+'</a>';
 }
 return '<div class="planner-cell is-upcoming" aria-label="Week '+n+': '+esc(week.title)+'. Questions not released yet.">'+main+'</div>';
}
function renderSpread(weeks,getStatus,groupIndex){
 const first=weeks[0]?.number||0,last=weeks.at(-1)?.number||0;
 return '<section class="planner-spread" aria-label="Weeks '+first+' to '+last+'">'+
 '<div class="planner-spread-label"><span>BLOCK '+pad(groupIndex+1)+'</span><span>WEEKS '+pad(first)+'—'+pad(last)+'</span></div>'+
 '<div class="planner-grid">'+weeks.map(week=>renderCell(week,getStatus(week))).join('')+'</div>'+
 '</section>';
}
export function renderCalendarHome({weeks=[],getStatus=()=>({}),totalCompleted=0}={}){
 const available=weeks.filter(w=>getStatus(w)?.released).length;
 return '<section class="page planner-page">'+
 '<div class="planner-masthead">'+
 '<div class="planner-edition"><span>PEARSON EDEXCEL / 9MA0</span><span>INTERNAL EXAM PREPARATION · 10 WEEKS</span></div>'+
 '<div class="planner-title-row"><h1>THE STUDY <em>CALENDAR</em><span class="planner-dot">.</span></h1>'+
 '<div class="planner-header-meta"><strong>'+pad(available)+' / '+pad(weeks.length)+'</strong><span>WEEKS OPEN</span></div></div>'+
 '<div class="planner-subline"><span>ALL PURE + YEAR 1 STATISTICS & MECHANICS</span><span>4–6 HOURS / WEEK</span>'+
 '<span>'+totalCompleted+' ESSENTIAL QUESTIONS MARKED</span></div></div>'+
 '<div class="planner-board">'+
 '<div class="planner-board-heading"><strong>WEEKLY PLANNER</strong><div class="planner-legend">'+
 '<span><i class="legend-open"></i> Open</span><span><i class="legend-future"></i> Not released</span></div></div>'+
 renderSpread(weeks.slice(0,5),getStatus,0)+renderSpread(weeks.slice(5,10),getStatus,1)+
 '</div>'+
 '<nav class="planner-shortcuts" aria-label="Other study tools">'+
 '<a href="#/progress"><span class="planner-shortcut-num">01</span><span><strong>MY PROGRESS</strong><small>Marks, revision, backups</small></span><b aria-hidden="true">↗</b></a>'+
 '<a href="#/specification/internal"><span class="planner-shortcut-num">02</span><span><strong>SPECIFICATION</strong><small>Topics and skills</small></span><b aria-hidden="true">↗</b></a>'+
 '<a href="#/guide"><span class="planner-shortcut-num">03</span><span><strong>STUDY GUIDE</strong><small>How to use the questions</small></span><b aria-hidden="true">↗</b></a></nav>'+
 '<div class="planner-next"><span>COMING LATER</span>'+
 '<strong>FULL A LEVEL PREPARATION · FEB—JUN 2027</strong>'+
 '<a href="#/final">VIEW THE PLANNED PROGRAMME ↗</a></div>'+
 '</section>';
}
