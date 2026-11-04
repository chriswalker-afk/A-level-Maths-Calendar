export const week08ExpansionPure = [
  {
    "id": "W08-P4",
    "section": "P",
    "title": "Two roots despite only one minimum",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "root existence",
      "stationary-point analysis",
      "Newton–Raphson",
      "exponential equations"
    ],
    "stem": "A calibration error is modelled by \\(f(x)=e^x-3x\\) for \\(x\\ge0\\). A technician assumes the graph can cross the horizontal axis only once.",
    "parts": [
      [
        "Determine the stationary point of \\(f\\) and classify it.",
        3
      ],
      [
        "Prove that \\(f(x)=0\\) has precisely two nonnegative roots and locate each in an interval of width one.",
        2
      ],
      [
        "Apply Newton–Raphson from \\(x_0=1.5\\) for two iterations to find the larger root.",
        3
      ],
      [
        "Explain why starting Newton's method exactly at \\(x_0=\\ln3\\) is not legitimate.",
        2
      ]
    ],
    "hint": "Analyse the derivative before iterating; Newton's formula does not itself tell you how many roots exist.",
    "steps": [
      "The derivative is \\(f'(x)=e^x-3\\). [1] It vanishes at \\(x=\\ln3\\). [1] Since \\(f''(x)=e^x>0\\), this is the unique minimum, with value \\(3-3\\ln3<0\\). [1]",
      "We have \\(f(0)=1>0\\), \\(f(1)=e-3<0\\), \\(f(2)=e^2-6>0\\). [1] The function decreases before \\(\\ln3\\) and increases afterwards; hence there is exactly one root in \\((0,1)\\) and one in \\((1,2)\\). [1]",
      "The recurrence is \\(x_{n+1}=x_n-\\frac{e^{x_n}-3x_n}{e^{x_n}-3}\\). [1] It gives \\(x_1=1.512358\\ldots\\). [1] Then \\(x_2=1.512135\\ldots\\); a further iteration confirms \\(1.51213455\\ldots\\). [1]",
      "At \\(x_0=\\ln3\\), the derivative \\(f'(x_0)=0\\), so the Newton denominator is zero. [1] A horizontal tangent cannot meet the horizontal axis in a finite tangent-intersection update. [1]"
    ],
    "answer": "Two positive roots; larger \\(x\\approx1.512135\\). Newton's method cannot start at \\(x=\\ln3\\).",
    "misconception": "A sign-change bracket can locate roots but does not prove uniqueness without shape or monotonicity information.",
    "reflection": "Why is locating all roots logically separate from improving the numerical value of one of them?"
  },
  {
    "id": "W08-P5",
    "section": "P",
    "title": "A numerical area with a guaranteed error direction",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 6,
      "AO3": 2
    },
    "topics": [
      "trapezium rule",
      "integration",
      "concavity",
      "signed error"
    ],
    "stem": "A curved profile has height \\(y=\\sqrt{1+x}\\) above a horizontal axis for \\(0\\le x\\le3\\). An engineer estimates its cross-sectional area using two equal-width trapezia.",
    "parts": [
      [
        "State the strip width and exact ordinates for the composite trapezium rule.",
        2
      ],
      [
        "Find the trapezium estimate exactly and to six decimal places.",
        3
      ],
      [
        "Calculate the true area and the signed estimation error.",
        3
      ],
      [
        "Use a second derivative to prove that the error direction was predictable.",
        2
      ]
    ],
    "hint": "Think of the two trapezia as chords of the curve. A negative second derivative controls which side of each chord the graph occupies.",
    "steps": [
      "The width is \\(h=(3-0)/2=3/2\\). [1] The ordinates at \\(x=0,3/2,3\\) are \\(1,\\sqrt{5/2},2\\). [1]",
      "Apply \\(T_2=\\frac h2[y_0+2y_1+y_2]\\). [1] Thus \\(T_2=\\frac34(3+2\\sqrt{5/2})\\). [1] Numerically \\(T_2\\approx4.621708\\). [1]",
      "The exact integral is \\(I=\\int_0^3(1+x)^{1/2}\\,dx=\\left[\\frac23(1+x)^{3/2}\\right]_0^3\\). [1] It equals \\(14/3\\). [1] So \\(T_2-I\\approx-0.0449584\\), an underestimate. [1]",
      "The second derivative is \\(y''=-\\frac1{4(1+x)^{3/2}}<0\\). [1] A concave-down curve lies above each straight secant (trapezium top), so the trapezium rule underestimates its area. [1]"
    ],
    "answer": "\\(T_2=\\frac34(3+2\\sqrt{5/2})\\approx4.621708\\), \\(I=14/3\\); signed error about \\(-0.0449584\\).",
    "misconception": "Do not assume trapezia always overestimate: concavity controls the sign when it is consistent across the interval.",
    "reflection": "How could a numerical estimate be close but still systematically biased in one direction?"
  },
  {
    "id": "W08-P6",
    "section": "P",
    "title": "A double root defeats a sign-change test",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "polynomial roots",
      "multiplicity",
      "Newton–Raphson",
      "error analysis"
    ],
    "stem": "A root-finding program studies \\(f(x)=(x-2)^2(x+1)\\). It uses sign changes to detect roots, then applies Newton–Raphson with initial value \\(x_0=3\\).",
    "parts": [
      [
        "Find the real roots, identify their multiplicities and derive \\(f'(x)\\).",
        3
      ],
      [
        "Explain why checking \\(f(1)\\) and \\(f(3)\\) for opposite signs misses the root at 2.",
        2
      ],
      [
        "Perform two Newton iterations from \\(x_0=3\\) and give both results to six decimal places.",
        3
      ],
      [
        "Explain why the iteration approaches the root slowly and cannot be evaluated at that root.",
        2
      ]
    ],
    "hint": "Write f in factored form; an even-multiplicity factor explains the missing sign change, while f' appears in Newton's denominator.",
    "steps": [
      "Factorisation already shows \\(x=2\\) is a double root and \\(x=-1\\) is simple. [1] Expanding yields \\(f(x)=x^3-3x^2+4\\). [1] Hence \\(f'(x)=3x(x-2)\\). [1]",
      "Here \\(f(1)=2>0\\) and \\(f(3)=4>0\\). [1] The squared factor makes \\(f(x)\\ge0\\) near \\(x=2\\), so the graph touches the axis without crossing it; a sign-change test can miss an even-multiplicity root. [1]",
      "Newton's formula is \\(x_{n+1}=x_n-\\frac{(x_n-2)^2(x_n+1)}{3x_n(x_n-2)}\\) for \\(x_n\\ne0,2\\). [1] It gives \\(x_1=23/9=2.555556\\ldots\\). [1] The second iterate is \\(x_2=1427/621\\approx2.297907\\). [1]",
      "At the double root \\(x=2\\), both \\(f(2)=0\\) and \\(f'(2)=0\\). [1] Newton's update is undefined there and its usual rapid simple-root convergence does not apply: the iteration typically reduces error approximately by a factor of two near this double root. [1]"
    ],
    "answer": "\\(x=-1\\) simple; \\(x=2\\) double. Newton iterates \\(2.555556,2.297907\\).",
    "misconception": "A root can exist without a change of sign. A vanishing derivative at the root can also slow Newton convergence.",
    "reflection": "What alternative root-detection method would reveal a repeated root more reliably?"
  },
  {
    "id": "W08-P7",
    "section": "P",
    "title": "A trigonometric threshold needs a numerical root",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 6,
      "AO3": 2
    },
    "topics": [
      "trigonometric inequalities",
      "stationary analysis",
      "Newton–Raphson",
      "exact area"
    ],
    "stem": "For \\(0\\le x\\le\\pi\\), let \\(f(x)=\\sin x-\\frac x2\\). A model asks when the curved response first falls back to the linear threshold after leaving the origin.",
    "parts": [
      [
        "Find the only interior stationary point and establish its classification.",
        2
      ],
      [
        "Prove that apart from \\(x=0\\), exactly one root lies in \\((\\pi/3,\\pi)\\).",
        3
      ],
      [
        "Starting from \\(x_0=2\\), perform two Newton steps and estimate \\(\\alpha\\) to four decimals.",
        3
      ],
      [
        "Express exactly in terms of \\(\\alpha\\) the area trapped between the two curves from 0 to \\(\\alpha\\).",
        2
      ]
    ],
    "hint": "Use the first derivative to prove there is only one non-zero intersection before estimating its location.",
    "steps": [
      "Differentiate to obtain \\(f'(x)=\\cos x-1/2\\). [1] It changes from positive to negative at \\(x=\\pi/3\\), so this point is a maximum. [1]",
      "We know \\(f(0)=0\\) and \\(f(\\pi/3)=\\sqrt3/2-\\pi/6>0\\). [1] At the right endpoint \\(f(\\pi)=-\\pi/2<0\\). [1] Since \\(f'(x)<0\\) for \\(\\pi/3<x\\le\\pi\\), continuity gives exactly one more root \\(\\alpha\\in(\\pi/3,\\pi)\\). [1]",
      "The recurrence is \\(x_{n+1}=x_n-\\frac{\\sin x_n-x_n/2}{\\cos x_n-1/2}\\). [1] It gives \\(x_1=1.900995594\\ldots\\) and \\(x_2=1.895511645\\ldots\\). [1] Another step yields \\(\\alpha=1.895494267\\ldots\\), hence \\(\\alpha\\approx1.8955\\). [1]",
      "The response exceeds the line between the roots, so \\(A=\\int_0^\\alpha(\\sin x-x/2)\\,dx\\). [1] Evaluate to obtain \\(A=1-\\cos\\alpha-\\alpha^2/4\\). [1]"
    ],
    "answer": "Unique non-zero crossing \\(\\alpha\\approx1.8955\\); area \\(1-\\cos\\alpha-\\alpha^2/4\\).",
    "misconception": "An approximation to a crossing does not prove its uniqueness; give a monotonicity argument first.",
    "reflection": "Why can a geometric area depend on a numerical threshold even when its integral has an exact antiderivative?"
  }
];
