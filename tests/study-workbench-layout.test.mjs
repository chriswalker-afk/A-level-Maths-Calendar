import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {JSDOM} from "jsdom";

test("Pass A keeps question and saved working side by side with compact navigation",async()=>{
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
  left:0,top:0,width:500,height:320,right:500,bottom:320
 });
 class FakeMathField extends window.HTMLElement{
  get value(){return this._value||"";}
  set value(v){this._value=String(v);}
  insert(v){this.value+=v;this.dispatchEvent(new window.Event("input",{bubbles:true}));}
 }
 window.customElements.define("math-field",FakeMathField);
 const change=route=>{
  window.location.hash=route;
  window.dispatchEvent(new window.Event("hashchange"));
 };
 try{
  await import("../src/app.js");
  const root=doc.querySelector("#app");
  const pane=root.querySelector(".study-answer-layout");
  const question=root.querySelector(".study-question-pane");
  const writing=root.querySelector(".study-writing-pane");
  assert.ok(pane&&question&&writing);
  assert.equal(pane.children.length,2);
  assert.equal(pane.children[0],question,"question is the first pane");
  assert.equal(pane.children[1],writing,"working is next to the question");
  assert.ok(question.contains(root.querySelector("#active-question-title")));
  assert.ok(question.contains(root.querySelector(".parts")));
  assert.ok(writing.contains(root.querySelector("#question-working-space")));
  assert.ok(writing.contains(root.querySelector("#work-notes")));
  assert.ok(writing.contains(root.querySelector("#work-tab-maths")));
  assert.ok(writing.contains(root.querySelector("#work-tab-draw")));
  assert.equal(question.getAttribute("tabindex"),"0");
  assert.equal(writing.getAttribute("tabindex"),"0");
  assert.ok(question.getAttribute("aria-label"));
  assert.ok(writing.getAttribute("aria-label"));

  const toolbar=root.querySelector(".study-question-toolbar");
  const selector=root.querySelector(".question-index");
  assert.ok(toolbar.contains(selector));
  assert.equal(root.querySelectorAll("#previous").length,1);
  assert.equal(root.querySelectorAll("#next").length,1);
  assert.equal(root.querySelectorAll(".question-index-item").length,10);
  assert.equal(selector.querySelector(".question-index-item.active").dataset.jump,"0");
  assert.match(selector.textContent,/SECTION R/);
  assert.ok(root.querySelector("#next").dataset.targetRoute);
  assert.equal(root.querySelector(".study-workbench .side.question-index"),null);

  const review=root.querySelector(".study-review-and-more");
  const workPanel=root.querySelector("#study-panel-work");
  const checkPanel=root.querySelector("#study-panel-review");
  assert.ok(review&&workPanel&&checkPanel);
  assert.ok(writing.contains(root.querySelector(".study-answer-modes")));
  assert.ok(workPanel.contains(root.querySelector("#hint-toggle")));
  assert.ok(workPanel.contains(root.querySelector("#question-working-space")));
  assert.ok(checkPanel.contains(root.querySelector("#solution-toggle")));
  assert.ok(checkPanel.contains(root.querySelector("#solution-box")));
  assert.ok(checkPanel.contains(root.querySelector("#question-assessment")));
  assert.ok(checkPanel.contains(root.querySelector("#self-mark-input")));
  assert.ok(review.contains(root.querySelector("#attempt-history-root")));
  assert.ok(review.contains(root.querySelector(".question-skill-links")));
  assert.ok(pane.contains(root.querySelector("#question-assessment")));
  assert.equal(root.querySelector("#study-tab-work").getAttribute("aria-selected"),"true");
  assert.equal(root.querySelector("#study-tab-review").getAttribute("aria-selected"),"false");
  assert.equal(checkPanel.hidden,true,"review is initially closed");
  root.querySelector("#study-tab-review").click();
  assert.equal(checkPanel.hidden,false,"checking happens within the right panel");
  assert.equal(workPanel.hidden,true,"work is retained but not shown");
  assert.equal(root.querySelector("#solution-box").hidden,false,"the scheme opens with Check & mark");
  assert.equal(root.querySelector("#mark-view-solution"),null,"no scroll-to-solution link in compact marking");
  root.querySelector("#study-tab-work").click();
  assert.equal(workPanel.hidden,false);
  assert.equal(checkPanel.hidden,true);

  const note=root.querySelector("#work-notes");
  note.value="My saved reasoning";
  note.dispatchEvent(new window.Event("input",{bubbles:true}));
  assert.equal(JSON.parse(window.localStorage.getItem("alevel-maths-calendar-progress-v1"))["W01-R1"].workspace.notes,"My saved reasoning");
  root.querySelector('[data-jump="1"]').click();
  window.dispatchEvent(new window.Event("hashchange"));
  assert.match(root.querySelector(".exam-sheet-code").textContent,/W01-R2/);
  change("#/study/1/R/0");
  assert.equal(root.querySelector("#work-notes").value,"My saved reasoning","navigating away and back retains notes");

  change("#/study/10/P/0");
  assert.ok(root.querySelector(".study-page-mock"));
  assert.ok(root.querySelector(".study-answer-layout"));
  assert.ok(root.querySelector("#question-working-space"));
  root.querySelector('[data-mock-action="start"][data-mock-section="P"]').click();
  assert.ok(root.querySelector(".study-question-pane"),"timed paper retains the question");
  assert.ok(root.querySelector(".study-writing-pane"),"timed paper retains the workspace");
  assert.ok(root.querySelector("#work-notes"));
  assert.ok(root.querySelector(".mock-exam-lock"));
  assert.equal(root.querySelector("#study-tab-review").disabled,true,"the check tab is locked");
  assert.equal(root.querySelector("#study-panel-review"),null,"no hidden marking panel is mounted");
  assert.equal(root.querySelector("#solution-toggle"),null,"timer still locks solutions");
  assert.equal(root.querySelector("#question-assessment"),null,"timer still locks marking");
 }finally{
  dom.window.close();
  for(const key of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"]){
   delete globalThis[key];
  }
 }
});

test("study viewport scrolls panes separately while smaller screens and print are not clipped",()=>{
 const index=readFileSync(new URL("../index.html",import.meta.url),"utf8");
 const css=readFileSync(new URL("../styles/question-workbench.css",import.meta.url),"utf8");
 assert.match(index,/styles\/question-workbench\.css/);
 assert.match(css,/\.study-page \.study-answer-layout\s*\{[\s\S]*?display:grid;grid-template-columns:minmax\(0,/);
 assert.match(css,/height:clamp\(375px,calc\(100dvh - 315px\),820px\)/);
 assert.match(css,/\.study-page \.study-question-pane,\s*\.study-page \.study-writing-pane\s*\{[\s\S]*?overflow-y:auto/);
 assert.match(css,/@media\(max-width:900px\)/);
 assert.match(css,/display:flex;flex-direction:column;height:auto/);
 assert.match(css,/\.study-page \.study-solution-area\s*\{[\s\S]*?overflow:auto/);
 assert.match(css,/\.study-page \.study-marking-dock\s*\{[\s\S]*?max-height:56%/);
 assert.match(css,/\.study-page \.study-work-panel\[hidden\]/);
 assert.match(css,/@media print/);
});
