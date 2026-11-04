import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {mountStudyReviewModes} from "../src/study-review-modes.js";

function setup({timed=false,initialMobile=true}={}){
 const html='<nav class="study-mobile-tabs" role="tablist" hidden>'+
  '<button id="study-mobile-question" role="tab" aria-selected="true">Question</button>'+
  '<button id="study-mobile-work" role="tab" aria-selected="false">My working</button>'+
  '<button id="study-mobile-review" role="tab" aria-selected="false"'+(timed?' disabled':'')+'>Check & mark</button>'+
  '</nav><div class="study-answer-layout">'+
  '<section id="study-question-pane" role="region" aria-label="Question prompt"><p>Find x</p></section>'+
  '<section class="study-writing-pane"><div class="study-answer-modes" role="tablist">'+
  '<button id="study-tab-work" role="tab" aria-selected="true">My working</button>'+
  '<button id="study-tab-review" role="tab" aria-selected="false"'+(timed?' disabled':'')+'>Check</button></div>'+
  '<section id="study-panel-work" role="tabpanel" aria-labelledby="study-tab-work"><textarea id="work-notes">Original work</textarea><canvas id="working-ink"></canvas></section>'+
  (timed?'':'<section id="study-panel-review" role="tabpanel" aria-labelledby="study-tab-review" hidden><input id="self-mark-input" type="number"></section>')+
  '</section></div>';
 const dom=new JSDOM(html,{url:"https://example.com"});
 const doc=dom.window.document;
 let isMobile=initialMobile,listener=null,resizeCallbacks=0;
 const media={
  get matches(){return isMobile;},
  addEventListener(type,fn){if(type==="change")listener=fn;},
  removeEventListener(type,fn){if(type==="change"&&listener===fn)listener=null;}
 };
 dom.window.matchMedia=()=>media;
 const root=doc.querySelector(".study-writing-pane");
 const question=doc.querySelector("#study-question-pane");
 const mobileTabs=doc.querySelector(".study-mobile-tabs");
 let reveals=0,returns=0,keyboardHides=0;
 dom.window.mathVirtualKeyboard={hide(){keyboardHides++;}};
 const dispose=mountStudyReviewModes(root,{
  questionPane:question,mobileTabs,
  onFirstReview(){reveals++;},
  onReturnToWork(){returns++;resizeCallbacks++;}
 });
 const click=mode=>doc.querySelector("#study-mobile-"+mode).click();
 return {dom,doc,root,question,mobileTabs,click,dispose,
  setMobile(value){isMobile=value;listener?.({matches:value});},
  get reveals(){return reveals;},get returns(){return returns;},
  get keyboardHides(){return keyboardHides;},
  get resizeCallbacks(){return resizeCallbacks;},
  get hasMediaListener(){return Boolean(listener);}
 };
}

test("mobile view starts at the question and switches without remounting saved working",()=>{
 const ui=setup();
 try{
  const {doc,root,question,mobileTabs}=ui;
  const note=doc.querySelector("#work-notes");
  const canvas=doc.querySelector("#working-ink");
  assert.equal(mobileTabs.hidden,false);
  assert.equal(doc.querySelector(".study-answer-modes").hidden,true);
  assert.equal(root.hidden,true);
  assert.equal(question.hidden,false);
  assert.equal(question.getAttribute("role"),"tabpanel");
  assert.equal(question.getAttribute("aria-labelledby"),"study-mobile-question");
  assert.equal(doc.querySelector("#study-mobile-question").getAttribute("aria-selected"),"true");

  ui.click("work");
  assert.equal(root.hidden,false);
  assert.equal(question.hidden,true);
  assert.equal(doc.querySelector("#study-panel-work").hidden,false);
  note.value="Saved mathematics";
  note.focus();
  assert.equal(doc.activeElement,note);
  ui.click("question");
  assert.equal(ui.keyboardHides,1,"on-screen maths keyboard closes when leaving work");
  assert.equal(doc.querySelector("#work-notes"),note);
  assert.equal(doc.querySelector("#working-ink"),canvas);
  question.scrollTop=112;
  ui.click("review");
  assert.equal(root.hidden,false);
  assert.equal(question.hidden,true);
  assert.equal(doc.querySelector("#study-panel-review").hidden,false);
  assert.equal(doc.querySelector("#study-panel-work").hidden,true);
  assert.equal(ui.reveals,1);
  ui.click("question");
  assert.equal(question.scrollTop,112,"question scroll position is preserved");
  ui.click("work");
  assert.equal(note.value,"Saved mathematics");
  assert.equal(doc.querySelector("#work-notes"),note);
  assert.ok(ui.returns>=2,"returning to writing triggers a canvas refresh");
  assert.equal(ui.reveals,1,"solution is revealed at most once");
 }finally{ui.dispose();ui.dom.window.close();}
});

