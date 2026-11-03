/** Original connected Pure additions, Pass 1. IDs never replace prior questions. */
export const week01ExpansionPure = [
  {
    "id": "W01-P4",
    "section": "P",
    "title": "Two surds and a contradiction",
    "marks": 10,
    "ao": {
      "AO1": 1,
      "AO2": 9
    },
    "topics": [
      "proof by contradiction",
      "rationalising denominators",
      "surd arithmetic"
    ],
    "stem": "Let \\(u=\\sqrt3+\\sqrt2\\) and \\(v=\\sqrt3-\\sqrt2\\). A student claims that \\(u\\) could be rational because it is the sum of two square roots.",
    "parts": [
      [
        "Explain why \\(uv=1\\) and hence rationalise \\(\\frac1v\\).",
        2
      ],
      [
        "Prove by contradiction that \\(\\sqrt2\\) is irrational. You may use the fact that a square of an odd integer is odd.",
        4
      ],
      [
        "Use your earlier results to prove that \\(u\\) is irrational.",
        4
      ]
    ],
    "hint": "First multiply conjugates. For the contradiction assume a fraction a/b in lowest terms represents √2. Finally assume u rational and consider u−1/u.",
    "steps": [
      "\\(uv=(\\sqrt3+\\sqrt2)(\\sqrt3-\\sqrt2)=3-2=1\\). [1] As \\(v\\ne0\\), \\(\\frac1v=u=\\sqrt3+\\sqrt2\\). [1]",
      "Assume \\(\\sqrt2=a/b\\) for integers a,b with b nonzero and the fraction in lowest terms. [1] Squaring gives \\(a^2=2b^2\\), so a² is even and a is even. [1] Write a=2k to get \\(4k^2=2b^2\\), so b² and therefore b are even. [1] Both a and b are divisible by 2, contradicting lowest terms. Thus √2 is irrational. [1]",
      "Suppose \\(u\\) is rational. Since \\(u\\ne0\\), its reciprocal is rational. [1] From part (a), \\(\\frac1u=v\\). [1] Hence \\(u-\\frac1u=(\\sqrt3+\\sqrt2)-(\\sqrt3-\\sqrt2)=2\\sqrt2\\) would be rational. [1] Dividing by 2 would make √2 rational, contradicting part (b); therefore u is irrational. [1]"
    ],
    "answer": "\\(uv=1,\\quad1/v=\\sqrt3+\\sqrt2\\); both \\(\\sqrt2\\) and \\(u\\) are irrational.",
    "misconception": "It is not enough to say 'two irrational numbers add to an irrational number': for example √2 + (−√2) is rational.",
    "reflection": "Why is the lowest-terms assumption essential, and how is the contradiction transferred from √2 to u?"
  },
  {
    "id": "W01-P5",
    "section": "P",
    "title": "A transformation whose domain matters",
    "marks": 10,
    "ao": {
      "AO1": 1,
      "AO2": 8,
      "AO3": 1
    },
    "topics": [
      "inverse functions",
      "composite functions",
      "domain and range",
      "ordered graph transformations"
    ],
    "stem": "A function is defined by \\(f(x)=(x-2)^2+1\\) with domain \\(x\\ge2\\). A second function is \\(g(x)=2x-1\\) for real x. Two students assume that doing the operations in different orders has no effect.",
    "parts": [
      [
        "Find \\(f^{-1}\\), stating its domain and range.",
        3
      ],
      [
        "Obtain \\(h=f\\circ g\\) and specify its largest permissible real domain and range.",
        3
      ],
      [
        "Solve \\(h(x)<10\\) over that domain.",
        2
      ],
      [
        "Explain with correct expressions why \\(g\\circ f\\) is not the same as \\(f\\circ g\\).",
        2
      ]
    ],
    "hint": "Work backwards from y=(x−2)²+1 using x≥2. For f∘g, the output of g must lie in f's domain.",
    "steps": [
      "Let \\(y=(x-2)^2+1\\). Then \\(x-2=\\sqrt{y-1}\\) because x≥2. [1] Thus \\(f^{-1}(x)=2+\\sqrt{x-1}\\). [1] Its domain is \\(x\\ge1\\) and range is \\(y\\ge2\\). [1]",
      "\\(h(x)=f(2x-1)=((2x-1)-2)^2+1=(2x-3)^2+1\\). [1] The condition \\(2x-1\\ge2\\) gives \\(x\\ge\\frac32\\). [1] Over this domain the smallest value of h is 1, so the range is \\(h\\ge1\\). [1]",
      "From \\((2x-3)^2+1<10\\), \\(-3<2x-3<3\\). [1] This gives \\(0<x<3\\), which must be intersected with the domain: \\(\\frac32\\le x<3\\). [1]",
      "\\(g(f(x))=2((x-2)^2+1)-1=2(x-2)^2+1\\), for x≥2. [1] This differs from \\(f(g(x))=(2x-3)^2+1\\), for x≥3/2; the operations and domain restrictions are not interchangeable. [1]"
    ],
    "answer": "\\(f^{-1}(x)=2+\\sqrt{x-1}\\) for x≥1; \\(h(x)=(2x-3)^2+1\\) for x≥3/2; \\(\\frac32\\le x<3\\).",
    "misconception": "The inverse needs the positive square-root branch; ignoring x≥2 creates a spurious negative branch.",
    "reflection": "Explain the two transformation orders on the graph, not merely by expanding their algebra."
  },
  {
    "id": "W01-P6",
    "section": "P",
    "title": "A repeated pole and an inequality",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "repeated-factor partial fractions",
      "discriminant",
      "rational inequalities"
    ],
    "stem": "For real \\(x\\ne0,-1\\), define \\(R(x)=\\frac{2x^2+3x+2}{x(x+1)^2}\\). A proposed simplification is \\(R(x)=2/x-1/(x+1)\\).",
    "parts": [
      [
        "Find the correct partial-fraction decomposition of R(x), showing how its three coefficients are obtained.",
        4
      ],
      [
        "Prove that the numerator of R(x) is strictly positive for every real x.",
        3
      ],
      [
        "Hence find all real x for which \\(R(x)\\ge0\\), giving any excluded values correctly.",
        3
      ]
    ],
    "hint": "Use A/x+B/(x+1)+C/(x+1)². For the numerator, complete the square or check the quadratic discriminant.",
    "steps": [
      "Write \\(R(x)=A/x+B/(x+1)+C/(x+1)^2\\). [1] Multiplying by \\(x(x+1)^2\\) gives \\(2x^2+3x+2=A(x+1)^2+Bx(x+1)+Cx\\). [1] At x=0, A=2; at x=−1, \\(1=-C\\), so C=−1. [1] Comparing x² coefficients gives A+B=2 and B=0, hence \\(R(x)=\\frac2x-\\frac1{(x+1)^2}\\). [1]",
      "\\(2x^2+3x+2=2(x+\\frac34)^2+\\frac78\\). [2] Both terms are nonnegative and the constant is positive, so the numerator is strictly positive for every real x. [1]",
      "The denominator \\(x(x+1)^2\\) has the sign of x wherever it is defined. [1] Since the numerator is strictly positive, R has the sign of x. [1] Thus \\(R(x)\\ge0\\) precisely when \\(x>0\\); x=0 and x=−1 remain excluded. [1]"
    ],
    "answer": "\\(R(x)=2/x-1/(x+1)^2\\); numerator positive for all x; inequality solution \\(x>0\\).",
    "misconception": "A repeated linear factor requires both first- and second-power terms; multiplying numerator and denominator by a factor does not remove an excluded value.",
    "reflection": "Why is there no equality case even though the question says greater than or equal to zero?"
  },
  {
    "id": "W01-P7",
    "section": "P",
    "title": "Two constraints and an unexpected maximum",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 5,
      "AO3": 3
    },
    "topics": [
      "simultaneous nonlinear equations",
      "quadratics",
      "algebraic proof",
      "optimisation"
    ],
    "stem": "Two positive real numbers x and y satisfy \\(x^2+y^2=25\\) and \\(xy=12\\). The numbers may be interchanged without changing either condition.",
    "parts": [
      [
        "Use the two conditions to find \\(x+y\\) exactly.",
        2
      ],
      [
        "Determine all ordered pairs (x,y) and justify that there are no others.",
        4
      ],
      [
        "Now discard the condition xy=12, but retain \\(x^2+y^2=25\\) and positivity. Prove the maximum possible value of xy and state when it occurs.",
        4
      ]
    ],
    "hint": "Square x+y and introduce xy. For the maximum, consider (x−y)² rather than differentiating.",
    "steps": [
      "\\((x+y)^2=x^2+y^2+2xy=25+24=49\\). [1] Positivity selects \\(x+y=7\\) rather than −7. [1]",
      "As x+y=7 and xy=12, the numbers are roots of \\(t^2-7t+12=0\\). [1] Factor \\((t-3)(t-4)=0\\). [1] Thus \\((x,y)=(3,4)\\) or \\((4,3)\\). [1] Every permissible pair must have this sum and product, so the quadratic exhausts all solutions. [1]",
      "Use \\((x-y)^2\\ge0\\) to infer \\(x^2+y^2\\ge2xy\\). [2] Thus \\(xy\\le25/2\\). [1] Equality holds exactly at \\(x=y=5/\\sqrt2\\); both are positive and satisfy the circle condition. [1]"
    ],
    "answer": "\\(x+y=7\\); \\((3,4),(4,3)\\); maximum unrestricted product \\(25/2\\) at \\(x=y=5/\\sqrt2\\).",
    "misconception": "The maximum product is not 12 merely because one example has product 12; the second optimisation has deliberately removed that condition.",
    "reflection": "How does the same squared difference establish a general inequality without calculus?"
  }
];
