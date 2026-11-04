import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("P07",[
 {
  ao:"AO1",title:"Chain rule and a tangent",
  stem:"The curve \\(C\\) has equation \\(y=(3x^2-2)^4\\).",
  parts:[
   ["Differentiate \\(y\\) with respect to \\(x\\).",3,"P07-012",["P07-005"]],
   ["Find the equation of the tangent to \\(C\\) at \\(x=1\\).",2,"P07-008"]
  ],
  steps:[
   "Let \\(u=3x^2-2\\). Then \\(dy/dx=4u^3(du/dx)=4(3x^2-2)^3(6x)=24x(3x^2-2)^3\\). [3]",
   "At \\(x=1\\), \\(y=1\\) and \\(dy/dx=24\\). The tangent is \\(y-1=24(x-1)\\), or \\(y=24x-23\\). [2]"
  ],
  hint:"Differentiate the outer fourth power, then multiply by the derivative of the inner expression.",
  answer:"\\(dy/dx=24x(3x^2-2)^3\\); tangent \\(y=24x-23\\).",
  misconception:"The chain rule requires the extra factor \\(6x\\).",
  reflection:"Why does the curve rise so steeply near \\(x=1\\)?"
 },
 {
  ao:"AO2",title:"Classifying two stationary points",
  stem:"Consider \\(f(x)=x^3-6x^2+9x+1\\).",
  parts:[
   ["Find \\(f'(x)\\) and the two stationary \\(x\\)-coordinates.",3,"P07-009",["P07-005"]],
   ["Find and classify both stationary points.",3,"P07-009",["P07-004"]],
   ["State precisely where \\(f\\) is increasing.",1,"P07-010"]
  ],
  steps:[
   "\\(f'(x)=3x^2-12x+9=3(x-1)(x-3)\\), so stationary points occur at \\(x=1,3\\). [3]",
   "\\(f(1)=5\\) and \\(f(3)=1\\). Since \\(f''(x)=6x-12\\), \\(f''(1)=-6<0\\) gives a local maximum \\((1,5)\\), and \\(f''(3)=6>0\\) a local minimum \\((3,1)\\). [3]",
   "The derivative is positive for \\(x<1\\) and \\(x>3\\), so \\(f\\) increases on \\(( -\\infty,1)\\) and \\((3,\\infty)\\). [1]"
  ],
  hint:"Factorise the first derivative before deciding where it is positive or negative.",
  answer:"Local maximum \\((1,5)\\), local minimum \\((3,1)\\); increasing for \\(x<1\\) or \\(x>3\\).",
  misconception:"A stationary point is not automatically a maximum; its type depends on derivative behaviour.",
  reflection:"Does a negative second derivative always prove a global maximum?"
 },
 {
  ao:"AO3",title:"Maximum volume from a sheet",
  stem:"An open-top box is made by removing a square of side \\(x\\) cm from each corner of a \\(30\\text{ cm}\\times20\\text{ cm}\\) sheet and folding up the sides. The base is rectangular. Material thickness is ignored.",
  parts:[
   ["Derive a formula for the volume \\(V(x)\\) and state the feasible domain.",3,"P07-011",["P02-028"]],
   ["Find the value of \\(x\\) giving the greatest volume.",4,"P07-011",["P07-009"]],
   ["Calculate the maximum volume and justify that the stationary point is a maximum.",2,"P07-011"]
  ],
  steps:[
   "The box has height \\(x\\) and base dimensions \\(30-2x\\) and \\(20-2x\\), so \\(V=x(30-2x)(20-2x)=600x-100x^2+4x^3\\) cm\\(^3\\). All dimensions are positive only for \\(0<x<10\\). [3]",
   "\\(V'=600-200x+12x^2=4(3x^2-50x+150)\\). Setting this to zero gives \\(x=\\dfrac{25\\pm5\\sqrt7}{3}\\). The plus sign is greater than 10, so the feasible stationary point is \\(x=\\dfrac{25-5\\sqrt7}{3}\\approx3.924\\) cm. [4]",
   "\\(V''=24x-200<0\\) at \\(x\\approx3.924\\); additionally volume tends to zero at both domain boundaries. Hence this is the global maximum. Substituting gives \\(V_{\\max}\\approx1056.31\\text{ cm}^3\\). [2]"
  ],
  hint:"Write the folded box's three dimensions before differentiating its volume.",
  answer:"Cut out squares of side \\(\\dfrac{25-5\\sqrt7}{3}\\approx3.924\\) cm; maximum volume \\(\\approx1056.31\\text{ cm}^3\\).",
  misconception:"The other algebraic stationary point is outside the physically possible dimensions.",
  reflection:"Would a closed-top box have the same optimum cut size? Why not?"
 }
]);
