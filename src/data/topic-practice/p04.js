import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("P04",[
 {
  ao:"AO1",title:"An arithmetic sequence and its sum",
  stem:"An arithmetic sequence begins \\(7,11,15,19,\\ldots\\).",
  parts:[
   ["Find a formula for its \\(n\\)th term.",2,"P04-009"],
   ["Calculate the sum of the first 20 terms.",3,"P04-009"]
  ],
  steps:[
   "The first term is 7 and the common difference is 4. Thus \\(u_n=7+4(n-1)=4n+3\\). [2]",
   "Using \\(S_n=\\tfrac n2[2a+(n-1)d]\\), \\(S_{20}=\\tfrac{20}{2}[14+19(4)]=10(90)=900\\). [3]"
  ],
  hint:"Find the common difference before using the general AP formula.",
  answer:"\\(u_n=4n+3\\), \\(S_{20}=900\\).",
  misconception:"The twentieth term uses 19 common differences, not 20.",
  reflection:"Can you calculate \\(S_{20}\\) instead by averaging the first and last terms?"
 },
 {
  ao:"AO2",title:"How many geometric terms are enough?",
  stem:"An infinite geometric progression has first term \\(3\\), positive common ratio \\(r<1\\) and sum to infinity \\(12\\).",
  parts:[
   ["Determine the value of \\(r\\).",2,"P04-013"],
   ["Find the least positive integer \\(n\\) for which the sum of the first \\(n\\) terms exceeds 9.",4,"P04-012",["P04-013"]],
   ["Explain why the inequality is strict at your chosen \\(n\\).",1,"P04-013"]
  ],
  steps:[
   "\\(S_\\infty=\\dfrac{3}{1-r}=12\\) implies \\(1-r=1/4\\), hence \\(r=3/4\\). [2]",
   "\\(S_n=12[1-(3/4)^n]\\). The requirement \\(S_n>9\\) gives \\((3/4)^n<1/4\\). Taking logs gives \\(n>\\dfrac{\\ln(1/4)}{\\ln(3/4)}\\approx4.82\\), so the least integer is \\(n=5\\). The direction reverses when dividing by \\(\\ln(3/4)<0\\). [4]",
   "At \\(n=4\\), \\(S_4=12[1-(3/4)^4]\\approx8.20<9\\); at \\(n=5\\), \\(S_5\\approx9.15>9\\), proving minimality and strict exceedance. [1]"
  ],
  hint:"Write the finite sum in terms of the known infinite sum, then isolate \\(r^n\\).",
  answer:"\\(r=\\tfrac34\\), least \\(n=5\\).",
  misconception:"Dividing by a negative logarithm reverses the inequality.",
  reflection:"How would the answer change if the threshold were 11 rather than 9?"
 },
 {
  ao:"AO3",title:"When will ticket sales meet the target?",
  stem:"A fundraiser sells 120 tickets on its first day. The daily number sold increases by 15 every subsequent day. The target is to sell at least 3375 tickets in total. Assume this pattern continues.",
  parts:[
   ["Find an expression for the number sold on day \\(n\\).",2,"P04-009"],
   ["Form and simplify an expression for the cumulative sales after \\(n\\) days.",3,"P04-015",["P04-009"]],
   ["Find the first day on which the cumulative target is achieved.",3,"P04-015"],
   ["Give one reason why the prediction might be unreliable for a longer campaign.",1,"P04-016"]
  ],
  steps:[
   "The number sold on day \\(n\\) is \\(u_n=120+15(n-1)=15n+105\\). [2]",
   "The cumulative number is an AP sum: \\(S_n=\\tfrac n2[2(120)+15(n-1)]=\\tfrac n2(15n+225)=\\tfrac{15}{2}n(n+15)\\). [3]",
   "Solve \\(\\tfrac{15}{2}n(n+15)\\ge3375\\), giving \\(n(n+15)\\ge450\\), or \\((n-15)(n+30)\\ge0\\). Since \\(n\\) is positive, \\(n\\ge15\\). Also \\(S_{14}=3045\\) and \\(S_{15}=3375\\), so day 15 is the first qualifying day. [3]",
   "The model assumes sales keep increasing by exactly 15 per day; audience saturation or day-of-week effects could break that pattern. [1]"
  ],
  hint:"The daily sales form an AP; the target concerns a sum, not a single day's sales.",
  answer:"Day 15, when cumulative sales reach exactly 3375 tickets.",
  misconception:"Solving for the day's sales instead of the cumulative sales answers the wrong question.",
  reflection:"If the daily increase slowed after the first week, would this model overestimate or underestimate future sales?"
 }
]);
