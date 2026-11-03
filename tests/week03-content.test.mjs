import test from "node:test";
import assert from "node:assert/strict";
import {week03Questions} from "../src/data/week03.js";
import {week03SkillMap} from "../src/data/week03-skill-map.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions} from "../src/data/tagged-questions.js";
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
const core=new Set(["R","P","M","A"]);
const slash=String.fromCharCode(92),start=slash+"(",end=slash+")";

test("only the eight genuinely authored weeks are released",()=>{
 assert.equal(siteConfig.stage1.releaseMode,"manual");
 assert.equal(siteConfig.stage1.releasedWeeks,8);
 assert.ok(programmeOne.weeks.slice(0,8).every(w=>w.hasPublishedContent));
 assert.ok(programmeOne.weeks.slice(8).every(w=>!w.hasPublishedContent));
 assert.equal(siteConfig.stage2.published,false);
});
test("Week 3 fulfils the 4/5/6-hour blueprint and exact section mark quotas",()=>{
 assert.equal(week03Questions.length,22);
 assert.equal(new Set(week03Questions.map(q=>q.id)).size,22);
 const essential=week03Questions.filter(q=>core.has(q.section));
 assert.equal(essential.length,18);
 assert.equal(essential.reduce((sum,q)=>sum+q.marks,0),98);
 assert.equal(week03Questions.reduce((sum,q)=>sum+q.marks,0),144);
 for(const [section,plan]of Object.entries(groups)){
  const selected=week03Questions.filter(q=>q.section===section);
  assert.equal(selected.length,plan.n,section+" count");
  assert.equal(selected.reduce((sum,q)=>sum+q.marks,0),plan.marks,section+" marks");
  assert.ok(selected.reduce((sum,q)=>sum+q.minutes,0)<=plan.minutes,section+" minutes");
  assert.deepEqual(selected.map(q=>q.id),selected.map((_,i)=>"W03-"+section+(i+1)),section+" index");
 }
 const working=essential.reduce((sum,q)=>sum+q.minutes,0);
 assert.equal(working,213);
 assert.equal(working+20+7,240,"core: work + 20 min self-mark + buffer");
});
test("Week 3 core follows the agreed resource AO breakdown",()=>{
 const mark={AO1:0,AO2:0,AO3:0};
 for(const q of week03Questions.filter(q=>core.has(q.section)))
  for(const [ao,score]of Object.entries(q.ao))mark[ao]+=score;
 assert.deepEqual(mark,{AO1:26,AO2:39,AO3:33});
});
test("questions have marked parts, worked solutions and balanced TeX delimiters",()=>{
 for(const q of week03Questions){
  assert.match(q.id,/^W03-[RPMATX]\d+$/);
  assert.ok(q.title&&q.stem&&q.hint&&q.answer&&q.misconception&&q.reflection,q.id);
  assert.equal(q.parts.reduce((sum,p)=>sum+p[1],0),q.marks,q.id+" part marks");
  assert.equal(Object.values(q.ao).reduce((sum,n)=>sum+n,0),q.marks,q.id+" AO marks");
  assert.ok(q.steps.length>=q.parts.length,q.id+" fully worked parts");
  assert.ok(q.minutes>=3&&q.topics?.length,q.id);
  const texts=[q.stem,q.hint,q.answer,...q.parts.map(p=>p[0]),...q.steps];
  if(q.table){
   assert.ok(q.table.rows.every(row=>row.length===q.table.header.length));
   texts.push(...q.table.header,...q.table.rows.flat());
  }
  for(const text of texts){
   assert.equal(text.split(start).length-1,text.split(end).length-1,q.id+" unbalanced math delimiters");
   assert.ok(!text.includes(slash+slash),q.id+" double-escaped TeX");
   assert.ok(!text.includes("|---"),q.id+" raw Markdown table");
   assert.ok(!text.includes(slash+"(^"),q.id+" isolated exponent");
   assert.ok(!text.replace(/\\\([\s\S]*?\\\)/g,"").includes(slash),q.id+" TeX outside a maths delimiter");
  }
 }
});
test("all 22 questions and their individual parts are assigned exact in-scope skills",()=>{
 assert.equal(Object.keys(week03SkillMap).length,22);
 assert.deepEqual(taggedWeek03Questions.map(q=>q.id),week03Questions.map(q=>q.id));
 let partCount=0,partMarks=0;
 for(const q of taggedWeek03Questions){
  assert.ok(q.primarySkillIds.length>0,q.id);
  assert.ok(q.connectedSkillIds.every(id=>!q.primarySkillIds.includes(id)));
  assert.equal(week03SkillMap[q.id]?.length,q.parts.length,q.id);
  for(let i=0;i<q.parts.length;i++){
   const [stem,marks,meta]=q.parts[i];
   assert.equal(stem,week03Questions.find(x=>x.id===q.id).parts[i][0]);
   assert.equal(meta.key,String.fromCharCode(97+i));
   assert.equal(getSpecSkill(meta.primarySkillId)?.scope,"internal",q.id+" "+meta.primarySkillId);
   assert.ok(!meta.secondarySkillIds.includes(meta.primarySkillId));
   assert.equal(new Set(meta.secondarySkillIds).size,meta.secondarySkillIds.length);
   for(const id of meta.secondarySkillIds)
    assert.equal(getSpecSkill(id)?.scope,"internal",q.id+" connected "+id);
   partCount++;partMarks+=marks;
  }
 }
 assert.ok(partCount>=55);
 assert.equal(partMarks,144);
 assert.ok(taggedWeek03Questions.filter(q=>q.section==="R").filter(q=>q.connectedSkillIds.some(id=>id.startsWith("P02"))).length>=2,
  "Spaced retrieval must deliberately return to earlier algebra and transforms");
});
test("Week 3 question references and student revision links remain local to their subsection",()=>{
 const byWeek=[taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions];
 const questions=byWeek.flat();
 const index=createPracticeIndex(byWeek.map((questions,i)=>({week:i+1,questions})));
 const refs=getPublishedPracticeForSkill("P05-017");
 assert.ok(refs.some(x=>x.questionId==="W03-R9"&&x.href==="#/study/3/R/8"));
 assert.ok(refs.some(x=>x.questionId==="W03-P2"&&x.href==="#/study/3/P/1"));
 assert.ok(refs.some(x=>x.questionId==="W03-X1"&&x.href==="#/study/3/X/0"));
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[]);
 assert.ok([...index.values()].every(m=>[...m.values()].every(ref=>ref.href.startsWith("#/study/"))));
 const onlyWeek3=calculateSpecificationProgress({questions:taggedWeek03Questions,records:{"W03-R1":{score:2,status:"I"}},scope:"internal"});
 assert.equal(onlyWeek3.summary.releasedQuestions,22);
 assert.equal(onlyWeek3.summary.completedQuestions,1);
 const report=calculateSpecificationProgress({questions,records:{},scope:"internal"});
 assert.equal(report.summary.releasedQuestions,66);
 const suggestions=recommendRevision({questions,records:{},report,scope:"internal"});
 for(const x of suggestions){
  const q=questions.find(t=>t.id===x.questionId);assert.ok(q);
  const week=Number(q.id.slice(1,3));
  const index=byWeek[week-1].filter(t=>t.section===q.section).findIndex(t=>t.id===q.id);
  assert.equal(x.href,"#/study/"+week+"/"+q.section+"/"+index);
 }
});
