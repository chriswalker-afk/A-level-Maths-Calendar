import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("S02",[
 {
  ao:"AO1",title:"Histogram frequency density",
  stem:"A grouped frequency table has three class intervals: \\(0\\le x<5\\) with frequency 10, \\(5\\le x<15\\) with frequency 25, and \\(15\\le x<20\\) with frequency 5.",
  parts:[
   ["Calculate the frequency density for every interval.",3,"S02-002"],
   ["Explain why plotting the raw frequencies as bar heights would misrepresent the histogram.",2,"S02-015"]
  ],
  steps:[
   "Frequency density is frequency divided by class width. The widths are 5, 10 and 5, so the densities are \\(10/5=2\\), \\(25/10=2.5\\) and \\(5/5=1\\), respectively. [3]",
   "Histogram area represents frequency, so widths must be taken into account. The 10-wide middle bar needs height 2.5, not 25; using frequency as height would exaggerate its area relative to the narrower classes. [2]"
  ],
  hint:"A histogram bar's area, not simply its height, is proportional to frequency.",
  answer:"Frequency densities: 2, 2.5 and 1.",
  misconception:"A class of twice the width does not need twice the height for the same frequency.",
  reflection:"How would halving all class widths affect the frequency densities?"
 },
 {
  ao:"AO2",title:"Choosing the more consistent batch",
  stem:"Two groups record completion times in minutes. Group A: \\(5,7,8,10,20\\). Group B: \\(6,8,9,10,12\\). A supervisor wants a group with predictable completion times rather than only the smallest average.",
  parts:[
   ["Find the mean and median for each group.",3,"S02-008"],
   ["Calculate the range for each group.",2,"S02-009"],
   ["Recommend a group, using the calculations and the supervisor's preference.",2,"S02-016"]
  ],
  steps:[
   "A has total 50 and mean \\(50/5=10\\) min, median 8 min. B has total 45 and mean \\(45/5=9\\) min, median 9 min. [3]",
   "A has range \\(20-5=15\\) min; B has range \\(12-6=6\\) min. [2]",
   "Group B is more consistent by the range measure, with a much narrower spread and a slightly lower mean. The single 20-minute value in A makes it less predictable. Other variability measures could also be useful. [2]"
  ],
  hint:"Compute a measure of spread; the brief prioritises consistency.",
  answer:"Recommend B: mean 9 min, median 9 min, range 6 min (versus A: 10 min, 8 min and 15 min).",
  misconception:"The smaller mean alone does not demonstrate greater consistency.",
  reflection:"Which measure of average is less affected by the single 20-minute value in A?"
 },
 {
  ao:"AO3",title:"Transport-time statistics and fare pricing",
  stem:"A service records journey times \\(x\\) minutes for 40 trips, with \\(\\sum x=520\\) and \\(\\sum x^2=7280\\). A new queue adds a constant four minutes to every trip. Separately, a proposed fare model for the original trip times is \\(F=3+0.50x\\) dollars.",
  parts:[
   ["Calculate the original mean and population standard deviation of journey time.",3,"S02-010",["S02-008"]],
   ["Find the mean and standard deviation after adding the four-minute queue.",2,"S02-011"],
   ["Find the mean and standard deviation of the proposed fares.",2,"S02-011"],
   ["Explain how the transformations affect the spread, and give a limitation of the fare model.",2,"S02-016",["S02-011"]]
  ],
  steps:[
   "\\(\\bar x=520/40=13\\) min. The variance is \\(7280/40-13^2=182-169=13\\text{ min}^2\\), so \\(\\sigma_x=\\sqrt{13}\\approx3.606\\) min. [3]",
   "Adding 4 increases the mean to \\(13+4=17\\) min but leaves the standard deviation \\(\\sqrt{13}\\) min unchanged. [2]",
   "For \\(F=3+0.50x\\), the mean fare is \\(3+0.50(13)=\\$9.50\\); the standard deviation is \\(|0.50|\\sqrt{13}\\approx\\$1.80\\). [2]",
   "An additive constant translates all values without changing their separation; multiplying by 0.5 halves the standard deviation. Real fares may have fixed caps or minimum charges, so a linear formula need not apply to every journey. [2]"
  ],
  hint:"Use \\(\\sigma^2=\\sum x^2/n-\\bar x^2\\), then apply the rules for \\(a+bx\\).",
  answer:"Original \\(\\bar x=13\\), \\(\\sigma=\\sqrt{13}\\); queued \\(17,\\sqrt{13}\\); fares \\(\\$9.50,\\ \\$1.80\\) approximately.",
  misconception:"A translation changes the mean but not the standard deviation; the scaling factor does affect spread.",
  reflection:"If journey times were converted from minutes to seconds, what would happen to the standard deviation?"
 }
]);
