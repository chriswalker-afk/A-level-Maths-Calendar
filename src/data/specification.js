import {pureTopicsA} from "./specification-pure-a.js";
import {pureTopicsB} from "./specification-pure-b.js";
import {statisticsTopics} from "./specification-statistics.js";
import {mechanicsTopics} from "./specification-mechanics.js";
export {SPEC_SOURCE_URL,STRANDS,THEMES,SCOPE_LABELS,inScope,searchCatalogue} from "./specification-core.js";

export const specificationTopics=[
 ...pureTopicsA,...pureTopicsB,...statisticsTopics,...mechanicsTopics
];
export const specificationSkills=specificationTopics.flatMap(topic=>topic.skills);
const topicIndex=new Map(specificationTopics.map(topic=>[topic.id,topic]));
const skillIndex=new Map(specificationSkills.map(skill=>[skill.id,skill]));
export const getSpecTopic=id=>topicIndex.get(id)||null;
export const getSpecSkill=id=>skillIndex.get(id)||null;
export function specificationCounts(scope="internal"){
 const items=specificationSkills.filter(skill=>scope==="full"||skill.scope==="internal");
 const activeTopics=specificationTopics.filter(t=>t.skills.some(s=>scope==="full"||s.scope==="internal"));
 const strands=Object.fromEntries(["P","S","M"].map(k=>[k,{
  topics:activeTopics.filter(t=>t.strand===k).length,
  skills:items.filter(skill=>skill.topicId.startsWith(k)).length
 }]));
 return {totalTopics:specificationTopics.length,visibleTopics:activeTopics.length,
  totalSkills:specificationSkills.length,visibleSkills:items.length,strands};
}
