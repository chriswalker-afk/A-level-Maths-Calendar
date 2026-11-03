import test from 'node:test';
import assert from 'node:assert/strict';
import {programmeOne,programmeTwo} from '../src/data/programmes.js';
import {siteConfig} from '../src/config.js';
import {week01Questions} from '../src/data/week01.js';
import {week02Questions} from '../src/data/week02.js';
import {week03Questions} from '../src/data/week03.js';
import {week04Questions} from '../src/data/week04.js';
import {week05Questions} from '../src/data/week05.js';
import {week06Questions} from '../src/data/week06.js';

const coreGroups=['R','P','M','A'];
const expected={
 R:{n:10,marks:20,minutes:30},
 P:{n:3,marks:30,minutes:70},
 M:{n:2,marks:26,minutes:70},
 A:{n:3,marks:22,minutes:50},
 T:{n:3,marks:32,minutes:45},
 X:{n:1,marks:14,minutes:40}
};

test('two programmes are distinct and correctly sized',()=>{
 assert.equal(programmeOne.weeks.length,10);
 assert.equal(programmeTwo.weekCount,20);
 assert.equal(programmeTwo.startDate,'2027-02-01');
 assert.equal(programmeTwo.endDate,'2027-06-16');
});
test('exactly Weeks 1–6 are authored and released',()=>{
 assert.equal(siteConfig.stage1.releaseMode,'manual');
 assert.equal(siteConfig.stage1.releasedWeeks,6);
 assert.ok(programmeOne.weeks[0].hasPublishedContent);
 assert.equal(programmeOne.weeks[1].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[2].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[3].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[4].hasPublishedContent,true);
 assert.equal(programmeOne.weeks[5].hasPublishedContent,true);
 assert.ok(programmeOne.weeks.slice(6).every(w=>!w.hasPublishedContent));
 assert.equal(week02Questions.length,22);
 assert.equal(week03Questions.length,22);
 assert.equal(week04Questions.length,22);
 assert.equal(week05Questions.length,22);
 assert.equal(week06Questions.length,22);
 assert.equal(siteConfig.stage2.published,false);
});
test('complete four-hour Week 1 core, recommended timed set and optional extension',()=>{
 const core=week01Questions.filter(q=>coreGroups.includes(q.section));
 assert.equal(core.length,18);
 assert.equal(core.reduce((sum,q)=>sum+q.marks,0),98);
 assert.equal(week01Questions.length,22);
 for(const [section,exp] of Object.entries(expected)){
  const questions=week01Questions.filter(q=>q.section===section);
  assert.equal(questions.length,exp.n,section+' number of questions');
  assert.equal(questions.reduce((sum,q)=>sum+q.marks,0),exp.marks,section+' mark total');
  assert.ok(questions.reduce((sum,q)=>sum+q.minutes,0)<=exp.minutes,section+' time budget');
  assert.deepEqual(questions.map(q=>q.id),questions.map((q,i)=>'W01-'+section+(i+1)),section+' contiguous IDs');
 }
 assert.equal(new Set(week01Questions.map(q=>q.id)).size,22);
});
test('all questions have verified mark allocations and full support',()=>{
 for(const q of week01Questions){
  assert.match(q.id,/^W01-[RPMATX]\d+$/);
  assert.ok(q.title&&q.stem&&q.answer&&q.hint&&q.misconception&&q.reflection,q.id);
  assert.ok(q.minutes>0&&q.marks>0,q.id);
  assert.ok(Array.isArray(q.steps)&&q.steps.length>=2,q.id+' steps');
  assert.equal(q.parts.reduce((sum,p)=>sum+p[1],0),q.marks,q.id+' parts');
  assert.equal(Object.values(q.ao).reduce((sum,n)=>sum+n,0),q.marks,q.id+' AOs');
  assert.ok(Array.isArray(q.topics)&&q.topics.length>0,q.id+' tags');
 }
});
test('maths notation uses real single-backslash MathJax delimiters',()=>{
 const slash=String.fromCharCode(92);
 const open=slash+'(',close=slash+')';
 for(const q of week01Questions){
  const texts=[q.stem,q.answer,q.hint,...q.parts.map(p=>p[0]),...q.steps];
  if(q.table){
   assert.equal(q.table.rows.every(r=>r.length===q.table.header.length),true,q.id+' table dimensions');
   texts.push(...q.table.header,...q.table.rows.flat());
  }
  for(const s of texts){
   assert.ok(!s.includes(slash+slash),q.id+' has doubled TeX escaping');
   assert.equal(s.split(open).length-1,s.split(close).length-1,q.id+' unbalanced maths delimiters');
   const rest=s.replace(/\\\([\s\S]*?\\\)/g,'');
   assert.ok(!rest.includes(slash),q.id+' TeX command outside maths delimiters: '+rest);
   assert.ok(!s.includes('|---'),q.id+' raw Markdown table in stem');
  }
 }
});
test('official Pearson 2027 paper dates are configured',()=>{
 assert.deepEqual(programmeTwo.exams.map(x=>x.date),['2027-05-26','2027-06-09','2027-06-16']);
});
