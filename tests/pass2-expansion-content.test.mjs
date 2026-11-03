import test from "node:test";
import assert from "node:assert/strict";
import {week04Questions} from "../src/data/week04.js";
import {week05Questions} from "../src/data/week05.js";
import {week06Questions} from "../src/data/week06.js";
import {week04SkillMap} from "../src/data/week04-skill-map.js";
import {week05SkillMap} from "../src/data/week05-skill-map.js";
import {week06SkillMap} from "../src/data/week06-skill-map.js";
import {programmeOne,programmeTwo} from "../src/data/programmes.js";
import {siteConfig} from "../src/config.js";
import {expandedWeekBudget} from "../src/data/expanded-week-budget.js";
import {getSpecSkill} from "../src/data/specification.js";
import {firstWeekQuestionRoute,adjacentQuestionRoute} from "../src/calendar-view.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
 taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,
 taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions,taggedWeek10Questions
} from "../src/data/tagged-questions.js";

const weeks=[week04Questions,week05Questions,week06Questions];
const tagged=[taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions];
const maps=[week04SkillMap,week05SkillMap,week06SkillMap];
const original={R:10,P:3,M:2,A:3,T:3,X:1};
const sections={R:[10,20,24],P:[7,70,84],M:[3,40,48],A:[5,45,54],T:[4,40,48],X:[2,30,36]};
const toNew=q=>Number(q.id.match(/\d+$/)[0])>original[q.section];
const same=(x,y)=>assert.deepEqual(x,y);

