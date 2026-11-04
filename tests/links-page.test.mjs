import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {JSDOM} from "jsdom";
import {mathsLinks,renderLinksPage} from "../src/links-view.js";

const urls={
 "Statistics Lab":"https://statistics.mrwalkermaths.com/",
 "Mechanics Lab":"https://mechanics.mrwalkermaths.com/",
 "Maths Words Lab":"https://words.mrwalkermaths.com/",
 "Sampling Arcade":"https://sampling.mrwalkermaths.com/"
};

test("links page contains the four configured maths tools, with clear external links",()=>{
 assert.equal(mathsLinks.length,4);
 assert.deepEqual(Object.fromEntries(mathsLinks.map(x=>[x.title,x.href])),urls);
 const dom=new JSDOM(renderLinksPage(),{url:"https://example.com/A-level-Maths-Calendar/#/links"});
 const doc=dom.window.document;
 assert.equal(doc.querySelector("#links-page-title").textContent,"More maths tools");
 assert.equal(doc.querySelector(".back").getAttribute("href"),"#/calendar");
 const cards=[...doc.querySelectorAll(".links-page-grid .links-resource")];
 assert.equal(cards.length,4);
 for(let i=0;i<cards.length;i++){
   const card=cards[i],link=mathsLinks[i];
   assert.equal(card.tagName,"A");
   assert.equal(card.getAttribute("href"),link.href);
   assert.equal(card.getAttribute("target"),"_blank");
   assert.equal(card.getAttribute("rel"),"noopener noreferrer");
   assert.equal(card.querySelector("h2").textContent.trim(),link.title+" (opens in a new tab)");
   assert.ok(card.getAttribute("aria-labelledby"));
   assert.ok(card.getAttribute("aria-describedby"));
   assert.equal(card.getAttribute("aria-describedby"),card.querySelector("p").id);
   assert.match(card.querySelector(".links-resource-domain").textContent,/mrwalkermaths\.com/);
   assert.equal(new URL(link.href).protocol,"https:");
   assert.equal(card.querySelectorAll("button").length,0);
 }
 dom.window.close();
});

test("route links are reachable from the main navigation, active and independent of saved marks",async()=>{
 const html=readFileSync(new URL("../index.html",import.meta.url),"utf8");
 const dom=new JSDOM(html,{url:"https://example.com/A-level-Maths-Calendar/#/links"});
 const {window}=dom,doc=window.document;
 window.scrollTo=()=>{};
 globalThis.window=window;
 globalThis.document=doc;
 globalThis.location=window.location;
 globalThis.localStorage=window.localStorage;
 globalThis.customElements=window.customElements;
 globalThis.ResizeObserver=class{observe(){}disconnect(){}};
 globalThis.requestAnimationFrame=fn=>fn();
 window.HTMLCanvasElement.prototype.getContext=()=>({
  clearRect(){},setTransform(){},beginPath(){},moveTo(){},lineTo(){},
  stroke(){},arc(){},fill(){},fillRect(){},save(){},restore(){},scale(){},rect(){}
 });
 window.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({
  left:0,top:0,width:640,height:320,right:640,bottom:320
 });
 class FakeMathField extends window.HTMLElement{
  get value(){return this._value||"";}
  set value(value){this._value=String(value);}
  insert(value){this.value+=value;}
 }
 window.customElements.define("math-field",FakeMathField);
 const key="alevel-maths-calendar-progress-v1";
 const saved={ "W01-R1":{score:0,status:"I",workspace:{notes:"Saved reasoning"}} };
 window.localStorage.setItem(key,JSON.stringify(saved));
 try{
  await import("../src/app.js");
  const root=doc.querySelector("#app");
  const nav=doc.querySelector('[data-nav="links"]');
  assert.ok(nav,"Links appears in the site navigation");
  assert.equal(nav.getAttribute("href"),"#/links");
  assert.equal(nav.classList.contains("active"),true);
  assert.equal(root.querySelectorAll(".links-resource").length,4);
  assert.equal(doc.title,"More maths tools — A Level Maths Calendar");
  const goto=hash=>{window.location.hash=hash;window.dispatchEvent(new window.Event("hashchange"));};
  goto("#/calendar");
  assert.ok(root.querySelector(".planner-board"),"Calendar is still the homepage");
  assert.equal(nav.classList.contains("active"),false);
  goto("#/links");
  assert.equal(nav.classList.contains("active"),true);
  assert.equal(root.querySelectorAll(".links-resource").length,4);
  assert.equal(doc.activeElement,root.querySelector("h1"),"Route title receives keyboard focus");
  assert.deepEqual(JSON.parse(window.localStorage.getItem(key)),saved,
   "Visiting external resources must not change student progress");
  assert.equal(doc.querySelectorAll("nav[aria-label='Main navigation'] a[data-nav]").length,5);
 }finally{
  dom.window.close();
  for(const name of ["window","document","location","localStorage","customElements",
   "ResizeObserver","requestAnimationFrame"])delete globalThis[name];
 }
});

test("links page uses shared design tokens and retains single-column phone layout",()=>{
 const html=readFileSync(new URL("../index.html",import.meta.url),"utf8");
 const css=readFileSync(new URL("../styles/links-page.css",import.meta.url),"utf8");
 assert.match(html,/href="\.\/styles\/links-page\.css"/);
 assert.match(css,/--editorial-ink/);
 assert.match(css,/--editorial-paper/);
 assert.match(css,/\.links-page-grid\s*\{[\s\S]*?grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/\.links-page-grid\{grid-template-columns:1fr/);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
 assert.match(css,/\.links-resource:focus-visible/);
});
