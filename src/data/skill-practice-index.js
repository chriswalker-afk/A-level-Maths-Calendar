/**
 * Read-only, publication-safe connections from 9MA0 skills to released
 * exercises. This is navigation, NOT measured proficiency or accuracy.
 *
 * Add a future week's validated question data only when it is published.
 */
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,taggedWeek04Questions,taggedWeek05Questions} from "./tagged-questions.js";
import {isWeekReleased} from "../publication.js";

export function createPracticeIndex(publishedSets){
 const lookup=new Map();
 for(const set of publishedSets){
  const groups={};
  for(const q of set.questions){
   const section=q.section;
   const index=groups[section]??0;
   groups[section]=index+1;
   const location={questionId:q.id,title:q.title,week:set.week,section,
    href:"#/study/"+set.week+"/"+section+"/"+index};
   for(const part of q.parts){
    const meta=part[2];
    if(!meta)continue;
    const roles=[[meta.primarySkillId,"primary"],...(meta.secondarySkillIds||[]).map(s=>[s,"connected"])];
    for(const [skillId,role] of roles){
     if(!lookup.has(skillId))lookup.set(skillId,new Map());
     const byQuestion=lookup.get(skillId);
     if(!byQuestion.has(q.id)){
      byQuestion.set(q.id,{...location,role,partKeys:[],primaryMarksAvailable:0});
     }
     const ref=byQuestion.get(q.id);
     if(!ref.partKeys.includes(meta.key))ref.partKeys.push(meta.key);
     if(role==="primary"){
      ref.role="primary";
      ref.primaryMarksAvailable+=part[1];
     }
    }
   }
  }
 }
 return lookup;
}
const publishedPractice=createPracticeIndex([
 {week:1,questions:taggedWeek01Questions},
 {week:2,questions:taggedWeek02Questions},
 {week:3,questions:taggedWeek03Questions},
 {week:4,questions:taggedWeek04Questions},
 {week:5,questions:taggedWeek05Questions}
].filter(set=>isWeekReleased(set.week,set.questions)));
export function getPublishedPracticeForSkill(skillId){
 return [...(publishedPractice.get(skillId)?.values()||[])];
}
