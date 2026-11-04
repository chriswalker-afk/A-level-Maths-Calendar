import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("M08",[
 {
  ao:"AO1",title:"Horizontal forces and normal reaction",
  stem:"A 5 kg block moves on a horizontal surface. A horizontal pulling force of 18 N acts forwards and a horizontal resistance of 3 N acts backwards. The block remains in contact with the surface. Take \\(g=9.8\\text{ m s}^{-2}\\).",
  parts:[
   ["Write Newton's second-law equation in the horizontal direction.",2,"M08-003",["M08-001"]],
   ["Calculate the acceleration.",2,"M08-003"],
   ["Find the normal reaction of the surface on the block.",1,"M08-004",["M08-005"]]
  ],
  steps:[
   "Take the pulling direction as positive. The horizontal resultant is \\(18-3=15\\) N, so \\(18-3=5a\\). [2]",
   "\\(a=15/5=3\\text{ m s}^{-2}\\) forwards. [2]",
   "There is no vertical acceleration, so \\(R=mg=5(9.8)=49\\text{ N}\\). [1]"
  ],
  hint:"Resolve horizontal and vertical forces separately; the acceleration is horizontal.",
  answer:"Acceleration 3 m/s² forwards, normal reaction 49 N.",
  misconception:"The normal reaction is determined from vertical forces, not the 18 N horizontal pull.",
  reflection:"How would an additional upward vertical force affect the normal reaction?"
 },
 {
  ao:"AO2",title:"A light string over a smooth pulley",
  stem:"Particle A has mass 3 kg and lies on a smooth horizontal table. It is joined by a light, inextensible string over a smooth pulley to a hanging 2 kg particle B. The particles are released from rest. Use \\(g=9.8\\text{ m s}^{-2}\\).",
  parts:[
   ["Form Newton's second-law equations for both particles, using one common acceleration.",3,"M08-008",["M08-001"]],
   ["Find the acceleration and string tension.",3,"M08-003",["M08-008"]],
   ["Explain why the tension is the same on both sides of the pulley in this model.",1,"M08-006"]
  ],
  steps:[
   "Let B accelerate downwards and A towards the pulley with common magnitude \\(a\\), and let tension be \\(T\\). For A: \\(T=3a\\). For B: \\(2g-T=2a\\). [3]",
   "Adding gives \\(2g=5a\\), so \\(a=2(9.8)/5=3.92\\text{ m s}^{-2}\\). Then \\(T=3a=11.76\\text{ N}\\). [3]",
   "A light string has negligible mass and a smooth pulley has no friction, so the idealised tension is uniform throughout the same string. [1]"
  ],
  hint:"Draw separate force diagrams and choose a consistent positive direction for each particle.",
  answer:"Acceleration \\(3.92\\text{ m s}^{-2}\\); tension \\(11.76\\text{ N}\\).",
  misconception:"Do not apply the full hanging weight directly as the resultant for either particle.",
  reflection:"Would a heavier hanging mass always make the acceleration larger?"
 },
 {
  ao:"AO3",title:"Variable-force robot on a test track",
  stem:"A 10 kg robot begins at rest on a straight test track. For the first four seconds its engine provides a forward thrust \\(F(t)=30+10t\\) newtons, while a constant resistive force of 10 N acts backwards. The robot must stay within 24 m of its start during the four-second test.",
  parts:[
   ["Find an expression for the resultant horizontal force.",2,"M08-003"],
   ["Hence find \\(a(t)\\) and use calculus to obtain the velocity \\(v(t)\\).",3,"M08-003",["M07-011"]],
   ["Calculate the displacement after four seconds.",2,"M08-003",["M07-011"]],
   ["Decide whether the test meets the track's distance requirement and quantify the difference.",2,"M08-006"]
  ],
  steps:[
   "The forward thrust is \\(30+10t\\) N and resistance is 10 N, so the resultant is \\(F_{\\rm net}(t)=20+10t\\) N. [2]",
   "By \\(F=ma\\), \\(a(t)=(20+10t)/10=2+t\\text{ m s}^{-2}\\). Integrate: \\(v(t)=\\int(2+t)\\,dt=2t+\\tfrac12t^2+C\\). Starting from rest gives \\(C=0\\). [3]",
   "Displacement from rest is \\(s(t)=\\int_0^t(2u+\\tfrac12u^2)\\,du=t^2+t^3/6\\). At \\(t=4\\), \\(s=16+64/6=80/3\\approx26.67\\) m. [2]",
   "The robot travels about 26.67 m, which exceeds 24 m by \\(80/3-24=8/3\\approx2.67\\) m. It fails the distance requirement; the thrust programme must be reduced or the test shortened. [2]"
  ],
  hint:"Use Newton's second law at time \\(t\\), then integrate acceleration and velocity using the initial conditions.",
  answer:"\\(a(t)=2+t\\), \\(v(t)=2t+t^2/2\\), displacement \\(80/3\\) m; exceeds the limit by \\(8/3\\) m.",
  misconception:"Because the engine thrust changes with time, treating the acceleration as constant gives the wrong displacement.",
  reflection:"Which aspect of the thrust schedule could be changed to keep the robot within 24 m?"
 }
]);
