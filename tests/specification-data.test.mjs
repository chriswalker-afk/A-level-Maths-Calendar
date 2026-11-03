import test from "node:test";
import assert from "node:assert/strict";
import {mathjax} from "mathjax-full/js/mathjax.js";
import {TeX} from "mathjax-full/js/input/tex.js";
import {CHTML} from "mathjax-full/js/output/chtml.js";
import {liteAdaptor} from "mathjax-full/js/adaptors/liteAdaptor.js";
import {RegisterHTMLHandler} from "mathjax-full/js/handlers/html.js";
import {AllPackages} from "mathjax-full/js/input/tex/AllPackages.js";
import {
 specificationTopics,specificationSkills,getSpecTopic,getSpecSkill,
 specificationCounts,SPEC_SOURCE_URL,STRANDS,THEMES,searchCatalogue,inScope
} from "../src/data/specification.js";

const expected={
 P:{1:1,2:11,3:4,4:6,5:9,6:7,7:6,8:8,9:5,10:5},
 S:{1:1,2:4,3:3,4:3,5:3},
 M:{6:1,7:5,8:6,9:1}
};
test("complete 9MA0 topic hierarchy: 10 Pure, 5 Statistics, 4 Mechanics",()=>{
 assert.equal(specificationTopics.length,19);
 assert.deepEqual(specificationTopics.map(t=>t.strand),
   [...Array(10).fill("P"),...Array(5).fill("S"),...Array(4).fill("M")]);
 for(const [strand,numbers] of Object.entries(expected)){
  const topics=specificationTopics.filter(t=>t.strand===strand);
  assert.deepEqual(topics.map(t=>t.number),Object.keys(numbers).map(Number));
  assert.equal(new Set(topics.map(t=>t.id)).size,topics.length);
  assert.ok(topics.every(t=>t.paper===STRANDS[strand].paper));
 }
 assert.match(SPEC_SOURCE_URL,/qualifications\.pearson\.com.*mathematics/i);
});
test("every official numbered topic reference is covered",()=>{
 for(const t of specificationTopics){
  const refs=new Set(t.skills.map(s=>s.reference));
  const specCount=expected[t.strand][t.number];
  for(let i=1;i<=specCount;i++)
   assert.ok(refs.has(t.strand+t.number+"."+i),"Missing "+t.strand+t.number+"."+i);
 }
});
test("255 permanent, distinguishable, exam-focused skills",()=>{
 assert.ok(specificationSkills.length>=250);
 const ids=new Set;
 for(const t of specificationTopics){
  assert.ok(t.title&&t.description&&t.skills.length>=5,t.id);
  for(const s of t.skills){
   assert.ok(!ids.has(s.id),"Duplicate skill ID "+s.id);
   ids.add(s.id);
   assert.match(s.id,new RegExp("^"+t.id+"-\\d{3}$"));
   assert.ok(s.statement.startsWith("I can "),s.id+" must be student friendly");
   assert.ok(s.statement.length>35,s.id+" not sufficiently specific");
   assert.ok(s.examDemand.length>30,s.id+" needs a genuine examination demand");
   assert.equal(getSpecSkill(s.id),s);
   assert.equal(s.topicId,t.id);
   assert.match(s.reference,new RegExp("^"+t.strand+t.number+"\\.\\d+$"));
   if(t.strand==="P"){
    assert.equal(s.year,null);
    assert.equal(s.scope,"internal");
   }else{
    assert.ok(s.year===1||s.year===2);
    assert.equal(s.scope,s.year===1?"internal":"full");
   }
  }
  assert.equal(getSpecTopic(t.id),t);
 }
 assert.equal(ids.size,specificationSkills.length);
 assert.equal(getSpecSkill("missing"),null);
 assert.equal(getSpecTopic("missing"),null);
});
test("internal exam includes all Pure and just Year 1 Applied",()=>{
 const internal=specificationCounts("internal");
 const full=specificationCounts("full");
 assert.equal(internal.totalTopics,19);
 assert.equal(full.totalTopics,19);
 assert.equal(full.visibleTopics,19);
 assert.ok(internal.visibleTopics<19);
 assert.ok(internal.visibleSkills<full.visibleSkills);
 assert.equal(full.visibleSkills,specificationSkills.length);
 assert.equal(internal.strands.P.skills,full.strands.P.skills);
 assert.ok(internal.strands.S.skills<full.strands.S.skills);
 assert.ok(internal.strands.M.skills<full.strands.M.skills);
 assert.equal(internal.strands.M.topics,3,"Moments is Year 2 only");
 assert.equal(specificationSkills.find(x=>x.statement.includes("constant acceleration in two dimensions")).scope,"full","2D constant acceleration belongs to Year 2");
 assert.ok(specificationSkills.some(x=>x.reference==="P8.4"&&x.statement.includes("limit of sums")));
 assert.ok(specificationSkills.some(x=>x.reference==="P9.5"&&x.statement.includes("numerical")));
 assert.ok(!specificationSkills.some(x=>/volume formed by rotating/i.test(x.statement)),"volume of revolution not in 9MA0 Pure specification");
 for(const s of specificationSkills){
  assert.equal(inScope(s,"internal"),s.scope==="internal");
  assert.equal(inScope(s,"full"),true);
 }
});
test("search finds skills and future-only titles, respects strand and scope",()=>{
 const pure=searchCatalogue(specificationTopics,{scope:"internal",query:"discriminant"});
 assert.ok(pure.some(x=>x.topic.id==="P02"));
 const normalInternal=searchCatalogue(specificationTopics,{scope:"internal",query:"Normal distribution"});
 const normalFull=searchCatalogue(specificationTopics,{scope:"full",query:"Normal distribution"});
 assert.ok(normalFull.some(x=>x.topic.id==="S04"&&x.matching.length));
 assert.equal(normalInternal.reduce((n,x)=>n+x.matching.length,0),0);
 const future=searchCatalogue(specificationTopics,{scope:"internal",query:"Moments"});
 assert.ok(future.some(x=>x.topic.id==="M09"&&x.matching.length===0));
 const mechanicsOnly=searchCatalogue(specificationTopics,{scope:"full",strand:"M"});
 assert.equal(mechanicsOnly.length,4);
 assert.ok(mechanicsOnly.every(x=>x.topic.strand==="M"));
 const full=searchCatalogue(specificationTopics,{scope:"full"});
 assert.equal(full.length,19);
});
test("overarching themes are available for every paper",()=>{
 assert.deepEqual(THEMES.map(t=>t.id),["OT1","OT2","OT3"]);
 for(const t of THEMES)assert.ok(t.description&&t.examDemand);
});
test("embedded mathematical expressions typeset in the Pearson skill catalogue",()=>{
 const adaptor=liteAdaptor();
 RegisterHTMLHandler(adaptor);
 const doc=mathjax.document("",{
  InputJax:new TeX({packages:AllPackages}),
  OutputJax:new CHTML({fontURL:"https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2"})
 });
 let expressions=0;
 for(const skill of specificationSkills){
  for(const str of [skill.statement,skill.examDemand,skill.pitfall||""]){
   assert.ok(!str.includes("\\\\("),"double-escaped TeX in "+skill.id);
   const open=(str.match(/\\\(/g)||[]).length;
   const close=(str.match(/\\\)/g)||[]).length;
   assert.equal(open,close,"Unbalanced inline maths in "+skill.id);
   for(const m of str.matchAll(/\\\(([\s\S]*?)\\\)/g)){
    expressions++;
    const html=adaptor.outerHTML(doc.convert(m[1],{display:false}));
    assert.doesNotMatch(html,/mjx-merror|data-mjx-error|<merror/,skill.id);
   }
  }
 }
 assert.ok(expressions>=1,"Expect mathematical examples, not only text");
});
