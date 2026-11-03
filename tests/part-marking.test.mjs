import test from "node:test";
import assert from "node:assert/strict";
import {taggedWeek01Questions as questions} from "../src/data/tagged-questions.js";
import {isQuestionFinished} from "../src/question-assessment.js";
import {
 partKey,marksBreakdown,applyPartMark,applyOverallMark,clearAllMarks,clearBreakdown,verifiedPartEvidence
} from "../src/part-marking.js";

const q=questions.find(x=>x.id==="W01-P2"); // 2+3+5 marks
const mark=(rec,key,value)=>applyPartMark(rec,q,key,value);
test("part marking is optional and old total-only scores remain finished",()=>{
 const legacy={status:"I",score:7,working:"My method",workspace:{notes:"working"}};
 assert.equal(isQuestionFinished(legacy,10),true);
 assert.equal(verifiedPartEvidence(q,legacy).length,0,"Do not infer skill accuracy from a total");
 const partial=mark(legacy,"a",2).record;
 assert.equal(partial.score,7,"A partial breakdown must not delete a pre-existing score");
 assert.equal(partial.scoreSource,undefined);
 assert.equal(partial.partMarks.a,2);
 assert.equal(isQuestionFinished(partial,10),true);
 assert.equal(verifiedPartEvidence(q,partial).length,0);
 assert.deepEqual(partial.workspace,legacy.workspace);
});
test("all valid part scores, including zero, automatically calculate the total",()=>{
 let state={status:"P",hintSeen:true};
 state=mark(state,"a","2").record;
 state=mark(state,"b","0").record;
 assert.equal(isQuestionFinished(state,q.marks),false);
 state=mark(state,"c","4").record;
 assert.equal(state.score,6);
 assert.equal(state.scoreSource,"parts");
 assert.equal(isQuestionFinished(state,q.marks),true);
 const evidence=verifiedPartEvidence(q,state);
 assert.equal(evidence.length,3);
 assert.deepEqual(evidence.map(x=>x.earned),[2,0,4]);
 assert.deepEqual(evidence.map(x=>x.available),[2,3,5]);
 assert.equal(evidence.reduce((sum,x)=>sum+x.earned,0),state.score);
 assert.equal(evidence.reduce((sum,x)=>sum+x.available,0),q.marks);
 assert.ok(evidence.every(x=>x.primarySkillId));
 assert.equal(state.status,"P");
});
test("clearing or invalidating a derived part score clears completion, not notes",()=>{
 let state={status:"I",working:"old"};
 for(const key of ["a","b","c"])state=mark(state,key,"0").record;
 assert.equal(state.score,0);
 assert.equal(isQuestionFinished(state,10),true);
 state=mark(state,"b","").record;
 assert.equal(state.score,undefined);
 assert.equal(state.scoreSource,undefined);
 assert.equal(isQuestionFinished(state,10),false);
 assert.equal(verifiedPartEvidence(q,state).length,0);
 assert.equal(state.working,"old");
 const invalid=mark(state,"c","6");
 assert.equal(invalid.invalid,true);
 assert.equal(invalid.record.partMarks.c,undefined);
 assert.equal(invalid.record.working,"old");
});
test("scores cannot exceed the marks on that part or contain fractions",()=>{
 for(const bad of ["3.5","-1","3","NaN","0x1","1e0",""]) {
  const result=mark({},"a",bad);
  assert.equal(result.record.partMarks?.a,undefined);
  assert.equal(result.invalid,bad!=="");
 }
 assert.throws(()=>mark({},"z",1),/Unknown question part/);
 const all=marksBreakdown(q,{a:2,b:3,c:5});
 assert.equal(all.complete,true);assert.equal(all.subtotal,10);
 assert.equal(marksBreakdown(q,{a:2,b:3}).complete,false);
});
test("editing a whole-question score supersedes potentially inconsistent detail",()=>{
 let s=mark({},"a",2).record;
 s=mark(s,"b",1).record;
 s=mark(s,"c",1).record;
 assert.equal(s.scoreSource,"parts");
 const next=applyOverallMark(s,q,"7").record;
 assert.equal(next.scoreSource,"overall");
 assert.equal(next.score,7);
 assert.equal(next.partMarks,undefined);
 assert.equal(verifiedPartEvidence(q,next).length,0);
 const invalid=applyOverallMark(next,q,"20");
 assert.equal(invalid.invalid,true);
 assert.equal(invalid.record.score,undefined);
 assert.equal(isQuestionFinished(invalid.record,10),false);
});
test("clear mark and clear detailed breakdown affect only scoring",()=>{
 const original={score:4,scoreSource:"parts",partMarks:{a:1,b:2,c:1},status:"P",workspace:{notes:"saved"}};
 const cleared=clearAllMarks(original);
 assert.equal(cleared.score,undefined);assert.equal(cleared.partMarks,undefined);
 assert.equal(cleared.status,"P");assert.deepEqual(cleared.workspace,original.workspace);
 const emptied=clearBreakdown(original);
 assert.equal(emptied.score,undefined);assert.equal(emptied.partMarks,undefined);
 const legacy=clearBreakdown({score:9,partMarks:{a:2}});
 assert.equal(legacy.score,9,"Existing overall marks must survive clearing optional draft breakdown");
});
test("invalid or stale part-mark evidence is withheld",()=>{
 const complete={score:6,scoreSource:"parts",partMarks:{a:2,b:0,c:4}};
 assert.equal(verifiedPartEvidence(q,complete).length,3);
 assert.equal(verifiedPartEvidence(q,{...complete,score:7}).length,0);
 assert.equal(verifiedPartEvidence(q,{...complete,partMarks:{a:2,b:0}}).length,0);
 assert.equal(verifiedPartEvidence(q,{...complete,scoreSource:"overall"}).length,0);
 assert.equal(verifiedPartEvidence(q,{...complete,partMarks:{a:2,b:99,c:4}}).length,0);
 assert.equal(partKey(q,0),"a");
});
