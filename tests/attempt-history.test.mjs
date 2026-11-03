import test from "node:test";
import assert from "node:assert/strict";
import {taggedWeek01Questions} from "../src/data/tagged-questions.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {
 MAX_PAST_ATTEMPTS,startNewAttempt,latestFinishedRecord,hasFinishedAttempt,
 hasNewAttemptInProgress,attemptArchive,attemptComparison,completedAttemptTimeline
} from "../src/attempt-history.js";

const q=taggedWeek01Questions.find(x=>x.id==="W01-P2");
const initial={
 score:7,status:"P",scoreSource:"parts",partMarks:{a:2,b:2,c:3},
 error:"Reasoning",hintSeen:true,working:"Factorise first!",
 workspace:{
  mode:"draw",notes:"Important handwritten text",
  mathLines:[{id:"step-first",latex:"x^2-4",reason:"start"}],
  strokes:[{color:"#183a46",width:2,points:[[0.1,0.1],[0.9,0.9]]}]
 }
};
test("starting a new attempt archives all prior evidence and makes a blank current attempt",()=>{
 const start=startNewAttempt(q,initial,"2026-11-03T11:00:00.000Z");
 assert.equal(start.score,undefined);
 assert.equal(start.workspace,undefined,"fresh workspace is deliberately blank");
 assert.equal(start.working,undefined);
 assert.equal(start.status,undefined);
 assert.equal(start.attemptHistory.length,1);
 const saved=start.attemptHistory[0];
 assert.equal(saved.score,7);
 assert.equal(saved.scoreSource,"parts");
 assert.deepEqual(saved.partMarks,initial.partMarks);
 assert.deepEqual(saved.workspace,initial.workspace);
 assert.equal(saved.working,"Factorise first!");
 assert.equal(saved.error,"Reasoning");
 assert.equal(saved.hintSeen,true);
 assert.equal(saved.archivedAt,"2026-11-03T11:00:00.000Z");
 assert.ok(!Object.hasOwn(saved,"attemptHistory"));
 assert.equal(initial.attemptHistory,undefined,"original record not mutated");
 assert.equal(hasNewAttemptInProgress(q,start),true);
 assert.equal(latestFinishedRecord(q,start).score,7);
 assert.equal(hasFinishedAttempt(q,start),true);
});
test("a second marked attempt adds a new score without counting two distinct questions",()=>{
 const ongoing=startNewAttempt(q,initial,"2026-11-03T11:00:00.000Z");
 const complete={...ongoing,score:9,status:"I",scoreSource:"parts",
  partMarks:{a:2,b:3,c:4},lastMarkedAt:"2026-11-03T11:18:00.000Z"};
 const trend=attemptComparison(q,complete);
 assert.equal(trend.change,2);
 assert.equal(trend.previous,7);
 assert.equal(trend.latest,9);
 assert.equal(trend.attempts,2);
 const timeline=completedAttemptTimeline(q,complete);
 assert.deepEqual(timeline.map(t=>t.score),[7,9]);
 assert.equal(timeline[0].status,"P");
 assert.equal(timeline[1].status,"I");
 assert.equal(latestFinishedRecord(q,complete).score,9);
 assert.equal(hasNewAttemptInProgress(q,complete),false);
 const report=calculateSpecificationProgress({questions:[q],records:{[q.id]:complete}});
 assert.equal(report.summary.completedQuestions,1,"Do not double count a retry as a separate question");
 assert.equal(report.summary.selfMarkEarned,9,"Latest attempt determines current accuracy");
 assert.equal(report.summary.verifiedAvailable,10);
 assert.equal(report.summary.verifiedEarned,9);
});
test("analytics retains the last completed result while the new attempt is in progress",()=>{
 const old=startNewAttempt(q,initial,"2026-11-03T11:00:00.000Z");
 const report=calculateSpecificationProgress({questions:[q],records:{[q.id]:old}});
 assert.equal(report.summary.completedQuestions,1);
 assert.equal(report.summary.selfMarkEarned,7);
 assert.equal(report.summary.verifiedAvailable,10);
 assert.equal(report.summary.verifiedEarned,7);
 assert.equal(report.topicMap.get("P02").attemptedQuestions,1);
});
test("invalid transitions and local history overflow fail without data loss",()=>{
 assert.throws(()=>startNewAttempt(q,{}),/Finish and mark/);
 assert.throws(()=>startNewAttempt(q,{status:"P",score:11}),/Finish and mark/);
 assert.throws(()=>startNewAttempt(q,initial,"not-a-time"),/invalid attempt date/);
 let current=initial;
 for(let i=0;i<MAX_PAST_ATTEMPTS;i++){
  current=startNewAttempt(q,current,"2026-11-03T11:00:00.000Z");
  current={...current,score:2,status:"I"};
 }
 const before=JSON.stringify(current);
 assert.throws(()=>startNewAttempt(q,current),/local attempt history limit/);
 assert.equal(JSON.stringify(current),before,"history stays intact on failure");
 assert.equal(attemptArchive(current).length,MAX_PAST_ATTEMPTS);
});
test("legacy records can be archived without inventing an original completion date",()=>{
 const legacy={score:0,status:"I",working:"The result was zero",workspace:{notes:"old"}};
 const retried=startNewAttempt(q,legacy,"2026-11-03T11:00:00.000Z");
 assert.equal(retried.attemptHistory[0].score,0);
 const timeline=completedAttemptTimeline(q,retried);
 assert.equal(timeline[0].savedAt,"2026-11-03T11:00:00.000Z");
 assert.equal(attemptComparison(q,retried),null,"one finished attempt isn't yet an improvement trend");
});
