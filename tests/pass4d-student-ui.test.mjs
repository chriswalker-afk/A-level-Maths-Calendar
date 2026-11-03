import test from "node:test";
import assert from "node:assert/strict";
import {backupToJSON} from "../src/progress-portability.js";

test("end-to-end student reattempts, grounded advice and offline import/export",async()=>{
 const dom=new (await import("jsdom")).JSDOM(
  '<!doctype html><html><head><title>Calendar</title></head><body><main><div id="app"></div></main></body></html>',
  {url:"https://example.com/A-level-Maths-Calendar/#/progress/internal"}
 );
 const {window}=dom,doc=window.document;
 window.scrollTo=()=>{};
 window.confirm=()=>true;
 const exports=[];
 window.URL.createObjectURL=blob=>{exports.push(blob);return "blob:sample-progress"};
 window.URL.revokeObjectURL=()=>{};
 window.HTMLAnchorElement.prototype.click=function(){
  // Simulate a browser receiving the download rather than navigating jsdom.
  if(this.download)exports.push(this.download);
 };
 const context={
  clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},
  stroke(){},arc(){},fill(){},fillRect(){},save(){},restore(){},scale(){},rect(){}
 };
 window.HTMLCanvasElement.prototype.getContext=function(){return context};
 window.HTMLCanvasElement.prototype.getBoundingClientRect=function(){
  return {left:0,top:0,width:640,height:320,right:640,bottom:320};
 };
 class FakeMathField extends window.HTMLElement{
  get value(){return this._value||"";}
  set value(value){this._value=String(value);}
  insert(value){this.value+=value;this.dispatchEvent(new window.Event("input",{bubbles:true}));}
 }
 window.customElements.define("math-field",FakeMathField);
 globalThis.window=window;
 globalThis.document=doc;
 globalThis.location=window.location;
 globalThis.customElements=window.customElements;
 globalThis.localStorage=window.localStorage;
 globalThis.requestAnimationFrame=cb=>cb();
 globalThis.ResizeObserver=class{observe(){}disconnect(){}};

 const key="alevel-maths-calendar-progress-v1";
 const existing={
  "W01-P2":{
   score:7,status:"P",scoreSource:"parts",partMarks:{a:2,b:2,c:3},
   workspace:{mode:"draw",notes:"First solution working",mathLines:[
    {id:"step-old",latex:"x^2-4",reason:"earlier step"}],
    strokes:[{color:"#183a46",width:2,points:[[0.1,0.2],[0.8,0.9]]}]}
  },
  reflections:{strength:"I checked my domain"}
 };
 window.localStorage.setItem(key,JSON.stringify(existing));
 await import("../src/app.js");
 const app=doc.querySelector("#app");
 assert.ok(app.querySelector(".revision-suggestions"),"Recommendations are on My Progress");
 assert.ok(app.querySelector("#progress-transfer"),"Backup controls are visible");
 assert.match(app.querySelector(".revision-suggestions").textContent,/practise next/i);

 // Export is a real button, and the captured blob includes private work.
 app.querySelector("#export-progress").click();
 assert.equal(exports.length,2);
 assert.equal(exports[1],"a-level-maths-calendar-progress-"+new Date().toISOString().slice(0,10)+".json");

 // Import defaults to adding only missing question records, never replacing
 // existing marks or the older drawing.
 const imported={
  "W01-P2":{score:0,status:"I",working:"Do not overwrite current!"},
  "W01-R1":{score:2,status:"I",workspace:{notes:"Imported from tablet"}},
  reflections:{strength:"Backup strength"}
 };
 const file={size:backupToJSON(imported).length,text:async()=>backupToJSON(imported)};
 const input=app.querySelector("#progress-import-file");
 Object.defineProperty(input,"files",{configurable:true,value:[file]});
 input.dispatchEvent(new window.Event("change",{bubbles:true}));
 await new Promise(resolve=>setTimeout(resolve,0));
 assert.equal(app.querySelector("#transfer-import-preview").hidden,false,"Valid backup preview opens");
 assert.match(app.querySelector("#transfer-preview-summary").textContent,/question records/);
 app.querySelector("#apply-import").click();
 const merged=JSON.parse(window.localStorage.getItem(key));
 assert.equal(merged["W01-P2"].score,7);
 assert.equal(merged["W01-P2"].workspace.notes,"First solution working");
 assert.equal(merged["W01-R1"].score,2);
 assert.equal(merged.reflections.strength,"I checked my domain");
 assert.match(app.textContent,/Backup imported:/);

 // A reattempt must not destroy the marked maths and ink from the first one.
 window.location.hash="#/study/1/P/1";
 window.dispatchEvent(new window.Event("hashchange"));
 assert.ok(app.querySelector("#start-reattempt"),"Marked question offers a fresh attempt");
 app.querySelector("#start-reattempt").click();
 const restarted=JSON.parse(window.localStorage.getItem(key))["W01-P2"];
 assert.equal(restarted.score,undefined);
 assert.equal(restarted.workspace,undefined);
 assert.equal(restarted.attemptHistory.length,1);
 assert.equal(restarted.attemptHistory[0].score,7);
 assert.equal(restarted.attemptHistory[0].workspace.notes,"First solution working");
 assert.equal(restarted.attemptHistory[0].workspace.strokes.length,1);
 assert.equal(app.querySelector("#work-notes").value,"","New work starts blank");
 assert.equal(app.querySelector("#question-finish-badge").dataset.finished,"false");
 assert.match(app.querySelector("#reattempt-panel").textContent,/in progress/i);
 const previous=app.querySelector(".attempt-history-item");
 previous.open=true;
 previous.dispatchEvent(new window.Event("toggle",{bubbles:true}));
 assert.match(previous.textContent,/First solution working/);
 assert.ok(previous.querySelector("canvas[data-history-ink]"));
 assert.match(previous.textContent,/earlier step/);

 // Latest mark becomes the current evidence, previous score stays in history.
 const score=app.querySelector("#self-mark-input");
 score.value="8";
 score.dispatchEvent(new window.Event("input",{bubbles:true}));
 const current=JSON.parse(window.localStorage.getItem(key))["W01-P2"];
 assert.equal(current.score,8);
 assert.equal(current.attemptHistory[0].score,7);
 assert.match(app.querySelector("#reattempt-panel").textContent,/Improved by 1 mark/);
 assert.equal(app.querySelectorAll(".attempt-history-item").length,2);
 window.location.hash="#/progress/internal";
 window.dispatchEvent(new window.Event("hashchange"));
 assert.match(app.querySelector(".spec-progress-pulse").textContent,/2 \/ 44/);
 const finalRecord=JSON.parse(window.localStorage.getItem(key))["W01-P2"];
 assert.equal(finalRecord.attemptHistory[0].workspace.strokes.length,1);

 dom.window.close();
 delete globalThis.window;
 delete globalThis.document;
 delete globalThis.location;
 delete globalThis.localStorage;
 delete globalThis.customElements;
 delete globalThis.requestAnimationFrame;
 delete globalThis.ResizeObserver;
});
