import test from "node:test";
import assert from "node:assert/strict";
import {week01Questions} from "../src/data/week01.js";
import {week01SkillMap} from "../src/data/week01-skill-map.js";
import {linkQuestionParts,taggedWeek01Questions} from "../src/data/tagged-questions.js";
import {getSpecSkill} from "../src/data/specification.js";
import {createPracticeIndex,getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";

test("every published question and every marked part has exactly one primary tag",()=>{
 assert.equal(taggedWeek01Questions.length,22);
 assert.equal(Object.keys(week01SkillMap).length,22);
 const taggedIds=new Set(taggedWeek01Questions.map(q=>q.id));
 assert.equal(taggedIds.size,22);
 let parts=0,totalMarks=0;
 for(const q of taggedWeek01Questions){
  const raw=week01Questions.find(x=>x.id===q.id);
  assert.ok(raw);
  assert.equal(q.parts.length,raw.parts.length);
  assert.equal(q.parts.reduce((s,p)=>s+p[1],0),q.marks);
  for(let i=0;i<q.parts.length;i++){
   const part=q.parts[i],meta=part[2];
   parts++;totalMarks+=part[1];
   assert.ok(meta,"No part metadata on "+q.id+" "+i);
   assert.equal(meta.key,String.fromCharCode(97+i));
   assert.equal(part[0],raw.parts[i][0],"Original question text unchanged");
   assert.equal(part[1],raw.parts[i][1],"Original mark allocation unchanged");
   assert.ok(getSpecSkill(meta.primarySkillId),"Missing primary skill");
   assert.equal(getSpecSkill(meta.primarySkillId).scope,"internal","No Year 2 material in internal exam");
   assert.ok(Array.isArray(meta.secondarySkillIds));
   assert.ok(!meta.secondarySkillIds.includes(meta.primarySkillId));
   assert.equal(new Set(meta.secondarySkillIds).size,meta.secondarySkillIds.length);
   for(const id of meta.secondarySkillIds)assert.ok(getSpecSkill(id),"Unknown secondary "+id);
  }
 }
 assert.ok(parts>=50);
 assert.equal(totalMarks,144,"98 essential + 32 timed + 14 extension");
});

test("mapping fails closed if a part is untagged or a skill is missing",()=>{
 const short={"W01-R1":[["P02-001"]]};
 assert.throws(()=>linkQuestionParts([week01Questions[0]],short),/Missing or incorrect/);
 const wrong={"W01-R1":[["P02-001"],["NONEXISTENT"]]};
 assert.throws(()=>linkQuestionParts([week01Questions[0]],wrong),/Unknown primary/);
 const duplicate={"W01-R1":[["P02-001",["P02-001"]],["P02-003"]]};
 assert.throws(()=>linkQuestionParts([week01Questions[0]],duplicate),/Primary skill also marked secondary/);
 const extra={"W01-R1":week01SkillMap["W01-R1"],"W01-MISSING":[]};
 assert.throws(()=>linkQuestionParts([week01Questions[0]],extra),/unknown question/i);
});

test("the practice index uses real published questions and does not count marks twice",()=>{
 const index=createPracticeIndex([{week:1,questions:taggedWeek01Questions}]);
 const q=taggedWeek01Questions.find(q=>q.id==="W01-P2");
 const id=q.parts[2][2].primarySkillId;
 const refs=[...index.get(id).values()];
 assert.ok(refs.some(x=>x.questionId==="W01-P2"&&x.role==="primary"));
 assert.ok(refs.every(x=>x.href.startsWith("#/study/1/")));
 const related=getPublishedPracticeForSkill("P02-022");
 assert.ok(related.some(x=>x.questionId==="W01-R3"));
 assert.ok(related.some(x=>x.questionId==="W01-P2"));
 assert.ok(getPublishedPracticeForSkill("M09-001").length===0,"Unpublished moments cannot link to questions");
 const use=refs.find(x=>x.questionId==="W01-P2");
 const direct=q.parts.filter(p=>p[2].primarySkillId===id).reduce((n,p)=>n+p[1],0);
 assert.equal(use.primaryMarksAvailable,direct);
 assert.equal(new Set(refs.map(x=>x.questionId)).size,refs.length);
});

test("each question is linked to at least one specification topic; no cross-scope leaks",()=>{
 for(const q of taggedWeek01Questions){
  assert.ok(q.primarySkillIds.length>=1);
  assert.ok(q.primarySkillIds.every(id=>getSpecSkill(id)));
  assert.ok(q.connectedSkillIds.every(id=>getSpecSkill(id)));
  assert.equal(new Set(q.primarySkillIds).size,q.primarySkillIds.length);
  assert.equal(new Set(q.connectedSkillIds).size,q.connectedSkillIds.length);
  assert.ok(q.connectedSkillIds.every(id=>!q.primarySkillIds.includes(id)));
 }
});
