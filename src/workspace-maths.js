import {
  MAX_MATH_LINES, addMathLine, updateMathLine, removeMathLine
} from "./working-state.js";

// Only requested when the student enters the Maths steps tab.
const CDN="https://cdn.jsdelivr.net/npm/mathlive@0.111.0/dist/mathlive.min.js";
let loader=null;
function loadMathLive(){
  if(customElements.get("math-field"))return Promise.resolve(true);
  if(loader)return loader;
  loader=new Promise(resolve=>{
    const script=document.createElement("script");
    script.src=CDN;script.async=true;
    let settled=false;
    const finish=ok=>{
      if(settled)return;
      settled=true;clearTimeout(timeout);
      if(!ok)loader=null; // user may retry by returning to Maths steps
      resolve(ok);
    };
    const timeout=setTimeout(()=>finish(false),9000);
    script.onload=()=>{
      if(customElements.get("math-field"))finish(true);
      else customElements.whenDefined("math-field").then(()=>finish(true),()=>finish(false));
    };
    script.onerror=()=>finish(false);
    document.head.appendChild(script);
  });
  return loader;
}

/**
 * Visual line-by-line mathematical working. The parent workspace owns state,
 * persistence and mode selection; this module only edits state.mathLines.
 */
export function mountMathsEditor(root,{state,save}){
  const $=s=>root.querySelector(s), $$=s=>[...root.querySelectorAll(s)];
  const rows=$("#maths-rows"),info=$("#maths-load-status");
  let activeId=state.mathLines[0].id;
  let ready=!!customElements.get("math-field");
  let disposed=false;
  function message(text,warning=false){
    info.textContent=text;
    info.classList.toggle("save-error",warning);
  }
  function update(id,patch){
    state.mathLines=updateMathLine(state.mathLines,id,patch);
    save();
  }
  function updatePreview(slot,latex){
    const preview=slot.querySelector(".maths-fallback-preview");
    if(!preview)return;
    const jax=window.MathJax;
    if(typeof jax?.typesetClear==="function")jax.typesetClear([preview]);
    preview.textContent=latex.trim()?"\\("+latex+"\\)":"Preview appears here";
    if(latex.trim()&&typeof jax?.typesetPromise==="function"){
      jax.typesetPromise([preview]).catch(()=>{
        preview.textContent="Preview unavailable; your expression is still saved.";
      });
    }
  }
  function insertAfter(id){
    if(state.mathLines.length>=MAX_MATH_LINES){
      message("Maximum of 80 maths lines; use Notes or Draw for further working.",true);return;
    }
    state.mathLines=addMathLine(state.mathLines,id);
    const pos=state.mathLines.findIndex(x=>x.id===id);
    const next=state.mathLines[Math.min(pos+1,state.mathLines.length-1)];
    activeId=next.id;save();renderRows(next.id);
  }
  function remove(id){
    state.mathLines=removeMathLine(state.mathLines,id);
    if(activeId===id)activeId=state.mathLines[0].id;
    save();renderRows();
  }
  function createMathField(slot,line,index){
    const mf=document.createElement("math-field");
    mf.className="maths-mathfield";
    mf.setAttribute("aria-label","Maths expression for step "+(index+1));
    mf.setAttribute("smart-fence","");
    mf.mathVirtualKeyboardPolicy="auto";
    mf.value=line.latex;
    mf.addEventListener("focusin",()=>{activeId=line.id;});
    mf.addEventListener("input",()=>update(line.id,{latex:mf.value}));
    mf.addEventListener("keydown",e=>{
      if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();insertAfter(line.id);}
    });
    mf.addEventListener("beforeinput",e=>{
      if(e.inputType==="insertLineBreak"){e.preventDefault();insertAfter(line.id);}
    });
    slot.append(mf);
  }
  function renderRows(focusId=null){
    rows.replaceChildren();
    state.mathLines.forEach((line,index)=>{
      const row=document.createElement("div");
      row.className="maths-row";
      row.dataset.mathRow=line.id;
      const number=document.createElement("span");
      number.className="maths-line-number";
      number.textContent=String(index+1).padStart(2,"0");
      const main=document.createElement("div");
      main.className="maths-row-content";
      const slot=document.createElement("div");
      slot.className="maths-editor-slot";
      slot.dataset.mathSlot=line.id;
      const reason=document.createElement("input");
      reason.type="text";reason.className="maths-reason";
      reason.value=line.reason;
      reason.placeholder="Optional explanation: factorise, substitute, differentiate…";
      reason.setAttribute("aria-label","Reason for step "+(index+1));
      reason.addEventListener("input",()=>update(line.id,{reason:reason.value}));
      main.append(slot,reason);
      const actions=document.createElement("div");
      actions.className="maths-row-actions";
      const add=document.createElement("button");
      add.type="button";add.className="maths-icon-btn";
      add.textContent="+";add.title="Insert line below";
      add.setAttribute("aria-label","Insert line after step "+(index+1));
      add.addEventListener("click",()=>insertAfter(line.id));
      const del=document.createElement("button");
      del.type="button";del.className="maths-icon-btn subtle-danger";
      del.textContent="×";del.title="Remove this line";
      del.setAttribute("aria-label","Remove maths step "+(index+1));
      del.addEventListener("click",()=>remove(line.id));
      actions.append(add,del);row.append(number,main,actions);rows.append(row);
      if(ready)createMathField(slot,line,index);
      else{
        const raw=document.createElement("input");
        raw.type="text";raw.className="maths-fallback-input";
        raw.value=line.latex;
        raw.placeholder="e.g. x^2 - 5x + 6 = 0";
        raw.setAttribute("aria-label","LaTeX expression for step "+(index+1));
        raw.addEventListener("focusin",()=>{activeId=line.id;});
        raw.addEventListener("input",()=>{
          update(line.id,{latex:raw.value});updatePreview(slot,raw.value);
        });
        raw.addEventListener("keydown",e=>{
          if(e.key==="Enter"){e.preventDefault();insertAfter(line.id);}
        });
        const preview=document.createElement("div");
        preview.className="maths-fallback-preview";
        slot.append(raw,preview);
        if(state.mode==="maths")updatePreview(slot,line.latex);
      }
    });
    if(ready)message("Visual maths keyboard ready. Tap a line to enter symbols.");
    if(focusId){
      const slot=$$(".maths-editor-slot").find(x=>x.dataset.mathSlot===focusId);
      slot?.querySelector("math-field,input")?.focus();
    }
  }
  async function activate(){
    if(disposed||ready)return;
    message("Preparing the visual maths keyboard…");
    const ok=await loadMathLive();
    if(disposed)return;
    if(!ok){
      message("Visual keyboard unavailable. You can enter LaTeX with a typeset preview, or switch to Notes or Draw.",true);
      for(const slot of $$(".maths-editor-slot")){
        const line=state.mathLines.find(l=>l.id===slot.dataset.mathSlot);
        if(line)updatePreview(slot,line.latex);
      }
      return;
    }
    ready=true;
    renderRows();
  }
  function insertSymbol(key){
    const commands={
      fraction:"\\frac{#@}{#?}",power:"^{#?}",root:"\\sqrt{#0}",
      integral:"\\int_{#?}^{#?}#0\\,dx",leq:"\\le",
      pi:"\\pi",theta:"\\theta",pm:"\\pm"
    };
    const fallback={fraction:"\\frac{ }{ }",power:"^{ }",root:"\\sqrt{ }",
      integral:"\\int_{ }^{ }\\,dx"};
    const command=commands[key];
    if(!command)return;
    const id=state.mathLines.some(l=>l.id===activeId)?activeId:state.mathLines.at(-1).id;
    const slot=$$(".maths-editor-slot").find(x=>x.dataset.mathSlot===id);
    const mf=slot?.querySelector("math-field");
    if(mf&&typeof mf.insert==="function"){
      mf.focus();mf.insert(command,{selectionMode:"placeholder"});
      update(id,{latex:mf.value});
    }else{
      const raw=slot?.querySelector("input");
      if(!raw)return;
      const value=fallback[key]||command;
      raw.focus();
      const start=raw.selectionStart??raw.value.length;
      const end=raw.selectionEnd??start;
      raw.value=raw.value.slice(0,start)+value+raw.value.slice(end);
      raw.setSelectionRange(start+value.length,start+value.length);
      update(id,{latex:raw.value});updatePreview(slot,raw.value);
    }
  }
  function copyMaths(){
    const text=state.mathLines.map((l,i)=>{
      if(!l.latex.trim()&&!l.reason.trim())return "";
      return (i+1)+". "+l.latex+(l.reason?"  ["+l.reason+"]":"");
    }).filter(Boolean).join("\n");
    if(!text){message("Add some mathematical working before copying.",true);return;}
    if(navigator.clipboard?.writeText){
      navigator.clipboard.writeText(text).then(()=>message("Maths method copied to clipboard."),
        ()=>message("Clipboard permission denied. Your maths lines are still saved.",true));
    }else message("Clipboard unavailable. Your working is still saved.",true);
  }

  $("#maths-add-line").addEventListener("click",()=>insertAfter(state.mathLines.at(-1).id));
  $("#maths-add-bottom").addEventListener("click",()=>insertAfter(state.mathLines.at(-1).id));
  $("#maths-copy").addEventListener("click",copyMaths);
  $$("[data-math-insert]").forEach(button=>
    button.addEventListener("click",()=>insertSymbol(button.dataset.mathInsert)));
  renderRows();
  return {activate,dispose(){disposed=true;}};
}
