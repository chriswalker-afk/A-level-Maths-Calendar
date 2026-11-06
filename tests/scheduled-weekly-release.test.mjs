import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {siteConfig} from "../src/config.js";
import {weekReleaseDate,isWeekReleased,publicationClock} from "../src/publication.js";
import {getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";

const WEEK_MS=7*86400000;
const start=Date.parse("2026-11-09T00:00:00+08:00");

test("every Monday opens exactly the next authored week at Brunei midnight",()=>{
 assert.equal(siteConfig.timezone,"Asia/Brunei");
 assert.equal(siteConfig.stage1.releaseMode,"scheduled");
 assert.equal(siteConfig.stage1.startDate,"2026-11-09");
 for(let week=1;week<=10;week++){
  const opens=start+(week-1)*WEEK_MS;
  assert.equal(weekReleaseDate(week)?.getTime(),opens,"Week "+week+" date");
  const questions=[{id:"sample"}];
  assert.equal(isWeekReleased(week,questions,{now:opens-1}),false,"Week "+week+" opens too early");
  assert.equal(isWeekReleased(week,questions,{now:opens}),true,"Week "+week+" fails at midnight");
  if(week>1)assert.equal(isWeekReleased(week-1,questions,{now:opens}),true,
   "Earlier weeks stay open");
 }
 assert.equal(weekReleaseDate(10).toISOString(),"2027-01-10T16:00:00.000Z");
 assert.equal(isWeekReleased(11,[{id:"sample"}],{now:start+12*WEEK_MS}),false);
 assert.equal(isWeekReleased(2,[],{now:start+2*WEEK_MS}),false,
  "Unauthored content cannot be released");
 assert.equal(weekReleaseDate(-1),null);
 assert.equal(weekReleaseDate(1,{stage:{releaseMode:"scheduled",startDate:"invalid"}}),null);
});

test("direct weekly links and progress stay locked until Monday; specification links update",async()=>{
 publicationClock.now=()=>start;
 const dom=new JSDOM("<!doctype html><html><head><title>Calendar</title></head><body><header><nav><a data-nav='calendar'></a><a data-nav='progress'></a><a data-nav='specification'></a></nav></header><main><div id='app'></div></main></body></html>",{
  url:"https://example.com/A-level-Maths-Calendar/#/"
 });
 const {window}=dom,doc=window.document;
 window.scrollTo=()=>{};
 globalThis.window=window;globalThis.document=doc;globalThis.location=window.location;
 globalThis.localStorage=window.localStorage;globalThis.customElements=window.customElements;
 globalThis.ResizeObserver=class{observe(){}disconnect(){}};
 globalThis.requestAnimationFrame=callback=>callback();
 window.HTMLCanvasElement.prototype.getContext=()=>({
  clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},
  stroke(){},arc(){},fill(){},fillRect(){},save(){},restore(){},scale(){},rect(){}
 });
 window.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({
  left:0,top:0,width:640,height:320,right:640,bottom:320
 });
 class FakeMathField extends window.HTMLElement{
  get value(){return this._value||"";}
  set value(v){this._value=String(v);}
  insert(v){this.value+=v;this.dispatchEvent(new window.Event("input",{bubbles:true}));}
 }
 window.customElements.define("math-field",FakeMathField);
 const key=siteConfig.storageKey;
 window.localStorage.setItem(key,JSON.stringify({
  "W01-R1":{score:2,status:"I"},
  "W02-R1":{score:2,status:"I"}
 }));
 try{
  await import("../src/app.js");
  const app=doc.querySelector("#app");
  const goto=hash=>{window.location.hash=hash;window.dispatchEvent(new window.Event("hashchange"));};
  assert.equal(app.querySelectorAll("a.planner-cell.is-open").length,1);
  assert.equal(app.querySelectorAll("div.planner-cell.is-upcoming").length,9);
  assert.match(app.textContent,/OPENS MON 16 NOV/);
  assert.ok(!getPublishedPracticeForSkill("P03-007").some(q=>q.week===2));
  goto("#/study/2/R/0");
  assert.match(app.textContent,/not available yet/i);
  assert.ok(!app.querySelector(".exam-sheet"),"Direct URL must not render a locked question");
  goto("#/week/10");
  assert.ok(!app.querySelector("#question-assessment"));
  goto("#/mock-review/10");
  assert.match(app.textContent,/Page not found/);
  goto("#/progress/internal");
  assert.equal(app.querySelectorAll(".weekly-progress-group").length,1);
  assert.match(app.querySelector(".metric strong").textContent,/1\//);
  goto("#/specification/internal/P03");
  assert.equal(app.querySelectorAll('a[href^="#/study/2/"]').length,0);
  assert.equal(app.querySelectorAll(".topic-practice-card").length,3,
   "Independent AO practice remains accessible");

  publicationClock.now=()=>start+WEEK_MS-1;
  goto("#/calendar");
  assert.equal(app.querySelectorAll("a.planner-cell.is-open").length,1);
  publicationClock.now=()=>start+WEEK_MS;
  goto("#/calendar");
  assert.equal(app.querySelectorAll("a.planner-cell.is-open").length,2);
  assert.ok(getPublishedPracticeForSkill("P03-007").some(q=>q.week===2),
   "An already-imported specification index updates after Monday");
  goto("#/study/2/R/0");
  assert.match(app.querySelector(".exam-sheet-code").textContent,/W02-R1/);
  goto("#/study/3/R/0");
  assert.ok(!app.querySelector(".exam-sheet"));

  publicationClock.now=()=>start+9*WEEK_MS;
  goto("#/calendar");
  assert.equal(app.querySelectorAll("a.planner-cell.is-open").length,10);
 }finally{
  dom.window.close();
  for(const name of ["window","document","location","localStorage","customElements",
   "ResizeObserver","requestAnimationFrame"])delete globalThis[name];
  publicationClock.now=()=>Date.parse("2027-01-12T12:00:00+08:00");
 }
});
