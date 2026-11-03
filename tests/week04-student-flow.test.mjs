import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";

test("Week 4 links, saved working, self-marking and specification evidence remain cross-week safe",async()=>{
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
  "W03-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Trig review"}}
 };
 window.localStorage.setItem(key,JSON.stringify(existing));
 await import("../src/app.js");
 const app=doc.querySelector("#app");
 const navigate=hash=>{window.location.hash=hash;window.dispatchEvent(new window.Event("hashchange"));};
 assert.equal(app.querySelectorAll(".planner-cell").length,10);
 assert.equal(app.querySelectorAll("a.planner-cell.is-open").length,9);
 assert.equal(app.querySelectorAll(".planner-cell.is-upcoming").length,1);
 const fourth=[...app.querySelectorAll("a.planner-cell.is-open")]
  .find(a=>a.getAttribute("href").startsWith("#/study/4/"));
 assert.ok(fourth);
 assert.equal(fourth.getAttribute("href"),"#/study/4/R/0");
 navigate(fourth.getAttribute("href"));
 assert.match(app.querySelector("h1").textContent,/Differentiation and curve behaviour/);
 assert.match(app.querySelector(".exam-sheet-code").textContent,/W04-R1/);
 assert.equal(app.querySelectorAll(".study-section-link").length,6);
 assert.equal(app.querySelectorAll(".question-index-item").length,10);
 assert.ok(app.querySelector("#question-working-space"));
 assert.ok(app.querySelector("#question-assessment"));
 const notes=app.querySelector("#work-notes");
 notes.value="Expand f(x+h) and divide by h before taking the limit.";
 notes.dispatchEvent(new window.Event("input",{bubbles:true}));
 app.querySelector('[data-attempt-support="I"]').click();
 const score=app.querySelector("#self-mark-input");
 score.value="2";
 score.dispatchEvent(new window.Event("input",{bubbles:true}));
 let stored=JSON.parse(window.localStorage.getItem(key));
 assert.equal(stored["W04-R1"].score,2);
 assert.equal(stored["W04-R1"].status,"I");
 assert.match(stored["W04-R1"].workspace.notes,/Expand/);
 for(const [id,note]of [["W01-R1","Algebra review"],["W02-R1","Geometry review"],["W03-R1","Trig review"]])
  assert.equal(stored[id].workspace.notes,note,"Older week work is untouched");
 assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"true");
 navigate("#/study/4/R/1");
 app.querySelector('[data-attempt-support="P"]').click();
 const zero=app.querySelector("#self-mark-input");
 zero.value="0";
 zero.dispatchEvent(new window.Event("input",{bubbles:true}));
 stored=JSON.parse(window.localStorage.getItem(key));
 assert.equal(stored["W04-R2"].score,0);
 assert.equal(stored["W04-R2"].status,"P");
 assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"true");
 navigate("#/study/4/R/9");
 assert.equal(app.querySelector("#next").dataset.targetRoute,"#/study/4/P/0");
 app.querySelector("#next").click();
 window.dispatchEvent(new window.Event("hashchange"));
 assert.match(app.querySelector(".exam-sheet-code").textContent,/W04-P1/);
 assert.equal(app.querySelector("#previous").dataset.targetRoute,"#/study/4/R/9");
 navigate("#/progress/internal");
 assert.equal(app.querySelector(".metric strong").textContent,"5/162");
 const weeks=app.querySelectorAll(".weekly-progress-group");
 assert.equal(weeks.length,9);
 assert.match(weeks[3].textContent,/Differentiation and curve behaviour/);
 assert.match(weeks[3].textContent,/2 \/ 10 questions marked/);
 assert.ok(weeks[3].querySelector('a[href="#/study/4/R/0"]'));
 assert.match(app.querySelector(".spec-progress-pulse").textContent,/5 \/ 198/);
 navigate("#/specification/internal/P07");
 assert.match(app.querySelector(".spec-topic-evidence").textContent,/2 \/ /);
 assert.match(app.querySelector("#P07-002").textContent,/100% of verified part marks/);
 assert.match(app.querySelector("#P07-005").textContent,/0% of verified part marks/);
 navigate("#/calendar");
 const resume=[...app.querySelectorAll("a.planner-cell.is-open")]
  .find(a=>a.getAttribute("href").startsWith("#/study/4/"));
 assert.equal(resume.getAttribute("href"),"#/study/4/R/2");
 assert.equal(app.querySelectorAll(".planner-cell.is-upcoming").length,1);
 dom.window.close();
 for(const n of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"])
  delete globalThis[n];
});
