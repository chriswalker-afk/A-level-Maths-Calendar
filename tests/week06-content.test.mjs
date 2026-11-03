import test from "node:test";
import assert from "node:assert/strict";
import {week06Questions} from "../src/data/week06.js";
import {week06SkillMap} from "../src/data/week06-skill-map.js";
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
const all=[taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions];
const slash=String.fromCharCode(92),open=slash+"(",close=slash+")";

test("exactly eight complete weeks publish, without permitting Week 9 or Year 2",()=>{
 assert.equal(siteConfig.stage1.releaseMode,"manual");
 assert.equal(siteConfig.stage1.releasedWeeks,8);
 assert.equal(siteConfig.storageKey,"alevel-maths-calendar-progress-v1");
 assert.ok(programmeOne.weeks.slice(0,8).every(w=>w.hasPublishedContent));
 assert.ok(programmeOne.weeks.slice(8).every(w=>!w.hasPublishedContent));
 assert.ok(isWeekReleased(6,taggedWeek06Questions));
 assert.equal(isWeekReleased(9,taggedWeek06Questions),false,"Metadata, not just question presence, must gate release");
 assert.equal(isWeekReleased(6,[]),false,"No phantom content");
 assert.equal(siteConfig.stage2.published,false);
});
test("22 original questions exactly meet six-section quotas and four-hour plan",()=>{
 assert.equal(week06Questions.length,22);
 assert.equal(new Set(week06Questions.map(q=>q.id)).size,22);
 assert.equal(week06Questions.reduce((sum,q)=>sum+q.marks,0),144);
 const essential=week06Questions.filter(q=>core.has(q.section));
 assert.equal(essential.length,18);
 assert.equal(essential.reduce((s,q)=>s+q.marks,0),98);
 assert.equal(essential.reduce((s,q)=>s+q.minutes,0),213);
 assert.equal(213+20+7,240);
 for(const [section,expected]of Object.entries(groups)){
  const qs=week06Questions.filter(q=>q.section===section);
  assert.equal(qs.length,expected.questions,section+" count");
  assert.equal(qs.reduce((s,q)=>s+q.marks,0),expected.marks,section+" marks");
  assert.ok(qs.reduce((s,q)=>s+q.minutes,0)<=expected.minutes,section+" working time");
  assert.deepEqual(qs.map(q=>q.id),qs.map((_,i)=>"W06-"+section+(i+1)));
 }
});
test("the essential questions carry the exact planned 26/39/33 AO mark allocations",()=>{
 const totals={AO1:0,AO2:0,AO3:0};
 for(const q of week06Questions.filter(q=>core.has(q.section)))
  for(const [key,n]of Object.entries(q.ao))totals[key]+=n;
 assert.deepEqual(totals,{AO1:26,AO2:39,AO3:33});
});
test("every part has coherent mark allocations, full working and MathJax-ready notation",()=>{
 for(const q of week06Questions){
  assert.match(q.id,/^W06-[RPMATX]\d+$/);
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
test("60 marked parts each receive exactly one real in-scope skill without double credit",()=>{
 assert.equal(Object.keys(week06SkillMap).length,22);
 assert.deepEqual(taggedWeek06Questions.map(q=>q.id),week06Questions.map(q=>q.id));
 let parts=0,marks=0;
 for(const q of taggedWeek06Questions){
  assert.equal(week06SkillMap[q.id].length,q.parts.length,q.id);
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
    assert.equal(skill.topicId,"M07",q.id+" Year 1 kinematics only");
    assert.equal(skill.year,1,q.id);
   }
   parts++;marks+=n;
  }
 }
 assert.equal(parts,60);
 assert.equal(marks,144);
});
test("publication-safe practice navigation and score evidence include Week 6 exactly once",()=>{
 const index=createPracticeIndex(all.map((questions,i)=>({week:i+1,questions})));
 assert.ok(index.get("P04-009").get("W06-R1").href==="#/study/6/R/0");
 assert.ok(getPublishedPracticeForSkill("P04-009").some(q=>q.questionId==="W06-R1"));
 assert.ok(getPublishedPracticeForSkill("M07-012").some(q=>q.questionId==="W06-A3"));
 assert.ok(getPublishedPracticeForSkill("S04-003").some(q=>q.questionId==="W06-R8"&&q.role==="connected"));
 assert.deepEqual(getPublishedPracticeForSkill("M07-013"),[],"Year 2 vector calculus remains unavailable");
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[],"Year 2 Moments remain unavailable");
 const six=all.flat();
 const report=calculateSpecificationProgress({questions:six,records:{},scope:"internal"});
 assert.equal(report.summary.releasedQuestions,132);
 assert.equal(report.summary.completedQuestions,0);
 const zero=calculateSpecificationProgress({questions:taggedWeek06Questions,records:{"W06-R1":{score:0,status:"I"}},scope:"internal"});
 assert.equal(zero.summary.releasedQuestions,22);
 assert.equal(zero.summary.completedQuestions,1,"Entered zero is finished");
 const recs=recommendRevision({questions:six,records:{},report,scope:"internal",limit:10});
 for(const rec of recs)assert.match(rec.href,/^#\/study\/[1-6]\/[RPMATX]\/\d+$/);
});
test("Week 6 intentionally revisits earlier mathematics and excludes Year 2 Applied topics",()=>{
 const retrieval=taggedWeek06Questions.filter(q=>q.section==="R");
 assert.ok(retrieval.filter(q=>q.parts.some(p=>p[2].secondarySkillIds.some(id=>id.startsWith("P02-")||id.startsWith("S04-")))).length>=2);
 const applied=week06Questions.filter(q=>q.section==="A");
 assert.ok(applied.some(q=>q.id==="W06-A3"&&/distance/i.test(q.title)));
 for(const q of applied){
  const text=[q.stem,...q.parts.map(p=>p[0])].join(" ");
  assert.doesNotMatch(text,/projectile|friction|rough plane|moment about/i,q.id+" out-of-scope Applied");
 }
});
