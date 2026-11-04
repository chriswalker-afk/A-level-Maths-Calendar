import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import {mountStudyReviewModes} from "../src/study-review-modes.js";

function build({timed=false}={}){
 const dom=new JSDOM('<main><div id="root"><div role="tablist">'+
 '<button id="study-tab-work" role="tab" aria-selected="true" tabindex="0">My working</button>'+
 '<button id="study-tab-review" role="tab" aria-selected="false" tabindex="-1"'+(timed?' disabled':'')+'>Check & mark</button>'+
 '</div><div id="study-panel-work"><textarea id="working">original notes</textarea></div>'+
 (timed?'':'<div id="study-panel-review" hidden><input id="self-mark-input"></div>')+
 '</div></main>');
 return {dom,root:dom.window.document.querySelector("#root")};
}

test("review tabs keep the original editor mounted while changing aria state",()=>{
 const {dom,root}=build();
 let firstReveals=0,returns=0;
 const dispose=mountStudyReviewModes(root,{onFirstReview:()=>firstReveals++,onReturnToWork:()=>returns++});
 const note=root.querySelector("#working"),work=root.querySelector("#study-panel-work"),review=root.querySelector("#study-panel-review");
 root.querySelector("#study-tab-review").click();
 assert.equal(work.hidden,true);
 assert.equal(review.hidden,false);
 assert.equal(root.querySelector("#study-tab-work").getAttribute("aria-selected"),"false");
 assert.equal(root.querySelector("#study-tab-review").getAttribute("aria-selected"),"true");
 assert.equal(firstReveals,1);
 root.querySelector("#study-tab-work").click();
 assert.equal(work.hidden,false);
 assert.equal(review.hidden,true);
 assert.equal(root.querySelector("#working"),note,"the saved editor is not remounted");
 assert.equal(note.value,"original notes");
 assert.equal(returns,1);
 root.querySelector("#study-tab-review").click();
 assert.equal(firstReveals,1,"switching back does not re-reveal a manually hidden scheme");
 dispose();dom.window.close();
});

test("arrow-key navigation changes modes, focuses the tab, and respects a timed lock",()=>{
 const {dom,root}=build();
 const work=root.querySelector("#study-tab-work"),review=root.querySelector("#study-tab-review");
 const dispose=mountStudyReviewModes(root);
 work.dispatchEvent(new dom.window.KeyboardEvent("keydown",{key:"ArrowRight",bubbles:true,cancelable:true}));
 assert.equal(review.getAttribute("aria-selected"),"true");
 assert.equal(dom.window.document.activeElement,review);
 review.dispatchEvent(new dom.window.KeyboardEvent("keydown",{key:"Home",bubbles:true,cancelable:true}));
 assert.equal(work.getAttribute("aria-selected"),"true");
 assert.equal(dom.window.document.activeElement,work);
 dispose();dom.window.close();

 const mock=build({timed:true});
 const stop=mountStudyReviewModes(mock.root);
 mock.root.querySelector("#study-tab-review").click();
 mock.root.querySelector("#study-tab-work").dispatchEvent(
  new mock.dom.window.KeyboardEvent("keydown",{key:"ArrowRight",bubbles:true,cancelable:true}));
 assert.equal(mock.root.querySelector("#study-tab-work").getAttribute("aria-selected"),"true");
 assert.equal(mock.root.querySelector("#study-panel-review"),null);
 stop();mock.dom.window.close();
});
