/**
 * Week 10 is an examination session, not a Week 1–9 drill.
 * The paper groups are honest: Pure 100/120 min; Year 1 Applied 50/60 min.
 * No stored mark is ever assumed for an unmarked question.
 */
import {latestFinishedRecord} from "./attempt-history.js";
export const MOCK_WEEK=10;
export const MOCK_PAPERS={
 P:{id:"pure",short:"PURE",title:"Pure Mathematics",duration:120,marks:100,questionCount:12},
 A:{id:"applied",short:"APPLIED",title:"Year 1 Statistics & Mechanics",duration:60,marks:50,questionCount:10}
};
const plain=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
const validIso=x=>typeof x==="string"&&Number.isFinite(Date.parse(x));
const toMs=x=>validIso(x)?Date.parse(x):null;
export function mockPaperForSection(section){return MOCK_PAPERS[section]||null;}
export function mockPaperQuestions(questions,section){return questions.filter(q=>q.section===section);}
export function mockPaperTotals(questions,records={},section){
 const paper=mockPaperForSection(section);
 if(!paper)throw new Error("Unknown mock section");
 const qs=mockPaperQuestions(questions,section);
 const rows=qs.map((q,index)=>{
  const record=latestFinishedRecord(q,records[q.id]||{});
  const marked=Number.isInteger(record?.score)&&record.score>=0&&record.score<=q.marks;
  return {q,index,marked,score:marked?record.score:null,
   status:marked?(record.status==="I"?"I":record.status==="P"?"P":null):null};
 });
 const marked=rows.filter(r=>r.marked);
 const earned=marked.reduce((a,r)=>a+r.score,0);
 const credited=marked.reduce((a,r)=>a+r.q.marks,0);
 const possible=rows.reduce((a,r)=>a+r.q.marks,0);
 const byCategory={};
 if(section==="A"){
  for(const kind of ["statistics","mechanics"]){
   const part=rows.filter(r=>r.q.paper===kind);
   const assessed=part.filter(r=>r.marked);
   byCategory[kind]={count:part.length,marked:assessed.length,
    marks:part.reduce((a,r)=>a+r.q.marks,0),
    earned:assessed.reduce((a,r)=>a+r.score,0),
    credited:assessed.reduce((a,r)=>a+r.q.marks,0)};
  }
 }
 return {paper,rows,count:rows.length,finished:marked.length,unmarked:rows.length-marked.length,
  earned,credited,possible,complete:rows.length>0&&marked.length===rows.length,
  byCategory};
}
export function mockTimerInfo(reflections,section,now=Date.now()){
 const spec=mockPaperForSection(section);
 if(!spec)throw new Error("Unknown mock section");
 const saved=plain(reflections?.week10)?reflections.week10:{};
 const raw=plain(saved.timers?.[spec.id])?saved.timers[spec.id]:{};
 const start=toMs(raw.startedAt),end=toMs(raw.endedAt);
 const active=start!==null&&end===null;
 const remainingSeconds=active?Math.max(0,Math.ceil((start+spec.duration*60*1000-now)/1000)):null;
 return {started:start!==null,active,ended:start!==null&&end!==null,
  startedAt:raw.startedAt||null,endedAt:raw.endedAt||null,remainingSeconds,
  overtime:active&&remainingSeconds===0};
}
export function mockTimerUpdate(reflections={},section,action,nowIso=new Date().toISOString()){
 const spec=mockPaperForSection(section);
 if(!spec)throw new Error("Unknown mock section");
 if(!validIso(nowIso))throw new Error("Invalid sitting timestamp");
 if(!["start","finish","restart"].includes(action))throw new Error("Invalid paper action");
 const previous=plain(reflections)?reflections:{};
 const week=plain(previous.week10)?previous.week10:{};
 const timers=plain(week.timers)?week.timers:{};
 const current=plain(timers[spec.id])?timers[spec.id]:{};
 if(action==="finish"&&(!validIso(current.startedAt)||validIso(current.endedAt)))
  throw new Error("No active timed sitting to end");
 const next=action==="finish"?{...current,endedAt:nowIso}
  :{startedAt:nowIso,endedAt:null};
 return {...previous,week10:{...week,timers:{...timers,[spec.id]:next}}};
}
export function formatMockClock(totalSeconds){
 const seconds=Math.max(0,Math.floor(Number(totalSeconds)||0));
 const minutes=Math.floor(seconds/60);
 return String(minutes).padStart(2,"0")+":"+String(seconds%60).padStart(2,"0");
}
export function mockRepairPriorities(questions,records={},limit=5){
 return questions.flatMap(q=>{
  const record=latestFinishedRecord(q,records[q.id]||{});
  if(!Number.isInteger(record?.score)||record.score<0||record.score>q.marks)return [];
  const lost=q.marks-record.score;
  if(lost===0)return [];
  return [{id:q.id,title:q.title,section:q.section,question:q,
   score:record.score,marks:q.marks,lost,fraction:lost/q.marks}];
 }).sort((a,b)=>b.fraction-a.fraction||b.lost-a.lost||a.id.localeCompare(b.id)).slice(0,limit);
}
