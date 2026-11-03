export const week07Timed = [
  {
    "id": "W07-T1",
    "section": "T",
    "title": "An exponential peak and an exact accumulated area",
    "marks": 8,
    "minutes": 12,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "product rule",
      "exponential stationary points",
      "integration by parts",
      "limits"
    ],
    "stem": "For \\(x\\ge0\\), let \\(f(x)=xe^{-x}\\). Consider the region beneath the curve and above the \\(x\\)-axis.",
    "parts": [
      [
        "Find \\(f'(x)\\) and the value of \\(x\\) at which the function is stationary.",
        3
      ],
      [
        "Show that the stationary point is a maximum and find its exact height.",
        1
      ],
      [
        "Calculate exactly the area under the curve from \\(x=0\\) to \\(x=2\\).",
        3
      ],
      [
        "Explain why the total area under the curve on \\(x\\ge0\\) is finite.",
        1
      ]
    ],
    "hint": "The product rule is useful for the maximum. For the area, integrate \\(xe^{-x}\\) by parts, differentiating the factor x.",
    "steps": [
      "The derivative is \\(f'(x)=e^{-x}-xe^{-x}=e^{-x}(1-x)\\). Since \\(e^{-x}>0\\), the stationary point occurs at \\(x=1\\). [3]",
      "The derivative changes from positive to negative as x passes 1, hence the point is a maximum, with \\(f(1)=e^{-1}\\). [1]",
      "Integration by parts gives \\(\\int xe^{-x}\\,dx=-(x+1)e^{-x}+C\\). Thus \\(\\int_0^2xe^{-x}\\,dx=[-(x+1)e^{-x}]_0^2=1-3e^{-2}\\) square units. [3]",
      "For upper limit \\(b\\), the area is \\(1-(b+1)e^{-b}\\). Since \\((b+1)e^{-b}\\to0\\) as \\(b\\to\\infty\\), the total area tends to the finite value \\(1\\). [1]"
    ],
    "answer": "Maximum \\((1,e^{-1})\\); area \\(1-3e^{-2}\\); infinite-range area \\(1\\).",
    "misconception": "The e^{-x} factor does not make the derivative always negative because x is also increasing; use the product rule before deciding the shape.",
    "reflection": "How would scaling the model to x e^{-kx} affect the peak position and total area?"
  },
  {
    "id": "W07-T2",
    "section": "T",
    "title": "A decreasing power law and an exact integral",
    "marks": 12,
    "minutes": 17,
    "ao": {
      "AO1": 3,
      "AO2": 7,
      "AO3": 2
    },
    "topics": [
      "log–log plot",
      "power-law calibration",
      "inequalities",
      "integration",
      "model limitations"
    ],
    "stem": "The response of a measuring device is modelled by \\(y=Ax^b\\) for \\(x>0\\), where \\(A>0\\). Two calibration readings are \\((1,24)\\) and \\((9,8)\\). The measured input range is \\(1\\le x\\le9\\).",
    "parts": [
      [
        "Explain how a transformed plot can be used to estimate \\(A\\) and \\(b\\).",
        2
      ],
      [
        "Find exact values of \\(A\\) and \\(b\\) from the two readings.",
        3
      ],
      [
        "Using your model, find the exact set of inputs for which \\(y<6\\).",
        2
      ],
      [
        "Find the exact value of \\(\\displaystyle\\int_1^9y\\,dx\\).",
        3
      ],
      [
        "Explain why using the model to make a decision about \\(y<6\\) would require additional measurements.",
        2
      ]
    ],
    "hint": "Log both x and y before finding the gradient. The calibrated function has a negative fractional exponent, which is straightforward to integrate.",
    "steps": [
      "Taking logarithms gives \\(\\ln y=\\ln A+b\\ln x\\). A graph of \\(\\ln y\\) against \\(\\ln x\\) has gradient \\(b\\) and intercept \\(\\ln A\\). [2]",
      "At \\(x=1\\), \\(A=24\\). Then \\(8=24(9^b)\\) gives \\(9^b=\\frac13\\) and \\(b=\\frac{\\ln(1/3)}{\\ln9}=-\\frac12\\). Thus \\(y=24x^{-1/2}\\). [3]",
      "The inequality \\(24x^{-1/2}<6\\) is \\(\\frac{24}{\\sqrt x}<6\\), so \\(\\sqrt x>4\\), or \\(x>16\\). [2]",
      "Integrate \\(\\int_1^9 24x^{-1/2}\\,dx=[48\\sqrt x]_1^9=48(3-1)=96\\). [3]",
      "The threshold \\(x>16\\) lies beyond the measured interval \\(1\\le x\\le9\\). It is therefore an extrapolation: the power-law trend could change for larger inputs, and only two readings cannot confirm the model. [2]"
    ],
    "answer": "\\(A=24,\\ b=-\\frac12\\), \\(y<6\\) when \\(x>16\\), and exact accumulated area \\(96\\).",
    "misconception": "Log–log linearisation needs the logarithm of both axes, and the inequality direction must be handled carefully with a decreasing function.",
    "reflection": "How could more calibration points show whether a power law is preferable to an exponential model?"
  },
  {
    "id": "W07-T3",
    "section": "T",
    "title": "Interpreting regression and independent test evidence",
    "marks": 12,
    "minutes": 16,
    "ao": {
      "AO1": 2,
      "AO2": 4,
      "AO3": 6
    },
    "topics": [
      "regression interpretation",
      "interpolation versus extrapolation",
      "two-tailed binomial test",
      "p-value",
      "contextual conclusion"
    ],
    "stem": "A trial looks at a product's storage time \\(x\\) in weeks and its average quality score \\(y\\). For storage times from \\(2\\) to \\(12\\) weeks, a fitted regression line is \\(\\hat y=28-1.5x\\). In a separate quality check, \\(18\\) independent products are classified as pass or fail; \\(14\\) pass. Test whether the true pass probability differs from \\(0.5\\) at the \\(5\\%\\) level.",
    "parts": [
      [
        "Interpret the slope of the regression line in context and estimate the quality score at \\(x=8\\).",
        3
      ],
      [
        "Predict the quality score at \\(x=20\\) and explain one limitation of this prediction.",
        3
      ],
      [
        "State suitable hypotheses for the pass probability \\(p\\) and a null distribution for the pass count \\(X\\).",
        2
      ],
      [
        "Calculate the exact two-tailed \\(p\\)-value to four decimal places, explaining which two tails are counted.",
        2
      ],
      [
        "Decide whether the check provides evidence of a departure from \\(p=0.5\\) at \\(5\\%\\) and explain why this does not establish a causal relationship with storage time.",
        2
      ]
    ],
    "hint": "The regression is of y on x, so substitute x rather than y. For the fair-coin-style null, outcomes at least as extreme as 14 passes of 18 are X≤4 and X≥14.",
    "steps": [
      "The slope \\(-1.5\\) means an extra week in storage is associated with a predicted decrease of 1.5 quality-score points. At \\(x=8\\), \\(\\hat y=28-1.5(8)=16\\). [3]",
      "At \\(x=20\\), \\(\\hat y=28-1.5(20)=-2\\). This lies outside the measured range of 2–12 weeks and even gives an impossible negative score if scores cannot be negative, showing that extrapolation is not trustworthy. [3]",
      "The hypotheses are \\(H_0:p=0.5,\\ H_1:p\\ne0.5\\) and under \\(H_0\\), \\(X\\sim B(18,0.5)\\). [2]",
      "By symmetry, at least as extreme as \\(14\\) successes means \\(X\\le4\\) or \\(X\\ge14\\). The probability is \\(2\\sum_{r=14}^{18}\\binom{18}{r}(0.5)^{18}=\\frac{8096}{262144}\\approx0.0309\\). [2]",
      "As \\(0.0309<0.05\\), reject \\(H_0\\); there is evidence that the pass probability is not 0.5. The separate binomial result does not prove storage time causes a change in pass probability, as the data concern different outcomes and no controlled comparison establishes causality. [2]"
    ],
    "answer": "Regression slope \\(-1.5\\) points/week, predicted \\(16\\) points at eight weeks and \\(-2\\) at 20 (unreliable extrapolation). Two-tailed binomial \\(p\\approx0.0309\\), reject equal pass probability at \\(5\\%\\).",
    "misconception": "Statistical significance for a separate binomial sample does not prove anything about a regression line's causal interpretation; also extrapolated scores can be impossible.",
    "reflection": "What experimental design would connect storage time and pass probability without treating unrelated pieces of evidence as causal proof?"
  }
];
