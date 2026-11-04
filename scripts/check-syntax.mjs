/**
 * Complete syntax sweep. Check every source and test module automatically,
 * including future weekXX-expansion modules added after this release.
 * No stale hand-maintained file list or platform-specific find command.
 */
import {readdirSync} from "node:fs";
import {join,relative} from "node:path";
import {spawnSync} from "node:child_process";

function filesUnder(directory){
 const result=[];
 for(const item of readdirSync(directory,{withFileTypes:true})){
  const path=join(directory,item.name);
  if(item.isDirectory())result.push(...filesUnder(path));
  else if(item.isFile()&&/\.(?:mjs|js)$/.test(item.name))result.push(path);
 }
 return result;
}
const files=["src","tests","scripts"].flatMap(filesUnder).sort();
let failed=0;
for(const file of files){
 const result=spawnSync(process.execPath,["--check",file],{encoding:"utf8"});
 if(result.status!==0){
  failed++;
  console.error("Syntax invalid: "+relative(".",file));
  console.error((result.stderr||result.stdout||"Unknown parser failure").trim());
 }
}
console.log("JavaScript modules syntax-checked: "+files.length+", errors: "+failed);
if(failed)process.exitCode=1;
