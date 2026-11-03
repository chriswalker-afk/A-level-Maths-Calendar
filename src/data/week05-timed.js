export const week05Timed = [
  {
    "id": "W05-T1",
    "section": "T",
    "title": "Exact area and a trapezium estimate",
    "marks": 8,
    "minutes": 12,
    "ao": {
      "AO1": 3,
      "AO2": 5
    },
    "topics": [
      "substitution",
      "area",
      "trapezium rule",
      "reasoning about approximation"
    ],
    "stem": "A region is bounded by the curve \\(y=x\\sqrt{1+x^2}\\), the \\(x\\)-axis, and the lines \\(x=0\\) and \\(x=2\\). A numerical estimate uses two equal-width strips.",
    "parts": [
      [
        "Show that an exact expression for the area is \\(A=\\frac{5\\sqrt5-1}{3}\\) square units, using an appropriate substitution.",
        3
      ],
      [
        "Use the trapezium rule with two strips to estimate the area in exact surd form.",
        3
      ],
      [
        "Determine whether this estimate is an overestimate or underestimate and justify your answer by comparison with the exact area.",
        2
      ]
    ],
    "hint": "Try the substitution \\(u=1+x^2\\). For two strips the abscissae are 0, 1 and 2 and the width is 1.",
    "steps": [
      "The exact area is \\(A=\\int_0^2x\\sqrt{1+x^2}\\,dx\\). Put \\(u=1+x^2\\), giving \\(du=2x\\,dx\\) and bounds \\(u=1,5\\). Thus \\(A=\\frac12\\int_1^5u^{1/2}\\,du=\\left[\\frac13u^{3/2}\\right]_1^5=\\frac{5\\sqrt5-1}{3}\\). [3]",
      "With strip width \\(h=1\\), the ordinates are \\(y_0=0\\), \\(y_1=\\sqrt2\\), and \\(y_2=2\\sqrt5\\). The trapezium estimate is \\(T=\\frac12(y_0+2y_1+y_2)=\\sqrt2+\\sqrt5\\) square units. [3]",
      "Numerically \\(T\\approx3.6503\\) while \\(A\\approx3.3934\\). Hence the two-strip trapezium estimate is an overestimate. [2]"
    ],
    "answer": "Exact area \\(\\frac{5\\sqrt5-1}{3}\\) square units; trapezium estimate \\(\\sqrt2+\\sqrt5\\) square units (overestimate).",
    "misconception": "The trapezium formula requires both endpoints and twice the interior ordinates; the estimate is not automatically less than the true area.",
    "reflection": "What would happen to the error if the number of equal strips were increased?"
  },
  {
    "id": "W05-T2",
    "section": "T",
    "title": "One parametric curve, two integrals",
    "marks": 12,
    "minutes": 17,
    "ao": {
      "AO1": 3,
      "AO2": 9
    },
    "topics": [
      "parametric differentiation",
      "area under parametric curve",
      "volume of revolution",
      "method choice"
    ],
    "stem": "The parametric curve is given by \\(x=t^2,\\qquad y=4t-t^3\\), where \\(0\\le t\\le2\\). The curve lies on or above the \\(x\\)-axis in this interval. The region between the curve and the \\(x\\)-axis is denoted by \\(R\\).",
    "parts": [
      [
        "Find the exact coordinates of the stationary point of \\(y\\) with respect to \\(x\\) for which \\(t>0\\).",
        3
      ],
      [
        "Calculate the exact area of \\(R\\), using an integral with respect to \\(t\\).",
        4
      ],
      [
        "The region \\(R\\) is rotated about the \\(x\\)-axis. Calculate the exact volume of the resulting solid.",
        5
      ]
    ],
    "hint": "For a parametric curve, \\(\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}\\). Use \\(A=\\int y\\,\\frac{dx}{dt}\\,dt\\) and \\(V=\\pi\\int y^2\\,\\frac{dx}{dt}\\,dt\\).",
    "steps": [
      "For \\(t>0\\), \\(\\frac{dy}{dx}=\\frac{4-3t^2}{2t}\\). This vanishes at \\(t=\\frac2{\\sqrt3}\\), giving \\(x=\\frac43\\) and \\(y=\\frac2{\\sqrt3}\\left(4-\\frac43\\right)=\\frac{16}{3\\sqrt3}\\). Thus the stationary point is \\((\\frac43,\\frac{16\\sqrt3}{9})\\). [3]",
      "The curve has \\(\\frac{dx}{dt}=2t\\) and \\(y\\ge0\\) for \\(0\\le t\\le2\\). The enclosed area is \\(A=\\int_0^2(4t-t^3)(2t)\\,dt=\\int_0^2(8t^2-2t^4)\\,dt\\). Evaluating \\(\\left[\\frac{8t^3}{3}-\\frac{2t^5}{5}\\right]_0^2=\\frac{64}{3}-\\frac{64}{5}=\\frac{128}{15}\\) square units. [4]",
      "For revolution about the \\(x\\)-axis, \\(V=\\pi\\int_0^2(4t-t^3)^2(2t)\\,dt\\). Expanding yields \\(V=\\pi\\int_0^2(32t^3-16t^5+2t^7)\\,dt\\). Integrating gives \\(\\pi\\left[8t^4-\\frac83t^6+\\frac{t^8}{4}\\right]_0^2=\\pi\\left(128-\\frac{512}{3}+64\\right)=\\frac{64\\pi}{3}\\) cubic units. [5]"
    ],
    "answer": "Stationary point \\((\\frac43,\\frac{16\\sqrt3}{9})\\), area \\(\\frac{128}{15}\\) square units and volume \\(\\frac{64\\pi}{3}\\) cubic units.",
    "misconception": "When integrating a parametric area or volume, the factor dx/dt is essential. For volume, the radius is y and must be squared.",
    "reflection": "Why is the y-value nonnegative throughout 0 ≤ t ≤ 2, and how does that simplify the area calculation?"
  },
  {
    "id": "W05-T3",
    "section": "T",
    "title": "A two-tailed test with two decisions",
    "marks": 12,
    "minutes": 16,
    "ao": {
      "AO1": 3,
      "AO2": 3,
      "AO3": 6
    },
    "topics": [
      "two-tailed binomial test",
      "exact tails",
      "significance level",
      "statistical interpretation"
    ],
    "stem": "A fair coin is claimed to have probability \\(0.5\\) of heads. In \\(18\\) independent tosses, the coin lands heads \\(13\\) times. A student wishes to investigate whether the probability of heads differs from \\(0.5\\). Let \\(p\\) denote the true probability of heads.",
    "parts": [
      [
        "State the null and alternative hypotheses and explain why the test is two-tailed.",
        2
      ],
      [
        "Under the null hypothesis, show that the probability of at least \\(13\\) heads is \\(\\frac{1577}{32768}\\).",
        4
      ],
      [
        "Find the two-tailed p-value and determine the statistical decision at both the \\(5\\%\\) and \\(10\\%\\) significance levels.",
        3
      ],
      [
        "Explain the decisions in context and state why the data do not establish the coin's exact underlying probability.",
        3
      ]
    ],
    "hint": "Use \\(X\\sim B(18,0.5)\\) and binomial symmetry. Exactly symmetric evidence includes \\(X\\le5\\) and \\(X\\ge13\\).",
    "steps": [
      "\\(H_0:p=0.5\\) versus \\(H_1:p\\ne0.5\\). The alternative concerns either direction of departure from fairness, so the test is two-tailed. [2]",
      "Under \\(H_0\\), \\(X\\sim B(18,0.5)\\). The upper-tail probability is \\(P(X\\ge13)=\\frac{\\sum_{r=13}^{18}\\binom{18}{r}}{2^{18}}\\). Using symmetry of binomial coefficients, the numerator is \\(8568+3060+816+153+18+1=12616\\). Thus \\(P(X\\ge13)=\\frac{12616}{262144}=\\frac{1577}{32768}\\approx0.04813\\). [4]",
      "With symmetry, \\(P(X\\le5)=P(X\\ge13)\\); the two-tailed p-value is \\(2P(X\\ge13)=\\frac{1577}{16384}\\approx0.09625\\). At \\(5\\%\\), \\(0.09625>0.05\\): do not reject \\(H_0\\). At \\(10\\%\\), \\(0.09625<0.10\\): reject \\(H_0\\). [3]",
      "At the \\(5\\%\\) level there is insufficient evidence that the coin is biased; at \\(10\\%\\) there is evidence of a departure from probability \\(0.5\\). Failure to reject does not prove fairness, and rejection does not identify an exact value of \\(p\\); these are decisions based on one sample and its sampling uncertainty. [3]"
    ],
    "answer": "Two-tailed p-value \\(\\frac{1577}{16384}\\approx0.09625\\). Do not reject fairness at \\(5\\%\\); reject at \\(10\\%\\).",
    "misconception": "For a symmetric fair-coin null model, the other extreme tail must be counted. A single upper-tail probability here is not the p-value for a two-sided alternative.",
    "reflection": "Why does changing the significance level change the decision without changing the data or the p-value?"
  }
];
