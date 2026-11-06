import test from "node:test";
import assert from "node:assert/strict";
import {programmeOne,programmeTwo} from "../src/data/programmes.js";
import {siteConfig} from "../src/config.js";
import {expandedWeekBudget} from "../src/data/expanded-week-budget.js";
import {firstWeekQuestionRoute,adjacentQuestionRoute} from "../src/calendar-view.js";
import {getSpecSkill} from "../src/data/specification.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";
import {week07Questions} from "../src/data/week07.js";
import {week08Questions} from "../src/data/week08.js";
import {week09Questions} from "../src/data/week09.js";
import {week10Questions} from "../src/data/week10.js";
import {week07SkillMap} from "../src/data/week07-skill-map.js";
import {week08SkillMap} from "../src/data/week08-skill-map.js";
import {week09SkillMap} from "../src/data/week09-skill-map.js";
import {
 taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
 taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,
 taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions,taggedWeek10Questions
} from "../src/data/tagged-questions.js";

const weeks=[week07Questions,week08Questions,week09Questions];
const tagged=[taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions];
const maps=[week07SkillMap,week08SkillMap,week09SkillMap];
const original={R:10,P:3,M:2,A:3,T:3,X:1};
const sectionSpec={R:[10,20,24],P:[7,70,84],M:[3,40,48],A:[5,45,54],T:[4,40,48],X:[2,30,36]};
const allPublished=[
 taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
 taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,
 ...tagged,taggedWeek10Questions
];
const isAdded=q=>Number(q.id.match(/\d+$/)[0])>original[q.section];

test("Pass 3 completes 175/215/245-mark Weeks 1–9, preserving Week 10 authentic mock and unreleased Year 2",()=>{
 assert.equal(programmeOne.weeks.length,10);
 for(const wk of programmeOne.weeks.slice(0,9)){
  assert.equal(wk.targetMarks,175);
  assert.equal(wk.recommendedMarks,215);
  assert.equal(wk.optionalMarks,245);
 }
 assert.equal(programmeOne.weeks[9].targetMarks,150);
 assert.equal(week10Questions.length,22);
 assert.equal(week10Questions.reduce((s,q)=>s+q.marks,0),150);
 assert.equal(siteConfig.stage1.releaseMode,"scheduled");
 assert.equal(siteConfig.stage1.startDate,"2026-11-09");
 assert.equal(siteConfig.stage2.published,false);
 assert.equal(siteConfig.storageKey,"alevel-maths-calendar-progress-v1");
 assert.equal(programmeTwo.weekCount,20);
});

test("Weeks 7–9 deliver exactly nine additional questions and consistent 4/5/6-hour plan budgets",()=>{
 for(const [i,qs] of weeks.entries()){
  const w=i+7,legacy=w.toString().padStart(2,"0"),budget=expandedWeekBudget(qs);
  assert.equal(qs.length,31,"Week "+w);
  assert.equal(new Set(qs.map(q=>q.id)).size,31);
  for(const [section,[count,marks,minutes]] of Object.entries(sectionSpec)){
   const group=qs.filter(q=>q.section===section);
   assert.equal(group.length,count,legacy+" "+section);
   assert.equal(group.reduce((s,q)=>s+q.marks,0),marks);
   assert.equal(group.reduce((s,q)=>s+q.minutes,0),minutes);
   assert.deepEqual(group.map(q=>q.id),group.map((_,j)=>"W"+legacy+"-"+section+(j+1)));
  }
  assert.deepEqual(budget.essential,{marks:175,workingMinutes:210,reviewMinutes:30,totalMinutes:240});
  assert.deepEqual(budget.recommended,{marks:215,workingMinutes:258,reviewMinutes:42,totalMinutes:300});
  assert.deepEqual(budget.optional,{marks:245,workingMinutes:294,reviewMinutes:66,totalMinutes:360});
 }
});

