import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {mountStudyReviewModes} from "../src/study-review-modes.js";

function fixture(){
 const dom=new JSDOM('<section class="study-page">'+
  '<div class="study-header"></div><nav class="study-section-nav"></nav>'+
  '<div class="study-question-toolbar"></div>'+
  '<nav class="study-mobile-tabs" hidden>'+
  '<button id="study-mobile-question" role="tab" aria-selected="true">Question</button>'+
  '<button id="study-mobile-work" role="tab" aria-selected="false">My working</button>'+
  '<button id="study-mobile-review" role="tab" aria-selected="false">Check & mark</button></nav>'+
  '<div class="study-answer-layout">'+
  '<section class="study-question-pane" role="region">Question</section>'+
  '<section class="study-writing-pane"><div class="study-answer-modes">'+
  '<button id="study-tab-work" role="tab" aria-selected="true">My working</button>'+
  '<button id="study-tab-review" role="tab" aria-selected="false">Check</button></div>'+
  '<section id="study-panel-work" role="tabpanel"><textarea id="work-notes"></textarea></section>'+
  '<section id="study-panel-review" role="tabpanel" hidden>Solution</section></section></div></section>');
 const doc=dom.window.document;
 const page=doc.querySelector(".study-page");
 const layout=doc.querySelector(".study-answer-layout");
 const questionBar=doc.querySelector(".study-question-toolbar");
 let top=310,width=390,visibleHeight=780,keyboardHides=0;
 layout.getBoundingClientRect=()=>({top,width,left:0,right:width,bottom:top+380,height:380});
 questionBar.getBoundingClientRect=()=>({top:240,width,height:58,bottom:298});
 const events=new Map();
 const viewport={
  offsetTop:0,
  get height(){return visibleHeight;},
  addEventListener(type,fn){events.set(type,fn);},
  removeEventListener(type,fn){if(events.get(type)===fn)events.delete(type);}
 };
 Object.defineProperty(dom.window,"visualViewport",{configurable:true,value:viewport});
 dom.window.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
 dom.window.mathVirtualKeyboard={hide(){keyboardHides++;}};
 const root=doc.querySelector(".study-writing-pane");
 const dispose=mountStudyReviewModes(root,{
  questionPane:doc.querySelector(".study-question-pane"),
  mobileTabs:doc.querySelector(".study-mobile-tabs")
 });
 return {dom,doc,root,page,dispose,viewport,events,
  setTop(t){top=t;},
  resize(height){visibleHeight=height;events.get("resize")?.();},
  get keyboardHides(){return keyboardHides;}
 };
}

test("shorter phone keyboard height reduces the answer panel without recreating work",()=>{
 const f=fixture();
 try{
  const {doc,page}=f;
  assert.equal(page.style.getPropertyValue("--study-fit-height"),"460px");
  assert.equal(page.style.getPropertyValue("--study-nav-height"),"58px");
  doc.querySelector("#study-mobile-work").click();
  const note=doc.querySelector("#work-notes");
  note.value="My algebra";
  note.focus();
  f.resize(520);
  assert.equal(page.style.getPropertyValue("--study-fit-height"),"220px");
  assert.equal(doc.querySelector("#work-notes"),note);
  assert.equal(note.value,"My algebra");
  doc.querySelector("#study-mobile-question").click();
  assert.equal(f.keyboardHides,1,"switching away closes the maths keyboard");
  doc.querySelector("#study-mobile-work").click();
  assert.equal(doc.querySelector("#work-notes"),note);
  f.setTop(220);f.resize(780);
  assert.equal(page.style.getPropertyValue("--study-fit-height"),"550px");
 }finally{
  f.dispose();
  assert.equal(f.page.style.getPropertyValue("--study-fit-height"),"");
  assert.equal(f.page.style.getPropertyValue("--study-nav-height"),"");
  assert.equal(f.events.size,0,"visual viewport listeners must be cleaned up");
  f.dom.window.close();
 }
});

test("switching directly from working to checking dismisses the virtual keyboard once",()=>{
 const f=fixture();
 try{
  f.doc.querySelector("#study-mobile-work").click();
  f.doc.querySelector("#work-notes").focus();
  f.doc.querySelector("#study-mobile-review").click();
  assert.equal(f.keyboardHides,1);
  assert.equal(f.doc.querySelector("#study-panel-review").hidden,false);
  assert.equal(f.doc.querySelector("#study-panel-work").hidden,true);
 }finally{f.dispose();f.dom.window.close();}
});
