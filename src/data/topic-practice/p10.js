import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("P10",[
 {
  ao:"AO1",title:"A displacement and its unit vector",
  stem:"Two points in three-dimensional space have position vectors \\(\\mathbf a=(2,-1,3)\\) and \\(\\mathbf b=(6,2,-9)\\).",
  parts:[
   ["Find the displacement vector \\(\\overrightarrow{AB}\\).",2,"P10-007",["P10-002"]],
   ["Calculate its magnitude.",1,"P10-003"],
   ["Find a unit vector in the direction from \\(A\\) to \\(B\\).",2,"P10-004"]
  ],
  steps:[
   "\\(\\overrightarrow{AB}=\\mathbf b-\\mathbf a=(6-2,\\ 2-(-1),\\ -9-3)=(4,3,-12)\\). [2]",
   "\\(|\\overrightarrow{AB}|=\\sqrt{4^2+3^2+(-12)^2}=\\sqrt{169}=13\\). [1]",
   "Divide the displacement by its nonzero magnitude: \\(\\hat{\\mathbf u}=\\dfrac1{13}(4,3,-12)\\). Its length is 1. [2]"
  ],
  hint:"Displacement from A to B is the position vector of B minus that of A.",
  answer:"\\(\\overrightarrow{AB}=(4,3,-12)\\), length 13, unit vector \\(\\tfrac1{13}(4,3,-12)\\).",
  misconception:"Reversing the subtraction gives a vector of the correct length but the wrong direction.",
  reflection:"What changes if you are asked for the unit vector from B to A?"
 },
 {
  ao:"AO2",title:"A vector section ratio",
  stem:"The points \\(A(1,3)\\), \\(B(7,5)\\) and \\(C(10,6)\\) are believed to lie on one straight line.",
  parts:[
   ["Calculate \\(\\overrightarrow{AB}\\) and \\(\\overrightarrow{BC}\\).",2,"P10-007"],
   ["Prove that the three points are collinear.",2,"P10-006"],
   ["Determine the ratio in which \\(B\\) divides the segment \\(AC\\), with reasoning.",3,"P10-009"]
  ],
  steps:[
   "\\(\\overrightarrow{AB}=(7-1,5-3)=(6,2)\\) and \\(\\overrightarrow{BC}=(10-7,6-5)=(3,1)\\). [2]",
   "\\(\\overrightarrow{AB}=2\\overrightarrow{BC}\\), so the vectors are parallel and point in the same direction from B. Hence A, B and C are collinear. [2]",
   "Because \\(|AB|=2|BC|\\) and B lies between A and C, \\(AB:BC=2:1\\). Equivalently \\(\\overrightarrow{AB}=\\tfrac23\\overrightarrow{AC}\\), which confirms the internal division ratio. [3]"
  ],
  hint:"A scalar multiple of one displacement vector gives another with the same direction.",
  answer:"A, B, C are collinear; \\(AB:BC=2:1\\).",
  misconception:"Equal gradients alone do not establish the intended section ratio without ordering the points.",
  reflection:"What would a negative scalar multiple tell you about the position of B?"
 },
 {
  ao:"AO3",title:"A drone flying through a changing wind",
  stem:"A drone maintains air-relative velocity \\((6,8)\\) m/s in horizontal east-north coordinates. Initially the wind velocity is \\((-2,1)\\) m/s. Its destination is 800 m east and 1800 m north of its departure point. During a later flight, the wind is instead \\((1,-2)\\) m/s.",
  parts:[
   ["Find the initial ground-velocity vector and its speed.",2,"P10-010",["P10-003"]],
   ["Show that the drone reaches the specified destination in 200 seconds with the initial wind.",2,"P10-007"],
   ["Find the air-relative velocity needed to reach the same destination in exactly 200 seconds in the later wind.",3,"P10-010",["P10-005"]],
   ["Explain why the new velocity cannot be achieved while maintaining the original airspeed.",2,"P10-003",["P10-010"]]
  ],
  steps:[
   "Ground velocity equals air velocity plus wind: \\((6,8)+(-2,1)=(4,9)\\) m/s, with speed \\(\\sqrt{4^2+9^2}=\\sqrt{97}\\) m/s. [2]",
   "In 200 s, the displacement is \\(200(4,9)=(800,1800)\\) m, exactly the required displacement. [2]",
   "To cover the same displacement in 200 s, the required ground velocity remains \\((4,9)\\). Subtract the new wind: required air velocity \\((4,9)-(1,-2)=(3,11)\\) m/s. [3]",
   "The original airspeed was \\(\\sqrt{6^2+8^2}=10\\) m/s; the new required airspeed would be \\(\\sqrt{3^2+11^2}=\\sqrt{130}\\approx11.40\\) m/s. It exceeds 10 m/s, so the original speed constraint is incompatible with the 200 s schedule. [2]"
  ],
  hint:"Always add wind to air-relative velocity to obtain ground velocity.",
  answer:"Initial ground velocity \\((4,9)\\) m/s, 200 s; later required air velocity \\((3,11)\\) m/s has speed \\(\\sqrt{130}>10\\) m/s.",
  misconception:"Subtracting wind from the destination displacement mixes units of metres and metres per second.",
  reflection:"Could the drone still reach the destination in the later wind if more travel time were allowed?"
 }
]);
