export const week03Retrieval = [
  {
    "id": "W03-R1",
    "section": "R",
    "title": "Exact values on the unit circle",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "exact values",
      "unit circle",
      "surds"
    ],
    "stem": "Find both exact trigonometric values without using a calculator.",
    "parts": [
      [
        "Evaluate \\(\\sin\\frac{5\\pi}{6}\\).",
        1
      ],
      [
        "Evaluate \\(\\tan\\frac{11\\pi}{6}\\), rationalising any surd denominator.",
        1
      ]
    ],
    "steps": [
      "The reference angle for \\(\\frac{5\\pi}{6}\\) is \\(\\frac{\\pi}{6}\\). Sine is positive in quadrant II, so \\(\\sin\\frac{5\\pi}{6}=\\frac12\\). [1]",
      "The second angle is in quadrant IV, so \\(\\tan\\frac{11\\pi}{6}=-\\frac1{\\sqrt3}=-\\frac{\\sqrt3}{3}\\) after rationalising. [1]"
    ],
    "answer": "\\(\\frac12\\) and \\(-\\frac{\\sqrt3}{3}\\).",
    "hint": "Find the reference angle and decide the sign from the quadrant.",
    "misconception": "An obtuse or reflex angle does not change the size of its reference angle; only the sign may change.",
    "reflection": "How do the coordinates on the unit circle determine the signs?"
  },
  {
    "id": "W03-R2",
    "section": "R",
    "title": "Radians and arc length",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "radians",
      "arc length",
      "circles"
    ],
    "stem": "A circular arc has radius \\(6\\) cm and central angle \\(150^\\circ\\).",
    "parts": [
      [
        "Convert the angle to radians.",
        1
      ],
      [
        "Calculate the exact length of the arc.",
        1
      ]
    ],
    "steps": [
      "Using \\(\\pi\\text{ radians}=180^\\circ\\), \\(150^\\circ=\\frac{150\\pi}{180}=\\frac{5\\pi}{6}\\). [1]",
      "Arc length is \\(s=r\\theta=6\\left(\\frac{5\\pi}{6}\\right)=5\\pi\\) cm. [1]"
    ],
    "answer": "\\(\\frac{5\\pi}{6}\\) rad; arc length \\(5\\pi\\) cm.",
    "hint": "Convert to radians before using s = rθ.",
    "misconception": "The arc-length formula s = rθ assumes the angle is in radians, not degrees.",
    "reflection": "How does this result compare with the circumference of the whole circle?"
  },
  {
    "id": "W03-R3",
    "section": "R",
    "title": "An exact side from the cosine rule",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "cosine rule",
      "surd lengths"
    ],
    "stem": "Two sides of a triangle are \\(5\\) cm and \\(7\\) cm, and their included angle is \\(60^\\circ\\).",
    "parts": [
      [
        "Find the exact length of the side opposite this angle.",
        2
      ]
    ],
    "steps": [
      "By the cosine rule, \\(c^2=5^2+7^2-2(5)(7)\\cos60^\\circ\\). [1]",
      "Thus \\(c^2=25+49-35=39\\), so \\(c=\\sqrt{39}\\) cm. [1]"
    ],
    "answer": "\\(\\sqrt{39}\\) cm.",
    "hint": "Use the cosine rule with the angle included between the two known sides.",
    "misconception": "Do not subtract 2ab without multiplying by cos(C).",
    "reflection": "Why is the answer less than 12 cm but greater than 2 cm?"
  },
  {
    "id": "W03-R4",
    "section": "R",
    "title": "A transformed cosine graph",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "trig graphs",
      "transformations"
    ],
    "stem": "Consider \\(y=3\\cos(2x-\\pi)\\).",
    "parts": [
      [
        "State its amplitude and period.",
        2
      ]
    ],
    "steps": [
      "The coefficient outside cosine gives amplitude \\(3\\). [1]",
      "The argument has coefficient \\(2\\) on \\(x\\), so the period is \\(\\frac{2\\pi}{2}=\\pi\\). [1]"
    ],
    "answer": "Amplitude \\(3\\); period \\(\\pi\\).",
    "hint": "Remember that the amplitude comes from the vertical factor, whereas the period comes from the coefficient of x.",
    "misconception": "A horizontal shift does not change a graph's amplitude or period.",
    "reflection": "How far has the basic cosine graph shifted horizontally?"
  },
  {
    "id": "W03-R5",
    "section": "R",
    "title": "Identity with a missing point",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "identities",
      "domain restrictions"
    ],
    "stem": "The expression \\(\\dfrac{1-\\sin^2x}{\\cos x}\\) is considered for \\(0\\le x<2\\pi\\).",
    "parts": [
      [
        "Simplify the expression and state every value excluded from its original domain.",
        2
      ]
    ],
    "steps": [
      "Use \\(1-\\sin^2x=\\cos^2x\\). For \\(\\cos x\\ne0\\), the expression simplifies to \\(\\cos x\\). [1]",
      "The original denominator vanishes at \\(x=\\frac\\pi2,\\frac{3\\pi}2\\), so both are excluded even after simplifying. [1]"
    ],
    "answer": "\\(\\cos x\\) for \\(x\\ne\\frac\\pi2,\\frac{3\\pi}2\\) in the interval.",
    "hint": "Start with sin²x + cos²x = 1; keep any original denominator restrictions.",
    "misconception": "Cancelling cos(x) does not make an originally undefined value permissible.",
    "reflection": "Which values would a graph of the simplified expression accidentally include?"
  },
  {
    "id": "W03-R6",
    "section": "R",
    "title": "An exact compound angle",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "compound angles",
      "exact values"
    ],
    "stem": "Find an exact trigonometric value.",
    "parts": [
      [
        "Evaluate \\(\\sin75^\\circ\\) exactly.",
        2
      ]
    ],
    "steps": [
      "Write \\(75^\\circ=45^\\circ+30^\\circ\\) and apply \\(\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B\\). [1]",
      "\\(\\sin75^\\circ=\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}+\\frac{\\sqrt2}{2}\\frac12=\\frac{\\sqrt6+\\sqrt2}{4}\\). [1]"
    ],
    "answer": "\\(\\frac{\\sqrt6+\\sqrt2}{4}\\)",
    "hint": "Use 45° + 30° and the sine addition formula.",
    "misconception": "sin(A + B) is not sin(A) + sin(B).",
    "reflection": "Why must the exact answer lie between sin(60°) and 1?"
  },
  {
    "id": "W03-R7",
    "section": "R",
    "title": "Double angle from a known sine",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "double angles",
      "identities"
    ],
    "stem": "Angle \\(x\\) is acute and \\(\\sin x=\\frac35\\).",
    "parts": [
      [
        "Find the exact value of \\(\\cos2x\\).",
        2
      ]
    ],
    "steps": [
      "Use the double-angle identity \\(\\cos2x=1-2\\sin^2x\\). [1]",
      "\\(\\cos2x=1-2\\left(\\frac35\\right)^2=1-\\frac{18}{25}=\\frac7{25}\\). [1]"
    ],
    "answer": "\\(\\frac7{25}\\)",
    "hint": "Choose the form of cos(2x) that only requires sin(x).",
    "misconception": "Do not replace sin²(x) by sin(2x); they are different expressions.",
    "reflection": "Is cos(2x) positive here, and does that agree with the size of x?"
  },
  {
    "id": "W03-R8",
    "section": "R",
    "title": "A reciprocal trigonometric equation",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "reciprocal functions",
      "trig equations"
    ],
    "stem": "Solve the following equation for \\(0\\le x<2\\pi\\).",
    "parts": [
      [
        "\\(\\sec x=2\\).",
        2
      ]
    ],
    "steps": [
      "By definition \\(\\sec x=\\frac1{\\cos x}\\), so \\(\\cos x=\\frac12\\). [1]",
      "Cosine is positive in quadrants I and IV, giving \\(x=\\frac\\pi3,\\frac{5\\pi}3\\). [1]"
    ],
    "answer": "\\(x=\\frac\\pi3,\\ \\frac{5\\pi}3\\)",
    "hint": "Replace sec(x) with 1/cos(x), then use the unit circle.",
    "misconception": "sec(x) = 2 does not mean sin(x) = 1/2.",
    "reflection": "How do you know neither solution makes sec(x) undefined?"
  },
  {
    "id": "W03-R9",
    "section": "R",
    "title": "A shifted sine in exact form",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "R-sine form",
      "surds"
    ],
    "stem": "Write \\(\\sin x+\\cos x\\) as a single shifted sine.",
    "parts": [
      [
        "Express it in the form \\(R\\sin(x+\\alpha)\\) with \\(R>0\\) and \\(0<\\alpha<\\frac\\pi2\\).",
        2
      ]
    ],
    "steps": [
      "Comparing with \\(R\\sin(x+\\alpha)=R\\cos\\alpha\\sin x+R\\sin\\alpha\\cos x\\), we need \\(R\\cos\\alpha=1=R\\sin\\alpha\\). [1]",
      "Thus \\(R=\\sqrt2\\) and \\(\\alpha=\\frac\\pi4\\), so the expression is \\(\\sqrt2\\sin(x+\\frac\\pi4)\\). [1]"
    ],
    "answer": "\\(\\sqrt2\\sin(x+\\frac\\pi4)\\)",
    "hint": "Expand Rsin(x + α) and equate the sine and cosine coefficients.",
    "misconception": "The coefficients determine both amplitude R and phase α; they cannot both be 1 here.",
    "reflection": "How can you check the result at x = 0?"
  },
  {
    "id": "W03-R10",
    "section": "R",
    "title": "Small angles in radians",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "small angles",
      "limits"
    ],
    "stem": "For small positive \\(x\\) measured in radians, use a standard approximation.",
    "parts": [
      [
        "Estimate \\(\\dfrac{\\sin(3x)}{2x}\\) when \\(x\\) is close to \\(0\\), and give its limiting value as \\(x\\to0^+\\).",
        2
      ]
    ],
    "steps": [
      "When the angle is small in radians, \\(\\sin(3x)\\approx3x\\). [1]",
      "Therefore \\(\\frac{\\sin(3x)}{2x}\\approx\\frac{3x}{2x}=\\frac32\\). The limiting value is \\(\\frac32\\). [1]"
    ],
    "answer": "\\(\\frac32\\)",
    "hint": "Use sin(u) ≈ u when u is close to zero in radians.",
    "misconception": "The approximation is for the whole argument 3x, not x on its own.",
    "reflection": "Why does the result fail if you read x as a number of degrees?"
  }
];
