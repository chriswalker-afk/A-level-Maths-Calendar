import test from "node:test";
import assert from "node:assert/strict";
import {isWeekReleased} from "../src/publication.js";
import {programmeOne} from "../src/data/programmes.js";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions} from "../src/data/tagged-questions.js";
import {getPublishedPracticeForSkill} from "../src/data/skill-practice-index.js";

const weeks=programmeOne.weeks;
const examples={1:taggedWeek01Questions,2:taggedWeek02Questions,3:taggedWeek03Questions};

test("the calendar and topic index publish the same three complete weeks",()=>{
 assert.equal(isWeekReleased(1,examples[1]),true);
 assert.equal(isWeekReleased(2,examples[2]),true);
 assert.equal(isWeekReleased(3,examples[3]),true);
 for(const n of [4,5,6,7,8,9,10])assert.equal(isWeekReleased(n,[]),false);
 assert.ok(getPublishedPracticeForSkill("P03-007").some(q=>q.week===2));
 assert.ok(getPublishedPracticeForSkill("P02-022").some(q=>q.week===1));
});
test("teacher control works independently of question file presence",()=>{
 const stage={releaseMode:"manual",releasedWeeks:1};
 assert.equal(isWeekReleased(1,examples[1],{stage,weeks}),true);
 assert.equal(isWeekReleased(2,examples[2],{stage,weeks}),false);
 assert.equal(isWeekReleased(2,[],{stage:{releaseMode:"manual",releasedWeeks:3},weeks}),false);
 assert.equal(isWeekReleased(4,examples[1],{stage:{releaseMode:"manual",releasedWeeks:4},weeks}),false,
  "The week is still locked if content has not been authored");
 assert.equal(isWeekReleased(0,examples[1],{stage,weeks}),false);
});
test("scheduled publication uses Brunei midnight, not the student's device timezone",()=>{
 const stage={releaseMode:"scheduled",startDate:"2026-11-09"};
 const start=Date.parse("2026-11-09T00:00:00+08:00");
 assert.equal(isWeekReleased(1,examples[1],{stage,weeks,now:start-1}),false);
 assert.equal(isWeekReleased(1,examples[1],{stage,weeks,now:start}),true);
 assert.equal(isWeekReleased(2,examples[2],{stage,weeks,now:start+7*86400000-1}),false);
 assert.equal(isWeekReleased(2,examples[2],{stage,weeks,now:start+7*86400000}),true);
 assert.equal(isWeekReleased(2,examples[2],{stage:{releaseMode:"scheduled",startDate:"not-a-date"},weeks,now:start}),false);
 assert.equal(isWeekReleased(2,examples[2],{stage:{releaseMode:"disabled"},weeks,now:start}),false);
});
