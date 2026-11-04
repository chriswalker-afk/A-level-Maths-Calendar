import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {WORKSPACE_HTML} from "../src/working-space-template.js";
import {renderCalendarHome,renderSectionNavigation} from "../src/calendar-view.js";
import {mountQuestionAssessment} from "../src/question-assessment.js";

test("workspace is concise without losing controls or an accessible notes label",()=>{
  const doc=new JSDOM(WORKSPACE_HTML).window.document;
  assert.equal(doc.querySelector("#work-heading")?.textContent,"My working space");
  assert.equal(doc.querySelector("#work-notes")?.getAttribute("aria-label"),"Written working and explanations");
  assert.ok(doc.querySelector("#work-notes")?.getAttribute("placeholder"));
  assert.ok(doc.querySelector("#work-save-status[role=status][aria-live=polite]"));
  assert.equal(doc.querySelector("#work-expand"),null,"Expansion button is removed");
  assert.equal(doc.querySelectorAll(".work-mode-tabs [role=tab]").length,3);
  assert.ok(doc.querySelector("#maths-add-line"));
  assert.ok(doc.querySelector("#maths-copy"));
  assert.ok(doc.querySelector("#working-ink[aria-label]"));
  assert.doesNotMatch(WORKSPACE_HTML,/WORKSPACE \/ NOTES|Notes, maths steps and drawings are saved separately|Written working and explanations<\/label>|Use this space for calculations and reasoning|Line-by-line method/);
});

test("calendar actions stay visible without repeated instruction ribbons",()=>{
  const home=renderCalendarHome({weeks:[{number:1,title:"Algebra"}],getStatus:()=>({released:true,total:2,done:0})});
  assert.match(home,/planner-cell is-open/);
  assert.match(home,/ESSENTIAL MARKED/);
  assert.doesNotMatch(home,/SELECT AN OPEN WEEK TO START|SELF-MARK · SAVE · RETURN/);
  const nav=renderSectionNavigation({week:1,section:"R",questions:[{section:"R",id:"W01-R1",title:"Test"}]});
  assert.match(nav,/THIS WEEK/);
  assert.doesNotMatch(nav,/Switch sections/);
});

test("marking still explains that a zero mark finishes the question",()=>{
  const doc=new JSDOM("<div id='mount'></div>").window.document;
  mountQuestionAssessment(doc.querySelector("#mount"),{question:{id:"W01-R1",marks:3,parts:[["Compute",3]]},record:{}});
  assert.match(doc.querySelector("#finish-assessment-title").textContent,/Check, mark & finish/);
  assert.match(doc.querySelector(".finish-step-content p").textContent,/including 0/);
  assert.ok(doc.querySelector("#self-mark-input").getAttribute("aria-describedby"));
  assert.ok(doc.querySelector("#finish-save-status[role=status]"));
  assert.doesNotMatch(doc.querySelector(".finish-heading").textContent,/When you finish the question|Compare your working with the solution/);
});
