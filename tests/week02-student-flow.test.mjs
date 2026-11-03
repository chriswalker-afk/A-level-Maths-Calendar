import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";

test("the second released week opens, saves maths and updates cumulative evidence",async()=>{
 const dom=new JSDOM(
  "<!doctype html><html><head><title>Calendar</title></head><body><header><nav><a data-nav='calendar'></a><a data-nav='progress'></a><a data-nav='specification'></a></nav></header><main><div id='app'></div></main></body></html>",
  {url:"https://example.com/A-level-Maths-Calendar/#/"}
 );
 const {window}=dom,doc=window.document;
 window.scrollTo=()=>{};
 globalThis.window=window;
 globalThis.document=doc;
 globalThis.location=window.location;
 globalThis.localStorage=window.localStorage;
 globalThis.customElements=window.customElements;
 globalThis.ResizeObserver=class{observe(){}disconnect(){}};
 globalThis.requestAnimationFrame=cb=>cb();
 const context={
  clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},
  stroke(){},arc(){},fill(){},fillRect(){},save(){},restore(){},scale(){},rect(){}
 };
 window.HTMLCanvasElement.prototype.getContext=()=>context;
 window.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({
  left:0,top:0,width:640,height:320,right:640,bottom:320
 });
 class FakeMathField extends window.HTMLElement{
  get value(){return this._value||"";}
  set value(value){this._value=String(value);}
  insert(value){this.value+=value;this.dispatchEvent(new window.Event("input",{bubbles:true}));}
 }
 window.customElements.define("math-field",FakeMathField);
 const key="alevel-maths-calendar-progress-v1";
 window.localStorage.setItem(key,JSON.stringify({
  "W01-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Earlier algebra"}}
 }));
 await import("../src/app.js");
 const app=doc.getElementById("app");
 const navigate=hash=>{
  window.location.hash=hash;
  window.dispatchEvent(new window.Event("hashchange"));
 };
 assert.equal(app.querySelectorAll(".planner-cell").length,10);
 const open=[...app.querySelectorAll("a.planner-cell.is-open")];
 assert.equal(open.length,3,"Weeks 1, 2 and 3 should be open");
 assert.equal(app.querySelectorAll(".planner-cell.is-upcoming").length,7);
 const second=open.find(a=>a.getAttribute("href")?.startsWith("#/study/2/"));
 assert.ok(second,"Second week is a direct question link");
 assert.equal(second.getAttribute("href"),"#/study/2/R/0");
 navigate(second.getAttribute("href"));
 assert.match(app.querySelector("h1").textContent,/Coordinate geometry and vectors/);
 assert.match(app.querySelector(".exam-sheet-code").textContent,/W02-R1/);
 assert.equal(app.querySelectorAll(".study-section-link").length,6);
 assert.equal(app.querySelectorAll(".question-index-item").length,10);
 const notes=app.querySelector("#work-notes");
 assert.ok(notes,"Notes workspace is present");
 notes.value="Rise over run is 8 / 4 = 2.";
 notes.dispatchEvent(new window.Event("input",{bubbles:true}));
 app.querySelector('[data-attempt-support="I"]').click();
 const score=app.querySelector("#self-mark-input");
 score.value="2";
 score.dispatchEvent(new window.Event("input",{bubbles:true}));
 const saved=JSON.parse(window.localStorage.getItem(key));
 assert.equal(saved["W02-R1"].score,2);
 assert.equal(saved["W02-R1"].status,"I");
 assert.equal(saved["W02-R1"].workspace.notes,"Rise over run is 8 / 4 = 2.");
 assert.equal(saved["W01-R1"].workspace.notes,"Earlier algebra","Existing Week 1 work unchanged");
 assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"true");
 navigate("#/study/2/R/9");
 assert.match(app.querySelector(".exam-sheet-code").textContent,/W02-R10/);
 assert.equal(app.querySelector("#next").dataset.targetRoute,"#/study/2/P/0",
  "Week 2 also crosses section boundaries");
 navigate("#/progress/internal");
 const firstMetric=app.querySelector(".metric strong");
 assert.equal(firstMetric.textContent,"2/54","All three released weeks contribute to core summary");
 const weekly=app.querySelectorAll(".weekly-progress-group");
 assert.equal(weekly.length,3,"Separate per-week question records");
 assert.match(weekly[0].textContent,/Algebra, functions and proof/);
 assert.match(weekly[1].textContent,/Coordinate geometry and vectors/);
 assert.match(weekly[1].textContent,/1 \/ 10 questions marked/);
 assert.ok(weekly[1].querySelector('a[href="#/study/2/R/0"]'));
 assert.match(app.querySelector(".spec-progress-pulse").textContent,/2 \/ 66/);
 navigate("#/specification/internal/P03");
 assert.match(app.querySelector(".spec-topic-evidence").textContent,/1 \/ /);
 assert.ok(app.querySelector("#P03-001 .spec-skill-performance"));
 assert.match(app.querySelector("#P03-001").textContent,/100% of verified part marks/);
 navigate("#/calendar");
 const returned=[...app.querySelectorAll("a.planner-cell.is-open")].find(a=>a.getAttribute("href").startsWith("#/study/2/"));
 assert.equal(returned.getAttribute("href"),"#/study/2/R/1","Resume at next unmarked Week 2 question");
 assert.equal(app.querySelectorAll(".planner-cell.is-upcoming").length,8);
 dom.window.close();
 for(const name of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"])delete globalThis[name];
});
