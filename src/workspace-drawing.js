import {
  MAX_INK_STROKES, MAX_POINTS_PER_STROKE, roundPoint, strokeHitTest
} from "./working-state.js";

export function drawStrokes(ctx,width,height,strokes,active=null,clear=true){
  if(!ctx||width<=0||height<=0)return;
  if(clear)ctx.clearRect(0,0,width,height);
  const toDraw=active?[...strokes,active]:strokes;
  for(const stroke of toDraw){
    if(!stroke?.points?.length)continue;
    ctx.beginPath();
    ctx.strokeStyle=stroke.color;ctx.fillStyle=stroke.color;
    ctx.lineWidth=stroke.width;ctx.lineCap="round";ctx.lineJoin="round";
    for(let i=0;i<stroke.points.length;i++){
      const [x,y]=stroke.points[i];
      if(i===0)ctx.moveTo(x*width,y*height);
      else ctx.lineTo(x*width,y*height);
    }
    if(stroke.points.length===1){
      const [x,y]=stroke.points[0];
      ctx.arc(x*width,y*height,Math.max(1,stroke.width/2),0,Math.PI*2);
      ctx.fill();
    }else ctx.stroke();
  }
}

/**
 * Vector strokes are saved as normalized coordinates, so they can be repainted
 * at tablet/desktop widths and higher display pixel ratios.
 */
