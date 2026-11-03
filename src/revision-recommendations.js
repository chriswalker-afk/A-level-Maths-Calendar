/**
 * Context-sensitive revision suggestions. Suggestions are derived only from
 * explicitly supplied RELEASED questions, tagged primary skills and the
 * student's own self-marked record.
 *
 * Not a grade prediction or diagnosis of a weak student: low accuracy may
 * reflect a single item. Unattempted is "not yet practised", never "failed".
 */
import {getSpecSkill} from "./data/specification.js";
import {latestFinishedRecord,hasNewAttemptInProgress} from "./attempt-history.js";

const MAX_RECOMMENDATIONS=5;
const isScope=(skill,scope)=>Boolean(skill)&&(scope==="full"||skill.scope==="internal");
const shortStatement=s=>s?.statement?.replace(/^I can /,"")||"this skill";
const bounded=(a,b)=>Math.min(b,Math.max(a,0));
export function recommendRevision({questions=[],records={},report,scope="internal",limit=MAX_RECOMMENDATIONS}={}){
 if(!report)return [];
 const groupIndex={};
 const candidates=[];
 const unique=new Set();
 for(const q of questions){
  if(!q?.id||unique.has(q.id)||!Array.isArray(q.parts))continue;
  unique.add(q.id);
  const weekNumber=Number(q.id.match(/^W(\d+)-/)?.[1])||1;
  // An index is local to its own week's subsection, not cumulative.
  const key=weekNumber+"-"+q.section;
  const sectionIndex=groupIndex[key]||0;
  groupIndex[key]=sectionIndex+1;
  const primaries=[...new Set(q.parts.map(part=>part?.[2]?.primarySkillId).filter(Boolean))];
  const target=primaries.map(id=>getSpecSkill(id)).filter(s=>isScope(s,scope));
  if(!target.length)continue;
  const own=records?.[q.id]||{};
  const latest=latestFinishedRecord(q,own);
  const reattemptPending=hasNewAttemptInProgress(q,own);
  const qUrl="#/study/"+weekNumber+"/"+q.section+"/"+sectionIndex;
  let score=0,kind="",reason="",skill=target[0];
  if(reattemptPending){
   kind="Finish your reattempt";score=130;
   reason="You started a fresh attempt after marking an earlier one. Finish your new working and record its marks to see how you have changed.";
  }else if(latest){
   const fraction=latest.score/q.marks;
   if(latest.status==="P"){
    score=100+(1-fraction)*20;kind="Try again independently";
    reason="You previously completed this question with help ("+latest.score+"/"+q.marks+"). Try another attempt without a hint.";
   }else if(fraction<0.7){
    score=94+(1-fraction)*20;kind="Revisit a previous mistake";
    reason="Your latest self-mark was "+latest.score+"/"+q.marks+". Try finding the first uncertain step before checking the solution again.";
   }else if(fraction<0.9){
    score=39;kind="Consolidate";
    reason="You earned "+latest.score+"/"+q.marks+" marks last time. A fresh approach may help secure the remaining marks.";
   }else continue;
  }else{
   const weak=target
    .map(s=>({skill:s,state:report.skills.get(s.id)}))
    .filter(({state})=>state&&state.available>0&&state.accuracy<70)
    .sort((a,b)=>a.state.accuracy-b.state.accuracy);
   const unseen=target
    .map(s=>({skill:s,state:report.skills.get(s.id)}))
    .filter(({state})=>!state||state.attempted.size===0);
   const unverified=target
    .map(s=>({skill:s,state:report.skills.get(s.id)}))
    .filter(({state})=>state&&state.attempted.size>0&&state.available===0);
   if(weak.length){
    skill=weak[0].skill;
    score=91+(70-weak[0].state.accuracy)/10;
    kind="Build confidence with a new question";
    reason="An early self-marked result on "+shortStatement(skill)+" was "+weak[0].state.accuracy+"%. Try a different question before judging how secure it is.";
   }else if(unseen.length){
    skill=unseen[0].skill;score=75;
    kind="Explore an unpractised skill";
    reason="You have not completed a published question testing "+shortStatement(skill)+". This is a chance to build coverage.";
   }else if(unverified.length){
    skill=unverified[0].skill;score=67;
    kind="Add better evidence";
    reason="You have practised "+shortStatement(skill)+", but there are no precisely attributable part marks yet. Consider detailed self-marking.";
   }else{
    skill=target[0];score=46;
    kind="Connect your methods";
    reason="Try a different problem involving "+shortStatement(skill)+" to broaden your practice.";
   }
   // Include some connected reasoning rather than only the easiest recall.
   if(["P","M","A"].includes(q.section))score+=7;
   if(q.section==="T")score+=4;
   if(q.section==="X")score-=14;
  }
  // The student remains in control; all rationale is deliberately modest.
  candidates.push({questionId:q.id,title:q.title,href:qUrl,kind,reason,
   primarySkillId:skill.id,topicId:skill.topicId,section:q.section,
   marks:q.marks,completed:Boolean(latest),inProgress:reattemptPending,
   priority:score,style:q.section});
 }
 candidates.sort((a,b)=>b.priority-a.priority||a.questionId.localeCompare(b.questionId));
 const picked=[],used=new Set(),bySection=new Map(),byTopic=new Map();
 const max=bounded(Number.isInteger(limit)?limit:MAX_RECOMMENDATIONS,MAX_RECOMMENDATIONS);
 // First pass covers multiple topic areas and question types.
 for(const item of candidates){
  if(picked.length>=max)break;
  if((bySection.get(item.section)||0)>=2||(byTopic.get(item.topicId)||0)>=3)continue;
  if(!item.inProgress&&item.completed&&picked.filter(p=>p.completed&&!p.inProgress).length>=2)continue;
  picked.push(item);used.add(item.questionId);
  bySection.set(item.section,(bySection.get(item.section)||0)+1);
  byTopic.set(item.topicId,(byTopic.get(item.topicId)||0)+1);
 }
 // Allow another question from the same topic if too few areas are published.
 for(const item of candidates){
  if(picked.length>=max)break;
  if(used.has(item.questionId))continue;
  picked.push(item);used.add(item.questionId);
 }
 return picked;
}
