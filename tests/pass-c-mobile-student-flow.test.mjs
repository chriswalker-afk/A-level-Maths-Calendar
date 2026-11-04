import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {JSDOM} from "jsdom";

test("phone study flow: question, working, marking and return preserve saved work",async()=>{
 const html=readFileSync(new URL("../index.html",import.meta.url),"utf8");
 const dom=new JSDOM(html,{url:"https://example.com/A-level-Maths-Calendar/#/study/1/R/0"});
 const {window}=dom,doc=window.document;
 window.scrollTo=()=>{};
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
  left:0,top:0,width:390,height:260,right:390,bottom:260
 });
 class FakeMathField extends window.HTMLElement{
  get value(){return this._value||"";}
  set value(v){this._value=String(v);}
  insert(v){this.value+=v;this.dispatchEvent(new window.Event("input",{bubbles:true}));}
 }
 window.customElements.define("math-field",FakeMathField);
 let narrow=true,resizeListener=null;
 const media={
  get matches(){return narrow;},
  addEventListener(name,fn){if(name==="change")resizeListener=fn;},
  removeEventListener(name,fn){if(name==="change"&&resizeListener===fn)resizeListener=null;}
 };
 window.matchMedia=()=>media;
 const storageKey="alevel-maths-calendar-progress-v1";
 const read=()=>JSON.parse(window.localStorage.getItem(storageKey));
 const nav=route=>{window.location.hash=route;window.dispatchEvent(new window.Event("hashchange"));};
 try{
  await import("../src/app.js");
  const app=doc.querySelector("#app");
  assert.equal(app.querySelector(".study-mobile-tabs").hidden,false);
  assert.equal(app.querySelector("#study-question-pane").hidden,false);
  assert.equal(app.querySelector("#study-writing-pane").hidden,true);
  assert.equal(app.querySelector(".study-answer-modes").hidden,true);
  assert.equal(app.querySelector("#study-mobile-question").getAttribute("aria-selected"),"true");
  assert.equal(app.querySelector(".study-question-toolbar").querySelectorAll("#next").length,1);
  assert.ok(app.querySelector("#active-question-title"));

  app.querySelector("#study-mobile-work").click();
  const notes=app.querySelector("#work-notes"),canvas=app.querySelector("#working-ink");
  const working=app.querySelector("#question-working-space");
  assert.equal(app.querySelector("#study-question-pane").hidden,true);
  assert.equal(app.querySelector("#study-panel-work").hidden,false);
  notes.value="I used differentiation to begin";
  notes.dispatchEvent(new window.Event("input",{bubbles:true}));
  assert.match(read()["W01-R1"].workspace.notes,/differentiation/);
  app.querySelector("#work-tab-draw").click();
  assert.equal(app.querySelector("#work-panel-draw").hidden,false);
  app.querySelector("#study-mobile-question").click();
  assert.ok(app.querySelector("#study-question-pane"));
  app.querySelector("#study-mobile-work").click();
  assert.equal(app.querySelector("#question-working-space"),working);
  assert.equal(app.querySelector("#working-ink"),canvas);
  assert.equal(app.querySelector("#work-panel-draw").hidden,false,"Draw mode is preserved");

  app.querySelector("#study-mobile-review").click();
  assert.equal(app.querySelector("#study-panel-review").hidden,false);
  assert.equal(app.querySelector("#solution-box").hidden,false);
  assert.ok(app.querySelector(".study-marking-dock").contains(app.querySelector("#self-mark-input")));
  app.querySelector('[data-attempt-support="I"]').click();
  const score=app.querySelector("#self-mark-input");
  score.value="0";
  score.dispatchEvent(new window.Event("input",{bubbles:true}));
  assert.equal(read()["W01-R1"].score,0,"a mark of 0 still records completion");
  assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"true");
  app.querySelector("#study-mobile-question").click();
  assert.equal(app.querySelector("#study-question-pane").hidden,false);
  assert.equal(app.querySelector("#study-panel-review").hidden,false,
   "the review remains mounted while its parent is hidden");

  // Returning to wide screen restores the persistent side-by-side question layout.
  narrow=false;resizeListener?.({matches:false});
  assert.equal(app.querySelector(".study-mobile-tabs").hidden,true);
  assert.equal(app.querySelector("#study-question-pane").hidden,false);
  assert.equal(app.querySelector("#study-writing-pane").hidden,false);
  assert.equal(app.querySelector(".study-answer-modes").hidden,false);

  nav("#/study/1/R/1");
  narrow=true;resizeListener?.({matches:true});
  assert.equal(app.querySelector("#study-mobile-question").getAttribute("aria-selected"),"true");
  nav("#/study/1/R/0");
  app.querySelector("#study-mobile-work").click();
  assert.equal(app.querySelector("#work-notes").value,"I used differentiation to begin");
  assert.equal(app.querySelector("#work-panel-draw").hidden,false);
  app.querySelector("#study-mobile-review").click();
  assert.equal(app.querySelector("#self-mark-input").value,"0");

  // Active mock keeps the same mobile navigation, but there is no review panel.
  nav("#/study/10/P/0");
  app.querySelector('[data-mock-action="start"][data-mock-section="P"]').click();
  assert.equal(app.querySelector(".study-mobile-tabs").hidden,false);
  assert.equal(app.querySelector("#study-mobile-review").disabled,true);
  assert.equal(app.querySelector("#study-panel-review"),null);
  app.querySelector("#study-mobile-review").click();
  assert.equal(app.querySelector("#study-question-pane").hidden,false);
  app.querySelector("#study-mobile-work").click();
  assert.ok(app.querySelector("#work-notes"));
  assert.ok(app.querySelector(".mock-exam-lock"));
  assert.equal(app.querySelector("#question-assessment"),null);
  assert.equal(app.querySelector("#solution-box"),null);
  assert.ok(resizeListener,"current mobile page retains exactly one resize listener");
  nav("#/calendar");
  assert.equal(resizeListener,null,"route changes detach the viewport listener");
 }finally{
  dom.window.close();
  for(const name of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"])
   delete globalThis[name];
 }
});

test("small screen stylesheet keeps math legible, supports landscape and printing",()=>{
 const index=readFileSync(new URL("../index.html",import.meta.url),"utf8");
 const css=readFileSync(new URL("../styles/responsive-workbench.css",import.meta.url),"utf8");
 assert.match(index,/styles\/responsive-workbench\.css/);
 assert.match(css,/@media\(max-width:900px\)/);
 assert.match(css,/\.study-mobile-tabs:not\(\[hidden\]\)/);
 assert.match(css,/height:clamp\(300px,calc\(100dvh - 330px\),750px\)/);
 assert.match(css,/overflow-x:auto;overflow-y:auto/);
 assert.match(css,/\.study-page \.study-marking-dock/);
 assert.match(css,/@media\(max-width:900px\) and \(max-height:520px\)/);
 assert.match(css,/@media print/);
 assert.match(css,/\.study-question-pane\[hidden\]/);
});
