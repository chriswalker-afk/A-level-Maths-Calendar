/**
 * Pass B: local, non-persistent study-mode navigation.
 * The working editor is mounted once; selecting a tab only toggles visibility.
 * Progress and the student's written/drawn work are owned by their existing modules.
 */
export function mountStudyReviewModes(root,{onFirstReview,onReturnToWork}={}){
 if(!root)return()=>{};
 const workTab=root.querySelector("#study-tab-work");
 const reviewTab=root.querySelector("#study-tab-review");
 const workPanel=root.querySelector("#study-panel-work");
 const reviewPanel=root.querySelector("#study-panel-review");
 if(!workTab||!reviewTab||!workPanel)return()=>{};
 const available=reviewPanel&&!reviewTab.disabled;
 let active="work",hasReviewed=false;

 function select(mode){
  if(mode!=="work"&&mode!=="review")return false;
  if(mode==="review"&&!available)return false;
  if(active===mode)return true;
  active=mode;
  for(const [tab,panel,key] of [[workTab,workPanel,"work"],[reviewTab,reviewPanel,"review"]]){
   const selected=key===mode;
   tab.setAttribute("aria-selected",String(selected));
   tab.tabIndex=selected?0:-1;
   tab.classList.toggle("is-active",selected);
   if(panel)panel.hidden=!selected;
  }
  if(mode==="review"&&!hasReviewed){
   hasReviewed=true;
   onFirstReview?.();
  }else if(mode==="work"){
   onReturnToWork?.();
  }
  return true;
 }

 const listeners=[];
 const bind=(element,type,callback)=>{
  element.addEventListener(type,callback);
  listeners.push(()=>element.removeEventListener(type,callback));
 };
 for(const [tab,mode] of [[workTab,"work"],[reviewTab,"review"]]){
  bind(tab,"click",()=>{if(!tab.disabled)select(mode);});
  bind(tab,"keydown",event=>{
   if(!["ArrowLeft","ArrowRight","Home","End"].includes(event.key))return;
   event.preventDefault();
   const target=event.key==="ArrowLeft"||event.key==="Home"?"work":"review";
   if(select(target)) (target==="work"?workTab:reviewTab).focus();
  });
 }
 return ()=>{for(const unbind of listeners)unbind();};
}
