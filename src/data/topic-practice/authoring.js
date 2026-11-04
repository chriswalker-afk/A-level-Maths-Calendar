/**
 * Compact authoring format for original AO topic questions.
 * Keep mathematical content in the per-topic files, never in the weekly bank.
 * The published catalogue performs full validation separately.
 */
export function originalTopicQuestions(topicId,items){
 const expected=["AO1","AO2","AO3"];
 if(!Array.isArray(items)||items.length!==3||
    items.some((item,index)=>item.ao!==expected[index]))
  throw new Error("Fresh practice "+topicId+" must provide AO1, AO2, AO3 in order.");
 return items.map(entry=>{
  const parts=entry.parts.map(([text,marks,primarySkillId,secondarySkillIds=[]])=>
   [text,marks,{primarySkillId,secondarySkillIds}]);
  const marks=parts.reduce((sum,part)=>sum+part[1],0);
  // These are dominant-assessment-objective labels, not claims that
  // reasoning or problem solving occurs in isolation.
  const allocation=entry.aoMarks||(
   entry.ao==="AO1"?{AO1:marks,AO2:0,AO3:0}:
   entry.ao==="AO2"?{AO1:2,AO2:marks-2,AO3:0}:
   {AO1:1,AO2:2,AO3:marks-3}
  );
  return {
   id:"TP-"+topicId+"-"+entry.ao,
   published:true,
   topicId,
   aoFocus:entry.ao,
   scope:entry.scope||"internal",
   title:entry.title,
   marks,
   minutes:entry.minutes||marks+1,
   ao:allocation,
   stem:entry.stem,
   parts,
   hint:entry.hint,
   steps:entry.steps,
   answer:entry.answer,
   misconception:entry.misconception,
   reflection:entry.reflection
  };
 });
}
