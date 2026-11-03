export const week07Applied = [
  {
    "id": "W07-A1",
    "section": "A",
    "title": "What does the regression line say?",
    "marks": 4,
    "minutes": 8,
    "ao": {
      "AO1": 2,
      "AO2": 2
    },
    "topics": [
      "Year 1 regression",
      "gradient interpretation",
      "interpolation",
      "correlation and causation"
    ],
    "stem": "A study of revision sessions records \\(x\\), the number of attended sessions, and \\(y\\), a quiz score out of 30. The least-squares regression line of score on sessions for students attending between \\(2\\) and \\(10\\) sessions is \\(\\hat y=4.5+1.7x\\).",
    "parts": [
      [
        "Explain the meaning of the gradient \\(1.7\\) and the predicted intercept \\(4.5\\) in context.",
        2
      ],
      [
        "Predict the quiz score for a student attending eight sessions and give one reason why the line alone does not prove that attending more sessions causes better scores.",
        2
      ]
    ],
    "hint": "The slope describes an average predicted change in the response variable per additional session; substitute x=8 for a prediction within the observed range.",
    "steps": [
      "The slope \\(1.7\\) means the model predicts a score \\(1.7\\) points higher for one more attended session on average. The intercept \\(4.5\\) is the line's predicted score for zero sessions, but zero lies outside the sample range and the prediction may not be reliable. [2]",
      "At eight sessions, \\(\\hat y=4.5+1.7(8)=18.1\\) points. Correlation alone does not establish causation: prior ability, motivation or other unmeasured differences could influence both attendance and scores. [2]"
    ],
    "answer": "Gradient: \\(1.7\\) points per extra session; intercept: predicted \\(4.5\\) points at zero sessions (outside data); at eight sessions \\(18.1\\) points.",
    "misconception": "The intercept is a fitted value, not necessarily a meaningful attainable score, and a regression line cannot by itself establish a causal effect.",
    "reflection": "What extra data or research design would make a causal interpretation more credible?"
  },
  {
    "id": "W07-A2",
    "section": "A",
    "title": "One anomalous observation changes a regression prediction",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO2": 5,
      "AO3": 3
    },
    "topics": [
      "Year 1 regression",
      "outliers",
      "interpolation",
      "extrapolation",
      "model evaluation"
    ],
    "stem": "An analyst records weekly advertising spend \\(x\\) (in hundreds of pounds) and registrations \\(y\\) (in hundreds of people). Five observations are \\((2,6),(4,9),(6,12),(8,15),(10,30)\\). The first four lie exactly on a straight line. A software package fits the full five observations and reports the regression line \\(\\hat y=2.7x-1.8\\).",
    "parts": [
      [
        "Identify the observation that appears anomalous relative to the first four and justify your choice with a pattern or comparison.",
        2
      ],
      [
        "Determine the regression line for the first four observations (excluding the anomalous one).",
        2
      ],
      [
        "Use both regression lines to predict registrations when \\(x=7\\) and calculate the difference between the two predictions. Explain why this is interpolation.",
        2
      ],
      [
        "Use the first-four-point line to predict registrations when \\(x=14\\) and explain why the prediction should be treated more cautiously than your result for \\(x=7\\).",
        2
      ]
    ],
    "hint": "Use the consistent change between the first four data points to find their line. The question gives the full-data regression equation, so do not recalculate its coefficients.",
    "steps": [
      "The point \\((10,30)\\) is anomalous: the first four scores rise by 3 for each increase of 2 in x and would predict \\(y=18\\) at \\(x=10\\), rather than 30. [2]",
      "The slope of the line through the first four points is \\((9-6)/(4-2)=3/2=1.5\\). Using \\((2,6)\\), the intercept is \\(6-1.5(2)=3\\). Thus \\(\\hat y=1.5x+3\\). [2]",
      "At \\(x=7\\), the first-four-point line predicts \\(1.5(7)+3=13.5\\) hundreds; the full-data regression predicts \\(2.7(7)-1.8=17.1\\) hundreds. The difference is \\(3.6\\) hundreds of registrations. Since 7 lies within the measured range, these are interpolations. [2]",
      "At \\(x=14\\), the first-four-point line predicts \\(1.5(14)+3=24\\) hundreds. This is extrapolation because \\(14\\) is beyond even the full observed range \\(2\\le x\\le10\\); the underlying linear relationship may not continue there. [2]"
    ],
    "answer": "Anomalous \\((10,30)\\); first-four regression \\(\\hat y=1.5x+3\\). At \\(x=7\\), predictions are \\(13.5\\) and \\(17.1\\) hundreds; difference \\(3.6\\) hundreds. At \\(x=14\\), first-four model predicts \\(24\\) hundreds (extrapolation).",
    "misconception": "An outlier is a point substantially at odds with a pattern, not automatically an error; removing it without investigation can bias conclusions. Interpolation is defined relative to observed x-values.",
    "reflection": "What information could tell you whether the unusual fifth observation reflects a genuine campaign effect rather than a recording error?"
  },
  {
    "id": "W07-A3",
    "section": "A",
    "title": "A two-tailed binomial test with exact critical boundaries",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO2": 4,
      "AO3": 6
    },
    "topics": [
      "Year 1 two-tailed binomial hypothesis test",
      "critical region",
      "p-value",
      "significance",
      "contextual interpretation"
    ],
    "stem": "A quality inspector claims that an item is equally likely to be classified type A or type B, independently of other items. In a sample of \\(20\\) independently classified items, \\(15\\) are type A. Let \\(p\\) denote the population probability that an item is type A. Test whether the population probability differs from \\(0.5\\) at the \\(5\\%\\) significance level.",
    "parts": [
      [
        "State the null and alternative hypotheses and explain why the test is two-tailed.",
        2
      ],
      [
        "Specify the distribution of the count \\(X\\) of type A items under \\(H_0\\) and state the symmetric outcomes at least as extreme as the observed sample.",
        2
      ],
      [
        "Calculate the exact two-tailed \\(p\\)-value, showing a binomial summation, and give it to four decimal places.",
        2
      ],
      [
        "Find the \\(5\\%\\) two-tailed critical region, justifying why the adjacent integer outcomes are excluded.",
        2
      ],
      [
        "State the test decision at \\(5\\%\\) and contrast it with the decision at \\(1\\%\\); write a cautious conclusion in context.",
        2
      ]
    ],
    "hint": "Because \\(p_0=0.5\\), the two tails are symmetric. The outcomes at least as extreme as 15 of 20 are \\(X\\le5\\) and \\(X\\ge15\\).",
    "steps": [
      "State \\(H_0:p=0.5\\) and \\(H_1:p\\ne0.5\\). The suspicion is of any departure from an equal split, rather than only an increase or only a decrease, so use a two-tailed test. [2]",
      "Under \\(H_0\\), \\(X\\sim B(20,0.5)\\). By binomial symmetry, outcomes as extreme as \\(X=15\\) are \\(X\\le5\\) or \\(X\\ge15\\). [2]",
      "The exact two-tailed probability is \\(2P(X\\ge15)=2\\sum_{r=15}^{20}\\binom{20}{r}(0.5)^{20}\\). Since \\(\\sum_{r=15}^{20}\\binom{20}{r}=21700\\), \\(p\\text{-value}=\\frac{43400}{1048576}\\approx0.0414\\). [2]",
      "The \\(5\\%\\) critical region is \\(X\\le5\\) or \\(X\\ge15\\): its null probability is about \\(0.0414\\le0.05\\). Including \\(X=6\\) or \\(X=14\\) would give \\(2P(X\\le6)=\\frac{120920}{1048576}\\approx0.1153>0.05\\), exceeding the permitted significance level. [2]",
      "At \\(5\\%\\), reject \\(H_0\\): there is sufficient evidence that the type A proportion differs from half, assuming the model conditions. At \\(1\\%\\), do not reject \\(H_0\\) because \\(0.0414>0.01\\). These are evidence-based decisions, not proof of a particular population proportion. [2]"
    ],
    "answer": "\\(H_0:p=0.5,\\ H_1:p\\ne0.5\\), \\(X\\sim B(20,0.5)\\); two-tailed \\(p=0.0414\\); critical region \\(X\\le5\\) or \\(X\\ge15\\); reject at \\(5\\%\\) but not \\(1\\%\\).",
    "misconception": "For symmetric binomial data, the two-tailed p-value includes both equally extreme tails; do not use one upper-tail probability alone. Failing to reject at 1% is not evidence that p must equal 0.5.",
    "reflection": "Why is an exact binomial critical region often smaller than the nominal 5% level rather than exactly 5%?"
  }
];
