import {getSpecTopic} from "../specification.js";
import {AO_INFO,validateTopicPracticeBank} from "./schema.js";
import p01 from "./p01.js";
import p02 from "./p02.js";
import p03 from "./p03.js";
import p04 from "./p04.js";
import p05 from "./p05.js";
import p06 from "./p06.js";
import p07 from "./p07.js";
import p08 from "./p08.js";
import p09 from "./p09.js";
import p10 from "./p10.js";
import s01 from "./s01.js";
import s02 from "./s02.js";
import s03 from "./s03.js";
import s04 from "./s04.js";
import s05 from "./s05.js";
import m06 from "./m06.js";
import m07 from "./m07.js";
import m08 from "./m08.js";
import m09 from "./m09.js";

const catalogue=validateTopicPracticeBank({
 P01:p01,
 P02:p02,
 P03:p03,
 P04:p04,
 P05:p05,
 P06:p06,
 P07:p07,
 P08:p08,
 P09:p09,
 P10:p10,
 S01:s01,
 S02:s02,
 S03:s03,
 S04:s04,
 S05:s05,
 M06:m06,
 M07:m07,
 M08:m08,
 M09:m09
});

/** Only fully authored, explicitly published original questions appear here. */
export const topicPracticeQuestions=catalogue.questions;
export const topicPracticeObjectives=AO_INFO;

export function topicPracticeRoute(scope,topicId,aoFocus){
 return "#/topic-practice/"+scope+"/"+topicId+"/"+aoFocus;
}
export function getTopicPracticeQuestion(topicId,aoFocus,scope="internal"){
 if(scope!=="internal"&&scope!=="full")return null;
 const q=catalogue.bySlot.get(topicId+":"+aoFocus)||null;
 return q&&(scope==="full"||q.scope==="internal")?q:null;
}
export function getTopicPracticeSlots(topicId,scope="internal"){
 const topic=getSpecTopic(topicId);
 if(!topic||!["internal","full"].includes(scope))return [];
 const topicOutsideScope=scope==="internal"&&
  topic.skills.every(skill=>skill.scope!=="internal");
 return AO_INFO.map(ao=>{
  const published=catalogue.bySlot.get(topicId+":"+ao.id)||null;
  const locked=topicOutsideScope||(scope==="internal"&&published?.scope==="full");
  return {...ao,question:locked?null:published,
   status:locked?"future":published?"ready":"planned"};
 });
}
