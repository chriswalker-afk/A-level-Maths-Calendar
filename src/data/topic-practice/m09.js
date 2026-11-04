import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("M09",[
 {
  ao:"AO1",scope:"full",title:"Balancing a force using moments",
  stem:"A light horizontal beam is pivoted at its left end A. A 20 N downward force acts 3 m from A, and an upward force \\(F\\) is applied 4 m from A. The beam is in rotational equilibrium and its own weight is negligible.",
  parts:[
   ["Calculate the clockwise moment of the 20 N force about A.",2,"M09-001"],
   ["Find the magnitude of the upward balancing force \\(F\\).",3,"M09-002"]
  ],
  steps:[
   "Moment about A is force multiplied by the perpendicular distance: \\(20\\times3=60\\text{ N m}\\) clockwise. [2]",
   "Equilibrium requires total clockwise moment equal total anticlockwise moment. Thus \\(4F=60\\), so \\(F=15\\text{ N}\\) upward. [3]"
  ],
  hint:"Take moments about the pivot A so the reaction at A has zero moment.",
  answer:"Clockwise moment 60 N m; balancing force 15 N.",
  misconception:"Moment is measured in N m, not N, and the distance must be perpendicular to the force.",
  reflection:"Would moving the balancing force closer to A require a larger or smaller force?"
 },
 {
  ao:"AO2",scope:"full",title:"Two support reactions",
  stem:"A uniform horizontal beam AB is 6 m long and has mass 10 kg. It rests in equilibrium on vertical supports at A and B. An 8 kg box is placed 1.5 m from A. Use \\(g=9.8\\text{ m s}^{-2}\\).",
  parts:[
   ["State the weights and positions of the beam and box in a force model.",2,"M09-004"],
   ["Take moments about A to find the support reaction at B.",3,"M09-002",["M09-003"]],
   ["Use vertical force equilibrium to find the reaction at A.",2,"M09-003"]
  ],
  steps:[
   "The beam's weight is \\(10g=98\\) N acting at its midpoint, 3 m from A; the box weight is \\(8g=78.4\\) N acting 1.5 m from A. Let upward reactions be \\(R_A,R_B\\). [2]",
   "Moments about A give \\(6R_B=98(3)+78.4(1.5)=294+117.6=411.6\\). Therefore \\(R_B=68.6\\text{ N}\\). [3]",
   "Vertical forces sum to zero: \\(R_A+R_B=98+78.4=176.4\\) N, so \\(R_A=176.4-68.6=107.8\\text{ N}\\). [2]"
  ],
  hint:"For a uniform beam, its weight acts halfway along its length.",
  answer:"\\(R_B=68.6\\text{ N}\\), \\(R_A=107.8\\text{ N}\\).",
  misconception:"Ignoring the beam's own weight or applying it at one end changes both reactions.",
  reflection:"Which reaction would increase if the box were moved closer to B?"
 },
 {
  ao:"AO3",scope:"full",title:"A safe position on a supported platform",
  stem:"A 5 m uniform horizontal work platform has mass 12 kg and is supported vertically at its two ends A and B. A 75 kg worker stands at distance \\(x\\) metres from A, with \\(0\\le x\\le5\\). The support at B must not carry more than 550 N. Use \\(g=9.8\\text{ m s}^{-2}\\).",
  parts:[
   ["Find the support reaction \\(R_B\\) in terms of \\(x\\).",3,"M09-003",["M09-004"]],
   ["Determine the furthest the worker can stand from A without exceeding B's rating.",3,"M09-005",["M09-002"]],
   ["Check the direction and magnitude of the reaction at A at this limiting position.",2,"M09-003"],
   ["State one modelling assumption that could affect the safety calculation.",1,"M09-007"]
  ],
  steps:[
   "Taking moments about A: \\(5R_B=(12g)(2.5)+(75g)x=294+735x\\). Therefore \\(R_B=(294+735x)/5=58.8+147x\\) N. [3]",
   "Require \\(58.8+147x\\le550\\), so \\(147x\\le491.2\\) and \\(x\\le491.2/147\\approx3.34\\) m. This lies within the physical domain \\(0\\le x\\le5\\). [3]",
   "The total weight is \\((12+75)g=852.6\\) N. At the limiting position \\(R_B=550\\) N, so \\(R_A=852.6-550=302.6\\) N upward; both supports remain in compression. [2]",
   "The model treats the worker as a point load and assumes the platform is uniform and rigid; movement or uneven mass distribution could change real reactions. [1]"
  ],
  hint:"Take moments about A to eliminate its unknown support reaction.",
  answer:"Maximum worker distance from A \\(\\approx3.34\\) m; at this position \\(R_A=302.6\\) N upward.",
  misconception:"A numerical solution must also respect \\(0\\le x\\le5\\) and the physical requirement that the supports remain in contact.",
  reflection:"What would happen to the maximum safe distance if the worker carried an extra 10 kg?"
 }
]);
