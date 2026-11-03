export const week10PureA = [
  {
    "id": "W10-P1",
    "section": "P",
    "paper": "pure",
    "title": "Consecutive integers and a universal claim",
    "marks": 6,
    "minutes": 7,
    "ao": {
      "AO1": 2,
      "AO2": 4
    },
    "topics": [
      "deductive proof",
      "divisibility",
      "counterexamples"
    ],
    "stem": "A student makes two claims about integers. Claim A is that the product of any three consecutive integers is divisible by \\(6\\). Claim B is that \\(n^2+n\\) is divisible by \\(4\\) for every integer \\(n\\).",
    "parts": [
      [
        "Prove Claim A for every integer \\(n\\).",
        3
      ],
      [
        "Give a counterexample disproving Claim B.",
        1
      ],
      [
        "Prove that \\(n^2+n\\) is even for every integer \\(n\\).",
        2
      ]
    ],
    "hint": "Think separately about multiples of 2 and 3 in three consecutive integers; to disprove a universal statement, one example is sufficient.",
    "steps": [
      "Among \\(n,n+1,n+2\\), at least one is even, so their product is divisible by \\(2\\). [1] Among any three consecutive integers, exactly one is a multiple of \\(3\\). [1] Because \\(2\\) and \\(3\\) are coprime, the product \\(n(n+1)(n+2)\\) is divisible by \\(6\\) for every integer \\(n\\). [1]",
      "At \\(n=1\\), \\(n^2+n=2\\) is not divisible by \\(4\\), disproving Claim B. [1]",
      "Factor \\(n^2+n=n(n+1)\\). [1] The two factors are consecutive integers, so one is even. Their product is therefore even for all integer \\(n\\). [1]"
    ],
    "answer": "Claim A is true. Claim B is false (for example, \\(n=1\\)). The expression \\(n(n+1)\\) is always even.",
    "misconception": "Checking several examples does not prove a universal assertion; a proof needs a reason that applies to every integer.",
    "reflection": "Which key difference makes one counterexample enough to disprove Claim B but not enough to prove Claim A?"
  },
  {
    "id": "W10-P2",
    "section": "P",
    "paper": "pure",
    "title": "A cubic and a set of allowed values",
    "marks": 7,
    "minutes": 8,
    "ao": {
      "AO1": 3,
      "AO2": 4
    },
    "topics": [
      "factor theorem",
      "polynomial factorisation",
      "cubic inequalities"
    ],
    "stem": "Let \\(f(x)=x^3-4x^2-x+4\\).",
    "parts": [
      [
        "Show that \\(x=1\\) is a root and hence factorise \\(f(x)\\) completely.",
        3
      ],
      [
        "Solve \\(f(x)\\le0\\), giving the answer in interval form or as inequalities.",
        3
      ],
      [
        "State the y-intercept of the graph \\(y=f(x)\\)",
        1
      ]
    ],
    "hint": "Use the factor theorem, then make a sign diagram using the three real roots.",
    "steps": [
      "Evaluate \\(f(1)=1-4-1+4=0\\), so \\(x-1\\) is a factor. [1] Division or grouping gives \\(f(x)=(x-1)(x^2-3x-4)\\), [1] so \\(f(x)=(x-1)(x-4)(x+1)\\). [1]",
      "The ordered roots are \\(-1,1,4\\). The monic cubic has signs negative, positive, negative and positive in the four successive intervals. [2] Hence \\(f(x)\\le0\\) when \\(x\\le-1\\) or \\(1\\le x\\le4\\), including the zeros. [1]",
      "At \\(x=0\\), \\(f(0)=4\\), so the y-intercept is \\((0,4)\\). [1]"
    ],
    "answer": "\\(f(x)=(x+1)(x-1)(x-4)\\); \\(x\\le-1\\) or \\(1\\le x\\le4\\); intercept \\((0,4)\\).",
    "misconception": "The sign of a cubic alternates across distinct simple roots; do not simply choose the intervals where x is negative.",
    "reflection": "How would an even-multiplicity root change the sign diagram?"
  },
  {
    "id": "W10-P3",
    "section": "P",
    "paper": "pure",
    "title": "A line through a circle",
    "marks": 8,
    "minutes": 10,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "circle intersections",
      "coordinate geometry",
      "vector magnitude",
      "chords and diameters"
    ],
    "stem": "A circle has equation \\((x-2)^2+(y+1)^2=25\\). A straight line has equation \\(y=2x-5\\) and meets the circle at \\(A\\) and \\(B\\).",
    "parts": [
      [
        "Write down the circle's centre and radius.",
        1
      ],
      [
        "Find the coordinates of \\(A\\) and \\(B\\) exactly.",
        4
      ],
      [
        "Write down the vector \\(\\overrightarrow{AB}\\) and hence show that \\(AB\\) is a diameter of the circle.",
        3
      ]
    ],
    "hint": "Substitute the line equation. The two intersections differ by a vector whose magnitude can be found from its components.",
    "steps": [
      "The centre is \\((2,-1)\\) and radius \\(5\\). [1]",
      "Substitute \\(y+1=2x-4=2(x-2)\\) into the circle: \\((x-2)^2+4(x-2)^2=25\\). [1] Therefore \\(5(x-2)^2=25\\), giving \\(x-2=\\pm\\sqrt5\\). [1] Since \\(y=2x-5\\), the intersections are \\(A=(2+\\sqrt5,-1+2\\sqrt5)\\) and \\(B=(2-\\sqrt5,-1-2\\sqrt5)\\). [2]",
      "With this ordering, \\(\\overrightarrow{AB}=\\langle-2\\sqrt5,-4\\sqrt5\\rangle\\). [1] Thus \\(AB=\\sqrt{20+80}=10\\). [1] The diameter is \\(2r=10\\), so chord AB has diameter length and is itself a diameter. [1]"
    ],
    "answer": "Centre \\((2,-1)\\) and radius \\(5\\); intersections \\((2\\pm\\sqrt5,-1\\pm2\\sqrt5)\\) with matching signs; chord length \\(10\\).",
    "misconception": "The plus or minus signs in x and y must match; four arbitrary sign combinations do not all lie on the given line.",
    "reflection": "How could you recognize the diameter property before calculating the intersections?"
  },
  {
    "id": "W10-P4",
    "section": "P",
    "paper": "pure",
    "title": "Zeros and a tangent to a trigonometric curve",
    "marks": 9,
    "minutes": 11,
    "ao": {
      "AO1": 3,
      "AO2": 6
    },
    "topics": [
      "double-angle identity",
      "trigonometric equation",
      "product rule",
      "tangent"
    ],
    "stem": "A curve is given by \\(y=2\\sin x\\cos x-\\cos x\\), for \\(0\\le x<2\\pi\\).",
    "parts": [
      [
        "Express y as a product of two factors.",
        2
      ],
      [
        "Find every zero of the curve in the stated interval, giving exact values.",
        4
      ],
      [
        "Find the exact equation of the tangent to the curve at \\(x=\\frac\\pi3\\).",
        3
      ]
    ],
    "hint": "Factor out cos x before solving. For the tangent, differentiate sin 2x − cos x and evaluate both y and y-prime.",
    "steps": [
      "Factor out \\(\\cos x\\) to get \\(y=\\cos x(2\\sin x-1)\\). [2]",
      "For a zero, either \\(\\cos x=0\\) or \\(\\sin x=\\frac12\\). [2] On \\(0\\le x<2\\pi\\), the first gives \\(x=\\frac\\pi2,\\frac{3\\pi}2\\) and the second \\(x=\\frac\\pi6,\\frac{5\\pi}6\\). [2]",
      "As \\(y=\\sin2x-\\cos x\\), \\(y'=2\\cos2x+\\sin x\\). [1] At \\(x=\\frac\\pi3\\), \\(y=\\frac{\\sqrt3-1}{2}\\) and gradient \\(m=-1+\\frac{\\sqrt3}{2}\\). [1] Thus \\(y-\\frac{\\sqrt3-1}{2}=(\\frac{\\sqrt3}{2}-1)(x-\\frac\\pi3)\\). [1]"
    ],
    "answer": "\\(y=\\cos x(2\\sin x-1)\\), zeros \\(\\pi/6,\\pi/2,5\\pi/6,3\\pi/2\\), tangent \\(y-(\\sqrt3-1)/2=(\\sqrt3/2-1)(x-\\pi/3)\\).",
    "misconception": "Cancelling cos x before solving loses the two roots where cos x=0.",
    "reflection": "Why do these zeros require checking two distinct factors rather than dividing by cos x?"
  }
];
