export const week07Modelling = [
  {
    "id": "W07-M1",
    "section": "M",
    "title": "Build a decay model from two observations",
    "marks": 12,
    "minutes": 32,
    "ao": {
      "AO2": 2,
      "AO3": 10
    },
    "topics": [
      "exponential decay",
      "initial values",
      "half-life",
      "rates of change",
      "threshold",
      "model limitations"
    ],
    "stem": "A monitoring station measures a pollutant concentration \\(C(t)\\) in arbitrary concentration units, \\(t\\) hours after a filter starts. The sensor records \\(85\\) units at \\(t=0\\) and \\(45\\) units at \\(t=3\\). An analyst proposes \\(C(t)=5+Ae^{-kt}\\) for \\(t\\ge0\\), with \\(A>0\\), \\(k>0\\). The constant background concentration is assumed to be \\(5\\) units.",
    "parts": [
      [
        "Find \\(A\\) and an exact expression for \\(k\\).",
        3
      ],
      [
        "Predict the concentration after six hours and the average rate of change of concentration over the first six hours.",
        2
      ],
      [
        "Find when the model first reaches \\(15\\) units and hence the times when it predicts a concentration strictly below \\(15\\) units.",
        3
      ],
      [
        "Find the instantaneous rate of change of concentration at \\(t=3\\) hours, including units and sign.",
        2
      ],
      [
        "Give two distinct reasons why the model's predictions should be treated cautiously far beyond the observed period.",
        2
      ]
    ],
    "hint": "First subtract the background level 5. The quantity above background halves between t=0 and t=3. For the instantaneous rate, differentiate the exponential term.",
    "steps": [
      "From \\(C(0)=85\\), \\(5+A=85\\), so \\(A=80\\). From \\(C(3)=45\\), \\(40=80e^{-3k}\\), so \\(e^{-3k}=\\frac12\\) and \\(k=\\frac{\\ln2}{3}\\) per hour. [3]",
      "After six hours, \\(C(6)=5+80e^{-6k}=5+80(\\frac12)^2=25\\) units. The average rate over \\(0\\le t\\le6\\) is \\(\\frac{C(6)-C(0)}{6}=\\frac{25-85}{6}=-10\\) concentration units per hour. [2]",
      "Solve \\(5+80e^{-kt}=15\\), or \\(e^{-kt}=\\frac18\\). Thus \\(-kt=-\\ln8=-3\\ln2\\), giving \\(t=9\\) hours. Since the model decreases strictly, it predicts \\(C(t)<15\\) for \\(t>9\\) hours. [3]",
      "Differentiate: \\(C'(t)=-80ke^{-kt}\\). At 3 hours, \\(C'(3)=-40k=-\\frac{40\\ln2}{3}\\) concentration units per hour (approximately \\(-9.242\\)). The negative sign denotes a falling concentration. [2]",
      "The assumed constant background of 5 could vary with weather or other pollution sources; a fixed decay rate may cease to hold if the filter ages or pollution input changes. Moreover, just two observations cannot establish that the assumed functional form is correct. Any two different contextual limitations with reasoning earn credit. [2]"
    ],
    "answer": "\\(C(t)=5+80e^{-(\\ln2)t/3}\\); \\(C(6)=25\\), average change \\(-10\\) units/hour, threshold \\(15\\) at \\(t=9\\), and \\(C'(3)=-40\\ln2/3\\) units/hour.",
    "misconception": "The pollutant above background halves, not the total concentration: 85 becomes 45, then 25. Do not use an 85-to-45 ratio for the decaying component.",
    "reflection": "How would your estimated half-life change if the constant background were 10 instead of 5?"
  },
  {
    "id": "W07-M2",
    "section": "M",
    "title": "A capacity-limited population compared with unrestricted growth",
    "marks": 14,
    "minutes": 36,
    "ao": {
      "AO2": 2,
      "AO3": 12
    },
    "topics": [
      "separable differential equations",
      "partial fractions",
      "logistic growth",
      "comparison of models",
      "threshold time",
      "model evaluation"
    ],
    "stem": "A small colony begins with a population index \\(20\\) at \\(t=0\\) months. Two models use a common growth parameter \\(0.2\\) per month. Model U assumes unrestricted growth, \\(\\frac{dU}{dt}=0.2U,\\quad U(0)=20\\). Model L allows for a limiting capacity of 100, \\(\\frac{dL}{dt}=0.2L(1-\\frac{L}{100}),\\quad L(0)=20\\). The index is treated as continuous; both models are only hypotheses, not observed data.",
    "parts": [
      [
        "Find an explicit expression for \\(U(t)\\).",
        2
      ],
      [
        "Separate variables and use partial fractions to show that \\(L(t)=\\frac{100}{1+4e^{-0.2t}}\\).",
        4
      ],
      [
        "Find the time at which each model first predicts a population index of \\(50\\). Give exact expressions and values to three decimal places.",
        3
      ],
      [
        "Calculate each model's prediction at \\(t=10\\) months and explain which is more plausible if 100 is a genuine capacity limit.",
        3
      ],
      [
        "Identify one weakness common to both models and propose one additional measurement or modelling refinement that would help test their reliability.",
        2
      ]
    ],
    "hint": "For Model L, rewrite \\(\\frac1{L(1-L/100)}=\\frac1L+\\frac1{100-L}\\). Remember that integrating the second fraction produces a negative logarithm.",
    "steps": [
      "Separating \\(\\frac{dU}{dt}=0.2U\\) gives \\(\\ln U=0.2t+C\\) for \\(U>0\\). The initial condition yields \\(U(t)=20e^{0.2t}\\). [2]",
      "For L, separate \\(\\frac{dL}{L(1-L/100)}=0.2\\,dt\\). Since \\(\\frac1{L(1-L/100)}=\\frac1L+\\frac1{100-L}\\), integrate to get \\(\\ln L-\\ln(100-L)=0.2t+C\\) for \\(0<L<100\\). Thus \\(\\frac{L}{100-L}=Be^{0.2t}\\). Using \\(L(0)=20\\), \\(B=\\frac{20}{80}=\\frac14\\). Rearranging \\(L/(100-L)=e^{0.2t}/4\\) gives \\(L(t)=100/(1+4e^{-0.2t})\\). [4]",
      "For U, \\(20e^{0.2t}=50\\) implies \\(t_U=5\\ln(5/2)\\approx4.581\\) months. For L, \\(100/(1+4e^{-0.2t})=50\\) gives \\(e^{-0.2t}=1/4\\), so \\(t_L=5\\ln4\\approx6.931\\) months. [3]",
      "At 10 months \\(U(10)=20e^2\\approx147.781\\) whereas \\(L(10)=\\frac{100}{1+4e^{-2}}\\approx64.873\\). If capacity 100 is firm, U's value above capacity is implausible; L tends to 100 without exceeding it. [3]",
      "Both models impose a constant growth parameter and ignore random fluctuations, seasonal changes or demographic structure. The analyst could collect data at several intermediate and later times, estimate the rate and capacity rather than assume them, or introduce a time-varying rate supported by evidence. Award one contextual weakness and one specific proposed improvement. [2]"
    ],
    "answer": "\\(U(t)=20e^{0.2t}\\), \\(L(t)=100/(1+4e^{-0.2t})\\); 50 reached after \\(5\\ln(5/2)\\approx4.581\\) and \\(5\\ln4\\approx6.931\\) months respectively; at 10 months, about \\(147.781\\) vs \\(64.873\\).",
    "misconception": "In the logistic separation, integrating 1/(100−L) gives −ln|100−L|, not +ln. A capacity parameter also does not automatically prove the model represents reality.",
    "reflection": "What data would best distinguish the two models early, before the unrestricted model reaches the supposed capacity?"
  }
];
