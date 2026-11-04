import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("P08",[
 {
  ao:"AO1",title:"Antiderivative with an initial value",
  stem:"A function \\(F\\) satisfies \\(F'(x)=6x^2-4x+3\\) and \\(F(1)=7\\).",
  parts:[
   ["Find the general expression for \\(F(x)\\).",3,"P08-001",["P08-003"]],
   ["Use the condition to find the constant and hence \\(F(2)\\).",2,"P08-005"]
  ],
  steps:[
   "Integrating each term gives \\(F(x)=2x^3-2x^2+3x+C\\). Differentiate to check: \\(6x^2-4x+3\\). [3]",
   "\\(F(1)=2-2+3+C=7\\), so \\(C=4\\). Therefore \\(F(2)=16-8+6+4=18\\). [2]"
  ],
  hint:"Integrate one term at a time and remember the arbitrary constant.",
  answer:"\\(F(x)=2x^3-2x^2+3x+4\\); \\(F(2)=18\\).",
  misconception:"An indefinite integral must include a constant; the condition determines its particular value.",
  reflection:"How would a different value of \\(F(1)\\) change the shape of the graph?"
 },
 {
  ao:"AO2",title:"Enclosed area between curves",
  stem:"The curves \\(y=4x-x^2\\) and \\(y=x\\) intersect and enclose a finite region.",
  parts:[
   ["Find the coordinates of the two intersections.",2,"P08-008",["P02-009"]],
   ["Form the correct definite integral for the enclosed area.",2,"P08-008"],
   ["Evaluate the exact area.",3,"P08-002",["P08-007"]]
  ],
  steps:[
   "Set \\(4x-x^2=x\\): \\(3x-x^2=x(3-x)=0\\), giving \\((0,0)\\) and \\((3,3)\\). [2]",
   "For \\(0<x<3\\), the parabola lies above the line, since \\((4x-x^2)-x=3x-x^2>0\\). Therefore area \\(A=\\int_0^3(3x-x^2)\\,dx\\). [2]",
   "\\(A=[\\tfrac32x^2-\\tfrac13x^3]_0^3=\\tfrac{27}{2}-9=\\tfrac92\\) square units. [3]"
  ],
  hint:"Before integrating, find the intersections and check which curve is higher.",
  answer:"\\(\\dfrac92\\) square units.",
  misconception:"Integrating each curve in the wrong order gives a negative signed integral rather than an area.",
  reflection:"What if the curves crossed once more inside the region?"
 },
 {
  ao:"AO3",title:"A population approaching its capacity",
  stem:"A habitat initially contains 50 animals. The population \\(P(t)\\), measured \\(t\\) years later, is modelled by \\(\\dfrac{dP}{dt}=k(200-P)\\), where \\(k>0\\). After 3 years the population is 125.",
  parts:[
   ["Solve the differential equation to show that \\(P(t)=200-150e^{-kt}\\).",4,"P08-017",["P08-018"]],
   ["Determine \\(k\\) exactly.",2,"P08-018"],
   ["Predict when the population first reaches 180.",2,"P08-019",["P06-004"]],
   ["Give a modelling limitation of the predicted long-term behaviour.",1,"P08-019"]
  ],
  steps:[
   "Separate variables: \\(\\dfrac{dP}{200-P}=k\\,dt\\). Integrate to get \\(-\\ln|200-P|=kt+C\\), or \\(200-P=Be^{-kt}\\). Since \\(P(0)=50\\), \\(B=150\\), so \\(P=200-150e^{-kt}\\). [4]",
   "At \\(t=3\\), \\(125=200-150e^{-3k}\\), so \\(e^{-3k}=1/2\\) and \\(k=\\ln2/3\\). [2]",
   "For \\(P=180\\), \\(20=150e^{-kt}\\), hence \\(t=\\ln(15/2)/k=\\dfrac{3\\ln(15/2)}{\\ln2}\\approx8.72\\) years. [2]",
   "The model fixes the limiting capacity at 200 and assumes a constant rate parameter; food, disease or migration could change both. [1]"
  ],
  hint:"Treat \\(200-P\\) as a single expression when integrating \\(1/(200-P)\\).",
  answer:"\\(k=\\ln2/3\\); population reaches 180 after about \\(8.72\\) years.",
  misconception:"Forgetting the negative sign in \\(\\int 1/(200-P)\\,dP\\) changes bounded growth into an unsuitable exponential.",
  reflection:"Why does this model never predict more than 200 animals?"
 }
]);
