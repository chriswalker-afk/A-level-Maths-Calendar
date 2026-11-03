import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";

test("My Progress and My Specification receive real saved progress through the app routes",async()=>{
 const dom=new JSDOM("<!doctype html><html><head><title>Calendar</title></head><body><main><div id='app'></div></main></body></html>",{
  url:"https://example.com/A-level-Maths-Calendar/#/progress/internal"
 });
 const {window}=dom;
 window.scrollTo=()=>{};
 globalThis.window=window;
 globalThis.document=window.document;
 globalThis.location=window.location;
 globalThis.localStorage=window.localStorage;
 globalThis.requestAnimationFrame=cb=>cb();
 const key="alevel-maths-calendar-progress-v1";
 window.localStorage.setItem(key,JSON.stringify({
  "W01-R2":{score:0,status:"I"},
  "W01-P2":{score:7,status:"P",workspace:{notes:"My working is still here"}}
 }));
 await import("../src/app.js");
 const root=window.document.getElementById("app");
 assert.match(root.textContent,/My progress/i);
 const board=root.querySelector(".progress-spec-section");
 assert.ok(board,"Subject/topic dashboard appears in My Progress");
 assert.match(board.textContent,/2 \/ 132/,"Completed question count uses saved records");
 const algebra=board.querySelector('a[href="#/specification/internal/P02"]');
 assert.ok(algebra);
 assert.match(algebra.textContent,/0%/,"Single-part zero score is evidence, not missing");
 assert.ok(board.querySelector('a[href="#/progress/full"]'));

 window.location.hash="#/progress/full/M";
 window.dispatchEvent(new window.Event("hashchange"));
 assert.ok(root.querySelector('a.progress-topic-card[href="#/specification/full/M09"]'));
 assert.equal(root.querySelectorAll("a.progress-topic-card").length,4);

 window.location.hash="#/specification/internal/P02";
 window.dispatchEvent(new window.Event("hashchange"));
 assert.match(root.textContent,/Algebra and functions/);
 assert.match(root.querySelector(".spec-topic-evidence").textContent,/2 \/ /);
 assert.ok(root.querySelector("#P02-006 .spec-skill-performance"));
 assert.match(root.querySelector("#P02-006").textContent,/0% of verified part marks/);
 assert.equal(JSON.parse(window.localStorage.getItem(key))["W01-P2"].score,7,
  "Opening analytics must not alter existing scores");
 assert.equal(JSON.parse(window.localStorage.getItem(key))["W01-P2"].workspace.notes,
  "My working is still here","Opening analytics must not alter student working");
 dom.window.close();
 delete globalThis.window;
 delete globalThis.document;
 delete globalThis.location;
 delete globalThis.localStorage;
 delete globalThis.requestAnimationFrame;
});
