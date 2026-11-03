export const week01ExpansionApplied = [
  {
    "id": "W01-A4",
    "section": "A",
    "title": "A coded survey that could still be biased",
    "marks": 11,
    "ao": {
      "AO1": 2,
      "AO2": 3,
      "AO3": 6
    },
    "topics": [
      "stratified random sampling",
      "linear coding",
      "sampling bias",
      "inference"
    ],
    "stem": "A school has \\(210\\) Year 12 students and \\(140\\) Year 13 students. A researcher wants a sample of \\(60\\) students. Recorded journey times x (minutes) are coded as \\(y=(x-20)/5\\). The selected sample has coded mean \\(\\bar y=3\\) and coded standard deviation \\(s_y=1.2\\).",
    "parts": [
      [
        "Work out the two proportional sample sizes for a stratified random sample.",
        2
      ],
      [
        "Explain how a genuinely random selection could be made within the two strata. Identify the sample and the population clearly.",
        3
      ],
      [
        "Calculate the sample mean and standard deviation in the original minutes scale.",
        3
      ],
      [
        "Another researcher instead surveys only students arriving before registration. Explain why the reported mean journey time cannot automatically be treated as the population mean, even if exactly 60 students are questioned.",
        3
      ]
    ],
    "hint": "Stratification depends on 210:140. Rearrange the coding as x=5y+20, and remember that adding a constant does not change standard deviation.",
    "steps": [
      "The population is \\(210+140=350\\). [1] Allocate \\(60(210/350)=36\\) Year 12 places and \\(60(140/350)=24\\) Year 13 places. [1]",
      "The population is all 350 students; the sample is the selected 60. [1] Make an up-to-date complete list in each year group, number entries and randomly draw 36 and 24 distinct labels respectively. [1] Using a true random number generator and disregarding repeats avoids reselecting a student. [1]",
      "\\(x=5y+20\\) gives \\(\\bar x=5(3)+20=35\\) minutes. [2] Standard deviation scales by the positive factor 5 but not by the translation: \\(s_x=5(1.2)=6\\) minutes. [1]",
      "Arriving early is an opportunity sample rather than proportional random sampling. [1] Students with shorter journeys, different transport or punctuality may be over-represented. [1] The resulting sample average can therefore be systematically biased relative to the full 350-student population; sampling 60 people alone does not guarantee representativeness. [1]"
    ],
    "answer": "\\(36\\) Year 12 and \\(24\\) Year 13; \\(\\bar x=35\\) min, \\(s_x=6\\) min; early-arrival selection may be biased.",
    "misconception": "The standard deviation is multiplied by 5, not increased by 20; a large sample is not automatically unbiased.",
    "reflection": "Which part of the selection method, rather than the sample size, protects the population comparison?"
  },
  {
    "id": "W01-A5",
    "section": "A",
    "title": "Two commuting datasets, one misleading mean",
    "marks": 12,
    "ao": {
      "AO1": 2,
      "AO2": 3,
      "AO3": 7
    },
    "topics": [
      "mean and median",
      "quartiles and outlier rule",
      "data quality",
      "summary choices"
    ],
    "stem": "Two groups record journey times, in minutes, in increasing order. Group A: \\(10,12,13,14,15,16,18,70\\). Group B: \\(19,20,21,22,23,24,25,26\\). Assume the usual median-of-halves quartile convention. A school wishes to compare a 'typical' journey for both groups.",
    "parts": [
      [
        "Find the mean and median time for each group.",
        3
      ],
      [
        "For Group A calculate the lower quartile, upper quartile and interquartile range.",
        4
      ],
      [
        "Using the rule 'outside 1.5 interquartile ranges beyond a quartile', determine whether the 70-minute observation is an outlier.",
        2
      ],
      [
        "Recommend suitable summary measures for comparing the typical journeys, justify your choice, and explain why simply deleting the 70-minute observation would be poor statistical practice.",
        3
      ]
    ],
    "hint": "With eight ordered data points, each quartile is the median of one half. Outliers are observations beyond Q3+1.5×IQR or below Q1−1.5×IQR.",
    "steps": [
      "Group A totals \\(168\\) minutes, so its mean is \\(168/8=21\\) and median \\((14+15)/2=14.5\\). [2] Group B has mean and median \\(22.5\\) because the eight values are consecutive from 19 to 26. [1]",
      "In the lower A half \\(10,12,13,14\\), \\(Q_1=(12+13)/2=12.5\\). [1] In the upper half \\(15,16,18,70\\), \\(Q_3=(16+18)/2=17\\). [1] Hence \\(\\mathrm{IQR}=17-12.5=4.5\\) minutes. [2]",
      "The upper outlier fence is \\(17+1.5(4.5)=23.75\\). [1] Since \\(70>23.75\\), the 70-minute journey is an outlier under the stated rule. [1]",
      "For a typical comparison, use the medians (14.5 versus 22.5 minutes) and the IQRs, rather than relying solely on Group A's mean of 21. [1] The very long 70-minute journey pulls up the mean and makes it unrepresentative of most Group A journeys. [1] The value might be genuine rather than erroneous; investigate its provenance before omitting it, and report the treatment transparently. [1]"
    ],
    "answer": "Group A mean \\(21\\), median \\(14.5\\), \\(Q_1=12.5,\\ Q_3=17,\\ \\mathrm{IQR}=4.5\\); Group B mean/median \\(22.5\\); 70 is an outlier.",
    "misconception": "Outlier identification is not permission to remove a valid extreme journey merely because it changes the mean.",
    "reflection": "Could the mean and median tell different but both useful stories about a school's travel arrangements?"
  }
];
