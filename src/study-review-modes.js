/**
 * Student workspace navigation.
 * On wide screens the question stays visible beside Work / Check & mark.
 * On small screens all three views are accessible through one tab bar.
 * Hidden panels remain mounted, preserving unsent notes, maths and drawings.
 */
export function mountStudyReviewModes(root,{questionPane,mobileTabs,onFirstReview,onReturnToWork}={}){
 if(!root)return()=>{};
 const workTab=root.querySelector("#study-tab-work");
 const reviewTab=root.querySelector("#study-tab-review");
 const desktopTabs=root.querySelector(".study-answer-modes");
 const workPanel=root.querySelector("#study-panel-work");
 const reviewPanel=root.querySelector("#study-panel-review");
 if(!workTab||!reviewTab||!workPanel)return()=>{};
 const available=Boolean(reviewPanel&&!reviewTab.disabled);
 const mobileButtons=mobileTabs?{
  question:mobileTabs.querySelector("#study-mobile-question"),
  work:mobileTabs.querySelector("#study-mobile-work"),
  review:mobileTabs.querySelector("#study-mobile-review")
 }:null;
 const hasMobile=Boolean(questionPane&&desktopTabs&&mobileButtons?.question&&
   mobileButtons.work&&mobileButtons.review);
 const doc=root.ownerDocument,view=doc.defaultView;
 const media=view?.matchMedia?.("(max-width: 900px)")||null;
 let mobile=Boolean(hasMobile&&media?.matches);
 let active="work",mobileActive="question",hasReviewed=false;
 const unbind=[];

 function bind(element,type,callback){
  element.addEventListener(type,callback);
  unbind.push(()=>element.removeEventListener(type,callback));
 }
 function activateEditor(mode){
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
 function dismissWorkingKeyboard(){
  const focused=doc.activeElement;
  if(focused&&workPanel.contains(focused))focused.blur?.();
  // MathLive's keyboard is outside the working panel; hide it when leaving.
  view?.mathVirtualKeyboard?.hide?.();
 }
 function syncViewport(){
  if(!hasMobile)return;
  mobileTabs.hidden=!mobile;
  desktopTabs.hidden=mobile;
  if(mobile){
   if(mobileActive==="review"&&!available)mobileActive="work";
   questionPane.hidden=mobileActive!=="question";
   root.hidden=mobileActive==="question";
   questionPane.setAttribute("role","tabpanel");
   questionPane.setAttribute("aria-labelledby","study-mobile-question");
   workPanel.setAttribute("aria-labelledby","study-mobile-work");
   if(reviewPanel)reviewPanel.setAttribute("aria-labelledby","study-mobile-review");
   for(const [mode,button] of Object.entries(mobileButtons)){
    const selected=mode===mobileActive;
    button.setAttribute("aria-selected",String(selected));
    button.tabIndex=selected?0:-1;
    button.classList.toggle("is-active",selected);
   }
  }else{
   questionPane.hidden=false;
   root.hidden=false;
   questionPane.setAttribute("role","region");
   questionPane.removeAttribute("aria-labelledby");
   workPanel.setAttribute("aria-labelledby","study-tab-work");
   if(reviewPanel)reviewPanel.setAttribute("aria-labelledby","study-tab-review");
  }
 }
 function selectMobile(mode){
  if(!mobile||!hasMobile||!Object.hasOwn(mobileButtons,mode))return false;
  if(mode==="review"&&!available)return false;
  if(mode===mobileActive)return true;
  const oldMode=mobileActive;
  if(oldMode==="work"&&mode!=="work")dismissWorkingKeyboard();
  // Reveal the containing pane before typesetting a newly opened solution.
  if(mode!=="question"){
   root.hidden=false;
   questionPane.hidden=true;
   const editorWasActive=active===mode;
   if(!activateEditor(mode))return false;
   if(mode==="work"&&editorWasActive)onReturnToWork?.();
  }else{
   root.hidden=true;
   questionPane.hidden=false;
  }
  mobileActive=mode;
  syncViewport();
  return true;
 }

 for(const [tab,mode] of [[workTab,"work"],[reviewTab,"review"]]){
  bind(tab,"click",()=>{if(!tab.disabled)activateEditor(mode);});
  bind(tab,"keydown",event=>{
   if(!["ArrowLeft","ArrowRight","Home","End"].includes(event.key))return;
   event.preventDefault();
   const target=event.key==="ArrowLeft"||event.key==="Home"?"work":"review";
   if(activateEditor(target))(target==="work"?workTab:reviewTab).focus();
  });
 }
 if(hasMobile){
  const enabled=()=>["question","work","review"].filter(key=>!mobileButtons[key].disabled);
  for(const [mode,button] of Object.entries(mobileButtons)){
   bind(button,"click",()=>{if(!button.disabled)selectMobile(mode);});
   bind(button,"keydown",event=>{
    if(!["ArrowLeft","ArrowRight","Home","End"].includes(event.key))return;
    event.preventDefault();
    const modes=enabled();
    const index=modes.indexOf(mode);
    const target=event.key==="Home"?modes[0]:event.key==="End"?modes[modes.length-1]:
     modes[(index+(event.key==="ArrowRight"?1:-1)+modes.length)%modes.length];
    if(selectMobile(target))mobileButtons[target].focus();
   });
  }
  if(media){
   const respond=()=>{
    const next=Boolean(media.matches);
    if(next===mobile)return;
    const focused=doc.activeElement;
    const desktopHadFocus=desktopTabs.contains(focused);
    const mobileHadFocus=mobileTabs.contains(focused);
    mobile=next;
    if(mobile&&mobileActive==="question"&&workPanel.contains(focused))dismissWorkingKeyboard();
    syncViewport();
    if(mobile&&desktopHadFocus)mobileButtons[mobileActive].focus();
    if(!mobile&&mobileHadFocus)(active==="work"?workTab:reviewTab).focus();
    if(!mobile&&active==="work")onReturnToWork?.();
   };
   if(typeof media.addEventListener==="function"){
    media.addEventListener("change",respond);
    unbind.push(()=>media.removeEventListener("change",respond));
   }else if(typeof media.addListener==="function"){
    media.addListener(respond);
    unbind.push(()=>media.removeListener(respond));
   }
  }
  syncViewport();
 }
 return ()=>{for(const cleanup of unbind)cleanup();};
}
