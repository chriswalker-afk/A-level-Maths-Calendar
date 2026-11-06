/**
 * Release evidence audit. Read-only: never infer a 0% skill accuracy from
 * an unattempted/unmarked question. Counts published question skill links,
 * NOT demonstrated performance. The output is suitable for teacher review.
 */
import {specificationTopics} from "../src/data/specification.js";
import {programmeOne} from "../src/data/programmes.js";
import {isWeekReleased} from "../src/publication.js";
import {
 taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
 taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,
 taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions,taggedWeek10Questions
} from "../src/data/tagged-questions.js";

const sets=[
 taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
 taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,
 taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions,taggedWeek10Questions
];
const ESSENTIAL=new Set(["R","P","M","A"]);
const empty=()=>({questions:new Set(),marks:0,parts:0});
const pct=(part,total)=>total?Math.round(1000*part/total)/10:null;

export function releaseCoverageAudit(){
 // Always audit ALL authored weeks, including those not yet student-facing.
 const authoredStage={releaseMode:"manual",releasedWeeks:programmeOne.weeks.length};
 const published=programmeOne.weeks
  .filter(week=>isWeekReleased(week.number,sets[week.number-1]||[],{stage:authoredStage}))
  .map(week=>({week:week.number,questions:sets[week.number-1]}));
 const scoped=specificationTopics.flatMap(t=>t.skills.filter(s=>s.scope==="internal"));
 const direct=new Map(scoped.map(s=>[s.id,empty()]));
 const connected=new Map(scoped.map(s=>[s.id,new Set()]));
 let questions=0,essentialQuestions=0,parts=0,marks=0,coreMarks=0;
 const byWeek=[];
 const invalid=[];
 for(const {week,questions:qs} of published){
  questions+=qs.length;
  essentialQuestions+=qs.filter(q=>ESSENTIAL.has(q.section)).length;
  let weekParts=0,weekMarks=0;
  for(const q of qs){
   weekMarks+=q.marks;marks+=q.marks;
   if(ESSENTIAL.has(q.section))coreMarks+=q.marks;
   for(const part of q.parts){
    const info=part[2];
    if(!info?.primarySkillId || !direct.has(info.primarySkillId)){
     invalid.push(q.id+" has invalid or unpublished primary skill");
     continue;
    }
    parts++;weekParts++;
    const record=direct.get(info.primarySkillId);
    record.parts++;record.marks+=part[1];record.questions.add(q.id);
    if(q.section==="A" && !scoped.find(s=>s.id===info.primarySkillId&&s.year===1)){
     invalid.push(q.id+" contains an Applied part outside Year 1");
    }
    for(const link of info.secondarySkillIds||[]){
     if(!connected.has(link))invalid.push(q.id+" contains an unpublished connected skill");
     else connected.get(link).add(q.id);
    }
   }
  }
  byWeek.push({week,questions:qs.length,essential:qs.filter(q=>ESSENTIAL.has(q.section)).length,marks:weekMarks,parts:weekParts});
 }
 const byTopic=specificationTopics.map(t=>{
  const skills=t.skills.filter(s=>s.scope==="internal");
  const directIds=skills.filter(s=>direct.get(s.id)?.parts>0);
  const linkedIds=skills.filter(s=>direct.get(s.id)?.parts>0||connected.get(s.id)?.size>0);
  const connectedOnly=skills.filter(s=>direct.get(s.id)?.parts===0&&connected.get(s.id)?.size>0);
  const unlinked=skills.filter(s=>direct.get(s.id)?.parts===0&&connected.get(s.id)?.size===0);
  return {id:t.id,title:t.title,strand:t.strand,skills:skills.length,
   directlyAssessed:directIds.length,linked:linkedIds.length,
   directPercent:pct(directIds.length,skills.length),
   linkedPercent:pct(linkedIds.length,skills.length),
   primaryParts:directIds.reduce((n,s)=>n+direct.get(s.id).parts,0),
   primaryMarks:directIds.reduce((n,s)=>n+direct.get(s.id).marks,0),
   connectedOnly:connectedOnly.map(s=>({id:s.id,statement:s.statement})),
   noPublishedLink:unlinked.map(s=>({id:s.id,statement:s.statement}))
  };
 });
 const directSkills=byTopic.reduce((n,t)=>n+t.directlyAssessed,0);
 const linkedSkills=byTopic.reduce((n,t)=>n+t.linked,0);
 const fullSkills=specificationTopics.flatMap(t=>t.skills).length;
 const result={
  label:"Question-link coverage, not learner accuracy",
  totals:{questions,essentialQuestions,parts,marks,coreMarks,
   internalSkills:scoped.length,fullSpecificationSkills:fullSkills,
   directlyAssessed:directSkills,linked:linkedSkills,
   directPercent:pct(directSkills,scoped.length),
   linkedPercent:pct(linkedSkills,scoped.length),
   connectedOnly:linkedSkills-directSkills,
   noPublishedLink:scoped.length-linkedSkills},
  byWeek,byTopic,invalid
 };
 return result;
}
if(process.argv[1] && import.meta.url.endsWith(process.argv[1].replaceAll("\\","/"))){
 const report=releaseCoverageAudit();
 if(process.argv.includes("--json"))console.log(JSON.stringify(report,null,2));
 else {
  console.log("Release audit:",JSON.stringify(report.totals));
  console.log("Topics (directly assessed / linked / scope):");
  for(const t of report.byTopic)
   if(t.skills)console.log(t.id+" "+t.directlyAssessed+"/"+t.linked+"/"+t.skills+
      " primary parts="+t.primaryParts+" primary marks="+t.primaryMarks);
  console.log("No directly assessed skill:",report.byTopic
   .flatMap(t=>[...t.connectedOnly,...t.noPublishedLink].map(s=>t.id+" "+s.id+" "+s.statement)).join("\n"));
  if(report.invalid.length)console.error("INVALID:",report.invalid.join("; "));
 }
 if(report.invalid.length)process.exitCode=1;
}
