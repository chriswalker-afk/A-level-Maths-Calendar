/**
 * Editorial, graph-paper-styled Week 10 mock controls and 60-minute review.
 * All student-controlled text is escaped.
 */
import {MOCK_PAPERS,mockPaperTotals,mockRepairPriorities,mockTimerInfo,formatMockClock} from "./mock-week.js";
const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const link=(section,index=0)=>"#/study/10/"+section+"/"+index;
const REVIEW_ROUTE="#/mock-review/10";

function scoreText(total){
 if(total.complete)return total.earned+" / "+total.possible+" marks";
 if(total.finished===0)return "Not marked yet";
 return total.finished+" of "+total.count+" questions marked · "+total.earned+" / "+
  total.credited+" marks across those marked questions";
}
export function renderMockPaperBanner({section,questions,records={},reflections={}}){
 const paper=MOCK_PAPERS[section];
 if(!paper)return "";
 const total=mockPaperTotals(questions,records,section);
 const timer=mockTimerInfo(reflections,section);
 const category=section==="P"?"PAPER 01 / PURE":"PAPER 02 / YEAR 1 APPLIED";
 const phase=timer.active?"TIMED SITTING IN PROGRESS":timer.ended?"TIMED SITTING FINISHED":"PAPER READY";
 const action=timer.active
  ?'<button type="button" class="btn small mock-timer-action" data-mock-action="finish" data-mock-section="'+section+'">Finish timed paper</button>'
  :'<button type="button" class="btn ghost small mock-timer-action" data-mock-action="'+(timer.ended?"restart":"start")+'" data-mock-section="'+section+'">'+
    (timer.ended?"Restart timer · keep work":"Start "+paper.duration+"-minute sitting")+'</button>';
 const clock=timer.active
   ?'<span id="mock-clock" class="mock-clock" role="timer" aria-label="Time remaining">'+
     formatMockClock(timer.remainingSeconds)+'</span>'
   :'<span class="mock-clock-quiet">'+paper.duration+' MINUTES</span>';
 return '<aside class="mock-paper-banner" aria-label="'+esc(paper.title)+' mock controls">'+
  '<div class="mock-banner-top"><span>'+category+'</span><span>'+paper.marks+' MARKS · '+paper.questionCount+' QUESTIONS</span></div>'+
  '<div class="mock-banner-core"><div><strong>'+esc(paper.title)+'</strong>'+
  '<p>'+esc(timer.active?"Timed sitting · marks hidden until you finish":scoreText(total))+'</p></div><div class="mock-banner-clock">'+clock+
  '<span>'+esc(phase)+'</span></div></div>'+
  (section==="A"?'<p class="mock-banner-split">Statistics 25 marks · Mechanics 25 marks</p>':'')+
  '<div class="mock-banner-footer"><div class="mock-banner-actions">'+action+
  (timer.active?'<span class="mock-banner-locked">Review unlocks after this sitting</span>':
   '<a class="btn ghost small" href="'+REVIEW_ROUTE+'">Mark &amp; review both papers</a>')+'</div>'+
  '<p>'+(timer.active?'Exam mode hides hints, worked solutions and self-marking until you finish this sitting. Working continues to save locally.':
    'Optional timed mode hides hints, solutions and self-marking during your sitting. Starting or restarting the timer never erases earlier work or scores.')+
  '</p></div></aside>';
}

