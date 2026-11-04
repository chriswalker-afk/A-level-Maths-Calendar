import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("S05",[
 {
  ao:"AO1",title:"A one-tailed binomial test",
  stem:"A supplier states that the proportion \\(p\\) of faulty components is 0.20. In a random sample of ten independent components, five are faulty. At the 5% significance level, test whether the fault rate has increased.",
  parts:[
   ["State the null and alternative hypotheses.",2,"S05-001",["S05-003"]],
   ["Find the p-value for the observed result.",3,"S05-005"],
   ["Give a statistical conclusion in context.",1,"S05-007"]
  ],
  steps:[
   "\\(H_0:p=0.20\\) and \\(H_1:p>0.20\\). The upper-tail alternative matches the question 'increased'. [2]",
   "Under \\(H_0\\), \\(X\\sim\\mathrm{Bin}(10,0.2)\\). The p-value is \\(P(X\\ge5)=\\sum_{k=5}^{10}\\binom{10}{k}(0.2)^k(0.8)^{10-k}\\approx0.03279\\). [3]",
   "Since \\(0.03279<0.05\\), reject \\(H_0\\): there is significant evidence that the proportion faulty exceeds 0.20. [1]"
  ],
  hint:"Because the alternative is an increased rate, calculate a probability at least as extreme in the upper tail.",
  answer:"p-value \\(\\approx0.03279\\); reject \\(H_0\\) at 5%.",
  misconception:"Rejecting the null does not prove the true fault rate or give a 100% certain conclusion.",
  reflection:"Would the decision necessarily be the same at a 1% significance level?"
 },
 {
  ao:"AO2",title:"The direction of a fairness test",
  stem:"A student tosses a coin 12 times and sees ten heads. The student now wishes to test at the 5% level whether the probability of a head is greater than \\(\\tfrac12\\).",
  parts:[
   ["Write suitable one-tailed hypotheses for the stated claim.",2,"S05-003",["S05-001"]],
   ["Find the exact p-value for ten or more heads under the null.",3,"S05-005"],
   ["State the numerical decision and explain why choosing the direction after observing the sample is questionable.",2,"S05-007",["S05-002"]]
  ],
  steps:[
   "\\(H_0:p=1/2\\), \\(H_1:p>1/2\\). The test statistic is \\(X\\), the number of heads, with \\(X\\sim\\mathrm{Bin}(12,1/2)\\) under \\(H_0\\). [2]",
   "\\(P(X\\ge10)=\\dfrac{\\binom{12}{10}+\\binom{12}{11}+\\binom{12}{12}}{2^{12}}=\\dfrac{66+12+1}{4096}=\\dfrac{79}{4096}\\approx0.01929\\). [3]",
   "Numerically, \\(0.01929<0.05\\) would reject \\(H_0\\) in a pre-planned upper-tailed test. But selecting the upper tail only after seeing an unusually large number of heads biases the inference; the direction should be fixed from the original research question. [2]"
  ],
  hint:"The upper-tail probability is the sum of the cases 10, 11 and 12 heads.",
  answer:"\\(79/4096\\approx0.01929\\); reject for a pre-specified upper-tailed test, but post-hoc direction undermines validity.",
  misconception:"A low upper-tail p-value does not justify choosing that tail after inspecting the data.",
  reflection:"What alternative hypothesis would be appropriate if the question were simply whether the coin is unfair?"
 },
 {
  ao:"AO3",title:"Should production be halted?",
  stem:"A manufacturer claims its failure probability is \\(p=0.10\\). A quality officer agrees in advance to halt production if a 5% upper-tailed binomial test gives significant evidence of deterioration. In a random sample of 20 independent items, five fail.",
  parts:[
   ["Define the random variable and state the null and alternative hypotheses.",2,"S05-001",["S05-003"]],
   ["Calculate the p-value for the observed failures.",3,"S05-005"],
   ["Apply the agreed decision rule and explain what the evidence does and does not establish.",2,"S05-007"],
   ["Interpret the possibility of a Type I error and give a relevant modelling assumption.",2,"S05-004",["S05-002"]]
  ],
  steps:[
   "Let \\(X\\) be failures in 20 items; under \\(H_0:p=0.10\\), \\(X\\sim\\mathrm{Bin}(20,0.10)\\). The alternative is \\(H_1:p>0.10\\). [2]",
   "The one-tailed p-value is \\(P(X\\ge5)=\\sum_{k=5}^{20}\\binom{20}{k}(0.10)^k(0.90)^{20-k}\\approx0.04317\\). [3]",
   "Since \\(0.04317<0.05\\), reject \\(H_0\\) and follow the pre-agreed rule to halt production. There is significant evidence of a higher failure probability, not proof of its precise value or certainty that it increased. [2]",
   "A Type I error here means halting production when the true failure probability is still 0.10. The test relies on approximately independent items with a common failure probability; defects from one shared machine fault could violate independence. [2]"
  ],
  hint:"Match the operational decision rule to the upper-tail p-value, not to the sample percentage alone.",
  answer:"p-value \\(\\approx0.04317\\); reject \\(H_0\\) at 5% and halt production under the agreed policy.",
  misconception:"A significance level of 5% is a long-run risk of false rejection under the null, not the probability that this particular conclusion is false.",
  reflection:"How might testing more items influence the ability to detect a modest deterioration?"
 }
]);
