import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("M06",[
 {
  ao:"AO1",title:"Converting speed and using SI force units",
  stem:"A vehicle of mass 750 kg travels initially at 90 km/h. It then accelerates at \\(1.6\\text{ m s}^{-2}\\) on a straight level road. Model the vehicle as a particle.",
  parts:[
   ["Convert 90 km/h to metres per second.",2,"M06-003"],
   ["Find the resultant force responsible for the acceleration.",2,"M06-002"],
   ["Express the newton in terms of the base SI units kg, m and s.",1,"M06-001"]
  ],
  steps:[
   "\\(90\\text{ km h}^{-1}=90\\times1000/3600=25\\text{ m s}^{-1}\\). [2]",
   "Newton's second law gives resultant force \\(F=ma=750(1.6)=1200\\text{ N}\\). [2]",
   "Since \\(F=ma\\), \\(1\\text{ N}=1\\text{ kg m s}^{-2}\\). [1]"
  ],
  hint:"Remember that an hour has 3600 seconds, not 60.",
  answer:"25 m/s; 1200 N; \\(\\text{kg m s}^{-2}\\).",
  misconception:"Converting km/h to m/s requires multiplying by \\(5/18\\), not by 3.6.",
  reflection:"Would the resultant force change if the vehicle were travelling at the same speed but not accelerating?"
 },
 {
  ao:"AO2",title:"Distance is not displacement",
  stem:"A particle moves in a straight line with constant acceleration. Taking east as positive, its initial velocity is \\(+12\\text{ m s}^{-1}\\), and four seconds later its velocity is \\(-4\\text{ m s}^{-1}\\).",
  parts:[
   ["Find its acceleration, including sign and units.",2,"M06-002",["M07-002"]],
   ["Calculate the displacement in the four seconds.",2,"M06-004",["M07-006"]],
   ["Calculate the total distance travelled and explain why it differs from displacement.",3,"M06-004",["M07-006"]]
  ],
  steps:[
   "\\(a=(v-u)/t=(-4-12)/4=-4\\text{ m s}^{-2}\\), meaning the acceleration points west. [2]",
   "Displacement is \\(s=(u+v)t/2=(12-4)4/2=16\\) m east. [2]",
   "The particle stops when \\(12-4t=0\\), at \\(t=3\\) s. Distance east first is \\((12+0)3/2=18\\) m; distance west in the last second is \\((0+4)1/2=2\\) m. Total distance \\(=20\\) m. The 2 m westward stage reduces net displacement but adds to distance. [3]"
  ],
  hint:"Because the velocities have opposite signs, the particle changes direction partway through the interval.",
  answer:"Acceleration \\(-4\\text{ m s}^{-2}\\), displacement 16 m east, distance 20 m.",
  misconception:"Average velocity can give displacement but not always total distance when direction changes.",
  reflection:"At what moment would the particle return to its starting point if this acceleration continued?"
 },
 {
  ao:"AO3",title:"Is an autonomous cart's stopping zone safe?",
  stem:"A 100 kg autonomous delivery cart covers 1.8 km in three minutes. At one junction its measured speed is 10 m/s. Its brakes can provide at most a constant opposing resultant force of 300 N on a level surface. Only 15 m of clear road remains after braking begins.",
  parts:[
   ["Find the cart's average speed over the whole journey in SI units.",2,"M06-003"],
   ["Calculate the greatest possible magnitude of the braking acceleration.",2,"M06-002",["M08-003"]],
   ["Find the minimum stopping distance from 10 m/s, assuming constant braking.",3,"M06-005",["M07-006"]],
   ["Assess the safety of the available stopping zone and give a numerical reason.",2,"M06-005"]
  ],
  steps:[
   "The journey distance is 1800 m and time is \\(3(60)=180\\) s, so average speed \\(=1800/180=10\\text{ m s}^{-1}\\). [2]",
   "Using \\(F=ma\\), the maximum braking deceleration magnitude is \\(300/100=3\\text{ m s}^{-2}\\). Taking forward as positive, \\(a=-3\\text{ m s}^{-2}\\). [2]",
   "At the stopping point \\(v=0\\). Use \\(v^2=u^2+2as\\): \\(0=10^2+2(-3)s\\), so \\(s=100/6=50/3\\approx16.67\\) m. [3]",
   "The minimum stopping distance is about 16.67 m, exceeding 15 m by about 1.67 m. Under the stated model the cart cannot stop in the available zone. [2]"
  ],
  hint:"Use SI units throughout and use \\(v=0\\) at the stopping point.",
  answer:"10 m/s average; maximum deceleration 3 m/s²; stopping distance \\(50/3\\approx16.67\\) m, so unsafe.",
  misconception:"The journey's average speed does not determine the instantaneous braking speed; here that is separately measured.",
  reflection:"What minimum opposing force would be required to stop within exactly 15 m?"
 }
]);
