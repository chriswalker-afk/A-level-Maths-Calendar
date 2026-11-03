import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {JSDOM} from "jsdom";
import {INK_COLOURS,normalizeWorkspace,normalizeStroke} from "../src/working-state.js";
import {WORKSPACE_HTML} from "../src/working-space-template.js";

const root=new URL("../",import.meta.url);
const read=path=>readFileSync(new URL(path,root),"utf8");
const polish=read("styles/identity-polish.css");
const legacy=read("styles.css");
const index=read("index.html");

test("the finishing layer loads after all older styles and includes design tokens",()=>{
 const old=index.indexOf('href="./styles.css"');
 const current=index.indexOf('href="./styles/identity-polish.css"');
 assert.ok(old>0&&current>old,"The finishing layer must be the final loaded stylesheet");
 assert.ok(polish.length>12000);
 for(const token of [
  "--editorial-ink","--editorial-paper","--editorial-coral","--editorial-lime",
  "--editorial-cobalt","--editorial-rule","--editorial-font-display","--editorial-font-index"
 ])assert.ok(polish.includes(token+":"),"Design token missing: "+token);
 assert.ok(legacy.includes("Identity system 01"),"Do not remove the original calendar system");
 assert.doesNotMatch(polish,/@import\s+url\(/,"Styles must not load external resources");
});

test("the finishing layer parses as CSS, including responsive and print rules",()=>{
 const dom=new JSDOM('<!doctype html><head><style>'+polish+'</style></head><body></body>');
 const sheet=dom.window.document.styleSheets[0];
 assert.ok(sheet,"Expected a CSS stylesheet");
 assert.ok(sheet.cssRules.length>130,"Expected comprehensive component coverage");
 const media=[...sheet.cssRules].filter(rule=>rule.type===4);
 assert.ok(media.some(rule=>rule.conditionText?.includes("730px")));
 assert.ok(media.some(rule=>rule.conditionText?.includes("450px")));
 assert.ok(media.some(rule=>rule.conditionText?.includes("reduced-motion")));
 assert.ok(media.some(rule=>rule.conditionText==="print"));
 dom.window.close();
});

test("every major site surface receives explicit final-layer styles",()=>{
 const groups={
  calendar_base:[".btn",".metric",".banner",".warning",".tab[aria-selected=true]"],
  question:[".study-workbench .paper.exam-sheet",".helper.solution",".data-table"],
  working:[".student-workspace",".work-mode-tabs button[aria-selected=true]",
   ".work-notes",".maths-mathfield",".maths-row",".maths-quickbar button",
   ".ink-toolset",".ink-colour[aria-pressed=true]",".ink-canvas-wrap.has-grid"],
  marking:[".finish-assessment",".finish-state[data-finished=true]",
   ".assessment-choice[aria-pressed=true]",".finish-score",".mark-by-parts",
   ".detail-part-row",".question-skill-links"],
  retry:[".reattempt-panel",".attempt-trend",".attempt-history-item"],
  syllabus:[".spec-hero",".spec-scope-options a.chosen",
   ".spec-strand-buttons button[aria-pressed=true]",".spec-topic-card",
   ".spec-skill[open]",".spec-skill-performance"],
  progress:[".progress-spec-section",".spec-progress-pulse>div",
   ".progress-topic-card",".spec-topic-evidence",".spec-track"],
  recommendations:[".revision-suggestions",".revision-suggestion",".revision-suggestion-kind"],
  portability:[".progress-transfer",".transfer-import-preview",
   ".transfer-import-preview label:has(input:checked)"],
  guidance:[".guide-instructions>div",".guide-ao>div",".final-page .exam"]
 };
 for(const [group,selectors] of Object.entries(groups))
  for(const selector of selectors)
   assert.ok(polish.includes(selector),"Missing final style for "+group+": "+selector);
});

test("new pen swatches match the design system, with exact legacy stroke support",()=>{
 assert.deepEqual(INK_COLOURS.slice(0,3),["#17262e","#2948b9","#e65c3e"]);
 const doc=new JSDOM('<!doctype html><main>'+WORKSPACE_HTML+'</main>');
 const buttons=[...doc.window.document.querySelectorAll("[data-ink-colour]")];
 assert.deepEqual(buttons.map(button=>button.dataset.inkColour),INK_COLOURS.slice(0,3));
 assert.deepEqual(buttons.map(button=>button.getAttribute("aria-label")),
  ["Graphite ink","Cobalt blue ink","Coral ink"]);
 assert.equal(buttons[0].getAttribute("aria-pressed"),"true");
 for(const [legacyColour,newColour] of [
  ["#183a46","#17262e"],["#197a70","#2948b9"],["#ba554a","#e65c3e"]
 ]){
  const stroke={color:legacyColour,width:4,points:[[0.1,0.2],[0.9,0.7]]};
  const normalized=normalizeWorkspace({colour:legacyColour,strokes:[stroke]});
  assert.equal(normalized.colour,newColour,"Use new colour for the active pen");
  assert.deepEqual(normalized.strokes[0],stroke,"Previously saved drawing must be unchanged");
  assert.equal(normalizeStroke(stroke).color,legacyColour);
 }
 doc.window.close();
});

test("polish preserves keyboard states and reduces motion where requested",()=>{
 assert.match(polish,/:focus-visible\s*\{/);
 assert.match(polish,/\[aria-pressed=true\]/);
 assert.match(polish,/\[aria-selected=true\]/);
 assert.match(polish,/prefers-reduced-motion:\s*reduce/);
 assert.match(polish,/@media print/);
 assert.ok(!polish.includes("!important;\n  .work-panel[hidden]"),"Tabs must continue using native hidden state");
});
