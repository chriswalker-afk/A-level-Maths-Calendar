/** 
 * Exam-paced authoring allocation for expanded Weeks 1–3.
 * This is a PLANNING TARGET at 1.2 min/mark, NOT a claim about observed student speed.
 * Each group is separately allocated so rounding sums exactly to the section budget.
 * Never mutates existing question objects or the stable question identifiers.
 */
const ORDER=["R","P","M","A","T","X"];
export const EXPANDED_WEEK_TARGETS=Object.freeze({
 counts:Object.freeze({R:10,P:7,M:3,A:5,T:4,X:2}),
 marks:Object.freeze({R:20,P:70,M:40,A:45,T:40,X:30}),
 reviewMinutes:Object.freeze({essential:30,recommended:12,optional:24}),
 examMinutesPerMark:1.2
});
export function pacedExpandedWeek(questions){
 const out=[];
 for(const section of ORDER){
  const selected=questions.filter(q=>q.section===section);
  let cumulative=0;
  for(const question of selected){
   const start=Math.round(cumulative*EXPANDED_WEEK_TARGETS.examMinutesPerMark);
   cumulative+=question.marks;
   const end=Math.round(cumulative*EXPANDED_WEEK_TARGETS.examMinutesPerMark);
   out.push({...question,minutes:end-start});
  }
 }
 return out;
}
export function expandedWeekBudget(questions){
 const sums=Object.fromEntries(ORDER.map(code=>{
  const items=questions.filter(q=>q.section===code);
  return [code,{count:items.length,marks:items.reduce((s,q)=>s+q.marks,0),
   workingMinutes:items.reduce((s,q)=>s+q.minutes,0)}];
 }));
 const essential=["R","P","M","A"].reduce((s,k)=>s+sums[k].workingMinutes,0);
 const coreMarks=["R","P","M","A"].reduce((s,k)=>s+sums[k].marks,0);
 return {sections:sums,
  essential:{marks:coreMarks,workingMinutes:essential,reviewMinutes:30,totalMinutes:essential+30},
  recommended:{marks:coreMarks+sums.T.marks,workingMinutes:essential+sums.T.workingMinutes,
   reviewMinutes:42,totalMinutes:essential+sums.T.workingMinutes+42},
  optional:{marks:coreMarks+sums.T.marks+sums.X.marks,
   workingMinutes:essential+sums.T.workingMinutes+sums.X.workingMinutes,
   reviewMinutes:66,totalMinutes:essential+sums.T.workingMinutes+sums.X.workingMinutes+66}};
}
