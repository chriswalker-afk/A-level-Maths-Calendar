export const week07ExpansionModelling = [
  {
    "id": "W07-M3",
    "section": "M",
    "title": "When two growth forecasts exchange the lead",
    "marks": 14,
    "ao": {
      "AO2": 3,
      "AO3": 11
    },
    "topics": [
      "exponential growth and saturation",
      "convexity",
      "Newton–Raphson",
      "model evaluation"
    ],
    "stem": "Two teams forecast the number of active devices (in hundreds) after \\(t\\) months. Team A uses \\(A(t)=10e^{0.3t}\\); Team B uses \\(B(t)=100-90e^{-0.2t}\\), for \\(t\\ge0\\). The physical service can handle no more than 100 hundreds of devices. A manager claims that Team B's forecast will always be larger because it initially grows faster.",
    "parts": [
      [
        "Verify the common starting value and find the initial growth rate of each model, including units.",
        3
      ],
      [
        "Prove that the forecasts are equal at exactly one positive time, in addition to their equality at \\(t=0\\).",
        4
      ],
      [
        "Use Newton–Raphson from \\(t_0=7\\) to find the positive crossover time to two decimal places.",
        3
      ],
      [
        "Compare the forecasts at \\(t=10\\) and evaluate two ways the capacity and assumptions affect the decision.",
        4
      ]
    ],
    "hint": "Subtract the forecasts and examine the second derivative: strict convexity can establish uniqueness before using Newton's method.",
    "steps": [
      "Both give \\(A(0)=B(0)=10\\) hundreds of devices. [1] Differentiate: \\(A'(t)=3e^{0.3t}\\), so \\(A'(0)=3\\) hundreds per month. [1] Likewise \\(B'(t)=18e^{-0.2t}\\), so \\(B'(0)=18\\) hundreds per month; B grows faster initially. [1]",
      "Define \\(G(t)=A(t)-B(t)=10e^{0.3t}+90e^{-0.2t}-100\\). [1] Its derivative is \\(G'(t)=3e^{0.3t}-18e^{-0.2t}\\). [1] Since \\(G''(t)=0.9e^{0.3t}+3.6e^{-0.2t}>0\\), the derivative increases strictly and passes from \\(G'(0)=-15\\) to positive values, giving one minimum. [1] As \\(G(0)=0\\), \\(G(6)<0<G(7)\\), strict increase after the minimum gives exactly one further root in \\((6,7)\\). [1]",
      "Use \\(t_{n+1}=t_n-\\frac{10e^{0.3t_n}+90e^{-0.2t_n}-100}{3e^{0.3t_n}-18e^{-0.2t_n}}\\). [1] This gives \\(t_1=6.807803\\ldots\\) and \\(t_2=6.799712\\ldots\\). [1] One further iteration confirms the crossover \\(t\\approx6.80\\) months. [1]",
      "At ten months, \\(A(10)=10e^3\\approx200.86\\) and \\(B(10)=100-90e^{-2}\\approx87.82\\) hundreds of devices. [2] Model A exceeds physical capacity and therefore cannot represent the number actually serviced; the model needs a cap or excess-demand variable. [1] Model B builds in an asymptote of 100 without representing shortages, churn or changing adoption rates, so it is also a hypothesis requiring observed-data validation. [1]"
    ],
    "answer": "\\(t\\approx6.80\\) months is the unique positive crossover; \\(A(10)\\approx200.86\\) versus \\(B(10)\\approx87.82\\) hundreds.",
    "misconception": "A model crossing physical capacity predicts unconstrained demand, not a feasible service total.",
    "reflection": "What additional observation would most clearly distinguish exponential demand from capacity-limited adoption?"
  }
];
