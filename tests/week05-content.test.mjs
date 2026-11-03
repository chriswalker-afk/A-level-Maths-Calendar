import test from "node:test";
import assert from "node:assert/strict";
import {week05Questions} from "../src/data/week05.js";
import {week05SkillMap} from "../src/data/week05-skill-map.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions} from "../src/data/tagged-questions.js";
import {getSpecSkill} from "../src/data/specification.js";
import {programmeOne} from "../src/data/programmes.js";
import {siteConfig} from "../src/config.js";
import {createPracticeIndex,getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {recommendRevision} from "../src/revision-recommendations.js";

const groups={
 R:{questions:10,marks:20,minutes:30},
 P:{questions:3,marks:30,minutes:70},
 M:{questions:2,marks:26,minutes:70},
 A:{questions:3,marks:22,minutes:50},
 T:{questions:3,marks:32,minutes:45},
 X:{questions:1,marks:14,minutes:40}
};
const core=new Set(["R","P","M","A"]);
const slash=String.fromCharCode(92),open=slash+"(",close=slash+")";

test("nine completed weeks release while all unauthored content stays inaccessible",()=>{
 assert.equal(siteConfig.stage1.releaseMode,"manual");
 assert.equal(siteConfig.stage1.releasedWeeks,10);
 assert.ok(programmeOne.weeks.slice(0,10).every(w=>w.hasPublishedContent));
 assert.ok(programmeOne.weeks.slice(10).every(w=>!w.hasPublishedContent));
 assert.equal(siteConfig.stage2.published,false);
});
test("22 original Week 5 questions fulfil the exact 4/5/6-hour pack",()=>{
 assert.equal(week05Questions.length,22);
 assert.equal(new Set(week05Questions.map(q=>q.id)).size,22);
 const essential=week05Questions.filter(q=>core.has(q.section));
 assert.equal(essential.length,18);
 assert.equal(essential.reduce((s,q)=>s+q.marks,0),98);
 assert.equal(week05Questions.reduce((s,q)=>s+q.marks,0),144);
 for(const [section,expect]of Object.entries(groups)){
  const selected=week05Questions.filter(q=>q.section===section);
  assert.equal(selected.length,expect.questions,section+" question count");
  assert.equal(selected.reduce((s,q)=>s+q.marks,0),expect.marks,section+" marks");
  assert.ok(selected.reduce((s,q)=>s+q.minutes,0)<=expect.minutes,section+" workload");
  assert.deepEqual(selected.map(q=>q.id),selected.map((_,i)=>"W05-"+section+(i+1)));
 }
 assert.equal(essential.reduce((s,q)=>s+q.minutes,0),213);
 assert.equal(213+20+7,240,"the core timetable includes marking and buffer");
});
test("the Week 5 core maintains AO1/AO2/AO3 marks of 26/39/33",()=>{
 const ao={AO1:0,AO2:0,AO3:0};
 for(const q of week05Questions.filter(q=>core.has(q.section)))
  for(const [name,n]of Object.entries(q.ao))ao[name]+=n;
 assert.deepEqual(ao,{AO1:26,AO2:39,AO3:33});
});
test("every item has complete marking, correct units and balanced MathJax boundaries",()=>{
 for(const q of week05Questions){
  assert.match(q.id,/^W05-[RPMATX]\d+$/);
  assert.ok(q.title&&q.stem&&q.answer&&q.hint&&q.misconception&&q.reflection,q.id);
  assert.ok(q.minutes>0&&q.topics.length>0,q.id);
  assert.equal(q.parts.reduce((s,p)=>s+p[1],0),q.marks,q.id+" part marks");
  assert.equal(Object.values(q.ao).reduce((s,n)=>s+n,0),q.marks,q.id+" AO marks");
  assert.ok(q.steps.length>=q.parts.length,q.id+" has worked marking");
  const content=[q.stem,q.answer,q.hint,...q.parts.map(p=>p[0]),...q.steps];
  for(const line of content){
   assert.equal(line.split(open).length,line.split(close).length,q.id+" unmatched math delimiters");
   assert.ok(!line.includes(slash+slash),q.id+" double-escaped TeX");
   assert.ok(!line.includes("|---"),q.id+" raw Markdown table");
   assert.ok(!line.includes(slash+"(^"),q.id+" isolated exponent without its unit");
   assert.ok(!line.replace(/\\\([\s\S]*?\\\)/g,"").includes(slash),q.id+" maths command outside delimiters");
  }
 }
});
test("each marked part has one stable in-scope specification skill",()=>{
 assert.equal(Object.keys(week05SkillMap).length,22);
 assert.deepEqual(taggedWeek05Questions.map(q=>q.id),week05Questions.map(q=>q.id));
 let parts=0,marks=0;
 for(const q of taggedWeek05Questions){
  assert.equal(week05SkillMap[q.id].length,q.parts.length,q.id+" skills per part");
  assert.ok(q.primarySkillIds.length>0);
  assert.ok(q.connectedSkillIds.every(id=>!q.primarySkillIds.includes(id)));
  for(let i=0;i<q.parts.length;i++){
   const [text,n,tag]=q.parts[i];
   assert.ok(text);
   assert.equal(tag.key,String.fromCharCode(97+i));
   assert.equal(getSpecSkill(tag.primarySkillId)?.scope,"internal",q.id+" "+tag.primarySkillId);
   assert.ok(!tag.secondarySkillIds.includes(tag.primarySkillId));
   assert.equal(new Set(tag.secondarySkillIds).size,tag.secondarySkillIds.length);
   for(const id of tag.secondarySkillIds)
    assert.equal(getSpecSkill(id)?.scope,"internal",q.id+" connected "+id);
   if(q.section==="A")assert.match(tag.primarySkillId,/^S0[45]-/,
    q.id+" must remain Year 1 binomial/hypothesis testing");
   parts++;marks+=n;
  }
 }
 assert.ok(parts>=50);
 assert.equal(marks,144);
});
test("integration practice, stats tests and revision links point to Week 5 rather than old weeks",()=>{
 const sets=[taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions];
 const index=createPracticeIndex(sets.map((questions,i)=>({week:i+1,questions})));
 const a=getPublishedPracticeForSkill("P08-013");
 assert.ok(a.some(q=>q.questionId==="W05-R6"&&q.href==="#/study/5/R/5"));
 assert.ok(a.some(q=>q.questionId==="W05-M2"&&q.href==="#/study/5/M/1"));
 const b=getPublishedPracticeForSkill("S05-006");
 assert.ok(b.some(q=>q.questionId==="W05-T3"&&q.href==="#/study/5/T/2"));
 assert.ok(getPublishedPracticeForSkill("S04-005").some(q=>q.questionId==="W05-A2"));
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[],"future Year 2 Moments stay unreleased");
 assert.ok([...index.values()].every(m=>[...m.values()].every(x=>x.href.startsWith("#/study/"))));
 const single=calculateSpecificationProgress({questions:taggedWeek05Questions,records:{"W05-R1":{score:0,status:"I"}},scope:"internal"});
 assert.equal(single.summary.releasedQuestions,22);
 assert.equal(single.summary.completedQuestions,1,"Zero is a valid finished attempt");
 const all=sets.flat();
 const report=calculateSpecificationProgress({questions:all,records:{},scope:"internal"});
 assert.equal(report.summary.releasedQuestions,110);
 const recommendations=recommendRevision({questions:all,records:{},report,scope:"internal",limit:8});
 for(const rec of recommendations){
  const q=all.find(x=>x.id===rec.questionId);assert.ok(q);
  const week=Number(q.id.slice(1,3));
  const position=sets[week-1].filter(x=>x.section===q.section).findIndex(x=>x.id===q.id);
  assert.equal(rec.href,"#/study/"+week+"/"+q.section+"/"+position);
 }
});
test("the required 9MA0 integration pathway does not prescribe Further Maths revolving solids",()=>{
 const required=week05Questions.filter(q=>q.section!=="X");
 for(const q of required)assert.ok(!/volume of revolution|solid of revolution|rotate.{0,24}about the x.axis/i
  .test([q.stem,...q.parts.map(p=>p[0])].join(" ")),q.id+" contains non-9MA0 volume requirement");
 const models=week05Questions.filter(q=>q.section==="M");
 assert.ok(models.some(q=>q.id==="W05-M1"&&q.stem.includes("litres")));
 assert.ok(models.some(q=>q.id==="W05-M2"&&q.stem.includes("energy index")));
});
