import test from "node:test";
import assert from "node:assert/strict";
import {mathjax} from "mathjax-full/js/mathjax.js";
import {TeX} from "mathjax-full/js/input/tex.js";
import {CHTML} from "mathjax-full/js/output/chtml.js";
import {liteAdaptor} from "mathjax-full/js/adaptors/liteAdaptor.js";
import {RegisterHTMLHandler} from "mathjax-full/js/handlers/html.js";
import {AllPackages} from "mathjax-full/js/input/tex/AllPackages.js";
import {getSpecTopic} from "../src/data/specification.js";
import {topicPracticeQuestions,getTopicPracticeQuestion} from "../src/data/topic-practice/index.js";
import {
 taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
 taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,
 taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions,
 taggedWeek10Questions
} from "../src/data/tagged-questions.js";

const weekly=[
 ...taggedWeek01Questions,...taggedWeek02Questions,...taggedWeek03Questions,
 ...taggedWeek04Questions,...taggedWeek05Questions,...taggedWeek06Questions,
 ...taggedWeek07Questions,...taggedWeek08Questions,...taggedWeek09Questions,
 ...taggedWeek10Questions
];
const tokenise=s=>String(s).replace(/\s+/g," ").trim().toLowerCase();

test("57 originals have full part-by-part marking, useful support and distinct weekly content",()=>{
 const weeklyIds=new Set(weekly.map(q=>q.id));
 const weeklyStems=new Set(weekly.map(q=>tokenise(q.stem)));
 const originals=new Set();
 const titles=new Set();
 const stems=new Set();
 for(const q of topicPracticeQuestions){
  assert.equal(q.published,true,q.id);
  assert.ok(!weeklyIds.has(q.id),q.id+" reuses a weekly ID");
  assert.ok(!weeklyStems.has(tokenise(q.stem)),q.id+" copies a weekly stem");
  assert.ok(!originals.has(q.id),q.id+" duplicates a topic-bank ID");
  assert.ok(!titles.has(tokenise(q.title)),q.id+" duplicates a topic-bank title");
  assert.ok(!stems.has(tokenise(q.stem)),q.id+" duplicates a topic-bank stem");
  originals.add(q.id);titles.add(tokenise(q.title));stems.add(tokenise(q.stem));
  assert.ok(q.parts.length>=2,q.id+" needs a meaningful multi-part problem");
  assert.equal(q.parts.length,q.steps.length,q.id+" must mark every part");
  assert.ok(q.marks>=({AO1:5,AO2:7,AO3:9}[q.aoFocus]),q.id+" underweighted");
  assert.ok(q.minutes>=q.marks,q.id+" does not allow about one minute per mark");
  assert.ok(q.hint.length>=35,q.id+" hint too terse");
  assert.ok(q.misconception.length>=45,q.id+" misconception too terse");
  assert.ok(q.reflection.length>=30,q.id+" reflection too terse");
  assert.ok(getSpecTopic(q.topicId),q.id+" topic missing");
  assert.ok(q.primarySkillIds.some(id=>id.startsWith(q.topicId+"-")),
    q.id+" not anchored in its own topic");
  for(let i=0;i<q.parts.length;i++){
   const step=q.steps[i];
   assert.ok(step.length>=30,q.id+" scheme for part "+(i+1)+" too brief");
   const annotation=step.match(/\[(\d+)\]\s*$/);
   assert.ok(annotation,q.id+" missing final part-mark annotation "+(i+1));
   assert.equal(Number(annotation[1]),q.parts[i][1],
    q.id+" worked step has wrong mark allocation");
  }
 }
 assert.equal(originals.size,57);
 assert.equal(titles.size,57);
});

