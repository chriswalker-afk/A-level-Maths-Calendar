import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {mountQuestionAssessment} from "../src/question-assessment.js";
import {taggedWeek07Questions} from "../src/data/tagged-questions.js";

test("browser storage failure never reports unsaved mark changes as completed",()=>{
 const dom=new JSDOM('<!doctype html><main><div id="assessment"></div></main>',{url:"https://example.com/"});
 const root=dom.window.document.querySelector("#assessment");
 const q=taggedWeek07Questions.find(q=>q.id==="W07-P4");
 let writes=0;
 const previous={score:0,status:"I",scoreSource:"overall",workspace:{notes:"Keep my old work"}};
 const lastSaved={...previous};
 mountQuestionAssessment(root,{
  question:q,record:previous,
  onChange:()=>{writes++;return false;}
 });
 assert.equal(root.querySelector("#question-finish-badge").dataset.finished,"true");
 const score=root.querySelector("#self-mark-input");
 score.value="6";
 score.dispatchEvent(new dom.window.Event("input",{bubbles:true}));
 assert.equal(score.value,"0","Unwritten six marks must be rolled back to the saved zero");
 assert.equal(root.querySelector("#question-finish-badge").dataset.finished,"true");
 assert.match(root.querySelector("#self-mark-message").textContent,/could not save/i);
 assert.match(root.querySelector("#finish-save-status").textContent,/could not save/i);
 assert.equal(root.querySelector("#finish-save-status").classList.contains("save-error"),true);
 root.querySelector('[data-attempt-support="P"]').click();
 assert.equal(root.querySelector('[data-attempt-support="P"]').getAttribute("aria-pressed"),"false");
 assert.equal(root.querySelector('[data-attempt-support="I"]').getAttribute("aria-pressed"),"true");
 root.querySelector("#clear-self-mark").click();
 assert.equal(score.value,"0","A failed clear must not erase the previous mark");
 assert.equal(root.querySelector("#question-finish-badge").dataset.finished,"true");
 const first=root.querySelector('[data-part-mark="a"]');
 first.value="3";
 first.dispatchEvent(new dom.window.Event("input",{bubbles:true}));
 assert.equal(first.value,"","Failed detailed mark must be rolled back");
 assert.equal(score.value,"0");
 const error=root.querySelector("#self-error");
 error.value="Reasoning";
 error.dispatchEvent(new dom.window.Event("change",{bubbles:true}));
 assert.equal(error.value,"","An unsaved revision note must also be rolled back");
 assert.ok(writes>=5,"Ensure the failure responses were actually exercised");
 assert.deepEqual(previous,lastSaved,"Original record passed into the marking component is not mutated");
 dom.window.close();
});

test("successful zero-mark entry finishes, while support selection alone does not",()=>{
 const dom=new JSDOM('<!doctype html><div id="assessment"></div>',{url:"https://example.com/"});
 const root=dom.window.document.querySelector("#assessment");
 const q=taggedWeek07Questions.find(q=>q.id==="W07-P4");
 const saves=[];
 mountQuestionAssessment(root,{question:q,record:{},onChange:state=>{saves.push(state);return true;}});
 root.querySelector('[data-attempt-support="P"]').click();
 assert.equal(root.querySelector("#question-finish-badge").dataset.finished,"false");
 const score=root.querySelector("#self-mark-input");
 score.value="0";
 score.dispatchEvent(new dom.window.Event("input",{bubbles:true}));
 assert.equal(root.querySelector("#question-finish-badge").dataset.finished,"true");
 assert.equal(saves.at(-1).score,0);
 assert.equal(saves.at(-1).status,"P");
 dom.window.close();
});
