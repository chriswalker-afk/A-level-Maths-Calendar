import {getSpecTopic,getSpecSkill,specificationTopics} from "../specification.js";

/**
 * A separate bank of original, topic-specific exam-style questions.
 * Exactly one published question per topic and dominant assessment objective.
 * Weekly calendar questions must NEVER be imported or reused here.
 */
export const AO_INFO=Object.freeze([
 Object.freeze({id:"AO1",name:"Technique",description:"Use familiar mathematical methods accurately."}),
 Object.freeze({id:"AO2",name:"Reasoning",description:"Choose an approach, justify conclusions and connect ideas."}),
 Object.freeze({id:"AO3",name:"Problem solving & modelling",description:"Apply mathematics in an unfamiliar or realistic setting."})
]);
const AO_SET=new Set(AO_INFO.map(a=>a.id));
const LETTERS="abcdefghijklmnopqrstuvwxyz";
const present=value=>typeof value==="string"&&value.trim().length>0;
function insist(condition,message){
 if(!condition)throw new Error("Topic practice: "+message);
}

/**
 * Validation runs when the catalogue is imported. A half-written question
 * cannot silently appear to students or interfere with their saved records.
 * Returns normalised questions compatible with the existing workbench/marking UI.
 */
export function validateTopicPracticeBank(collections){
 insist(collections&&typeof collections==="object"&&!Array.isArray(collections),
  "expected collections keyed by topic");
 const known=new Set(specificationTopics.map(t=>t.id));
 insist(Object.keys(collections).length===known.size,
  "all 19 topic modules must be registered");
 for(const topicId of known)insist(Object.hasOwn(collections,topicId),"missing module "+topicId);
 const bySlot=new Map(),byId=new Map(),questions=[];
 for(const [topicId,raw] of Object.entries(collections)){
  const topic=getSpecTopic(topicId);
  insist(Boolean(topic),"unknown topic module "+topicId);
  insist(Array.isArray(raw),"module "+topicId+" must export an array");
  for(const original of raw){
   insist(original&&typeof original==="object"&&!Array.isArray(original),
    "invalid question in "+topicId);
   const q=original;
   const label=topicId+"/"+String(q.aoFocus??"?");
   insist(q.published===true,label+" must be fully approved before inclusion (no drafts)");
   insist(q.topicId===topicId,label+" topic ID does not match its module");
   insist(AO_SET.has(q.aoFocus),label+" has unknown objective");
   insist(q.id==="TP-"+topicId+"-"+q.aoFocus,label+" has unstable question ID");
   insist(!byId.has(q.id),"duplicate ID "+q.id);
   insist(["internal","full"].includes(q.scope),label+" needs an explicit syllabus scope");
   insist(q.scope==="full"||topic.skills.some(s=>s.scope==="internal"),
    label+" is Year 2-only and cannot be internal practice");
   for(const field of ["title","stem","hint","answer","misconception","reflection"])
    insist(present(q[field]),label+" missing "+field);
   insist(Number.isInteger(q.marks)&&q.marks>0&&q.marks<=25,label+" invalid marks");
   insist(Number.isInteger(q.minutes)&&q.minutes>0,label+" invalid minutes");
   insist(q.ao&&typeof q.ao==="object"&&!Array.isArray(q.ao),
    label+" needs an AO mark breakdown");
   insist(Object.keys(q.ao).every(k=>AO_SET.has(k)),label+" unknown AO mark key");
   insist(Object.values(q.ao).every(n=>Number.isInteger(n)&&n>=0),
    label+" AO marks must be nonnegative integers");
   insist(Object.values(q.ao).reduce((a,b)=>a+b,0)===q.marks,
    label+" AO marks must total the question marks");
   insist((q.ao[q.aoFocus]||0)>0&&
     (q.ao[q.aoFocus]||0)>=Math.max(...Object.values(q.ao)),
    label+" declared AO emphasis is not the dominant objective");
   insist(Array.isArray(q.parts)&&q.parts.length>0&&q.parts.length<=LETTERS.length,
    label+" must contain 1-26 marked parts");
   insist(Array.isArray(q.steps)&&q.steps.length===q.parts.length&&q.steps.every(present),
    label+" needs one worked mark-scheme step per part");
   const parts=q.parts.map((part,i)=>{
    insist(Array.isArray(part)&&part.length===3,label+" part "+(i+1)+" needs text, marks, tags");
    const [statement,marks,tags]=part;
    insist(present(statement),label+" part "+(i+1)+" missing text");
    insist(Number.isInteger(marks)&&marks>0,label+" part "+(i+1)+" invalid marks");
    insist(tags&&typeof tags==="object"&&!Array.isArray(tags),
      label+" part "+(i+1)+" needs skill tags");
    const primary=getSpecSkill(tags.primarySkillId);
    insist(Boolean(primary),label+" part "+(i+1)+" unknown primary skill");
    const secondary=tags.secondarySkillIds??[];
    insist(Array.isArray(secondary)&&new Set(secondary).size===secondary.length,
      label+" part "+(i+1)+" invalid connected skills");
    insist(!secondary.includes(primary.id),label+" primary skill repeated as connected");
    for(const id of [primary.id,...secondary]){
     const skill=getSpecSkill(id);
     insist(Boolean(skill),label+" unknown connected skill "+id);
     insist(q.scope==="full"||skill.scope==="internal",
      label+" uses Year 2 skills in internal practice");
    }
    return [statement,marks,{
     key:LETTERS[i],primarySkillId:primary.id,secondarySkillIds:[...secondary]
    }];
   });
   insist(parts.reduce((total,part)=>total+part[1],0)===q.marks,
    label+" part marks do not total the question marks");
   const primarySkillIds=[...new Set(parts.map(p=>p[2].primarySkillId))];
   const connectedSkillIds=[...new Set(parts.flatMap(p=>p[2].secondarySkillIds))]
    .filter(id=>!primarySkillIds.includes(id));
   insist([...primarySkillIds,...connectedSkillIds].some(id=>getSpecSkill(id).topicId===topicId),
    label+" must genuinely cover its advertised topic");
   const question=Object.freeze({...q,parts,primarySkillIds,connectedSkillIds});
   const slot=topicId+":"+q.aoFocus;
   insist(!bySlot.has(slot),"more than one published question for "+slot);
   bySlot.set(slot,question);
   byId.set(question.id,question);
   questions.push(question);
  }
 }
 return {questions:Object.freeze(questions),byId,bySlot};
}
