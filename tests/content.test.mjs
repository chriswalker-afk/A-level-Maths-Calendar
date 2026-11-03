import test from 'node:test';
import assert from 'node:assert/strict';
import {programmeOne,programmeTwo} from '../src/data/programmes.js';
import {siteConfig} from '../src/config.js';
import {week01Questions} from '../src/data/week01.js';

test('programme stages are distinct and have the intended lengths',()=>{
 assert.equal(programmeOne.weeks.length,10);
 assert.equal(programmeTwo.weekCount,20);
 assert.equal(programmeTwo.startDate,'2027-02-01');
 assert.equal(programmeTwo.endDate,'2027-06-16');
});
test('future weeks are only previews',()=>{
 assert.equal(siteConfig.stage1.releaseMode,'manual');
 assert.equal(siteConfig.stage1.releasedWeeks,1);
 assert.ok(programmeOne.weeks[0].hasPublishedContent);
 assert.ok(programmeOne.weeks.slice(1).every(w=>!w.hasPublishedContent));
 assert.equal(siteConfig.stage2.published,false);
});
test('the first release is an explicitly partial pilot',()=>{
 assert.equal(week01Questions.length,9);
 assert.equal(week01Questions.reduce((sum,q)=>sum+q.marks,0),50);
 assert.ok(new Set(week01Questions.map(q=>q.id)).size===week01Questions.length);
 assert.deepEqual(new Set(week01Questions.map(q=>q.section)),new Set(['R','P','M','A']));
});
test('pilot questions have complete self-marking resources',()=>{
 for(const q of week01Questions){
  assert.match(q.id,/^W01-[RPMA]\d+$/);
  assert.ok(q.title&&q.stem&&q.answer&&q.hint&&q.misconception&&q.reflection,q.id);
  assert.ok(q.minutes>0&&q.marks>0,q.id);
  assert.ok(q.steps.length>=2,q.id);
  assert.equal(q.parts.reduce((sum,p)=>sum+p[1],0),q.marks,q.id);
  assert.equal(Object.values(q.ao).reduce((sum,n)=>sum+n,0),q.marks,q.id);
 }
});
test('published 2027 timetable matches configured programme',()=>{
 assert.deepEqual(programmeTwo.exams.map(x=>x.date),['2027-05-26','2027-06-09','2027-06-16']);
});
