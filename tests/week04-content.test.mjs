import test from "node:test";
import assert from "node:assert/strict";
import {week04Questions} from "../src/data/week04.js";
import {week04SkillMap} from "../src/data/week04-skill-map.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions} from "../src/data/tagged-questions.js";
import {getSpecSkill} from "../src/data/specification.js";
import {programmeOne} from "../src/data/programmes.js";
import {siteConfig} from "../src/config.js";
import {createPracticeIndex,getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {recommendRevision} from "../src/revision-recommendations.js";

const groups={
 R:{n:10,marks:20,minutes:30},P:{n:3,marks:30,minutes:70},
 M:{n:2,marks:26,minutes:70},A:{n:3,marks:22,minutes:50},
 T:{n:3,marks:32,minutes:45},X:{n:1,marks:14,minutes:40}
};
const essential=new Set(["R","P","M","A"]);
const slash=String.fromCharCode(92),open=slash+"(",close=slash+")";

test("the first eight authored weeks are released and remaining weeks stay locked",()=>{
 assert.equal(siteConfig.stage1.releaseMode,"manual");
 assert.equal(siteConfig.stage1.releasedWeeks,8);
 assert.ok(programmeOne.weeks.slice(0,8.every(w=>w.hasPublishedContent));
 assert.ok(programmeOne.weeks.slice(8).every(w=>!w.hasPublishedContent));
 assert.equal(siteConfig.stage2.published,false);
});
test("the complete Week 4 pack meets all counts, mark quotas and working times",()=>{
 assert.equal(week04Questions.length,22);
 assert.equal(new Set(week04Questions.map(q=>q.id)).size,22);
 const core=week04Questions.filter(q=>essential.has(q.section));
 assert.equal(core.length,18);
 assert.equal(core.reduce((sum,q)=>sum+q.marks,0),98);
 assert.equal(week04Questions.reduce((sum,q)=>sum+q.marks,0),144);
 for(const [section,expected]of Object.entries(groups)){
  const subset=week04Questions.filter(q=>q.section===section);
  assert.equal(subset.length,expected.n,section+" question count");
  assert.equal(subset.reduce((sum,q)=>sum+q.marks,0),expected.marks,section+" marks");
  assert.ok(subset.reduce((sum,q)=>sum+q.minutes,0)<=expected.minutes,section+" workload");
  assert.deepEqual(subset.map(q=>q.id),subset.map((_,i)=>"W04-"+section+(i+1)),section+" contiguous IDs");
 }
 assert.equal(core.reduce((sum,q)=>sum+q.minutes,0),213);
 assert.equal(213+20+7,240,"The essential pathway includes 20 minutes self-marking");
});
test("core AO1/AO2/AO3 allocation matches the intended resource design",()=>{
 const scores={AO1:0,AO2:0,AO3:0};
 for(const q of week04Questions.filter(q=>essential.has(q.section)))
  for(const [ao,n]of Object.entries(q.ao))scores[ao]+=n;
 assert.deepEqual(scores,{AO1:26,AO2:39,AO3:33});
});
test("all questions include coherent mark schemes, help, correct escaping and Maths notation",()=>{
 for(const q of week04Questions){
  assert.match(q.id,/^W04-[RPMATX]\d+$/);
  assert.ok(q.title&&q.stem&&q.hint&&q.answer&&q.misconception&&q.reflection,q.id);
  assert.ok(q.minutes>0&&q.topics.length>0,q.id);
  assert.ok(q.steps.length>=q.parts.length,q.id+" fully worked question");
  assert.equal(q.parts.reduce((sum,p)=>sum+p[1],0),q.marks,q.id+" part-mark sum");
  assert.equal(Object.values(q.ao).reduce((sum,n)=>sum+n,0),q.marks,q.id+" AO mark sum");
  const texts=[q.stem,q.hint,q.answer,...q.parts.map(p=>p[0]),...q.steps];
  if(q.table)texts.push(...q.table.header,...q.table.rows.flat());
  for(const line of texts){
   assert.equal(line.split(open).length-1,line.split(close).length-1,q.id+" balanced TeX");
   assert.ok(!line.includes(slash+slash),q.id+" double-escaped TeX");
   assert.ok(!line.includes("|---"),q.id+" markdown table");
   assert.ok(!line.includes(slash+"(^"),q.id+" exponent separated from its unit");
   assert.ok(!line.replace(/\\\([\s\S]*?\\\)/g,"").includes(slash),q.id+" TeX outside math delimiter");
  }
 }
});
test("all Week 4 question parts have permanent primary skills and valid connected tags",()=>{
 assert.equal(Object.keys(week04SkillMap).length,22);
 assert.deepEqual(taggedWeek04Questions.map(q=>q.id),week04Questions.map(q=>q.id));
 let partCount=0,partMarks=0;
 for(const q of taggedWeek04Questions){
  assert.equal(week04SkillMap[q.id]?.length,q.parts.length,q.id);
  assert.ok(q.primarySkillIds.length>0,q.id);
  assert.ok(q.connectedSkillIds.every(id=>!q.primarySkillIds.includes(id)),q.id);
  for(let i=0;i<q.parts.length;i++){
   const [label,marks,meta]=q.parts[i];
   assert.ok(label);
   assert.equal(meta.key,String.fromCharCode(97+i));
   assert.equal(getSpecSkill(meta.primarySkillId)?.scope,"internal",q.id+" "+meta.primarySkillId);
   assert.ok(!meta.secondarySkillIds.includes(meta.primarySkillId));
   assert.equal(new Set(meta.secondarySkillIds).size,meta.secondarySkillIds.length);
   for(const id of meta.secondarySkillIds)
    assert.equal(getSpecSkill(id)?.scope,"internal",q.id+" secondary "+id);
   if(q.section==="A")
    assert.ok(meta.primarySkillId.startsWith("M")||meta.primarySkillId==="P10-005",
     "Mechanics must not tag Year 2-only content");
   partCount++;partMarks+=marks;
  }
 }
 assert.ok(partCount>=55);
 assert.equal(partMarks,144);
 assert.ok(taggedWeek04Questions.filter(q=>q.section==="R").filter(q=>q.connectedSkillIds.some(id=>id.startsWith("P02"))).length>=2);
});
test("My Specification practice and recommendation links use correct Week 4 subsection offsets",()=>{
 const sets=[taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions];
 const all=sets.flat();
 const index=createPracticeIndex(sets.map((questions,i)=>({week:i+1,questions})));
 const primary=getPublishedPracticeForSkill("P07-002");
 assert.ok(primary.some(q=>q.questionId==="W04-R1"&&q.href==="#/study/4/R/0"));
 const forces=getPublishedPracticeForSkill("M08-003");
 assert.ok(forces.some(q=>q.questionId==="W04-A2"&&q.href==="#/study/4/A/1"));
 const extension=getPublishedPracticeForSkill("P07-018");
 assert.ok(extension.some(q=>q.questionId==="W04-X1"&&q.href==="#/study/4/X/0"));
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[],"Year 2-only moments remain unreleased");
 assert.ok([...index.values()].every(group=>[...group.values()].every(ref=>ref.href.startsWith("#/study/"))));
 const report=calculateSpecificationProgress({questions:taggedWeek04Questions,records:{"W04-R1":{score:0,status:"I"}},scope:"internal"});
 assert.equal(report.summary.releasedQuestions,22);
 assert.equal(report.summary.completedQuestions,1,"A recorded zero is completed evidence");
 const overall=calculateSpecificationProgress({questions:all,records:{},scope:"internal"});
 assert.equal(overall.summary.releasedQuestions,88);
 const suggestions=recommendRevision({questions:all,records:{},report:overall,scope:"internal"});
 for(const ref of suggestions){
  const q=all.find(x=>x.id===ref.questionId);assert.ok(q);
  const week=Number(q.id.slice(1,3));
  const position=sets[week-1].filter(x=>x.section===q.section).findIndex(x=>x.id===q.id);
  assert.equal(ref.href,"#/study/"+week+"/"+q.section+"/"+position);
 }
});