test("Pass 2 updates exactly Weeks 4–6 to 175/215/245 without disturbing past or future publication",()=>{
 same(programmeOne.weeks.slice(0,6).map(w=>w.targetMarks),Array(6).fill(175));
 same(programmeOne.weeks.slice(0,6).map(w=>w.recommendedMarks),Array(6).fill(215));
 same(programmeOne.weeks.slice(0,6).map(w=>w.optionalMarks),Array(6).fill(245));
 same(programmeOne.weeks.slice(6,9).map(w=>w.targetMarks),[98,98,98]);
 assert.equal(programmeOne.weeks[9].targetMarks,150);
 assert.equal(programmeTwo.weekCount,20);
 assert.equal(siteConfig.stage1.releasedWeeks,10);
 assert.equal(siteConfig.stage2.published,false);
 assert.equal(siteConfig.storageKey,"alevel-maths-calendar-progress-v1");
});
test("Each of Weeks 4–6 has 31 original questions and a genuine 4/5/6-hour mark budget",()=>{
 for(let i=0;i<3;i++){
  const w=i+4,qs=weeks[i],budget=expandedWeekBudget(qs);
  assert.equal(qs.length,31);
  assert.equal(new Set(qs.map(q=>q.id)).size,31);
  for(const [sec,[n,m,t]]of Object.entries(sections)){
   const group=qs.filter(q=>q.section===sec);
   assert.equal(group.length,n,"Week "+w+" section "+sec+" count");
   assert.equal(group.reduce((s,q)=>s+q.marks,0),m);
   assert.equal(group.reduce((s,q)=>s+q.minutes,0),t);
   same(group.map(q=>q.id),group.map((_,j)=>"W0"+w+"-"+sec+(j+1)));
  }
  same(budget.essential,{marks:175,workingMinutes:210,reviewMinutes:30,totalMinutes:240});
  same(budget.recommended,{marks:215,workingMinutes:258,reviewMinutes:42,totalMinutes:300});
  same(budget.optional,{marks:245,workingMinutes:294,reviewMinutes:66,totalMinutes:360});
 }
});
test("Original question route and part-letter positions are preserved",()=>{
 for(let i=0;i<3;i++){
  const w=i+4,qs=weeks[i],prefix="W0"+w+"-";
  for(const [sec,oldCount]of Object.entries(original)){
   const g=qs.filter(q=>q.section===sec);
   for(let j=0;j<oldCount;j++)assert.equal(g[j].id,prefix+sec+(j+1));
  }
  assert.equal(firstWeekQuestionRoute(w,qs),"#/study/"+w+"/R/0");
  assert.equal(adjacentQuestionRoute(w,qs,"R",9,1),"#/study/"+w+"/P/0");
  assert.equal(adjacentQuestionRoute(w,qs,"P",2,1),"#/study/"+w+"/P/3");
  assert.equal(adjacentQuestionRoute(w,qs,"P",6,1),"#/study/"+w+"/M/0");
  assert.equal(adjacentQuestionRoute(w,qs,"M",1,1),"#/study/"+w+"/M/2");
  assert.equal(adjacentQuestionRoute(w,qs,"A",2,1),"#/study/"+w+"/A/3");
  assert.equal(adjacentQuestionRoute(w,qs,"T",2,1),"#/study/"+w+"/T/3");
  assert.equal(adjacentQuestionRoute(w,qs,"X",0,1),"#/study/"+w+"/X/1");
 }
});
test("All new parts carry a valid unique primary and optional in-scope connected skills",()=>{
 let count=0,totalMarks=0,totalParts=0;
 for(let i=0;i<3;i++){
  const qs=weeks[i],tm=tagged[i],map=maps[i];
  same(tm.map(q=>q.id),qs.map(q=>q.id));
  assert.equal(Object.keys(map).length,31);
  for(const q of qs.filter(toNew)){
   count++;totalMarks+=q.marks;totalParts+=q.parts.length;
   assert.ok(q.title&&q.stem&&q.hint&&q.answer&&q.misconception&&q.reflection,q.id);
   assert.ok(q.steps.length===q.parts.length,q.id+" marked part solutions");
   assert.equal(q.parts.reduce((s,p)=>s+p[1],0),q.marks,q.id);
   assert.equal(Object.values(q.ao).reduce((s,v)=>s+v,0),q.marks,q.id);
   const taggedQ=tm.find(x=>x.id===q.id);
   assert.equal(map[q.id]?.length,q.parts.length,q.id);
   for(let j=0;j<taggedQ.parts.length;j++){
    const [stem,marks,meta]=taggedQ.parts[j];
    assert.equal(stem,q.parts[j][0]);
    assert.ok(Number.isInteger(marks)&&marks>0);
    assert.equal(meta.key,String.fromCharCode(97+j));
    const skill=getSpecSkill(meta.primarySkillId);
    assert.equal(skill?.scope,"internal",q.id+" "+meta.primarySkillId);
    if(q.section==="A")assert.equal(skill.year,1,q.id+" must be Year 1 Applied");
    assert.ok(!meta.secondarySkillIds.includes(meta.primarySkillId));
    assert.equal(new Set(meta.secondarySkillIds).size,meta.secondarySkillIds.length);
    for(const id of meta.secondarySkillIds)
     assert.equal(getSpecSkill(id)?.scope,"internal",q.id+" connected "+id);
   }
  }
 }
 same([count,totalParts,totalMarks],[27,totalParts,303]);
 assert.ok(totalParts>=90,"Expected independently assessed subparts across nine problems per week");
});
test("All new mathematical text is balanced, parsable MathJax without raw TeX or ambiguous double escapes",()=>{
 const slash=String.fromCharCode(92),open=slash+"(",close=slash+")";
 for(const qs of weeks)for(const q of qs.filter(toNew)){
  const str=[q.stem,q.hint,q.answer,...q.parts.map(p=>p[0]),...q.steps];
  for(const s of str){
   assert.equal(s.split(open).length-1,s.split(close).length-1,q.id+" delimiters");
   assert.ok(!s.includes(slash+slash),q.id+" double escape");
   assert.ok(!s.replace(/\\\([\s\S]*?\\\)/g,"").includes(slash),q.id+" TeX outside maths");
   assert.ok(!s.includes("|---"),q.id+" Markdown tables");
   for(const m of s.matchAll(/\\\(([\s\S]*?)\\\)/g)){
    let depth=0;for(const x of m[1])if(x==="{")depth++;else if(x==="}")depth--;
    assert.equal(depth,0,q.id+" braces");
   }
  }
 }
});
test("Mark scheme part-level method credits match the declared part marks for all additions",()=>{
 for(const qs of weeks)for(const q of qs.filter(toNew))
  for(let j=0;j<q.parts.length;j++){
   const marks=[...q.steps[j].matchAll(/\[(\d+)\]/g)].map(x=>Number(x[1])).reduce((a,b)=>a+b,0);
   assert.equal(marks,q.parts[j][1],q.id+" part "+(j+1));
  }
});
test("Core AO2/AO3 challenge is a majority without relabeling pre-existing marks",()=>{
 for(const [i,qs] of weeks.entries()){
  const profile={AO1:0,AO2:0,AO3:0};
  for(const q of qs.filter(q=>["R","P","M","A"].includes(q.section)))
   for(const [key,marks]of Object.entries(q.ao))profile[key]+=marks;
  assert.equal(profile.AO1+profile.AO2+profile.AO3,175,"Week "+(4+i));
  assert.ok(profile.AO2+profile.AO3>=112);
 }
});
test("New specification evidence navigates to released content without double-credit or fabricated zeros",()=>{
 const all=[taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
  ...tagged,taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions,taggedWeek10Questions].flat();
 assert.equal(all.length,274);
 assert.equal(all.filter(q=>["R","P","M","A"].includes(q.section)||q.id.startsWith("W10-")).length,226);
 for(let i=0;i<3;i++)for(const q of tagged[i].filter(toNew)){
  const ref=getPublishedPracticeForSkill(q.parts[0][2].primarySkillId);
  assert.ok(ref.some(x=>x.questionId===q.id&&x.role==="primary"));
 }
 const empty=calculateSpecificationProgress({questions:all,records:{},scope:"internal"});
 assert.equal(empty.summary.releasedQuestions,274);
 assert.equal(empty.summary.completedQuestions,0);
 assert.equal(empty.summary.verifiedAccuracy,null);
 const zero=calculateSpecificationProgress({
  questions:taggedWeek05Questions,
  records:{"W05-P4":{score:0,status:"I"}},
  scope:"internal"
 });
 assert.equal(zero.summary.completedQuestions,1);
 assert.equal(zero.summary.selfMarkAccuracy,0);
 assert.equal(zero.summary.verifiedAccuracy,null,"A multipart zero does not imply per-skill zero without part evidence");
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[],"Unreleased Year 2 moments never enter practice");
});
