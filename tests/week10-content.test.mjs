import test from "node:test";
import assert from "node:assert/strict";
import {week10Questions} from "../src/data/week10.js";
import {week10Pure} from "../src/data/week10-pure.js";
import {week10Applied} from "../src/data/week10-applied.js";
import {week10SkillMap} from "../src/data/week10-skill-map.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions,taggedWeek10Questions} from "../src/data/tagged-questions.js";
import {siteConfig} from "../src/config.js";
import {programmeOne} from "../src/data/programmes.js";
import {isWeekReleased} from "../src/publication.js";
import {getSpecSkill} from "../src/data/specification.js";
import {createPracticeIndex,getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {recommendRevision} from "../src/revision-recommendations.js";
import {mockPaperTotals} from "../src/mock-week.js";

const weeks=[taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions,taggedWeek10Questions];
const slash=String.fromCharCode(92),open=slash+"(",close=slash+")";

test("all 10 authored weeks are released but the 2027 final programme stays unpublished",()=>{
 assert.equal(siteConfig.stage1.releaseMode,"manual");
 assert.equal(siteConfig.stage1.releasedWeeks,10);
 assert.equal(siteConfig.storageKey,"alevel-maths-calendar-progress-v1");
 assert.equal(programmeOne.weeks.length,10);
 assert.ok(programmeOne.weeks.every(w=>w.hasPublishedContent));
 assert.equal(programmeOne.weeks[9].targetMarks,150);
 assert.ok(isWeekReleased(10,taggedWeek10Questions));
 assert.equal(isWeekReleased(11,taggedWeek10Questions),false);
 assert.equal(isWeekReleased(10,[]),false);
 assert.equal(siteConfig.stage2.published,false);
});
test("Week 10 contains two genuine paper mark/time budgets, not 98-mark practice slots",()=>{
 assert.equal(week10Questions.length,22);
 assert.equal(week10Pure.length,12);
 assert.equal(week10Applied.length,10);
 assert.equal(new Set(week10Questions.map(q=>q.id)).size,22);
 assert.deepEqual(week10Pure.map(q=>q.id),Array.from({length:12},(_,i)=>"W10-P"+(i+1)));
 assert.deepEqual(week10Applied.map(q=>q.id),Array.from({length:10},(_,i)=>"W10-A"+(i+1)));
 assert.deepEqual([...new Set(week10Questions.map(q=>q.section))],["P","A"]);
 const sums=qs=>[qs.reduce((s,q)=>s+q.marks,0),qs.reduce((s,q)=>s+q.minutes,0)];
 assert.deepEqual(sums(week10Pure),[100,120]);
 assert.deepEqual(sums(week10Applied),[50,60]);
 assert.deepEqual(sums(week10Applied.filter(q=>q.paper==="statistics")),[25,30]);
 assert.deepEqual(sums(week10Applied.filter(q=>q.paper==="mechanics")),[25,30]);
 assert.equal(120+60+60,240,"A full 60 minutes is reserved for marking and diagnosis");
 assert.deepEqual(sums(week10Questions),[150,180]);
});
test("original Week 10 AO authoring profile is close to Pearson's 50/25/25 qualification mix",()=>{
 const ao={AO1:0,AO2:0,AO3:0};
 for(const q of week10Questions)for(const[k,v]of Object.entries(q.ao))ao[k]+=v;
 assert.deepEqual(ao,{AO1:75,AO2:38,AO3:37});
 assert.ok(ao.AO1/150>=.48&&ao.AO1/150<=.52);
 assert.ok(ao.AO2/150>=.23&&ao.AO2/150<=.27);
 assert.ok(ao.AO3/150>=.23&&ao.AO3/150<=.27);
});
test("all 22 questions have complete solutions, feedback, part marks and balanced TeX syntax",()=>{
 let parts=0;
 for(const q of week10Questions){
  assert.match(q.id,/^W10-[PA]\d+$/);
  for(const key of ["title","stem","hint","answer","misconception","reflection"])
   assert.ok(typeof q[key]==="string"&&q[key].length>0,q.id+" "+key);
  assert.ok(q.topics.length>0&&q.marks>0&&q.minutes>0,q.id);
  assert.equal(q.parts.reduce((s,p)=>s+p[1],0),q.marks,q.id+" part marks");
  assert.equal(Object.values(q.ao).reduce((s,n)=>s+n,0),q.marks,q.id+" AO mark sum");
  assert.equal(q.steps.length,q.parts.length,q.id+" complete worked solution per part");
  parts+=q.parts.length;
  for(const t of [q.stem,q.hint,q.answer,...q.parts.map(p=>p[0]),...q.steps]){
   assert.equal(t.split(open).length,t.split(close).length,q.id+" MathJax delimiters");
   assert.ok(!t.includes(slash+slash),q.id+" double LaTeX slash");
   assert.ok(!t.replace(/\\\([\s\S]*?\\\)/g,"").includes(slash),q.id+" TeX outside math");
   for(const f of t.matchAll(/\\\(([\s\S]*?)\\\)/g)){
    let depth=0;for(const c of f[1]){if(c==="{")depth++;else if(c==="}")depth--;}
    assert.equal(depth,0,q.id+" TeX brace balance");
   }
  }
 }
 assert.equal(parts,68);
});
test("each of 68 parts has one permanent primary 9MA0 skill and linked skills never double count",()=>{
 assert.equal(Object.keys(week10SkillMap).length,22);
 assert.deepEqual(taggedWeek10Questions.map(q=>q.id),week10Questions.map(q=>q.id));
 let count=0,marks=0;
 for(const q of taggedWeek10Questions){
  assert.equal(week10SkillMap[q.id].length,q.parts.length);
  for(const [i,[stem,value,tag]]of q.parts.entries()){
   assert.ok(stem);assert.ok(value>0);
   assert.equal(tag.key,String.fromCharCode(97+i));
   const primary=getSpecSkill(tag.primarySkillId);
   assert.equal(primary?.scope,"internal",q.id+" "+tag.primarySkillId);
   if(q.section==="A"){
    assert.equal(primary.year,1,q.id+" Year 1 Applied ONLY");
    assert.ok(primary.topicId.startsWith(q.paper==="statistics"?"S":"M"));
   }
   assert.equal(new Set(tag.secondarySkillIds).size,tag.secondarySkillIds.length);
   assert.ok(!tag.secondarySkillIds.includes(tag.primarySkillId));
   for(const secondary of tag.secondarySkillIds)
    assert.equal(getSpecSkill(secondary)?.scope,"internal",q.id+" "+secondary);
   count++;marks+=value;
  }
 }
 assert.equal(count,68);
 assert.equal(marks,150);
});
test("published Week 10 exam questions are indexed and scored without treating missing marks as zeros",()=>{
 const index=createPracticeIndex(weeks.map((questions,i)=>({week:i+1,questions})));
 assert.equal(index.get("P01-001").get("W10-P1").href,"#/study/10/P/0");
 assert.equal(index.get("S05-005").get("W10-A5").href,"#/study/10/A/4");
 assert.equal(index.get("M08-008").get("W10-A10").href,"#/study/10/A/9");
 assert.ok(getPublishedPracticeForSkill("P10-009").some(q=>q.questionId==="W10-P12"));
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[],"Year 2 moments remain unavailable");
 assert.deepEqual(getPublishedPracticeForSkill("S04-006"),[],"Year 2 Normal remains unavailable");
 const all=weeks.flat();
 const empty=calculateSpecificationProgress({questions:all,records:{},scope:"internal"});
 assert.equal(empty.summary.releasedQuestions,220);
 assert.equal(empty.summary.completedQuestions,0);
 const zero=calculateSpecificationProgress({questions:taggedWeek10Questions,records:{"W10-P1":{score:0,status:"I"}},scope:"internal"});
 assert.equal(zero.summary.releasedQuestions,22);
 assert.equal(zero.summary.completedQuestions,1,"A recorded zero is a finished question");
 const paper=mockPaperTotals(taggedWeek10Questions,{"W10-P1":{score:0,status:"I"}},"P");
 assert.equal(paper.finished,1);
 assert.equal(paper.earned,0);
 assert.equal(paper.credited,6);
 assert.equal(paper.complete,false);
 const recs=recommendRevision({questions:all,records:{},report:empty,scope:"internal",limit:10});
 for(const r of recs)assert.match(r.href,/^#\/study\/(?:[1-9]|10)\/[RPMATX]\/\d+$/);
});
test("Year 1 Applied mini-mock keeps the official content boundary",()=>{
 const stats=week10Applied.filter(q=>q.paper==="statistics");
 const mech=week10Applied.filter(q=>q.paper==="mechanics");
 assert.equal(stats.length,5);assert.equal(mech.length,5);
 for(const q of week10Applied){
  const text=[q.stem,...q.parts.map(p=>p[0])].join(" ");
  assert.doesNotMatch(text,/Normal distribution|correlation coefficient hypothesis test|inclined plane|coefficient of friction|moments about a pivot|projectile in 2D/i);
 }
});
