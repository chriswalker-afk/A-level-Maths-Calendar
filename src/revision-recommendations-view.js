import {recommendRevision} from "./revision-recommendations.js";
import {getSpecSkill} from "./data/specification.js";
const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export function renderRevisionSuggestions({questions=[],records={},report,scope="internal"}={}){
 const suggestions=recommendRevision({questions,records,report,scope});
 return '<section class="revision-suggestions" aria-labelledby="revision-suggestions-title">'+
 '<div class="revision-suggestions-head"><div>'+
 '<h2 id="revision-suggestions-title">What should I practise next?</h2>'+
 '<p>Based on your saved marks, help used and skills practised.</p></div>'+
 '<a class="btn ghost small" href="#/calendar">Browse all released practice →</a></div>'+
 (suggestions.length?'<div class="revision-suggestions-grid">'+suggestions.map((item,index)=>{
  const skill=getSpecSkill(item.primarySkillId);
  return '<article class="revision-suggestion">'+
   '<div class="revision-suggestion-top"><span class="revision-suggestion-index">'+(index+1)+'</span>'+
   '<span class="revision-suggestion-kind">'+esc(item.kind)+'</span><span class="revision-suggestion-id">'+esc(item.questionId)+'</span></div>'+
   '<h3>'+esc(item.title)+'</h3>'+
   (skill?'<p class="revision-suggestion-skill">'+esc(skill.statement)+'</p>':'')+
   '<p class="revision-suggestion-reason">'+esc(item.reason)+'</p>'+
   '<div class="revision-suggestion-actions"><a class="btn small" href="'+esc(item.href)+'">'+
    (item.inProgress?'Finish this attempt':item.completed?'Try again':'Start this question')+' →</a>'+
   (skill?'<a class="revision-suggestion-spec" href="#/specification/'+scope+'/'+skill.topicId+'/'+skill.id+'">View this skill →</a>':'')+
   '</div></article>';
 }).join('')+'</div>':
 '<div class="revision-suggestions-empty"><h3>You are up to date with the published questions</h3><p>There are no further suitable recommendations from the released set. You can revisit a question manually or check back when more weeks are published.</p></div>')+
 '<p class="revision-suggestions-note">If you have only marked one or two questions, there is not enough evidence to identify an established strength or weakness. Focus on variety and good corrections rather than chasing a percentage.</p>'+
 '</section>';
}
