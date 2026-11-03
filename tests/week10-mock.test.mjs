import test from "node:test";
import assert from "node:assert/strict";
import {week10Questions} from "../src/data/week10.js";
import {MOCK_PAPERS,mockPaperForSection,mockPaperTotals,mockTimerInfo,mockTimerUpdate,formatMockClock,mockRepairPriorities} from "../src/mock-week.js";
import {renderMockPaperBanner,renderMockReview} from "../src/mock-week-view.js";
import {firstWeekQuestionRoute,adjacentQuestionRoute,renderSectionNavigation} from "../src/calendar-view.js";
import {backupToJSON,parseProgressBackup,mergeProgressRecords} from "../src/progress-portability.js";

test("paper models are genuinely 100 marks / 120 min and 50 marks / 60 min",()=>{
 assert.equal(MOCK_PAPERS.P.marks,100);
 assert.equal(MOCK_PAPERS.P.duration,120);
 assert.equal(MOCK_PAPERS.A.marks,50);
 assert.equal(MOCK_PAPERS.A.duration,60);
 assert.equal(mockPaperForSection("R"),null);
 const pure=mockPaperTotals(week10Questions,{},"P");
 const applied=mockPaperTotals(week10Questions,{},"A");
 assert.deepEqual([pure.count,pure.possible,pure.finished,pure.complete],[12,100,0,false]);
 assert.deepEqual([applied.count,applied.possible,applied.finished,applied.complete],[10,50,0,false]);
 assert.deepEqual([applied.byCategory.statistics.marks,applied.byCategory.mechanics.marks],[25,25]);
 assert.equal(applied.earned,0);
 assert.equal(applied.credited,0);
});
test("unmarked questions remain unknown; a real zero is marked, and history contributes latest finished evidence",()=>{
 const records={
  "W10-P1":{score:0,status:"I"},
  "W10-P2":{status:"P",workspace:{notes:"No recorded mark"}},
  "W10-A1":{score:4,status:"P"},
  "W10-A6":{workspace:{notes:"In progress"},attemptHistory:[{score:2,status:"I",archivedAt:"2026-11-04T02:00:00.000Z"}]}
 };
 const p=mockPaperTotals(week10Questions,records,"P");
 assert.equal(p.finished,1);
 assert.equal(p.unmarked,11);
 assert.equal(p.earned,0);
 assert.equal(p.credited,6);
 assert.equal(p.complete,false);
 const a=mockPaperTotals(week10Questions,records,"A");
 assert.equal(a.finished,2);
 assert.equal(a.earned,6);
 assert.equal(a.credited,9);
 assert.equal(a.byCategory.statistics.earned,4);
 assert.equal(a.byCategory.mechanics.earned,2);
 assert.equal(mockRepairPriorities(week10Questions,records)[0].id,"W10-P1");
 const html=renderMockReview({questions:week10Questions,records});
 assert.match(html,/3 of 22 questions marked/);
 assert.match(html,/Not marked/);
 assert.doesNotMatch(html,/0 \/ 150 marks across both papers/);
 assert.match(html,/Statistics/);
 assert.match(html,/Mechanics/);
});
test("timer lifecycle is deterministic, persistable and never destroys other reflections",()=>{
 const initial={strength:"I can integrate",week10:{notes:{firstError:"Read the units"}}};
 const at="2026-11-04T01:00:00.000Z";
 const started=mockTimerUpdate(initial,"P","start",at);
 assert.equal(started.strength,"I can integrate");
 assert.equal(started.week10.notes.firstError,"Read the units");
 const fresh=mockTimerInfo(started,"P",Date.parse(at));
 assert.ok(fresh.active);
 assert.equal(fresh.remainingSeconds,7200);
 assert.equal(formatMockClock(fresh.remainingSeconds),"120:00");
 const oneMinute=mockTimerInfo(started,"P",Date.parse(at)+60*1000);
 assert.equal(oneMinute.remainingSeconds,7140);
 assert.equal(formatMockClock(oneMinute.remainingSeconds),"119:00");
 const overtime=mockTimerInfo(started,"P",Date.parse(at)+7300*1000);
 assert.ok(overtime.active&&overtime.overtime);
 assert.equal(overtime.remainingSeconds,0);
 const finished=mockTimerUpdate(started,"P","finish","2026-11-04T03:00:00.000Z");
 assert.ok(mockTimerInfo(finished,"P").ended);
 assert.ok(!mockTimerInfo(finished,"P").active);
 assert.throws(()=>mockTimerUpdate(initial,"P","finish",at),/No active/);
 const restarted=mockTimerUpdate(finished,"P","restart","2026-11-04T04:00:00.000Z");
 assert.ok(mockTimerInfo(restarted,"P",Date.parse("2026-11-04T04:00:00.000Z")).active);
 assert.equal(restarted.week10.notes.firstError,"Read the units");
});
test("paper navigation crosses P12 into A1 and the landing route starts directly at P1",()=>{
 assert.equal(firstWeekQuestionRoute(10,week10Questions),"#/study/10/P/0");
 assert.equal(adjacentQuestionRoute(10,week10Questions,"P",11,1),"#/study/10/A/0");
 assert.equal(adjacentQuestionRoute(10,week10Questions,"A",0,-1),"#/study/10/P/11");
 assert.equal(adjacentQuestionRoute(10,week10Questions,"A",9,1),null);
 const nav=renderSectionNavigation({week:10,section:"P",questions:week10Questions,labels:{P:"Pure mock",A:"Applied mock"}});
 assert.match(nav,/Pure mock/);
 assert.match(nav,/Applied mock/);
 assert.doesNotMatch(nav,/>Retrieval</);
});
test("timed banner describes locked help and review; user notes are escaped rather than injected",()=>{
 const state=mockTimerUpdate({},"P","start","2026-11-04T04:00:00.000Z");
 const html=renderMockPaperBanner({
  section:"P",questions:week10Questions,records:{},reflections:state
 });
 assert.match(html,/data-mock-action="finish"/);
 assert.match(html,/id="mock-clock"/);
 assert.match(html,/100 MARKS/);
 assert.match(html,/hides hints, worked solutions and self-marking/);
 assert.doesNotMatch(html,/#\/mock-review\/10/,"Review link stays hidden in timed sitting");
 const locked=renderMockReview({questions:week10Questions,records:{"W10-P1":{score:4}},reflections:state});
 assert.match(locked,/Finish the sitting before reviewing/);
 assert.doesNotMatch(locked,/4 \/ 6/);
 assert.doesNotMatch(locked,/mock-score-table/);
 const reviewed=renderMockReview({questions:week10Questions,records:{},reflections:{week10:{notes:{
  firstError:'<img src=x onerror="alert(1)">',repairMethod:"Use the derivative",reattemptPlan:"W10-P2"
 }}}});
 assert.doesNotMatch(reviewed,/<img src=x/);
 assert.match(reviewed,/&lt;img src=x/);
 assert.match(reviewed,/W10-P2/);
 assert.match(reviewed,/data-mock-note="firstError"/);
});
test("mock timer and diagnostic notes survive existing version-1 progress backup/restore",()=>{
 const original={
  "W01-R1":{score:2,status:"I",workspace:{notes:"Old work"}},
  "W10-P1":{score:0,status:"I"},
  reflections:mockTimerUpdate({week10:{notes:{firstError:"No domain stated"}}},"P","start","2026-11-04T01:00:00.000Z")
 };
 const json=backupToJSON(original,"2026-11-04T02:00:00.000Z");
 const parsed=parseProgressBackup(json);
 assert.deepEqual(parsed.data,original);
 const imported=mergeProgressRecords({},parsed.data,"use-imported");
 assert.deepEqual(imported.records,original);
});
