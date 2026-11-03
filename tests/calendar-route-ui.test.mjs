import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";

test("home calendar opens straight to published questions and sections work in-place",async()=>{
 const dom=new JSDOM("<!doctype html><html><head></head><body><header><nav><a data-nav='calendar'></a><a data-nav='progress'></a><a data-nav='specification'></a><a data-nav='guide'></a></nav></header><main><div id='app'></div></main></body></html>",{
  url:"https://example.com/A-level-Maths-Calendar/#/"
 });
 const {window}=dom,doc=window.document;
 window.scrollTo=()=>{};
 globalThis.window=window;
 globalThis.document=doc;
 globalThis.location=window.location;
 globalThis.localStorage=window.localStorage;
 globalThis.customElements=window.customElements;
 globalThis.ResizeObserver=class{observe(){}disconnect(){}};
 globalThis.requestAnimationFrame=cb=>cb();
 window.HTMLCanvasElement.prototype.getContext=function(){
  return {clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},
   stroke(){},arc(){},fill(){},fillRect(){},save(){},restore(){},scale(){},rect(){}};
 };
 window.HTMLCanvasElement.prototype.getBoundingClientRect=function(){
  return {left:0,top:0,width:640,height:320,right:640,bottom:320};
 };
 class FakeMathField extends window.HTMLElement{
  get value(){return this._value||"";}
  set value(value){this._value=String(value);}
  insert(value){this.value+=value;this.dispatchEvent(new window.Event("input",{bubbles:true}));}
 }
 window.customElements.define("math-field",FakeMathField);
 const key="alevel-maths-calendar-progress-v1";
 window.localStorage.setItem(key,JSON.stringify({
  "W01-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Old working"}}
 }));
 await import("../src/app.js");
 const root=doc.getElementById("app");
 const change=hash=>{window.location.hash=hash;window.dispatchEvent(new window.Event("hashchange"));};
 assert.ok(root.querySelector(".planner-masthead"),"Calendar is first on home");
 assert.ok(root.querySelector(".planner-board"));
 assert.equal(root.querySelectorAll(".planner-cell").length,10);
 assert.equal(root.querySelectorAll("a.planner-cell").length,8);
 assert.equal(root.querySelectorAll("div.planner-cell.is-upcoming").length,2);
 assert.equal(doc.querySelector('[data-nav="calendar"]').classList.contains("active"),true);
 assert.equal(root.querySelector("a.planner-cell.is-open").getAttribute("href"),"#/study/1/R/1",
  "Continue at the first unmarked retrieval question");
 assert.ok(!root.textContent.includes("Master the connections"));
 assert.ok(!root.textContent.includes("Choose your programme"));
 change(root.querySelector("a.planner-cell.is-open").getAttribute("href"));
 assert.ok(root.querySelector(".study-header"));
 assert.equal(root.querySelectorAll(".study-section-link").length,6);
 assert.ok(root.querySelector(".paper.exam-sheet"));
 assert.ok(root.querySelector("#question-working-space"));
 assert.ok(root.querySelector("#question-assessment"));
 assert.ok(root.querySelector("#attempt-history-root"));
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W01-R2/);
 assert.ok(!root.textContent.includes("Practice with purpose."));
 assert.equal(root.querySelector(".study-back").getAttribute("href"),"#/calendar");
 assert.equal(root.querySelector(".study-section-link.is-selected").getAttribute("href"),"#/study/1/R/0");
 change("#/study/1/R/9");
 assert.equal(root.querySelector("#next").dataset.targetRoute,"#/study/1/P/0",
  "Question-to-question navigation crosses into the next section");
 root.querySelector("#next").click();
 window.dispatchEvent(new window.Event("hashchange"));
 assert.equal(window.location.hash,"#/study/1/P/0");
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W01-P1/);
 assert.equal(root.querySelector(".study-section-link.is-selected").getAttribute("href"),"#/study/1/P/0");
 assert.equal(root.querySelector("#previous").dataset.targetRoute,"#/study/1/R/9");

 change("#/week/1");
 window.dispatchEvent(new window.Event("hashchange"));
 assert.equal(window.location.hash,"#/study/1/R/1","A bookmarked week overview skips to work");
 assert.ok(root.querySelector(".paper.exam-sheet"));
 change("#/week/2");
 window.dispatchEvent(new window.Event("hashchange"));
 assert.equal(window.location.hash,"#/study/2/R/0");
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W02-R1/);
 change("#/week/3");
 window.dispatchEvent(new window.Event("hashchange"));
 assert.equal(window.location.hash,"#/study/3/R/0");
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W03-R1/);
 change("#/week/4");
 window.dispatchEvent(new window.Event("hashchange"));
 assert.equal(window.location.hash,"#/study/4/R/0");
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W04-R1/);
 change("#/week/5");
 window.dispatchEvent(new window.Event("hashchange"));
 assert.equal(window.location.hash,"#/study/5/R/0");
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W05-R1/);
 change("#/week/6");
 window.dispatchEvent(new window.Event("hashchange"));
 assert.equal(window.location.hash,"#/study/6/R/0");
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W06-R1/);
 change("#/week/7");
 window.dispatchEvent(new window.Event("hashchange"));
 assert.equal(window.location.hash,"#/study/7/R/0");
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W07-R1/);
 change("#/week/8");
 window.dispatchEvent(new window.Event("hashchange"));
 assert.equal(window.location.hash,"#/study/8/R/0");
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W08-R1/);
 change("#/week/9");
 assert.match(root.textContent,/NOT RELEASED/);
 assert.ok(!root.querySelector(".exam-sheet"));
 change("#/calendar");
 assert.ok(root.querySelector(".planner-board"));
 assert.ok(root.querySelector('.planner-cell.is-open[href="#/study/1/R/1"]'));
 dom.window.close();
 for(const name of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"])delete globalThis[name];
});
