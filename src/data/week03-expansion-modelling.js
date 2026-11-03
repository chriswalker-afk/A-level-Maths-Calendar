export const week03ExpansionModelling = [
  {
    "id": "W03-M3",
    "section": "M",
    "title": "A periodic warning threshold",
    "marks": 14,
    "ao": {
      "AO1": 1,
      "AO2": 4,
      "AO3": 9
    },
    "topics": [
      "periodic models",
      "R-sine form",
      "threshold intervals",
      "assumption checks"
    ],
    "stem": "A sensor is modelled over one \\(12\\)-hour cycle by \\(F(t)=10+3\\sin(\\pi t/6)+4\\cos(\\pi t/6)\\) for \\(0\\le t<12\\). The sensor triggers a warning when \\(F(t)\\ge14\\). The model has been fitted from a short set of readings.",
    "parts": [
      [
        "Express F in the form \\(10+5\\sin(\\pi t/6+\\alpha)\\) and specify the acute angle α exactly.",
        3
      ],
      [
        "Find the maximum and minimum predicted F and the first time at which its maximum occurs.",
        3
      ],
      [
        "Determine all times in \\(0\\le t<12\\) for which the warning threshold is met. Express the boundary times exactly in terms of α and also give the nonzero boundary to two decimal places.",
        4
      ],
      [
        "Explain two modelling assumptions that affect whether the warning prediction is trustworthy. Suggest one specific additional observation that would test the periodic nature of the model.",
        4
      ]
    ],
    "hint": "Match coefficients in 5sin(u+α), with sinα=4/5 and cosα=3/5. The warning condition is sin(u+α)≥4/5.",
    "steps": [
      "Expand \\(5\\sin(u+\\alpha)=5\\sin u\\cos\\alpha+5\\cos u\\sin\\alpha\\). [1] Match coefficients \\(5\\cos\\alpha=3\\) and \\(5\\sin\\alpha=4\\). [1] Thus \\(\\alpha=\\arctan(4/3)\\) in the first quadrant. [1]",
      "The amplitude is 5 so maximum is 15 and minimum is 5. [1] The first maximum satisfies \\(\\pi t/6+\\alpha=\\pi/2\\). [1] Hence \\(t_{\\max}=\\frac6\\pi(\\pi/2-\\alpha)\\approx1.23\\) h. [1]",
      "The threshold requires \\(5\\sin(\\pi t/6+\\alpha)\\ge4\\), i.e. \\(\\sin(\\pi t/6+\\alpha)\\ge\\sin\\alpha\\). [1] Over one cycle the valid phase interval starts at α and ends at π−α. [1] Therefore \\(0\\le t\\le\\frac6\\pi(\\pi-2\\alpha)\\); the next crossing is at t=12, excluded from the stated interval. [1] The nonzero boundary is approximately \\(2.46\\) hours. [1]",
      "For example, the fitted period may not remain exactly 12 hours, and amplitude/mean may change with temperature or operating conditions. Two distinct explained assumptions earn two marks. [2] Measure again at the same phase one cycle later (e.g. t=12 hours) and compare the observed reading with the predicted \\(F(12)=14\\); this gives a specific test of repeatability. [2]"
    ],
    "answer": "\\(\\alpha=\\arctan(4/3)\\); response max15 and min5; first maximum at ≈1.23 h; warning active for \\(0\\le t\\le\\frac6\\pi(\\pi-2\\alpha)\\approx2.46\\) h.",
    "misconception": "For a threshold, finding one inverse-sine value does not find the whole allowed interval or account for the restricted 12-hour cycle.",
    "reflection": "What would repeated observations of warning crossings reveal about the assumption of a constant period?"
  }
];
