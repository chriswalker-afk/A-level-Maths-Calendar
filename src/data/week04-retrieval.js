export const week04Retrieval = [
  {
    "id": "W04-R1",
    "section": "R",
    "title": "A gradient from first principles",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "first principles",
      "gradients"
    ],
    "stem": "Let \\(f(x)=x^2+3x\\).",
    "parts": [
      [
        "Using the limit definition of a derivative, find \\(f'(x)\\).",
        2
      ]
    ],
    "steps": [
      "Calculate \\(f(x+h)-f(x)=(x+h)^2+3(x+h)-x^2-3x=2xh+h^2+3h\\). [1]",
      "Then \\(f'(x)=\\lim_{h\\to0}\\frac{2xh+h^2+3h}{h}=\\lim_{h\\to0}(2x+h+3)=2x+3\\). [1]"
    ],
    "answer": "\\(f'(x)=2x+3\\)",
    "hint": "Expand f(x + h) completely before dividing the difference by h.",
    "misconception": "Do not set h = 0 before cancelling the common factor h in the difference quotient.",
    "reflection": "Why does the limit exist at every real x?"
  },
  {
    "id": "W04-R2",
    "section": "R",
    "title": "Fractional and negative indices",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "rational powers",
      "power rule"
    ],
    "stem": "For \\(x>0\\), let \\(y=3\\sqrt{x}-\\frac2{x^2}\\).",
    "parts": [
      [
        "Find \\(\\frac{dy}{dx}\\) in index form.",
        2
      ]
    ],
    "steps": [
      "Rewrite \\(y=3x^{1/2}-2x^{-2}\\). [1]",
      "The power rule gives \\(\\frac{dy}{dx}=\\frac32x^{-1/2}+4x^{-3}\\). [1]"
    ],
    "answer": "\\(\\frac{dy}{dx}=\\frac32x^{-1/2}+4x^{-3}\\)",
    "hint": "Convert roots and reciprocals to fractional or negative powers.",
    "misconception": "Differentiate the whole term, including its coefficient and the sign of the exponent.",
    "reflection": "Why is x > 0 a sensible domain for the original function?"
  },
  {
    "id": "W04-R3",
    "section": "R",
    "title": "Chain rule with a quadratic",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "chain rule",
      "composite functions"
    ],
    "stem": "Consider \\(y=(2x^2-1)^5\\).",
    "parts": [
      [
        "Differentiate \\(y\\) with respect to \\(x\\).",
        2
      ]
    ],
    "steps": [
      "Let \\(u=2x^2-1\\); then \\(\\frac{dy}{du}=5u^4\\) and \\(\\frac{du}{dx}=4x\\). [1]",
      "Using the chain rule, \\(\\frac{dy}{dx}=5(2x^2-1)^4(4x)=20x(2x^2-1)^4\\). [1]"
    ],
    "answer": "\\(20x(2x^2-1)^4\\)",
    "hint": "Differentiate the outer fifth power, then multiply by the derivative of the inner quadratic.",
    "misconception": "The derivative is not just 5(2x² − 1)⁴; the inner derivative is essential.",
    "reflection": "How could you verify the result using a calculator at x = 1?"
  },
  {
    "id": "W04-R4",
    "section": "R",
    "title": "Product rule with an exponential",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "product rule",
      "exponential derivatives"
    ],
    "stem": "Let \\(y=x^2e^{3x}\\).",
    "parts": [
      [
        "Find \\(\\frac{dy}{dx}\\) in a factorised form.",
        2
      ]
    ],
    "steps": [
      "Use \\(u=x^2,\\ v=e^{3x}\\), with \\(u'=2x,\\ v'=3e^{3x}\\). [1]",
      "Thus \\(y'=2xe^{3x}+3x^2e^{3x}=xe^{3x}(2+3x)\\). [1]"
    ],
    "answer": "\\(xe^{3x}(2+3x)\\)",
    "hint": "Apply u'v + uv'; include the chain rule when differentiating e^{3x}.",
    "misconception": "The product of two functions does not differentiate to the product of their derivatives.",
    "reflection": "At x = 0, what derivative does your expression predict?"
  },
  {
    "id": "W04-R5",
    "section": "R",
    "title": "Quotient rule and its domain",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "quotient rule",
      "rational functions"
    ],
    "stem": "The function \\(f(x)=\\frac{x^2+1}{x-1}\\) is defined for \\(x\\ne1\\).",
    "parts": [
      [
        "Find a simplified expression for \\(f'(x)\\).",
        2
      ]
    ],
    "steps": [
      "With \\(u=x^2+1,\\ v=x-1\\), the quotient rule gives \\(f'=\\frac{2x(x-1)-(x^2+1)}{(x-1)^2}\\). [1]",
      "Simplify the numerator to get \\(f'(x)=\\frac{x^2-2x-1}{(x-1)^2}\\) for \\(x\\ne1\\). [1]"
    ],
    "answer": "\\(f'(x)=\\frac{x^2-2x-1}{(x-1)^2}\\)",
    "hint": "Use (vu' − uv') / v² and preserve the denominator restriction.",
    "misconception": "The numerator of a quotient derivative is a difference, not a sum.",
    "reflection": "How could polynomial division give an alternative way to differentiate this function?"
  },
  {
    "id": "W04-R6",
    "section": "R",
    "title": "Implicit gradient at a point",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "implicit differentiation",
      "tangents"
    ],
    "stem": "The curve \\(x^2+xy+y^2=7\\) passes through \\(P(1,2)\\).",
    "parts": [
      [
        "Find the gradient of the curve at \\(P\\).",
        2
      ]
    ],
    "steps": [
      "Differentiating implicitly gives \\(2x+y+x\\frac{dy}{dx}+2y\\frac{dy}{dx}=0\\), so \\(\\frac{dy}{dx}=-\\frac{2x+y}{x+2y}\\). [1]",
      "At \\(P(1,2)\\), the gradient is \\(-\\frac{2+2}{1+4}=-\\frac45\\). [1]"
    ],
    "answer": "\\(-\\frac45\\)",
    "hint": "Use the product rule on xy and differentiate every appearance of y implicitly.",
    "misconception": "The derivative of xy is y + x(dy/dx), not simply y.",
    "reflection": "How do you verify that the given point lies on the curve?"
  },
  {
    "id": "W04-R7",
    "section": "R",
    "title": "A parametric gradient",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "parametric differentiation",
      "chain rule"
    ],
    "stem": "The curve is given by \\(x=t^2+1,\\quad y=t^3-3t\\).",
    "parts": [
      [
        "Find \\(\\frac{dy}{dx}\\) at \\(t=2\\).",
        2
      ]
    ],
    "steps": [
      "Differentiate with respect to \\(t\\): \\(\\frac{dx}{dt}=2t,\\quad \\frac{dy}{dt}=3t^2-3\\). [1]",
      "Then \\(\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}=\\frac{3t^2-3}{2t}\\), so at \\(t=2\\) the gradient is \\(\\frac9{4}\\). [1]"
    ],
    "answer": "\\(\\left.\\frac{dy}{dx}\\right|_{t=2}=\\frac94\\)",
    "hint": "Divide dy/dt by dx/dt; do not divide x by y.",
    "misconception": "Calculating dy/dt alone does not give the gradient in the x-y plane.",
    "reflection": "What would go wrong at a parameter where dx/dt = 0?"
  },
  {
    "id": "W04-R8",
    "section": "R",
    "title": "Logarithms and exponentials",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "logarithmic differentiation",
      "exponential derivatives"
    ],
    "stem": "For \\(x>-\\frac13\\), let \\(y=\\ln(3x+1)+e^{-2x}\\).",
    "parts": [
      [
        "Find \\(\\frac{dy}{dx}\\).",
        2
      ]
    ],
    "steps": [
      "The chain rule gives \\(\\frac{d}{dx}\\ln(3x+1)=\\frac{3}{3x+1}\\). [1]",
      "Also \\(\\frac{d}{dx}e^{-2x}=-2e^{-2x}\\); hence \\(y'=\\frac3{3x+1}-2e^{-2x}\\). [1]"
    ],
    "answer": "\\(\\frac3{3x+1}-2e^{-2x}\\)",
    "hint": "Differentiate ln(u) as u'/u and e^u as u'e^u.",
    "misconception": "The derivative of ln(3x + 1) is not 1/(3x + 1): multiply by 3.",
    "reflection": "Why can the logarithm only be used for x > −1/3?"
  },
  {
    "id": "W04-R9",
    "section": "R",
    "title": "Two stationary points",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "stationary points",
      "factorisation"
    ],
    "stem": "Consider \\(f(x)=x^3-6x^2+9x\\).",
    "parts": [
      [
        "Find the coordinates of both stationary points.",
        2
      ]
    ],
    "steps": [
      "Differentiate and factorise: \\(f'(x)=3x^2-12x+9=3(x-1)(x-3)\\). Hence \\(x=1\\) and \\(x=3\\). [1]",
      "Substitute: \\(f(1)=4\\) and \\(f(3)=0\\), giving \\((1,4)\\) and \\((3,0)\\). [1]"
    ],
    "answer": "\\((1,4)\\) and \\((3,0)\\).",
    "hint": "Set the first derivative to zero and substitute each solution into the original function.",
    "misconception": "A stationary-point equation only gives x-values; the coordinates also need y-values.",
    "reflection": "Which point is the local maximum, and how could the second derivative confirm it?"
  },
  {
    "id": "W04-R10",
    "section": "R",
    "title": "A tangent to a radical curve",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "tangents",
      "rational powers"
    ],
    "stem": "The curve \\(y=\\sqrt{x}\\) is considered at \\(x=4\\).",
    "parts": [
      [
        "Find the equation of its tangent in the form \\(y=mx+c\\).",
        2
      ]
    ],
    "steps": [
      "Since \\(y=x^{1/2}\\), \\(\\frac{dy}{dx}=\\frac12x^{-1/2}\\); the gradient at \\(x=4\\) is \\(\\frac14\\). [1]",
      "The tangent passes through \\((4,2)\\), so \\(y-2=\\frac14(x-4)\\) and \\(y=\\frac14x+1\\). [1]"
    ],
    "answer": "\\(y=\\frac14x+1\\)",
    "hint": "Find the derivative and the point on the curve before using y − y₁ = m(x − x₁).",
    "misconception": "Use the y-coordinate from the original curve, not from its derivative.",
    "reflection": "Does your tangent lie above or below the curve close to x = 4?"
  }
];
