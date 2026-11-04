export const week04ExpansionTimed = [
  {
    "id": "W04-T4",
    "section": "T",
    "title": "A product curve has two different stationary points",
    "marks": 8,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "product differentiation",
      "stationary classification",
      "second derivative",
      "tangent at a point"
    ],
    "stem": "Consider \\(y=x^2e^{-x}\\) for \\(x\\ge0\\).",
    "parts": [
      [
        "Differentiate and factorise \\(dy/dx\\).",
        2
      ],
      [
        "Find the two zeros of dy/dx on the permitted domain and classify the corresponding points, including the endpoint.",
        2
      ],
      [
        "Determine the x-coordinates of the points of inflection exactly.",
        2
      ],
      [
        "Find an equation of the tangent at \\(x=1\\).",
        2
      ]
    ],
    "hint": "First factor x e^(−x) from the derivative; then differentiate again and solve the resulting quadratic.",
    "steps": [
      "By the product rule \\(y'=2xe^{-x}-x^2e^{-x}=xe^{-x}(2-x)\\). [2]",
      "The derivative vanishes at \\(x=0\\) (an endpoint) and x=2; the points are \\((0,0),(2,4e^{-2})\\). [1] The derivative is positive on (0,2) and negative for x>2; (0,0) is a right-hand endpoint minimum and (2,4e^-2) a local maximum. [1]",
      "\\(y''=e^{-x}(x^2-4x+2)\\). [1] Hence inflections have \\(x=2\\pm\\sqrt2\\), both positive, and the concavity changes at each root. [1]",
      "At x=1, the point is \\((1,e^{-1})\\) and slope \\(e^{-1}\\). [1] So the tangent is \\(y-e^{-1}=e^{-1}(x-1)\\) or \\(y=xe^{-1}\\). [1]"
    ],
    "answer": "\\(y'=xe^{-x}(2-x)\\); endpoint minimum \\((0,0)\\) and interior stationary maximum \\((2,4e^{-2})\\); inflections at \\(x=2\\pm\\sqrt2\\); tangent \\(y=x/e\\).",
    "misconception": "At the endpoint x=0, 'minimum' is one-sided on the given domain, not a two-sided stationary classification.",
    "reflection": "How does the exponential factor affect the end behaviour compared with the polynomial x²?"
  }
];
