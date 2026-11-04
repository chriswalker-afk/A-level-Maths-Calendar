import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("P05",[
 {
  ao:"AO1",title:"Complete trigonometric solution sets",
  stem:"Give every solution in the stated interval, with exact values in radians.",
  parts:[
   ["Solve \\(2\\sin\\theta=\\sqrt3\\) for \\(0\\le\\theta<2\\pi\\).",3,"P05-009",["P05-008"]],
   ["Solve \\(\\cos(2\\theta)=\\tfrac12\\) for \\(0\\le\\theta\\le\\pi\\).",2,"P05-018"]
  ],
  steps:[
   "\\(\\sin\\theta=\\sqrt3/2\\), with reference angle \\(\\pi/3\\). Sine is positive in quadrants I and II, so \\(\\theta=\\pi/3,\\ 2\\pi/3\\). [3]",
   "Since \\(0\\le2\\theta\\le2\\pi\\), \\(2\\theta=\\pi/3\\) or \\(5\\pi/3\\). Dividing by 2 gives \\(\\theta=\\pi/6\\) or \\(5\\pi/6\\). [2]"
  ],
  hint:"Draw a unit circle or use the quadrants where the trig function has the correct sign.",
  answer:"(a) \\(\\pi/3,\\ 2\\pi/3\\); (b) \\(\\pi/6,\\ 5\\pi/6\\).",
  misconception:"When an angle is doubled, double the interval before solving, then halve every solution.",
  reflection:"What changes if the first interval includes \\(2\\pi\\)?"
 },
 {
  ao:"AO2",title:"An identity with a domain restriction",
  stem:"For angles where the expressions are defined, consider \\(\\dfrac{1-\\cos(2x)}{\\sin(2x)}\\).",
  parts:[
   ["Show that the expression simplifies to \\(\\tan x\\).",3,"P05-020",["P05-016"]],
   ["Hence solve \\(\\dfrac{1-\\cos(2x)}{\\sin(2x)}=\\dfrac1{\\sqrt3}\\) for \\(0<x<\\pi/2\\).",3,"P05-018",["P05-009"]],
   ["Explain why an angle with \\(\\sin(2x)=0\\) cannot be introduced when using the identity.",1,"P05-012"]
  ],
  steps:[
   "Use \\(1-\\cos(2x)=2\\sin^2x\\) and \\(\\sin(2x)=2\\sin x\\cos x\\). Thus the quotient equals \\(\\sin x/\\cos x=\\tan x\\), provided the original denominator is nonzero. [3]",
   "The equation becomes \\(\\tan x=1/\\sqrt3\\). On \\(0<x<\\pi/2\\), the unique solution is \\(x=\\pi/6\\). [3]",
   "The original quotient is undefined when \\(\\sin(2x)=0\\). Simplifying an expression must not enlarge its domain; those points cannot be admitted as solutions. [1]"
  ],
  hint:"Replace both the numerator and denominator using double-angle identities.",
  answer:"\\(x=\\pi/6\\) in the given interval.",
  misconception:"Cancelling \\(\\sin x\\) without noting where it is zero can create spurious apparent solutions.",
  reflection:"Does the simplification remain valid at \\(x=\\pi\\)? Explain."
 },
 {
  ao:"AO3",title:"When can a boat enter the harbour?",
  stem:"The water depth at a harbour is modelled, for \\(0\\le t\\le12\\) hours, by \\(h(t)=3+2\\sin(\\pi t/6)\\) metres. A small boat requires a depth of at least 4 metres.",
  parts:[
   ["Find the model's minimum depth, maximum depth and period.",3,"P05-021",["P05-007"]],
   ["Find every time interval in \\(0\\le t\\le12\\) during which the boat can enter.",4,"P05-018",["P05-009"]],
   ["State the total number of eligible hours and one limitation of the model.",2,"P05-021"]
  ],
  steps:[
   "The midline is 3 m and the amplitude is 2 m, giving minimum 1 m and maximum 5 m. The angular frequency is \\(\\pi/6\\), so the period is \\(2\\pi/(\\pi/6)=12\\) hours. [3]",
   "The boat needs \\(3+2\\sin(\\pi t/6)\\ge4\\), or \\(\\sin(\\pi t/6)\\ge1/2\\). Over one full period, \\(\\pi/6\\le\\pi t/6\\le5\\pi/6\\); multiplying by \\(6/\\pi\\) gives \\(1\\le t\\le5\\) hours. [4]",
   "The eligible window lasts \\(5-1=4\\) hours. Real tides may vary with weather or wind, so a perfectly periodic sine model need not give exact safe times. [2]"
  ],
  hint:"Solve the depth inequality as a sine inequality over a whole 12-hour cycle.",
  answer:"The boat may enter from \\(t=1\\) to \\(t=5\\) hours, a 4-hour window.",
  misconception:"A depth condition is an interval of time, not just the two boundary times.",
  reflection:"How would raising the required depth to 4.5 m alter the entry window?"
 }
]);
