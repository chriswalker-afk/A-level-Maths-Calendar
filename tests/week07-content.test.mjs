import test from "node:test";
import assert from "node:assert/strict";
import {week07Questions} from "../src/data/week07.js";
import {week07SkillMap} from "../src/data/week07-skill-map.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions} from "../src/data/tagged-questions.js";
import {programmeOne} from "../src/data/programmes.js";
import {siteConfig} from "../src/config.js";
import {getSpecSkill} from "../src/data/specification.js";
import {createPracticeIndex,getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {recommendRevision} from "../src/revision-recommendations.js";
import {isWeekReleased} from "../src/publication.js";

const groups={
 R:{questions:10,marks:20,minutes:30},
 P:{questions:3,marks:30,minutes:70},
 M:{questions:2,marks:26,minutes:70},
 A:{questions:3,marks:22,minutes:50},
 T:{questions:3,marks:32,minutes:45},
 X:{questions:1,marks:14,minutes:40}
};
const core=new Set(["R","P","M","A"]);
const all=[taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,taggedWeek07Questions];
const slash=String.fromCharCode(92),open=slash+"(",close=slash+")";

test("exactly seven complete weeks publish, without permitting Week 8 or Year 2",()=>{
 assert.equal(siteConfig.stage1.releaseMode,"manual");
 assert.equal(siteConfig.stage1.releasedWeeks,7);
 assert.equal(siteConfig.storageKey,"alevel-maths-calendar-progress-v1");
 assert.ok(programmeOne.weeks.slice(0,7).every(w=>w.hasPublishedContent));
 assert.ok(programmeOne.weeks.slice(7).every(w=>!w.hasPublishedContent));
 assert.ok(isWeekReleased(6,taggedWeek06Questions));
 assert.equal(isWeekReleased(7,taggedWeek06Questions),false,"Metadata, not just question presence, must gate release");
 assert.equal(isWeekReleased(6,[]),false,"No phantom content");
 assert.equal(siteConfig.stage2.published,false);
});
test("22 original questions exactly meet six-section quotas and four-hour plan",()=>{
 assert.equal(week07Questions.length,22);
 assert.equal(new Set(week07Questions.map(q=>q.id)).size,22);
 assert.equal(week07Questions.reduce((sum,q)=>sum+q.marks,0),144);
 const essential=week07Questions.filter(q=>core.has(q.section));
 assert.equal(essential.length,18);
 assert.equal(essential.reduce((s,q)=>s+q.marks,0),98);
 assert.equal(essential.reduce((s,q)=>s+q.minutes,0),213);
 assert.equal(213+20+7,240);
 for(const [section,expected]of Object.entries(groups)){
  const qs=week07Questions.filter(q=>q.section===section);
  assert.equal(qs.length,expected.questions,section+" count");
  assert.equal(qs.reduce((s,q)=>s+q.marks,0),expected.marks,section+" marks");
  assert.ok(qs.reduce((s,q)=>s+q.minutes,0)<=expected.minutes,section+" working time");
  assert.deepEqual(qs.map(q=>q.id),qs.map((_,i)=>"W07-"+section+(i+1)));
 }
});
test("the essential questions carry the exact planned 26/39/33 AO mark allocations",()=>{
 const totals={AO1:0,AO2:0,AO3:0};
 for(const q of week07Questions.filter(q=>core.has(q.section)))
  for(const [key,n]of Object.entries(q.ao))totals[key]+=n;
 assert.deepEqual(totals,{AO1:26,AO2:39,AO3:33});
});
test("every part has coherent mark allocations, full working and MathJax-ready notation",()=>{
 for(const q of week07Questions){
  assert.match(q.id,/^W07-[RPMATX]\d+$/);
  for(const field of ["title","stem","hint","answer","misconception","reflection"])
   assert.ok(q[field]?.length>0,q.id+" "+field);
  assert.ok(q.topics.length>0&&q.minutes>0);
  assert.equal(q.parts.reduce((s,p)=>s+p[1],0),q.marks,q.id+" parts");
  assert.equal(Object.values(q.ao).reduce((s,n)=>s+n,0),q.marks,q.id+" AOs");
  assert.ok(q.steps.length>=q.parts.length,q.id+" worked steps");
  const texts=[q.stem,q.hint,q.answer,...q.parts.map(p=>p[0]),...q.steps];
  for(const s of texts){
   assert.equal(s.split(open).length,s.split(close).length,q.id+" delimiters");
   assert.ok(!s.includes(slash+slash),q.id+" double escaping");
   assert.ok(!s.replace(/\\\([\s\S]*?\\\)/g,"").includes(slash),q.id+" math outside delimiters");
   assert.ok(!s.includes("|---"),q.id+" raw Markdown table");
   for(const m of s.matchAll(/\\\(([\s\S]*?)\\\)/g)){
    let depth=0;
    for(const c of m[1]){if(c==="{")depth++;else if(c==="}")depth--;}
    assert.equal(depth,0,q.id+" unbalanced TeX braces: "+m[1]);
   }
  }
 }
});
test("62 marked parts each receive exactly one real in-scope skill without double credit",()=>{
 assert.equal(Object.keys(week07SkillMap).length,22);
 assert.deepEqual(taggedWeek06Questions.map(q=>q.id),week07Questions.map(q=>q.id));
 let parts=0,marks=0;
 for(const q of taggedWeek06Questions){
  assert.equal(week07SkillMap[q.id].length,q.parts.length,q.id);
  for(const [i,[prompt,n,tag]]of q.parts.entries()){
   assert.ok(prompt);
   assert.equal(tag.key,String.fromCharCode(97+i));
   const skill=getSpecSkill(tag.primarySkillId);
   assert.equal(skill?.scope,"internal",q.id+" primary "+tag.primarySkillId);
   assert.equal(new Set(tag.secondarySkillIds).size,tag.secondarySkillIds.length);
   assert.ok(!tag.secondarySkillIds.includes(tag.primarySkillId));
   for(const secondary of tag.secondarySkillIds)
    assert.equal(getSpecSkill(secondary)?.scope,"internal",q.id+" secondary "+secondary);
   if(q.section==="A"){
    assert.ok(["S02","S05"].includes(skill.topicId),q.id+" Year 1 regression/binomial only");
    assert.equal(skill.year,1,q.id);
   }
   parts++;marks+=n;
  }
 }
 assert.equal(parts,62);
 assert.equal(marks,144);
});
test("publication-safe practice navigation and accurate no-data evidence for Week 7",()=>{
 const index=createPracticeIndex(all.map((questions,i)=>({week:i+1,questions})));
 assert.equal(index.get("P06-006").get("W07-R1").href,"#/study/7/R/0");
 assert.ok(getPublishedPracticeForSkill("P06-006").some(q=>q.questionId==="W07-R1"));
 assert.ok(getPublishedPracticeForSkill("S02-006").some(q=>q.questionId==="W07-A1"));
 assert.ok(getPublishedPracticeForSkill("S05-006").some(q=>q.questionId==="W07-A3"));
 assert.deepEqual(getPublishedPracticeForSkill("S05-010"),[],"Year 2 correlation tests remain locked");
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[],"Year 2 Moments remain locked");
 const allQuestions=all.flat();
 const report=calculateSpecificationProgress({questions:allQuestions,records:{},scope:"internal"});
 assert.equal(report.summary.releasedQuestions,154);
 assert.equal(report.summary.completedQuestions,0,"Unattempted work is not zero accuracy");
 const zero=calculateSpecificationProgress({questions:taggedWeek07Questions,records:{"W07-R1":{score:0,status:"I"}},scope:"internal"});
 assert.equal(zero.summary.releasedQuestions,22);
 assert.equal(zero.summary.completedQuestions,1,"A recorded score of zero is completed");
 const recs=recommendRevision({questions:allQuestions,records:{},report,scope:"internal",limit:10});
 for(const rec of recs)assert.match(rec.href,/^#\/study\/[1-7]\/[RPMATX]\/\d+$/);

});
test("Week 7 revisits previous Pure skills and keeps Year 2 statistical tests locked",()=>{
 const retrieval=taggedWeek07Questions.filter(q=>q.section==="R");
 assert.ok(retrieval.filter(q=>q.primarySkillIds.some(id=>id.startsWith("P07-")||id.startsWith("P08-")||id.startsWith("P04-"))).length>=3);
 const applied=week07Questions.filter(q=>q.section==="A");
 assert.ok(applied.some(q=>q.id==="W07-A3"&&/two-tailed/i.test(q.title)));
 for(const q of applied){
  const text=[q.stem,...q.parts.map(p=>p[0])].join(" ");
  assert.doesNotMatch(text,/normal distribution|correlation coefficient test|product moment test/i,q.id+" Year 2-only Applied");
 }
});
