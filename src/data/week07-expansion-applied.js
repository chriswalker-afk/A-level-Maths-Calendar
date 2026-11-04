export const week07ExpansionApplied = [
  {
    "id": "W07-A4",
    "section": "A",
    "title": "A single outlier changes a regression decision",
    "marks": 11,
    "ao": {
      "AO1": 3,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "Year 1 least-squares regression",
      "outlier influence",
      "interpolation",
      "extrapolation"
    ],
    "stem": "A researcher records advertising spending \\(x\\) (hundreds of pounds) and registrations \\(y\\) (hundreds of people). Four weeks give \\((2,5),(4,9),(6,11),(8,15)\\). A fifth week gives \\((10,30)\\). The researcher must predict registrations for spending of seven hundred pounds.",
    "parts": [
      [
        "Calculate the regression line of \\(y\\) on \\(x\\) using the first four points.",
        3
      ],
      [
        "Calculate the regression line using all five observations, clearly showing the impact of the new point.",
        3
      ],
      [
        "Find and compare the two predictions at \\(x=7\\); identify which evidence deserves further investigation.",
        3
      ],
      [
        "Explain why using either line at \\(x=14\\) would be unreliable and why correlation alone cannot establish that advertising caused registrations.",
        2
      ]
    ],
    "hint": "Use b=Sxy/Sxx with centred sums. Work out the original line before allowing the fifth observation to influence the gradient.",
    "steps": [
      "The first-four means are \\(\\bar x=5,\\ \\bar y=10\\). [1] The centred totals are \\(S_{xx}=20,\\ S_{xy}=32\\), giving slope \\(b=32/20=1.6\\). [1] The intercept is \\(10-1.6(5)=2\\), so \\(\\hat y=1.6x+2\\). [1]",
      "For all five observations \\(\\bar x=6,\\bar y=14\\). [1] Now \\(S_{xx}=40,\\ S_{xy}=112\\), so \\(b=2.8\\). [1] The intercept becomes \\(14-2.8(6)=-2.8\\), giving \\(\\hat y=2.8x-2.8\\). [1]",
      "The first-four line predicts \\(1.6(7)+2=13.2\\) hundred registrations. [1] The five-point line predicts \\(2.8(7)-2.8=16.8\\) hundred. [1] The extra \\(3.6\\) hundred registrants arise from the unusually high \\((10,30)\\) observation: check whether that week included other promotional activity or a data error. [1]",
      "The value \\(x=14\\) lies beyond all observed spending levels (2–10), so it is extrapolation with unverified linearity. [1] A confounding event, seasonal effect or changing demand could drive both spending and registrations; association does not establish causation. [1]"
    ],
    "answer": "Without fifth point: \\(\\hat y=1.6x+2\\); with it: \\(\\hat y=2.8x-2.8\\); at \\(x=7\\), predictions are 13.2 and 16.8 hundreds.",
    "misconception": "The line of best fit for y on x predicts y; reversing the axes would be a different regression. An outlier can affect both slope and intercept.",
    "reflection": "Should a mathematically correct regression automatically be used for a financial decision? What would you validate first?"
  },
  {
    "id": "W07-A5",
    "section": "A",
    "title": "A convincing result at 5% but not at 1%",
    "marks": 12,
    "ao": {
      "AO1": 2,
      "AO2": 3,
      "AO3": 7
    },
    "topics": [
      "Year 1 binomial hypothesis tests",
      "critical regions",
      "significance levels",
      "contextual judgement"
    ],
    "stem": "A manufacturer claims that the probability of a unit passing an independent functional test is \\(0.5\\). A new process is expected to increase this chance. In a trial of \\(12\\) independently tested units, \\(10\\) pass. Let \\(X\\) denote the number passing.",
    "parts": [
      [
        "Write suitable hypotheses and specify the distribution of \\(X\\) under the null hypothesis.",
        2
      ],
      [
        "Calculate the exact one-tailed \\(p\\)-value and give it to four decimal places.",
        3
      ],
      [
        "Establish the 5% upper-tail critical region by checking the adjacent boundary.",
        3
      ],
      [
        "Compare the 5% and 1% decisions and explain one important limitation of the evidence.",
        4
      ]
    ],
    "hint": "Use an upper-tail test because the alternative claims an increase. Compare P(X≥10) with the tail at 9 to establish the boundary.",
    "steps": [
      "The direction is improvement, so \\(H_0:p=0.5\\) and \\(H_1:p>0.5\\). [1] Under \\(H_0\\), \\(X\\sim B(12,0.5)\\). [1]",
      "Because ten passed, \\(p\\text{-value}=P(X\\ge10)\\). [1] Evaluate \\(\\frac{\\binom{12}{10}+\\binom{12}{11}+\\binom{12}{12}}{2^{12}}=\\frac{66+12+1}{4096}\\). [1] Hence \\(p\\text{-value}=79/4096\\approx0.0193\\). [1]",
      "At ten passes, \\(P(X\\ge10)=79/4096\\approx0.01929<0.05\\). [1] At nine passes, \\(P(X\\ge9)=(220+79)/4096\\approx0.07300>0.05\\). [1] Therefore the 5% critical region is \\(X\\ge10\\). [1]",
      "At 5%, reject \\(H_0\\) because \\(0.0193<0.05\\); there is evidence of improvement. [1] At 1%, do not reject \\(H_0\\) because \\(0.0193>0.01\\). [1] In fact \\(P(X\\ge11)=13/4096\\approx0.00317<0.01\\), so the 1% critical region is \\(X\\ge11\\). [1] The inference depends on independence and a representative testing process; units selected from one unusually reliable batch could violate those assumptions. [1]"
    ],
    "answer": "\\(p\\text{-value}=79/4096\\approx0.0193\\); reject at 5% but not at 1%; 5% critical region \\(X\\ge10\\).",
    "misconception": "A result significant at 5% is not automatically significant at 1%. 'Do not reject' also does not prove p=0.5.",
    "reflection": "How would the conclusion change if the twelve units came from a single production batch?"
  }
];
