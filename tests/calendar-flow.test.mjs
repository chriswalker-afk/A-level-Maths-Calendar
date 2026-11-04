import test from "node:test";
import assert from "node:assert/strict";
import {
 STUDY_SEQUENCE,renderCalendarHome,firstWeekQuestionRoute,
 adjacentQuestionRoute,renderSectionNavigation,renderQuestionIndex
} from "../src/calendar-view.js";
import {programmeOne} from "../src/data/programmes.js";
import {taggedWeek01Questions} from "../src/data/tagged-questions.js";
import {JSDOM} from "jsdom";

const dom=html=>new JSDOM("<!doctype html><main>"+html+"</main>");
test("home is a recognisable 10-week calendar, with open and future weeks clearly separated",()=>{
 const html=renderCalendarHome({
  weeks:programmeOne.weeks,
  getStatus:w=>w.number===1?{released:true,total:18,done:2,url:"#/study/1/R/2"}:
   {released:false,total:0,done:0},
  totalCompleted:2
 });
 const page=dom(html),root=page.window.document.querySelector("main");
 assert.ok(root.querySelector(".planner-masthead"));
 assert.ok(root.querySelector(".planner-board"));
 assert.equal(root.querySelectorAll(".planner-spread").length,2);
 assert.equal(root.querySelectorAll(".planner-cell").length,10);
 assert.equal(root.querySelectorAll(".planner-grid").length,2);
 assert.equal(root.querySelectorAll("a.planner-cell.is-open").length,1);
 assert.equal(root.querySelectorAll("div.planner-cell.is-upcoming").length,9);
 assert.equal(root.querySelectorAll(".planner-cell.is-upcoming a").length,0);
 assert.equal(root.querySelector("a.planner-cell.is-open").getAttribute("href"),"#/study/1/R/2");
 assert.match(root.querySelector("a.planner-cell.is-open").textContent,/2\/18 ESSENTIAL MARKED/);
 assert.match(root.textContent,/MY PROGRESS/);
 assert.match(root.textContent,/SPECIFICATION/);
 assert.match(root.textContent,/STUDY GUIDE/);
 assert.ok(!/Master the connections|A better way to prepare|The learning routine|Choose your programme/.test(root.textContent));
 assert.equal(root.querySelectorAll("a[href^='#/week/']").length,0,"No extra weekly overview hop");
 page.window.close();
});
test("week entry resumes an unfinished, previously started retry before anything else",()=>{
 const qs=taggedWeek01Questions;
 const done=new Set(["W01-R1","W01-R2"]);
 assert.equal(firstWeekQuestionRoute(1,qs,q=>done.has(q.id)),"#/study/1/R/2");
 const inProgress=q=>q.id==="W01-P2";
 assert.equal(firstWeekQuestionRoute(1,qs,q=>done.has(q.id),inProgress),"#/study/1/P/1");
 assert.equal(firstWeekQuestionRoute(1,qs,()=>true),"#/study/1/R/0");
 assert.equal(firstWeekQuestionRoute(2,[]),null);
});
test("next and previous move across subsections without a week-overview interstitial",()=>{
 const q=taggedWeek01Questions;
 assert.equal(adjacentQuestionRoute(1,q,"R",0,-1),null);
 assert.equal(adjacentQuestionRoute(1,q,"R",8,1),"#/study/1/R/9");
 assert.equal(adjacentQuestionRoute(1,q,"R",9,1),"#/study/1/P/0");
 assert.equal(adjacentQuestionRoute(1,q,"P",0,-1),"#/study/1/R/9");
 assert.equal(adjacentQuestionRoute(1,q,"X",0,1),"#/study/1/X/1");
 assert.equal(adjacentQuestionRoute(1,q,"X",1,1),null);
 assert.equal(adjacentQuestionRoute(1,q,"M",0,42),null);
 assert.equal(adjacentQuestionRoute(1,q,"Q",0,1),null);
});
test("all six subsections remain accessible in the question view",()=>{
 const page=dom(renderSectionNavigation({week:1,section:"P",questions:taggedWeek01Questions,
   isFinished:q=>q.id==="W01-R1"}));
 const root=page.window.document.querySelector("main");
 const links=[...root.querySelectorAll("nav.study-section-nav a.study-section-link")];
 assert.equal(links.length,6);
 assert.deepEqual(links.map(x=>x.querySelector(".study-section-code").textContent),STUDY_SEQUENCE);
 assert.deepEqual(links.map(x=>x.getAttribute("href")),STUDY_SEQUENCE.map(k=>"#/study/1/"+k+"/0"));
 assert.equal(root.querySelectorAll('a[aria-current="page"]').length,1);
 assert.match(links[0].textContent,/1\/10/);
 assert.match(links[1].textContent,/Connected problems/);
 page.window.close();
});
test("question index shows a stable selection, saved-mark ticks and retries",()=>{
 const qs=taggedWeek01Questions.filter(q=>q.section==="R");
 const page=dom(renderQuestionIndex({section:"R",questions:qs,index:2,
   isFinished:q=>q.id==="W01-R1",isRetrying:q=>q.id==="W01-R2"}));
 const root=page.window.document.querySelector("main");
 assert.equal(root.querySelectorAll('[data-jump]').length,10);
 assert.equal(root.querySelectorAll('[aria-current="true"]').length,1);
 assert.equal(root.querySelectorAll(".q-complete-indicator:not([hidden])").length,1);
 assert.ok(root.querySelector(".q-retrying"));
 assert.match(root.querySelector(".question-index-heading").textContent,/SECTION R3 \/ 10/);
 page.window.close();
});
