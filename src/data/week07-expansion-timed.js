export const week07ExpansionTimed = [
  {
    "id": "W07-T4",
    "section": "T",
    "title": "A tangent and an exact exponential area",
    "marks": 8,
    "ao": {
      "AO1": 2,
      "AO2": 4,
      "AO3": 2
    },
    "topics": [
      "product and chain rules",
      "stationary points",
      "integration by parts",
      "tangents"
    ],
    "stem": "For \\(x\\ge0\\), let \\(f(x)=(2x+1)e^{-x}\\). A designer wants the greatest response, and the exact area under the response curve during the first unit interval.",
    "parts": [
      [
        "Differentiate \\(f\\) and factorise the derivative.",
        2
      ],
      [
        "Find and classify the stationary point, giving its exact height.",
        2
      ],
      [
        "Evaluate \\(\\int_0^1(2x+1)e^{-x}\\,dx\\) exactly.",
        2
      ],
      [
        "Find the tangent to the curve at \\(x=0\\).",
        2
      ]
    ],
    "hint": "Use the product rule once, then integrate 2x e^(−x) by parts.",
    "steps": [
      "The product rule gives \\(f'(x)=2e^{-x}-(2x+1)e^{-x}\\). [1] Therefore \\(f'(x)=(1-2x)e^{-x}\\). [1]",
      "The derivative vanishes at \\(x=1/2\\). [1] Its sign switches from positive to negative, giving a maximum \\(f(1/2)=2e^{-1/2}\\). [1]",
      "By integration by parts, an antiderivative is \\(-(2x+3)e^{-x}\\). [1] Substituting the limits gives \\(3-5/e\\). [1]",
      "Here \\(f(0)=1\\) and \\(f'(0)=1\\). [1] Therefore the tangent is \\(y=x+1\\). [1]"
    ],
    "answer": "Maximum \\(2e^{-1/2}\\) at \\(x=1/2\\); integral \\(3-5/e\\); tangent \\(y=x+1\\).",
    "misconception": "An exponential factor is always positive, so the sign of f' comes entirely from 1−2x.",
    "reflection": "Which parts of this eight-mark problem are method recognition, and which require explanation?"
  }
];
