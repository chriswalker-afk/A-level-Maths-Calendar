import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";

test("Week 10 authentic paper flow hides schemes during timed sittings, preserves marks and supports diagnostic review",async()=>{
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
 const storageKey="alevel-maths-calendar-progress-v1";
 const old={
  "W01-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Algebra preserved"}},
  "W04-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Calculus preserved"}},
  "W08-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Numerics preserved"}},
  "W09-R1":{score:2,status:"I",workspace:{mode:"notes",notes:"Synoptic preserved"}}
 };
 window.localStorage.setItem(storageKey,JSON.stringify(old));
 await import("../src/app.js");
 const app=doc.querySelector("#app");
 const nav=hash=>{window.location.hash=hash;window.dispatchEvent(new window.Event("hashchange"));};
 const read=()=>JSON.parse(window.localStorage.getItem(storageKey));
 assert.equal(app.querySelectorAll("a.planner-cell.is-open").length,10);
 assert.equal(app.querySelectorAll(".planner-cell.is-upcoming").length,0);
 const tenth=[...app.querySelectorAll("a.planner-cell.is-open")]
  .find(a=>a.getAttribute("href").startsWith("#/study/10/"));
 assert.ok(tenth);
 assert.equal(tenth.getAttribute("href"),"#/study/10/P/0");
 nav(tenth.getAttribute("href"));
 assert.match(app.querySelector("h1").textContent,/Mock examination and consolidation/);
 assert.match(app.querySelector(".exam-sheet-code").textContent,/W10-P1/);
 assert.equal(app.querySelectorAll(".study-section-link").length,2);
 assert.equal(app.querySelectorAll(".question-index-item").length,12);
 assert.match(app.querySelector(".mock-paper-banner").textContent,/100 MARKS/);
 assert.ok(app.querySelector("#question-working-space"));
 assert.ok(app.querySelector("#question-assessment"));
 assert.ok(app.querySelector("#hint-toggle"));
 assert.match(app.querySelector(".mock-paper-banner").textContent,/Not marked yet/);
 // Real exam mode is opt-in. All question help and marking are hidden during the sitting.
 app.querySelector('[data-mock-action="start"][data-mock-section="P"]').click();
 assert.ok(app.querySelector("#mock-clock"));
 assert.ok(app.querySelector("#question-working-space"));
 assert.ok(app.querySelector(".mock-exam-lock"));
 assert.equal(app.querySelector("#hint-toggle"),null);
 assert.equal(app.querySelector("#solution-toggle"),null);
 assert.equal(app.querySelector("#question-assessment"),null);
 assert.equal(app.querySelector("#attempt-history-root"),null);
 const notes=app.querySelector("#work-notes");
 notes.value="Three consecutive integers include an even number and a multiple of three.";
 notes.dispatchEvent(new window.Event("input",{bubbles:true}));
 assert.match(read()["W10-P1"].workspace.notes,/even number/);
 assert.ok(read().reflections.week10.timers.pure.startedAt);
 // The Pure paper runs across all 12 distinct questions, then moves to Applied.
 nav("#/study/10/P/11");
 assert.match(app.querySelector(".exam-sheet-code").textContent,/W10-P12/);
 assert.equal(app.querySelector("#next").dataset.targetRoute,"#/study/10/A/0");
 nav("#/study/10/A/0");
 assert.equal(app.querySelectorAll(".question-index-item").length,10);
 assert.match(app.querySelector(".mock-paper-banner").textContent,/25 marks · Mechanics 25 marks/);
 assert.ok(app.querySelector("#hint-toggle"),"The other paper's timer does not lock help");
 // End Pure mock explicitly, then self-mark. This must not reset saved work.
 nav("#/study/10/P/0");
 app.querySelector('[data-mock-action="finish"][data-mock-section="P"]').click();
 assert.equal(app.querySelector("#mock-clock"),null);
 assert.ok(app.querySelector("#hint-toggle"));
 assert.ok(app.querySelector("#question-assessment"));
 assert.match(app.querySelector("#work-notes").value,/even number/);
 app.querySelector('[data-attempt-support="I"]').click();
 let mark=app.querySelector("#self-mark-input");
 mark.value="0";
 mark.dispatchEvent(new window.Event("input",{bubbles:true}));
 assert.equal(read()["W10-P1"].score,0);
 assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"true");
 nav("#/study/10/P/1");
 app.querySelector('[data-attempt-support="P"]').click();
 assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"false","Support selection alone is not completion");
 mark=app.querySelector("#self-mark-input");
 mark.value="2";
 mark.dispatchEvent(new window.Event("input",{bubbles:true}));
 assert.equal(read()["W10-P2"].score,2);
 assert.equal(read()["W10-P2"].status,"P");
 // The Applied sitting has independent start/end state and retains its 25+25 structure.
 nav("#/study/10/A/0");
 app.querySelector('[data-mock-action="start"][data-mock-section="A"]').click();
 assert.equal(app.querySelector("#hint-toggle"),null);
 assert.ok(app.querySelector("#mock-clock"));
 app.querySelector('[data-mock-action="finish"][data-mock-section="A"]').click();
 assert.ok(app.querySelector("#question-assessment"));
 // The 60-minute review is a proper route, not a fake 60-mark question.
 nav("#/mock-review/10");
 assert.match(app.querySelector("h1").textContent,/Mark, diagnose, decide/);
 assert.match(app.querySelector(".mock-review-total").textContent,/2 of 22 questions marked/);
 assert.match(app.querySelector(".mock-review-total").textContent,/unmarked, not zero/);
 assert.equal(app.querySelectorAll(".mock-score-table tbody tr").length,22);
 assert.match(app.querySelector(".mock-review-paper-grid").textContent,/Statistics/);
 assert.match(app.querySelector(".mock-review-paper-grid").textContent,/Mechanics/);
 assert.ok(app.querySelector('.mock-priorities a[href="#/study/10/P/0"]'));
 const error=app.querySelector('[data-mock-note="firstError"]');
 error.value="I forgot the multiple of three argument.";
 error.dispatchEvent(new window.Event("input",{bubbles:true}));
 const plan=app.querySelector('[data-mock-note="reattemptPlan"]');
 plan.value="Repeat W10-P1 and W10-P2 tomorrow, without a hint.";
 plan.dispatchEvent(new window.Event("input",{bubbles:true}));
 let records=read();
 assert.match(records.reflections.week10.notes.firstError,/multiple of three/);
 assert.match(records.reflections.week10.notes.reattemptPlan,/Repeat W10-P1/);
 assert.ok(records.reflections.week10.timers.pure.endedAt);
 assert.ok(records.reflections.week10.timers.applied.endedAt);
 for(const [id,word]of [["W01-R1","Algebra"],["W04-R1","Calculus"],["W08-R1","Numerics"],["W09-R1","Synoptic"]])
  assert.match(records[id].workspace.notes,new RegExp(word),"Previous student work untouched");
 nav("#/calendar");
 const resume=[...app.querySelectorAll("a.planner-cell.is-open")]
  .find(a=>a.getAttribute("href").startsWith("#/study/10/"));
 assert.equal(resume.getAttribute("href"),"#/study/10/P/2");
 dom.window.close();
 for(const n of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"])
  delete globalThis[n];
});
