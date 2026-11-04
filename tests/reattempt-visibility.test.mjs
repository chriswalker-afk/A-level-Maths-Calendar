import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {taggedWeek01Questions} from "../src/data/tagged-questions.js";
import {renderAttemptHistory,mountAttemptHistory} from "../src/attempt-history-view.js";
import {startNewAttempt} from "../src/attempt-history.js";
import {WORKSPACE_HTML} from "../src/working-space-template.js";

const q=taggedWeek01Questions.find(q=>q.id==="W01-R1");

test("retry panel is absent until the first valid marked attempt",()=>{
 const unmarked=[
  {},{status:"I"},{status:"P",hintSeen:true,working:"I tried"},
  {workspace:{notes:"My working"}},{score:-1},{score:q.marks+1},
  {score:0.5},{attemptHistory:[{score:q.marks+1}]}
 ];
 for(const record of unmarked){
  assert.equal(renderAttemptHistory(q,record),"",
   "No panel for an unmarked or invalid attempt: "+JSON.stringify(record));
 }
 assert.doesNotMatch(WORKSPACE_HTML,/work-expand|Expand space|Reduce space/);
 assert.match(WORKSPACE_HTML,/work-save-status/);
 assert.match(WORKSPACE_HTML,/work-tab-notes/);
 assert.match(WORKSPACE_HTML,/work-tab-maths/);
 assert.match(WORKSPACE_HTML,/work-tab-draw/);
});

test("zero marks unlock retry; previous finished attempts keep panel visible during a retry",()=>{
 const first={score:0,status:"I",workspace:{notes:"Original answer"}};
 const firstMarkup=renderAttemptHistory(q,first);
 assert.match(firstMarkup,/Try again & track improvement/);
 assert.match(firstMarkup,/Start a fresh attempt/);
 const retry=startNewAttempt(q,first,"2026-11-04T07:00:00.000Z");
 const retryMarkup=renderAttemptHistory(q,retry);
 assert.match(retryMarkup,/Try again & track improvement/);
 assert.match(retryMarkup,/Fresh attempt in progress/);
 assert.match(retryMarkup,/Original answer/);
 assert.match(retryMarkup,/0 \/ /);
 assert.equal(retry.score,undefined,"active retry is not marked yet");
 const twice={...retry,score:q.marks};
 assert.match(renderAttemptHistory(q,twice),/Start a fresh attempt/);
 assert.match(renderAttemptHistory(q,twice),/finished attempts/);
});

test("unmarked attempt mounts no visible retry controls or listeners",()=>{
 const dom=new JSDOM('<div id="attempt-history-root"></div>');
 const root=dom.window.document.querySelector("#attempt-history-root");
 const dispose=mountAttemptHistory(root,{question:q,record:{status:"I"}});
 assert.equal(root.children.length,0);
 assert.equal(root.querySelector("#start-reattempt"),null);
 dispose();
 const complete=mountAttemptHistory(root,{question:q,record:{score:0}});
 assert.ok(root.querySelector("#reattempt-panel"));
 assert.ok(root.querySelector("#start-reattempt"));
 complete();
 dom.window.close();
});

test("live student flow shows the retry panel immediately after marking and hides it if the first score is cleared",async()=>{
 const dom=new JSDOM(
  '<!doctype html><html><head><title>Calendar</title></head><body><main><div id="app"></div></main></body></html>',
  {url:"https://example.com/A-level-Maths-Calendar/#/study/1/R/0"});
 const {window}=dom,doc=window.document;
 window.scrollTo=()=>{};
 window.confirm=()=>true;
 window.HTMLCanvasElement.prototype.getContext=()=>({
  clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},
  stroke(){},arc(){},fill(){},fillRect(){},save(){},restore(){},scale(){},rect(){}
 });
 window.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({
  left:0,top:0,width:640,height:320,right:640,bottom:320
 });
 class FakeMathField extends window.HTMLElement{
  get value(){return this._value||"";}
  set value(x){this._value=String(x);}
  insert(x){this.value+=x;}
 }
 window.customElements.define("math-field",FakeMathField);
 Object.assign(globalThis,{
  window,document:doc,location:window.location,localStorage:window.localStorage,
  customElements:window.customElements,ResizeObserver:class{observe(){}disconnect(){}},
  requestAnimationFrame:fn=>fn()
 });
 try{
  await import("../src/app.js");
  const root=doc.querySelector("#app");
  assert.equal(root.querySelector("#work-expand"),null);
  assert.equal(root.querySelector("#reattempt-panel"),null);
  assert.equal(root.querySelector("#start-reattempt"),null);
  root.querySelector("#work-notes").value="An unfinished solution";
  root.querySelector("#work-notes").dispatchEvent(new window.Event("input",{bubbles:true}));
  root.querySelector('[data-attempt-support="I"]').click();
  assert.equal(root.querySelector("#reattempt-panel"),null,
   "Recording independence alone must not display the retry panel");
  let score=root.querySelector("#self-mark-input");
  score.value="0";
  score.dispatchEvent(new window.Event("input",{bubbles:true}));
  assert.ok(root.querySelector("#reattempt-panel"),"Valid score 0 unlocks retry");
  assert.ok(root.querySelector("#start-reattempt"));
  root.querySelector("#clear-self-mark").click();
  assert.equal(root.querySelector("#reattempt-panel"),null,
   "Removing the only marked result removes the retry panel");
  score=root.querySelector("#self-mark-input");
  score.value="1";
  score.dispatchEvent(new window.Event("input",{bubbles:true}));
  root.querySelector("#start-reattempt").click();
  assert.match(root.querySelector("#reattempt-panel").textContent,/Fresh attempt in progress/);
  assert.equal(root.querySelector("#start-reattempt"),null);
  const record=JSON.parse(window.localStorage.getItem("alevel-maths-calendar-progress-v1"))[q.id];
  assert.equal(record.score,undefined);
  assert.equal(record.attemptHistory[0].score,1);
  assert.equal(record.attemptHistory[0].workspace.notes,"An unfinished solution");
  window.location.hash="#/study/1/R/1";
  window.dispatchEvent(new window.Event("hashchange"));
  assert.equal(root.querySelector("#reattempt-panel"),null,"Other unmarked questions do not show retry");
  window.location.hash="#/study/1/R/0";
  window.dispatchEvent(new window.Event("hashchange"));
  assert.match(root.querySelector("#reattempt-panel").textContent,/Fresh attempt in progress/);
 }finally{
  dom.window.close();
  for(const key of ["window","document","location","localStorage","customElements","ResizeObserver","requestAnimationFrame"])delete globalThis[key];
 }
});
