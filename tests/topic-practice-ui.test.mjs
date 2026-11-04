import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {mountSpecification} from "../src/specification-view.js";
import {renderTopicPracticeQuestion} from "../src/topic-practice-view.js";
import {validateTopicPracticeBank} from "../src/data/topic-practice/schema.js";
import {specificationTopics} from "../src/data/specification.js";

function environment(){
 const dom=new JSDOM("<!doctype html><html><body><main id='app'></main></body></html>",{
  url:"https://example.test/#/specification/internal/P02"
 });
 global.window=dom.window;
 global.document=dom.window.document;
 global.requestAnimationFrame=callback=>callback();
 dom.window.HTMLElement.prototype.scrollIntoView=()=>{};
 return {dom,root:dom.window.document.querySelector("#app")};
}
function close(dom,dispose){
 dispose?.();dom.window.close();
 delete global.window;delete global.document;delete global.requestAnimationFrame;
}
function sample(){
 const catalogue=Object.fromEntries(specificationTopics.map(topic=>[topic.id,[]]));
 catalogue.P02=[{
  id:"TP-P02-AO1",topicId:"P02",aoFocus:"AO1",scope:"internal",published:true,
  title:"Fresh practice example",marks:2,minutes:3,ao:{AO1:2,AO2:0,AO3:0},
  stem:"Solve an original equation.",parts:[
   ["Solve for x.",2,{primarySkillId:"P02-001"}]
  ],
  hint:"Use inverse operations.",steps:["Rearrange the expression. [2]"],
  answer:"The exact result.",misconception:"Check the restrictions.",
  reflection:"How could you check the result?"
 }];
 return validateTopicPracticeBank(catalogue).questions[0];
}

test("specification topic shows three live original AO questions",()=>{
 const {dom,root}=environment();
 const dispose=mountSpecification(root,{scope:"internal",topicId:"P02"});
 const cards=[...root.querySelectorAll(".topic-practice-card")];
 assert.equal(cards.length,3);
 assert.deepEqual(cards.map(card=>card.dataset.ao),["AO1","AO2","AO3"]);
 assert.equal(root.querySelectorAll(".topic-practice-card.is-ready").length,3);
 assert.equal(root.querySelectorAll('a[href^="#/topic-practice/internal/P02/"]').length,3);
 assert.match(root.textContent,/original exam-style questions/i);
 assert.match(root.textContent,/3 \/ 3 available/);
 assert.ok(root.querySelector(".spec-skill-list"),"Existing skill list remains");
 close(dom,dispose);
});

test("a saved independent topic score appears on its card without changing weekly practice",()=>{
 const {dom,root}=environment();
 const dispose=mountSpecification(root,{
  scope:"internal",topicId:"P02",records:{"TP-P02-AO1":{score:4,status:"I"}}
 });
 const card=root.querySelector('.topic-practice-card[data-ao="AO1"]');
 assert.ok(card);
 assert.match(card.textContent,/4 \/ 5 marks/);
 assert.match(card.textContent,/Review or retry/);
 assert.ok(root.querySelector('.topic-practice-card[data-ao="AO2"]'));
 close(dom,dispose);
});

test("internal-year-only Moments topic does not offer misleading practice",()=>{
 const {dom,root}=environment();
 const dispose=mountSpecification(root,{scope:"internal",topicId:"M09"});
 assert.ok(root.querySelector(".topic-practice-future"));
 assert.equal(root.querySelectorAll(".topic-practice-card").length,0);
 assert.ok(root.querySelector('a[href="#/specification/full/M09"]'));
 close(dom,dispose);
});

test("unpublished direct route has no workbench, hints, solutions or scoring",()=>{
 const {dom,root}=environment();
 root.innerHTML=renderTopicPracticeQuestion({
  scope:"internal",topicId:"P02",aoFocus:"AO1",question:null
 });
 assert.match(root.textContent,/not yet available/i);
 assert.equal(root.querySelector("#question-working-space"),null);
 assert.equal(root.querySelector("#solution-toggle"),null);
 assert.equal(root.querySelector("#question-assessment"),null);
 close(dom);
});

test("a future published original question uses existing editor and review mounts",()=>{
 const {dom,root}=environment(),q=sample();
 root.innerHTML=renderTopicPracticeQuestion({
  scope:"internal",topicId:"P02",aoFocus:"AO1",question:q,records:{}
 });
 assert.ok(root.querySelector(".study-answer-layout"));
 assert.ok(root.querySelector("#question-working-space"));
 assert.ok(root.querySelector("#question-assessment"));
 assert.ok(root.querySelector("#attempt-history-root"));
 assert.ok(root.querySelector(".study-mobile-tabs"));
 assert.ok(root.querySelector('a[href="#/specification/internal/P02"]'));
 assert.equal(root.querySelector("#hint-box").hidden,true);
 assert.equal(root.querySelector("#solution-box").hidden,true);
 assert.match(root.querySelector("#active-question-title").textContent,/Fresh practice example/);
 assert.match(root.textContent,/separate from your weekly practice/i);
 close(dom);
});
