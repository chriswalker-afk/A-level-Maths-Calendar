import test from "node:test";
import assert from "node:assert/strict";
import {
 BACKUP_FORMAT,BACKUP_VERSION,createProgressBackup,backupToJSON,
 parseProgressBackup,summarizeProgressRecords,mergeProgressRecords,
 validateProgressRecords
} from "../src/progress-portability.js";

const sample={
 "W01-P2":{
  score:6,scoreSource:"parts",partMarks:{a:2,b:0,c:4},status:"I",
  workspace:{
   mode:"draw",notes:"I used a function transformation",
   mathLines:[{id:"step-1",latex:"x=\\frac{1}{2}",reason:"correct"}],
   strokes:[{color:"#197a70",width:4,points:[[0.2,0.3],[0.9,0.4]]}]
  },
  attemptHistory:[{score:2,status:"P",working:"Original method",
   workspace:{notes:"Old notes",mathLines:[{latex:"a^2+b^2",reason:""}],strokes:[]},
   archivedAt:"2026-11-03T09:00:00.000Z"}]
 },
 "W01-R2":{score:0,status:"P",working:"Check the discriminant"},
 reflections:{strength:"I can use the product rule",strategy:"Start with a diagram"}
};
const now="2026-11-03T10:00:00.000Z";
test("versioned backups round-trip marks, legacy text, maths lines, ink and reattempts",()=>{
 const json=backupToJSON(sample,now);
 const parsed=parseProgressBackup(json);
 assert.equal(parsed.format,BACKUP_FORMAT);
 assert.equal(parsed.version,BACKUP_VERSION);
 assert.equal(parsed.exportedAt,now);
 assert.deepEqual(parsed.data,sample);
 assert.equal(parsed.data["W01-R2"].score,0);
 const counts=summarizeProgressRecords(parsed.data);
 assert.equal(counts.questions,2);
 assert.equal(counts.scored,2);
 assert.equal(counts.history,1);
 assert.equal(counts.drawings,1);
 assert.equal(counts.reflections,true);
 const copy=createProgressBackup(sample,now);
 assert.deepEqual(copy.data,sample);
});
test("default import retains every existing matching record and adds only missing ones",()=>{
 const local={
  "W01-R2":{score:2,status:"I",workspace:{notes:"DO NOT OVERWRITE"}},
  reflections:{strength:"Local strength"}
 };
 const result=mergeProgressRecords(local,sample);
 assert.equal(result.records["W01-R2"].score,2);
 assert.equal(result.records["W01-R2"].workspace.notes,"DO NOT OVERWRITE");
 assert.deepEqual(result.records.reflections,local.reflections);
 assert.deepEqual(result.records["W01-P2"],sample["W01-P2"]);
 assert.deepEqual(result.counts,{added:1,replaced:0,kept:2,removed:0});
 assert.deepEqual(local["W01-R2"].score,2);
});
test("explicit import modes allow replacement of matching records or entire progress",()=>{
 const local={
  "W01-R2":{score:2},
  "W02-P1":{score:8}
 };
 const preferred=mergeProgressRecords(local,sample,"use-imported");
 assert.equal(preferred.records["W01-R2"].score,0);
 assert.deepEqual(preferred.records["W02-P1"],local["W02-P1"]);
 assert.equal(preferred.counts.replaced,1);
 assert.equal(preferred.counts.added,2);
 const replaced=mergeProgressRecords(local,sample,"replace-all");
 assert.equal(replaced.records["W02-P1"],undefined);
 assert.equal(replaced.records["W01-P2"].workspace.strokes.length,1);
 assert.deepEqual(replaced.counts,{added:2,replaced:1,kept:0,removed:1});
 assert.deepEqual(local["W02-P1"],{score:8});
 assert.throws(()=>mergeProgressRecords(local,sample,"automatic-replace"),/explicit import mode/);
});
test("backup parser rejects wrong JSON, version, shape or forged formats",()=>{
 assert.throws(()=>parseProgressBackup(""),/nonempty/);
 assert.throws(()=>parseProgressBackup("{not json"),/valid JSON/);
 assert.throws(()=>parseProgressBackup(JSON.stringify({format:"imposter",version:1,data:{}})),/not an A Level/);
 assert.throws(()=>parseProgressBackup(JSON.stringify({format:BACKUP_FORMAT,version:7,exportedAt:now,data:{}})),/Unsupported backup version/);
 assert.throws(()=>parseProgressBackup(JSON.stringify({format:BACKUP_FORMAT,version:1,exportedAt:"bad",data:{}})),/no valid export date/);
 assert.throws(()=>parseProgressBackup(JSON.stringify({format:BACKUP_FORMAT,version:1,exportedAt:now,data:null})),/collection/);
});
test("import rejects prototype-pollution names and malformed nested histories",()=>{
 const injected=JSON.parse('{"W01-R1":{"__proto__":{"admin":true}}}');
 assert.throws(()=>validateProgressRecords(injected),/unsafe field name/);
 assert.throws(()=>validateProgressRecords({"constructor":{score:4}}),/Unsupported progress key/);
 assert.throws(()=>validateProgressRecords({"W01-R1":{attemptHistory:[{attemptHistory:[]} ]}}),/Invalid nested attempt history/);
 assert.throws(()=>validateProgressRecords({"W01-R1":{attemptHistory:"not history"}}),/Too many archived attempts/);
 assert.equal({}.admin,undefined);
});
test("future valid week IDs are preserved; invalid or oversized data is not imported",()=>{
 const future={"W29-M11":{score:4,workspace:{notes:"Later topic"}}};
 const json=backupToJSON(future,now);
 assert.deepEqual(parseProgressBackup(json).data,future);
 assert.throws(()=>validateProgressRecords({"random-key":{score:2}}),/Unsupported progress key/);
 assert.throws(()=>parseProgressBackup("x".repeat(11*1024*1024)),/smaller than 10 MiB/);
});
