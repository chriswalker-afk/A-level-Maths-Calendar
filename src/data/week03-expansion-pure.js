export const week03ExpansionPure = [
  {
    "id": "W03-P4",
    "section": "P",
    "title": "A reciprocal trig identity pins down the angle",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "secant and tangent identities",
      "inverse trigonometric values",
      "double-angle formulae"
    ],
    "stem": "An angle \\(\\theta\\) is in the interval \\(0<\\theta<\\pi/2\\) and satisfies \\(\\sec\\theta-\\tan\\theta=\\frac13\\).",
    "parts": [
      [
        "Prove that \\((\\sec\\theta-\\tan\\theta)(\\sec\\theta+\\tan\\theta)=1\\).",
        2
      ],
      [
        "Hence find the exact values of \\(\\sec\\theta\\) and \\(\\tan\\theta\\).",
        3
      ],
      [
        "Deduce exact values of \\(\\sin\\theta,\\cos\\theta,\\sin2\\theta,\\cos2\\theta\\).",
        3
      ],
      [
        "State the principal value of \\(\\theta\\) using an inverse trigonometric function and explain why it is permitted.",
        2
      ]
    ],
    "hint": "Use sec²θ−tan²θ=1, so the second factor is known. Then add and subtract the two equations.",
    "steps": [
      "From \\(\\sec^2\\theta-\\tan^2\\theta=1\\), factor the difference of squares. [1] Therefore \\((\\sec\\theta-\\tan\\theta)(\\sec\\theta+\\tan\\theta)=1\\). [1]",
      "Since the first factor equals 1/3, the second is \\(3\\). [1] Add \\(\\sec\\theta+\\tan\\theta=3\\) and \\(\\sec\\theta-\\tan\\theta=1/3\\) to find \\(\\sec\\theta=5/3\\). [1] Subtract to get \\(\\tan\\theta=4/3\\). [1]",
      "The acute-angle signs give \\(\\cos\\theta=3/5,\\ \\sin\\theta=4/5\\). [1] Then \\(\\sin2\\theta=2(4/5)(3/5)=24/25\\). [1] Also \\(\\cos2\\theta=(3/5)^2-(4/5)^2=-7/25\\). [1]",
      "The principal acute angle is \\(\\theta=\\arctan(4/3)\\). [1] Its tangent is positive and it lies in \\((0,\\pi/2)\\) as required. [1]"
    ],
    "answer": "\\(\\sec\\theta=5/3,\\ \\tan\\theta=4/3,\\ \\sin\\theta=4/5,\\ \\cos\\theta=3/5\\), \\(\\sin2\\theta=24/25,\\ \\cos2\\theta=-7/25,\\ \\theta=\\arctan(4/3)\\).",
    "misconception": "The identity is a difference of squares, not the sum sec²θ+tan²θ. The quadrant restriction determines the signs.",
    "reflection": "Can you reconstruct the 3–4–5 triangle represented by the values without starting from the original equation?"
  },
  {
    "id": "W03-P5",
    "section": "P",
    "title": "A trigonometric equation hides a line–circle intersection",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 6,
      "AO3": 2
    },
    "topics": [
      "R-form trigonometry",
      "exact equations",
      "unit circle geometry",
      "maxima"
    ],
    "stem": "For \\(0\\le\\theta<2\\pi\\), consider the response \\(F(\\theta)=3\\cos\\theta+4\\sin\\theta\\). A design threshold occurs when \\(F(\\theta)=4\\).",
    "parts": [
      [
        "Write F in the form \\(5\\sin(\\theta+\\alpha)\\) and state the acute angle α exactly.",
        3
      ],
      [
        "Solve \\(F(\\theta)=4\\) exactly on the specified interval by considering the point \\((\\cos\\theta,\\sin\\theta)\\) on a unit circle.",
        4
      ],
      [
        "Find the maximum possible value of F and the corresponding exact point on the unit circle. Explain why it is the global maximum.",
        3
      ]
    ],
    "hint": "Use x=cosθ and y=sinθ: solve the line 3x+4y=4 with x²+y²=1. For the maximum, use the R-form's amplitude.",
    "steps": [
      "\\(3\\cos\\theta+4\\sin\\theta=5\\sin(\\theta+\\alpha)\\) requires \\(5\\sin\\alpha=3,\\ 5\\cos\\alpha=4\\). [2] Thus \\(\\alpha=\\arctan(3/4)\\) in the first quadrant. [1]",
      "Set \\(x=\\cos\\theta,y=\\sin\\theta\\), so \\(x^2+y^2=1\\) and \\(3x+4y=4\\). [1] Substitute \\(y=(4-3x)/4\\): \\(16x^2+(4-3x)^2=16\\), simplifying to \\(25x^2-24x=0\\). [1] Thus \\((x,y)=(0,1)\\) or \\((24/25,7/25)\\). [1] The solutions are \\(\\theta=\\pi/2\\) and \\(\\theta=\\arctan(7/24)\\) (both in the first quadrant). [1]",
      "Since \\(|\\sin(\\theta+\\alpha)|\\le1\\), \\(F\\le5\\). [1] Equality is achieved at \\(\\sin\\theta=4/5,\\ \\cos\\theta=3/5\\) (a unit vector in the direction (3,4)), giving the point \\((3/5,4/5)\\). [2]"
    ],
    "answer": "\\(F=5\\sin(\\theta+\\arctan(3/4))\\); \\(\\theta=\\arctan(7/24),\\ \\pi/2\\); global maximum \\(5\\) at \\((\\cos\\theta,\\sin\\theta)=(3/5,4/5)\\).",
    "misconception": "The R-form is not merely a different notation: it proves the global maximum; a line–circle solution must satisfy both equations.",
    "reflection": "What geometric property of a line is represented by its maximum dot product with a unit vector?"
  },
  {
    "id": "W03-P6",
    "section": "P",
    "title": "Arc length, chord length and the error in a map",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 4,
      "AO3": 4
    },
    "topics": [
      "radian geometry",
      "sector area",
      "small-angle approximation",
      "model error"
    ],
    "stem": "Two points on a circular path of radius \\(50\\ \\mathrm m\\) subtend an angle \\(\\theta=0.4\\) radians at the centre. A surveyor replaces the curved route by the straight chord and claims the difference is negligible.",
    "parts": [
      [
        "Derive formulas, in terms of θ, for the arc length and the chord length.",
        3
      ],
      [
        "Calculate both lengths for θ=0.4, and give the percentage by which the chord underestimates the arc.",
        3
      ],
      [
        "Find the exact expression for the area enclosed between the minor arc and its chord.",
        2
      ],
      [
        "Explain using a stated small-angle approximation why arc and chord lengths are close when θ is small, and assess the surveyor's claim for θ=0.4.",
        2
      ]
    ],
    "hint": "Bisect the isosceles triangle with the two radii. The chord is 2r sin(θ/2), and the segment is sector minus triangle.",
    "steps": [
      "Using radians, \\(s=r\\theta=50\\theta\\). [1] The half-chord is opposite half the central angle, so \\(\\frac c2=50\\sin(\\theta/2)\\). [1] Thus \\(c=100\\sin(\\theta/2)\\). [1]",
      "At θ=0.4, \\(s=20\\ \\mathrm m\\). [1] The chord is \\(c=100\\sin0.2\\approx19.8669331\\ \\mathrm m\\). [1] Underestimate \\(100(20-c)/20\\approx0.6653\\%\\). [1]",
      "Sector area is \\(\\frac12r^2\\theta=1250\\theta\\) and triangle area is \\(\\frac12r^2\\sin\\theta=1250\\sin\\theta\\). [1] Therefore segment area is \\(1250(\\theta-\\sin\\theta)\\) square metres (approximately 13.227). [1]",
      "For small θ measured in radians, \\(\\sin(\\theta/2)\\approx\\theta/2\\), so \\(c\\approx100(\\theta/2)=50\\theta=s\\). [1] The approximation is not exact: here the discrepancy is around 0.665%; whether that is negligible depends on the required survey tolerance. [1]"
    ],
    "answer": "\\(s=50\\theta,\\ c=100\\sin(\\theta/2)\\); arc20 m, chord≈19.86693 m, underestimate≈0.6653%; segment \\(1250(\\theta-\\sin\\theta)\\) square metres.",
    "misconception": "Small-angle approximations require radians; 'close' does not automatically mean within a specified accuracy tolerance.",
    "reflection": "Would a survey with maximum allowed error 0.5% accept the straight-line substitution?"
  },
  {
    "id": "W03-P7",
    "section": "P",
    "title": "Two complementary answers to one reciprocal equation",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "cotangent identities",
      "inequality proof",
      "quadratic in tan",
      "principal inverse"
    ],
    "stem": "Let \\(0<\\theta<\\pi/2\\) and define \\(H(\\theta)=\\tan\\theta+\\cot\\theta\\).",
    "parts": [
      [
        "Prove without calculus that \\(H(\\theta)\\ge2\\) and state exactly when equality occurs.",
        3
      ],
      [
        "Solve \\(H(\\theta)=\\frac52\\) on the stated interval, giving exact inverse-trigonometric values.",
        4
      ],
      [
        "Prove that the two solutions are complementary angles and explain the symmetry of H.",
        3
      ]
    ],
    "hint": "Write t=tanθ>0 and use (t−1)²≥0. Solve t+1/t=5/2 before returning to θ.",
    "steps": [
      "Put \\(t=\\tan\\theta>0\\), so \\(H=t+1/t\\). [1] Because \\((t-1)^2\\ge0\\), \\(t^2+1\\ge2t\\), and dividing by t>0 yields \\(t+1/t\\ge2\\). [1] Equality holds at \\(t=1\\), that is \\(\\theta=\\pi/4\\). [1]",
      "\\(t+1/t=5/2\\) gives \\(2t^2-5t+2=0\\). [1] Factor \\((2t-1)(t-2)=0\\). [1] Thus \\(t=1/2\\) or 2. [1] Since both are positive, \\(\\theta=\\arctan(1/2)\\) or \\(\\arctan2\\). [1]",
      "For acute θ, \\(\\tan(\\pi/2-\\theta)=\\cot\\theta=1/\\tan\\theta\\). [1] Thus if θ has tangent2 its complement has tangent1/2; the two values sum to π/2. [1] Swapping tan and cot leaves \\(H\\) unchanged, explaining the symmetry. [1]"
    ],
    "answer": "\\(H\\ge2\\) at all acute angles, equality when θ=π/4; solutions \\(\\arctan(1/2),\\arctan2\\) to H=5/2; they are complementary.",
    "misconception": "The quadratic has two positive roots, both valid: cotangent is the reciprocal of tangent, not its negative.",
    "reflection": "How does symmetry about θ=π/4 relate to the number of solutions above the minimum?"
  }
];
