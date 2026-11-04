import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("S01",[
 {
  ao:"AO1",title:"A stratified sample",
  stem:"A sixth form contains 240 Year 12 students and 160 Year 13 students. A researcher wants a proportional stratified sample of 50 students.",
  parts:[
   ["Explain what is meant by the population and by a sampling frame in this investigation.",2,"S01-001"],
   ["Calculate the required number of students from each year group.",3,"S01-004"]
  ],
  steps:[
   "The population is all 400 sixth-form students. A suitable sampling frame is an up-to-date list of those 400 students with their year groups recorded. [2]",
   "The Year 12 proportion is \\(240/400=0.6\\), giving \\(0.6(50)=30\\) students. Year 13 gives \\(160/400(50)=20\\) students. The allocations total 50 and preserve the population proportions. [3]"
  ],
  hint:"First find each year group's share of the whole sixth form.",
  answer:"Sample 30 Year 12 students and 20 Year 13 students.",
  misconception:"Allocating equal sample sizes to unequal strata is not proportional stratification.",
  reflection:"How would the allocation change if the Year 13 population increased?"
 },
 {
  ao:"AO2",title:"Sampling method under scrutiny",
  stem:"A school has 340 students in Year 12 and 260 in Year 13. It wants to estimate weekly study time using a sample of 120 students. A colleague suggests asking the first 120 students who arrive at school.",
  parts:[
   ["Calculate proportional stratified allocations for the proposed sample.",3,"S01-004"],
   ["Describe how students should be selected randomly within each year group.",2,"S01-003"],
   ["Explain two distinct reasons why the colleague's method could distort the estimate.",2,"S01-006"]
  ],
  steps:[
   "There are 600 students. Year 12 requires \\(120(340/600)=68\\) and Year 13 requires \\(120(260/600)=52\\). These are whole-number allocations and total 120. [3]",
   "Number all students within each year group and use a random number generator to select 68 and 52 distinct numbers, respectively. Ignore repeats so no student is sampled twice. [2]",
   "Early arrivals could have different study habits from later arrivals (time-of-arrival bias); the first arrivals may also have an unbalanced year-group mix. Both threaten representativeness. [2]"
  ],
  hint:"A sound design needs both the right number from each group and a genuinely random selection within each.",
  answer:"Year 12: 68; Year 13: 52; randomly sample distinct students within each.",
  misconception:"Choosing the first people encountered is opportunity sampling, even if the researcher does not consciously favour anyone.",
  reflection:"Would stratification remove all possible bias from an inaccurate sampling frame?"
 },
 {
  ao:"AO3",title:"Transport survey design",
  stem:"A museum has records of 1000 season-pass holders: 600 normally arrive by bus, 300 on foot and 100 by bicycle. Its researcher wants to survey 80 pass holders about travel time. A manager proposes asking only people entering at 7:30 a.m.",
  parts:[
   ["Design a proportional sample by arrival mode, giving all three numbers.",3,"S01-004",["S01-001"]],
   ["Describe a practical method for obtaining the planned sample from the records.",2,"S01-003",["S01-005"]],
   ["Evaluate the manager's plan and explain why your own plan is more defensible.",3,"S01-006"],
   ["Explain why even your improved estimate should be treated with uncertainty.",1,"S01-007"]
  ],
  steps:[
   "Use each group's fraction of the 1000 pass holders: bus \\(80(600/1000)=48\\), walking \\(80(300/1000)=24\\), cycling \\(80(100/1000)=8\\). The total is 80. [3]",
   "Use the pass-holder register as a sampling frame, split it by recorded arrival mode and randomly choose 48, 24 and 8 distinct people. Number entries and ignore duplicate random selections. [2]",
   "The 7:30 a.m. plan excludes anyone arriving later or on different days and may overrepresent commuters. Random selection from all pass holders gives each recorded member a known selection process while preserving the major travel-mode mix. It can still suffer nonresponse or outdated records, which should be reported. [3]",
   "A sample statistic varies between random samples, so it is an estimate rather than the exact population travel time. [1]"
  ],
  hint:"Design the sample from the existing register, not from the order in which people appear at the entrance.",
  answer:"Bus 48, walk 24, cycle 8; use stratified random selection and acknowledge nonresponse/sampling variation.",
  misconception:"A sample that is easy to collect is not necessarily representative, even if the sample size is large.",
  reflection:"What happens if only half of the selected cyclists respond?"
 }
]);