test("mobile tabs support arrow, Home, End and focus management",()=>{
 const ui=setup();
 try{
  const {doc,dom}=ui;
  const q=doc.querySelector("#study-mobile-question");
  const w=doc.querySelector("#study-mobile-work");
  const r=doc.querySelector("#study-mobile-review");
  q.focus();
  q.dispatchEvent(new dom.window.KeyboardEvent("keydown",{key:"ArrowRight",bubbles:true,cancelable:true}));
  assert.equal(doc.activeElement,w);
  assert.equal(w.getAttribute("aria-selected"),"true");
  w.dispatchEvent(new dom.window.KeyboardEvent("keydown",{key:"End",bubbles:true,cancelable:true}));
  assert.equal(doc.activeElement,r);
  assert.equal(r.getAttribute("aria-selected"),"true");
  r.dispatchEvent(new dom.window.KeyboardEvent("keydown",{key:"ArrowRight",bubbles:true,cancelable:true}));
  assert.equal(doc.activeElement,q,"last tab wraps to first");
  q.dispatchEvent(new dom.window.KeyboardEvent("keydown",{key:"ArrowLeft",bubbles:true,cancelable:true}));
  assert.equal(doc.activeElement,r,"first tab wraps to last");
  r.dispatchEvent(new dom.window.KeyboardEvent("keydown",{key:"Home",bubbles:true,cancelable:true}));
  assert.equal(doc.activeElement,q);
 }finally{ui.dispose();ui.dom.window.close();}
});

test("resizing restores desktop split-screen and does not leak media listeners",()=>{
 const ui=setup();
 try{
  const {doc,root,question}=ui;
  ui.click("review");
  const review=doc.querySelector("#study-panel-review");
  assert.equal(review.hidden,false);
  ui.setMobile(false);
  assert.equal(ui.mobileTabs.hidden,true);
  assert.equal(doc.querySelector(".study-answer-modes").hidden,false);
  assert.equal(question.hidden,false);
  assert.equal(root.hidden,false);
  assert.equal(question.getAttribute("role"),"region");
  assert.equal(review.getAttribute("aria-labelledby"),"study-tab-review");
  ui.setMobile(true);
  assert.equal(ui.mobileTabs.hidden,false);
  assert.equal(question.hidden,true);
  assert.equal(review.getAttribute("aria-labelledby"),"study-mobile-review");
  assert.equal(doc.querySelector("#study-mobile-review").getAttribute("aria-selected"),"true");
  assert.ok(ui.hasMediaListener);
 }finally{ui.dispose();assert.equal(ui.hasMediaListener,false);ui.dom.window.close();}
});

test("an active timed paper cannot open a solution or marking view on small screens",()=>{
 const ui=setup({timed:true});
 try{
  const {doc,dom,root}=ui;
  const review=doc.querySelector("#study-mobile-review");
  assert.equal(review.disabled,true);
  assert.equal(review.getAttribute("aria-selected"),"false");
  assert.equal(doc.querySelector("#study-panel-review"),null);
  ui.click("review");
  assert.equal(root.hidden,true);
  assert.equal(ui.reveals,0);
  const q=doc.querySelector("#study-mobile-question");
  q.dispatchEvent(new dom.window.KeyboardEvent("keydown",{key:"ArrowLeft",bubbles:true,cancelable:true}));
  assert.equal(doc.activeElement,doc.querySelector("#study-mobile-work"),
    "keyboard navigation skips the disabled review tab");
  assert.equal(root.hidden,false);
  ui.setMobile(false);
  assert.equal(doc.querySelector("#study-panel-review"),null);
  assert.equal(doc.querySelector("#study-tab-review").disabled,true);
 }finally{ui.dispose();ui.dom.window.close();}
});
