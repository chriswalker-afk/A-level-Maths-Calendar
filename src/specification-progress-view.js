/**
 * Pass 4C: student-friendly, accessible progress summaries.
 * HTML only; no side effects and no reads from localStorage.
 */
import {STRANDS} from "./data/specification.js";
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const plural=(n,s)=>n+" "+s+(n===1?"":"s");
const fmtPct=(v)=>v===null?"No part marks yet":v+"%";
const skillLabel=(n,total)=>n+" / "+total+" skills encountered";
const boardUrl=(scope,strand="all")=>"#/progress/"+scope+(strand==="all"?"":"/"+strand);
const specUrl=(scope,topic)=>"#/specification/"+scope+"/"+topic;
const evidenceMessage=(t)=>{
 if(!t.inScope)return "Outside this exam syllabus";
 if(t.publishedQuestions===0)return "No published practice yet";
 if(t.attemptedQuestions===0)return "Not started";
 if(t.available===0)return "Practised; detailed marks not recorded";
 return t.evidenceQuality==="limited"?"Early mark evidence":"Growing mark evidence";
};
export function renderProgressPulse(report,{compact=false}={}){
 const s=report.summary;
 return '<div class="spec-progress-pulse'+(compact?' is-compact':'')+'" role="group" aria-label="Your self-marked specification progress">'+
 '<div><strong>'+s.completedQuestions+' / '+s.releasedQuestions+'</strong><span>published questions finished</span></div>'+
 '<div><strong>'+s.skillsEncountered+' / '+s.skillsTotal+'</strong><span>syllabus skills encountered</span></div>'+
 '<div><strong>'+(s.verifiedAccuracy===null?"No evidence":s.verifiedAccuracy+"%")+'</strong><span>skill-mark accuracy · '+(s.verifiedParts?plural(s.verifiedParts,"scored part")+" from "+plural(s.verifiedQuestions,"question"):"no attributable marks yet")+'</span></div>'+ 
 '<div><strong>'+s.independent+'</strong><span>finished independently</span></div>'+
 '</div>';
}
export function renderTopicCardProgress(topic){
 if(!topic||!topic.inScope)return '<div class="spec-card-progress not-in-scope">Year 2 content · outside current internal exam</div>';
 if(topic.publishedQuestions===0)return '<div class="spec-card-progress no-practice">No released questions for this topic yet</div>';
 return '<div class="spec-card-progress">'+
 '<div class="spec-card-progress-row"><span>'+topic.attemptedQuestions+' / '+topic.publishedQuestions+' questions attempted</span>'+
 '<strong>'+(topic.accuracy===null?"No part accuracy":topic.accuracy+"% accuracy")+'</strong></div>'+
 '<div class="spec-track" role="img" aria-label="'+esc(skillLabel(topic.skillsEncountered,topic.skillsTotal))+'">'+
 '<span style="width:'+(topic.coverage??0)+'%"></span></div>'+
 '<div class="spec-card-progress-foot">'+esc(skillLabel(topic.skillsEncountered,topic.skillsTotal))+
 '</div></div>';
}
export function renderTopicEvidence(topic){
 if(!topic)return "";
 if(!topic.inScope)return '<p class="topic-no-evidence">These are Year 2 Applied skills outside the current internal exam.</p>';
 const accuracy=topic.accuracy===null
  ?'<strong>No part-mark evidence yet</strong><span>Enter marks for every part of a question to measure skills accurately.</span>'
  :'<strong>'+topic.accuracy+'% self-marked accuracy</strong><span>'+topic.earned+' / '+topic.available+' marks across '+plural(topic.evidenceParts,"part")+
    ' from '+plural(topic.verifiedQuestions,"question")+'. '+(topic.evidenceQuality==="limited"?"Early evidence: avoid overinterpreting this percentage.":"A growing sample, but not a grade prediction.")+'</span>';
 return '<section class="spec-topic-evidence" aria-label="Your progress on this topic">'+
 '<div class="spec-topic-evidence-head"><div><span class="eyebrow">Your local practice record</span><h2>How am I doing on this topic?</h2></div>'+
 '<span class="spec-evidence-caption">'+esc(evidenceMessage(topic))+'</span></div>'+
 '<div class="spec-topic-evidence-grid">'+
 '<div><strong>'+topic.attemptedQuestions+' / '+topic.publishedQuestions+'</strong><span>published questions attempted</span></div>'+
 '<div><strong>'+topic.skillsEncountered+' / '+topic.skillsTotal+'</strong><span>skills encountered</span></div>'+
 '<div><strong>'+topic.independent+'</strong><span>completed independently</span></div>'+
 '<div><strong>'+topic.withHelp+'</strong><span>completed with help</span></div>'+
 '</div><div class="spec-topic-evidence-accuracy"><div>'+accuracy+'</div>'+
 (topic.skillsTotal?'<div class="spec-track" role="img" aria-label="'+esc(skillLabel(topic.skillsEncountered,topic.skillsTotal))+'"><span style="width:'+(topic.coverage??0)+'%"></span></div>':'')+
 '<p>Questions can appear in more than one topic when skills are combined. Only a question part’s <strong>primary skill</strong> receives its marks; connected skills count as practice exposure, not extra marks.</p>'+
 '</div></section>';
}
export function renderSkillEvidence(skill){
 if(!skill)return '<div class="spec-skill-performance">No recorded practice for this skill.</div>';
 const hasMarks=skill.available>0;
 const accuracy=hasMarks
  ?'<strong>'+skill.accuracy+'% of verified part marks</strong><span>'+skill.earned+' / '+skill.available+' marks from '+plural(skill.verifiedQuestions.size,"fully marked question")+'.</span>'
  :'<strong>No precise part-mark accuracy yet</strong><span>'+(skill.attempted.size
      ?"You have attempted related questions, but have not finished a part-mark breakdown assigning marks directly to this skill."
      :"You have not yet finished a published question connected with this skill.")+'</span>';
 return '<div class="spec-skill-performance">'+
 '<div class="spec-skill-performance-stats">'+
 '<div><strong>'+skill.attempted.size+'</strong><span>'+(skill.attempted.size===1?"question practised":"questions practised")+'</span></div>'+
 '<div><strong>'+skill.directAttempted.size+'</strong><span>with this as a main skill</span></div>'+
 '<div><strong>'+skill.independent.size+'</strong><span>independent attempts</span></div>'+
 '</div><div class="spec-skill-performance-accuracy">'+accuracy+'</div></div>';
}
function card(t,scope){
 const pct=t.accuracy===null
  ?'<span class="progress-topic-no-accuracy">No part accuracy yet</span>'
  :'<span class="progress-topic-accuracy">'+t.accuracy+'% <small>part accuracy</small></span>';
 const count=t.publishedQuestions===0?'No published questions':plural(t.attemptedQuestions,"attempt")+" / "+plural(t.publishedQuestions,"published question");
 return '<a href="'+specUrl(scope,t.id)+'" class="progress-topic-card">'+
 '<div class="progress-topic-card-head"><span class="spec-ref">'+esc(t.id)+'</span>'+pct+'</div>'+
 '<h3>'+esc(t.title)+'</h3>'+
 '<p class="progress-topic-count">'+esc(count)+'</p>'+
 '<div class="spec-track" role="img" aria-label="'+esc(skillLabel(t.skillsEncountered,t.skillsTotal))+'"><span style="width:'+(t.coverage??0)+'%"></span></div>'+
 '<div class="progress-topic-card-footer"><span>'+esc(skillLabel(t.skillsEncountered,t.skillsTotal))+'</span><strong>Explore →</strong></div>'+
 (t.accuracy!==null?'<p class="progress-topic-evidence-caption">'+esc(evidenceMessage(t))+' · '+plural(t.verifiedQuestions,"question")+' with detailed marks</p>':'')+
 '</a>';
}
export function renderTopicProgressDashboard(report,{scope=report.scope,strand="all"}={}){
 scope=scope==="full"?"full":"internal";
 strand=["P","S","M"].includes(strand)?strand:"all";
 const s=report.summary;
 const areas=[["all","All topics"],["P","Pure"],["S","Statistics"],["M","Mechanics"]];
 const groups=["P","S","M"].filter(k=>strand==="all"||strand===k);
 let html='<section class="progress-spec-section" aria-label="Specification progress">'+
 '<div class="progress-spec-header"><div><h2>Progress by specification topic</h2>'+
 '</div>'+
 '<a class="btn ghost small" href="#/specification/'+scope+'">Browse the full specification →</a></div>'+
 '<nav class="progress-spec-scope" aria-label="Progress syllabus"><a href="'+boardUrl("internal")+'"'+(scope==="internal"?' aria-current="page" class="selected"':'')+'>Internal exam · Pure + Y1 Applied</a>'+
 '<a href="'+boardUrl("full")+'"'+(scope==="full"?' aria-current="page" class="selected"':'')+'>Full A Level</a></nav>'+
 renderProgressPulse(report)+
 '<div class="progress-spec-explain"><strong>Reading these numbers:</strong> “Skills encountered” includes linked skills on finished questions. “Accuracy” uses fully marked parts or single-part questions—not whole multi-part scores. Missing evidence is not 0%, percentages are not grade predictions, and mixed-topic questions may appear under multiple topics.</div>'+
 '<nav class="progress-spec-strands" aria-label="Filter topic progress">'+areas.map(([key,title])=>
 '<a href="'+boardUrl(scope,key)+'"'+(strand===key?' aria-current="page" class="selected"':'')+'>'+title+'</a>').join('')+'</nav>';
 for(const k of groups){
  const topics=report.topics.filter(t=>t.strand===k&&t.inScope);
  const future=report.topics.filter(t=>t.strand===k&&!t.inScope);
  html+='<div class="progress-strand-block"><div class="progress-strand-head"><h3>'+STRANDS[k].name+'</h3>'+
  '<span>'+topics.length+' topic'+(topics.length===1?"":"s")+' in this syllabus</span></div>'+
  '<div class="progress-topic-grid">'+topics.map(t=>card(t,scope)).join('')+'</div>'+
  (future.length?'<p class="progress-future-note">'+future.length+' additional Year 2 topic is excluded from the internal exam. <a href="'+boardUrl("full",k)+'">View the full A Level →</a></p>':'')+
  '</div>';
 }
 html+=''+
 '</section>';
 return html;
}
