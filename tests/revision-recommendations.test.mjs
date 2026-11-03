import test from "node:test";
import assert from "node:assert/strict";
import {taggedWeek01Questions as week1} from "../src/data/tagged-questions.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {recommendRevision} from "../src/revision-recommendations.js";
import {renderRevisionSuggestions} from "../src/revision-recommendations-view.js";
import {startNewAttempt} from "../src/attempt-history.js";

const question=id=>week1.find(q=>q.id===id);
const build=(questions=week1,records={},scope="internal")=>
 ({questions,records,scope,report:calculateSpecificationProgress({questions,records,scope})});

test("a new student gets diverse published practice with human-readable reasons",()=>{
 const result=recommendRevision(build());
 assert.ok(result.length>=3&&result.length<=5);
 assert.equal(new Set(result.map(x=>x.questionId)).size,result.length);
 assert.ok(result.some(x=>x.section==="A"),"Include applied practice");
 assert.ok(result.some(x=>x.section==="P"||x.section==="M"),"Include connected reasoning");
 assert.ok(result.every(x=>x.href.startsWith("#/study/1/")));
 assert.ok(result.every(x=>x.reason.length>=45));
 assert.ok(result.every(x=>x.kind==="Explore an unpractised skill"));
 const html=renderRevisionSuggestions(build());
 assert.match(html,/What should I practise next\?/);
 assert.match(html,/suggestions, not a judgement/);
 assert.doesNotMatch(html,/#\/study\/2\//,"Future-week content never appears");
});
test("supported and low-mark attempts are suggested for an honest fresh retry",()=>{
 const q=question("W01-P1");
 const records={[q.id]:{score:2,status:"P"}};
 const result=recommendRevision(build([q],records));
 assert.equal(result.length,1);
 assert.equal(result[0].kind,"Try again independently");
 assert.equal(result[0].completed,true);
 assert.match(result[0].reason,/with help/);
 assert.equal(result[0].href,"#/study/1/P/0");
});
test("unfinished reattempt is suggested as an in-progress continuation",()=>{
 const q=question("W01-P1");
 const started=startNewAttempt(q,{score:4,status:"P"},"2026-11-03T11:00:00.000Z");
 const result=recommendRevision(build([q],{[q.id]:started}));
 assert.equal(result.length,1);
 assert.equal(result[0].kind,"Finish your reattempt");
 assert.equal(result[0].inProgress,true);
 assert.match(renderRevisionSuggestions(build([q],{[q.id]:started})),/Finish this attempt/);
});
test("unreleased future content is never recommended and empty sets are graceful",()=>{
 const q=question("W01-P2");
 const result=recommendRevision(build([q]));
 assert.equal(result.length,1);
 assert.equal(result[0].questionId,"W01-P2");
 const empty=recommendRevision(build([]));
 assert.deepEqual(empty,[]);
 assert.match(renderRevisionSuggestions(build([])),/up to date with the published questions/i);
 const future={...question("W01-R2"),id:"W29-X1",
  parts:[[question("W01-R2").parts[0][0],2,{
   key:"a",primarySkillId:"M09-001",secondarySkillIds:[]}]]};
 const internal=recommendRevision(build([future],{},"internal"));
 assert.deepEqual(internal,[],"Year 2 only material cannot appear in internal recommendations");
 const full=recommendRevision(build([future],{},"full"));
 assert.equal(full.length,1);
 assert.equal(full[0].href,"#/study/29/R/0");
});
test("latest scores drive suggestions without duplicating historical reattempts",()=>{
 const q=question("W01-R2");
 const saved=startNewAttempt(q,{score:0,status:"P"},"2026-11-03T11:00:00.000Z");
 const completed={...saved,score:2,status:"I"};
 const result=recommendRevision(build([q],{[q.id]:completed}));
 assert.deepEqual(result,[],"A fully independent latest mark needs no immediate retry");
 const lower={...saved,score:1,status:"I"};
 const suggestion=recommendRevision(build([q],{[q.id]:lower}));
 assert.equal(suggestion.length,1);
 assert.equal(suggestion[0].kind,"Revisit a previous mistake");
});
test("requested suggestion limit is bounded and never multiplies question IDs",()=>{
 const result=recommendRevision({...build(),limit:1000});
 assert.ok(result.length<=5);
 assert.equal(new Set(result.map(x=>x.questionId)).size,result.length);
 assert.deepEqual(recommendRevision({...build(),limit:0}),[]);
});
