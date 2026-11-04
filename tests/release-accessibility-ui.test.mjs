import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {JSDOM} from "jsdom";

test("screen reader is moved to the active question, not the repeated week title, after navigation",async()=>{
 const html=readFileSync(new URL("../index.html",import.meta.url),"utf8");
 const dom=new JSDOM(html,{url:"https://example.com/A-level-Maths-Calendar/#/"});
 const {window}=dom,doc=window.document;
 window.scrollTo=()=>{};
 globalThis.window=window;
 globalThis.document=doc;
 globalThis.location=window.location;
 globalThis.localStorage=window.localStorage;
 globalThis.customElements=window.customElements;
 globalThis.ResizeObserver=class{observe(){}disconnect(){}};
 globalThis.requestAnimationFrame=cb=>cb();
 window.HTMLCanvasElement.prototype.getContext=()=>({
  clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},stroke(){},
  arc(){},fill(){},fillRect(){},save(){},restore(){},scale(){},rect(){}
 });
 window.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({
  left:0,top:0,width:640,height:320,right:640,bottom:320
 });
 class FakeMathField extends window.HTMLElement{
  get value(){return this._value||"";}set value(v){this._value=String(v);}
  insert(v){this.value+=v;this.dispatchEvent(new window.Event("input",{bubbles:true}));}
 }
 window.customElements.define("math-field",FakeMathField);
 try{
  assert.equal(doc.querySelector(".skip-link").getAttribute("href"),"#main");
  const main=doc.querySelector("#main");
  assert.equal(main.getAttribute("tabindex"),"-1");
  main.focus();
  assert.equal(doc.activeElement,main,"Skip-to-content landmark is focusable");
  await import("../src/app.js");
  const root=doc.querySelector("#app");
  const goto=route=>{
   window.location.hash=route;
   window.dispatchEvent(new window.Event("hashchange"));
  };
  goto("#/study/7/P/3");
  assert.equal(root.querySelector(".exam-sheet-code").textContent,"W07-P4");
  const heading=root.querySelector("#active-question-title");
  assert.ok(heading,"Questions need a unique focus target");
  assert.equal(doc.activeElement,heading,"Announce the active question, not the unchanged week title");
  assert.match(heading.getAttribute("aria-label"),/Question W07-P4, 10 marks/);
  assert.equal(root.querySelector("article.exam-sheet").getAttribute("aria-labelledby"),"active-question-title");
  assert.equal(root.querySelectorAll(".question-index-item").length,7);
  assert.equal(root.querySelector("#hint-box").hidden,true);
  root.querySelector("#hint-toggle").click();
  assert.equal(root.querySelector("#hint-box").hidden,false);
  assert.equal(root.querySelector("#hint-toggle").getAttribute("aria-expanded"),"true");
  assert.equal(JSON.parse(window.localStorage.getItem("alevel-maths-calendar-progress-v1"))["W07-P4"].hintSeen,true);
  assert.equal(root.querySelector("#question-finish-badge").dataset.finished,"false",
   "Revealing a hint never finishes a question");
  goto("#/study/9/X/1");
  assert.equal(root.querySelector(".exam-sheet-code").textContent,"W09-X2");
  assert.equal(root.querySelectorAll(".question-index-item").length,2);
  assert.match(doc.activeElement.getAttribute("aria-label"),/W09-X2, 16 marks/);
  goto("#/progress");
  assert.equal(doc.activeElement,root.querySelector("h1"),"Other routes focus their own page heading");
  goto("#/week/11");
  assert.match(root.textContent,/Page not found/);
 }finally{
  dom.window.close();
  for(const name of ["window","document","location","localStorage","customElements",
   "ResizeObserver","requestAnimationFrame"])delete globalThis[name];
 }
});

test("small-screen navigation remains scrollable and controls provide reduced-motion alternatives",()=>{
 const css=readFileSync(new URL("../styles.css",import.meta.url),"utf8");
 const polish=readFileSync(new URL("../styles/identity-polish.css",import.meta.url),"utf8");
 assert.match(css,/@media\(max-width:730px\)/);
 assert.match(css,/\.study-section-strip\s*\{\s*display:flex;overflow-x:auto;/);
 assert.match(css,/\.question-index \.question-links\s*\{\s*display:flex;flex-direction:row;gap:3px;overflow-x:auto;/);
 assert.match(polish,/@media \(max-width:450px\)/);
 assert.match(polish,/@media \(prefers-reduced-motion: reduce\)/);
 assert.match(polish,/\.maths-quickbar button \{ min-height:44px;min-width:44px; \}/);
});
