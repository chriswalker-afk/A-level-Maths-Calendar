export const week05ExpansionPure = [
  {
    "id": "W05-P4",
    "section": "P",
    "title": "Two integrals, one hidden triple",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "trigonometric identities",
      "definite integration",
      "proof by comparison"
    ],
    "stem": "Consider the two exact areas \\(I=\\int_0^{\\pi/2}\\sin^2x\\cos^2x\\,dx\\) and \\(J=\\int_0^{\\pi/2}\\sin^4x\\,dx\\). No calculator decimals are permitted.",
    "parts": [
      [
        "Show that \\(\\sin^2x\\cos^2x=\\frac18(1-\\cos4x)\\).",
        3
      ],
      [
        "Evaluate I exactly.",
        2
      ],
      [
        "Prove the identity \\(\\sin^4x=\\frac18(3-4\\cos2x+\\cos4x)\\).",
        3
      ],
      [
        "Deduce J and establish an exact relationship between I and J.",
        2
      ]
    ],
    "hint": "Use sin2x=2sinx cosx, followed by sin²u=(1−cos2u)/2. For sin⁴x, square the half-angle formula.",
    "steps": [
      "\\(\\sin^2x\\cos^2x=(\\sin2x)^2/4\\) by the double-angle identity. [1] Apply \\(\\sin^22x=(1-\\cos4x)/2\\). [1] Hence the product is \\((1-\\cos4x)/8\\). [1]",
      "\\(I=\\left[x/8-\\sin4x/32\\right]_0^{\\pi/2}\\). [1] The sine endpoints vanish, so \\(I=\\pi/16\\). [1]",
      "\\(\\sin^4x=((1-\\cos2x)/2)^2\\). [1] Expand to \\(\\frac14(1-2\\cos2x+\\cos^22x)\\). [1] Substitute \\(\\cos^22x=(1+\\cos4x)/2\\) and simplify to \\((3-4\\cos2x+\\cos4x)/8\\). [1]",
      "Integrating over \\([0,\\pi/2]\\), both cosine terms have zero integral, so \\(J=3\\pi/16\\). [1] As \\(I=\\pi/16\\), \\(J=3I\\). [1]"
    ],
    "answer": "\\(I=\\pi/16,\\quad J=3\\pi/16,\\quad J=3I\\).",
    "misconception": "The mean of sin⁴x is not the fourth power of the mean of sinx. Expand and integrate a correct identity.",
    "reflection": "How does the symmetry of sinx and cosx over [0,π/2] help explain why these areas are related?"
  },
  {
    "id": "W05-P5",
    "section": "P",
    "title": "A repeated pole controls an exact accumulation",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "partial fractions with repeated factors",
      "logarithmic integration",
      "exact integral inequalities"
    ],
    "stem": "For \\(x>0\\), define \\(R(x)=\\frac{x^2+3x-1}{x(x+1)^2}\\) and \\(I=\\int_1^2R(x)\\,dx\\).",
    "parts": [
      [
        "Find constants A, B and C in \\(R(x)=\\frac A x+\\frac B{x+1}+\\frac C{(x+1)^2}\\).",
        4
      ],
      [
        "Obtain a general antiderivative of R(x).",
        2
      ],
      [
        "Evaluate I in a single exact expression involving a logarithm.",
        3
      ],
      [
        "Using \\(\\ln(1+u)<u\\) for \\(u>0\\), deduce an upper bound for I.",
        1
      ]
    ],
    "hint": "Clear denominators, then substitute x=0 and x=−1 before comparing coefficients. For the final bound write the logarithm as ln(1+1/8).",
    "steps": [
      "Multiplication by \\(x(x+1)^2\\) gives \\(x^2+3x-1=A(x+1)^2+Bx(x+1)+Cx\\). [1] At x=0, \\(A=-1\\); at x=−1, \\(C=3\\). [2] Comparing x² coefficients gives \\(A+B=1\\), so B=2 and \\(R=-1/x+2/(x+1)+3/(x+1)^2\\). [1]",
      "Integrate term by term: \\(\\int R(x)\\,dx=-\\ln x+2\\ln(x+1)-3/(x+1)+C\\), valid for x>0. [2]",
      "At x=2 the antiderivative is \\(-\\ln2+2\\ln3-1\\). [1] At x=1 it is \\(2\\ln2-3/2\\). [1] The difference simplifies to \\(I=\\frac12+2\\ln3-3\\ln2=\\frac12+\\ln(9/8)\\). [1]",
      "As \\(\\ln(9/8)=\\ln(1+1/8)<1/8\\), it follows that \\(I<5/8\\). [1]"
    ],
    "answer": "\\(A=-1,\\ B=2,\\ C=3\\), \\(\\int R\\,dx=-\\ln x+2\\ln(x+1)-3/(x+1)+C\\), \\(I=\\frac12+\\ln(9/8)<5/8\\).",
    "misconception": "A repeated linear factor requires a term with denominator (x+1)². Its integral is a negative reciprocal, not another logarithm.",
    "reflection": "Why is a simple logarithm inequality sufficient to bound an otherwise awkward-looking integral?"
  },
  {
    "id": "W05-P6",
    "section": "P",
    "title": "A differential equation with a hidden growth rate",
    "marks": 10,
    "ao": {
      "AO1": 3,
      "AO2": 5,
      "AO3": 2
    },
    "topics": [
      "separable differential equations",
      "initial conditions",
      "logarithms",
      "monotonicity"
    ],
    "stem": "A continuously varying quantity y obeys \\(\\frac{dy}{dx}=x(1+y)\\) and \\(y(0)=1\\). Consider only \\(x\\ge0\\).",
    "parts": [
      [
        "Separate variables and integrate to obtain a family of solutions.",
        3
      ],
      [
        "Use the initial condition to determine y explicitly.",
        3
      ],
      [
        "Find the exact first x for which \\(y=3\\).",
        2
      ],
      [
        "Prove that the solution is strictly increasing for \\(x>0\\) and explain why this matters to the crossing in the previous part.",
        2
      ]
    ],
    "hint": "Integrate dy/(1+y)=x dx. The initial value ensures 1+y>0, allowing a logarithm without a sign ambiguity on this solution.",
    "steps": [
      "Separate as \\(dy/(1+y)=x\\,dx\\). [1] Integrate to obtain \\(\\ln|1+y|=x^2/2+C\\). [1] Exponentiate to get \\(1+y=Ke^{x^2/2}\\) for a nonzero signed constant K. [1]",
      "At x=0, y=1 gives \\(2=K\\). [1] Hence \\(1+y=2e^{x^2/2}\\). [1] Therefore \\(y=2e^{x^2/2}-1\\). [1]",
      "Set \\(3=2e^{x^2/2}-1\\), giving \\(e^{x^2/2}=2\\). [1] As x≥0, \\(x=\\sqrt{2\\ln2}\\). [1]",
      "Differentiating gives \\(dy/dx=2xe^{x^2/2}>0\\) for x>0. [1] Thus y cannot cross the level 3 more than once on the permitted domain. [1]"
    ],
    "answer": "\\(y(x)=2e^{x^2/2}-1\\), with unique crossing \\(x=\\sqrt{2\\ln2}\\) for x≥0.",
    "misconception": "After taking a logarithm, the equation x²=2ln2 gives two algebraic roots, but the model explicitly restricts x≥0.",
    "reflection": "Which feature of the original differential equation tells you the solution must increase for positive x?"
  },
  {
    "id": "W05-P7",
    "section": "P",
    "title": "An area comparison across a family of endpoints",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 6,
      "AO3": 2
    },
    "topics": [
      "area between curves",
      "integration with rational algebra",
      "parameter reasoning"
    ],
    "stem": "For \\(x\\ge0\\), curves \\(y=f(x)=x\\) and \\(y=g(x)=\\frac{x}{1+x^2}\\) bound an area over \\(0\\le x\\le a\\), where \\(a>0\\) is a parameter.",
    "parts": [
      [
        "Prove that f(x) lies on or above g(x) for all nonnegative x, with equality only at x=0.",
        2
      ],
      [
        "Find the exact area A(1) enclosed between the curves on [0,1].",
        3
      ],
      [
        "Derive a general expression A(a).",
        3
      ],
      [
        "Prove that A(a) increases strictly as a increases above zero.",
        2
      ]
    ],
    "hint": "Subtract the functions and simplify x−x/(1+x²)=x³/(1+x²). The area integral is simpler if you keep it as x−x/(1+x²).",
    "steps": [
      "\\(f(x)-g(x)=x-x/(1+x^2)=x^3/(1+x^2)\\). [1] This is nonnegative for x≥0, with equality only at x=0. [1]",
      "Area \\(A(1)=\\int_0^1(x-x/(1+x^2))\\,dx\\). [1] Integrate to obtain \\([x^2/2-\\frac12\\ln(1+x^2)]_0^1\\). [1] Thus \\(A(1)=\\frac12-\\frac12\\ln2\\). [1]",
      "The same antiderivative gives \\(A(a)=\\left[x^2/2-\\frac12\\ln(1+x^2)\\right]_0^a\\). [2] Hence \\(A(a)=\\frac12(a^2-\\ln(1+a^2))\\). [1]",
      "\\(A'(a)=a-a/(1+a^2)=a^3/(1+a^2)>0\\) for a>0. [1] Therefore the accumulated area grows strictly as the right endpoint increases. [1]"
    ],
    "answer": "\\(A(1)=(1-\\ln2)/2\\), and \\(A(a)=(a^2-\\ln(1+a^2))/2\\) increasing for a>0.",
    "misconception": "The area between two curves is not the integral of either curve alone; subtract the lower from the upper.",
    "reflection": "Why does A'(a) equal the vertical gap between the curves at x=a?"
  }
];
