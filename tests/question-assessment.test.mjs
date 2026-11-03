import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {isQuestionFinished,mountQuestionAssessment} from "../src/question-assessment.js";

const question={id:"W01-P1",marks:8};
function setup(record={}){
  const dom=new JSDOM('<!doctype html><body><button id="solution-toggle">Show solution</button><div id="solution-box" hidden></div><div id="assessment"></div></body>',{url:"https://example.com"});
  const root=dom.window.document.querySelector("#assessment");
  let latest=null,finish=false,saves=0;
  const notifications=[];
  dom.window.document.querySelector("#solution-toggle").addEventListener("click",()=>{
    dom.window.document.querySelector("#solution-box").hidden=false;
  });
  mountQuestionAssessment(root,{
    question,record,
    onChange(next){saves++;latest=next;return true;},
    onCompletionChange(done){finish=done;notifications.push(done);}
  });
  return {dom,root,get latest(){return latest;},get finish(){return finish;},get saves(){return saves;},notifications};
}

test("only valid marks, including zero, finish questions",()=>{
  for(const record of [null,undefined,{}, {status:"I"}, {status:"P"},{status:"S"}, {score:null},{score:-1},{score:8.5},{score:9},{score:"0"}]){
    assert.equal(isQuestionFinished(record,8),false,JSON.stringify(record));
  }
  for(const v of [0,1,8])assert.equal(isQuestionFinished({score:v,status:"P"},8),true);
});

test("independence selection is not completion; a mark of 0 completes",()=>{
  const ui=setup();
  const badge=ui.root.querySelector("#question-finish-badge");
  const independent=ui.root.querySelector('[data-attempt-support="I"]');
  const helped=ui.root.querySelector('[data-attempt-support="P"]');
  const score=ui.root.querySelector("#self-mark-input");
  assert.equal(ui.finish,false);
  assert.match(badge.textContent,/Not yet finished/);
  independent.click();
  assert.equal(ui.latest.status,"I");
  assert.equal(ui.finish,false,"independence is not a completion signal");
  assert.equal(independent.getAttribute("aria-pressed"),"true");
  assert.equal(helped.getAttribute("aria-pressed"),"false");
  score.value="0";
  score.dispatchEvent(new ui.dom.window.Event("input",{bubbles:true}));
  assert.equal(ui.latest.score,0);
  assert.equal(ui.finish,true,"zero is a valid recorded mark");
  assert.match(badge.textContent,/Finished/);
  helped.click();
  assert.equal(ui.latest.status,"P");
  assert.equal(ui.latest.score,0);
  assert.equal(ui.finish,true,"help selection must not change completion");
  ui.root.querySelector("#clear-self-mark").click();
  assert.equal(ui.finish,false);
  assert.ok(!Object.hasOwn(ui.latest,"score"));
  assert.equal(ui.latest.status,"P","clearing the mark keeps support status");
  assert.equal(score.value,"");
  ui.dom.window.close();
});

test("out-of-range and fractional marks do not count as finished",()=>{
  const ui=setup({status:"I",score:5});
  const input=ui.root.querySelector("#self-mark-input");
  assert.equal(ui.finish,true);
  input.value="9";
  input.dispatchEvent(new ui.dom.window.Event("input",{bubbles:true}));
  assert.equal(ui.finish,false);
  assert.match(ui.root.querySelector("#self-mark-message").textContent,/whole number from 0 to 8/);
  assert.ok(!Object.hasOwn(ui.latest,"score"));
  input.value="3.5";
  input.dispatchEvent(new ui.dom.window.Event("input",{bubbles:true}));
  assert.equal(ui.finish,false);
  input.value="8";
  input.dispatchEvent(new ui.dom.window.Event("input",{bubbles:true}));
  assert.equal(ui.finish,true);
  assert.equal(ui.latest.score,8);
  ui.dom.window.close();
});

test("marking step links to worked solution and error category remains optional",()=>{
  const ui=setup();
  const solution=ui.dom.window.document.querySelector("#solution-box");
  assert.equal(solution.hidden,true);
  ui.root.querySelector("#mark-view-solution").click();
  assert.equal(solution.hidden,false);
  const difficulty=ui.root.querySelector("#self-error");
  difficulty.value="Method choice";
  difficulty.dispatchEvent(new ui.dom.window.Event("change",{bubbles:true}));
  assert.equal(ui.latest.error,"Method choice");
  assert.equal(ui.finish,false,"reflection alone does not finish the question");
  ui.dom.window.close();
});
