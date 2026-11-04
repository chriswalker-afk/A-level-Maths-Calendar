import test from "node:test";
import assert from "node:assert/strict";
import {
 originalPracticeState,originalPracticeSummary
} from "../src/topic-practice-progress.js";
import {getTopicPracticeQuestion} from "../src/data/topic-practice/index.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {taggedWeek01Questions} from "../src/data/tagged-questions.js";
import {startNewAttempt} from "../src/attempt-history.js";
import {backupToJSON,parseProgressBackup} from "../src/progress-portability.js";

const q=getTopicPracticeQuestion("P02","AO1");
test("fresh practice starts unmarked and marks 0 as a real finish",()=>{
 assert.equal(originalPracticeState(q,{}).state,"new");
 assert.equal(originalPracticeState(q,{workspace:{notes:"Work in progress"}}).state,"started");
 const marked=originalPracticeState(q,{score:0,status:"P"});
 assert.equal(marked.state,"marked");
 assert.equal(marked.score,0);
 assert.equal(marked.percent,0);
 assert.equal(marked.complete,true);
 assert.equal(marked.independence,"With help");
});

test("a retry preserves the latest finished score rather than treating it as a new zero",()=>{
 const original={score:4,status:"I",workspace:{notes:"Initial attempt"}};
 const retry=startNewAttempt(q,original,"2026-11-04T09:00:00.000Z");
 retry.workspace={notes:"Trying independently again"};
 const state=originalPracticeState(q,retry);
 assert.equal(state.state,"retry");
 assert.equal(state.score,4);
 assert.equal(state.independence,"Independent");
 assert.equal(state.complete,true);
 const summary=originalPracticeSummary({[q.id]:retry});
 assert.equal(summary.completed,1);
 assert.equal(summary.started,1);
 assert.equal(summary.perAO.AO1.completed,1);
 assert.equal(summary.perAO.AO1.started,1);
 const roundTrip=parseProgressBackup(backupToJSON({[q.id]:retry})).data;
 assert.deepEqual(roundTrip[q.id],retry);
});

test("internal and full-course denominators reflect all 54/57 published originals",()=>{
 const intern=originalPracticeSummary({});
 const full=originalPracticeSummary({},"full");
 assert.equal(intern.total,54);
 assert.equal(full.total,57);
 assert.deepEqual(intern.perAO.AO3,{total:18,completed:0,started:0,earned:0,possible:0});
 assert.deepEqual(full.perAO.AO3,{total:19,completed:0,started:0,earned:0,possible:0});
 assert.equal(intern.byTopic.M09.total,0);
 assert.equal(full.byTopic.M09.total,3);
});

test("weekly-only results do not change any original-practice progress indicators",()=>{
 const weekOnly={"W01-R1":{score:2,status:"I"}};
 assert.deepEqual(originalPracticeSummary(weekOnly),originalPracticeSummary({}));
 const topicOnly={[q.id]:{score:3,status:"I"}};
 const reportA=calculateSpecificationProgress({
  scope:"internal",questions:taggedWeek01Questions,records:{}
 });
 const reportB=calculateSpecificationProgress({
  scope:"internal",questions:taggedWeek01Questions,records:topicOnly
 });
 assert.deepEqual(reportB,reportA,"new question scores must not enter weekly skill accuracy");
 assert.equal(originalPracticeSummary(topicOnly).completed,1);
});

test("all AO summaries count marked questions, not unmarked working as zero",()=>{
 const q2=getTopicPracticeQuestion("P02","AO2");
 const q3=getTopicPracticeQuestion("P02","AO3");
 const records={
  [q.id]:{score:4,status:"I"},
  [q2.id]:{workspace:{notes:"Partial proof"}},
  [q3.id]:{score:0,status:"P"}
 };
 const summary=originalPracticeSummary(records);
 assert.equal(summary.completed,2);
 assert.equal(summary.started,1);
 assert.equal(summary.independent,1);
 assert.equal(summary.perAO.AO1.earned,4);
 assert.equal(summary.perAO.AO3.completed,1);
 assert.equal(summary.perAO.AO3.earned,0);
 assert.equal(summary.byTopic.P02.completed,2);
});
