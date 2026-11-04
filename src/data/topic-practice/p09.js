import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("P09",[
 {
  ao:"AO1",title:"A trapezium-rule approximation",
  stem:"Estimate \\(\\displaystyle\\int_0^2(x^2+1)\\,dx\\) using four equal-width strips.",
  parts:[
   ["State the strip width and the five ordinates.",2,"P09-007"],
   ["Use the trapezium rule to find the estimate.",2,"P09-007"],
   ["Compare the estimate with the exact integral.",1,"P09-008",["P08-002"]]
  ],
  steps:[
   "The width is \\(h=(2-0)/4=1/2\\). At \\(x=0,0.5,1,1.5,2\\), the ordinates are \\(1,1.25,2,3.25,5\\). [2]",
   "\\(T=\\tfrac12[(1+5)/2+1.25+2+3.25]=\\tfrac12(9.5)=4.75\\). [2]",
   "The exact value is \\([x^3/3+x]_0^2=14/3\\approx4.6667\\). Thus the trapezium rule overestimates by \\(4.75-14/3=1/12\\). [1]"
  ],
  hint:"Use the two endpoint ordinates with half-weight; the three interior values have full weight.",
  answer:"Trapezium estimate \\(4.75\\), overestimate by \\(1/12\\).",
  misconception:"The factor \\(h\\) multiplies the whole trapezium-rule bracket, not just the endpoints.",
  reflection:"Why does a curve with positive second derivative tend to give an overestimate?"
 },
 {
  ao:"AO2",title:"Newton iteration and root uniqueness",
  stem:"The equation \\(x^3-x-1=0\\) has a root between 1.3 and 1.4. Apply Newton–Raphson starting from \\(x_0=1.5\\).",
  parts:[
   ["Verify a change of sign between 1.3 and 1.4.",2,"P09-001"],
   ["Write the Newton iteration and calculate \\(x_1\\) and \\(x_2\\) to at least four decimal places.",3,"P09-005"],
   ["Justify why there can be only one root with \\(x\\ge1\\).",2,"P09-006",["P07-010"]]
  ],
  steps:[
   "For \\(f(x)=x^3-x-1\\), \\(f(1.3)=-0.103<0\\) and \\(f(1.4)=0.344>0\\). Continuity gives at least one root between them. [2]",
   "\\(f'(x)=3x^2-1\\), so \\(x_{n+1}=x_n-\\dfrac{x_n^3-x_n-1}{3x_n^2-1}\\). Starting at 1.5 gives \\(x_1\\approx1.3478261\\), \\(x_2\\approx1.3252004\\). [3]",
   "For \\(x\\ge1\\), \\(f'(x)=3x^2-1\\ge2>0\\), so \\(f\\) is strictly increasing on this interval. It can cross zero at most once there. [2]"
  ],
  hint:"Differentiate \\(f(x)\\), then substitute the current estimate into \\(x-f(x)/f'(x)\\).",
  answer:"\\(x_1\\approx1.347826\\), \\(x_2\\approx1.325200\\); exactly one root for \\(x\\ge1\\).",
  misconception:"A sign change proves the existence of a root, not uniqueness without further reasoning.",
  reflection:"What could make Newton's method fail if a starting value has \\(f'(x)\\) close to zero?"
 },
 {
  ao:"AO3",title:"When will a tank reach its target volume?",
  stem:"A small tank is filled at rate \\(r(t)=2+e^{-t/2}\\) litres per minute, for \\(t\\ge0\\). It is initially empty. The operator wants to know when it first contains 9 litres.",
  parts:[
   ["Form an exact expression for the volume \\(V(t)\\).",3,"P09-010",["P08-005"]],
   ["Show that the required time lies between 3 and 4 minutes.",2,"P09-001"],
   ["Use one or more Newton–Raphson steps starting from \\(t_0=3.5\\) to obtain the time to two decimal places.",3,"P09-005",["P07-006"]],
   ["Explain why there is just one possible positive answer under this model.",1,"P09-011"]
  ],
  steps:[
   "\\(V(t)=\\int_0^t(2+e^{-u/2})\\,du=2t+2(1-e^{-t/2})\\) litres. We need to solve \\(f(t)=2t+2(1-e^{-t/2})-9=0\\). [3]",
   "\\(f(3)=6+2(1-e^{-1.5})-9\\approx-1.446<0\\) and \\(f(4)=8+2(1-e^{-2})-9\\approx0.729>0\\), so a root lies between 3 and 4. [2]",
   "\\(f'(t)=2+e^{-t/2}\\). Hence \\(t_{n+1}=t_n-\\dfrac{2t_n+2(1-e^{-t_n/2})-9}{2+e^{-t_n/2}}\\). From \\(3.5\\), \\(t_1\\approx3.659882\\), \\(t_2\\approx3.660383\\). Therefore \\(t\\approx3.66\\) minutes. [3]",
   "Since \\(V'(t)=r(t)=2+e^{-t/2}>0\\), volume strictly increases, so it reaches 9 litres only once. [1]"
  ],
  hint:"Integrate the inflow rate to obtain the volume, then solve a nonlinear equation numerically.",
  answer:"First reaches 9 litres at \\(t\\approx3.66\\) minutes.",
  misconception:"Newton's method must be applied to the volume-minus-target equation, not directly to the flow rate.",
  reflection:"How would a constant leak of 0.5 litres per minute affect the predicted time?"
 }
]);
