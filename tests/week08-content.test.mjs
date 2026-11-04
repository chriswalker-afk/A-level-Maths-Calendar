import test from "node:test";
import assert from "node:assert/strict";
import {week08Questions} from "../src/data/week08.js";
import {week08SkillMap} from "../src/data/week08-skill-map.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,taggedWeek07Questions,taggedWeek08Questions} from "../src/data/tagged-questions.js";
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
const allWeeks=[taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,taggedWeek07Questions,taggedWeek08Questions];
const slash=String.fromCharCode(92),open=slash+"(",close=slash+")";

test("ten authored weeks are released, with Week 11 and programme two inaccessible",()=>{
 assert.equal(siteConfig.stage1.releaseMode,"manual");
 assert.equal(siteConfig.stage1.releasedWeeks,10);
 assert.equal(siteConfig.storageKey,"alevel-maths-calendar-progress-v1");
 assert.ok(programmeOne.weeks.slice(0,10).every(w=>w.hasPublishedContent));
 assert.ok(programmeOne.weeks.slice(10).every(w=>!w.hasPublishedContent));
 assert.ok(isWeekReleased(8,taggedWeek08Questions));
 assert.equal(isWeekReleased(11,taggedWeek08Questions),false);
 assert.equal(isWeekReleased(8,[]),false);
 assert.equal(siteConfig.stage2.published,false);
});
test("Week 8 fulfils exact question count, part marks, section quotas and four-hour timing",()=>{
 assert.equal(week08Questions.length,22);
 assert.equal(new Set(week08Questions.map(q=>q.id)).size,22);
 assert.equal(week08Questions.reduce((sum,q)=>sum+q.marks,0),144);
 const core=week08Questions.filter(q=>essential.has(q.section));
 assert.equal(core.length,18);
 assert.equal(core.reduce((sum,q)=>sum+q.marks,0),98);
 assert.equal(core.reduce((sum,q)=>sum+q.minutes,0),213);
 assert.equal(213+20+7,240);
 for(const [section,expected]of Object.entries(groups)){
  const qs=week08Questions.filter(q=>q.section===section);
  assert.equal(qs.length,expected.n,section+" count");
  assert.equal(qs.reduce((sum,q)=>sum+q.marks,0),expected.marks,section+" marks");
  assert.ok(qs.reduce((sum,q)=>sum+q.minutes,0)<=expected.minutes,section+" working time");
  assert.deepEqual(qs.map(q=>q.id),qs.map((_,i)=>"W08-"+section+(i+1)));
 }
});
test("essential AO1/AO2/AO3 resource allocation is exactly 26/39/33",()=>{
 const totals={AO1:0,AO2:0,AO3:0};
 for(const q of week08Questions.filter(q=>essential.has(q.section)))
  for(const [k,v]of Object.entries(q.ao))totals[k]+=v;
 assert.deepEqual(totals,{AO1:26,AO2:39,AO3:33});
});
test("every Week 8 question has full worked scheme, feedback and valid TeX delimiters",()=>{
 for(const q of week08Questions){
  assert.match(q.id,/^W08-[RPMATX]\d+$/);
  for(const field of ["title","stem","hint","answer","misconception","reflection"])
   assert.ok(typeof q[field]==="string"&&q[field].length>0,q.id+" "+field);
  assert.ok(q.topics.length&&q.minutes>0);
  assert.equal(q.parts.reduce((sum,p)=>sum+p[1],0),q.marks,q.id+" part marks");
  assert.equal(Object.values(q.ao).reduce((sum,n)=>sum+n,0),q.marks,q.id+" AO marks");
  assert.ok(q.steps.length>=q.parts.length,q.id+" worked solution steps");
  for(const line of [q.stem,q.hint,q.answer,...q.parts.map(p=>p[0]),...q.steps]){
   assert.equal(line.split(open).length,line.split(close).length,q.id+" TeX delimiters");
   assert.ok(!line.includes(slash+slash),q.id+" double TeX slash");
   assert.ok(!line.replace(/\\\([\s\S]*?\\\)/g,"").includes(slash),q.id+" TeX command outside maths");
   for(const match of line.matchAll(/\\\(([\s\S]*?)\\\)/g)){
    let depth=0;
    for(const ch of match[1]){if(ch==="{")depth++;else if(ch==="}")depth--;}
    assert.equal(depth,0,q.id+" TeX braces: "+match[1]);
   }
  }
 }
});
test("all 63 marked parts map to one real permanent 9MA0 skill with no duplicated credit",()=>{
 assert.equal(Object.keys(week08SkillMap).length,22);
 assert.deepEqual(taggedWeek08Questions.map(q=>q.id),week08Questions.map(q=>q.id));
 let partCount=0,score=0;
 for(const q of taggedWeek08Questions){
  assert.equal(week08SkillMap[q.id].length,q.parts.length,q.id);
  for(const [i,[prompt,marks,tag]]of q.parts.entries()){
   assert.ok(prompt);
   assert.equal(tag.key,String.fromCharCode(97+i));
   const skill=getSpecSkill(tag.primarySkillId);
   assert.equal(skill?.scope,"internal",q.id+" "+tag.primarySkillId);
   assert.equal(new Set(tag.secondarySkillIds).size,tag.secondarySkillIds.length);
   assert.ok(!tag.secondarySkillIds.includes(tag.primarySkillId));
   for(const secondary of tag.secondarySkillIds)
    assert.equal(getSpecSkill(secondary)?.scope,"internal",q.id+" "+secondary);
   if(q.section==="A"){
    assert.ok(["M08","M07"].includes(skill.topicId),q.id+" Year 1 mechanics only");
    assert.equal(skill.year,1,q.id);
   }
   partCount++;score+=marks;
  }
 }
 assert.equal(partCount,63);
 assert.equal(score,144);
});
test("released practice routes, no-data states and completed zero-mark work stay correct",()=>{
 const index=createPracticeIndex(allWeeks.map((questions,i)=>({week:i+1,questions})));
 assert.equal(index.get("P09-001").get("W08-R1").href,"#/study/8/R/0");
 assert.ok(getPublishedPracticeForSkill("P09-005").some(q=>q.questionId==="W08-R5"));
 assert.ok(getPublishedPracticeForSkill("M08-008").some(q=>q.questionId==="W08-A2"));
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[],"Year 2 Moments stay unavailable");
 assert.deepEqual(getPublishedPracticeForSkill("M08-016"),[],"Unpublished Year 2 mechanics has no questions");
 const full=allWeeks.flat();
 const empty=calculateSpecificationProgress({questions:full,records:{},scope:"internal"});
 assert.equal(empty.summary.releasedQuestions,230);
 assert.equal(empty.summary.completedQuestions,0,"Unattempted work is not demonstrated zero accuracy");
 const zero=calculateSpecificationProgress({questions:taggedWeek08Questions,records:{"W08-R1":{score:0,status:"I"}},scope:"internal"});
 assert.equal(zero.summary.releasedQuestions,22);
 assert.equal(zero.summary.completedQuestions,1,"Zero entered is still a completed question");
 const suggestions=recommendRevision({questions:full,records:{},report:empty,scope:"internal",limit:10});
 for(const s of suggestions)assert.match(s.href,/^#\/study\/[1-8]\/[RPMATX]\/\d+$/);
});
test("Week 8 uses Year 1 smooth-pulley forces and avoids Year 2 inclined-plane/friction content",()=>{
 const applied=taggedWeek08Questions.filter(q=>q.section==="A");
 assert.equal(applied.length,3);
 assert.ok(applied.some(q=>q.id==="W08-A3"&&/slack/i.test(q.title)));
 for(const q of applied){
  const text=[q.stem,...q.parts.map(p=>p[0])].join(" ");
  assert.doesNotMatch(text,/rough plane|friction coefficient|inclined plane|moments about|projectile/i,q.id);
  for(const part of q.parts){
   const skill=getSpecSkill(part[2].primarySkillId);
   assert.equal(skill.year,1,q.id+" proper Year 1 scope");
  }
 }
});
