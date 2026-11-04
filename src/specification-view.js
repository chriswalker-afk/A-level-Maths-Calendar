import {
 specificationTopics,specificationSkills,getSpecTopic,specificationCounts,
 SPEC_SOURCE_URL,STRANDS,THEMES,searchCatalogue,inScope
} from "./data/specification.js";
import {getPublishedPracticeForSkill} from "./data/skill-practice-index.js";
import {calculateSpecificationProgress} from "./specification-analytics.js";
import {renderProgressPulse,renderTopicCardProgress,renderTopicEvidence,renderSkillEvidence} from "./specification-progress-view.js";

const escape=v=>String(v??"").replace(/[&<>"']/g,c=>
 ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const topicUrl=(scope,id)=>"#/specification/"+scope+(id?"/"+id:"");
const strandOrder=["P","S","M"];
let searchTerm="";
let selectedStrand="all";
const badge=(txt,cls="")=>'<span class="spec-pill '+cls+'">'+escape(txt)+'</span>';

function filters(scope){
 return '<div class="spec-scope-filter" aria-label="Examination syllabus">'+
 '<span class="spec-filter-label">I am preparing for</span><div class="spec-scope-options">'+
 '<a href="'+topicUrl("internal")+'" class="'+(scope==="internal"?"chosen":"")+'" aria-current="'+(scope==="internal"?"page":"false")+'">Internal exams <span>Pure + Y1 Applied</span></a>'+
 '<a href="'+topicUrl("full")+'" class="'+(scope==="full"?"chosen":"")+'" aria-current="'+(scope==="full"?"page":"false")+'">Full A Level <span>Entire 9MA0</span></a>'+
 '</div></div>';
}
function sourceNote(){
 return '<div class="spec-source"><span>Based on Pearson Edexcel 9MA0 Specification · Issue 4. These are student-friendly explanations, not Pearson\'s original wording.</span>'+
 '<a href="'+SPEC_SOURCE_URL+'" target="_blank" rel="noopener noreferrer">Read the official specification ↗</a></div>';
}
function intro(scope){
 const count=specificationCounts(scope);
 return '<section class="spec-hero"><div>'+
 '<h1 class="page-title">My Specification</h1>'+
 '<div class="spec-hero-metrics">'+
 '<div><strong>'+count.totalTopics+'</strong><span>topic groups</span></div>'+
 '<div><strong>'+count.visibleSkills+'</strong><span>skills in this programme</span></div>'+
 '<div><strong>'+THEMES.length+'</strong><span>skills for every paper</span></div></div></div>'+
 '<div class="spec-hero-decoration" aria-hidden="true"><span>∑</span><span>f(x)</span><span>∫</span><span>→</span></div>'+
 '</section>'+filters(scope);
}
function topicCard({topic,matching,excluded},scope,query,report){
 const active=topic.skills.filter(skill=>inScope(skill,scope));
 const futureOnly=active.length===0;
 const count=query?matching.length:active.length;
 const preview=active.slice(0,3).map(s=>'<span>'+escape(s.statement.replace(/^I can /,""))+'</span>').join('');
 const scopeBadge=futureOnly?badge("Year 2 · Full course only","future"):
   excluded?badge("Y1 now · Y2 later","mixed"):badge(topic.strand==="P"?"Both Pure papers":"Year 1 in scope","available");
 return '<a class="spec-topic-card'+(futureOnly?' future-only':'')+'" href="'+topicUrl(scope,topic.id)+'"'+
 ' aria-label="'+escape(topic.title)+', '+count+' skills in this programme">'+
 '<div class="spec-topic-top"><span class="spec-ref">'+topic.id+'</span>'+scopeBadge+'</div>'+
 '<h3>'+escape(topic.title)+'</h3><p>'+escape(topic.description)+'</p>'+
 (query&&matching.length?'<div class="spec-matches">'+matching.length+' matching skill'+(matching.length===1?"":"s")+'</div>':
   futureOnly?'<p class="spec-future-note">Not in the current internal examination. Explore the future content.</p>':
   '<div class="spec-preview">'+preview+'</div>')+
 renderTopicCardProgress(report.topicMap.get(topic.id))+
 '<div class="spec-topic-foot"><span>'+count+' skill'+(count===1?"":"s")+(excluded?' · '+excluded+' later':'')+'</span><strong>Explore skills →</strong></div></a>';
}
function renderGroups(scope,report){
 const entries=searchCatalogue(specificationTopics,{scope,strand:selectedStrand,query:searchTerm});
 const resultCount=entries.reduce((sum,entry)=>sum+entry.matching.length,0);
 let html='';
 for(const strand of strandOrder){
  const slice=entries.filter(e=>e.topic.strand===strand);
  if(!slice.length)continue;
  html+='<section class="spec-group" data-spec-strand="'+strand+'"><div class="spec-group-title"><div><span class="eyebrow">'+escape(STRANDS[strand].paper)+'</span><h2>'+escape(STRANDS[strand].name)+'</h2></div>'+
  '<span class="spec-group-count">'+slice.length+' topic'+(slice.length===1?'':'s')+'</span></div>'+
  '<div class="spec-topic-grid">'+slice.map(entry=>topicCard(entry,scope,searchTerm,report)).join('')+'</div></section>';
 }
 if(!html){
  html='<div class="spec-empty"><h3>No matching skills in this syllabus view</h3>'+
  '<p>Try a different search term or select the Full A Level option to include Year 2 Applied.</p>'+
  '<button type="button" data-clear-search class="btn ghost small">Clear search and filters</button></div>';
 }
 return {html,count:resultCount,groups:entries.length};
}
function themesSection(){
 return '<section class="spec-overarching"><div class="spec-section-heading"><div><span class="eyebrow">Across all three examination papers</span>'+
 '<h2>Skills that connect everything</h2><p>These ideas appear throughout the course, especially in unfamiliar AO2 and AO3 questions.</p></div></div>'+
 '<div class="spec-themes">'+THEMES.map(item=>
 '<article class="spec-theme"><span class="spec-ref">'+escape(item.id)+'</span><h3>'+escape(item.name)+'</h3>'+
 '<p>'+escape(item.description)+'</p><div class="spec-theme-demand"><strong>An examination might ask you to…</strong><span>'+escape(item.examDemand)+'</span></div></article>').join('')+'</div></section>';
}
function renderOverview(scope,report){
 const selectedCount=specificationCounts(scope);
 const initial=renderGroups(scope,report);
 return '<div class="page spec-page">'+intro(scope)+renderProgressPulse(report,{compact:true})+
 '<section class="spec-explainer"><div class="spec-explainer-icon" aria-hidden="true">i</div>'+
 '<div><strong>What do the progress numbers mean?</strong><p>Not a score report from your teacher: progress comes from your self-marks. Accuracy uses fully marked parts; missing practice is not 0%, and percentages are not predicted grades.</p></div></section>'+
 '<div class="spec-tools"><div class="spec-search-wrap"><label for="spec-search">Search skills and topics</label>'+
 '<input type="search" id="spec-search" placeholder="Try '+"'"+'chain rule, discriminant, normal distribution…'+"'"+'" value="'+escape(searchTerm)+'" autocomplete="off">'+
 '</div><div class="spec-strand-wrap"><span class="spec-filter-caption">Filter by area</span><div class="spec-strand-buttons" role="group" aria-label="Filter specification by area">'+
 [["all","All areas"],["P","Pure"],["S","Statistics"],["M","Mechanics"]].map(([val,label])=>
 '<button type="button" data-spec-strand="'+val+'" aria-pressed="'+String(selectedStrand===val)+'">'+label+'</button>').join('')+
 '</div></div></div>'+
 '<div class="spec-result-line" id="spec-result-line" role="status" aria-live="polite">'+
 (searchTerm?initial.count+' matching skills':'Showing '+selectedCount.totalTopics+' topics and '+selectedCount.visibleSkills+' skills in this programme')+'</div>'+
 '<div id="spec-results">'+initial.html+'</div>'+themesSection()+sourceNote()+'</div>';
}
function skillCard(skill,scope,report){
 const practice=getPublishedPracticeForSkill(skill.id);
 const future=skill.scope!=="internal";
 const yearLabel=skill.year===1?"Year 1 Applied":skill.year===2?"Year 2 Applied":"Pure · Both papers";
 return '<details class="spec-skill" id="'+escape(skill.id)+'"><summary><span class="spec-skill-number">'+escape(skill.id)+'</span>'+
 '<span class="spec-skill-title">'+escape(skill.statement)+'</span>'+
 '<span class="spec-skill-meta">'+badge(skill.reference)+badge(yearLabel,future?"future":"available")+'</span>'+
 '<span class="spec-skill-chevron" aria-hidden="true">⌄</span></summary>'+
 '<div class="spec-skill-content"><div class="spec-ask"><strong>What might an examination ask?</strong><p class="math">'+escape(skill.examDemand)+'</p></div>'+
 (skill.pitfall?'<div class="spec-pitfall"><strong>Watch out for</strong><p>'+escape(skill.pitfall)+'</p></div>':'')+
 renderSkillEvidence(report.skills.get(skill.id))+
 '<div class="spec-skill-practice"><strong>Published questions connected to this skill</strong>'+
 (practice.length?
   '<p>Try a question, then record a self-mark. “Main” means this skill is assessed directly; “Connected” means it supports the wider problem.</p>'+
   '<div class="spec-skill-practice-links">'+practice.slice(0,5).map(item=>
     '<a href="'+escape(item.href)+'"><span class="spec-practice-id">'+escape(item.questionId)+
     ' · '+escape(item.role==="primary"?"Main":"Connected")+'</span><span>'+escape(item.title)+'</span></a>'
   ).join('')+'</div>'+
   (practice.length>5?'<p class="spec-practice-more">Showing five of '+practice.length+' published questions.</p>':'')
   :'<p>No published questions are tagged to this skill yet. It has not been scored as 0%.</p>')+
 '</div><div class="spec-evidence-note"><span class="spec-evidence-dot" aria-hidden="true"></span>'+
 'Your scores are stored only in your browser. A whole-question mark counts as an attempt. For questions with just one part, the mark also belongs precisely to that part’s main skill; multi-part questions need a completed detailed breakdown.</div></div></details>';
}
function renderTopic(scope,topicId,report){
 const topic=getSpecTopic(topicId);
 if(!topic)return '<div class="page spec-page"><a class="back" href="'+topicUrl(scope)+'">← Back to My Specification</a><h1>Topic not found</h1><p>This topic reference is not in the current 9MA0 catalogue.</p></div>';
 const eligible=topic.skills.filter(skill=>inScope(skill,scope));
 const later=topic.skills.filter(skill=>!inScope(skill,scope));
 const strand=STRANDS[topic.strand];
 const empty=eligible.length===0;
 return '<div class="page spec-page spec-detail">'+
 '<a class="back" href="'+topicUrl(scope)+'">← All specification topics</a>'+
 '<div class="spec-detail-header"><div><span class="eyebrow">'+escape(strand.name)+' · Topic '+topic.number+' · '+escape(strand.paper)+'</span>'+
 '<h1 class="page-title">'+escape(topic.title)+'</h1><p class="intro">'+escape(topic.description)+'</p>'+
 '<div class="spec-detail-badges">'+badge(eligible.length+' skill'+(eligible.length===1?"":"s")+' in current view',"available")+
 (later.length?badge(later.length+" Year 2 addition"+(later.length===1?"":"s"),"future"):"")+'</div></div>'+
 '<div class="spec-detail-id" aria-hidden="true">'+topic.id+'</div></div>'+filters(scope)+renderTopicEvidence(report.topicMap.get(topic.id))+
 '<section class="spec-skill-list"><div class="spec-section-heading"><div><span class="eyebrow">'+escape(scope==="internal"?"Internal exams · Full Pure + Y1 Applied":"Full A Level · all content")+'</span>'+
 '<h2>What could I be asked to do?</h2><p>Open any statement to see an example examination demand and useful advice.</p></div>'+
 (eligible.length?'<div class="spec-skill-counter">'+eligible.length+' skills</div>':'')+'</div>'+
 (empty?'<div class="spec-future-panel"><h3>Not tested in your current internal exam</h3><p>These are Year 2 Applied skills that belong to the full 9MA0 course. You can browse them now or switch to Full A Level.</p><a class="btn small" href="'+topicUrl("full",topic.id)+'">View full-course skills →</a></div>':
 '<div class="spec-skill-entries">'+eligible.map(skill=>skillCard(skill,scope,report)).join('')+'</div>')+'</section>'+
 (later.length?'<section class="spec-later"><div class="spec-section-heading"><div><span class="eyebrow">Looking ahead</span><h2>Year 2 additions</h2><p>These skills are part of the final A Level programme but outside the current internal-exam scope.</p></div></div>'+
 '<details class="spec-later-disclosure"><summary>Preview '+later.length+' future skill'+(later.length===1?'':'s')+' <span aria-hidden="true">⌄</span></summary>'+
 '<div class="spec-skill-entries">'+later.map(skill=>skillCard(skill,scope,report)).join('')+'</div></details></section>':'')+
 '<div class="spec-practice-future"><div><strong>Published practice links are now available for tagged skills.</strong>'+
 '<p>Your local self-marks now contribute to the topic and skill indicators. Detailed part scores provide primary-skill accuracy; whole-question marks count as attempts without fabricating skill accuracy. Connected skills are exposure only.</p></div>'+
 '<a class="btn ghost small" href="#/calendar">Browse published practice →</a></div>'+
 sourceNote()+'</div>';
}
export function mountSpecification(root,{scope="internal",topicId=null,skillId=null,questions=[],records={}}={}){
 if(scope!=="internal"&&scope!=="full")scope="internal";
 const report=calculateSpecificationProgress({scope,questions,records});
 root.innerHTML=topicId?renderTopic(scope,topicId,report):renderOverview(scope,report);
 function onClick(event){
  const strand=event.target.closest("[data-spec-strand]");
  if(strand){
   selectedStrand=strand.dataset.specStrand;
   root.querySelectorAll("[data-spec-strand]").forEach(b=>
    b.setAttribute("aria-pressed",String(b===strand)));
   updateResults();
   return;
  }
  const clear=event.target.closest("[data-clear-search]");
  if(clear){
   searchTerm="";selectedStrand="all";
   const field=root.querySelector("#spec-search");
   if(field)field.value="";
   root.querySelectorAll("[data-spec-strand]").forEach(b=>
    b.setAttribute("aria-pressed",String(b.dataset.specStrand==="all")));
   updateResults();
   field?.focus();
  }
 }
 function updateResults(){
  const list=root.querySelector("#spec-results");
  const results=renderGroups(scope,report);
  if(list)list.innerHTML=results.html;
  const status=root.querySelector("#spec-result-line");
  if(status){
   status.textContent=searchTerm||selectedStrand!=="all"?
    results.count+" matching skills across "+results.groups+" topics":
    "Showing "+specificationCounts(scope).totalTopics+" topics and "+specificationCounts(scope).visibleSkills+" skills in this programme";
  }
 }
 function onInput(event){
  if(event.target?.id!=="spec-search")return;
  searchTerm=event.target.value;
  updateResults(); // redraw only the results: the input keeps keyboard focus
 }
 function onToggle(event){
  if(!event.target.open||!(event.target.matches?.(".spec-skill")))return;
  const jax=event.target.ownerDocument.defaultView?.MathJax;
  if(typeof jax?.typesetPromise==="function")
   jax.typesetPromise([event.target]).catch(()=>{});
 }
 root.addEventListener("click",onClick);
 root.addEventListener("input",onInput);
 root.addEventListener("toggle",onToggle,true);
 if(skillId){
  requestAnimationFrame(()=>{
   const selected=root.ownerDocument.getElementById(skillId);
   if(selected?.tagName==="DETAILS"){
    // Open any containing Year 2 preview as well.
    const later=selected.closest(".spec-later-disclosure");
    if(later)later.open=true;
    selected.open=true;
    selected.scrollIntoView({block:"start",behavior:"smooth"});
   }
  });
 }
 return ()=>{root.removeEventListener("click",onClick);root.removeEventListener("input",onInput);root.removeEventListener("toggle",onToggle,true);};
}
