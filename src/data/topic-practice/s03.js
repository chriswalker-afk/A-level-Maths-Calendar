import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("S03",[
 {
  ao:"AO1",title:"Probabilities from a simple bag model",
  stem:"A bag contains four red, three blue and one green counters. A counter is drawn uniformly at random.",
  parts:[
   ["Find the probability that the counter is red or green.",2,"S03-001"],
   ["Find the probability that the counter is not green.",1,"S03-001"],
   ["If the counter is replaced and a second draw is made, find the probability that both draws are blue.",2,"S03-003",["S03-002"]]
  ],
  steps:[
   "Red and green are mutually exclusive outcomes, so \\(P(R\\cup G)=4/8+1/8=5/8\\). [2]",
   "\\(P(\\text{not green})=1-1/8=7/8\\). [1]",
   "Replacement makes the draws independent. Hence \\(P(B\\text{ and }B)=\\tfrac38\\times\\tfrac38=\\tfrac9{64}\\). [2]"
  ],
  hint:"Count the eight equally likely counters and decide which events can overlap.",
  answer:"\\(5/8\\), \\(7/8\\) and \\(9/64\\).",
  misconception:"Do not subtract a counter from the bag on the second draw when the first is replaced.",
  reflection:"Which of the answers changes if the counter is not replaced?"
 },
 {
  ao:"AO2",title:"Are the events independent?",
  stem:"Two events \\(A\\) and \\(B\\) satisfy \\(P(A)=0.4\\), \\(P(B)=0.5\\) and \\(P(A\\cap B)=0.3\\).",
  parts:[
   ["Find \\(P(A\\cup B)\\).",2,"S03-001"],
   ["Determine whether \\(A\\) and \\(B\\) are independent, giving a numerical reason.",3,"S03-002"],
   ["Find the probability that neither event occurs.",2,"S03-003",["S03-001"]]
  ],
  steps:[
   "Use inclusion-exclusion: \\(P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=0.4+0.5-0.3=0.6\\). [2]",
   "Independence would require \\(P(A\\cap B)=P(A)P(B)=0.4\\times0.5=0.2\\). Since the actual intersection is 0.3, the events are not independent. [3]",
   "By the complement rule, \\(P(A^c\\cap B^c)=1-P(A\\cup B)=1-0.6=0.4\\). [2]"
  ],
  hint:"Compare the observed intersection probability with the product of the two marginal probabilities.",
  answer:"\\(P(A\\cup B)=0.6\\), not independent, \\(P(\\text{neither})=0.4\\).",
  misconception:"Mutually exclusive events are not generally independent when both have positive probability.",
  reflection:"Could two events with exactly the same marginal probabilities be independent instead?"
 },
 {
  ao:"AO3",title:"A two-sensor alarm system",
  stem:"Two independent sensors may falsely trigger during a normal day. Sensor A triggers with probability 0.08 and sensor B with probability 0.05. The current system sounds an alarm if either triggers. A manager claims that the false-alarm probability is less than 10%.",
  parts:[
   ["Find the probability that both sensors trigger falsely.",2,"S03-002"],
   ["Find the probability of a false alarm under the current rule.",3,"S03-001",["S03-003"]],
   ["Evaluate the manager's claim and quantify the effect of changing the rule so both sensors must trigger.",3,"S03-003"],
   ["Explain one reason the independence assumption might fail in practice.",1,"S03-002"]
  ],
  steps:[
   "Independence gives \\(P(A\\cap B)=0.08\\times0.05=0.004\\). [2]",
   "The alarm sounds for \\(A\\cup B\\), so \\(P(A\\cup B)=0.08+0.05-0.004=0.126\\), or 12.6%. [3]",
   "The claim of less than 10% is false. Requiring both triggers would give probability \\(P(A\\cap B)=0.004=0.4\\%\\). This reduces false alarms but risks missing real incidents detected by only one sensor. [3]",
   "An environmental disturbance could affect both sensors simultaneously, producing correlated false triggers rather than independence. [1]"
  ],
  hint:"The existing rule uses an OR event; the proposed stricter rule uses an AND event.",
  answer:"Current false-alarm probability 12.6%; with both required, 0.4%.",
  misconception:"Adding individual probabilities without subtracting the overlap double-counts days when both sensors trigger.",
  reflection:"Why might a system that sounds fewer false alarms actually be less safe?"
 }
]);
