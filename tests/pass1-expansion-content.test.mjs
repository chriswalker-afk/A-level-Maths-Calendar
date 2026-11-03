import test from "node:test";
import assert from "node:assert/strict";
import {week01Questions} from "../src/data/week01.js";
import {week02Questions} from "../src/data/week02.js";
import {week03Questions} from "../src/data/week03.js";
import {week01SkillMap} from "../src/data/week01-skill-map.js";
import {week02SkillMap} from "../src/data/week02-skill-map.js";
import {week03SkillMap} from "../src/data/week03-skill-map.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
 taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,taggedWeek07Questions,
 taggedWeek08Questions,taggedWeek09Questions,taggedWeek10Questions} from "../src/data/tagged-questions.js";
import {programmeOne,programmeTwo} from "../src/data/programmes.js";
import {siteConfig} from "../src/config.js";
import {getSpecSkill} from "../src/data/specification.js";
import {getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";
import {firstWeekQuestionRoute,adjacentQuestionRoute} from "../src/calendar-view.js";
import {expandedWeekBudget,EXPANDED_WEEK_TARGETS} from "../src/data/expanded-week-budget.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {recommendRevision} from "../src/revision-recommendations.js";

const all=[week01Questions,week02Questions,week03Questions];
const tagged=[taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions];
const skillMaps=[week01SkillMap,week02SkillMap,week03SkillMap];
const sectionPattern={R:[10,20,24],P:[7,70,84],M:[3,40,48],A:[5,45,54],T:[4,40,48],X:[2,30,36]};
const bracket=String.fromCharCode(92)+"(";
const close=String.fromCharCode(92)+")";
test("Pass 1 preserves the full programme release boundary and every existing storage key",()=>{
 assert.equal(siteConfig.stage1.releasedWeeks,10);
 assert.equal(siteConfig.storageKey,"alevel-maths-calendar-progress-v1");
 assert.equal(siteConfig.stage2.published,false);
 assert.equal(programmeTwo.weekCount,20);
 assert.equal(programmeOne.weeks.length,10);
 for(const wk of programmeOne.weeks.slice(0,3)){
  assert.equal(wk.targetMarks,175);
  assert.equal(wk.recommendedMarks,215);
  assert.equal(wk.optionalMarks,245);
 }
 assert.ok(programmeOne.weeks.slice(3,9).every(w=>w.targetMarks===98));
 assert.equal(programmeOne.weeks[9].targetMarks,150);
});
test("Weeks 1–3 each supply 175/215/245 marks in genuine 4/5/6-hour planning pathways",()=>{
 for(let w=1;w<=3;w++){
  const qs=all[w-1],budget=expandedWeekBudget(qs),ids=new Set(qs.map(q=>q.id));
  assert.equal(qs.length,31);
  assert.equal(ids.size,31);
  for(const [section,[count,marks,minutes]]of Object.entries(sectionPattern)){
   const values=budget.sections[section];
   assert.deepEqual([values.count,values.marks,values.workingMinutes],[count,marks,minutes],
     "W"+w+" "+section);
   const selected=qs.filter(q=>q.section===section);
   assert.deepEqual(selected.map(q=>q.id),
    selected.map((_,i)=>"W"+String(w).padStart(2,"0")+"-"+section+(i+1)));
  }
  assert.deepEqual(budget.essential,{marks:175,workingMinutes:210,reviewMinutes:30,totalMinutes:240});
  assert.deepEqual(budget.recommended,{marks:215,workingMinutes:258,reviewMinutes:42,totalMinutes:300});
  assert.deepEqual(budget.optional,{marks:245,workingMinutes:294,reviewMinutes:66,totalMinutes:360});
  assert.ok(Math.abs(budget.essential.workingMinutes/budget.essential.marks-1.2)<1e-12);
 }
 assert.equal(EXPANDED_WEEK_TARGETS.examMinutesPerMark,1.2);
});
test("All previously published question identifiers and subsection positions remain stable",()=>{
 for(let w=1;w<=3;w++){
  const qs=all[w-1],id=n=>"W"+String(w).padStart(2,"0")+"-"+n;
  for(const [section,oldCount]of Object.entries({R:10,P:3,M:2,A:3,T:3,X:1})){
   const selected=qs.filter(q=>q.section===section);
   for(let i=0;i<oldCount;i++)assert.equal(selected[i].id,id(section+(i+1)));
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
test("Every new question has original mathematical working, balanced TeX and one primary skill per marked part",()=>{
 let newQuestions=0,newParts=0,newMarks=0;
 for(let w=1;w<=3;w++){
  const qs=all[w-1],tags=tagged[w-1],map=skillMaps[w-1];
  assert.deepEqual(tags.map(q=>q.id),qs.map(q=>q.id));
  assert.equal(Object.keys(map).length,31);
  for(const q of qs.filter(q=>parseInt(q.id.match(/\d+$/)[0])>
      ({R:10,P:3,M:2,A:3,T:3,X:1}[q.section]))){
   newQuestions++;
   newParts+=q.parts.length;
   newMarks+=q.marks;
   assert.ok(q.title&&q.stem&&q.hint&&q.answer&&q.misconception&&q.reflection);
   assert.equal(q.steps.length,q.parts.length,q.id);
   assert.equal(Object.values(q.ao).reduce((a,b)=>a+b,0),q.marks);
   assert.equal(q.parts.reduce((a,p)=>a+p[1],0),q.marks);
   const marked=tags.find(x=>x.id===q.id);
   assert.equal(marked.parts.length,q.parts.length);
   assert.equal(map[q.id].length,q.parts.length);
   for(let i=0;i<marked.parts.length;i++){
    const [part,marks,tag]=marked.parts[i];
    assert.ok(part&&Number.isInteger(marks)&&marks>0);
    assert.equal(tag.key,"abcdefghijklmnopqrstuvwxyz"[i]);
    const primary=getSpecSkill(tag.primarySkillId);
    assert.equal(primary?.scope,"internal",q.id+" primary "+tag.primarySkillId);
    if(q.section==="A")assert.equal(primary.year,1,q.id+" Year 1 Applied");
    assert.equal(new Set(tag.secondarySkillIds).size,tag.secondarySkillIds.length);
    assert.ok(!tag.secondarySkillIds.includes(tag.primarySkillId));
    for(const ref of tag.secondarySkillIds)assert.equal(getSpecSkill(ref)?.scope,"internal");
   }
   for(const line of [q.stem,q.hint,q.answer,...q.parts.map(p=>p[0]),...q.steps]){
    assert.equal(line.split(bracket).length,line.split(close).length,q.id+" TeX delimiters");
    assert.ok(!line.includes("\\\\"),q.id+" double TeX escape");
    assert.ok(!line.replace(/\\\([\s\S]*?\\\)/g,"").includes("\\"),q.id+" TeX outside maths");
    for(const m of line.matchAll(/\\\(([\s\S]*?)\\\)/g)){
     let depth=0;for(const c of m[1]){if(c==="{")depth++;if(c==="}")depth--;}
     assert.equal(depth,0,q.id+" TeX braces");
    }
   }
  }
 }
 assert.deepEqual([newQuestions,newParts,newMarks],[27,100,303]);
});
test("Direct evidence includes important previously unassessed skills and avoids double scoring",()=>{
 const cases=[
  ["P01-004","W01-P4"],["P02-004","W01-P4"],["P02-026","W01-P6"],
  ["P02-010","W01-P7"],["S02-011","W01-A4"],["S02-014","W01-A5"],
  ["P03-008","W02-P4"],["P03-011","W02-P4"],["M07-003","W02-A4"],
  ["P05-013","W03-P4"],["P05-011","W03-P4"],["P05-006","W03-P6"]
 ];
 for(const [skill,id]of cases){
  const refs=getPublishedPracticeForSkill(skill);
  assert.ok(refs.some(ref=>ref.questionId===id&&ref.role==="primary"),skill+" "+id);
 }
 assert.deepEqual(getPublishedPracticeForSkill("M09-001"),[]);
 assert.deepEqual(getPublishedPracticeForSkill("S04-006"),[]);
});
test("More demanding resource intent: core AO2/AO3 majority and independent evidence is still never fabricated",()=>{
 for(let w=1;w<=3;w++){
  const qs=all[w-1],core=qs.filter(q=>["R","P","M","A"].includes(q.section));
  const marks={AO1:0,AO2:0,AO3:0};
  for(const q of core)for(const[k,v]of Object.entries(q.ao))marks[k]+=v;
  assert.equal(Object.values(marks).reduce((a,b)=>a+b,0),175);
  assert.ok(marks.AO2+marks.AO3>=115,JSON.stringify({w,marks}));
 }
 const allReleased=[
  taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
  taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,
  taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions,
  taggedWeek10Questions
 ].flat();
 assert.equal(allReleased.length,247);
 const blank=calculateSpecificationProgress({questions:allReleased,records:{},scope:"internal"});
 assert.equal(blank.summary.releasedQuestions,247);
 assert.equal(blank.summary.completedQuestions,0);
 const zero=calculateSpecificationProgress({questions:taggedWeek01Questions,
  records:{"W01-P4":{score:0,status:"I"}},scope:"internal"});
 assert.equal(zero.summary.completedQuestions,1);
 const recs=recommendRevision({questions:allReleased,records:{},report:blank,scope:"internal",limit:12});
 for(const rec of recs)assert.match(rec.href,/^#\/study\/(?:[1-9]|10)\/[RPMATX]\/\d+$/);
});
