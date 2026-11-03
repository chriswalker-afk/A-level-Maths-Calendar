import test from "node:test";
import assert from "node:assert/strict";
import {
  WORKING_MODES,INK_COLOURS,MAX_POINTS_PER_STROKE,
  normalizeWorkspace,normalizeStroke,addMathLine,updateMathLine,
  removeMathLine,roundPoint,strokeHitTest
} from "../src/working-state.js";

test("legacy free-text working is preserved after upgrading the workspace",()=>{
  const upgraded=normalizeWorkspace(undefined,"Original GCSE working: x² = 4");
  assert.equal(upgraded.mode,"notes");
  assert.equal(upgraded.notes,"Original GCSE working: x² = 4");
  assert.equal(upgraded.mathLines.length,1);
  assert.equal(upgraded.strokes.length,0);
});

test("switching modes retains notes, lines and drawings",()=>{
  const original={
    mode:"draw",
    notes:"I used the discriminant",
    mathLines:[{id:"step-abc",latex:"x^2-4=0",reason:"Set y=0"}],
    strokes:[{color:INK_COLOURS[1],width:4,points:[[0.1,0.2],[0.8,0.7]]}],
    grid:false
  };
  for(const mode of WORKING_MODES){
    const state=normalizeWorkspace({...original,mode});
    assert.equal(state.mode,mode);
    assert.equal(state.notes,original.notes);
    assert.deepEqual(state.mathLines,original.mathLines);
    assert.deepEqual(state.strokes,original.strokes);
    assert.equal(state.grid,false);
  }
});

test("maths steps can be inserted, edited and removed without losing other lines",()=>{
  const first={id:"first",latex:"x^2=4",reason:""};
  const last={id:"last",latex:"x=2",reason:"positive root"};
  const inserted=addMathLine([first,last],"first");
  assert.equal(inserted.length,3);
  assert.equal(inserted[0].id,"first");
  assert.equal(inserted[2].id,"last");
  assert.ok(inserted[1].id.startsWith("step-"));
  const updated=updateMathLine(inserted,inserted[1].id,{latex:"x=\\pm2",reason:"take both roots"});
  assert.equal(updated[1].latex,"x=\\pm2");
  assert.equal(updated[1].reason,"take both roots");
  assert.equal(updated[0].latex,first.latex);
  assert.deepEqual(removeMathLine(updated,inserted[1].id),[first,last]);
  assert.equal(removeMathLine([first],"first").length,1,"keep an editable blank line");
});

test("drawing points are bounded and normalized for responsive repainting",()=>{
  const normalized=normalizeStroke({
    color:"#unknown",width:999,
    points:[[-0.5,1.3],[0.12111111,0.91555555]]
  });
  assert.equal(normalized.color,INK_COLOURS[0]);
  assert.equal(normalized.width,4);
  assert.deepEqual(normalized.points,[[0,1],[0.1211,0.9156]]);
  assert.equal(roundPoint(.543217),.5432);
  const many=Array.from({length:MAX_POINTS_PER_STROKE+15},(_,i)=>[i/1000,0.5]);
  assert.equal(normalizeStroke({points:many}).points.length,MAX_POINTS_PER_STROKE);
});

test("eraser can hit the middle of a stroke, not just recorded endpoints",()=>{
  const line={color:INK_COLOURS[0],width:4,points:[[0.1,0.5],[0.9,0.5]]};
  assert.equal(strokeHitTest(line,.55,.5,600,320,8),true);
  assert.equal(strokeHitTest(line,.55,.7,600,320,8),false);
  assert.equal(strokeHitTest(line,0,0,0,0,8),false);
});

test("malformed saved states fall back safely",()=>{
  const broken=normalizeWorkspace({mode:"mystery",notes:51,mathLines:[{},{}],
    strokes:[null,{points:[["bad",3]]}],colour:"javascript:alert(1)"}, "legacy");
  assert.equal(broken.mode,"notes");
  assert.equal(broken.notes,"legacy");
  assert.equal(broken.mathLines.length,2);
  assert.equal(broken.mathLines[0].latex,"");
  assert.equal(broken.strokes.length,0);
  assert.equal(broken.colour,INK_COLOURS[0]);
});
