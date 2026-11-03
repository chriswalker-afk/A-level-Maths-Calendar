import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {mountSpecification} from "../src/specification-view.js";
import {specificationTopics} from "../src/data/specification.js";

function environment(){
 const dom=new JSDOM("<!doctype html><html><body><main id='app'></main></body></html>",{
  url:"https://example.test/A-level-Maths-Calendar/#/specification/internal"
 });
 global.window=dom.window;
 global.document=dom.window.document;
 global.requestAnimationFrame=cb=>cb();
 dom.window.HTMLElement.prototype.scrollIntoView=function(){};
 return {dom,app:dom.window.document.getElementById("app")};
}
function cleanup(dom,dispose){
 dispose?.();
 dom.window.close();
 delete global.window;
 delete global.document;
 delete global.requestAnimationFrame;
}
test("specification overview renders all 19 official topic groups",()=>{
 const {dom,app}=environment();
 const dispose=mountSpecification(app,{scope:"internal"});
 assert.match(app.textContent,/My Specification/);
 assert.equal(app.querySelectorAll(".spec-topic-card").length,19);
 assert.match(app.textContent,/Pure Mathematics/);
 assert.match(app.textContent,/Statistics/);
 assert.match(app.textContent,/Mechanics/);
 assert.match(app.textContent,/not a score report/i);
 assert.ok(app.querySelector('a[href="#/specification/internal/P02"]'));
 assert.ok(app.querySelector('a[href="#/specification/internal/M09"]'));
 assert.equal(app.querySelectorAll(".spec-theme").length,3);
 cleanup(dom,dispose);
});
test("search filters by skill text without stealing keyboard focus",()=>{
 const {dom,app}=environment();
 const dispose=mountSpecification(app,{scope:"internal"});
 const search=app.querySelector("#spec-search");
 search.focus();
 search.value="discriminant";
 search.dispatchEvent(new dom.window.Event("input",{bubbles:true}));
 assert.equal(dom.window.document.activeElement,search);
 assert.ok(app.querySelectorAll(".spec-topic-card").length<19);
 assert.match(app.querySelector("#spec-result-line").textContent,/matching skills/);
 search.value="a-phrase-not-in-the-syllabus-at-all";
 search.dispatchEvent(new dom.window.Event("input",{bubbles:true}));
 assert.ok(app.querySelector(".spec-empty"));
 app.querySelector("[data-clear-search]").click();
 assert.equal(search.value,"");
 assert.equal(app.querySelectorAll(".spec-topic-card").length,19);
 const button=app.querySelector('[data-spec-strand="S"]');
 button.click();
 assert.equal(button.getAttribute("aria-pressed"),"true");
 assert.equal(app.querySelectorAll(".spec-topic-card").length,5);
 cleanup(dom,dispose);
});
test("internal topic details show visible Year 1 skills and optional Year 2 previews",()=>{
 const {dom,app}=environment();
 const dispose=mountSpecification(app,{scope:"internal",topicId:"S04"});
 assert.match(app.textContent,/Statistical distributions/);
 assert.match(app.textContent,/Year 2 additions/);
 assert.match(app.textContent,/binomial distribution/i);
 const visible=app.querySelectorAll(".spec-skill-list .spec-skill");
 const preview=app.querySelectorAll(".spec-later .spec-skill");
 assert.ok(visible.length>=4);
 assert.ok(preview.length>=4);
 const first=visible[0];
 first.open=true;
 assert.match(first.textContent,/What might an examination ask/i);
 assert.match(first.textContent,/Practice evidence will appear here/i);
 cleanup(dom,dispose);
});
test("Moments is clearly outside the internal exam but available in full course",()=>{
 const {dom,app}=environment();
 let dispose=mountSpecification(app,{scope:"internal",topicId:"M09"});
 assert.match(app.textContent,/Not tested in your current internal exam/);
 assert.ok(app.querySelector('a[href="#/specification/full/M09"]'));
 dispose();
 dispose=mountSpecification(app,{scope:"full",topicId:"M09"});
 assert.ok(app.querySelectorAll(".spec-skill-list .spec-skill").length>=5);
 assert.doesNotMatch(app.querySelector(".spec-skill-list").textContent,/Not tested in your current internal exam/);
 cleanup(dom,dispose);
});
test("deep link opens a skill's detail, with mathematical text escaped",()=>{
 const {dom,app}=environment();
 const id=specificationTopics.find(t=>t.id==="P02").skills[0].id;
 const dispose=mountSpecification(app,{scope:"full",topicId:"P02",skillId:id});
 const skill=dom.window.document.getElementById(id);
 assert.ok(skill);
 assert.equal(skill.open,true);
 assert.match(skill.textContent,/exam/i);
 assert.match(app.innerHTML,/P2.1/);
 cleanup(dom,dispose);
});
