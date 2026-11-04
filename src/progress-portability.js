/**
 * Pass 4D: versioned, offline student progress backups.
 *
 * Import is entirely client-side. No network requests, accounts or cloud
 * storage. Existing data is never replaced without a deliberate option.
 * Keep-current is the safe default for matching question records.
 */
export const BACKUP_FORMAT="alevel-maths-calendar-progress";
export const BACKUP_VERSION=1;
export const MAX_BACKUP_SIZE=10*1024*1024; // 10 MiB for notes + ink
const isObject=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
const safeTopKey=x=>x==="reflections"||/^W\d{2,3}-[A-Z]\d{1,3}$/.test(x)||
 /^TP-(?:P(?:0[1-9]|10)|S0[1-5]|M0[6-9])-AO[123]$/.test(x);
const forbidden=new Set(["__proto__","prototype","constructor"]);
const invalid=(message)=>{throw new Error(message);};
function auditTree(value,depth=0,counters={nodes:0}){
 if(++counters.nodes>250000)invalid("This backup contains more data than can be checked safely.");
 if(depth>18)invalid("This backup is nested too deeply.");
 if(value===null||typeof value==="boolean")return;
 if(typeof value==="number"){
  if(!Number.isFinite(value))invalid("The backup has a non-finite number.");
  return;
 }
 if(typeof value==="string"){
  if(value.length>1250000)invalid("One saved text/drawing entry is too large.");
  return;
 }
 if(Array.isArray(value)){
  if(value.length>110000)invalid("One saved array is too large.");
  for(const child of value)auditTree(child,depth+1,counters);
  return;
 }
 if(!isObject(value))invalid("The backup contains an unsupported data type.");
 for(const [key,item] of Object.entries(value)){
  if(forbidden.has(key)||key.length>100)invalid("The backup contains an unsafe field name.");
  auditTree(item,depth+1,counters);
 }
}
export function validateProgressRecords(data){
 if(!isObject(data))invalid("The backup's progress must be a collection of question records.");
 if(Object.keys(data).length>2000)invalid("The backup contains too many question records.");
 for(const [key,value] of Object.entries(data)){
  if(!safeTopKey(key))invalid("Unsupported progress key in backup: "+key.slice(0,100));
  if(!isObject(value))invalid("Invalid saved record for "+key);
  if(key!=="reflections"){
   if(value.attemptHistory!==undefined){
    if(!Array.isArray(value.attemptHistory)||value.attemptHistory.length>20)
     invalid("Too many archived attempts in "+key);
    for(const attempt of value.attemptHistory){
     if(!isObject(attempt)||Object.hasOwn(attempt,"attemptHistory"))
      invalid("Invalid nested attempt history in "+key);
    }
   }
  }
 }
 auditTree(data);
 return data;
}
export function createProgressBackup(records={},now=new Date().toISOString()){
 if(Number.isNaN(Date.parse(now)))invalid("The export date is invalid.");
 const data=validateProgressRecords(records);
 return {format:BACKUP_FORMAT,version:BACKUP_VERSION,
  exportedAt:now,notes:"Contains student-marked scores, written working, equations and any drawings.",data};
}
export function backupToJSON(records,now){
 const json=JSON.stringify(createProgressBackup(records,now));
 if(json.length>MAX_BACKUP_SIZE)invalid("This backup is larger than 10 MiB. Please reduce the drawing history or contact your teacher.");
 return json;
}
export function parseProgressBackup(raw){
 if(typeof raw!=="string"||raw.length>MAX_BACKUP_SIZE||raw.length===0)
  invalid("Choose a nonempty progress backup smaller than 10 MiB.");
 let backup;
 try{backup=JSON.parse(raw)}catch{invalid("This file is not valid JSON.");}
 if(!isObject(backup)||backup.format!==BACKUP_FORMAT)
  invalid("This is not an A Level Maths Calendar progress backup.");
 if(backup.version!==BACKUP_VERSION)
  invalid("Unsupported backup version. This site can import version "+BACKUP_VERSION+".");
 if(typeof backup.exportedAt!=="string"||Number.isNaN(Date.parse(backup.exportedAt)))
  invalid("The backup has no valid export date.");
 validateProgressRecords(backup.data);
 return backup;
}
export function summarizeProgressRecords(data){
 validateProgressRecords(data);
 const qs=Object.entries(data).filter(([k])=>k!=="reflections");
 return {
  questions:qs.length,
  scored:qs.filter(([,r])=>Number.isInteger(r.score)&&r.score>=0).length,
  history:qs.reduce((sum,[,r])=>sum+(r.attemptHistory?.length||0),0),
  drawings:qs.filter(([,r])=>(r.workspace?.strokes?.length||0)>0||
    (r.attemptHistory||[]).some(a=>(a.workspace?.strokes?.length||0)>0)).length,
  reflections:Object.hasOwn(data,"reflections")
 };
}
/**
 * Merge is intentionally record-level, not deep merge: a partial workspace
 * must never be silently spliced together with mismatched marks/history.
 * Modes: keep-current (safe default); use-imported; replace-all.
 */
export function mergeProgressRecords(current,incoming,mode="keep-current"){
 validateProgressRecords(current);validateProgressRecords(incoming);
 if(!["keep-current","use-imported","replace-all"].includes(mode))
  invalid("Choose an explicit import mode.");
 const merged=mode==="replace-all"?{}:{...current};
 const counters={added:0,replaced:0,kept:0,removed:0};
 if(mode==="replace-all"){
  counters.removed=Object.keys(current).filter(key=>!Object.hasOwn(incoming,key)).length;
 }
 for(const [key,value] of Object.entries(incoming)){
  if(Object.hasOwn(current,key)){
   if(mode==="keep-current"){
    counters.kept++;continue;
   }
   counters.replaced++;
  }else counters.added++;
  Object.defineProperty(merged,key,{value,enumerable:true,configurable:true,writable:true});
 }
 return {records:merged,counts:counters};
}