function paperSummary(section,questions,records){
 const total=mockPaperTotals(questions,records,section),paper=MOCK_PAPERS[section];
 const count=total.finished;
 return '<section class="mock-review-paper" aria-label="'+esc(paper.title)+' marks">'+
  '<div class="mock-review-paper-top"><span class="eyebrow">'+(section==="P"?"PAPER 01":"PAPER 02")+'</span>'+
  '<strong>'+paper.duration+' min · '+paper.marks+' available</strong></div>'+
  '<h2>'+esc(paper.title)+'</h2>'+
  '<p class="mock-review-score">'+esc(total.complete?total.earned+" / "+paper.marks:count+" / "+total.count+" marked")+'</p>'+
  '<p>'+esc(total.complete
    ?"All questions scored. "+total.earned+" marks earned."
    :total.unmarked+" question"+(total.unmarked===1?" remains":"s remain")+" unmarked. Recorded "+total.earned+" from "+total.credited+" marks on the marked questions; this is not yet a paper score.")+'</p>'+
  (section==="A"?'<div class="mock-review-split">'+["statistics","mechanics"].map(kind=>{
   const k=total.byCategory[kind];
   return '<span>'+esc(kind==="statistics"?"Statistics":"Mechanics")+': '+
      esc(k.marked===k.count?k.earned+" / "+k.marks:k.marked+" / "+k.count+" marked")+'</span>';
  }).join("")+'</div>':'')+
  '<a class="link" href="'+link(section)+'">Return to '+esc(paper.title)+' questions →</a></section>';
}
function scoreRow(row){
 return '<tr><th scope="row"><a href="'+link(row.q.section,row.index)+'">'+esc(row.q.id)+
  ' · '+esc(row.q.title)+'</a></th><td>'+row.q.marks+'</td><td>'+
  (row.marked?esc(String(row.score)):'<span class="mock-unmarked">Not marked</span>')+
  '</td><td>'+(row.marked?esc(row.status==="I"?"Independent":row.status==="P"?"Used help":"Unspecified"):'—')+'</td></tr>';
}
function noteField(key,title,prompt,value){
 return '<div class="mock-diagnostic-field"><label for="mock-note-'+key+'">'+esc(title)+'</label>'+
  '<p>'+esc(prompt)+'</p>'+
  '<textarea id="mock-note-'+key+'" data-mock-note="'+key+'" rows="3" placeholder="'+esc(prompt)+'">'+
    esc(value||"")+'</textarea></div>';
}
export function renderMockReview({questions,records={},reflections={}}){
 if(mockTimerInfo(reflections,"P").active||mockTimerInfo(reflections,"A").active){
  return '<section class="page mock-review-page mock-review-locked">'+
    '<a class="back" href="'+link(mockTimerInfo(reflections,"P").active?"P":"A")+'">← Return to the active timed paper</a>'+
    '<span class="eyebrow">WEEK 10 / TIMED EXAM CONDITIONS</span>'+
    '<h1>Finish the sitting before reviewing.</h1>'+
    '<p>Marks, solutions and revision recommendations remain hidden while a timed sitting is active. Finish the active paper using its timer control; your working will remain saved.</p></section>';
 }
 const review=reflections?.week10?.notes||{};
 const p=mockPaperTotals(questions,records,"P"),a=mockPaperTotals(questions,records,"A");
 const priorities=mockRepairPriorities(questions,records);
 const markedCount=p.finished+a.finished,complete=p.complete&&a.complete;
 const recorded=p.earned+a.earned,credited=p.credited+a.credited;
 const summary=complete?recorded+" / 150 marks across both papers":
  markedCount+" of 22 questions marked; "+recorded+" of "+credited+" marks earned on marked questions. Remaining questions are unmarked, not zero.";
 return '<section class="page mock-review-page"><a class="back" href="'+link("P")+'">← Back to Week 10 paper</a>'+
  '<div class="mock-review-heading"><span class="eyebrow">WEEK 10 / THE EVIDENCE</span><h1>Mark, diagnose, decide.</h1>'+
  '<p>Allow 60 minutes after sitting both papers: 20 minutes marking, 20 minutes identifying the first error, and 20 minutes planning exact reattempts. Only recorded marks count as evidence.</p>'+
  '<div class="mock-review-total">'+esc(summary)+'</div></div>'+
  '<div class="mock-review-paper-grid">'+paperSummary("P",questions,records)+paperSummary("A",questions,records)+'</div>'+
  '<div class="mock-review-layout"><section class="mock-review-record"><span class="eyebrow">01 / MARK</span><h2>Question record</h2>'+
  '<p>Compare your working with the full mark schemes, then record every question mark, including zero when appropriate. A missing mark stays unmarked.</p>'+
  '<div class="table-scroll"><table class="mock-score-table"><thead><tr><th>Question</th><th>Max</th><th>Scored</th><th>Support</th></tr></thead><tbody>'+
  [...p.rows,...a.rows].map(scoreRow).join("")+'</tbody></table></div></section>'+
  '<section class="mock-review-reflection"><span class="eyebrow">02 / DIAGNOSE</span><h2>Find the first lost mark</h2>'+
  '<p>Start with a method or reasoning error, not just the final answer. Only scored questions appear as evidence-backed priorities.</p>'+
  (priorities.length?'<ol class="mock-priorities">'+priorities.map(item=>
   '<li><a href="'+link(item.section,questions.filter(q=>q.section===item.section).findIndex(q=>q.id===item.id))+'">'+
   esc(item.id)+' · '+esc(item.title)+'</a><span>'+item.score+'/'+item.marks+' marks</span></li>').join("")+'</ol>':
   '<p class="mock-empty">No scored lost marks yet. Mark a question first, then use this list to choose what to revisit.</p>')+
  noteField("firstError","Where did the first avoidable mark go?","Name the exact step, definition or assumption, and why it failed.",review.firstError)+
  noteField("repairMethod","Which method needs repair?","State a skill and one short practice action.",review.repairMethod)+
  '<span class="eyebrow">03 / ACT</span><h2>Make the next attempt specific</h2>'+
  noteField("reattemptPlan","Which two questions will you reattempt, and when?","Use question codes, dates or a specific next lesson.",review.reattemptPlan)+
  '<p id="mock-review-save" class="small muted" role="status" aria-live="polite">Review notes save to your existing progress backup.</p></section></div>'+
  '<p class="mock-review-foot">This is an original internal revision mock, not an official Pearson paper or an automatic prediction of an exam grade.</p></section>';
}
