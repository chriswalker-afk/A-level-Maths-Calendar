export const week07Retrieval = [
  {
    "id": "W07-R1",
    "section": "R",
    "title": "Combine logarithms",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "logarithm laws"
    ],
    "stem": "Simplify \\(\\log_3 81+\\log_3 9-\\log_3 27\\).",
    "parts": [
      [
        "Give a single numerical value.",
        2
      ]
    ],
    "hint": "Combine products and quotients inside one logarithm before evaluating.",
    "steps": [
      "By the log laws the expression is \\(\\log_3\\!\\left(\\frac{81\\cdot9}{27}\\right)=\\log_3 27\\). [1]",
      "Since \\(3^3=27\\), the value is \\(3\\). [1]"
    ],
    "answer": "\\(3\\)",
    "misconception": "Subtracting logarithms corresponds to dividing their arguments, not subtracting the arguments.",
    "reflection": "Why do log laws require positive arguments?"
  },
  {
    "id": "W07-R2",
    "section": "R",
    "title": "Solve an exponential equation",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "exponential equations",
      "logarithm"
    ],
    "stem": "Solve \\(5e^{2x}=35\\).",
    "parts": [
      [
        "Give the exact value of \\(x\\).",
        2
      ]
    ],
    "hint": "Isolate the exponential expression and then take natural logarithms.",
    "steps": [
      "Rearrange to \\(e^{2x}=7\\) and take logs: \\(2x=\\ln7\\). [1]",
      "Hence \\(x=\\frac12\\ln7\\). [1]"
    ],
    "answer": "\\(x=\\frac12\\ln7\\)",
    "misconception": "The natural logarithm cancels an exponential only after the exponential is isolated.",
    "reflection": "How does a calculator check the resulting exact value?"
  },
  {
    "id": "W07-R3",
    "section": "R",
    "title": "Reject a logarithmic root",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "logarithmic equations",
      "domain"
    ],
    "stem": "Solve \\(\\ln(x-1)=\\ln 3\\).",
    "parts": [
      [
        "State the domain restriction and the solution.",
        2
      ]
    ],
    "hint": "A logarithm can only be taken of a positive number.",
    "steps": [
      "The argument requires \\(x-1>0\\), so \\(x>1\\). [1]",
      "Equate arguments to obtain \\(x-1=3\\), hence \\(x=4\\), which is valid. [1]"
    ],
    "answer": "\\(x=4\\)",
    "misconception": "Do not solve a log equation without checking that every argument is positive.",
    "reflection": "How would this change if the right-hand side were ln(-3)?"
  },
  {
    "id": "W07-R4",
    "section": "R",
    "title": "Find a logarithmic domain",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "logarithm domain",
      "inequalities"
    ],
    "stem": "Let \\(f(x)=\\ln(5-2x)\\).",
    "parts": [
      [
        "State the maximal real domain of \\(f\\) in interval form.",
        2
      ]
    ],
    "hint": "Make the entire logarithm argument strictly positive.",
    "steps": [
      "We require \\(5-2x>0\\). [1]",
      "Thus \\(x<\\frac52\\), or \\((-\\infty,\\frac52)\\). [1]"
    ],
    "answer": "\\(x<\\frac52\\)",
    "misconception": "The inequality reverses when dividing by a negative coefficient.",
    "reflection": "What happens to the graph as x approaches 5/2 from below?"
  },
  {
    "id": "W07-R5",
    "section": "R",
    "title": "Differentiate a product of growth and time",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "exponential differentiation",
      "product rule"
    ],
    "stem": "For \\(y=xe^{3x}\\), find \\(\\frac{dy}{dx}\\).",
    "parts": [
      [
        "Simplify your answer.",
        2
      ]
    ],
    "hint": "Apply the product rule before differentiating the exponential inner argument.",
    "steps": [
      "The product rule gives \\(\\frac{dy}{dx}=e^{3x}+x(3e^{3x})\\). [1]",
      "Factorise to obtain \\(\\frac{dy}{dx}=e^{3x}(1+3x)\\). [1]"
    ],
    "answer": "\\(e^{3x}(1+3x)\\)",
    "misconception": "Differentiating only the exponential factor misses the derivative of x.",
    "reflection": "Where would this derivative be zero, and what would that mean?"
  },
  {
    "id": "W07-R6",
    "section": "R",
    "title": "Integrate an exponential",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "exponential integration",
      "definite integral"
    ],
    "stem": "Evaluate \\(\\displaystyle\\int_0^{\\ln2}3e^{2x}\\,dx\\) exactly.",
    "parts": [
      [
        "Give an exact value.",
        2
      ]
    ],
    "hint": "Integrate e^{2x} by dividing by the inner coefficient.",
    "steps": [
      "An antiderivative is \\(\\frac32e^{2x}\\). [1]",
      "Substitute limits: \\(\\frac32(e^{2\\ln2}-1)=\\frac32(4-1)=\\frac92\\). [1]"
    ],
    "answer": "\\(\\frac92\\)",
    "misconception": "The factor 2 in the exponential must be accounted for when integrating.",
    "reflection": "Why is the answer not simply 3(e^2−1)?"
  },
  {
    "id": "W07-R7",
    "section": "R",
    "title": "A straight-line logarithmic transform",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "linearisation",
      "exponential models"
    ],
    "stem": "A model is \\(y=Ae^{kx}\\) for \\(A>0\\).",
    "parts": [
      [
        "State a transformation of \\(y\\) giving a straight line against \\(x\\), and identify its gradient.",
        2
      ]
    ],
    "hint": "Take natural logarithms of both sides.",
    "steps": [
      "Taking logs gives \\(\\ln y=\\ln A+kx\\). [1]",
      "Plotting \\(\\ln y\\) against \\(x\\) produces a straight line of gradient \\(k\\). [1]"
    ],
    "answer": "\\(\\ln y=\\ln A+kx,\\quad\\text{gradient }k\\)",
    "misconception": "Taking the logarithm of the dependent variable does not make the gradient ln(k).",
    "reflection": "How would you recover A from the vertical intercept?"
  },
  {
    "id": "W07-R8",
    "section": "R",
    "title": "Separate a differential equation",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "separable differential equations"
    ],
    "stem": "A function satisfies \\(\\frac{dy}{dx}=xy\\) for \\(y>0\\).",
    "parts": [
      [
        "Find the general solution in the form \\(y=f(x)\\).",
        2
      ]
    ],
    "hint": "Divide by y, integrate both sides and exponentiate.",
    "steps": [
      "Separate and integrate: \\(\\frac1y\\,dy=x\\,dx\\), so \\(\\ln y=\\frac12x^2+C\\). [1]",
      "Exponentiating gives \\(y=Ae^{x^2/2}\\) with \\(A>0\\). [1]"
    ],
    "answer": "\\(y=Ae^{x^2/2},\\ A>0\\)",
    "misconception": "The integration constant becomes a multiplicative positive constant after exponentiation.",
    "reflection": "Why is a negative value of A excluded by the stated domain?"
  },
  {
    "id": "W07-R9",
    "section": "R",
    "title": "Apply an initial condition",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "differential equations",
      "initial conditions"
    ],
    "stem": "A population follows \\(\\frac{dP}{dt}=0.4P\\) with \\(P(0)=50\\).",
    "parts": [
      [
        "Find \\(P(t)\\).",
        2
      ]
    ],
    "hint": "A derivative proportional to the quantity gives an exponential function.",
    "steps": [
      "The general solution is \\(P(t)=Ce^{0.4t}\\). [1]",
      "At \\(t=0\\), \\(C=50\\), so \\(P(t)=50e^{0.4t}\\). [1]"
    ],
    "answer": "\\(P(t)=50e^{0.4t}\\)",
    "misconception": "An additive C is not the integration constant in the final exponential population model.",
    "reflection": "At what time would this unrestrained model predict a doubled population?"
  },
  {
    "id": "W07-R10",
    "section": "R",
    "title": "Connect geometric and continuous growth",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "geometric growth",
      "continuous growth"
    ],
    "stem": "One investment grows by \\(5\\%\\) at the end of each year; another grows continuously at rate \\(0.05\\) per year. Both start at \\(£100\\).",
    "parts": [
      [
        "Give exact expressions for their values after two years.",
        2
      ]
    ],
    "hint": "Repeated annual multiplication and constant proportional growth use different multipliers.",
    "steps": [
      "The annual model is geometric: \\(100(1.05)^2=110.25\\) pounds. [1]",
      "The continuous model is \\(100e^{0.05(2)}=100e^{0.1}\\) pounds. [1]"
    ],
    "answer": "\\(£110.25\\quad\\text{and}\\quad£100e^{0.1}\\)",
    "misconception": "Continuous growth at 5% per year is not identical to multiplying by 1.05 once per year.",
    "reflection": "Which grows faster, and why does the distinction matter for long-term prediction?"
  }
];
