/**
 * Pass 4C: transparent, browser-local self-assessment analytics.
 *
 * - "Attempted" means a completed question with a valid overall score (0 counts).
 * - "Practised skill" means a finished question tagged to that skill, including
 *   secondary connections. It is exposure, not evidence of mastery.
 * - "Accuracy" ALWAYS uses validated, completed part-level marks assigned to
 *   the ONE primary skill for each part. Legacy overall-only marks are excluded
 *   from skill and topic accuracy, but count toward attempted questions.
 * - No evidence is represented as null, never an invented 0%.
 * - Only explicitly supplied, released questions are inspected.
 * - Results are derived from local data and never uploaded or persisted here.
 */
import {specificationTopics} from "./data/specification.js";
import {verifiedPartEvidence} from "./part-marking.js";
import {isQuestionFinished} from "./question-assessment.js";

const allowedScope=(scope)=>scope==="full"?"full":"internal";
const inScope=(skill,scope)=>scope==="full"||skill.scope==="internal";
const newSet=()=>new Set();
const safeRecord=(records,id)=>records&&typeof records==="object"&&records[id]&&typeof records[id]==="object"?records[id]:{};
const ratio=(earned,available)=>available>0?Math.round(100*earned/available):null;

function skillRecord(skill){
 return {
  id:skill.id,topicId:skill.topicId,statement:skill.statement,
  published:newSet(),attempted:newSet(),directAttempted:newSet(),connectedAttempted:newSet(),
  independent:newSet(),withHelp:newSet(),verifiedQuestions:newSet(),
  evidenceParts:0,earned:0,available:0,accuracy:null,exposure:"none"
 };
}
function topicRecord(topic,scope,skillStates){
 const included=topic.skills.filter(s=>inScope(s,scope));
 const reported=included.map(s=>skillStates.get(s.id));
 const combined=name=>new Set(reported.flatMap(s=>[...s[name]]));
 const published=combined("published"),attempted=combined("attempted");
 const independent=combined("independent"),withHelp=combined("withHelp");
 const verifiedQuestions=combined("verifiedQuestions");
 const directAttempted=combined("directAttempted");
 const connectedOnly=new Set([...combined("connectedAttempted")].filter(id=>!directAttempted.has(id)));
 const earned=reported.reduce((sum,s)=>sum+s.earned,0);
 const available=reported.reduce((sum,s)=>sum+s.available,0);
 const evidenceParts=reported.reduce((sum,s)=>sum+s.evidenceParts,0);
 const encounteredSkills=reported.filter(s=>s.attempted.size>0).length;
 const directSkills=reported.filter(s=>s.directAttempted.size>0).length;
 const evidencedSkills=reported.filter(s=>s.available>0).length;
 return {
  id:topic.id,title:topic.title,strand:topic.strand,
  inScope:included.length>0,skillsTotal:included.length,
  skillsEncountered:encounteredSkills,skillsDirect:directSkills,skillsEvidenced:evidencedSkills,
  coverage:included.length?Math.round(100*encounteredSkills/included.length):null,
  publishedQuestions:published.size,attemptedQuestions:attempted.size,
  directQuestions:directAttempted.size,connectedOnlyQuestions:connectedOnly.size,
  independent:independent.size,withHelp:withHelp.size,
  independenceUnrecorded:attempted.size-independent.size-withHelp.size,
  verifiedQuestions:verifiedQuestions.size,evidenceParts,earned,available,
  accuracy:ratio(earned,available),
  // This says how much scored evidence exists, not whether a skill is mastered.
  evidenceQuality:available===0?"none":verifiedQuestions.size>=3&&available>=12?"growing":"limited"
 };
}
/**
 * Compute self-marking data for the exact set of *published/released* questions.
 * The returned skill and topic maps are read-only by convention.
 */
