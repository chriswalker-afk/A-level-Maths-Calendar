/**
 * Pass 4B: optional self-awarded marks for individual question parts.
 *
 * Existing saved score (without scoreSource) is a valid whole-question mark.
 * Partial breakdowns must never be treated as precise skill accuracy.
 * When every part is valid, the total is automatically derived.
 */
const letters="abcdefghijklmnopqrstuvwxyz";
const own=(obj,key)=>Object.prototype.hasOwnProperty.call(obj,key);
const validMark=(value,max)=>Number.isInteger(value)&&value>=0&&value<=max;

export function partKey(question,index){
 return question.parts[index]?.[2]?.key||letters[index]||String(index+1);
}
export function marksBreakdown(question,marks={}){
 const values=marks&&typeof marks==="object"&&!Array.isArray(marks)?marks:{};
 const parts=question.parts.map((part,index)=>{
  const key=partKey(question,index);
  const raw=values[key];
  const valid=validMark(raw,part[1]);
  return {key,max:part[1],score:valid?raw:null,entered:valid,
    primarySkillId:part[2]?.primarySkillId||null,
    secondarySkillIds:part[2]?.secondarySkillIds||[]};
 });
 const entered=parts.filter(p=>p.entered).length;
 const subtotal=parts.reduce((sum,p)=>sum+(p.score??0),0);
 return {parts,entered,count:parts.length,subtotal,
  complete:parts.length>0&&entered===parts.length};
}
export function applyPartMark(record,question,key,raw){
 const allowed=question.parts.map((_,i)=>partKey(question,i));
 if(!allowed.includes(key))throw new Error("Unknown question part "+key);
 const part=question.parts[allowed.indexOf(key)];
 const next={...record,partMarks:{...(record.partMarks||{})}};
 const trimmed=String(raw??"").trim();
 const value=Number(trimmed);
 const valid=/^\d+$/.test(trimmed)&&validMark(value,part[1]);
 if(valid)next.partMarks[key]=value;
 else delete next.partMarks[key];
 const summary=marksBreakdown(question,next.partMarks);
 if(summary.complete){
  next.score=summary.subtotal;
  next.scoreSource="parts";
 }else if(record.scoreSource==="parts"){
  // The previously derived total is now stale. No false completion.
  delete next.score;
  delete next.scoreSource;
 }
 return {record:next,summary,invalid:trimmed!==""&&!valid};
}
export function applyOverallMark(record,question,raw){
 const next={...record};
 const trimmed=String(raw??"").trim();
 const value=Number(trimmed);
 const valid=trimmed!==""&&validMark(value,question.marks);
 if(valid){
  next.score=value;
  next.scoreSource="overall";
  // A manual total supersedes a detailed breakdown; avoid mismatched evidence.
  delete next.partMarks;
 }else{
  delete next.score;delete next.scoreSource;
  // Preserve unfinished part entries while editing a manual total, but do
  // not use them for analysis until a complete derived total is recorded.
 }
 return {record:next,invalid:trimmed!==""&&!valid};
}
export function clearAllMarks(record){
 const next={...record};
 delete next.score;delete next.scoreSource;delete next.partMarks;
 return next;
}
export function clearBreakdown(record){
 const next={...record};
 delete next.partMarks;
 if(next.scoreSource==="parts"){delete next.score;delete next.scoreSource;}
 return next;
}

/**
 * Only marks that belong unambiguously to one primary skill can support
 * skill accuracy: completed detailed marking, or a one-part question whose
 * entire score belongs to its single tagged part. Multi-part whole-question
 * marks and incomplete breakdowns cannot be allocated precisely.
 */
export function verifiedPartEvidence(question,record){
 // A single-part question is an exact exception to the multi-part rule:
 // the whole score belongs to its only part and therefore its only primary
 // skill. No allocation or estimate is needed, even for a legacy overall mark.
 const only=question?.parts?.length===1?question.parts[0]:null;
 if(only && (record?.scoreSource===undefined||record?.scoreSource==="overall") &&
    Number.isInteger(record?.score) && record.score>=0 &&
    question.marks===only[1] && record.score<=only[1] &&
    only[2]?.primarySkillId && !record.partMarks){
   return [{questionId:question.id,partKey:partKey(question,0),
     primarySkillId:only[2].primarySkillId,
     secondarySkillIds:[...(only[2].secondarySkillIds||[])],
     earned:record.score,available:only[1]}];
 }
 if(record?.scoreSource!=="parts")return [];
 const summary=marksBreakdown(question,record.partMarks);
 if(!summary.complete||record.score!==summary.subtotal)return [];
 return summary.parts.filter(part=>!!part.primarySkillId).map(part=>({
  questionId:question.id,partKey:part.key,primarySkillId:part.primarySkillId,
  secondarySkillIds:[...part.secondarySkillIds],earned:part.score,available:part.max
 }));
}
