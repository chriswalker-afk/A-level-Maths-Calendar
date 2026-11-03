export const week01ExpansionTimed = [
  {
    "id": "W01-T4",
    "section": "T",
    "title": "A rational sign chart under time pressure",
    "marks": 8,
    "ao": {
      "AO1": 1,
      "AO2": 6,
      "AO3": 1
    },
    "topics": [
      "algebraic fractions",
      "inequality signs",
      "excluded values"
    ],
    "stem": "A function is defined by \\(F(x)=\\frac1{x-2}+\\frac1{x+2}\\) for real \\(x\\ne-2,2\\). An answer script claims \\(F(x)\\ge0\\) for all \\(x\\ge0\\).",
    "parts": [
      [
        "Write F as one fraction and simplify its numerator.",
        2
      ],
      [
        "Solve \\(F(x)\\ge0\\) completely, including every endpoint and excluded value.",
        4
      ],
      [
        "Identify a specific counterexample to the script's claim and explain what was missed.",
        2
      ]
    ],
    "hint": "Combine the two fractions, then use the zeros of numerator and denominator to test interval signs.",
    "steps": [
      "The denominator is \\((x-2)(x+2)=x^2-4\\). [1] The numerator is \\((x+2)+(x-2)=2x\\), hence \\(F=2x/(x^2-4)\\). [1]",
      "Critical values are \\(-2,0,2\\). [1] Signs of \\(2x/(x^2-4)\\) are negative on \\((-\\infty,-2)\\) and \\((0,2)\\), positive on \\((-2,0)\\) and \\((2,\\infty)\\). [2] Include zero at x=0 but exclude poles, giving \\((-2,0]\\cup(2,\\infty)\\). [1]",
      "For instance \\(F(1)=2/(1-4)=-2/3<0\\), despite x≥0. [1] The script ignored the negative denominator on \\(0<x<2\\). [1]"
    ],
    "answer": "\\(F(x)=2x/(x^2-4)\\); \\(-2<x\\le0\\) or \\(x>2\\).",
    "misconception": "Multiplying an inequality by x²−4 without checking its sign may reverse the inequality on an interval.",
    "reflection": "What information does the sign chart reveal that a single line of algebra could conceal?"
  }
];
