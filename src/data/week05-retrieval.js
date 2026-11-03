export const week05Retrieval = [
  {
    "id": "W05-R1",
    "section": "R",
    "title": "Reverse the power rule",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "power rule",
      "fractional powers"
    ],
    "stem": "Integrate for \\(x>0\\).",
    "parts": [
      [
        "\\(\\displaystyle\\int(6x^2-4x^{-1/2})\\,dx\\).",
        2
      ]
    ],
    "steps": [
      "Use \\(\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C\\) for \\(n\\ne-1\\). [1]",
      "Hence \\(\\int(6x^2-4x^{-1/2})\\,dx=2x^3-8\\sqrt{x}+C\\). [1]"
    ],
    "answer": "\\(2x^3-8\\sqrt{x}+C\\)",
    "hint": "Rewrite the root as a fractional power; add one to each index and divide by the new index.",
    "misconception": "Integrating x⁻¹ᐟ² does not give a logarithm, because the power is not −1.",
    "reflection": "How would differentiating your result verify the coefficient −8?"
  },
  {
    "id": "W05-R2",
    "section": "R",
    "title": "Exponentials and logarithms",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "standard integration",
      "exponentials",
      "logarithms"
    ],
    "stem": "Evaluate an indefinite integral on the domain \\(x>0\\).",
    "parts": [
      [
        "\\(\\displaystyle\\int\\left(3e^{3x}+\\frac2x\\right)dx\\).",
        2
      ]
    ],
    "steps": [
      "Since \\(\\frac{d}{dx}e^{3x}=3e^{3x}\\), the first term integrates to \\(e^{3x}\\). [1]",
      "Also \\(\\int\\frac2x\\,dx=2\\ln x\\) when \\(x>0\\). The result is \\(e^{3x}+2\\ln x+C\\). [1]"
    ],
    "answer": "\\(e^{3x}+2\\ln x+C\\)",
    "hint": "Reverse the chain rule for the exponential; integrate 1/x as ln|x|.",
    "misconception": "Integrating e^{3x} normally requires dividing by 3, but the 3 in front cancels it here.",
    "reflection": "What changes about the logarithm if the stated domain is x < 0?"
  },
  {
    "id": "W05-R3",
    "section": "R",
    "title": "A definite trigonometric integral",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "trig integration",
      "definite integrals"
    ],
    "stem": "Angles are measured in radians.",
    "parts": [
      [
        "Evaluate \\(\\displaystyle\\int_0^{\\pi/2}(4\\cos2x+3\\sin x)\\,dx\\).",
        2
      ]
    ],
    "steps": [
      "An antiderivative is \\(2\\sin2x-3\\cos x\\) (account for the factor \\(2\\) inside cosine). [1]",
      "At the upper limit this equals \\(0\\); at the lower limit it equals \\(-3\\). Hence the integral is \\(0-(-3)=3\\). [1]"
    ],
    "answer": "\\(3\\)",
    "hint": "Reverse the chain rule and substitute the two limits into the whole antiderivative.",
    "misconception": "The antiderivative of 4cos(2x) is 2sin(2x), not 4sin(2x).",
    "reflection": "Does the sign of each term of the integrand stay the same throughout the interval?"
  },
  {
    "id": "W05-R4",
    "section": "R",
    "title": "Recognise the inside derivative",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "reverse chain rule",
      "substitution"
    ],
    "stem": "For real \\(x\\), find the general antiderivative.",
    "parts": [
      [
        "\\(\\displaystyle\\int\\frac{2x}{(x^2+5)^3}\\,dx\\).",
        2
      ]
    ],
    "steps": [
      "Choose \\(u=x^2+5\\), so \\(du=2x\\,dx\\) and the integral becomes \\(\\int u^{-3}\\,du\\). [1]",
      "Integrating gives \\(-\\frac12u^{-2}+C=-\\frac1{2(x^2+5)^2}+C\\). [1]"
    ],
    "answer": "\\(-\\frac1{2(x^2+5)^2}+C\\)",
    "hint": "The numerator is exactly the derivative of the expression inside the denominator.",
    "misconception": "Do not use the logarithm rule on a denominator with power 3.",
    "reflection": "Why is the resulting antiderivative defined for every real x?"
  },
  {
    "id": "W05-R5",
    "section": "R",
    "title": "A definite substitution",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "integration by substitution",
      "definite integrals"
    ],
    "stem": "Use an appropriate substitution, changing the limits.",
    "parts": [
      [
        "Evaluate \\(\\displaystyle\\int_0^1 6x\\sqrt{1+3x^2}\\,dx\\) exactly.",
        2
      ]
    ],
    "steps": [
      "Set \\(u=1+3x^2\\), giving \\(du=6x\\,dx\\). The limits \\(x=0,1\\) become \\(u=1,4\\). [1]",
      "The integral is \\(\\int_1^4u^{1/2}\\,du=\\left[\\frac23u^{3/2}\\right]_1^4=\\frac23(8-1)=\\frac{14}{3}\\). [1]"
    ],
    "answer": "\\(\\frac{14}{3}\\)",
    "hint": "Substitute the entire expression under the root, and change both bounds.",
    "misconception": "Do not change the variable to u but continue using the old x-limits.",
    "reflection": "Can the answer be checked by differentiating (2/3)(1+3x²)^{3/2}?"
  },
  {
    "id": "W05-R6",
    "section": "R",
    "title": "A logarithm in a product",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "integration by parts",
      "logarithms"
    ],
    "stem": "Assume \\(x>0\\).",
    "parts": [
      [
        "Find \\(\\displaystyle\\int x\\ln x\\,dx\\) using integration by parts.",
        2
      ]
    ],
    "steps": [
      "Select \\(u=\\ln x\\) and \\(dv=x\\,dx\\), so \\(du=dx/x\\) and \\(v=x^2/2\\). [1]",
      "Then \\(\\int x\\ln x\\,dx=\\frac{x^2}{2}\\ln x-\\int\\frac{x}{2}\\,dx=\\frac{x^2}{2}\\ln x-\\frac{x^2}{4}+C\\). [1]"
    ],
    "answer": "\\(\\frac{x^2}{2}\\ln x-\\frac{x^2}{4}+C\\)",
    "hint": "Let the logarithm be u because differentiating it makes the product simpler.",
    "misconception": "The integration-by-parts formula subtracts ∫v du; it is not a second product.",
    "reflection": "Why is there a restriction x > 0?"
  },
  {
    "id": "W05-R7",
    "section": "R",
    "title": "Separate partial fractions",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "partial fractions",
      "logarithms"
    ],
    "stem": "The denominator has two distinct linear factors.",
    "parts": [
      [
        "Find \\(\\displaystyle\\int\\frac{3x+5}{(x+1)(x+2)}\\,dx\\).",
        2
      ]
    ],
    "steps": [
      "Write \\(\\frac{3x+5}{(x+1)(x+2)}=\\frac{2}{x+1}+\\frac{1}{x+2}\\) by matching coefficients. [1]",
      "Integrate each term: \\(2\\ln|x+1|+\\ln|x+2|+C\\) on any interval that avoids \\(x=-1,-2\\). [1]"
    ],
    "answer": "\\(2\\ln|x+1|+\\ln|x+2|+C\\)",
    "hint": "Decompose A/(x+1) + B/(x+2); evaluate at convenient roots.",
    "misconception": "Logarithmic antiderivatives need absolute values when the domain is not restricted to positive arguments.",
    "reflection": "What is the quickest way to check the decomposition without fully expanding?"
  },
  {
    "id": "W05-R8",
    "section": "R",
    "title": "Area versus signed integral",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "area between curve and axis",
      "signed integrals"
    ],
    "stem": "The straight line is \\(y=x-1\\) between \\(x=0\\) and \\(x=3\\).",
    "parts": [
      [
        "Find the total area between the line and the \\(x\\)-axis over this interval.",
        2
      ]
    ],
    "steps": [
      "The line crosses the axis at \\(x=1\\). The curve is negative on \\([0,1]\\) and positive on \\([1,3]\\), so split the geometric area there. [1]",
      "The two triangular areas are \\(\\frac12(1)(1)=\\frac12\\) and \\(\\frac12(2)(2)=2\\), giving \\(\\frac52\\) square units. [1]"
    ],
    "answer": "\\(\\frac52\\)",
    "hint": "Split the region at the zero so negative signed area cannot cancel positive area.",
    "misconception": "A single definite integral can return signed area rather than the total geometric area.",
    "reflection": "What value would the single integral from 0 to 3 return instead?"
  },
  {
    "id": "W05-R9",
    "section": "R",
    "title": "Area under a translated parabola",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "area under a curve",
      "definite integrals"
    ],
    "stem": "The region under \\(y=(x+1)^2\\) and above the \\(x\\)-axis is bounded by \\(x=0\\) and \\(x=2\\).",
    "parts": [
      [
        "Calculate its exact area.",
        2
      ]
    ],
    "steps": [
      "The required area is \\(A=\\int_0^2(x+1)^2\\,dx\\) because \\(y>0\\) throughout the interval. [1]",
      "Thus \\(A=\\left[\\frac{(x+1)^3}{3}\\right]_0^2=\\frac{27-1}{3}=\\frac{26}{3}\\) square units. [1]"
    ],
    "answer": "\\(\\frac{26}{3}\\text{ square units}\\)",
    "hint": "Integrate the given positive function between the two vertical boundaries.",
    "misconception": "Area under a curve comes from integrating y, not squaring the ordinate as in a different geometric formula.",
    "reflection": "How does the area change if the upper x-limit increases from 2 to 3?"
  },
  {
    "id": "W05-R10",
    "section": "R",
    "title": "Recognise a limit of a sum",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "limit of a sum",
      "definite integrals"
    ],
    "stem": "The following expression is defined for positive integers \\(n\\).",
    "parts": [
      [
        "Evaluate \\(\\displaystyle\\lim_{n\\to\\infty}\\sum_{r=1}^{n}\\frac3n\\left(1+\\frac{3r}{n}\\right)^2\\).",
        2
      ]
    ],
    "steps": [
      "Recognise the right-endpoint sum with \\(\\Delta x=\\frac3n\\) and \\(x_r=\\frac{3r}{n}\\). Its limit is \\(\\int_0^3(1+x)^2\\,dx\\). [1]",
      "Thus \\(\\left[\\frac{(1+x)^3}{3}\\right]_0^3=\\frac{64-1}{3}=21\\). [1]"
    ],
    "answer": "\\(21\\)",
    "hint": "Look for Δx, the width of each rectangle, and recognise the sampled input xᵣ.",
    "misconception": "The upper integration bound is 3, not n; the rectangles span a fixed interval as n grows.",
    "reflection": "Would left endpoints produce a different limit for this continuous function?"
  }
];
