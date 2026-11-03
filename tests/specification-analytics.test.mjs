import test from "node:test";
import assert from "node:assert/strict";
import {taggedWeek01Questions as questions} from "../src/data/tagged-questions.js";
import {specificationTopics} from "../src/data/specification.js";
import {calculateSpecificationProgress as calculate} from "../src/specification-analytics.js";
import {verifiedPartEvidence} from "../src/part-marking.js";

const question=id=>questions.find(q=>q.id===id);
const record=(q,values,status="I")=>{
 const partMarks=Object.fromEntries(q.parts.map((p,i)=>[p[2].key,values[i]]));
 return {status,score:values.reduce((sum,n)=>sum+n,0),scoreSource:"parts",partMarks};
};

test("empty browser record: no made-up percentages or attempted questions",()=>{
 const p=calculate({questions});
 assert.equal(p.summary.releasedQuestions,22);
 assert.equal(p.summary.completedQuestions,0);
 assert.equal(p.summary.verifiedAccuracy,null);
 assert.equal(p.summary.selfMarkAccuracy,null);
 assert.equal(p.summary.skillsEncountered,0);
 assert.equal(p.summary.skillsEvidenced,0);
 assert.equal(p.topics.length,19);
 const algebra=p.topicMap.get("P02");
 assert.ok(algebra.publishedQuestions>0);
 assert.equal(algebra.attemptedQuestions,0);
 assert.equal(algebra.accuracy,null);
 assert.equal(algebra.coverage,0,"Coverage is exposure, not accuracy");
 assert.equal(p.topicMap.get("M09").inScope,false,"Moments is outside internal exam");
});

test("legacy marks including zero count as finished and independent, but multi-part skills remain unscored",()=>{
 const q=question("W01-P2");
 const p=calculate({questions:[q],records:{[q.id]:{score:0,status:"I"}}});
 assert.equal(p.summary.completedQuestions,1);
 assert.equal(p.summary.selfMarkAccuracy,0,"A genuine recorded zero is 0%, not 'no evidence'");
 assert.equal(p.summary.verifiedAccuracy,null,"Overall mark cannot be apportioned across three parts");
 assert.equal(p.topicMap.get("P02").attemptedQuestions,1);
 assert.equal(p.topicMap.get("P02").independent,1);
 assert.equal(p.topicMap.get("P02").accuracy,null);
 assert.ok(p.topicMap.get("P02").skillsEncountered>0);
 assert.equal(p.skills.get("P02-021").attempted.size,1);
 assert.equal(p.skills.get("P02-021").accuracy,null);
});

test("single-part whole score is exactly attributable to its only primary skill",()=>{
 const q=question("W01-R2"); // two marks for discriminant
 assert.equal(q.parts.length,1);
 assert.equal(q.parts[0][2].primarySkillId,"P02-006");
 const p=calculate({questions:[q],records:{[q.id]:{score:0,status:"P"}}});
 assert.equal(p.summary.completedQuestions,1);
 assert.equal(p.summary.verifiedQuestions,1);
 assert.equal(p.summary.verifiedParts,1);
 assert.equal(p.topicMap.get("P02").available,2);
 assert.equal(p.topicMap.get("P02").earned,0);
 assert.equal(p.topicMap.get("P02").accuracy,0);
 assert.equal(p.skills.get("P02-006").accuracy,0);
 assert.equal(p.topicMap.get("P02").withHelp,1);
 assert.equal(verifiedPartEvidence(q,{score:3}).length,0,"Invalid score never counts");
});

test("multi-part evidence is credited to primary skills once, not all connected topics",()=>{
 const q=question("W01-P1"); // 2 + 3 + 3
 const p=calculate({questions:[q],records:{[q.id]:record(q,[2,1,0])}});
 assert.equal(p.summary.completedQuestions,1);
 assert.equal(p.summary.verifiedQuestions,1);
 assert.equal(p.summary.verifiedParts,3);
 assert.equal(p.summary.verifiedEarned,3);
 assert.equal(p.summary.verifiedAvailable,8);
 const algebra=p.topicMap.get("P02"),proof=p.topicMap.get("P01");
 assert.equal(algebra.attemptedQuestions,1);
 assert.equal(proof.attemptedQuestions,1,"The mixed question counts once in each topic");
 assert.equal(algebra.available,2,"Only part (a) is algebra primary marks");
 assert.equal(proof.available,6,"Only parts (b) and (c) are proof primary marks");
 assert.equal(algebra.available+proof.available,8,"Never duplicate the question's eight marks");
 assert.equal(proof.earned,1);
 assert.equal(proof.accuracy,17);
 assert.equal(p.skills.get("P01-001").attempted.size,1,"Connected skill is practised");
 assert.equal(p.skills.get("P01-001").available,0,"Connected skill receives no marks");
 assert.equal(p.skills.get("P01-001").accuracy,null);
});

