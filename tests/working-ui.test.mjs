import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";

test("students can switch notes, maths lines and ink without losing previous work",async()=>{
  const dom=new JSDOM(
    '<!doctype html><html><head><title>Calendar</title></head><body><main><div id="app"></div></main></body></html>',
    {url:"https://example.com/A-level-Maths-Calendar/#/study/1/R/0"});
  const {window}=dom;
  const {document}=window;
  window.scrollTo=()=>{};
  globalThis.window=window;
  globalThis.document=document;
  globalThis.location=window.location;
  globalThis.customElements=window.customElements;
  globalThis.requestAnimationFrame=fn=>fn();
  globalThis.ResizeObserver=class{observe(){}disconnect(){}};

  const context={
    clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},
    stroke(){},arc(){},fill(){},fillRect(){},save(){},restore(){},
    scale(){},rect(){}
  };
  window.HTMLCanvasElement.prototype.getContext=function(){return context;};
  window.HTMLCanvasElement.prototype.getBoundingClientRect=function(){
    return {left:0,top:0,width:640,height:320,right:640,bottom:320};
  };
  class FakeMathField extends window.HTMLElement{
    get value(){return this._value||"";}
    set value(v){this._value=String(v);}
    insert(text){this.value+=text;this.dispatchEvent(new window.Event("input",{bubbles:true}));}
  }
  window.customElements.define("math-field",FakeMathField);

  const key="alevel-maths-calendar-progress-v1";
  window.localStorage.setItem(key,JSON.stringify({"W01-R1":{working:"My original working"}}));
  globalThis.localStorage=window.localStorage;

  await import("../src/app.js");
  const note=document.querySelector("#work-notes");
  assert.ok(note,"workspace is mounted inside the question");
  assert.equal(note.value,"My original working","legacy working migrates without loss");

  note.value="First I factorise";
  note.dispatchEvent(new window.Event("input",{bubbles:true}));
  document.querySelector('#work-tab-maths').click();
  assert.equal(document.querySelector("#work-tab-maths").getAttribute("aria-selected"),"true");
  assert.equal(document.querySelectorAll("math-field.maths-mathfield").length,1);
  const first=document.querySelector("math-field.maths-mathfield");
  first.value="x^2-5x+6=0";
  first.dispatchEvent(new window.Event("input",{bubbles:true}));
  document.querySelector("#maths-add-bottom").click();
  assert.equal(document.querySelectorAll("math-field.maths-mathfield").length,2);
  const fields=document.querySelectorAll("math-field.maths-mathfield");
  fields[1].value="(x-2)(x-3)=0";
  fields[1].dispatchEvent(new window.Event("input",{bubbles:true}));

  document.querySelector("#work-tab-draw").click();
  const canvas=document.querySelector("#working-ink");
  const draw=(name,x,y)=>{
    const event=new window.MouseEvent(name,{bubbles:true,cancelable:true,clientX:x,clientY:y,button:0});
    Object.defineProperties(event,{pointerType:{value:"mouse"},pointerId:{value:7}});
    canvas.dispatchEvent(event);
  };
  draw("pointerdown",80,90);
  draw("pointermove",180,150);
  draw("pointerup",260,190);

  let state=JSON.parse(window.localStorage.getItem(key))["W01-R1"].workspace;
  assert.equal(state.notes,"First I factorise");
  assert.equal(state.mathLines.length,2);
  assert.equal(state.mathLines[0].latex,"x^2-5x+6=0");
  assert.equal(state.mathLines[1].latex,"(x-2)(x-3)=0");
  assert.equal(state.strokes.length,1);
  assert.ok(state.strokes[0].points.length>=2);

  document.querySelector('#work-tab-notes').click();
  assert.equal(document.querySelector('#work-notes').value,"First I factorise");
  document.querySelector('#work-tab-maths').click();
  assert.equal(document.querySelectorAll("math-field.maths-mathfield")[1].value,
    "(x-2)(x-3)=0");
  document.querySelector('#work-tab-draw').click();
  document.querySelector("#ink-undo").click();
  state=JSON.parse(window.localStorage.getItem(key))["W01-R1"].workspace;
  assert.equal(state.strokes.length,0);
  document.querySelector("#ink-redo").click();
  state=JSON.parse(window.localStorage.getItem(key))["W01-R1"].workspace;
  assert.equal(state.strokes.length,1);

  // Self-reported independence is separate from completion. A mark of zero
  // must still count as finished, and should not remove written/drawn work.
  const finishBadge=document.querySelector("#question-finish-badge");
  const indicator=document.querySelector('[data-jump="0"] .q-complete-indicator');
  assert.equal(finishBadge.dataset.finished,"false");
  assert.equal(indicator.hidden,true);
  document.querySelector('[data-attempt-support="I"]').click();
  assert.equal(finishBadge.dataset.finished,"false");
  let fullRecord=JSON.parse(window.localStorage.getItem(key))["W01-R1"];
  assert.equal(fullRecord.status,"I");
  assert.equal(fullRecord.score,undefined);
  const mark=document.querySelector("#self-mark-input");
  mark.value="0";
  mark.dispatchEvent(new window.Event("input",{bubbles:true}));
  assert.equal(finishBadge.dataset.finished,"true");
  assert.equal(indicator.hidden,false,"sidebar instantly shows finished status");
  fullRecord=JSON.parse(window.localStorage.getItem(key))["W01-R1"];
  assert.equal(fullRecord.score,0);
  assert.equal(fullRecord.workspace.strokes.length,1,"mark entry retains drawing");
  assert.equal(fullRecord.workspace.mathLines.length,2,"mark entry retains maths lines");

  window.location.hash="#/study/1/R/1";
  await new Promise(resolve=>setTimeout(resolve,10));
  assert.equal(document.querySelector("#work-notes").value,"","different question starts blank");
  assert.equal(document.querySelector("#question-finish-badge").dataset.finished,"false","unmarked next question is still in progress");

  window.location.hash="#/study/1/R/0";
  await new Promise(resolve=>setTimeout(resolve,10));
  assert.equal(document.querySelector("#work-notes").value,"First I factorise");
  assert.equal(document.querySelectorAll("math-field.maths-mathfield").length,2);
  state=JSON.parse(window.localStorage.getItem(key))["W01-R1"].workspace;
  assert.equal(state.strokes.length,1,"drawing survives question navigation");
  assert.equal(state.mode,"draw","chosen mode restored on return");
  assert.equal(document.querySelector("#question-finish-badge").dataset.finished,"true","recorded zero mark restores completion");
  assert.equal(document.querySelector("#self-mark-input").value,"0");

  dom.window.close();
  delete globalThis.window;
  delete globalThis.document;
  delete globalThis.location;
  delete globalThis.customElements;
  delete globalThis.requestAnimationFrame;
  delete globalThis.ResizeObserver;
  delete globalThis.localStorage;
});
