import test from "node:test";
import assert from "node:assert/strict";
import {week02Questions} from "../src/data/week02.js";
import {week02SkillMap} from "../src/data/week02-skill-map.js";
import {taggedWeek01Questions,taggedWeek02Questions} from "../src/data/tagged-questions.js";
import {getSpecSkill} from "../src/data/specification.js";
import {programmeOne} from "../src/data/programmes.js";
import {siteConfig} from "../src/config.js";
import {createPracticeIndex,getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {recommendRevision} from "../src/revision-recommendations.js";

const groups={
 R:{n:10,marks:20,minutes:30},
 P:{n:3,marks:30,minutes:70},
 M:{n:2,marks:26,minutes:70},
 A:{n:3,marks:22,minutes:50},
 T:{n:3,marks:32,minutes:45},
 X:{n:1,marks:14,minutes:40}
};
const coreSections=new Set(["R","P","M","A"]);
const find=id=>week02Questions.find(q=>q.id===id);
const close=(a,b,eps=1e-8)=>Math.abs(a-b)<=eps;
const slash=String.fromCharCode(92);
const texOpen=slash+"(",texClose=slash+")";

test("Weeks 1–10 are published and no unauthored future weeks are exposed",()=>{
 assert.equal(siteConfig.stage1.releaseMode,"manual");
 assert.equal(siteConfig.stage1.releasedWeeks,10);
 assert.equal(programmeOne.weeks[0].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[1].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[2].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[3].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[4].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[5].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[6].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[7].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[8].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[9].hasPublishedContent,true);
 assert.equal(programmeOne.weeks.slice(10).every(w=>!w.hasPublishedContent),true);
 assert.equal(siteConfig.stage2.published,false);
});
test("Week 2 meets every section's count, mark and time envelope",()=>{
 assert.equal(week02Questions.length,22);
 assert.equal(new Set(week02Questions.map(q=>q.id)).size,22);
 const core=week02Questions.filter(q=>coreSections.has(q.section));
 assert.equal(core.length,18);
 assert.equal(core.reduce((n,q)=>n+q.marks,0),98);
 assert.equal(week02Questions.reduce((n,q)=>n+q.marks,0),144);
 for(const [section,expected] of Object.entries(groups)){
  const qs=week02Questions.filter(q=>q.section===section);
  assert.equal(qs.length,expected.n,section+" questions");
  assert.equal(qs.reduce((n,q)=>n+q.marks,0),expected.marks,section+" marks");
  assert.ok(qs.reduce((n,q)=>n+q.minutes,0)<=expected.minutes,section+" minutes");
  assert.deepEqual(qs.map(q=>q.id),qs.map((_,i)=>"W02-"+section+(i+1)));
 }
 const minutes=core.reduce((n,q)=>n+q.minutes,0);
 assert.ok(minutes<=220,"Reserve at least 20 minutes in the 240-minute core for marking");
 assert.ok(240-20-minutes<=10,"Do not under-fill the planned four hours");
});
test("Week 2 AO1/AO2/AO3 balance matches the authoring target, not paper weightings",()=>{
 const core=week02Questions.filter(q=>coreSections.has(q.section));
 const a=core.reduce((acc,q)=>{
  for(const [key,value]of Object.entries(q.ao))acc[key]=(acc[key]||0)+value;
  return acc;
 },{AO1:0,AO2:0,AO3:0});
 assert.deepEqual(a,{AO1:26,AO2:39,AO3:33});
 assert.equal(Object.values(a).reduce((n,v)=>n+v,0),98);
});
test("every Week 2 item has complete parts, worked marking, genuine TeX and feedback",()=>{
 for(const q of week02Questions){
  assert.match(q.id,/^W02-[RPMATX]\d+$/);
  assert.ok(q.title&&q.stem&&q.answer&&q.hint&&q.misconception&&q.reflection,q.id);
  assert.ok(q.minutes>0&&q.marks>0,q.id);
  assert.ok(q.steps.length>=q.parts.length,q.id+" should work through all marked parts");
  assert.equal(q.parts.reduce((sum,p)=>sum+p[1],0),q.marks,q.id+" part marks");
  assert.equal(Object.values(q.ao).reduce((sum,n)=>sum+n,0),q.marks,q.id+" AO marks");
  assert.ok(q.topics.length>=1,q.id);
  const texts=[q.stem,q.answer,q.hint,...q.parts.map(p=>p[0]),...q.steps];
  if(q.table)texts.push(...q.table.header,...q.table.rows.flat());
  for(const text of texts){
   assert.ok(!text.includes(slash+slash),q.id+" contains accidentally doubled backslash");
   assert.equal(text.split(texOpen).length-1,text.split(texClose).length-1,q.id+" unbalanced TeX");
   assert.equal(text.replace(/\\\([\s\S]*?\\\)/g,"").includes(slash),false,q.id+" TeX outside a math delimiter");
   assert.ok(!text.includes("|---"),q.id+" must not use raw markdown tables");
   assert.ok(!text.includes(String.raw`\(^{-`),q.id+" uses an isolated superscript rather than a complete formatted unit");
  }
 }
});
test("all 22 Week 2 questions have valid, in-scope primary and connected skill tags",()=>{
 assert.deepEqual(taggedWeek02Questions.map(q=>q.id),week02Questions.map(q=>q.id));
 assert.equal(Object.keys(week02SkillMap).length,22);
 let parts=0,marks=0;
 for(const q of taggedWeek02Questions){
  assert.ok(q.primarySkillIds.length>0,q.id);
  assert.equal(q.parts.length,week02SkillMap[q.id]?.length,q.id);
  for(let i=0;i<q.parts.length;i++){
   const [stem,partMark,tag]=q.parts[i];
   const primary=getSpecSkill(tag.primarySkillId);
   assert.ok(primary,q.id+" part "+i);
   assert.equal(primary.scope,"internal",q.id+" primary is Year2 only");
   assert.equal(tag.key,String.fromCharCode(97+i),q.id+" stable part key");
   assert.ok(stem&&Number.isInteger(partMark)&&partMark>0);
   assert.ok(Array.isArray(tag.secondarySkillIds));
   assert.equal(new Set(tag.secondarySkillIds).size,tag.secondarySkillIds.length);
   assert.ok(!tag.secondarySkillIds.includes(tag.primarySkillId));
   for(const id of tag.secondarySkillIds)
    assert.equal(getSpecSkill(id)?.scope,"internal",q.id+" secondary "+id);
   parts++;marks+=partMark;
  }
 }
 assert.ok(parts>=50);
 assert.equal(marks,144);
 // Two spaced-retrieval connections to Week 1 algebra are intentionally retained.
 assert.ok(taggedWeek02Questions.filter(q=>q.section==="R")
  .filter(q=>q.connectedSkillIds.some(id=>id.startsWith("P02"))).length>=2);
});
test("cross-week specification practice links use the correct week and local question number",()=>{
 const sets=[{week:1,questions:taggedWeek01Questions},{week:2,questions:taggedWeek02Questions}];
 const index=createPracticeIndex(sets);
 const refs=getPublishedPracticeForSkill("P03-007");
 assert.ok(refs.some(q=>q.questionId==="W02-R6"&&q.href==="#/study/2/R/5"));
 assert.ok(refs.some(q=>q.questionId==="W02-P1"&&q.href==="#/study/2/P/0"));
 assert.ok([...index.values()].every(m=>[...m.values()].every(r=>r.href.startsWith("#/study/"))));
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[]);
 const report=calculateSpecificationProgress({questions:taggedWeek02Questions,records:{"W02-R1":{score:2,status:"I"}},scope:"internal"});
 assert.equal(report.summary.completedQuestions,1);
 assert.equal(report.summary.releasedQuestions,22);
 const suggestions=recommendRevision({questions:[...taggedWeek01Questions,...taggedWeek02Questions],
  records:{},scope:"internal",report:calculateSpecificationProgress({
    questions:[...taggedWeek01Questions,...taggedWeek02Questions],records:{},scope:"internal"
  }),limit:5});
 for(const suggestion of suggestions){
  const matched=[...taggedWeek01Questions,...taggedWeek02Questions].find(q=>q.id===suggestion.questionId);
  assert.ok(matched,"Recommendation must refer to published practice");
  const sectionIndex=(matched.id.startsWith("W01")?taggedWeek01Questions:taggedWeek02Questions)
   .filter(q=>q.section===matched.section).findIndex(q=>q.id===matched.id);
  assert.equal(suggestion.href,"#/study/"+Number(matched.id.slice(1,3))+"/"+matched.section+"/"+sectionIndex);
 }
});
test("critical Week 2 model results check independently by substitution",()=>{
 // First Pure model: tangencies at c=1 and c=-7.
 const discriminant=c=>4*(16-(c+3)**2);
 for(const c of [1,-7])assert.ok(close(discriminant(c),0));
 assert.ok(discriminant(-3)>0&&discriminant(2)<0);
 for(const [x,y,c] of [[0,1,1],[4,-3,-7]]){
  assert.ok(close((x-2)**2+(y+1)**2,8));
  assert.ok(close(y,x+c));
 }
 // Circular detour model: both segments just touch a 3km circle.
 const h=24/Math.sqrt(55);
 const d=8*h/Math.sqrt(64+h*h);
 assert.ok(close(d,3));
 assert.ok(close(2*Math.sqrt(64+h*h),128/Math.sqrt(55)));
 // Constrained rectangle: unrestricted stationary point is infeasible.
 const A=x=>4*x*Math.sqrt(25-x*x);
 const prime=x=>4*(25-2*x*x)/Math.sqrt(25-x*x);
 assert.ok(5/Math.sqrt(2)<4&&prime(4)<0);
 assert.ok(close(A(4),48)&&close(A(5/Math.sqrt(2)),50));
 assert.ok(close(4*4+3*3,25));
 // Vertical throw: height and velocity at the positive impact time.
 const t=10*(1+Math.sqrt(3))/7;
 assert.ok(close(20+14*t-4.9*t*t,0));
 assert.ok(close(14-9.8*t,-14*Math.sqrt(3)));
 assert.ok(close(20+14*(10/7)-4.9*(10/7)**2,30));
 // 3D parallelogram: lengths, diagonals and fourth vertex.
 const A3=[1,-2,3], B3=[5,0,-1],C3=[3,4,1],D3=A3.map((v,i)=>v+C3[i]-B3[i]);
 assert.deepEqual(D3,[-1,2,5]);
 const dist2=(p,q)=>p.reduce((sum,v,i)=>sum+(v-q[i])**2,0);
 assert.equal(dist2(A3,B3),36);
 assert.equal(dist2(B3,C3),24);
 assert.equal(dist2(A3,C3),44);
 assert.equal(dist2(B3,D3),76);
 // Extension circles: both possible radii satisfy the point and share Q.
 for(const r of [8+2*Math.sqrt(6),8-2*Math.sqrt(6)]){
  for(const [x,y] of [[6,2],[2,6]])assert.ok(close((x-r)**2+(y-r)**2,r*r));
 }
 assert.ok(find("W02-X1").answer.includes("64"));
});
