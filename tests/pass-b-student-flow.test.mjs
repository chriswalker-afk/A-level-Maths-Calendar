import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {taggedWeek01Questions} from "../src/data/tagged-questions.js";

test("Pass B answers, checks, marks and returns to saved working without page jumps",async()=>{
 const dom=new JSDOM('<!doctype html><html><head><title>Maths Calendar</title></head>'+
  '<body><header><nav><a data-nav="calendar"></a><a data-nav="progress"></a></nav></header>'+
  '<main><div id="app"></div></main></body></html>',{
  url:"https://example.com/A-level-Maths-Calendar/#/study/1/R/0"});
 const {window}=dom,doc=window.document;
 let pageScrolls=0;
 window.scrollTo=()=>{pageScrolls++;};
 globalThis.window=window;
 globalThis.document=doc;
 globalThis.location=window.location;
 globalThis.localStorage=window.localStorage;
 globalThis.customElements=window.customElements;
 globalThis.ResizeObserver=class{observe(){}disconnect(){}};
 globalThis.requestAnimationFrame=fn=>fn();
 window.HTMLCanvasElement.prototype.getContext=()=>({
  clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},
  stroke(){},arc(){},fill(){},fillRect(){},save(){},restore(){},scale(){},rect(){}
 });
 window.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({
  left:0,top:0,width:560,height:320,right:560,bottom:320
 });
 class FakeMathField extends window.HTMLElement{
  get value(){return this._value||"";}
  set value(v){this._value=String(v);}
  insert(v){this.value+=v;this.dispatchEvent(new window.Event("input",{bubbles:true}));}
 }
 window.customElements.define("math-field",FakeMathField);
 const key="alevel-maths-calendar-progress-v1";
 const read=()=>JSON.parse(window.localStorage.getItem(key));
 const nav=route=>{window.location.hash=route;window.dispatchEvent(new window.Event("hashchange"));};
 try{
  await import("../src/app.js");
  const root=doc.querySelector("#app");
  const workTab=root.querySelector("#study-tab-work");
  const reviewTab=root.querySelector("#study-tab-review");
  assert.ok(workTab&&reviewTab&&!reviewTab.disabled);
  assert.equal(root.querySelector("#study-panel-review").hidden,true);
  const notes=root.querySelector("#work-notes");
  notes.value="Find the derivative first";
  notes.dispatchEvent(new window.Event("input",{bubbles:true}));
  root.querySelector("#hint-toggle").click();
  assert.equal(root.querySelector("#hint-box").hidden,false);
  assert.equal(read()["W01-R1"].hintSeen,true);
  assert.equal(pageScrolls,0);
  const editor=root.querySelector("#question-working-space");

  reviewTab.click();
  assert.equal(root.querySelector("#study-panel-work").hidden,true);
  assert.equal(root.querySelector("#study-panel-review").hidden,false);
  assert.equal(root.querySelector("#solution-box").hidden,false);
  assert.equal(root.querySelector("#solution-toggle").getAttribute("aria-expanded"),"true");
  assert.ok(root.querySelector(".study-solution-area").contains(root.querySelector("#solution-box")));
  assert.ok(root.querySelector(".study-marking-dock").contains(root.querySelector("#self-mark-input")));
  assert.equal(root.querySelector("#mark-view-solution"),null);
  assert.equal(pageScrolls,0,"checking does not call page scroll functions");

  root.querySelector('[data-attempt-support="I"]').click();
  assert.equal(read()["W01-R1"].status,"I");
  const score=root.querySelector("#self-mark-input");
  score.value="0";
  score.dispatchEvent(new window.Event("input",{bubbles:true}));
  assert.equal(read()["W01-R1"].score,0,"zero remains a finished mark");
  assert.equal(root.querySelector("#question-finish-badge").dataset.finished,"true");
  assert.equal(root.querySelector('[data-jump="0"] .q-complete-indicator').hidden,false);
  workTab.click();
  assert.equal(root.querySelector("#question-working-space"),editor,"tab switching keeps the same editor DOM");
  assert.equal(root.querySelector("#work-notes"),notes);
  assert.equal(notes.value,"Find the derivative first");
  assert.equal(read()["W01-R1"].workspace.notes,"Find the derivative first");

  // Multi-part scoring uses the unchanged scoring engine and auto-calculates the total.
  const multi=taggedWeek01Questions.find(q=>Array.isArray(q.parts)&&q.parts.length>=2);
  assert.ok(multi,"a multi-part question exists in the published set");
  const idx=taggedWeek01Questions.filter(q=>q.section===multi.section).findIndex(q=>q.id===multi.id);
  nav("#/study/1/"+multi.section+"/"+idx);
  root.querySelector("#study-tab-review").click();
  const detail=root.querySelector("#mark-by-parts");
  assert.ok(detail);
  detail.open=true;
  detail.dispatchEvent(new window.Event("toggle"));
  const partInputs=[...root.querySelectorAll("[data-part-mark]")];
  assert.equal(partInputs.length,multi.parts.length);
  const values=partInputs.map((input,i)=>i===0?0:Number(input.max));
  for(let i=0;i<partInputs.length;i++){
   partInputs[i].value=String(values[i]);
   partInputs[i].dispatchEvent(new window.Event("input",{bubbles:true}));
  }
  assert.equal(read()[multi.id].score,values.reduce((n,v)=>n+v,0));
  assert.equal(read()[multi.id].scoreSource,"parts");
  assert.equal(root.querySelector("#question-finish-badge").dataset.finished,"true");
  assert.equal(root.querySelector("#self-mark-input").readOnly,true);
  const reflection=root.querySelector(".finish-extra");
  assert.ok(reflection&&!reflection.open);
  reflection.open=true;
  const error=root.querySelector("#self-error");
  error.value="Reasoning";
  error.dispatchEvent(new window.Event("change",{bubbles:true}));
  assert.equal(read()[multi.id].error,"Reasoning");

  nav("#/study/1/R/0");
  assert.equal(root.querySelector("#work-notes").value,"Find the derivative first");
  assert.equal(root.querySelector("#self-mark-input").value,"0");
  assert.equal(root.querySelector("#study-tab-work").getAttribute("aria-selected"),"true",
   "a new question opens in answer mode");
  assert.ok(root.querySelector(".study-review-and-more").contains(root.querySelector(".question-skill-links")));
 }finally{
  dom.window.close();
  for(const name of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"])
   delete globalThis[name];
 }
});
