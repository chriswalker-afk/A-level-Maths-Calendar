import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("S04",[
 {
  ao:"AO1",title:"Binomial probabilities",
  stem:"Let \\(X\\sim\\mathrm{Bin}(5,0.4)\\).",
  parts:[
   ["Calculate \\(P(X=2)\\), showing the binomial expression.",2,"S04-004"],
   ["Calculate \\(P(X\\ge1)\\) using a complement.",3,"S04-005"]
  ],
  steps:[
   "\\(P(X=2)=\\binom52(0.4)^2(0.6)^3=10(0.16)(0.216)=0.3456\\). [2]",
   "\\(P(X\\ge1)=1-P(X=0)=1-(0.6)^5=1-0.07776=0.92224\\). [3]"
  ],
  hint:"For at least one success, subtract the probability of zero successes from one.",
  answer:"\\(P(X=2)=0.3456\\), \\(P(X\\ge1)=0.92224\\).",
  misconception:"The binomial coefficient counts the possible arrangements of exactly two successes.",
  reflection:"Would the probability of at least one success increase or decrease if there were six trials?"
 },
 {
  ao:"AO2",title:"Complements and binomial model assumptions",
  stem:"Each of eight independent electronic tests succeeds with probability \\(\\tfrac14\\). Let \\(X\\) be the number of successful tests.",
  parts:[
   ["Find exact expressions for \\(P(X=0)\\) and \\(P(X=1)\\).",3,"S04-004"],
   ["Hence calculate \\(P(X\\ge2)\\) to four decimal places.",2,"S04-005"],
   ["Explain two conditions necessary for using the specified binomial model.",2,"S04-003"]
  ],
  steps:[
   "\\(X\\sim\\mathrm{Bin}(8,1/4)\\). Then \\(P(X=0)=(3/4)^8\\) and \\(P(X=1)=\\binom81(1/4)(3/4)^7=2(3/4)^7\\). [3]",
   "\\(P(X\\ge2)=1-P(X=0)-P(X=1)=1-(3/4)^8-2(3/4)^7\\approx0.6329\\). [2]",
   "All eight trials must have the same success probability and their outcomes must be independent; each trial also has only success/failure outcomes and the number of trials is fixed. [2]"
  ],
  hint:"Calculate the probabilities of zero and one success first.",
  answer:"\\(P(X\\ge2)\\approx0.6329\\).",
  misconception:"The cumulative complement is \\(1-P(X\\le1)\\), not merely \\(1-P(X=1)\\).",
  reflection:"How would dependence between successive tests affect the validity of this model?"
 },
 {
  ao:"AO3",title:"How many spare components?",
  stem:"A network contains eight independently operating units. Each unit has a probability 0.12 of failing during one shift. A technician can replace a failed unit immediately if a spare is available. Management requires the probability of having enough spares to be at least 0.98.",
  parts:[
   ["Identify a probability model for the number \\(X\\) of failures during a shift.",2,"S04-003"],
   ["Calculate the probability that two available spares are sufficient.",3,"S04-005"],
   ["Calculate whether three spares would satisfy the management requirement, and recommend the minimum of these two stock levels.",3,"S04-005",["S04-004"]],
   ["State one important assumption behind your recommendation.",1,"S04-003"]
  ],
  steps:[
   "There are eight fixed, independent failure/no-failure trials each with probability \\(p=0.12\\), so \\(X\\sim\\mathrm{Bin}(8,0.12)\\). [2]",
   "Two spares suffice when \\(X\\le2\\). Thus \\(P(X\\le2)=\\sum_{k=0}^2\\binom8k(0.12)^k(0.88)^{8-k}\\approx0.93921\\). This is below 0.98. [3]",
   "Three spares suffice when \\(X\\le3\\). Adding \\(P(X=3)=\\binom83(0.12)^3(0.88)^5\\) gives \\(P(X\\le3)\\approx0.99028\\), above 0.98. Thus three, not two, meet the specified standard. [3]",
   "Failures must be independent with the same probability; a common power fault affecting several units at once would invalidate this assumption. [1]"
  ],
  hint:"Two spare parts cover at most two failures, so the relevant probability is cumulative.",
  answer:"Two spares: \\(0.93921\\); three: \\(0.99028\\); recommend three.",
  misconception:"A 98% reliability requirement must be compared with the probability of enough spares, not with the expected number of failures.",
  reflection:"How could a shared power supply affect the reliability estimate?"
 }
]);
