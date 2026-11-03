/**
 * Pass 4D: explicit, non-destructive reattempts.
 *
 * The active record is the attempt being worked on. Previously finished
 * records are archived without deleting the student's notes, maths lines,
 * drawing, marks, help status or old part breakdown.
 *
 * Historical scores are useful for trends, NOT additional distinct-question
 * attempts in specification analytics. Only the latest finished score of a
 * question should contribute to current proficiency statistics.
 */
import {isQuestionFinished} from "./question-assessment.js";

export const MAX_PAST_ATTEMPTS=20;
const validDate=value=>typeof value==="string"&&!Number.isNaN(Date.parse(value));
const plain=value=>value!==null&&typeof value==="object"&&!Array.isArray(value);

export function attemptArchive(record){
 return Array.isArray(record?.attemptHistory)
  ? record.attemptHistory.filter(plain)
  : [];
}
export function latestFinishedRecord(question,record={}){
 if(isQuestionFinished(record,question.marks))return record;
 const history=attemptArchive(record);
 for(let i=history.length-1;i>=0;i--){
  if(isQuestionFinished(history[i],question.marks))return history[i];
 }
 return null;
}
export function hasFinishedAttempt(question,record){
 return latestFinishedRecord(question,record)!==null;
}
export function startNewAttempt(question,record={},now=new Date().toISOString()){
 if(!plain(record))throw new Error("No valid question record to archive.");
 if(!isQuestionFinished(record,question.marks))
  throw new Error("Finish and mark this attempt before starting another.");
 if(!validDate(now))throw new Error("An invalid attempt date was provided.");
 const history=attemptArchive(record);
 if(history.length>=MAX_PAST_ATTEMPTS)
  throw new Error("This question has reached the local attempt history limit. Export your progress before making further changes.");
 // Only capture data associated with one attempt; never nest all older history.
 const {
  attemptHistory,_draft,startAt,startedAt,archivedAt,
  ...contents
 }=record;
 const snapshot=JSON.parse(JSON.stringify({...contents,archivedAt:now}));
 // New attempt starts entirely blank; the previous working survives in
 // snapshot. The app must only commit this object if localStorage succeeds.
 return {
  attemptHistory:[...history,snapshot],
  startedAt:now
 };
}
export function completedAttemptTimeline(question,record={}){
 const history=attemptArchive(record)
  .filter(entry=>isQuestionFinished(entry,question.marks))
  .map((entry,index)=>({
    number:index+1,score:entry.score,max:question.marks,
    status:entry.status==="I"?"I":entry.status==="P"?"P":null,
    savedAt:validDate(entry.archivedAt)?entry.archivedAt:null,
    fromHistory:true,record:entry
  }));
 const current=isQuestionFinished(record,question.marks)?[{
  number:history.length+1,score:record.score,max:question.marks,
  status:record.status==="I"?"I":record.status==="P"?"P":null,
  savedAt:validDate(record.lastMarkedAt)?record.lastMarkedAt:null,
  fromHistory:false,record
 }]:[];
 return [...history,...current];
}
export function attemptComparison(question,record={}){
 const attempts=completedAttemptTimeline(question,record);
 if(attempts.length<2)return null;
 const previous=attempts.at(-2),latest=attempts.at(-1);
 return {previous:previous.score,latest:latest.score,change:latest.score-previous.score,
  max:question.marks,attempts:attempts.length};
}
export function hasNewAttemptInProgress(question,record={}){
 return attemptArchive(record).length>0&&!isQuestionFinished(record,question.marks);
}
