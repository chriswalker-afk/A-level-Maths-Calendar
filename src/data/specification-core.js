/**
 * Edexcel 9MA0 student-friendly curriculum data helpers.
 * These are original explanations cross-referenced to Pearson specification
 * reference numbers, not a reproduction of Pearson's copyrighted text.
 *
 * STABLE IDS: once question part tags use a skill ID, NEVER renumber it.
 * New skills should be appended with a new permanent ID (Pass 4B onwards).
 */
export const SPEC_SOURCE_URL="https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf";
export const STRANDS={
 P:{name:"Pure Mathematics",short:"Pure",paper:"Papers 1 & 2"},
 S:{name:"Statistics",short:"Statistics",paper:"Paper 3 · Section A"},
 M:{name:"Mechanics",short:"Mechanics",paper:"Paper 3 · Section B"}
};
export const SCOPE_LABELS={internal:"Internal exam",full:"Full A Level"};
export const THEMES=[
 {id:"OT1",name:"Argument, language & proof",reference:"OT1.1–OT1.5",
   description:"Show why a method works: write correct notation, make logical deductions and challenge an incorrect argument.",
   examDemand:"Explain each deduction, use a clear diagram or show a counterexample rather than just giving an answer."},
 {id:"OT2",name:"Problem solving",reference:"OT2.1–OT2.7",
   description:"Recognise mathematical structure in unfamiliar problems, connect methods and check whether your answer makes sense.",
   examDemand:"Decide where to start without being told the topic, connect several techniques and evaluate your answer."},
 {id:"OT3",name:"Modelling",reference:"OT3.1–OT3.5",
   description:"Translate a real situation into mathematics, state assumptions, interpret results and improve a model when appropriate.",
   examDemand:"Build a model, explain what its variables mean and describe a limitation of the prediction."}
];
/** Make a topic with deliberately stable, distinct question-tagging skill IDs. */
export function makeTopic(strand,number,title,description,groups){
 if(!Object.hasOwn(STRANDS,strand))throw new Error("Unknown strand "+strand);
 const id=strand+String(number).padStart(2,"0");
 let index=0;
 const skills=[];
 for(const group of groups){
  const ref=String(group.ref);
  const year=strand==="P"?null:group.year;
  if(strand!=="P" && year!==1&&year!==2)throw new Error("Applied skill must identify year: "+id+" "+ref);
  for(const [statement,examDemand,pitfall] of group.skills){
   skills.push({
    id:id+"-"+String(++index).padStart(3,"0"),
    topicId:id,reference:strand+ref,year,
    scope:strand==="P"||year===1?"internal":"full",
    statement,examDemand,pitfall:pitfall||null
   });
  }
 }
 return {id,strand,number,title,description,paper:STRANDS[strand].paper,skills};
}
/** Internal exam includes every Pure skill but only Year 1 Applied. */
export function inScope(skill,scope="internal"){
 return scope==="full"||skill.scope==="internal";
}
export function searchCatalogue(topics,{scope="internal",strand="all",query=""}={}){
 const search=String(query).trim().toLocaleLowerCase();
 return topics.filter(t=>strand==="all"||t.strand===strand).map(topic=>{
   const matching=topic.skills.filter(skill=>
     inScope(skill,scope) &&
     (!search || [topic.title,topic.description,skill.statement,skill.examDemand,skill.reference]
       .some(text=>text.toLocaleLowerCase().includes(search))));
   return {topic,matching,excluded:topic.skills.filter(s=>!inScope(s,scope)).length};
 }).filter(entry=>{
   if(search)return entry.matching.length>0 || entry.topic.title.toLocaleLowerCase().includes(search) || entry.topic.description.toLocaleLowerCase().includes(search);
   // Even fully year-two topics are visible, but clearly tagged as future-only.
   return true;
 });
}
