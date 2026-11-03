/**
 * Per-question student working state. Pure functions keep this compatible with
 * localStorage, the old single-textarea format and future programme questions.
 *
 * A mode is only a view: notes, equations and drawing are retained together.
 */
export const WORKING_MODES = Object.freeze(["notes", "maths", "draw"]);
export const INK_COLOURS = Object.freeze(["#183a46", "#197a70", "#ba554a"]);
export const INK_WIDTHS = Object.freeze([2, 4, 7]);
export const MAX_MATH_LINES = 80;
export const MAX_INK_STROKES = 180;
export const MAX_POINTS_PER_STROKE = 500;

function plainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

const clamp = value => Math.min(1, Math.max(0, Number(value)));
export const roundPoint = value => Math.round(clamp(value) * 10000) / 10000;

export function newMathLine() {
  const id = typeof globalThis.crypto?.randomUUID === "function"
    ? globalThis.crypto.randomUUID()
    : Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
  return {id: "step-" + id, latex: "", reason: ""};
}

function normalizeMathLine(value, index) {
  const item = plainObject(value);
  const id = typeof item.id === "string" && /^[a-z0-9-]{1,70}$/i.test(item.id)
    ? item.id
    : "legacy-" + index;
  return {
    id,
    latex: typeof item.latex === "string" ? item.latex : "",
    reason: typeof item.reason === "string" ? item.reason : ""
  };
}

export function normalizeStroke(value) {
  const item = plainObject(value);
  if (!Array.isArray(item.points) || !item.points.length) return null;
  const points = item.points
    .slice(0, MAX_POINTS_PER_STROKE)
    .filter(p => Array.isArray(p) && p.length === 2 && p.every(v => Number.isFinite(Number(v))))
    .map(([x,y]) => [roundPoint(x), roundPoint(y)]);
  if (!points.length) return null;
  return {
    color: INK_COLOURS.includes(item.color) ? item.color : INK_COLOURS[0],
    width: INK_WIDTHS.includes(item.width) ? item.width : INK_WIDTHS[1],
    points
  };
}

export function normalizeWorkspace(input, legacyText = "") {
  const w = plainObject(input);
  const mathLines = Array.isArray(w.mathLines) ? w.mathLines.slice(0, MAX_MATH_LINES).map(normalizeMathLine) : [];
  const seen = new Set();
  const uniqueLines = mathLines.map(line => {
    if (seen.has(line.id)) line = {...line, id: newMathLine().id};
    seen.add(line.id);
    return line;
  });
  const strokes = Array.isArray(w.strokes)
    ? w.strokes.slice(0, MAX_INK_STROKES).map(normalizeStroke).filter(Boolean)
    : [];
  return {
    mode: WORKING_MODES.includes(w.mode) ? w.mode : "notes",
    notes: typeof w.notes === "string" ? w.notes : String(legacyText ?? ""),
    mathLines: uniqueLines.length ? uniqueLines : [newMathLine()],
    strokes,
    colour: INK_COLOURS.includes(w.colour) ? w.colour : INK_COLOURS[0],
    penWidth: INK_WIDTHS.includes(w.penWidth) ? w.penWidth : INK_WIDTHS[1],
    tool: w.tool === "eraser" ? "eraser" : "pen",
    grid: w.grid !== false
  };
}

export function addMathLine(lines, afterId) {
  if (lines.length >= MAX_MATH_LINES) return lines;
  const index = lines.findIndex(line => line.id === afterId);
  const at = index < 0 ? lines.length : index + 1;
  return [...lines.slice(0, at), newMathLine(), ...lines.slice(at)];
}

export function updateMathLine(lines, id, patch) {
  return lines.map(line => line.id === id ? {
    ...line,
    ...(typeof patch.latex === "string" ? {latex: patch.latex} : {}),
    ...(typeof patch.reason === "string" ? {reason: patch.reason} : {})
  } : line);
}

export function removeMathLine(lines, id) {
  const next = lines.filter(line => line.id !== id);
  return next.length ? next : [newMathLine()];
}

// The eraser uses segment distance in CSS pixels, not just distance to
// recorded points, so quick strokes with widely spaced samples can be erased.
function segmentDistance(px, py, ax, ay, bx, by) {
  const dx=bx-ax, dy=by-ay, d2=dx*dx+dy*dy;
  const t=d2 ? Math.max(0,Math.min(1,((px-ax)*dx+(py-ay)*dy)/d2)) : 0;
  return Math.hypot(px-(ax+t*dx),py-(ay+t*dy));
}
export function strokeHitTest(stroke, x, y, cssWidth, cssHeight, radius=12) {
  if (!stroke?.points?.length || cssWidth<=0 || cssHeight<=0) return false;
  const px=x*cssWidth,py=y*cssHeight,points=stroke.points;
  if (points.length===1) {
    return Math.hypot(px-points[0][0]*cssWidth,py-points[0][1]*cssHeight)<=radius+stroke.width/2;
  }
  for (let i=1;i<points.length;i++) {
    if (segmentDistance(px,py,points[i-1][0]*cssWidth,points[i-1][1]*cssHeight,
      points[i][0]*cssWidth,points[i][1]*cssHeight)<=radius+stroke.width/2) return true;
  }
  return false;
}
