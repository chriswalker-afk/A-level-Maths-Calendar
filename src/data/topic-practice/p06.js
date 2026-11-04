import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("P06",[
 {
  ao:"AO1",title:"Logarithms and rejected roots",
  stem:"Solve the equation \\(\\log_2(x-1)+\\log_2(x+1)=3\\).",
  parts:[
   ["Combine the two logarithms into a single logarithm.",2,"P06-006"],
   ["Solve the equation, explaining any rejected algebraic root.",3,"P06-007",["P06-004"]]
  ],
  steps:[
   "The product law gives \\(\\log_2[(x-1)(x+1)]=3\\). The original logs require \\(x-1>0\\) and \\(x+1>0\\), so \\(x>1\\). [2]",
   "\\((x-1)(x+1)=2^3=8\\) implies \\(x^2-1=8\\), hence \\(x^2=9\\) and \\(x=\\pm3\\). Only \\(x=3\\) satisfies the domain \\(x>1\\). [3]"
  ],
  hint:"Before solving, write down which values of \\(x\\) make both logarithms defined.",
  answer:"\\(x=3\\) only.",
  misconception:"An algebraically valid square-root value may not be in the domain of a logarithm.",
  reflection:"Why can the two log arguments not both be negative, even though their product would be positive?"
 },
 {
  ao:"AO2",title:"Interpreting an exponential model",
  stem:"A culture is modelled by \\(Q(t)=Ae^{kt}\\), where \\(t\\) is measured in hours. It contains 30 units initially and 75 units after 4 hours.",
  parts:[
   ["Determine \\(A\\) and an exact expression for \\(k\\).",3,"P06-012",["P06-004"]],
   ["Find the first time the model predicts 100 units.",3,"P06-012",["P06-008"]],
   ["Explain why using the prediction far beyond 4 hours needs caution.",1,"P06-014"]
  ],
  steps:[
   "\\(Q(0)=A=30\\). Then \\(75=30e^{4k}\\), so \\(e^{4k}=5/2\\) and \\(k=\\tfrac14\\ln(5/2)\\) per hour. [3]",
   "\\(100=30e^{kt}\\) gives \\(e^{kt}=10/3\\). Hence \\(t=\\dfrac{\\ln(10/3)}{k}=\\dfrac{4\\ln(10/3)}{\\ln(5/2)}\\approx5.26\\) hours. Because \\(k>0\\), the model is increasing and this is the first crossing. [3]",
   "The model assumes a constant proportional growth rate. Nutrients, space or other constraints may reduce growth after the observed interval. [1]"
  ],
  hint:"Use the initial condition first, then divide the two observations to find \\(e^{4k}\\).",
  answer:"\\(A=30\\), \\(k=\\tfrac14\\ln(5/2)\\), \\(t\\approx5.26\\) h.",
  misconception:"The quantity 2.5 is a growth factor over four hours, not the hourly exponential parameter.",
  reflection:"Would a smaller positive \\(k\\) make the 100-unit threshold earlier or later?"
 },
 {
  ao:"AO3",title:"Two doses under a decay model",
  stem:"A medicine's amount in a patient decreases continuously at 20% per hour in the exponential-rate model \\(dM/dt=-0.2M\\). An 80 mg dose is given at \\(t=0\\), and a further 60 mg is given at \\(t=4\\) hours. Both doses decay independently at the same rate. The second dose takes effect immediately.",
  parts:[
   ["Write an expression for the total amount \\(M(t)\\) for \\(t\\ge4\\).",3,"P06-012",["P06-003"]],
   ["Find the amount immediately after the second dose.",2,"P06-013"],
   ["Find when the amount next falls to 40 mg, giving the time after the first dose.",3,"P06-012",["P06-004"]],
   ["State one limitation of this model.",1,"P06-014"]
  ],
  steps:[
   "For \\(t\\ge4\\), the first contribution is \\(80e^{-0.2t}\\) mg and the second is \\(60e^{-0.2(t-4)}\\) mg. Thus \\(M(t)=80e^{-0.2t}+60e^{-0.2(t-4)}\\). [3]",
   "Immediately after the dose at \\(t=4\\), \\(M(4^+)=80e^{-0.8}+60\\approx95.95\\) mg. There is a sudden jump of 60 mg at that time. [2]",
   "For \\(t\\ge4\\), write \\(M(t)=(80e^{-0.8}+60)e^{-0.2(t-4)}\\). Set this equal to 40: \\(t=4+5\\ln\\big[(80e^{-0.8}+60)/40\\big]\\approx8.38\\) hours after the first dose. [3]",
   "The model assumes instantaneous absorption and identical constant decay rates; real absorption or elimination may not follow these assumptions. [1]"
  ],
  hint:"After \\(t=4\\), model the remaining amount from each dose and add them.",
  answer:"\\(M(4^+)\\approx95.95\\text{ mg}\\); threshold at \\(t\\approx8.38\\) h.",
  misconception:"Resetting the first dose's decay clock at \\(t=4\\) incorrectly counts 80 mg as if it were freshly administered.",
  reflection:"What happens to the graph at the instant the second dose is given?"
 }
]);
