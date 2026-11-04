export const week09ExpansionModelling = [
  {
    "id": "W09-M3",
    "section": "M",
    "title": "Finding the best speed when costs compete",
    "marks": 14,
    "ao": {
      "AO2": 4,
      "AO3": 10
    },
    "topics": [
      "algebraic modelling",
      "differentiation",
      "optimisation",
      "parameter sensitivity",
      "assumptions"
    ],
    "stem": "A delivery operator models total monetary operating cost for a 120 km journey as \\(C(v)=\\frac{1200}{v}+0.01v^2\\) pounds, where \\(20\\le v\\le80\\) is cruising speed in km/h. The first term represents time-related costs and the second represents a speed-related cost approximation. An adviser recommends driving as fast as possible.",
    "parts": [
      [
        "Explain why the two terms compete and differentiate \\(C(v)\\).",
        3
      ],
      [
        "Find the unique speed minimising the modelled cost and prove that it is a minimum in the permitted interval.",
        4
      ],
      [
        "Evaluate the model at the optimum, 40 km/h and 60 km/h; compare the adviser's recommendation.",
        3
      ],
      [
        "If the speed-related coefficient doubles to 0.02, find the new optimal speed and evaluate two limitations of the original model.",
        4
      ]
    ],
    "hint": "Differentiate the total cost, not each term separately as a decision. Use C'' to establish a unique optimum, then evaluate the domain and sensitivity.",
    "steps": [
      "The time-related term \\(1200/v\\) decreases as speed increases, but the speed-related term \\(0.01v^2\\) increases. [1] Differentiate to obtain \\(C'(v)=-1200/v^2+0.02v\\). [1] Stationarity requires \\(0.02v^3=1200\\). [1]",
      "The stationary equation gives \\(v^3=60000\\) and \\(v_*=\\sqrt[3]{60000}\\approx39.15\\) km/h. [1] It is inside \\([20,80]\\). [1] The second derivative \\(C''(v)=2400/v^3+0.02>0\\) for all positive v, so C is strictly convex. [1] Thus this stationary point is the unique global minimum over the permitted speeds. [1]",
      "Substitution gives \\(C(v_*)\\approx\\pounds45.98\\). [1] At 40 km/h the model predicts \\(C(40)=30+16=\\pounds46\\); at 60 km/h it gives \\(C(60)=20+36=\\pounds56\\). [1] The optimum is close to 40 km/h, not the highest available speed; faster can cost more. [1]",
      "With \\(C_{\\mathrm{new}}(v)=1200/v+0.02v^2\\), stationarity gives \\(v^3=30000\\), so \\(v_{\\mathrm{new}}\\approx31.07\\) km/h. [2] The cost formula ignores traffic, speed limits and acceleration stages; a fixed cruising speed may not be achievable for the entire route. [1] Speed-dependent running costs and time costs are simplified and may not follow the chosen power law; data from actual journeys are needed to calibrate them. [1]"
    ],
    "answer": "Original optimum \\(v=\\sqrt[3]{60000}\\approx39.15\\) km/h at about £45.98; doubling the speed-cost coefficient shifts the optimum to \\(\\sqrt[3]{30000}\\approx31.07\\) km/h.",
    "misconception": "A lower journey time is not the same as a lower total cost when faster speed changes another cost component.",
    "reflection": "How would your recommendation change if an external speed limit were lower than the calculated optimum?"
  }
];
