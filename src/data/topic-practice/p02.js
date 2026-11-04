import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("P02",[
 {
  ao:"AO1",title:"A factorisable quadratic",
  stem:"Solve \\(2x^2-7x-4=0\\), showing the algebra used.",
  parts:[
   ["Factorise the quadratic expression.",3,"P02-005"],
   ["Find both roots of the equation.",2,"P02-005"]
  ],
  steps:[
   "Find two numbers with product \\(2(-4)=-8\\) and sum \\(-7\\): \\(-8\\) and \\(1\\). Then \\(2x^2-8x+x-4=(2x+1)(x-4)\\). [3]",
   "\\((2x+1)(x-4)=0\\) gives \\(2x+1=0\\) or \\(x-4=0\\). Therefore \\(x=-\\tfrac12\\) or \\(x=4\\). [2]"
  ],
  hint:"Split the middle term using the numbers \\(-8\\) and \\(1\\).",
  answer:"\\(x=-\\tfrac12\\) or \\(x=4\\).",
  misconception:"When one factor is \\(2x+1\\), its root is \\(-\\tfrac12\\), not \\(-1\\).",
  reflection:"How can you verify both solutions without repeating the factorisation?"
 },
 {
  ao:"AO2",title:"A rational inequality",
  stem:"Solve \\(\\dfrac{x+1}{x-2}\\ge 2\\), giving your answer as an interval and identifying excluded values.",
  parts:[
   ["Rewrite the inequality with zero on one side, as a single rational expression.",2,"P02-012"],
   ["Use the critical values to determine the solution set.",4,"P02-012",["P02-011"]],
   ["Explain why one critical value cannot be included.",1,"P02-016"]
  ],
  steps:[
   "\\(\\dfrac{x+1}{x-2}-2=\\dfrac{5-x}{x-2}\\ge0\\). Do not multiply by \\(x-2\\) without considering its sign. [2]",
   "The critical values are \\(x=2\\) and \\(x=5\\). For \\(x<2\\), the quotient is negative; for \\(2<x<5\\), it is positive; for \\(x>5\\), it is negative. At \\(x=5\\) it is zero. Hence \\(2<x\\le5\\). [4]",
   "\\(x=2\\) makes the denominator zero, so the original expression is undefined there. [1]"
  ],
  hint:"Subtract 2 and locate the numerator's zero and denominator's zero.",
  answer:"\\(x\\in(2,5]\\).",
  misconception:"Multiplying an inequality by a variable expression without knowing its sign can reverse the inequality.",
  reflection:"Why is the solution not simply \\(x\\ge5\\)?"
 },
 {
  ao:"AO3",title:"Design constraints for a courtyard",
  stem:"A rectangular courtyard has width \\(x\\) metres and length \\(x+5\\) metres, where \\(x>0\\). Its area must be at least \\(150\\text{ m}^2\\), while its perimeter must not exceed \\(54\\text{ m}\\).",
  parts:[
   ["Express both requirements as inequalities in \\(x\\).",2,"P02-028"],
   ["Solve the area inequality using the physically meaningful domain.",3,"P02-011",["P02-005"]],
   ["Find every feasible value of \\(x\\) and explain the interval endpoints.",4,"P02-029",["P02-011"]]
  ],
  steps:[
   "The area is \\(x(x+5)\\), so \\(x^2+5x\\ge150\\). The perimeter is \\(2x+2(x+5)=4x+10\\), so \\(4x+10\\le54\\). [2]",
   "\\(x^2+5x-150=(x+15)(x-10)\\ge0\\), giving \\(x\\le-15\\) or \\(x\\ge10\\). Since a width is positive, only \\(x\\ge10\\) is meaningful. [3]",
   "The perimeter condition gives \\(x\\le11\\). Combining the constraints yields \\(10\\le x\\le11\\) metres. Both endpoints are allowed: at \\(x=10\\), the area is exactly \\(150\\text{ m}^2\\); at \\(x=11\\), the perimeter is exactly \\(54\\text{ m}\\). [4]"
  ],
  hint:"Write separate inequalities for area and perimeter before trying to solve either one.",
  answer:"\\(10\\le x\\le11\\) metres.",
  misconception:"A negative root may solve a quadratic inequality algebraically but violate the physical domain of the model.",
  reflection:"Would the feasible interval become wider or narrower if the maximum perimeter were reduced?"
 }
]);
