/**
 * Pass D real-Chromium visual/interaction smoke test.
 * Uses the same static files served by GitHub Pages, offline MathJax from
 * devDependencies, and a matrix of student screen sizes. Screenshots are
 * uploaded by .github/workflows/browser-audit.yml for human visual review.
 */
import puppeteer from "puppeteer-core";
import http from "node:http";
import {readFileSync,existsSync,statSync,mkdirSync,writeFileSync} from "node:fs";
import {resolve,join,sep,extname} from "node:path";
import {pathToFileURL} from "node:url";
import {taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
 taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,
 taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions} from "../src/data/tagged-questions.js";

const root=process.cwd();
const output=resolve(root,"browser-audit-output");
mkdirSync(output,{recursive:true});
const mime={
 ".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",
 ".js":"text/javascript; charset=utf-8",".mjs":"text/javascript; charset=utf-8",
 ".json":"application/json; charset=utf-8",".svg":"image/svg+xml",
 ".woff":"font/woff",".woff2":"font/woff2",".png":"image/png"
};
function check(ok,message){if(!ok)throw new Error(message);}
function serve(){
 return http.createServer((req,res)=>{
  try{
   const url=new URL(req.url,"http://localhost");
   const requested=decodeURIComponent(url.pathname);
   const target=resolve(root,"."+((requested==="/")?"/index.html":requested));
   if(!target.startsWith(root+sep)||!existsSync(target)||!statSync(target).isFile()){
    res.writeHead(404);res.end("Not found");return;
   }
   res.writeHead(200,{"content-type":mime[extname(target)]||"application/octet-stream",
    "cache-control":"no-store"});
   res.end(readFileSync(target));
  }catch(err){res.writeHead(500);res.end(String(err.message));}
 });
}
const cases=[
 {name:"desktop-1440",width:1440,height:900},
 {name:"laptop-1366",width:1366,height:768},
 {name:"tablet-820",width:820,height:1180},
 {name:"phone-390",width:390,height:844},
 {name:"phone-360",width:360,height:640},
 {name:"landscape-844",width:844,height:390}
];
const banks=[
 taggedWeek01Questions,taggedWeek02Questions,taggedWeek03Questions,
 taggedWeek04Questions,taggedWeek05Questions,taggedWeek06Questions,
 taggedWeek07Questions,taggedWeek08Questions,taggedWeek09Questions
];
const longQuestions=banks.flatMap((list,idx)=>list.map(q=>({
 week:idx+1,q,all:list,weight:(q.stem?.length||0)+
 (q.parts||[]).reduce((n,p)=>n+String(p[0]).length,0)+
 (q.table?.rows?.length||0)*22
}))).sort((a,b)=>b.weight-a.weight);
const longest=longQuestions[0];
const longIndex=longest.all.filter(q=>q.section===longest.q.section)
 .findIndex(q=>q.id===longest.q.id);
