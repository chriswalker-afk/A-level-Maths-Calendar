export const week07PureProblems = [
  {
    "id": "W07-P1",
    "section": "P",
    "title": "A logarithmic equation with a hidden invalid branch",
    "marks": 8,
    "minutes": 21,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "logarithmic equations",
      "domain restrictions",
      "quadratic equations",
      "solution checking"
    ],
    "stem": "A real number \\(x\\) satisfies \\(\\ln(x-2)+\\ln(x+4)=\\ln(2x)\\).",
    "parts": [
      [
        "Find the restriction on \\(x\\) imposed by all three logarithms.",
        2
      ],
      [
        "Combine the logarithms and form a polynomial equation.",
        3
      ],
      [
        "Solve the polynomial exactly.",
        2
      ],
      [
        "Give the solution of the original logarithmic equation, explaining which algebraic root must be rejected.",
        1
      ]
    ],
    "hint": "Before combining logs, require all three arguments to be positive. Once combined, equality of logarithms means equality of their positive arguments.",
    "steps": [
      "For the logarithms to be defined, \\(x-2>0\\), \\(x+4>0\\) and \\(2x>0\\). Together these require \\(x>2\\). [2]",
      "Using the sum law, \\(\\ln[(x-2)(x+4)]=\\ln(2x)\\). Because both arguments are positive, \\((x-2)(x+4)=2x\\). Expanding gives \\(x^2+2x-8=2x\\), or \\(x^2-8=0\\). [3]",
      "Therefore \\(x=\\pm\\sqrt8=\\pm2\\sqrt2\\). [2]",
      "Only \\(x=2\\sqrt2>2\\) is in the logarithms' common domain; \\(-2\\sqrt2\\) is extraneous. [1]"
    ],
    "answer": "\\(x=2\\sqrt2\\) (reject \\(-2\\sqrt2\\)).",
    "misconception": "Solving the polynomial is not the end: exponentiating after combining logarithms may introduce candidates outside the original domain.",
    "reflection": "Why must the domain restriction be applied before invoking the logarithm laws?"
  },
  {
    "id": "W07-P2",
    "section": "P",
    "title": "Find a power law by transforming the axes",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "log–log linearisation",
      "power-law model",
      "parameter estimation",
      "interpolation and extrapolation",
      "inequalities"
    ],
    "stem": "A positive-valued quantity is modelled as \\(y=Ax^b\\), where \\(A>0\\), \\(x>0\\) and \\(b\\) is real. Three measurements are \\((x,y)=(1,6),(4,48),(9,162)\\). Assume these measurements are exact for the purpose of parameter determination, but do not assume the model holds outside the observed range.",
    "parts": [
      [
        "Show how to obtain a straight-line relation by transforming both axes, and identify its gradient and intercept.",
        2
      ],
      [
        "Use the first two observations to determine \\(A\\) and \\(b\\) exactly.",
        3
      ],
      [
        "Verify the third measurement and predict \\(y\\) when \\(x=16\\).",
        2
      ],
      [
        "Find the exact boundary value of \\(x\\) above which the model predicts \\(y>300\\). State whether the boundary lies within the measured range and what this means for the prediction.",
        3
      ]
    ],
    "hint": "Taking natural logarithms gives a line in \\(\\ln x\\) and \\(\\ln y\\). Note that the measurement at \\(x=1\\) makes the intercept especially straightforward.",
    "steps": [
      "Take logarithms to obtain \\(\\ln y=\\ln A+b\\ln x\\). A graph of \\(\\ln y\\) against \\(\\ln x\\) has gradient \\(b\\) and vertical intercept \\(\\ln A\\). [2]",
      "From \\(x=1,y=6\\), \\(A=6\\). From \\(x=4,y=48\\), \\(48=6(4^b)\\) so \\(4^b=8\\). Hence \\(b=\\frac{\\ln8}{\\ln4}=\\frac32\\). [3]",
      "At \\(x=9\\), the model gives \\(y=6(9)^{3/2}=6(27)=162\\), confirming the third point. At \\(x=16\\), \\(y=6(16)^{3/2}=6(64)=384\\). [2]",
      "Solve \\(6x^{3/2}>300\\), or \\(x^{3/2}>50\\). Since \\(x>0\\), \\(x>50^{2/3}\\) (approximately \\(13.572\\)). This exceeds the measured maximum \\(x=9\\), so it is an extrapolated prediction; extra evidence is needed before trusting the crossing in practice. [3]"
    ],
    "answer": "\\(y=6x^{3/2}\\); predicted \\(y(16)=384\\); \\(y>300\\) when \\(x>50^{2/3}\\) (extrapolation).",
    "misconception": "For a power law, a plot of ln(y) versus x is not generally linear; the horizontal coordinate must also be transformed to ln(x).",
    "reflection": "If the measurements contained uncertainty, how might you estimate the best-fitting line differently?"
  },
  {
    "id": "W07-P3",
    "section": "P",
    "title": "A separable equation that determines a tangent",
    "marks": 12,
    "minutes": 24,
    "ao": {
      "AO2": 10,
      "AO3": 2
    },
    "topics": [
      "separable differential equations",
      "initial conditions",
      "branches and domain",
      "second derivative",
      "tangent equations"
    ],
    "stem": "For \\(x\\ge0\\), a differentiable function \\(y(x)>-1\\) satisfies \\(\\frac{dy}{dx}=\\frac{2x}{y+1}\\) and \\(y(0)=1\\).",
    "parts": [
      [
        "Separate variables and obtain a relation between \\(x\\) and \\(y\\) involving an arbitrary constant.",
        3
      ],
      [
        "Use the initial condition and the restriction on \\(y\\) to derive an explicit formula for \\(y(x)\\).",
        3
      ],
      [
        "Show that \\(\\frac{d^2y}{dx^2}>0\\) throughout the given domain.",
        3
      ],
      [
        "Find the point where the tangent has gradient \\(1\\) and give the exact equation of this tangent.",
        3
      ]
    ],
    "hint": "Integrate \\((y+1)\\,dy=2x\\,dx\\). The condition \\(y>-1\\) selects the positive square-root branch.",
    "steps": [
      "Separating gives \\((y+1)\\,dy=2x\\,dx\\) and integrating gives \\(\\frac12(y+1)^2=x^2+C\\). Equivalently \\((y+1)^2=2x^2+C_1\\). [3]",
      "At \\(x=0,y=1\\), \\((1+1)^2=4\\), so \\((y+1)^2=2x^2+4\\). As \\(y>-1\\), take the positive root: \\(y(x)=-1+\\sqrt{2x^2+4}\\). [3]",
      "Differentiate: \\(y'(x)=\\frac{2x}{\\sqrt{2x^2+4}}\\). Another derivative gives \\(y''(x)=2(2x^2+4)^{-1/2}-4x^2(2x^2+4)^{-3/2}=\\frac8{(2x^2+4)^{3/2}}>0\\). [3]",
      "Set \\(\\frac{2x}{\\sqrt{2x^2+4}}=1\\). With \\(x\\ge0\\), squaring yields \\(4x^2=2x^2+4\\), hence \\(x=\\sqrt2\\). Here \\(y=-1+2\\sqrt2\\). The tangent with gradient 1 is \\(y-(-1+2\\sqrt2)=x-\\sqrt2\\), or \\(y=x+\\sqrt2-1\\). [3]"
    ],
    "answer": "\\(y=-1+\\sqrt{2x^2+4}\\); convex since \\(y''>0\\); tangent \\(y=x+\\sqrt2-1\\) at \\((\\sqrt2,2\\sqrt2-1)\\).",
    "misconception": "After taking the square root of a separated solution, the initial value and domain determine which branch is valid. Squaring the tangent condition can also create a sign error unless x≥0 is used.",
    "reflection": "Why does the positive second derivative make the tangent gradient increase even though it never reaches the limiting value √2?"
  }
];
