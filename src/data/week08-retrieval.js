export const week08Retrieval = [
  {
    "id": "W08-R1",
    "section": "R",
    "title": "Locate a change of sign",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "change of sign",
      "continuity"
    ],
    "stem": "Consider \\(f(x)=x^3-x-1\\).",
    "parts": [
      [
        "Show that \\(f\\) has a root in \\((1.3,1.4)\\).",
        2
      ]
    ],
    "hint": "Evaluate the function at both endpoints and use continuity.",
    "steps": [
      "At \\(x=1.3\\), \\(f(1.3)=1.3^3-1.3-1=-0.103<0\\). [1]",
      "At \\(x=1.4\\), \\(f(1.4)=1.4^3-1.4-1=0.344>0\\). As the polynomial is continuous, the intermediate value theorem guarantees a root strictly between them. [1]"
    ],
    "answer": "At least one root lies in \\((1.3,1.4)\\), since \\(-0.103<0<0.344\\).",
    "misconception": "A sign change plus continuity proves existence, but not by itself uniqueness.",
    "reflection": "What extra property could establish that there is exactly one root in this interval?"
  },
  {
    "id": "W08-R2",
    "section": "R",
    "title": "A false root bracket",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "continuity",
      "limitations of sign-change tests"
    ],
    "stem": "A function is given by \\(f(x)=\\frac{1}{x-2}\\) on its real domain.",
    "parts": [
      [
        "Explain why the opposite signs of \\(f(1)\\) and \\(f(3)\\) do not prove a root between them.",
        2
      ]
    ],
    "hint": "Check the function's continuity on the entire closed interval.",
    "steps": [
      "The endpoint values are \\(f(1)=-1\\) and \\(f(3)=1\\), so their signs differ. [1]",
      "But \\(f\\) is undefined at \\(x=2\\); the continuous-function condition fails, and \\(1/(x-2)\\) can never equal zero. [1]"
    ],
    "answer": "No root is guaranteed; \\(x=2\\) is a discontinuity, not a zero.",
    "misconception": "Do not apply the sign-change test to a function with a pole or discontinuity inside the proposed bracket.",
    "reflection": "How does the graph cross from negative values to positive without touching the axis?"
  },
  {
    "id": "W08-R3",
    "section": "R",
    "title": "Two fixed-point steps",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "fixed-point iteration",
      "calculator fluency"
    ],
    "stem": "Use \\(x_{n+1}=\\cos x_n\\) (angles in radians), starting from \\(x_0=0.5\\).",
    "parts": [
      [
        "Find \\(x_1\\) and \\(x_2\\) to four decimal places.",
        2
      ]
    ],
    "hint": "Substitute the latest result into cosine each time, retaining unrounded calculator values.",
    "steps": [
      "The first iterate is \\(x_1=\\cos(0.5)=0.877582\\ldots\\approx0.8776\\). [1]",
      "The second is \\(x_2=\\cos(0.877582\\ldots)=0.639012\\ldots\\approx0.6390\\). [1]"
    ],
    "answer": "\\(x_1=0.8776,\\quad x_2=0.6390\\).",
    "misconception": "Ensure radians mode is used; rounding x1 to four places before computing x2 can introduce avoidable error.",
    "reflection": "Why do the values oscillate rather than approach the fixed point from one side?"
  },
  {
    "id": "W08-R4",
    "section": "R",
    "title": "Predict staircase behaviour",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "cobweb and staircase diagrams",
      "fixed point stability"
    ],
    "stem": "Consider the iteration \\(x_{n+1}=g(x_n)\\) with \\(g(x)=3-\\frac{x}{2}\\), started near its fixed point.",
    "parts": [
      [
        "Find its fixed point and explain whether nearby iterates converge or diverge.",
        2
      ]
    ],
    "hint": "Solve \\(x=g(x)\\) and inspect the magnitude of the gradient of \\(g\\).",
    "steps": [
      "The fixed point solves \\(x=3-\\frac x2\\), giving \\(x=2\\). [1]",
      "Since \\(g'(x)=-\\frac12\\) and \\(|g'(2)|<1\\), nearby iterates converge, alternating about \\(2\\). [1]"
    ],
    "answer": "Fixed point \\(2\\); convergent with alternating steps.",
    "misconception": "Negative gradient does not mean divergence: it creates oscillation, while its magnitude controls local convergence.",
    "reflection": "What would the staircase diagram look like if the gradient were −1.5?"
  },
  {
    "id": "W08-R5",
    "section": "R",
    "title": "One Newton–Raphson update",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "Newton–Raphson",
      "derivatives"
    ],
    "stem": "Let \\(f(x)=x^2-5\\) and start Newton–Raphson at \\(x_0=2\\).",
    "parts": [
      [
        "Find \\(x_1\\) exactly.",
        2
      ]
    ],
    "hint": "Use \\(x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}\\).",
    "steps": [
      "The derivative is \\(f'(x)=2x\\) and \\(f(2)=4-5=-1\\). [1]",
      "Therefore \\(x_1=2-\\frac{-1}{4}=\\frac94\\). [1]"
    ],
    "answer": "\\(x_1=\\frac94=2.25\\).",
    "misconception": "The denominator is the derivative at the current iterate, not the function value or the next iterate.",
    "reflection": "Why might the next step be smaller than the first?"
  },
  {
    "id": "W08-R6",
    "section": "R",
    "title": "When Newton's formula fails",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "Newton–Raphson failure",
      "derivative zeros"
    ],
    "stem": "Let \\(f(x)=x^3-3x+1\\). Newton–Raphson is started at \\(x_0=1\\).",
    "parts": [
      [
        "Explain why the first update is undefined and suggest a valid alternative starting point.",
        2
      ]
    ],
    "hint": "Evaluate \\(f'(1)\\) before dividing by it.",
    "steps": [
      "The derivative is \\(f'(x)=3x^2-3\\), hence \\(f'(1)=0\\). [1]",
      "Newton's update divides by \\(f'(x_0)\\) and is therefore undefined at \\(x_0=1\\). Starting at \\(x_0=2\\) gives \\(f'(2)=9\\ne0\\), so the first update is defined. [1]"
    ],
    "answer": "Start at \\(1\\) is invalid; \\(x_0=2\\) is a valid first-step alternative.",
    "misconception": "A horizontal tangent does not make a Newton update of zero; division by zero makes it undefined.",
    "reflection": "Why can even a defined Newton step still fail to approach the intended root?"
  },
  {
    "id": "W08-R7",
    "section": "R",
    "title": "Two trapezia",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "trapezium rule",
      "definite integrals"
    ],
    "stem": "Approximate \\(\\int_0^2x^2\\,dx\\) with two equal strips using the trapezium rule.",
    "parts": [
      [
        "Find the approximation.",
        2
      ]
    ],
    "hint": "Use ordinates at \\(0,1,2\\) and strip width \\(1\\).",
    "steps": [
      "At the three nodes, \\(y_0=0,\\ y_1=1,\\ y_2=4\\); the width is \\(h=1\\). [1]",
      "The trapezium estimate is \\(T=\\frac h2(y_0+2y_1+y_2)=\\frac12(0+2+4)=3\\). [1]"
    ],
    "answer": "Trapezium estimate \\(3\\) (exact integral \\(8/3\\)).",
    "misconception": "The interior ordinate is counted twice; forgetting the factor 2 changes the approximation.",
    "reflection": "How does the curvature of x² explain the direction of the error?"
  },
  {
    "id": "W08-R8",
    "section": "R",
    "title": "Infer an error direction",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "trapezium error",
      "curve shape"
    ],
    "stem": "On \\(0\\le x\\le1\\), let \\(f(x)=e^{-x}\\).",
    "parts": [
      [
        "Determine whether a trapezium-rule approximation with equal-width strips is above or below the exact area, giving a mathematical reason.",
        2
      ]
    ],
    "hint": "Differentiate twice to identify whether the graph is concave up or down.",
    "steps": [
      "Here \\(f''(x)=e^{-x}>0\\) throughout the interval, so the curve is convex. [1]",
      "Every straight chord between adjacent ordinates lies above the curve, so the trapezium rule gives an overestimate. [1]"
    ],
    "answer": "An overestimate: \\(f''(x)>0\\) and the chord lies above the curve.",
    "misconception": "Decreasing does not automatically imply underestimation; the sign of the second derivative governs chord error.",
    "reflection": "Which error direction would follow from a function with negative second derivative?"
  },
  {
    "id": "W08-R9",
    "section": "R",
    "title": "Interpret a model threshold",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "interpreting roots",
      "exponential synthesis"
    ],
    "stem": "A concentration model is \\(C(t)=30e^{-0.2t}\\) for time \\(t\\ge0\\) in hours.",
    "parts": [
      [
        "Find when \\(C(t)=12\\) to two decimal places and interpret the result.",
        2
      ]
    ],
    "hint": "First isolate the exponential; then take logarithms.",
    "steps": [
      "The equation is \\(e^{-0.2t}=\\frac{12}{30}=0.4\\), giving \\(-0.2t=\\ln0.4\\). [1]",
      "Thus \\(t=\\frac{\\ln(2.5)}{0.2}\\approx4.58\\) hours, when the model first predicts 12 concentration units. [1]"
    ],
    "answer": "Approximately \\(4.58\\) hours after measurement began.",
    "misconception": "Do not report the time without its unit or confuse the threshold concentration with the initial value.",
    "reflection": "Why is an observed reading useful before assuming the model predicts real behaviour accurately?"
  },
  {
    "id": "W08-R10",
    "section": "R",
    "title": "Calibrate an iteration derivative",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "derivative fluency",
      "Newton iteration"
    ],
    "stem": "For \\(f(x)=x^3-2x\\) determine the gradient needed for a Newton iteration at \\(x=1\\).",
    "parts": [
      [
        "Calculate \\(f'(1)\\) and \\(f(1)\\).",
        2
      ]
    ],
    "hint": "Use the power rule before substituting \\(x=1\\).",
    "steps": [
      "Differentiation gives \\(f'(x)=3x^2-2\\), so \\(f'(1)=1\\). [1]",
      "The function value is \\(f(1)=1-2=-1\\). [1]"
    ],
    "answer": "\\(f'(1)=1,\\quad f(1)=-1\\).",
    "misconception": "Newton's method needs both the function and its derivative; they are not interchangeable.",
    "reflection": "What would the first Newton step be if the target equation were f(x)=0?"
  }
];
