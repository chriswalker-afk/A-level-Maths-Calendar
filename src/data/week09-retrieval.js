export const week09Retrieval = [
  {
    "id": "W09-R1",
    "section": "R",
    "title": "A factor hidden in a cubic",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "factor theorem",
      "cubic algebra"
    ],
    "stem": "A polynomial is \\(f(x)=x^3-4x^2+x+6\\).",
    "parts": [
      [
        "Show that \\(x-2\\) is a factor, and factorise \\(f(x)\\) fully.",
        2
      ]
    ],
    "hint": "Use the factor theorem before division.",
    "steps": [
      "Since \\(f(2)=8-16+2+6=0\\), the factor theorem confirms \\(x-2\\). [1]",
      "Dividing gives \\(x^2-2x-3=(x-3)(x+1)\\); thus \\(f(x)=(x-2)(x-3)(x+1)\\). [1]"
    ],
    "answer": "\\((x-2)(x-3)(x+1)\\)",
    "misconception": "Checking that f(2)=0 establishes a factor, but not the other two factors.",
    "reflection": "Which roots of the polynomial can you read directly from the final product?"
  },
  {
    "id": "W09-R2",
    "section": "R",
    "title": "Find a circle from its equation",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "circle equations",
      "completing square"
    ],
    "stem": "A circle has Cartesian equation \\(x^2+y^2-6x+4y-12=0\\).",
    "parts": [
      [
        "State its centre and radius.",
        2
      ]
    ],
    "hint": "Complete the square in x and in y separately.",
    "steps": [
      "Rearrange into \\((x-3)^2+(y+2)^2=25\\). [1]",
      "The centre is \\((3,-2)\\) and the radius is \\(5\\) units. [1]"
    ],
    "answer": "\\(\\text{Centre }(3,-2),\\quad r=5\\)",
    "misconception": "The coordinates of the centre carry the opposite signs from the completed-square bracket constants.",
    "reflection": "What is the quickest way to check the radius without plotting the circle?"
  },
  {
    "id": "W09-R3",
    "section": "R",
    "title": "A double-angle equation",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "double-angle trigonometry"
    ],
    "stem": "For \\(0\\le\\theta<\\pi\\), solve \\(\\sin(2\\theta)=\\frac{\\sqrt3}{2}\\).",
    "parts": [
      [
        "Give both exact solutions.",
        2
      ]
    ],
    "hint": "Double the domain before solving for the angle \\(2\\theta\\).",
    "steps": [
      "The angle \\(2\\theta\\) lies in \\([0,2\\pi)\\). The sine equation gives \\(2\\theta=\\frac\\pi3\\) or \\(2\\theta=\\frac{2\\pi}{3}\\). [1]",
      "Halving gives \\(\\theta=\\frac\\pi6\\) or \\(\\theta=\\frac\\pi3\\). [1]"
    ],
    "answer": "\\(\\theta=\\frac\\pi6,\\ \\frac\\pi3\\)",
    "misconception": "Solving for theta directly instead of 2theta loses or invents solutions.",
    "reflection": "What interval would you use for 2theta if theta were between zero and 2pi?"
  },
  {
    "id": "W09-R4",
    "section": "R",
    "title": "A geometric series total",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "geometric series",
      "convergence"
    ],
    "stem": "A geometric series begins \\(6,2,\\frac23,\\ldots\\).",
    "parts": [
      [
        "Find its sum to infinity.",
        2
      ]
    ],
    "hint": "The common ratio must satisfy a magnitude condition.",
    "steps": [
      "The first term is \\(a=6\\) and the ratio is \\(r=\\frac13\\), so \\(|r|<1\\). [1]",
      "Therefore \\(S_\\infty=\\frac{6}{1-1/3}=9\\). [1]"
    ],
    "answer": "\\(9\\)",
    "misconception": "The infinite-sum formula is not valid if the ratio has magnitude one or greater.",
    "reflection": "How can the infinite sum be greater than every single term yet remain finite?"
  },
  {
    "id": "W09-R5",
    "section": "R",
    "title": "A product requiring two rules",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "product rule",
      "logarithmic derivatives"
    ],
    "stem": "For \\(x>0\\), a function is \\(y=x^2\\ln x\\).",
    "parts": [
      [
        "Find \\(dy/dx\\) in factorised form.",
        2
      ]
    ],
    "hint": "Apply the product rule and differentiate ln x.",
    "steps": [
      "The product rule gives \\(\\frac{dy}{dx}=2x\\ln x+x^2\\frac1x\\). [1]",
      "Simplifying, \\(\\frac{dy}{dx}=x(2\\ln x+1)\\). [1]"
    ],
    "answer": "\\(\\frac{dy}{dx}=x(2\\ln x+1)\\)",
    "misconception": "One factor does not stay constant: differentiate both x squared and ln x in the product rule.",
    "reflection": "Where would this derivative be zero on the positive x-axis?"
  },
  {
    "id": "W09-R6",
    "section": "R",
    "title": "Evaluate a definite exponential integral",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "exponential integration"
    ],
    "stem": "Evaluate \\(\\displaystyle\\int_0^{\\ln2}2e^x\\,dx\\).",
    "parts": [
      [
        "Give the exact result.",
        2
      ]
    ],
    "hint": "Find an antiderivative, then substitute the limits.",
    "steps": [
      "An antiderivative is \\(2e^x\\). [1]",
      "Evaluation gives \\([2e^x]_0^{\\ln2}=2(2)-2(1)=2\\). [1]"
    ],
    "answer": "\\(2\\)",
    "misconception": "e to the power ln 2 is 2, not ln 2.",
    "reflection": "What does the positive answer represent geometrically?"
  },
  {
    "id": "W09-R7",
    "section": "R",
    "title": "One Newton iteration",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "Newton–Raphson",
      "indices"
    ],
    "stem": "Apply Newton–Raphson to \\(f(x)=x^3-2\\) from \\(x_0=\\frac32\\).",
    "parts": [
      [
        "Find \\(x_1\\) exactly.",
        2
      ]
    ],
    "hint": "Use the derivative \\(f'(x)=3x^2\\) in the denominator.",
    "steps": [
      "At \\(x_0=\\frac32\\), \\(f(x_0)=\\frac{11}{8}\\) and \\(f'(x_0)=\\frac{27}{4}\\). [1]",
      "Thus \\(x_1=\\frac32-\\frac{11/8}{27/4}=\\frac{35}{27}\\). [1]"
    ],
    "answer": "\\(x_1=\\frac{35}{27}\\)",
    "misconception": "Newton's method subtracts f/f-prime, not f-prime/f.",
    "reflection": "Why is retaining an exact fraction preferable to prematurely rounding this iterate?"
  },
  {
    "id": "W09-R8",
    "section": "R",
    "title": "A proportionate sample",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "stratified sampling"
    ],
    "stem": "A school population has \\(70\\) students in group A and \\(30\\) in group B.",
    "parts": [
      [
        "Find proportional group allocations for a stratified sample of \\(20\\) students.",
        2
      ]
    ],
    "hint": "Use each group's share of the total population.",
    "steps": [
      "Group A contributes \\(\\frac{70}{100}\\times20=14\\). [1]",
      "Group B contributes \\(\\frac{30}{100}\\times20=6\\). [1]"
    ],
    "answer": "\\(14\\text{ from A},\\quad6\\text{ from B}\\)",
    "misconception": "A proportional allocation need not allocate the same number to every group.",
    "reflection": "How might you select individuals randomly within each group after allocating the sample?"
  },
  {
    "id": "W09-R9",
    "section": "R",
    "title": "A binomial point probability",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "Year 1 binomial distribution"
    ],
    "stem": "Let \\(X\\sim B(5,0.4)\\).",
    "parts": [
      [
        "Find \\(P(X=3)\\).",
        2
      ]
    ],
    "hint": "Use the binomial coefficient for choosing three successes.",
    "steps": [
      "Use \\(P(X=3)=\\binom53(0.4)^3(0.6)^2\\). [1]",
      "Simplify to \\(10(0.064)(0.36)=0.2304\\). [1]"
    ],
    "answer": "\\(0.2304\\)",
    "misconception": "A point probability is not the same as a cumulative probability such as P(X≥3).",
    "reflection": "Which assumption about the five trials is essential for this binomial formula?"
  },
  {
    "id": "W09-R10",
    "section": "R",
    "title": "Motion reversals in one dimension",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "velocity sign",
      "variable acceleration"
    ],
    "stem": "A particle has velocity \\(v(t)=t^2-4t+3\\) for \\(0\\le t\\le4\\) seconds.",
    "parts": [
      [
        "Find the instants at which it is at rest and state its direction of motion between them.",
        2
      ]
    ],
    "hint": "Factorise v and use its sign, not the sign of acceleration.",
    "steps": [
      "As \\(v(t)=(t-1)(t-3)\\), the particle is at rest at \\(t=1\\) and \\(t=3\\) seconds. [1]",
      "Velocity is positive on \\((0,1)\\) and \\((3,4)\\), and negative on \\((1,3)\\). It moves right, then left, then right. [1]"
    ],
    "answer": "\\(t=1,3\\ \\mathrm{s};\\quad\\text{right, left, right}\\)",
    "misconception": "Acceleration can be zero even when an object is moving; rest means velocity equals zero.",
    "reflection": "How would total distance differ from signed displacement over these four seconds?"
  }
];
