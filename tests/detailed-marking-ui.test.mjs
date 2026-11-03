import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {taggedWeek01Questions} from "../src/data/tagged-questions.js";
import {mountQuestionAssessment} from "../src/question-assessment.js";

const q=taggedWeek01Questions.find(x=>x.id==="W01-P2");
const activate=(el,dom,val)=>{
 el.value=val;
 el.dispatchEvent(new dom.window.Event("input",{bubbles:true}));
};
function setup(record={}){
 const dom=new JSDOM('<!doctype html><body><button id="solution-toggle">Show solution</button><div id="solution-box" hidden></div><main id="assessment"></main></body>',{url:"https://example.com"});
 const root=dom.window.document.getElementById("assessment");
 const changes=[];const completion=[];
 mountQuestionAssessment(root,{
  question:q,record,onChange(next){changes.push(next);return true;},
  onCompletionChange(status){completion.push(status);}
 });
 return {dom,root,changes,completion,get latest(){return changes.at(-1)||record;}};
}
test("part-by-part marking is optional, linked to valid skills and adds a derived total",()=>{
 const ui=setup();
 const details=ui.root.querySelector("#mark-by-parts");
 assert.ok(details);
 assert.match(details.textContent,/mark each part separately/);
 assert.match(details.textContent,/I can/);
 assert.ok(details.querySelector('a[href^="#/specification/internal/P02/"]'));
 assert.equal(ui.root.querySelector("#question-finish-badge").dataset.finished,"false");
 details.open=true;
 details.dispatchEvent(new ui.dom.window.Event("toggle"));
 assert.equal(ui.root.querySelector("#self-mark-input").readOnly,true);
 activate(ui.root.querySelector('[data-part-mark="a"]'),ui.dom,"2");
 activate(ui.root.querySelector('[data-part-mark="b"]'),ui.dom,"0");
 assert.equal(ui.root.querySelector("#question-finish-badge").dataset.finished,"false");
 activate(ui.root.querySelector('[data-part-mark="c"]'),ui.dom,"4");
 assert.equal(ui.root.querySelector("#question-finish-badge").dataset.finished,"true");
 assert.equal(ui.root.querySelector("#self-mark-input").value,"6");
 assert.equal(ui.latest.score,6);
 assert.equal(ui.latest.scoreSource,"parts");
 assert.deepEqual(ui.latest.partMarks,{a:2,b:0,c:4});
 assert.equal(ui.root.querySelector("#self-mark-input").readOnly,true);
 activate(ui.root.querySelector('[data-part-mark="b"]'),ui.dom,"");
 assert.equal(ui.root.querySelector("#question-finish-badge").dataset.finished,"false");
 assert.equal(ui.latest.score,undefined);
 assert.equal(ui.latest.status,undefined);
 assert.ok(ui.completion.includes(true)&&ui.completion.at(-1)===false);
 ui.dom.window.close();
});
test("a prior overall score survives partially filled detailed marking",()=>{
 const ui=setup({score:7,status:"I",working:"old"});
 const details=ui.root.querySelector("#mark-by-parts");
 details.open=true;
 details.dispatchEvent(new ui.dom.window.Event("toggle"));
 assert.equal(ui.root.querySelector("#self-mark-input").value,"7");
 activate(ui.root.querySelector('[data-part-mark="a"]'),ui.dom,"1");
 assert.equal(ui.latest.score,7);
 assert.equal(ui.root.querySelector("#question-finish-badge").dataset.finished,"true");
 assert.match(ui.root.querySelector("#detail-part-info").textContent,/existing overall mark/i);
 activate(ui.root.querySelector('[data-part-mark="b"]'),ui.dom,"1");
 activate(ui.root.querySelector('[data-part-mark="c"]'),ui.dom,"3");
 assert.equal(ui.latest.score,5);
 assert.equal(ui.latest.scoreSource,"parts");
 assert.equal(ui.latest.working,"old","Existing working should not be lost");
 ui.root.querySelector("#clear-part-breakdown").click();
 assert.equal(ui.latest.score,undefined);
 assert.equal(ui.root.querySelector("#question-finish-badge").dataset.finished,"false");
 ui.dom.window.close();
});
test("manual total stays sufficient when detailed marking is not opened",()=>{
 const ui=setup({status:"P"});
 const input=ui.root.querySelector("#self-mark-input");
 activate(input,ui.dom,"0");
 assert.equal(ui.latest.score,0);
 assert.equal(ui.latest.scoreSource,"overall");
 assert.equal(ui.latest.partMarks,undefined);
 assert.equal(ui.root.querySelector("#question-finish-badge").dataset.finished,"true");
 assert.equal(ui.root.querySelector("#mark-by-parts").open,false);
 ui.root.querySelector("#clear-self-mark").click();
 assert.equal(ui.root.querySelector("#question-finish-badge").dataset.finished,"false");
 assert.equal(ui.latest.status,"P");
 ui.dom.window.close();
});
