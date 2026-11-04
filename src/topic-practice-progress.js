import {topicPracticeQuestions} from "./data/topic-practice/index.js";
import {specificationTopics} from "./data/specification.js";
import {isQuestionFinished} from "./question-assessment.js";
import {latestFinishedRecord} from "./attempt-history.js";

/**
 * Pure, browser-local analytics for ORIGINAL topic questions only.
 * These records never enter weekly calendar targets, released week
 * denominators, or specification skill accuracy calculations.
 */
function activeWorkspace(record={}){
 const workspace=record.workspace||{};
 return Boolean(
  String(workspace.notes??record.working??"").trim()||
  (Array.isArray(workspace.mathLines)&&workspace.mathLines.some(line=>
   String(line?.latex??"").trim()||String(line?.reason??"").trim()))||
  (Array.isArray(workspace.strokes)&&workspace.strokes.length>0)||
  record.hintSeen||record.status==="I"||record.status==="P"||
  Number.isInteger(record.score)
 );
}
export function originalPracticeState(question,record={}){
 const latest=latestFinishedRecord(question,record);
 const complete=Boolean(latest);
 const active=activeWorkspace(record) ||
  (Array.isArray(record.attemptHistory)&&record.attemptHistory.length>0);
 const retrying=Boolean(complete&&!isQuestionFinished(record,question.marks));
 return {
  state:retrying?"retry":complete?"marked":active?"started":"new",
  complete,
  retrying,
  score:latest?.score??null,
  possible:question.marks,
  percent:complete?Math.round(100*latest.score/question.marks):null,
  independence:latest?.status==="I"?"Independent":
   latest?.status==="P"?"With help":null
 };
}
export function originalPracticeSummary(records={},scope="internal"){
 const eligible=topicPracticeQuestions.filter(q=>scope==="full"||q.scope==="internal");
 const states=eligible.map(q=>({question:q,...originalPracticeState(q,records[q.id]||{})}));
 const completed=states.filter(s=>s.complete);
 const started=states.filter(s=>s.state==="started"||s.state==="retry");
 const independent=completed.filter(s=>s.independence==="Independent").length;
 const earned=completed.reduce((sum,s)=>sum+s.score,0);
 const possible=completed.reduce((sum,s)=>sum+s.possible,0);
 const perAO=Object.fromEntries(["AO1","AO2","AO3"].map(ao=>{
  const subset=states.filter(s=>s.question.aoFocus===ao);
  const marked=subset.filter(s=>s.complete);
  return [ao,{
   total:subset.length,completed:marked.length,
   started:subset.filter(s=>s.state==="started"||s.state==="retry").length,
   earned:marked.reduce((sum,s)=>sum+s.score,0),
   possible:marked.reduce((sum,s)=>sum+s.possible,0)
  }];
 }));
 const byTopic=Object.fromEntries(specificationTopics.map(topic=>{
  const items=states.filter(s=>s.question.topicId===topic.id);
  return [topic.id,{total:items.length,
   completed:items.filter(s=>s.complete).length,
   started:items.filter(s=>s.state==="started"||s.state==="retry").length}];
 }));
 return {
  total:eligible.length,completed:completed.length,started:started.length,
  independent,earned,possible,perAO,byTopic
 };
}
