import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";

test("Week 3 calendar, working, marks and 9MA0 evidence work without changing older weeks",async()=>{
 const dom=new JSDOM(
  "<!doctype html><html><head></head><body><header><nav><a data-nav='calendar'></a><a data-nav='progress'></a><a data-nav='specification'></a></nav></header><main><div id='app'></div></main></body></html>",
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
 const ctx={
  clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},
  stroke(){},arc(){},fill(){},fillRect(){},save(){},restore(){},scale(){},rect(){}
 };
 window.HTMLCanvasElement.prototype.getContext=()=>ctx;
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
 const old={
  "W01-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Algebra working"}},
  "W02-R1":{score:2,status:"P",workspace:{mode:"notes",notes:"Geometry working"}}
 };
 window.localStorage.setItem(key,JSON.stringify(old));
 await import("../src/app.js");
 const root=doc.getElementById("app");
 const navigate=hash=>{
  window.location.hash=hash;
  window.dispatchEvent(new window.Event("hashchange"));
 };
 assert.equal(root.querySelectorAll(".planner-cell").length,10);
 assert.equal(root.querySelectorAll("a.planner-cell.is-open").length,10);
 assert.equal(root.querySelectorAll(".planner-cell.is-upcoming").length,0);
 const week3=[...root.querySelectorAll("a.planner-cell.is-open")]
  .find(x=>x.getAttribute("href").startsWith("#/study/3/"));
 assert.ok(week3,"The third week must be directly clickable");
 assert.equal(week3.getAttribute("href"),"#/study/3/R/0");
 navigate(week3.getAttribute("href"));
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W03-R1/);
 assert.equal(root.querySelectorAll(".study-section-link").length,6);
 assert.equal(root.querySelectorAll(".question-index-item").length,10);
 assert.match(root.querySelector("h1").textContent,/Trigonometry and periodic models/);
 assert.ok(root.querySelector("#question-working-space"));
 assert.ok(root.querySelector("#question-assessment"));
 const notes=root.querySelector("#work-notes");
 notes.value="The reference angle is pi/6. Check the quadrant signs.";
 notes.dispatchEvent(new window.Event("input",{bubbles:true}));
 root.querySelector('[data-attempt-support="I"]').click();
 const firstScore=root.querySelector("#self-mark-input");
 firstScore.value="2";
 firstScore.dispatchEvent(new window.Event("input",{bubbles:true}));
 const current=JSON.parse(window.localStorage.getItem(key));
 assert.equal(current["W03-R1"].score,2);
 assert.equal(current["W03-R1"].status,"I");
 assert.match(current["W03-R1"].workspace.notes,/reference angle/);
 assert.equal(current["W01-R1"].workspace.notes,"Algebra working");
 assert.equal(current["W02-R1"].workspace.notes,"Geometry working");
 assert.equal(root.querySelector("#question-finish-badge").dataset.finished,"true");

 // A valid zero-mark attempt must be finished; a single-part item also
 // creates attributable 0% evidence rather than an invented missing score.
 navigate("#/study/3/R/2");
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W03-R3/);
 root.querySelector('[data-attempt-support="P"]').click();
 const zero=root.querySelector("#self-mark-input");
 zero.value="0";
 zero.dispatchEvent(new window.Event("input",{bubbles:true}));
 assert.equal(root.querySelector("#question-finish-badge").dataset.finished,"true");
 assert.equal(JSON.parse(window.localStorage.getItem(key))["W03-R3"].score,0);
 assert.equal(JSON.parse(window.localStorage.getItem(key))["W03-R3"].status,"P");

 navigate("#/study/3/R/9");
 assert.equal(root.querySelector("#next").dataset.targetRoute,"#/study/3/P/0");
 root.querySelector("#next").click();
 window.dispatchEvent(new window.Event("hashchange"));
 assert.match(root.querySelector(".exam-sheet-code").textContent,/W03-P1/);
 assert.equal(root.querySelector("#previous").dataset.targetRoute,"#/study/3/R/9");

 navigate("#/progress/internal");
 assert.equal(root.querySelector(".metric strong").textContent,"4/184");
 assert.equal(root.querySelectorAll(".weekly-progress-group").length,10);
 const groups=root.querySelectorAll(".weekly-progress-group");
 assert.match(groups[2].textContent,/Trigonometry and periodic models/);
 assert.match(groups[2].textContent,/2 \/ 10 questions marked/);
 assert.ok(groups[2].querySelector('a[href="#/study/3/R/0"]'));
 assert.match(root.querySelector(".spec-progress-pulse").textContent,/4 \/ 220/);
 navigate("#/specification/internal/P05");
 assert.match(root.querySelector(".spec-topic-evidence").textContent,/2 \/ /);
 assert.match(root.querySelector("#P05-002").textContent,/0% of verified part marks/);
 navigate("#/calendar");
 const resumed=[...root.querySelectorAll("a.planner-cell.is-open")]
  .find(x=>x.getAttribute("href").startsWith("#/study/3/"));
 assert.equal(resumed.getAttribute("href"),"#/study/3/R/1");
 assert.equal(root.querySelectorAll(".planner-cell.is-upcoming").length,0);
 dom.window.close();
 for(const name of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"])
  delete globalThis[name];
});