test("Every legacy question retains the same section index and question ID; expanded navigation appends only",()=>{
 for(const [i,qs] of weeks.entries()){
  const w=i+7;
  for(const [section,n]of Object.entries(original))
   assert.deepEqual(qs.filter(q=>q.section===section).slice(0,n).map(q=>q.id),
    Array.from({length:n},(_,j)=>"W0"+w+"-"+section+(j+1)));
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

test("All 27 new items have a fully markable solution, stable unique part tags, and no Year 2 Applied",()=>{
 let newCount=0,newMarks=0,newParts=0;
 for(const [i,qs] of weeks.entries()){
  assert.deepEqual(tagged[i].map(q=>q.id),qs.map(q=>q.id));
  assert.equal(Object.keys(maps[i]).length,31);
  for(const q of qs.filter(isAdded)){
   newCount++;newMarks+=q.marks;newParts+=q.parts.length;
   for(const field of ["title","stem","hint","answer","misconception","reflection"])
    assert.ok(q[field]?.trim().length>0,q.id+" "+field);
   assert.ok(q.topics.length>0);
   assert.equal(q.steps.length,q.parts.length,q.id);
   assert.equal(q.parts.reduce((s,p)=>s+p[1],0),q.marks,q.id+" part marks");
   assert.equal(Object.values(q.ao).reduce((s,n)=>s+n,0),q.marks,q.id+" AO marks");
   assert.equal(maps[i][q.id]?.length,q.parts.length,q.id);
   const taggedQ=tagged[i].find(t=>t.id===q.id);
   for(const [j,[prompt,marks,meta]]of taggedQ.parts.entries()){
    assert.equal(prompt,q.parts[j][0]);
    assert.ok(Number.isInteger(marks)&&marks>0);
    assert.equal(meta.key,String.fromCharCode(97+j));
    const skill=getSpecSkill(meta.primarySkillId);
    assert.equal(skill?.scope,"internal",q.id+" "+meta.primarySkillId);
    if(q.section==="A")assert.equal(skill.year,1,q.id+" Year 1 applied");
    assert.equal(new Set(meta.secondarySkillIds).size,meta.secondarySkillIds.length);
    assert.ok(!meta.secondarySkillIds.includes(meta.primarySkillId));
    for(const connected of meta.secondarySkillIds)
     assert.equal(getSpecSkill(connected)?.scope,"internal",q.id+" connected "+connected);
   }
  }
 }
 assert.deepEqual([newCount,newMarks,newParts],[27,303,111]);
});

test("New question text contains balanced MathJax with no stray TeX or double-escaped commands",()=>{
 const slash=String.fromCharCode(92),op=slash+"(",cl=slash+")";
 for(const qs of weeks)for(const q of qs.filter(isAdded)){
  const texts=[q.stem,q.hint,q.answer,q.misconception,q.reflection,...q.parts.map(p=>p[0]),...q.steps];
  for(const s of texts){
   assert.equal(s.split(op).length,s.split(cl).length,q.id+" mathematics delimiters");
   assert.ok(!s.includes(slash+slash),q.id+" double TeX slash");
   assert.ok(!s.replace(/\\\([\s\S]*?\\\)/g,"").includes(slash),q.id+" TeX outside mathematics");
   assert.ok(!s.includes("|---"),q.id+" raw Markdown table");
   for(const ma of s.matchAll(/\\\(([\s\S]*?)\\\)/g)){
    let depth=0;for(const c of ma[1])if(c==="{")depth++;else if(c==="}")depth--;
    assert.equal(depth,0,q.id+" unbalanced TeX braces");
   }
  }
 }
});

test("Every new worked step awards exactly the declared part marks",()=>{
 for(const qs of weeks)for(const q of qs.filter(isAdded))
  for(const [j,part]of q.parts.entries()){
   const credits=[...q.steps[j].matchAll(/\s\[(\d+)\](?:\s|$)/g)]
    .reduce((s,m)=>s+Number(m[1]),0);
   assert.equal(credits,part[1],q.id+" part "+String.fromCharCode(97+j));
  }
});

test("AO2 and AO3 remain the overwhelming focus in each expanded week's essential pathway",()=>{
 const profiles=[
  {AO1:39,AO2:75,AO3:61},
  {AO1:39,AO2:76,AO3:60},
  {AO1:39,AO2:77,AO3:59}
 ];
 for(const [i,qs]of weeks.entries()){
  const actual={AO1:0,AO2:0,AO3:0};
  for(const q of qs.filter(x=>["R","P","M","A"].includes(x.section)))
   for(const[k,v]of Object.entries(q.ao))actual[k]+=v;
  assert.deepEqual(actual,profiles[i]);
  assert.ok(actual.AO2+actual.AO3>=135);
 }
});

test("All ten released weeks total 301 questions, 247 essential, with real progress and working navigation",()=>{
 const all=allPublished.flat();
 assert.equal(all.length,301);
 assert.equal(all.filter(q=>["R","P","M","A"].includes(q.section)||q.id.startsWith("W10-")).length,247);
 const blank=calculateSpecificationProgress({questions:all,records:{},scope:"internal"});
 assert.equal(blank.summary.releasedQuestions,301);
 assert.equal(blank.summary.completedQuestions,0);
 assert.equal(blank.summary.verifiedAccuracy,null);
 for(let i=0;i<3;i++)for(const q of tagged[i].filter(isAdded)){
  const skill=q.parts[0][2].primarySkillId;
  assert.ok(getPublishedPracticeForSkill(skill).some(ref=>ref.questionId===q.id&&ref.role==="primary"),q.id);
 }
 const zero=calculateSpecificationProgress({
  questions:taggedWeek09Questions,records:{"W09-P4":{score:0,status:"I"}},scope:"internal"
 });
 assert.equal(zero.summary.completedQuestions,1);
 assert.equal(zero.summary.selfMarkAccuracy,0);
 assert.equal(zero.summary.verifiedAccuracy,null);
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[],"Year 2 Moments stay locked");
 assert.deepEqual(getPublishedPracticeForSkill("S04-006"),[],"Year 2 Normal stays locked");
});

test("New Year 1 Applied prompts avoid forbidden Year 2 concepts; numerical methods address failure modes",()=>{
 for(const qs of weeks)for(const q of qs.filter(x=>x.section==="A"&&isAdded(x))){
  const text=[q.stem,...q.parts.map(p=>p[0])].join(" ");
  assert.doesNotMatch(text,/normal distribution|hypothesis test for correlation|projectile|friction coefficient|inclined plane|moment about/i,q.id);
 }
 for(const id of ["W07-P4","W08-P4","W08-P6","W08-X2","W09-X2"]){
  const q=weeks.flat().find(x=>x.id===id);
  assert.ok(q?.steps.every(x=>x.length>50),id+" developed reasoning, not placeholder answers");
 }
});
