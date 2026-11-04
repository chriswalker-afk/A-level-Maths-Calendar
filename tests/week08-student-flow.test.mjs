import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";

test("Week 8 calendar, maths, self-marking and integration skill evidence preserve prior records",async()=>{
 const dom=new JSDOM(
  "<!doctype html><html><head><title>Maths Calendar</title></head><body><header><nav><a data-nav='calendar'></a><a data-nav='progress'></a><a data-nav='specification'></a></nav></header><main><div id='app'></div></main></body></html>",
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
 const ctx={clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},
  stroke(){},arc(){},fill(){},fillRect(){},save(){},restore(){},scale(){},rect(){}};
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
 const existing={
  "W01-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Algebra review"}},
  "W02-R1":{score:2,status:"P",workspace:{mode:"notes",notes:"Geometry review"}},
  "W03-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Trig review"}},
  "W04-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Calculus review"}},
  "W05-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Integration review"}},
  "W06-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Series review"}},
  "W07-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Logarithm review"}}
 };
 window.localStorage.setItem(key,JSON.stringify(existing));
 await import("../src/app.js");
 const app=doc.querySelector("#app");
 const navigate=hash=>{window.location.hash=hash;window.dispatchEvent(new window.Event("hashchange"));};
 assert.equal(app.querySelectorAll(".planner-cell").length,10);
 assert.equal(app.querySelectorAll("a.planner-cell.is-open").length,10);
 assert.equal(app.querySelectorAll(".planner-cell.is-upcoming").length,0);
 const eighth=[...app.querySelectorAll("a.planner-cell.is-open")]
  .find(a=>a.getAttribute("href").startsWith("#/study/8/"));
 assert.ok(eighth);
 assert.equal(eighth.getAttribute("href"),"#/study/8/R/0");
 navigate(eighth.getAttribute("href"));
 assert.match(app.querySelector("h1").textContent,/Numerical methods and synthesis/);
 assert.match(app.querySelector(".exam-sheet-code").textContent,/W08-R1/);
 assert.equal(app.querySelectorAll(".study-section-link").length,6);
 assert.equal(app.querySelectorAll(".question-index-item").length,10);
 assert.ok(app.querySelector("#question-working-space"));
 assert.ok(app.querySelector("#question-assessment"));
 const notes=app.querySelector("#work-notes");
 notes.value="A change of sign with continuity brackets the root.";
 notes.dispatchEvent(new window.Event("input",{bubbles:true}));
 app.querySelector('[data-attempt-support="I"]').click();
 const score=app.querySelector("#self-mark-input");
 score.value="2";
 score.dispatchEvent(new window.Event("input",{bubbles:true}));
 let stored=JSON.parse(window.localStorage.getItem(key));
 assert.equal(stored["W08-R1"].score,2);
 assert.equal(stored["W08-R1"].status,"I");
 assert.match(stored["W08-R1"].workspace.notes,/sign with continuity/);
 for(const [id,note]of [["W01-R1","Algebra review"],["W02-R1","Geometry review"],["W03-R1","Trig review"],["W04-R1","Calculus review"],["W05-R1","Integration review"],["W06-R1","Series review"],["W07-R1","Logarithm review"]])
  assert.equal(stored[id].workspace.notes,note,"Older week work is untouched");
 assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"true");
 navigate("#/study/8/R/1");
 app.querySelector('[data-attempt-support="P"]').click();
 const zero=app.querySelector("#self-mark-input");
 zero.value="0";
 zero.dispatchEvent(new window.Event("input",{bubbles:true}));
 stored=JSON.parse(window.localStorage.getItem(key));
 assert.equal(stored["W08-R2"].score,0);
 assert.equal(stored["W08-R2"].status,"P");
 assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"true");
 navigate("#/study/8/R/9");
 assert.equal(app.querySelector("#next").dataset.targetRoute,"#/study/8/P/0");
 app.querySelector("#next").click();
 window.dispatchEvent(new window.Event("hashchange"));
 assert.match(app.querySelector(".exam-sheet-code").textContent,/W08-P1/);
 assert.equal(app.querySelector("#previous").dataset.targetRoute,"#/study/8/R/9");
 navigate("#/progress/internal");
 assert.equal(app.querySelector(".metric strong").textContent,"9/247");
 const weeks=app.querySelectorAll(".weekly-progress-group");
 assert.equal(weeks.length,10);
 assert.match(weeks[7].textContent,/Numerical methods and synthesis/);
 assert.match(weeks[7].textContent,/2 \/ 10 questions marked/);
 assert.ok(weeks[7].querySelector('a[href="#/study/8/R/0"]'));
 assert.match(app.querySelector(".spec-progress-pulse").textContent,/9 \/ 301/);
 navigate("#/specification/internal/P09");
 assert.match(app.querySelector(".spec-topic-evidence").textContent,/2 \/ /);
 assert.ok(app.querySelector("#P09-001"),"Change-of-sign primary skill evidence exists");
 assert.match(app.querySelector("#P09-001").textContent,/verified part marks/);
 navigate("#/calendar");
 const resume=[...app.querySelectorAll("a.planner-cell.is-open")]
  .find(a=>a.getAttribute("href").startsWith("#/study/8/"));
 assert.equal(resume.getAttribute("href"),"#/study/8/R/2");
 assert.equal(app.querySelectorAll(".planner-cell.is-upcoming").length,0);
 dom.window.close();
 for(const n of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"])
  delete globalThis[n];
});
