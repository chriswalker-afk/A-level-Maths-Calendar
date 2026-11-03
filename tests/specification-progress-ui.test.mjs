import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {taggedWeek01Questions} from "../src/data/tagged-questions.js";
import {calculateSpecificationProgress} from "../src/specification-analytics.js";
import {renderTopicProgressDashboard} from "../src/specification-progress-view.js";
import {mountSpecification} from "../src/specification-view.js";

const byId=id=>taggedWeek01Questions.find(q=>q.id===id);
const parse=html=>new JSDOM("<!doctype html><body>"+html+"</body>",{url:"https://example.com"});
function environment(){
 const dom=new JSDOM("<!doctype html><body><main id='app'></main></body>",{url:"https://example.com/#/specification/internal"});
 global.window=dom.window;
 global.document=dom.window.document;
 global.requestAnimationFrame=cb=>cb();
 dom.window.HTMLElement.prototype.scrollIntoView=function(){};
 return {dom,root:dom.window.document.getElementById("app")};
}
function cleanup(dom,dispose){
 dispose?.();
 dom.window.close();
 delete global.window;
 delete global.document;
 delete global.requestAnimationFrame;
}
test("progress dashboard separates syllabus coverage from precise accuracy",()=>{
 const q=byId("W01-P2");
 const report=calculateSpecificationProgress({questions:[q],records:{[q.id]:{score:7,status:"I"}}});
 const dom=parse(renderTopicProgressDashboard(report));
 const cards=[...dom.window.document.querySelectorAll(".progress-topic-card")];
 assert.equal(cards.length,18,"Internal exam has 18 active topic groups (Moments excluded)");
 const algebra=dom.window.document.querySelector('a.progress-topic-card[href="#/specification/internal/P02"]');
 assert.ok(algebra);
 assert.match(algebra.textContent,/1 attempt \/ 1 published question/);
 assert.match(algebra.textContent,/No part accuracy yet/);
 assert.match(dom.window.document.body.textContent,/1\s*\/\s*1/);
 assert.match(dom.window.document.body.textContent,/not predicted exam grades/i);
 assert.ok(dom.window.document.querySelector('a[href="#/progress/full"]'));
 dom.window.close();
});
test("genuine zero from one-part marking is visibly 0%, not No evidence",()=>{
 const q=byId("W01-R2");
 const report=calculateSpecificationProgress({questions:[q],records:{[q.id]:{score:0,status:"P"}}});
 const dom=parse(renderTopicProgressDashboard(report));
 const algebra=dom.window.document.querySelector('a.progress-topic-card[href="#/specification/internal/P02"]');
 assert.match(algebra.textContent,/0%/);
 assert.doesNotMatch(algebra.textContent,/No part accuracy yet/);
 assert.match(algebra.textContent,/Early mark evidence/);
 dom.window.close();
});
test("full syllabus shows Moments while internal syllabus does not count future content",()=>{
 const internal=calculateSpecificationProgress({questions:taggedWeek01Questions,scope:"internal"});
 const full=calculateSpecificationProgress({questions:taggedWeek01Questions,scope:"full"});
 const a=parse(renderTopicProgressDashboard(internal));
 const b=parse(renderTopicProgressDashboard(full,{scope:"full",strand:"M"}));
 assert.equal(a.window.document.querySelector('a.progress-topic-card[href="#/specification/internal/M09"]'),null);
 assert.ok(b.window.document.querySelector('a.progress-topic-card[href="#/specification/full/M09"]'));
 assert.equal(b.window.document.querySelectorAll(".progress-topic-card").length,4);
 assert.match(b.window.document.body.textContent,/No published questions/);
 a.window.close();b.window.close();
});
test("My Specification shows actual local counts for topics and individual skills",()=>{
 const {dom,root}=environment();
 const q=byId("W01-R2");
 const records={[q.id]:{score:0,status:"I"}};
 let dispose=mountSpecification(root,{scope:"internal",questions:[q],records});
 assert.match(root.querySelector(".spec-progress-pulse").textContent,/1 \/ 1/);
 const algebra=root.querySelector('a.spec-topic-card[href="#/specification/internal/P02"]');
 assert.ok(algebra);
 assert.match(algebra.textContent,/0% accuracy/);
 assert.match(algebra.textContent,/1 \/ 1 questions attempted/);
 dispose();
 dispose=mountSpecification(root,{scope:"internal",topicId:"P02",questions:[q],records});
 assert.match(root.querySelector(".spec-topic-evidence").textContent,/1 \/ 1/);
 assert.match(root.querySelector(".spec-topic-evidence").textContent,/0% self-marked accuracy/);
 const skill=dom.window.document.getElementById("P02-006");
 assert.ok(skill);
 skill.open=true;
 assert.match(skill.textContent,/0% of verified part marks/);
 assert.match(skill.textContent,/1\s+questions practised/);
 cleanup(dom,dispose);
});
test("unattempted published content shows no fake accuracy; search still works",()=>{
 const {dom,root}=environment();
 const q=byId("W01-R2");
 const dispose=mountSpecification(root,{scope:"internal",questions:[q],records:{}});
 const algebra=root.querySelector('a.spec-topic-card[href="#/specification/internal/P02"]');
 assert.ok(algebra);
 assert.match(algebra.querySelector(".spec-card-progress").textContent,/No part accuracy/);
 assert.doesNotMatch(algebra.querySelector(".spec-card-progress").textContent,/0% accuracy/);
 const search=root.querySelector("#spec-search");
 search.value="discriminant";
 search.dispatchEvent(new dom.window.Event("input",{bubbles:true}));
 assert.ok(root.querySelector('a[href="#/specification/internal/P02"]'));
 cleanup(dom,dispose);
});