const longRoute="#/study/"+longest.week+"/"+longest.q.section+"/"+longIndex;
const summaries=[];
const chromePaths=[
 process.env.CHROME_BIN,"/usr/bin/google-chrome","/usr/bin/google-chrome-stable",
 "/usr/bin/chromium","/usr/bin/chromium-browser"
].filter(Boolean);
const executablePath=chromePaths.find(p=>existsSync(p));
check(executablePath,"Chrome/Chromium is required on the browser audit runner");
const server=serve();
await new Promise(resolveListen=>server.listen(0,"127.0.0.1",resolveListen));
const origin="http://127.0.0.1:"+server.address().port;
const mathjax=resolve(root,"node_modules/mathjax-full/es5/tex-chtml.js");
let browser;
try{
 browser=await puppeteer.launch({executablePath,headless:true,
  args:["--no-sandbox","--disable-dev-shm-usage","--disable-gpu",
   "--hide-scrollbars","--force-color-profile=srgb"]});
 for(const item of cases){
  const context=await browser.createBrowserContext();
  const page=await context.newPage();
  const pageErrors=[];
  page.on("pageerror",error=>pageErrors.push(error.message));
  await page.setViewport({width:item.width,height:item.height,deviceScaleFactor:1,
   isMobile:item.width<=600,hasTouch:item.width<=900});
  await page.setRequestInterception(true);
  page.on("request",req=>{
   const url=req.url();
   if(url.startsWith(origin)){req.continue();return;}
   if(url.includes("mathjax@3/")){
    const part=url.split("mathjax@3/")[1]?.split("?")[0];
    const file=part?resolve(root,"node_modules/mathjax-full",part):"";
    if(file.startsWith(resolve(root,"node_modules/mathjax-full")+sep)&&
     existsSync(file)&&statSync(file).isFile()){
     req.respond({status:200,contentType:mime[extname(file)]||"text/javascript",
      body:readFileSync(file)});return;
    }
   }
   // Network-independent rendering; Maths steps must have its fallback.
   req.abort("blockedbyclient");
  });
  await page.goto(origin+"/#/study/1/R/0",{waitUntil:"domcontentloaded",timeout:30000});
  await page.waitForSelector("#active-question-title",{timeout:15000});
  const small=item.width<=900;
  const dom=await page.evaluate(()=>{
   const box=s=>{const r=document.querySelector(s)?.getBoundingClientRect();
    return r?{x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom,right:r.right}:null;};
   const el=document.querySelector(".study-answer-layout");
   return {
    screen:window.innerWidth,documentWidth:document.documentElement.scrollWidth,
    mobileTabsHidden:document.querySelector(".study-mobile-tabs").hidden,
    questionHidden:document.querySelector("#study-question-pane").hidden,
    writingHidden:document.querySelector("#study-writing-pane").hidden,
    nav:box(".study-question-toolbar"),tabs:box(".study-mobile-tabs"),
    question:box("#study-question-pane"),working:box("#study-writing-pane"),
    workbench:box(".study-answer-layout"),
    fitted:document.querySelector(".study-page").style.getPropertyValue("--study-fit-height"),
    pageScroll:window.scrollY
   };
  });
  check(dom.documentWidth<=dom.screen+6,
   item.name+": whole-document horizontal overflow "+dom.documentWidth+" > "+dom.screen);
  check(dom.workbench?.height>185,
   item.name+": question workspace clipped or missing");
  check(dom.questionHidden===false,item.name+": question must be visible initially");
  if(small){
   check(dom.mobileTabsHidden===false&&dom.writingHidden===true,
    item.name+": responsive tab state incorrect");
   check(dom.tabs?.height>=44,item.name+": mobile study tabs are too small");
   check(Boolean(dom.fitted),item.name+": dynamic viewport size not applied");
  }else{
   check(dom.mobileTabsHidden===true&&dom.writingHidden===false,
    item.name+": desktop split view hidden");
   check(dom.working.x>=dom.question.right-3,
    item.name+": question and working panes overlap");
  }
  await page.screenshot({path:join(output,item.name+"-question.png")});

  if(small)await page.click("#study-mobile-work");
  await page.waitForSelector("#work-notes",{visible:true});
  await page.$eval("#work-notes",node=>{
   node.value="Pass D saved reasoning";
   node.dispatchEvent(new Event("input",{bubbles:true}));
  });
  const workSaved=await page.evaluate(()=>{
   const rec=JSON.parse(localStorage.getItem("alevel-maths-calendar-progress-v1")||"{}");
   return rec["W01-R1"]?.workspace?.notes;
  });
  check(workSaved==="Pass D saved reasoning",item.name+": notes did not save");
  await page.screenshot({path:join(output,item.name+"-working.png")});

  // Working input remains mounted while switching to review.
  if(small)await page.click("#study-mobile-review");
  else await page.click("#study-tab-review");
  await page.waitForSelector("#solution-box",{visible:true});
  await page.waitForSelector("#self-mark-input",{visible:true});
  const scoreInfo=await page.evaluate(()=>{
   document.querySelector("[data-attempt-support=I]").click();
   const score=document.querySelector("#self-mark-input");
   score.value="0";score.dispatchEvent(new Event("input",{bubbles:true}));
   const raw=JSON.parse(localStorage.getItem("alevel-maths-calendar-progress-v1")||"{}");
   return {score:raw["W01-R1"]?.score,finished:document.querySelector("#question-finish-badge").dataset.finished,
    questionVisible:!document.querySelector("#study-question-pane").hidden};
  });
  check(scoreInfo.score===0&&scoreInfo.finished==="true",
   item.name+": zero-mark self-assessment failed");
  if(!small)check(scoreInfo.questionVisible,item.name+": question not visible beside marking");
  await page.screenshot({path:join(output,item.name+"-review.png")});
  if(small)await page.click("#study-mobile-work");
  else await page.click("#study-tab-work");
  const after=await page.$eval("#work-notes",el=>el.value);
  check(after==="Pass D saved reasoning",item.name+": switching tabs lost notes");

  if(item.name==="phone-390"){
   // A smaller visual viewport must not overlap the study controls.
   const original=await page.$eval(".study-answer-layout",el=>el.getBoundingClientRect().height);
   await page.setViewport({width:390,height:570,deviceScaleFactor:1,isMobile:true,hasTouch:true});
   await page.evaluate(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))));
   const reduced=await page.$eval(".study-answer-layout",el=>el.getBoundingClientRect().height);
   check(reduced<=original+2&&reduced>185,"virtual-viewport resize did not keep the panel usable");

   // Maths input has a usable fallback when the third-party keyboard is offline.
   const keyboardLayout=await page.evaluate(()=>{
    const box=s=>{const el=document.querySelector(s),r=el?.getBoundingClientRect();
     return {hidden:el?.hidden,top:r?.top,bottom:r?.bottom,height:r?.height,
      display:el?getComputedStyle(el).display:null};};
    return {height:innerHeight,scrollY,topbar:box(".topbar"),header:box(".study-header"),
     section:box(".study-section-nav"),questionNav:box(".study-question-toolbar"),
     mobileTabs:box(".study-mobile-tabs"),layout:box(".study-answer-layout"),
     writing:box("#study-writing-pane"),work:box("#study-panel-work"),
     mathsTab:box("#work-tab-maths")};
   });
   console.log("KEYBOARD_LAYOUT "+JSON.stringify(keyboardLayout));
   await page.click("#work-tab-maths");
   await page.waitForSelector(".maths-fallback-input",{visible:true,timeout:12000});
   await page.$eval(".maths-fallback-input",el=>{
    el.value="x^2-4";el.dispatchEvent(new Event("input",{bubbles:true}));
   });
   const mathSaved=await page.evaluate(()=>{
    const rec=JSON.parse(localStorage.getItem("alevel-maths-calendar-progress-v1")||"{}");
    return rec["W01-R1"]?.workspace?.mathLines?.[0]?.latex;
   });
   check(mathSaved==="x^2-4","mobile Maths steps fallback did not save");
   await page.click("#work-tab-draw");
   await page.waitForSelector("#working-ink",{visible:true});
   await page.evaluate(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))));
   const drawingLayout=await page.evaluate(()=>{
    const canvas=document.querySelector("#working-ink");
    const rec=JSON.parse(localStorage.getItem("alevel-maths-calendar-progress-v1")||"{}");
    return {width:canvas.width,height:canvas.height,rectWidth:canvas.getBoundingClientRect().width,
     mode:rec["W01-R1"]?.workspace?.mode,visible:!canvas.closest(".work-panel").hidden};
   });
   console.log("DRAWING_LAYOUT "+JSON.stringify(drawingLayout));
   check(drawingLayout.width>0&&drawingLayout.rectWidth>0,
    "Draw canvas did not initialise after returning from Maths steps");
   await page.$eval("#working-ink",canvas=>{
    const rect=canvas.getBoundingClientRect();
    const start={bubbles:true,cancelable:true,pointerId:71,pointerType:"pen",button:0,
     clientX:rect.left+30,clientY:rect.top+35};
    canvas.dispatchEvent(new PointerEvent("pointerdown",start));
    canvas.dispatchEvent(new PointerEvent("pointermove",{...start,clientX:start.clientX+40,clientY:start.clientY+30}));
    canvas.dispatchEvent(new PointerEvent("pointerup",{...start,clientX:start.clientX+40,clientY:start.clientY+30}));
   });
   const strokes=await page.evaluate(()=>{
    const rec=JSON.parse(localStorage.getItem("alevel-maths-calendar-progress-v1")||"{}");
    return rec["W01-R1"]?.workspace?.strokes?.length||0;
   });
   check(strokes>0,"touch drawing did not save a vector stroke");

   // Storage failures must be announced and not misrepresented as saved.
   await page.click("#study-mobile-review");
   await page.evaluate(()=>{
    window.__oldSet=Storage.prototype.setItem;
    Storage.prototype.setItem=function(){throw new Error("Simulated storage quota");};
    const score=document.querySelector("#self-mark-input");
    score.value="1";score.dispatchEvent(new Event("input",{bubbles:true}));
   });
   const warning=await page.$eval("#finish-save-status",el=>({
    text:el.textContent,error:el.classList.contains("save-error")
   }));
   check(warning.error&&/Could not save/.test(warning.text),"quota failure not announced");
   await page.evaluate(()=>{Storage.prototype.setItem=window.__oldSet;});
  }

  if(item.name==="laptop-1366"||item.name==="phone-360"){
   await page.evaluate(route=>{location.hash=route;},longRoute);
   await page.waitForFunction(route=>
    document.querySelector("#active-question-title")&&location.hash===route,{},longRoute);
   const noOuterOverflow=await page.evaluate(()=>{
    const pane=document.querySelector("#study-question-pane");
    const before=window.scrollY;
    pane.scrollTop=110;
    return {width:document.documentElement.scrollWidth,screen:document.documentElement.clientWidth,
     paneOverflow:getComputedStyle(pane).overflowY,outerScroll:window.scrollY-before,
     questionId:document.querySelector(".exam-sheet-code")?.textContent};
   });
   check(noOuterOverflow.width<=noOuterOverflow.screen+6,
    item.name+": long mathematical question causes page overflow");
   check(noOuterOverflow.paneOverflow==="auto",
    item.name+": long question is not independently scrollable");
   check(noOuterOverflow.outerScroll===0,
    item.name+": scrolling a long question moved the whole page");
   await page.screenshot({path:join(output,item.name+"-long-question.png")});
   if(small)await page.click("#study-mobile-review");
   else await page.click("#study-tab-review");
   await page.waitForSelector("#solution-box",{visible:true});
   const solutionScroll=await page.evaluate(()=>{
    const solution=document.querySelector(".study-solution-area");
    const before=window.scrollY;
    if(solution.scrollHeight>solution.clientHeight)solution.scrollTop=120;
    return {overflow:getComputedStyle(solution).overflowY,
     pageDelta:window.scrollY-before,
     schemeHeight:solution.scrollHeight,visibleHeight:solution.clientHeight};
   });
   check(solutionScroll.overflow==="auto"&&solutionScroll.pageDelta===0,
    item.name+": long mark scheme should scroll without moving the page");
   await page.screenshot({path:join(output,item.name+"-long-review.png")});
   // Detailed marks retain their precision even inside the compact dock.
   const partCount=await page.evaluate(()=>{
    const detail=document.querySelector("#mark-by-parts");
    if(!detail)return 0;
    detail.open=true;
    const inputs=[...detail.querySelectorAll("[data-part-mark]")];
    inputs.forEach(input=>{
     input.value="0";input.dispatchEvent(new Event("input",{bubbles:true}));
    });
    return inputs.length;
   });
   if(partCount>1){
    const detailed=await page.evaluate(id=>{
     const rec=JSON.parse(localStorage.getItem("alevel-maths-calendar-progress-v1")||"{}");
     return {score:rec[id]?.score,source:rec[id]?.scoreSource};
    },longest.q.id);
    check(detailed.score===0&&detailed.source==="parts",
     item.name+": zero-valued part breakdown did not calculate correctly");
   }
  }
  if(item.name==="phone-360"){
   // Timed Week 10 must not leak a solution or marking panel.
   await page.evaluate(()=>{location.hash="#/study/10/P/0";});
   await page.waitForSelector('[data-mock-action="start"][data-mock-section="P"]');
   await page.click('[data-mock-action="start"][data-mock-section="P"]');
   await page.waitForSelector(".mock-exam-lock");
   const locked=await page.evaluate(()=>({
    disabled:document.querySelector("#study-mobile-review")?.disabled,
    solution:document.querySelector("#solution-box")!==null,
    marks:document.querySelector("#question-assessment")!==null
   }));
   check(locked.disabled===true&&!locked.solution&&!locked.marks,
    "Timed mock must block solutions and marking");
   await page.screenshot({path:join(output,item.name+"-timed-mock.png")});
   await page.click('[data-mock-action="finish"][data-mock-section="P"]');
   await page.waitForSelector("#study-panel-review");
   const unlocked=await page.evaluate(()=>({
    disabled:document.querySelector("#study-mobile-review")?.disabled,
    solution:document.querySelector("#solution-box")!==null,
    marks:document.querySelector("#question-assessment")!==null
   }));
   check(unlocked.disabled===false&&unlocked.solution&&unlocked.marks,
    "Finished timed sitting must unlock self-marking and solutions");
  }
  // External study links: verify navigation, safe new-tab destinations, and
  // responsive card layout without depending on an external site's network.
  await page.evaluate(()=>{location.hash="#/links";});
  await page.waitForSelector(".links-page-grid .links-resource");
  const linkAudit=await page.evaluate(()=>{
   const cards=[...document.querySelectorAll(".links-resource")];
   const navLink=document.querySelector('nav[aria-label="Main navigation"] [data-nav="links"]');
   const navRect=navLink?.getBoundingClientRect();
   const rects=cards.map(card=>{
    const r=card.getBoundingClientRect();
    return {top:r.top,bottom:r.bottom,left:r.left,right:r.right};
   });
   return {
    current:navLink?.classList.contains("active"),
    navVisible:navRect?.width>0&&navRect.left>=-1&&navRect.right<=innerWidth+1,
    titles:cards.map(card=>card.querySelector("h2")?.textContent.trim()),
    urls:cards.map(card=>card.href),
    safe:cards.every(card=>card.target==="_blank"&&
       card.rel.includes("noopener")&&card.rel.includes("noreferrer")),
    pageWidth:document.documentElement.scrollWidth,
    viewportWidth:document.documentElement.clientWidth,
    rects
   };
  });
  const expectedLinks=[
   "https://statistics.mrwalkermaths.com/",
   "https://mechanics.mrwalkermaths.com/",
   "https://words.mrwalkermaths.com/",
   "https://sampling.mrwalkermaths.com/",
   "https://lds.mrwalkermaths.com/"
  ];
  check(linkAudit.current&&linkAudit.safe&&
    JSON.stringify(linkAudit.urls)===JSON.stringify(expectedLinks),
    item.name+": resources page has missing, incorrect or unsafe links");
  check(linkAudit.pageWidth<=linkAudit.viewportWidth+6,
    item.name+": links page causes horizontal document overflow");
  if(item.width<=760){
   check(linkAudit.navVisible,
    item.name+": Links navigation should be visible without horizontal scrolling");
   check(linkAudit.rects[1].top>=linkAudit.rects[0].bottom-2,
    item.name+": resources should stack on a phone");
  }else{
   check(Math.abs(linkAudit.rects[1].top-linkAudit.rects[0].top)<3,
    item.name+": resources should use the two-column grid");
  }
  await page.screenshot({path:join(output,item.name+"-links.png")});
  check(pageErrors.length===0,item.name+": page exceptions: "+pageErrors.join(" | "));
  summaries.push({name:item.name,size:item.width+"x"+item.height,
   dynamicHeight:dom.fitted,questionVisible:!dom.questionHidden,
   zeroMarkSaved:scoreInfo.score===0,pageErrors:pageErrors.length});
  await context.close();
 }
 writeFileSync(join(output,"audit-results.json"),JSON.stringify({
  checkedAt:new Date().toISOString(),longQuestion:longest.q.id,
  viewports:summaries
 },null,2)+"\n");
 console.log("Pass D browser audit passed for "+summaries.length+" viewports");
 console.log(JSON.stringify(summaries));
}finally{
 await browser?.close();
 await new Promise(resolveClose=>server.close(resolveClose));
}