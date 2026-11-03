export const week03Timed = [
  {
    "id": "W03-T1",
    "section": "T",
    "title": "The chord, arc and circular segment",
    "marks": 8,
    "minutes": 12,
    "ao": {
      "AO1": 4,
      "AO2": 4
    },
    "topics": [
      "radians",
      "sector area",
      "sine rule",
      "geometry"
    ],
    "stem": "A circle of radius \\(6\\) cm has centre \\(O\\). Points \\(A\\) and \\(B\\) lie on the circle with minor central angle \\(\\angle AOB=\\frac{2\\pi}{3}\\) radians. The chord \\(AB\\) bounds a minor circular segment.",
    "parts": [
      [
        "Find the exact length of the chord \\(AB\\).",
        2
      ],
      [
        "Find the exact minor arc length \\(AB\\) and the area of the corresponding sector \\(AOB\\).",
        3
      ],
      [
        "Find the exact area of the minor circular segment between the chord and arc.",
        3
      ]
    ],
    "hint": "Bisect the isosceles triangle AOB for the chord, use \\(s=r\\theta\\) and \\(A_{\\text{sector}}=\\frac12r^2\\theta\\) in radians, then subtract the area of triangle AOB.",
    "steps": [
      "Bisecting the isosceles triangle gives \\(AB=2r\\sin(\\theta/2)=12\\sin(\\pi/3)=6\\sqrt3\\) cm. [2]",
      "Arc length \\(=r\\theta=6(2\\pi/3)=4\\pi\\) cm. Sector area \\(=\\frac12r^2\\theta=\\frac12(36)(2\\pi/3)=12\\pi\\) cm². [3]",
      "Triangle area \\(=\\frac12(6)(6)\\sin(2\\pi/3)=18\\cdot\\frac{\\sqrt3}{2}=9\\sqrt3\\) cm². Segment area \\(=12\\pi-9\\sqrt3\\) cm². [3]"
    ],
    "answer": "Chord \\(6\\sqrt3\\) cm, arc \\(4\\pi\\) cm, sector \\(12\\pi\\) cm², segment \\(12\\pi-9\\sqrt3\\) cm².",
    "misconception": "A minor segment is the sector minus the triangle; do not subtract the chord length from an area.",
    "reflection": "How would the segment formula change if the central angle exceeded π?"
  },
  {
    "id": "W03-T2",
    "section": "T",
    "title": "A multiple-angle inequality with a missing point",
    "marks": 12,
    "minutes": 17,
    "ao": {
      "AO1": 3,
      "AO2": 9
    },
    "topics": [
      "double angles",
      "trigonometric equations",
      "inequalities",
      "maxima"
    ],
    "stem": "For \\(0\\le x<2\\pi\\), define \\(F(x)=2\\cos2x+3\\sin x\\). Let \\(\\phi=\\sin^{-1}(\\frac14)\\) with \\(0<\\phi<\\frac\\pi2\\).",
    "parts": [
      [
        "Rewrite \\(F(x)\\) as a quadratic expression in \\(u=\\sin x\\).",
        2
      ],
      [
        "Solve \\(F(x)=1\\) exactly over the stated interval, giving all values of \\(x\\) in terms of \\(\\phi\\) where needed.",
        4
      ],
      [
        "Solve \\(F(x)>1\\) over the stated interval. State the intervals carefully and exclude every equality point.",
        4
      ],
      [
        "Find the largest possible value of \\(F(x)\\) over the stated interval, with a reason.",
        2
      ]
    ],
    "hint": "Use \\(\\cos2x=1-2\\sin^2x\\). Factorise \\(F(x)-1\\) in the variable \\(u\\); for a maximum, complete the square in u and check \\(-1\\le u\\le1\\).",
    "steps": [
      "Replacing \\(\\cos2x\\) gives \\(F(x)=2(1-2\\sin^2x)+3\\sin x=2-4u^2+3u\\). [2]",
      "Solve \\(2-4u^2+3u=1\\), or \\(4u^2-3u-1=(4u+1)(u-1)=0\\). Thus \\(\\sin x=1\\) or \\(\\sin x=-\\frac14\\). The first gives \\(x=\\frac\\pi2\\); the second gives \\(x=\\pi+\\phi\\) and \\(x=2\\pi-\\phi\\). All three lie in the interval. [4]",
      "Since \\(F(x)-1=(1-u)(4u+1)\\), strict positivity requires \\(-\\frac14<u<1\\) (not equality at either end). Thus \\(x\\in[0,\\frac\\pi2)\\cup(\\frac\\pi2,\\pi+\\phi)\\cup(2\\pi-\\phi,2\\pi)\\). In particular \\(x=\\frac\\pi2\\) is excluded despite the neighbouring positive intervals. [4]",
      "Complete the square: \\(F(x)=2-4u^2+3u=\\frac{41}{16}-4(u-\\frac38)^2\\). Hence \\(F\\le\\frac{41}{16}\\); equality occurs when \\(u=\\frac38\\), which is attainable for a sine value. Maximum \\(\\frac{41}{16}\\). [2]"
    ],
    "answer": "Zeros of \\(F-1\\): \\(x=\\frac\\pi2,\\pi+\\phi,2\\pi-\\phi\\). Strict inequality \\(x\\in[0,\\frac\\pi2)\\cup(\\frac\\pi2,\\pi+\\phi)\\cup(2\\pi-\\phi,2\\pi)\\). Maximum \\(\\frac{41}{16}\\).",
    "misconception": "A strict inequality must exclude every equality point, including a point within the wider positive sine interval where sin(x) = 1.",
    "reflection": "Why is the maximum of a quadratic in u a valid maximum of the original trig expression only after checking the possible values of u?"
  },
  {
    "id": "W03-T3",
    "section": "T",
    "title": "Two tests with a shared machine condition",
    "marks": 12,
    "minutes": 16,
    "ao": {
      "AO1": 3,
      "AO2": 3,
      "AO3": 6
    },
    "topics": [
      "probability trees",
      "independence",
      "mixture models",
      "limitations"
    ],
    "stem": "A production machine works correctly with probability \\(0.9\\) and is faulty with probability \\(0.1\\). Two products are tested in succession. If the machine works correctly, each product passes with probability \\(0.8\\); if it is faulty, each passes with probability \\(0.3\\). The two test results are independent when the machine's condition is fixed, but the same condition applies to both products.",
    "parts": [
      [
        "Find the probability that both products pass if the machine is working correctly.",
        2
      ],
      [
        "Find the overall probability that both products pass.",
        3
      ],
      [
        "Find the overall probability that exactly one product passes.",
        3
      ],
      [
        "Find the probability that at least one product passes.",
        2
      ],
      [
        "Show that the two test results are not independent when the machine condition is unknown.",
        2
      ]
    ],
    "hint": "Make the first two branches 'working' and 'faulty'. For each branch use the pair of test probabilities corresponding to that condition, then add paths with the same outcome.",
    "steps": [
      "For a working machine the two passes are independent, so \\(P(\\text{both pass, given working})=0.8^2=0.64\\). [2]",
      "Separate the machine conditions: \\(P(\\text{both pass})=0.9(0.8^2)+0.1(0.3^2)=0.576+0.009=0.585\\). [3]",
      "Exactly one passes for a working machine with probability \\(2(0.8)(0.2)=0.32\\); for a faulty machine it is \\(2(0.3)(0.7)=0.42\\). So overall \\(0.9(0.32)+0.1(0.42)=0.288+0.042=0.330\\). [3]",
      "Neither passes with probability \\(0.9(0.2^2)+0.1(0.7^2)=0.036+0.049=0.085\\). Hence at least one passes with probability \\(1-0.085=0.915\\). [2]",
      "The marginal probability that any one product passes is \\(0.9(0.8)+0.1(0.3)=0.75\\). If the two results were independent overall, their joint pass probability would be \\(0.75^2=0.5625\\), but it is \\(0.585\\). They are not independent overall because they share the machine condition. [2]"
    ],
    "answer": "Both pass \\(0.585\\), exactly one passes \\(0.330\\), at least one passes \\(0.915\\). The test results are not independent overall.",
    "misconception": "Results can be independent within each machine condition but dependent when the condition itself is uncertain and shared.",
    "reflection": "What would change if each product were made on a separately selected machine with independently assigned conditions?"
  }
];
