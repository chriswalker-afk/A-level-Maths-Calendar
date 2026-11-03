import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";

test("Week 7 calendar, maths, self-marking and integration skill evidence preserve prior records",async()=>{
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
  "W06-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Series review"}}
 };
 window.localStorage.setItem(key,JSON.stringify(existing));
 await import("../src/app.js");
 const app=doc.querySelector("#app");
 const navigate=hash=>{window.location.hash=hash;window.dispatchEvent(new window.Event("hashchange"));};
 assert.equal(app.querySelectorAll(".planner-cell").length,10);
 assert.equal(app.querySelectorAll("a.planner-cell.is-open").length,9);
 assert.equal(app.querySelectorAll(".planner-cell.is-upcoming").length,1);
 const seventh=[...app.querySelectorAll("a.planner-cell.is-open")]
  .find(a=>a.getAttribute("href").startsWith("#/study/7/"));
 assert.ok(seventh);
 assert.equal(seventh.getAttribute("href"),"#/study/7/R/0");
 navigate(seventh.getAttribute("href"));
 assert.match(app.querySelector("h1").textContent,/Exponentials, logarithms and differential equations/);
 assert.match(app.querySelector(".exam-sheet-code").textContent,/W07-R1/);
 assert.equal(app.querySelectorAll(".study-section-link").length,6);
 assert.equal(app.querySelectorAll(".question-index-item").length,10);
 assert.ok(app.querySelector("#question-working-space"));
 assert.ok(app.querySelector("#question-assessment"));
 const notes=app.querySelector("#work-notes");
 notes.value="Combined the logarithms using the quotient and product laws.";
 notes.dispatchEvent(new window.Event("input",{bubbles:true}));
 app.querySelector('[data-attempt-support="I"]').click();
 const score=app.querySelector("#self-mark-input");
 score.value="2";
 score.dispatchEvent(new window.Event("input",{bubbles:true}));
 let stored=JSON.parse(window.localStorage.getItem(key));
 assert.equal(stored["W07-R1"].score,2);
 assert.equal(stored["W07-R1"].status,"I");
 assert.match(stored["W07-R1"].workspace.notes,/logarithms/);
 for(const [id,note]of [["W01-R1","Algebra review"],["W02-R1","Geometry review"],["W03-R1","Trig review"],["W04-R1","Calculus review"],["W05-R1","Integration review"],["W06-R1","Series review"]])
  assert.equal(stored[id].workspace.notes,note,"Older week work is untouched");
 assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"true");
 navigate("#/study/7/R/1");
 app.querySelector('[data-attempt-support="P"]').click();
 const zero=app.querySelector("#self-mark-input");
 zero.value="0";
 zero.dispatchEvent(new window.Event("input",{bubbles:true}));
 stored=JSON.parse(window.localStorage.getItem(key));
 assert.equal(stored["W07-R2"].score,0);
 assert.equal(stored["W07-R2"].status,"P");
 assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"true");
 navigate("#/study/7/R/9");
 assert.equal(app.querySelector("#next").dataset.targetRoute,"#/study/7/P/0");
 app.querySelector("#next").click();
 window.dispatchEvent(new window.Event("hashchange"));
 assert.match(app.querySelector(".exam-sheet-code").textContent,/W07-P1/);
 assert.equal(app.querySelector("#previous").dataset.targetRoute,"#/study/7/R/9");
 navigate("#/progress/internal");
 assert.equal(app.querySelector(".metric strong").textContent,"8/162");
 const weeks=app.querySelectorAll(".weekly-progress-group");
 assert.equal(weeks.length,9);
 assert.match(weeks[6].textContent,/Exponentials, logarithms and differential equations/);
 assert.match(weeks[6].textContent,/2 \/ 10 questions marked/);
 assert.ok(weeks[6].querySelector('a[href="#/study/7/R/0"]'));
 assert.match(app.querySelector(".spec-progress-pulse").textContent,/8 \/ 198/);
 navigate("#/specification/internal/P06");
 assert.match(app.querySelector(".spec-topic-evidence").textContent,/2 \/ /);
 assert.ok(app.querySelector("#P06-006"),"Log-law primary skill evidence exists");
 assert.match(app.querySelector("#P06-006").textContent,/verified part marks/);
 navigate("#/calendar");
 const resume=[...app.querySelectorAll("a.planner-cell.is-open")]
  .find(a=>a.getAttribute("href").startsWith("#/study/7/"));
 assert.equal(resume.getAttribute("href"),"#/study/7/R/2");
 assert.equal(app.querySelectorAll(".planner-cell.is-upcoming").length,1);
 dom.window.close();
 for(const n of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"])
  delete globalThis[n];
});
