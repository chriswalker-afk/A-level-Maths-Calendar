import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("M07",[
 {
  ao:"AO1",title:"Constant acceleration from rest",
  stem:"A particle starts from rest and accelerates uniformly along a straight line at \\(3\\text{ m s}^{-2}\\) for four seconds.",
  parts:[
   ["Calculate its final velocity.",2,"M07-006"],
   ["Calculate the displacement during the four seconds.",3,"M07-006"]
  ],
  steps:[
   "Use \\(v=u+at\\) with \\(u=0\\), \\(a=3\\) and \\(t=4\\): \\(v=0+3(4)=12\\text{ m s}^{-1}\\). [2]",
   "Use \\(s=ut+\\tfrac12at^2\\): \\(s=0+\\tfrac12(3)(4^2)=24\\text{ m}\\). [3]"
  ],
  hint:"State the known quantities \\(u,a,t\\) before selecting a SUVAT formula.",
  answer:"Final velocity 12 m/s; displacement 24 m.",
  misconception:"The displacement is not \\(vt=48\\) m because the particle was not travelling at 12 m/s throughout.",
  reflection:"What would a velocity–time graph look like for this motion?"
 },
 {
  ao:"AO2",title:"A particle that reverses twice",
  stem:"A particle moves along a straight line, with displacement from a fixed origin given by \\(s(t)=t^3-6t^2+9t\\) metres for \\(0\\le t\\le4\\) seconds.",
  parts:[
   ["Find \\(v(t)\\) and the times at which the particle is instantaneously at rest.",3,"M07-010",["M07-001"]],
   ["Determine its direction of travel on each interval separated by those times.",2,"M07-002",["M07-012"]],
   ["Calculate both its displacement and total distance travelled over the four seconds.",2,"M07-012"]
  ],
  steps:[
   "\\(v(t)=ds/dt=3t^2-12t+9=3(t-1)(t-3)\\). The particle is at rest at \\(t=1\\) s and \\(t=3\\) s. [3]",
   "The velocity is positive for \\(0<t<1\\), negative for \\(1<t<3\\), and positive for \\(3<t<4\\); hence it moves forwards, then backwards, then forwards. [2]",
   "\\(s(0)=0\\), \\(s(1)=4\\), \\(s(3)=0\\), \\(s(4)=4\\) metres. Net displacement is 4 m. Distance is \\(|4-0|+|0-4|+|4-0|=12\\) m. [2]"
  ],
  hint:"Differentiate displacement to find velocity, then split the time interval whenever velocity changes sign.",
  answer:"Rest at 1 s and 3 s; displacement 4 m, total distance 12 m.",
  misconception:"The integral of signed velocity gives displacement, not necessarily total distance.",
  reflection:"What quantity is represented by the area below the time axis on the velocity–time graph?"
 },
 {
  ao:"AO3",title:"Programming a lift's three-stage journey",
  stem:"A lift starts from rest, accelerates upward uniformly at \\(1.5\\text{ m s}^{-2}\\) for 4 s, then moves at constant speed for 5 s, then decelerates uniformly to rest over the final 3 s. The intended lift shaft height is exactly 50 m.",
  parts:[
   ["Find the speed and distance after the initial acceleration stage.",2,"M07-006"],
   ["Find the magnitude of deceleration and the distance travelled in the final stage.",3,"M07-008"],
   ["Find the total upward displacement of the programmed journey.",2,"M07-005"],
   ["Determine how long the constant-speed stage should last instead if the lift is to stop after exactly 50 m.",2,"M07-008"]
  ],
  steps:[
   "Starting from rest, \\(v=0+1.5(4)=6\\text{ m s}^{-1}\\). The first-stage displacement is \\(s_1=\\tfrac12(1.5)(4^2)=12\\) m. [2]",
   "To slow from 6 m/s to rest in 3 s requires \\(a=(0-6)/3=-2\\text{ m s}^{-2}\\), so the magnitude is 2. The final-stage displacement is \\(s_3=(6+0)3/2=9\\) m. [3]",
   "The middle stage contributes \\(s_2=6(5)=30\\) m. Total displacement \\(=12+30+9=51\\) m, overshooting the shaft height by 1 m. [2]",
   "For a 50 m journey, the middle stage must cover \\(50-12-9=29\\) m at 6 m/s, so its duration should be \\(29/6\\approx4.83\\) s rather than 5 s. [2]"
  ],
  hint:"Calculate each stage separately but carry the final velocity of one stage into the next.",
  answer:"Initial 6 m/s after 12 m; deceleration 2 m/s²; original total 51 m; corrected cruise time \\(29/6\\) s.",
  misconception:"Using the acceleration from the first stage for the whole 12 seconds ignores changes in the motion model.",
  reflection:"What happens to the total travel time when the middle stage is shortened?"
 }
]);