export function calculateSpecificationProgress({questions=[],records={},scope="internal",topics=specificationTopics}={}){
 scope=allowedScope(scope);
 const allSkills=topics.flatMap(t=>t.skills).filter(s=>inScope(s,scope));
 const skillStates=new Map(allSkills.map(s=>[s.id,skillRecord(s)]));
 const uniqueQuestions=new Map();
 for(const q of questions||[]){
  if(q&&typeof q.id==="string"&&!uniqueQuestions.has(q.id))uniqueQuestions.set(q.id,q);
 }
 const totals={
  releasedQuestions:0,completedQuestions:0,
  selfMarkEarned:0,selfMarkAvailable:0,selfMarkAccuracy:null,
  independent:0,withHelp:0,independenceUnrecorded:0,
  verifiedQuestions:0,verifiedParts:0,verifiedEarned:0,verifiedAvailable:0,
  verifiedAccuracy:null,skillsEncountered:0,skillsDirect:0,skillsEvidenced:0,
  skillsTotal:allSkills.length,visibleTopics:0
 };
 for(const q of uniqueQuestions.values()){
  if(!Array.isArray(q.parts))continue;
  const record=safeRecord(records,q.id);
  const finished=isQuestionFinished(record,q.marks);
  // A skill can occur in several parts of the same question: use sets
  // to count one question, rather than one occurrence, per skill.
  const roles=new Map();
  for(const part of q.parts){
   const meta=part[2];
   if(!meta)continue;
   if(skillStates.has(meta.primarySkillId))roles.set(meta.primarySkillId,"primary");
   for(const id of meta.secondarySkillIds||[]){
    if(skillStates.has(id)&&roles.get(id)!=="primary")roles.set(id,"connected");
   }
  }
  // A question that only mentions a skill as a secondary link does not
  // qualify for the narrower internal exam if every mark is Year 2-only.
  if(![...roles.values()].includes("primary"))continue;
  totals.releasedQuestions++;
  if(finished){
   totals.completedQuestions++;
   totals.selfMarkEarned+=record.score;
   totals.selfMarkAvailable+=q.marks;
   if(record.status==="I")totals.independent++;
   else if(record.status==="P")totals.withHelp++;
   else totals.independenceUnrecorded++;
  }
  for(const [id,role] of roles){
   const skill=skillStates.get(id);
   skill.published.add(q.id);
   if(!finished)continue;
   skill.attempted.add(q.id);
   if(role==="primary")skill.directAttempted.add(q.id);
   else skill.connectedAttempted.add(q.id);
   if(record.status==="I")skill.independent.add(q.id);
   else if(record.status==="P")skill.withHelp.add(q.id);
  }
  if(!finished)continue;
  const verified=verifiedPartEvidence(q,record).filter(part=>skillStates.has(part.primarySkillId));
  if(verified.length){
   totals.verifiedQuestions++;
   totals.verifiedParts+=verified.length;
   for(const part of verified){
    const skill=skillStates.get(part.primarySkillId);
    if(!skill)continue;
    skill.verifiedQuestions.add(q.id);
    skill.evidenceParts++;
    skill.earned+=part.earned;
    skill.available+=part.available;
    totals.verifiedEarned+=part.earned;
    totals.verifiedAvailable+=part.available;
   }
  }
 }
 for(const s of skillStates.values()){
  s.accuracy=ratio(s.earned,s.available);
  s.exposure=s.attempted.size===0?"none":s.available===0?"practice only":"marked parts";
  if(s.attempted.size>0)totals.skillsEncountered++;
  if(s.directAttempted.size>0)totals.skillsDirect++;
  if(s.available>0)totals.skillsEvidenced++;
 }
 const topicResults=topics.map(topic=>topicRecord(topic,scope,skillStates));
 const topicMap=new Map(topicResults.map(t=>[t.id,t]));
 totals.visibleTopics=topicResults.filter(t=>t.inScope).length;
 totals.selfMarkAccuracy=ratio(totals.selfMarkEarned,totals.selfMarkAvailable);
 totals.verifiedAccuracy=ratio(totals.verifiedEarned,totals.verifiedAvailable);
 return {scope,summary:totals,topics:topicResults,topicMap,skills:skillStates};
}
