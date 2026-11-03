import test from "node:test";
import assert from "node:assert/strict";
import {week09Questions} from "../src/data/week09.js";
import {week09SkillMap} from "../src/data/week09-skill-map.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions} from "../src/data/tagged-questions.js";
import {programmeOne} from "../src/data/programmes.js";
import {siteConfig} from "../src/config.js";
import {getSpecSkill} from "../src/data/specification.js";
import {createPracticeIndex,getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {recommendRevision} from "../src/revision-recommendations.js";
import {isWeekReleased} from "../src/publication.js";

const groups={
 R:{n:10,marks:20,minutes:30},P:{n:3,marks:30,minutes:70},
 M:{n:2,marks:26,minutes:70},A:{n:3,marks:22,minutes:50},
 T:{n:3,marks:32,minutes:45},X:{n:1,marks:14,minutes:40}
};
const essential=new Set(["R","P","M","A"]);
const allWeeks=[taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions];
const slash=String.fromCharCode(92),open=slash+"(",close=slash+")";

test("exactly nine authored weeks are released and Week 10 plus programme two stay closed",()=>{
 assert.equal(siteConfig.stage1.releaseMode,"manual");
 assert.equal(siteConfig.stage1.releasedWeeks,9);
 assert.equal(siteConfig.storageKey,"alevel-maths-calendar-progress-v1");
 assert.ok(programmeOne.weeks.slice(0,9).every(w=>w.hasPublishedContent));
 assert.ok(programmeOne.weeks.slice(9).every(w=>!w.hasPublishedContent));
 assert.equal(programmeOne.weeks[8].targetMarks,98);
 assert.ok(isWeekReleased(9,taggedWeek09Questions));
 assert.equal(isWeekReleased(10,taggedWeek09Questions),false);
 assert.equal(isWeekReleased(9,[]),false);
 assert.equal(siteConfig.stage2.published,false);
});
test("22 original questions satisfy six section quotas and the exact four-hour essential programme",()=>{
 assert.equal(week09Questions.length,22);
 assert.equal(new Set(week09Questions.map(q=>q.id)).size,22);
 assert.equal(week09Questions.reduce((sum,q)=>sum+q.marks,0),144);
 const core=week09Questions.filter(q=>essential.has(q.section));
 assert.equal(core.length,18);
 assert.equal(core.reduce((sum,q)=>sum+q.marks,0),98);
 assert.equal(core.reduce((sum,q)=>sum+q.minutes,0),213);
 assert.equal(213+20+7,240);
 for(const [section,expected]of Object.entries(groups)){
  const qs=week09Questions.filter(q=>q.section===section);
  assert.equal(qs.length,expected.n,section+" count");
  assert.equal(qs.reduce((sum,q)=>sum+q.marks,0),expected.marks,section+" marks");
  assert.ok(qs.reduce((sum,q)=>sum+q.minutes,0)<=expected.minutes,section+" working minutes");
  assert.deepEqual(qs.map(q=>q.id),qs.map((_,i)=>"W09-"+section+(i+1)));
 }
});
test("essential AO allocation is exactly 26/39/33 across all four sections",()=>{
 const totals={AO1:0,AO2:0,AO3:0};
 for(const q of week09Questions.filter(q=>essential.has(q.section)))
  for(const [k,v]of Object.entries(q.ao))totals[k]+=v;
 assert.deepEqual(totals,{AO1:26,AO2:39,AO3:33});
});
test("every question has part marks, student feedback, detailed steps and parseable TeX delimiters",()=>{
 for(const q of week09Questions){
  assert.match(q.id,/^W09-[RPMATX]\d+$/);
  for(const field of ["title","stem","hint","answer","misconception","reflection"])
   assert.ok(typeof q[field]==="string"&&q[field].length>0,q.id+" "+field);
  assert.ok(q.topics?.length>0&&q.minutes>0);
  assert.equal(q.parts.reduce((sum,p)=>sum+p[1],0),q.marks,q.id+" part marks");
  assert.equal(Object.values(q.ao).reduce((sum,n)=>sum+n,0),q.marks,q.id+" AO marks");
  assert.ok(q.steps.length>=q.parts.length,q.id+" full working");
  for(const line of [q.stem,q.hint,q.answer,...q.parts.map(p=>p[0]),...q.steps]){
   assert.equal(line.split(open).length,line.split(close).length,q.id+" MathJax delimiters");
   assert.ok(!line.includes(slash+slash),q.id+" double TeX slash");
   assert.ok(!line.replace(/\\\([\s\S]*?\\\)/g,"").includes(slash),q.id+" stray TeX outside maths");
   for(const match of line.matchAll(/\\\(([\s\S]*?)\\\)/g)){
    let depth=0;for(const ch of match[1]){if(ch==="{")depth++;else if(ch==="}")depth--;}
    assert.equal(depth,0,q.id+" braces: "+match[1]);
   }
  }
 }
});
test("all 66 part-level primary skills are unique per part, in scope and give no connected double-credit",()=>{
 assert.equal(Object.keys(week09SkillMap).length,22);
 assert.deepEqual(taggedWeek09Questions.map(q=>q.id),week09Questions.map(q=>q.id));
 let partCount=0,score=0;
 for(const q of taggedWeek09Questions){
  assert.equal(week09SkillMap[q.id].length,q.parts.length,q.id);
  for(const [i,[prompt,marks,tag]]of q.parts.entries()){
   assert.ok(prompt);
   assert.equal(tag.key,String.fromCharCode(97+i));
   const primary=getSpecSkill(tag.primarySkillId);
   assert.equal(primary?.scope,"internal",q.id+" "+tag.primarySkillId);
   assert.equal(new Set(tag.secondarySkillIds).size,tag.secondarySkillIds.length);
   assert.ok(!tag.secondarySkillIds.includes(tag.primarySkillId));
   for(const secondary of tag.secondarySkillIds)
    assert.equal(getSpecSkill(secondary)?.scope,"internal",q.id+" "+secondary);
   if(primary?.strand!=="P")assert.equal(primary.year,1,q.id+" Year 1 Applied scope only");
   if(q.section==="A")assert.ok(["S01","S02","S05","M07","M08"].includes(primary.topicId),q.id+" Year 1 Applied attribution");
   partCount++;score+=marks;
  }
 }
 assert.equal(partCount,66);
 assert.equal(score,144);
});
test("all published practice links are gated, and zero finishes while unattempted work does not become zero accuracy",()=>{
 const index=createPracticeIndex(allWeeks.map((questions,i)=>({week:i+1,questions})));
 assert.equal(index.get("P02-015").get("W09-R1").href,"#/study/9/R/0");
 assert.ok(getPublishedPracticeForSkill("P03-007").some(q=>q.questionId==="W09-P1"));
 assert.ok(getPublishedPracticeForSkill("S01-004").some(q=>q.questionId==="W09-A1"));
 assert.ok(getPublishedPracticeForSkill("M08-008").some(q=>q.questionId==="W09-A2"));
 assert.ok(getPublishedPracticeForSkill("S05-006").some(q=>q.questionId==="W09-A3"));
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[],"Year 2 moments remain unavailable");
 assert.deepEqual(getPublishedPracticeForSkill("S04-006"),[],"Year 2 Normal stays unavailable");
 const full=allWeeks.flat();
 const blank=calculateSpecificationProgress({questions:full,records:{},scope:"internal"});
 assert.equal(blank.summary.releasedQuestions,198);
 assert.equal(blank.summary.completedQuestions,0);
 const zero=calculateSpecificationProgress({questions:taggedWeek09Questions,records:{"W09-R1":{score:0,status:"I"}},scope:"internal"});
 assert.equal(zero.summary.releasedQuestions,22);
 assert.equal(zero.summary.completedQuestions,1);
 const recs=recommendRevision({questions:full,records:{},report:blank,scope:"internal",limit:10});
 for(const rec of recs)assert.match(rec.href,/^#\/study\/[1-9]\/[RPMATX]\/\d+$/);
});
test("Week 9 samples broad synoptic Pure and Year 1 Applied without importing Year 2-only topics",()=>{
 const types=new Set(week09Questions.map(q=>q.section));
 assert.deepEqual([...types].sort(),["A","M","P","R","T","X"]);
 const applied=taggedWeek09Questions.filter(q=>q.section==="A");
 assert.ok(applied.some(q=>q.id==="W09-A1"&&/sample/i.test(q.title)));
 assert.ok(applied.some(q=>q.id==="W09-A2"&&/connected/i.test(q.title)));
 assert.ok(applied.some(q=>q.id==="W09-A3"&&/evidence/i.test(q.title)));
 for(const q of applied){
  const txt=[q.stem,...q.parts.map(p=>p[0])].join(" ");
  assert.doesNotMatch(txt,/normal distribution|product moment correlation hypothesis test|inclined plane|friction coefficient|projectile/i,q.id);
 }
 assert.ok(week09Questions.some(q=>q.id==="W09-M2"&&/error/i.test(q.title)));
 assert.ok(week09Questions.some(q=>q.id==="W09-X1"&&/proof|bound/i.test(q.title)));
});
