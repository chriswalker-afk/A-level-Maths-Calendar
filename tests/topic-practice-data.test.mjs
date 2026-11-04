import test from "node:test";
import assert from "node:assert/strict";
import {specificationTopics} from "../src/data/specification.js";
import {validateTopicPracticeBank,AO_INFO} from "../src/data/topic-practice/schema.js";
import {
 topicPracticeQuestions,getTopicPracticeSlots,getTopicPracticeQuestion,topicPracticeRoute
} from "../src/data/topic-practice/index.js";
import {taggedWeek01Questions} from "../src/data/tagged-questions.js";

const empty=()=>Object.fromEntries(specificationTopics.map(t=>[t.id,[]]));
function fixture(){
 return {
  id:"TP-P02-AO2",published:true,topicId:"P02",aoFocus:"AO2",scope:"internal",
  title:"Independent algebra question",marks:4,minutes:6,ao:{AO1:1,AO2:3,AO3:0},
  stem:"Show that an algebraic condition is satisfied.",
  parts:[
   ["Determine a suitable expression.",1,{primarySkillId:"P02-001"}],
   ["Justify the conclusion.",3,{primarySkillId:"P02-003",secondarySkillIds:["P02-001"]}]
  ],
  hint:"Identify the main structure first.",
  steps:["A correct expression. [1]","A complete argument. [3]"],
  answer:"A justified conclusion.",
  misconception:"One special case does not establish the general result.",
  reflection:"Where does the argument rely on its assumptions?"
 };
}
const withQuestion=q=>{const data=empty();data[q.topicId]=[q];return data;};

test("all 57 independent original questions are now available by main topic and AO",()=>{
 assert.equal(specificationTopics.length,19);
 assert.deepEqual(AO_INFO.map(a=>a.id),["AO1","AO2","AO3"]);
 for(const topic of specificationTopics){
  const full=getTopicPracticeSlots(topic.id,"full");
  assert.deepEqual(full.map(slot=>slot.id),["AO1","AO2","AO3"]);
  assert.ok(full.every(slot=>slot.status==="ready"));
  assert.ok(full.every(slot=>slot.question?.id==="TP-"+topic.id+"-"+slot.id));
  const internal=getTopicPracticeSlots(topic.id,"internal");
  assert.equal(internal.length,3);
  assert.ok(internal.every(slot=>slot.status===(topic.id==="M09"?"future":"ready")));
 }
 assert.equal(specificationTopics.length*AO_INFO.length,57);
 assert.equal(topicPracticeQuestions.length,57);
 assert.equal(new Set(topicPracticeQuestions.map(q=>q.id)).size,57);
 assert.equal(getTopicPracticeQuestion("P02","AO2")?.id,"TP-P02-AO2");
 assert.equal(getTopicPracticeQuestion("M09","AO3","internal"),null);
 assert.equal(getTopicPracticeQuestion("M09","AO3","full")?.scope,"full");
 assert.equal(getTopicPracticeQuestion("INVALID","AO1"),null);
 assert.equal(getTopicPracticeSlots("INVALID").length,0);
 assert.equal(topicPracticeRoute("full","P02","AO2"),"#/topic-practice/full/P02/AO2");
 assert.equal(getTopicPracticeSlots("M09","internal")[0].status,"future");
});

test("topic-bank question normalises skill tags for the existing marking UI",()=>{
 const q=validateTopicPracticeBank(withQuestion(fixture())).questions[0];
 assert.equal(q.id,"TP-P02-AO2");
 assert.equal(q.marks,4);
 assert.deepEqual(q.parts.map(p=>p[2].key),["a","b"]);
 assert.ok(q.primarySkillIds.includes("P02-003"));
 assert.deepEqual(q.connectedSkillIds,[]);
 assert.ok(q.id.startsWith("TP-"));
 assert.ok(!taggedWeek01Questions.some(w=>w.id===q.id));
});

test("bank rejects missing marks, weak AO labels, drafts, and repeated slots",()=>{
 for(const [change,reason] of [
  [{published:false},/fully approved/],
  [{id:"W01-P1"},/unstable question ID/],
  [{ao:{AO1:1,AO2:1,AO3:1}},/AO marks must total/],
  [{ao:{AO1:3,AO2:1,AO3:0}},/dominant objective/],
  [{parts:[["Part",1,{primarySkillId:"P02-001"}],["Another part",2,{primarySkillId:"P02-003"}]]},/part marks do not total/],
  [{steps:["Only one step"]},/one worked mark-scheme step/],
  [{parts:[["No tags",1,{}],["Part",3,{primarySkillId:"P02-003"}]]},/unknown primary/]
 ]){
  assert.throws(()=>validateTopicPracticeBank(withQuestion({...fixture(),...change})),reason);
 }
 const duplicated=empty();duplicated.P02=[fixture(),fixture()];
 assert.throws(()=>validateTopicPracticeBank(duplicated),/duplicate ID/);
});

test("a Year 2-only topic cannot publish content for the internal exam",()=>{
 const data={...fixture(),id:"TP-M09-AO2",topicId:"M09",scope:"internal",
  parts:[["Find the turning effect.",1,{primarySkillId:"M09-001"}],
         ["Justify the equilibrium equation.",3,{primarySkillId:"M09-002"}]]};
 assert.throws(()=>validateTopicPracticeBank(withQuestion(data)),/Year 2-only/);
 const valid={...data,scope:"full"};
 assert.equal(validateTopicPracticeBank(withQuestion(valid)).questions[0].scope,"full");
});
