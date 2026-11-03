import test from 'node:test';
import assert from 'node:assert/strict';
import {mathjax} from 'mathjax-full/js/mathjax.js';
import {TeX} from 'mathjax-full/js/input/tex.js';
import {CHTML} from 'mathjax-full/js/output/chtml.js';
import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';
import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';
import {week01Questions} from '../src/data/week01.js';
import {week02Questions} from '../src/data/week02.js';
import {week03Questions} from '../src/data/week03.js';
import {week04Questions} from '../src/data/week04.js';
import {week05Questions} from '../src/data/week05.js';

const adaptor=liteAdaptor();
RegisterHTMLHandler(adaptor);
const document=mathjax.document('',{
 InputJax:new TeX({packages:AllPackages}),
 OutputJax:new CHTML({fontURL:'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'})
});
const mathFragment=/\\\(([\s\S]*?)\\\)/g;

test('each LaTeX expression in published Weeks 1–5 parses to MathJax without errors',()=>{
 let count=0;
 for(const q of [...week01Questions,...week02Questions,...week03Questions,...week04Questions,...week05Questions]){
  const texts=[q.stem,q.hint,q.answer,...q.parts.map(x=>x[0]),...q.steps];
  if(q.table)texts.push(...q.table.header,...q.table.rows.flat());
  for(const line of texts){
   for(const found of line.matchAll(mathFragment)){
    const input=found[1];count++;
    let html;
    try {html=adaptor.outerHTML(document.convert(input,{display:false}));}
    catch(err){assert.fail(q.id+' TeX '+JSON.stringify(input)+' threw: '+err.message)}
    assert.doesNotMatch(html,/mjx-merror|data-mjx-error|<merror/,q.id+' math error for '+input);
    assert.match(html,/mjx-container/,q.id+' did not format '+input);
   }
  }
 }
 assert.ok(count>=200,'Expected substantial coverage of mathematical expressions; found '+count);
});
