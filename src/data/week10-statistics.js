export const week10Statistics = [
  {
    "id": "W10-A1",
    "section": "A",
    "paper": "statistics",
    "title": "Choosing a representative sample",
    "marks": 4,
    "minutes": 5,
    "ao": {
      "AO1": 2,
      "AO2": 0,
      "AO3": 2
    },
    "topics": [
      "stratified sampling",
      "sampling frame",
      "sampling bias"
    ],
    "stem": "A sixth-form college has \\(180\\) Year 12 and \\(120\\) Year 13 students. A researcher intends to select a stratified random sample of \\(60\\) students, with proportional allocation across the two year groups.",
    "parts": [
      [
        "Calculate how many students should be selected from each year group.",
        2
      ],
      [
        "Describe how to choose them randomly within each group and explain one potential source of bias if the researcher instead interviews only students present before registration.",
        2
      ]
    ],
    "hint": "Use each year group's share of the total 300 students before sampling randomly.",
    "steps": [
      "Year 12 represents \\(180/300\\) of the population, so the allocation is \\(60(180/300)=36\\). [1] Year 13 contributes \\(60(120/300)=24\\), totalling 60. [1]",
      "Create separate complete lists for each year, number students and choose 36 and 24 distinct random numbers respectively (ignoring repeats) to select students. [1] Early arrivals may differ in travel, attendance or punctuality, so interviewing only them would be an opportunity sample that could systematically misrepresent the population. [1]"
    ],
    "answer": "\\(36\\) Year 12 students and \\(24\\) Year 13 students, chosen randomly within strata.",
    "misconception": "Stratified random sampling is not simply dividing the target sample equally between groups of unequal size.",
    "reflection": "What might remain biased even after stratification if the student registers used as sampling frames are incomplete?"
  },
  {
    "id": "W10-A2",
    "section": "A",
    "paper": "statistics",
    "title": "Grouped measurements and a histogram",
    "marks": 5,
    "minutes": 6,
    "ao": {
      "AO1": 3,
      "AO2": 1,
      "AO3": 1
    },
    "topics": [
      "histogram frequency density",
      "grouped means",
      "class width"
    ],
    "stem": "Forty measurements are grouped as follows. In interval \\(0\\le x<10\\) the frequency is \\(12\\); in \\(10\\le x<15\\) the frequency is \\(18\\); and in \\(15\\le x<25\\) the frequency is \\(10\\).",
    "parts": [
      [
        "Find the histogram frequency density for each interval.",
        2
      ],
      [
        "Identify the modal class using the histogram densities.",
        1
      ],
      [
        "Estimate the mean of the measurements using class midpoints.",
        2
      ]
    ],
    "hint": "Frequency density equals frequency divided by class width. The grouped mean uses the sum of frequency multiplied by midpoint, divided by 40.",
    "steps": [
      "Widths are \\(10,5,10\\). Therefore densities are \\(12/10=1.2\\), \\(18/5=3.6\\) and \\(10/10=1.0\\) respectively. [2]",
      "The tallest bar has density \\(3.6\\), so the modal class is \\(10\\le x<15\\). [1]",
      "Midpoints are \\(5,12.5,20\\). [1] The estimated mean is \\(\\bar x\\approx\\frac{12(5)+18(12.5)+10(20)}{40}=\\frac{485}{40}=12.125\\). [1]"
    ],
    "answer": "Frequency densities \\(1.2,3.6,1.0\\), modal interval \\(10\\le x<15\\), estimated mean \\(12.125\\).",
    "misconception": "The frequency of 18 is not the histogram height: the middle class is half the width of the other classes.",
    "reflection": "Why is the mean only an estimate when the individual measurements are not given?"
  },
  {
    "id": "W10-A3",
    "section": "A",
    "paper": "statistics",
    "title": "Two events in a probability model",
    "marks": 6,
    "minutes": 7,
    "ao": {
      "AO1": 3,
      "AO2": 2,
      "AO3": 1
    },
    "topics": [
      "probability union",
      "independence",
      "mutual exclusivity"
    ],
    "stem": "In a probability model, events A and B satisfy \\(P(A)=0.4\\), \\(P(B)=0.5\\) and \\(P(A\\cap B)=0.2\\).",
    "parts": [
      [
        "Determine whether A and B are independent, with a calculation.",
        2
      ],
      [
        "Find \\(P(A\\cup B)\\), showing the appropriate rule.",
        2
      ],
      [
        "Find the probability that neither A nor B occurs and explain whether A and B are mutually exclusive.",
        2
      ]
    ],
    "hint": "For independence compare P(A∩B) with P(A)P(B). For a union subtract the overlap once.",
    "steps": [
      "The product of marginals is \\(P(A)P(B)=0.4(0.5)=0.2\\). [1] This equals \\(P(A\\cap B)\\) so the events are independent under this model. [1]",
      "Use \\(P(A\\cup B)=P(A)+P(B)-P(A\\cap B)\\), [1] giving \\(0.4+0.5-0.2=0.7\\). [1]",
      "The complement of the union has probability \\(1-0.7=0.3\\). [1] The events are not mutually exclusive because their intersection probability is \\(0.2>0\\). [1]"
    ],
    "answer": "Independent; \\(P(A\\cup B)=0.7\\), \\(P(\\text{neither})=0.3\\), not mutually exclusive.",
    "misconception": "Independent events can happen together. Mutually exclusive events have zero probability of intersection; these two properties are different.",
    "reflection": "Why would mutually exclusive events of positive probabilities never be independent?"
  },
  {
    "id": "W10-A4",
    "section": "A",
    "paper": "statistics",
    "title": "A fixed number of independent trials",
    "marks": 5,
    "minutes": 6,
    "ao": {
      "AO1": 4,
      "AO2": 0,
      "AO3": 1
    },
    "topics": [
      "binomial distribution",
      "point probability",
      "complements",
      "binomial assumptions"
    ],
    "stem": "A machine independently classifies each of \\(8\\) items as defective or non-defective. Its defect probability is assumed constant at \\(0.25\\) per item. Let X count defective items.",
    "parts": [
      [
        "State the distribution of X and calculate \\(P(X=2)\\).",
        2
      ],
      [
        "Find \\(P(X\\ge1)\\).",
        2
      ],
      [
        "Identify one condition essential for a binomial model and explain how it applies here.",
        1
      ]
    ],
    "hint": "Use the binomial formula for exactly two. At least one is most quickly found by taking the complement of zero.",
    "steps": [
      "Write \\(X\\sim B(8,0.25)\\). [1] Then \\(P(X=2)=\\binom82(0.25)^2(0.75)^6\\approx0.3114624023\\). [1]",
      "Use the complement: \\(P(X\\ge1)=1-P(X=0)\\), [1] so \\(P(X\\ge1)=1-(0.75)^8\\approx0.8998870849\\). [1]",
      "There must be a fixed number of independent trials, each with two outcomes and constant p. The question explicitly assumes eight independent classifications, with the same defect probability for each. Any one identified, contextualised condition earns credit. [1]"
    ],
    "answer": "\\(X\\sim B(8,0.25)\\), \\(P(X=2)\\approx0.3115\\), \\(P(X\\ge1)\\approx0.8999\\).",
    "misconception": "P(X≥1) is not the sum of all eight nonzero point probabilities calculated by hand; the complement P(X=0) is simpler and less error-prone.",
    "reflection": "What evidence would make the assumption of independent classifications questionable?"
  },
  {
    "id": "W10-A5",
    "section": "A",
    "paper": "statistics",
    "title": "Testing an improvement claim",
    "marks": 5,
    "minutes": 6,
    "ao": {
      "AO1": 2,
      "AO2": 0,
      "AO3": 3
    },
    "topics": [
      "one-tailed binomial hypothesis test",
      "p-value",
      "significance",
      "contextual conclusion"
    ],
    "stem": "A manufacturer claims its components pass a check with probability \\(0.5\\). In \\(12\\) independent checks, \\(10\\) components pass. The researcher tests for evidence that the population pass probability has increased, using a \\(5\\%\\) significance level.",
    "parts": [
      [
        "State the null and alternative hypotheses for the population pass probability p, and the null distribution of the number of passes X.",
        2
      ],
      [
        "Find the one-tailed p-value exactly as a fraction.",
        2
      ],
      [
        "State the statistical decision and its meaning in context.",
        1
      ]
    ],
    "hint": "Because the alternative is an increase, include the probability of 10, 11 or 12 successes—not just exactly 10.",
    "steps": [
      "State \\(H_0:p=0.5\\) and \\(H_1:p>0.5\\). [1] Under \\(H_0\\), \\(X\\sim B(12,0.5)\\). [1]",
      "The p-value is \\(P(X\\ge10)=\\sum_{r=10}^{12}\\binom{12}{r}2^{-12}\\). [1] The numerator is \\(\\binom{12}{10}+\\binom{12}{11}+\\binom{12}{12}=66+12+1=79\\), giving \\(79/4096\\approx0.0193\\). [1]",
      "Since \\(0.0193<0.05\\), reject \\(H_0\\): there is evidence at the 5% level that the pass probability has increased, provided the binomial model assumptions hold. [1]"
    ],
    "answer": "\\(H_0:p=0.5,\\ H_1:p>0.5\\), \\(X\\sim B(12,0.5)\\), \\(P(X\\ge10)=79/4096\\approx0.0193\\), reject \\(H_0\\) at 5%.",
    "misconception": "A one-tailed upper p-value includes results at least as extreme as the observation. It is not only P(X=10).",
    "reflection": "Why is the conclusion 'evidence of improvement' rather than proof that the new pass probability has a particular value?"
  }
];