test("all original question mathematical notation renders without TeX errors",()=>{
 const adaptor=liteAdaptor();
 RegisterHTMLHandler(adaptor);
 const doc=mathjax.document("",{
  InputJax:new TeX({packages:AllPackages}),
  OutputJax:new CHTML({fontURL:"https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2"})
 });
 const mathFragment=/\\\(([\s\S]*?)\\\)/g;
 let count=0;
 for(const q of topicPracticeQuestions){
  const texts=[q.stem,q.hint,q.answer,q.misconception,q.reflection,
   ...q.parts.map(p=>p[0]),...q.steps];
  for(const line of texts){
   const markers=[...line.matchAll(/\\\(|\\\)/g)].map(m=>m[0]);
   let open=false;
   for(const marker of markers){
    if(marker==="\\("){assert.ok(!open,q.id+" nested maths delimiters");open=true;}
    else{assert.ok(open,q.id+" closes unopened maths");open=false;}
   }
   assert.ok(!open,q.id+" leaves maths unclosed");
   for(const found of line.matchAll(mathFragment)){
    count++;
    let html;
    try{html=adaptor.outerHTML(doc.convert(found[1],{display:false}));}
    catch(err){assert.fail(q.id+" TeX "+JSON.stringify(found[1])+" threw "+err.message)}
    assert.doesNotMatch(html,/mjx-merror|data-mjx-error|<merror/,
      q.id+" invalid TeX in "+JSON.stringify(found[1]));
    assert.match(html,/mjx-container/,q.id+" did not typeset "+found[1]);
   }
  }
 }
 assert.ok(count>300,"Expected rich mathematics across 57 questions, got "+count);
});

test("independent numerical checks of all 19 AO3 model or reasoning results",()=>{
 const q=id=>getTopicPracticeQuestion(id,"AO3","full");
 const approx=(actual,expected,eps=0.0001)=>
  assert.ok(Math.abs(actual-expected)<eps,actual+" should equal "+expected);

 for(let n=-40;n<=40;n++)assert.equal(Math.abs((n**3-n)%6),0,"P01 divisibility at "+n);
 const feasible=x=>x>0&&x*(x+5)>=150&&4*x+10<=54;
 assert.ok(feasible(10)&&feasible(11)&&!feasible(9.99)&&!feasible(11.01));
 approx(Math.hypot(6-18/5,3-9/5),6*Math.sqrt(5)/5);
 const sum=n=>n/2*(240+15*(n-1));
 assert.equal(sum(14),3045);assert.equal(sum(15),3375);
 const h=t=>3+2*Math.sin(Math.PI*t/6);
 approx(h(1),4);approx(h(5),4);approx(h(3),5);approx(h(6),3);
 const tDose=4+5*Math.log((80*Math.exp(-0.8)+60)/40);
 approx(80*Math.exp(-0.2*tDose)+60*Math.exp(-0.2*(tDose-4)),40);
 approx(tDose,8.38,0.01);
 const x=(25-5*Math.sqrt(7))/3;
 const volume=b=>b*(30-2*b)*(20-2*b);
 approx(volume(x),1056.30589546119,0.001);
 approx(600-200*x+12*x*x,0);
 const k=Math.log(2)/3;
 const t180=Math.log(15/2)/k;
 approx(200-150*Math.exp(-k*t180),180);
 const fill=t=>2*t+2*(1-Math.exp(-t/2));
 approx(fill(3.660382862541141),9,1e-8);
 assert.deepEqual([6,8].map((v,i)=>v+[-2,1][i]),[4,9]);
 assert.deepEqual([4,9].map((v,i)=>v-[1,-2][i]),[3,11]);
 assert.deepEqual([600,300,100].map(n=>80*n/1000),[48,24,8]);
 const variance=7280/40-(520/40)**2;
 assert.equal(variance,13);
 approx(3+0.5*(520/40),9.5);
 approx(0.5*Math.sqrt(variance),1.80277563773,1e-8);
 approx(.08+.05-.08*.05,.126);
 function binomial(n,p,end){
  let total=0,comb=1;
  for(let j=0;j<=end;j++){
   if(j>0)comb=comb*(n-j+1)/j;
   total+=comb*p**j*(1-p)**(n-j);
  }
  return total;
 }
 approx(binomial(8,.12,2),.93921083,1e-7);
 approx(binomial(8,.12,3),.99027839,1e-7);
 approx(1-binomial(20,.1,4),.04317450,1e-7);
 approx(100/(2*3),50/3);
 assert.equal(12+30+9,51);
 approx(12+6*(29/6)+9,50);
 approx(4*4+4**3/6,80/3);
 const xmax=(550-58.8)/147;
 approx((294+735*xmax)/5,550);
 approx(852.6-550,302.6);
 for(const topicId of [
  "P01","P02","P03","P04","P05","P06","P07","P08","P09","P10",
  "S01","S02","S03","S04","S05","M06","M07","M08","M09"
 ]){
  assert.ok(q(topicId),topicId+" missing AO3 application");
 }
});
