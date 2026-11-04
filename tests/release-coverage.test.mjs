import test from "node:test";
import assert from "node:assert/strict";
import {releaseCoverageAudit} from "../scripts/release-audit.mjs";

test("release audit covers all 301 published questions with correct 4/5/6-hour totals",()=>{
 const report=releaseCoverageAudit(),t=report.totals;
 assert.deepEqual(report.invalid,[],"All marked parts must be in-scope and linked");
 assert.equal(t.questions,301);
 assert.equal(t.essentialQuestions,247);
 assert.equal(t.marks,9*245+150);
 assert.equal(t.coreMarks,9*175+150);
 assert.equal(report.byWeek.length,10);
 assert.deepEqual(report.byWeek.map(w=>w.questions),[31,31,31,31,31,31,31,31,31,22]);
 assert.deepEqual(report.byWeek.map(w=>w.essential),[25,25,25,25,25,25,25,25,25,22]);
 assert.ok(t.parts>750,"Published content must have a substantial quantity of marked parts");
});
test("audit distinguishes direct skill evidence, connected practice, and unlinked skills without invented accuracy",()=>{
 const report=releaseCoverageAudit(),t=report.totals;
 assert.equal(report.label,"Question-link coverage, not learner accuracy");
 assert.ok(t.fullSpecificationSkills>=250,"Full 9MA0 student-facing catalogue must remain extensive");
 assert.ok(t.internalSkills<t.fullSpecificationSkills);
 assert.equal(report.byTopic.length,19);
 assert.equal(t.connectedOnly,t.linked-t.directlyAssessed);
 assert.equal(t.noPublishedLink,t.internalSkills-t.linked);
 assert.ok(t.directlyAssessed>0&&t.linked>=t.directlyAssessed);
 assert.ok(report.byTopic.some(t=>t.id==="M09"&&t.skills===0),
  "Year 2-only Moments are excluded from the internal exam");
 for(const t of report.byTopic){
  assert.ok(t.linked>=t.directlyAssessed&&t.skills>=t.linked,t.id);
  assert.ok(t.primaryParts>=t.directlyAssessed,t.id);
  assert.equal(t.connectedOnly.length+t.noPublishedLink.length,t.skills-t.directlyAssessed,t.id);
  assert.ok(t.connectedOnly.every(s=>!t.noPublishedLink.some(u=>u.id===s.id)));
 }
 assert.equal(report.byTopic.reduce((s,t)=>s+t.primaryMarks,0),9*245+150);
});