test("multi-topic AO2/AO3 questions count distinct questions and exactly assigned marks",()=>{
 const q=question("W01-M2");
 const marks=[3,2,4,1,0];
 const p=calculate({questions:[q],records:{[q.id]:record(q,marks,"P")}});
 const pureAlgebra=p.topicMap.get("P02"),calculus=p.topicMap.get("P07");
 assert.equal(p.summary.completedQuestions,1);
 assert.equal(p.summary.verifiedEarned,10);
 assert.equal(p.summary.verifiedAvailable,14);
 assert.equal(pureAlgebra.attemptedQuestions,1);
 assert.equal(calculus.attemptedQuestions,1);
 assert.equal(pureAlgebra.available+calculus.available,14);
 assert.equal(pureAlgebra.earned+calculus.earned,10);
 assert.equal(pureAlgebra.withHelp,1);
 assert.equal(calculus.withHelp,1);
 assert.equal(p.summary.withHelp,1,"Overall is distinct questions, not topic occurrences");
});

test("partially filled or inconsistent detailed marking cannot produce skill accuracy",()=>{
 const q=question("W01-P2");
 const records=[
  {score:7,partMarks:{a:2},status:"P"},
  {score:7,scoreSource:"parts",partMarks:{a:2,b:3}},
  {score:7,scoreSource:"parts",partMarks:{a:2,b:3,c:5}},
  {score:4,scoreSource:"parts",partMarks:{a:2,b:3,c:99}}
 ];
 for(const rec of records){
  const p=calculate({questions:[q],records:{[q.id]:rec}});
  assert.equal(p.summary.verifiedAccuracy,null);
  assert.equal(p.topicMap.get("P02").accuracy,null);
 }
});

test("only supplied released questions contribute; duplicates cannot inflate figures",()=>{
 const q=question("W01-R1"),other=question("W01-P2");
 const input={questions:[q,q,other],records:{[q.id]:{status:"I",score:2},[other.id]:{score:7}}};
 const p=calculate(input);
 assert.equal(p.summary.releasedQuestions,2);
 assert.equal(p.summary.completedQuestions,2);
 assert.equal(p.summary.selfMarkEarned,9);
 const only=calculate({questions:[q],records:input.records});
 assert.equal(only.summary.releasedQuestions,1);
 assert.equal(only.summary.completedQuestions,1);
 assert.equal(only.summary.selfMarkAvailable,2);
});

test("internal vs full syllabus scopes keep unreleased Year 2 Applied unscored",()=>{
 const a=calculate({questions,scope:"internal"});
 const b=calculate({questions,scope:"full"});
 assert.equal(a.summary.skillsTotal,specificationTopics.flatMap(t=>t.skills).filter(s=>s.scope==="internal").length);
 assert.ok(b.summary.skillsTotal>a.summary.skillsTotal);
 assert.equal(b.topicMap.get("M09").inScope,true);
 assert.equal(b.topicMap.get("M09").attemptedQuestions,0);
 assert.equal(b.topicMap.get("M09").accuracy,null);
 assert.equal(a.topicMap.get("M09").skillsTotal,0);
});

test("status is optional; its absence must not be treated as help or independence",()=>{
 const q=question("W01-R1");
 const p=calculate({questions:[q],records:{[q.id]:{score:2}}});
 assert.equal(p.summary.completedQuestions,1);
 assert.equal(p.summary.independent,0);
 assert.equal(p.summary.withHelp,0);
 assert.equal(p.summary.independenceUnrecorded,1);
 assert.equal(p.topicMap.get("P02").independenceUnrecorded,1);
});

test("zero marks on a completed detailed breakdown is valid zero-percent evidence",()=>{
 const q=question("W01-P2");
 const p=calculate({questions:[q],records:{[q.id]:record(q,[0,0,0])}});
 assert.equal(p.summary.verifiedAccuracy,0);
 assert.equal(p.topicMap.get("P02").accuracy,0);
 assert.equal(p.summary.verifiedAvailable,10);
});
