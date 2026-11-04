export const week08ExpansionTimed = [
  {
    "id": "W08-T4",
    "section": "T",
    "title": "A motion integral with a predictable numerical bias",
    "marks": 8,
    "ao": {
      "AO1": 2,
      "AO2": 4,
      "AO3": 2
    },
    "topics": [
      "variable speed",
      "definite integration",
      "trapezium rule",
      "convexity"
    ],
    "stem": "For \\(0\\le t\\le2\\), a particle's velocity in metres per second is \\(v(t)=e^{-t}+t\\). The velocity is always positive on this interval.",
    "parts": [
      [
        "Explain why the total distance equals \\(\\int_0^2v(t)\\,dt\\) and evaluate the integral exactly.",
        2
      ],
      [
        "Use two equal-width trapezia to approximate the distance.",
        2
      ],
      [
        "Calculate the signed error in the numerical approximation.",
        2
      ],
      [
        "Justify the sign of the error without relying on the decimal values.",
        2
      ]
    ],
    "hint": "Check the velocity sign, then use a definite integral and the trapezium rule. The second derivative predicts the direction of error.",
    "steps": [
      "As \\(e^{-t}+t>0\\) for \\(t\\ge0\\), there is no direction reversal and distance equals displacement. [1] Integration gives \\(I=\\int_0^2(e^{-t}+t)\\,dt=3-e^{-2}\\) metres. [1]",
      "The ordinates are \\(v(0)=1,\\ v(1)=1+e^{-1},\\ v(2)=2+e^{-2}\\), with \\(h=1\\). [1] Thus \\(T_2=\\frac12[1+2(1+e^{-1})+(2+e^{-2})]\\approx2.935547\\) m. [1]",
      "Subtract the exact distance to get \\(T_2-I=\\frac12[5+2e^{-1}+e^{-2}]-(3-e^{-2})\\). [1] This is \\(\\approx+0.070882\\) metres. [1]",
      "Since \\(v''(t)=e^{-t}>0\\), the velocity graph is convex. [1] The secant line above a convex graph makes each trapezium an overestimate, so \\(T_2-I>0\\). [1]"
    ],
    "answer": "\\(I=3-e^{-2}\\approx2.864665\\) m, \\(T_2\\approx2.935547\\) m; overestimate about \\(0.070882\\) m.",
    "misconception": "A positive velocity guarantees distance equals the signed area here, but it does not guarantee a numerical area estimate is exact.",
    "reflection": "What additional sample count would you use if you needed a smaller numerical error?"
  }
];
