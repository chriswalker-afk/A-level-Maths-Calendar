/**
 * Resolve a published question's mark-bearing parts to permanent specification
 * skill IDs. One primary skill may earn a part's marks; secondary skills are
 * connections/exposure only, so a single mark is never counted multiple times.
 */
import {getSpecSkill} from "./specification.js";
import {week01Questions} from "./week01.js";
import {week01SkillMap} from "./week01-skill-map.js";
import {week02Questions} from "./week02.js";
import {week02SkillMap} from "./week02-skill-map.js";
import {week03Questions} from "./week03.js";
import {week03SkillMap} from "./week03-skill-map.js";
import {week04Questions} from "./week04.js";
import {week04SkillMap} from "./week04-skill-map.js";
import {week05Questions} from "./week05.js";
import {week05SkillMap} from "./week05-skill-map.js";
import {week06Questions} from "./week06.js";
import {week06SkillMap} from "./week06-skill-map.js";
import {week07Questions} from "./week07.js";
import {week07SkillMap} from "./week07-skill-map.js";
import {week08Questions} from "./week08.js";
import {week08SkillMap} from "./week08-skill-map.js";
import {week09Questions} from "./week09.js";
import {week09SkillMap} from "./week09-skill-map.js";
import {week10Questions} from "./week10.js";
import {week10SkillMap} from "./week10-skill-map.js";

const ALPHABET="abcdefghijklmnopqrstuvwxyz";

export function linkQuestionParts(questions, links, lookup=getSpecSkill){
 const authoredIds=new Set(questions.map(q=>q.id));
 const taggedIds=Object.keys(links);
 for(const id of taggedIds){
  if(!authoredIds.has(id))throw new Error("Tag map includes unknown question: "+id);
 }
 return questions.map(q=>{
  const tagged=links[q.id];
  if(!Array.isArray(tagged)||tagged.length!==q.parts.length)
   throw new Error("Missing or incorrect number of part skill tags: "+q.id);
  if(q.parts.length>ALPHABET.length)throw new Error("Too many parts for stable labels: "+q.id);
  const parts=q.parts.map((part,index)=>{
   const spec=tagged[index];
   if(!Array.isArray(spec)||typeof spec[0]!=="string")
    throw new Error("Missing primary skill on "+q.id+" part "+(index+1));
   const primary=lookup(spec[0]);
   if(!primary)throw new Error("Unknown primary skill "+spec[0]+" at "+q.id);
   const secondary=spec[1]??[];
   if(!Array.isArray(secondary)||new Set(secondary).size!==secondary.length)
    throw new Error("Invalid or repeated secondary tags at "+q.id);
   for(const id of secondary){
    if(id===primary.id)throw new Error("Primary skill also marked secondary: "+q.id);
    const secondarySkill=lookup(id);
    if(!secondarySkill)throw new Error("Unknown secondary skill "+id+" at "+q.id);
    if(secondarySkill.scope!=="internal")throw new Error("Year 2-only secondary skill in internal exam: "+q.id);
   }
   if(!primary||primary.scope!=="internal")
    throw new Error("Published question contains Year 2-only primary skill: "+q.id);
   return [part[0],part[1],{
    key:ALPHABET[index],
    primarySkillId:primary.id,
    secondarySkillIds:[...secondary]
   }];
  });
  const primarySkillIds=[...new Set(parts.map(p=>p[2].primarySkillId))];
  const connectedSkillIds=[...new Set(parts.flatMap(p=>p[2].secondarySkillIds))].filter(id=>!primarySkillIds.includes(id));
  return {...q,parts,primarySkillIds,connectedSkillIds};
 });
}
export const taggedWeek01Questions=linkQuestionParts(week01Questions,week01SkillMap);
export const taggedWeek02Questions=linkQuestionParts(week02Questions,week02SkillMap);
export const taggedWeek03Questions=linkQuestionParts(week03Questions,week03SkillMap);
export const taggedWeek04Questions=linkQuestionParts(week04Questions,week04SkillMap);
export const taggedWeek05Questions=linkQuestionParts(week05Questions,week05SkillMap);
export const taggedWeek06Questions=linkQuestionParts(week06Questions,week06SkillMap);
export const taggedWeek07Questions=linkQuestionParts(week07Questions,week07SkillMap);
export const taggedWeek08Questions=linkQuestionParts(week08Questions,week08SkillMap);
export const taggedWeek09Questions=linkQuestionParts(week09Questions,week09SkillMap);
export const taggedWeek10Questions=linkQuestionParts(week10Questions,week10SkillMap);