export function mountDrawing(root,{state,save,notify,questionId="working"}){
  const $=s=>root.querySelector(s),$$=s=>[...root.querySelectorAll(s)];
  const canvas=$("#working-ink"),wrap=$(".ink-canvas-wrap");
  const ctx=canvas.getContext("2d");
  let width=0,height=0;
  let activePointer=null,activeStroke=null,eraserChanged=false;
  let undoStack=[],redoStack=[];
  let observer=null,disposed=false;

  function paint(){
    drawStrokes(ctx,width,height,state.strokes,activeStroke);
  }
  function resize(){
    if(disposed||state.mode!=="draw"||!ctx)return;
    const rect=canvas.getBoundingClientRect();
    if(rect.width<1||rect.height<1)return;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    width=rect.width;height=rect.height;
    const pixelW=Math.round(width*dpr),pixelH=Math.round(height*dpr);
    if(canvas.width!==pixelW||canvas.height!==pixelH){
      canvas.width=pixelW;canvas.height=pixelH;
    }
    ctx.setTransform(dpr,0,0,dpr,0,0);
    paint();
  }
  function syncButtons(){
    $$("[data-ink-tool]").forEach(b=>
      b.setAttribute("aria-pressed",String(b.dataset.inkTool===state.tool)));
    $$("[data-ink-colour]").forEach(b=>
      b.setAttribute("aria-pressed",String(b.dataset.inkColour===state.colour)));
    $$("[data-ink-width]").forEach(b=>
      b.setAttribute("aria-pressed",String(Number(b.dataset.inkWidth)===state.penWidth)));
    $("#ink-grid").checked=state.grid;
    wrap.classList.toggle("has-grid",state.grid);
    wrap.classList.toggle("eraser-active",state.tool==="eraser");
    $("#ink-undo").disabled=undoStack.length===0;
    $("#ink-redo").disabled=redoStack.length===0;
    $("#ink-clear").disabled=state.strokes.length===0;
    $("#ink-export").disabled=state.strokes.length===0;
  }
  function point(event){
    const rect=canvas.getBoundingClientRect();
    return [roundPoint((event.clientX-rect.left)/rect.width),
      roundPoint((event.clientY-rect.top)/rect.height)];
  }
  function recordUndo(){
    undoStack.push(state.strokes); // immutable arrays; cheap snapshots
    if(undoStack.length>32)undoStack.shift();
    redoStack=[];
  }
  function eraseAt(p){
    let index=-1;
    for(let i=state.strokes.length-1;i>=0;i--){
      if(strokeHitTest(state.strokes[i],p[0],p[1],width,height,14)){
        index=i;break;
      }
    }
    if(index<0)return;
    if(!eraserChanged)recordUndo();
    eraserChanged=true;
    state.strokes=state.strokes.filter((_,i)=>i!==index);
    syncButtons();
  }
  function finish(event){
    if(activePointer===null || (event&&event.pointerId!==activePointer))return;
    if(activeStroke?.points?.length){
      recordUndo();
      state.strokes=[...state.strokes,activeStroke];
      save();
    }else if(eraserChanged)save();
    activePointer=null;activeStroke=null;eraserChanged=false;
    paint();syncButtons();
  }
  function pointerDown(event){
    if(disposed||state.mode!=="draw"||!ctx||!width||activePointer!==null)return;
    if(event.pointerType==="mouse"&&event.button!==0)return;
    event.preventDefault();
    activePointer=event.pointerId;
    try{canvas.setPointerCapture(event.pointerId);}catch{}
    const p=point(event);
    if(state.tool==="eraser"){
      eraserChanged=false;eraseAt(p);
    }else{
      if(state.strokes.length>=MAX_INK_STROKES){
        notify("Maximum number of strokes reached. Export or clear to continue.",true);
        activePointer=null;
        try{canvas.releasePointerCapture(event.pointerId);}catch{}
        return;
      }
      activeStroke={color:state.colour,width:state.penWidth,points:[p]};
    }
    paint();
  }
  function pointerMove(event){
    if(activePointer===null||event.pointerId!==activePointer)return;
    event.preventDefault();
    const p=point(event);
    if(state.tool==="eraser")eraseAt(p);
    else if(activeStroke){
      const prev=activeStroke.points.at(-1);
      const distance=Math.hypot((p[0]-prev[0])*width,(p[1]-prev[1])*height);
      if(distance>1.5&&activeStroke.points.length<MAX_POINTS_PER_STROKE)
        activeStroke.points.push(p);
    }
    paint();
  }
  function undo(){
    if(activePointer!==null)finish();
    if(!undoStack.length)return;
    redoStack.push(state.strokes);
    state.strokes=undoStack.pop();
    paint();syncButtons();save();
  }
  function redo(){
    if(activePointer!==null)finish();
    if(!redoStack.length)return;
    undoStack.push(state.strokes);
    state.strokes=redoStack.pop();
    paint();syncButtons();save();
  }
  function clear(){
    if(!state.strokes.length)return;
    if(!window.confirm("Clear the drawing for this question? Your notes and maths lines will be kept."))return;
    recordUndo();
    state.strokes=[];
    paint();syncButtons();save();
  }
  function exportPNG(){
    if(!state.strokes.length||!ctx||!width||!height)return;
    const output=document.createElement("canvas");
    output.width=Math.max(500,Math.round(width*2));
    output.height=Math.max(280,Math.round(height*2));
    const out=output.getContext("2d");if(!out)return;
    out.fillStyle="#ffffff";out.fillRect(0,0,output.width,output.height);
    if(state.grid){
      out.lineWidth=1;out.strokeStyle="#e4ece8";
      for(let x=0;x<=output.width;x+=50){
        out.beginPath();out.moveTo(x,0);out.lineTo(x,output.height);out.stroke();
      }
      for(let y=0;y<=output.height;y+=50){
        out.beginPath();out.moveTo(0,y);out.lineTo(output.width,y);out.stroke();
      }
    }
    out.save();
    out.scale(output.width/width,output.height/height);
    drawStrokes(out,width,height,state.strokes,null,false);
    out.restore();
    const download=blob=>{
      if(!blob){notify("Could not save an image of the drawing.",true);return;}
      const url=URL.createObjectURL(blob);
      const link=document.createElement("a");
      link.href=url;link.download=questionId+"-working.png";
      link.click();
      setTimeout(()=>URL.revokeObjectURL(url),2000);
    };
    if(typeof output.toBlob==="function")output.toBlob(download,"image/png");
    else{
      const link=document.createElement("a");
      link.href=output.toDataURL("image/png");
      link.download=questionId+"-working.png";
      link.click();
    }
  }

  $$("[data-ink-tool]").forEach(b=>b.addEventListener("click",()=>{
    state.tool=b.dataset.inkTool;
    syncButtons();save();
  }));
  $$("[data-ink-colour]").forEach(b=>b.addEventListener("click",()=>{
    state.colour=b.dataset.inkColour;state.tool="pen";
    syncButtons();save();
  }));
  $$("[data-ink-width]").forEach(b=>b.addEventListener("click",()=>{
    state.penWidth=Number(b.dataset.inkWidth);state.tool="pen";
    syncButtons();save();
  }));
  $("#ink-grid").addEventListener("change",e=>{
    state.grid=e.target.checked;syncButtons();save();
  });
  $("#ink-undo").addEventListener("click",undo);
  $("#ink-redo").addEventListener("click",redo);
  $("#ink-clear").addEventListener("click",clear);
  $("#ink-export").addEventListener("click",exportPNG);
  canvas.addEventListener("pointerdown",pointerDown);
  canvas.addEventListener("pointermove",pointerMove);
  canvas.addEventListener("pointerup",finish);
  canvas.addEventListener("pointercancel",finish);
  canvas.addEventListener("lostpointercapture",finish);
  canvas.addEventListener("keydown",e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="z"){
      e.preventDefault();e.shiftKey?redo():undo();
    }
  });
  if(typeof ResizeObserver==="function"){
    observer=new ResizeObserver(resize);
    observer.observe(wrap);
  }else window.addEventListener("resize",resize);
  syncButtons();
  return {
    activate(){requestAnimationFrame(resize);},
    resize,
    dispose(){
      if(activePointer!==null)finish();
      disposed=true;observer?.disconnect();
      if(!observer)window.removeEventListener("resize",resize);
    }
  };
}
