export const week03ExpansionTimed = [
  {
    "id": "W03-T4",
    "section": "T",
    "title": "A double angle becomes an algebraic equation",
    "marks": 8,
    "ao": {
      "AO1": 2,
      "AO2": 5,
      "AO3": 1
    },
    "topics": [
      "double-angle identities",
      "quadratic in sine",
      "restricted angle solutions"
    ],
    "stem": "A trigonometric equation is \\(\\cos2\\theta=\\sin\\theta\\) on the interval \\(0\\le\\theta<2\\pi\\).",
    "parts": [
      [
        "Rearrange the equation as a quadratic in \\(\\sin\\theta\\).",
        2
      ],
      [
        "Find all exact values of θ in the specified interval.",
        4
      ],
      [
        "Explain how you know all solutions have been found and why \\(2\\pi\\) is not a solution to report.",
        2
      ]
    ],
    "hint": "Replace cos2θ by 1−2sin²θ and factor. Remember sinθ can equal −1 as well as +1/2.",
    "steps": [
      "\\(1-2\\sin^2\\theta=\\sin\\theta\\). [1] Rearrange to \\(2\\sin^2\\theta+\\sin\\theta-1=0\\). [1]",
      "Factor \\((2\\sin\\theta-1)(\\sin\\theta+1)=0\\). [1] Hence \\(\\sin\\theta=1/2\\) gives \\(\\theta=\\pi/6,5\\pi/6\\). [2] The other factor gives \\(\\sin\\theta=-1\\) and \\(\\theta=3\\pi/2\\). [1]",
      "Each factor has been solved over a full 2π period, producing all three solutions. [1] The upper bound 2π is excluded, and in any case its sine is zero. [1]"
    ],
    "answer": "\\(\\theta=\\pi/6,\\ 5\\pi/6,\\ 3\\pi/2\\).",
    "misconception": "Dropping the sinθ=−1 factor loses an exact solution; the interval is half-open, not closed at 2π.",
    "reflection": "Can you verify each solution in the original double-angle equation rather than only the factored one?"
  }
];
