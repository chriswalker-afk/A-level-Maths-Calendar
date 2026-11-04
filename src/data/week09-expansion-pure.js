export const week09ExpansionPure = [
  {
    "id": "W09-P4",
    "section": "P",
    "title": "An inverse function with a hidden inequality",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "rational functions",
      "inverse and range",
      "fixed points",
      "rational inequalities"
    ],
    "stem": "For \\(x\\ne3\\), define \\(f(x)=\\frac{2x+1}{x-3}\\). A student assumes that because the derivative is always negative, the function is decreasing on its entire domain, even across the asymptote.",
    "parts": [
      [
        "Find \\(f^{-1}(x)\\) and state the domain and range of \\(f\\).",
        3
      ],
      [
        "Find the exact fixed points satisfying \\(f(x)=x\\).",
        2
      ],
      [
        "Differentiate and explain why the sign of the derivative does not imply global decrease across \\(x=3\\).",
        2
      ],
      [
        "Solve the strict inequality \\(f(x)>x\\), giving an exact interval answer.",
        3
      ]
    ],
    "hint": "Rearrange the inverse algebraically. For the inequality, treat both numerator roots and the excluded denominator value as critical points.",
    "steps": [
      "Rearrange \\(y(x-3)=2x+1\\) to give \\(x(y-2)=3y+1\\). [1] Therefore \\(f^{-1}(x)=\\frac{3x+1}{x-2}\\). [1] The domain of f excludes \\(x=3\\), and its range excludes \\(y=2\\). [1]",
      "Rearrange \\(2x+1=x(x-3)\\) to \\(x^2-5x-1=0\\). [1] Thus the fixed points are \\(x=\\frac{5\\pm\\sqrt{29}}2\\). [1]",
      "The quotient rule gives \\(f'(x)=-7/(x-3)^2<0\\) everywhere f is defined. [1] It is decreasing separately on \\((-\\infty,3)\\) and \\((3,\\infty)\\), but these are disconnected by a vertical asymptote, so comparisons across the gap need not respect one decreasing order. [1]",
      "Rearrange to \\(f(x)-x=\\frac{-x^2+5x+1}{x-3}>0\\). [1] The numerator changes sign at \\(r_{\\pm}=(5\\pm\\sqrt{29})/2\\), while the denominator changes sign at 3. [1] A sign chart gives \\(x<r_-\\) or \\(3<x<r_+\\); the roots and pole are excluded. [1]"
    ],
    "answer": "Inverse \\((3x+1)/(x-2)\\); fixed points \\((5\\pm\\sqrt{29})/2\\); \\(f(x)>x\\) for \\(x<(5-\\sqrt{29})/2\\) or \\(3<x<(5+\\sqrt{29})/2\\).",
    "misconception": "A function can decrease on each separate interval of its domain without being globally decreasing across a discontinuity.",
    "reflection": "How does the domain gap affect both the inverse and the sign-chart argument?"
  },
  {
    "id": "W09-P5",
    "section": "P",
    "title": "A trigonometric curve with exact areas but awkward turning points",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "trigonometric identities",
      "stationary points",
      "exact signed area",
      "curve symmetry"
    ],
    "stem": "A periodic response is \\(f(x)=\\sin2x+\\cos x\\) on \\(0\\le x\\le\\pi\\). The zero, extrema and area must be found without a graphing calculator.",
    "parts": [
      [
        "Factorise \\(f(x)\\) using an identity and find every zero on the interval.",
        2
      ],
      [
        "Find the stationary values of \\(x\\) in exact inverse-trigonometric form.",
        3
      ],
      [
        "Classify both stationary points and explain why the curve's positive and negative lobes have equal area.",
        3
      ],
      [
        "Calculate the area above the axis and the signed integral on \\([0,\\pi]\\).",
        2
      ]
    ],
    "hint": "First write f as cos x(2 sin x+1), then put s=sin x in the stationary-point equation.",
    "steps": [
      "Use \\(\\sin2x=2\\sin x\\cos x\\) to write \\(f(x)=\\cos x(2\\sin x+1)\\). [1] Since \\(\\sin x\\ge0\\) on the interval, the only zero is \\(x=\\pi/2\\). [1]",
      "Differentiate to \\(f'(x)=2\\cos2x-\\sin x\\). [1] Put \\(s=\\sin x\\) to obtain \\(4s^2+s-2=0\\), so \\(s=(-1+\\sqrt{33})/8\\) is the only admissible root. [1] If \\(\\theta=\\arcsin((-1+\\sqrt{33})/8)\\), the two stationary values are \\(x=\\theta\\) and \\(x=\\pi-\\theta\\). [1]",
      "The derivative is positive near \\(x=0\\), negative at \\(x=\\pi/2\\), and positive near \\(x=\\pi\\); thus \\(\\theta\\) is a maximum and \\(\\pi-\\theta\\) is a minimum. [1] The relation \\(f(\\pi-x)=-f(x)\\) follows from the trigonometric identities. [1] This antisymmetry about \\(x=\\pi/2\\) makes the two unsigned lobe areas equal. [1]",
      "Integrate: \\(\\int_0^{\\pi/2}(\\sin2x+\\cos x)\\,dx=[-\\frac12\\cos2x+\\sin x]_0^{\\pi/2}=2\\). [1] The negative lobe contributes \\(-2\\), so the signed integral across \\([0,\\pi]\\) is 0. [1]"
    ],
    "answer": "Only zero \\(x=\\pi/2\\); stationary points \\(\\theta,\\pi-\\theta\\) with \\(\\theta=\\arcsin((\\sqrt{33}-1)/8)\\); positive area 2, total signed integral 0.",
    "misconception": "Equal positive and negative areas cancel in a signed integral; that does not mean the total geometric area is zero.",
    "reflection": "Which identity gives symmetry, and which calculus step establishes the precise positive area?"
  },
  {
    "id": "W09-P6",
    "section": "P",
    "title": "A partial fraction hides a global lower bound",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 6,
      "AO3": 2
    },
    "topics": [
      "rational algebra",
      "partial fractions",
      "calculus minimisation",
      "definite integral"
    ],
    "stem": "For positive \\(x\\), consider the dimensionless response \\(R(x)=\\frac{x^2+1}{x(x+1)}\\). Determine its global least possible value and its exact accumulated response.",
    "parts": [
      [
        "Show that \\(R(x)=1+\\frac1x-\\frac2{x+1}\\).",
        3
      ],
      [
        "Differentiate and find the only stationary point on \\(x>0\\).",
        3
      ],
      [
        "Prove the global bound \\(R(x)\\ge2(\\sqrt2-1)\\) and identify equality.",
        2
      ],
      [
        "Evaluate \\(\\int_1^2R(x)\\,dx\\) exactly.",
        2
      ]
    ],
    "hint": "Algebraic division comes before partial fractions; the resulting form simplifies both derivative and integral.",
    "steps": [
      "Divide numerator by denominator: \\(x^2+1=x(x+1)+(1-x)\\). [1] Seek \\((1-x)/(x(x+1))=A/x+B/(x+1)\\). [1] Solving \\(A=1,B=-2\\) gives \\(R(x)=1+1/x-2/(x+1)\\). [1]",
      "Using the decomposition, \\(R'(x)=-1/x^2+2/(x+1)^2\\). [1] The equation \\(2x^2=(x+1)^2\\) yields \\(\\sqrt2x=x+1\\) for positive x. [1] Therefore \\(x=1+\\sqrt2\\) is the only stationary point. [1]",
      "The derivative is negative for small positive x and positive for large x, changing sign from − to + at \\(1+\\sqrt2\\). [1] Substitution gives \\(R(1+\\sqrt2)=2\\sqrt2-2\\), proving the sharp bound. [1]",
      "Integrate \\(1+1/x-2/(x+1)\\) to \\(x+\\ln x-2\\ln(x+1)\\). [1] Hence \\(\\int_1^2R(x)\\,dx=1+\\ln(8/9)\\). [1]"
    ],
    "answer": "Minimum \\(2\\sqrt2-2\\) at \\(x=1+\\sqrt2\\); exact integral \\(1+\\ln(8/9)\\).",
    "misconception": "Do not discard the leading 1 when decomposing a rational expression with equal numerator and denominator degrees.",
    "reflection": "How does the same algebraic reformulation make two different calculus techniques easier?"
  },
  {
    "id": "W09-P7",
    "section": "P",
    "title": "Parametric motion and the danger of signed area",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "parametric differentiation",
      "stationary tangents",
      "parametric integration",
      "geometric area"
    ],
    "stem": "A curve is described by \\(x=t^2+1,\\ y=t^3-3t\\) for \\(0\\le t\\le2\\). An analyst needs the total area between the curve and the horizontal axis, not merely the signed integral.",
    "parts": [
      [
        "Derive \\(dy/dx\\) for \\(t>0\\) and find the horizontal tangent.",
        3
      ],
      [
        "Explain why the tangent at \\(t=0\\) is vertical rather than horizontal.",
        2
      ],
      [
        "Compute the signed integral \\(\\int y\\,dx\\) over \\(0\\le t\\le2\\).",
        3
      ],
      [
        "Find the total geometric area exactly, carefully splitting at the axis crossing.",
        2
      ]
    ],
    "hint": "Parametric area uses y(dx/dt), and the absolute area requires splitting where y changes sign.",
    "steps": [
      "Differentiate \\(dx/dt=2t,\\ dy/dt=3t^2-3\\). [1] Thus \\(dy/dx=3(t^2-1)/(2t)\\), for \\(t>0\\). [1] A horizontal tangent occurs at \\(t=1\\), namely \\((x,y)=(2,-2)\\). [1]",
      "At \\(t=0\\), \\(dx/dt=0\\) but \\(dy/dt=-3\\ne0\\). [1] Therefore the curve has a vertical tangent at \\((1,0)\\). [1]",
      "Using the parameter, \\(\\int y\\,dx=\\int_0^2(t^3-3t)(2t)\\,dt\\). [1] Its antiderivative is \\(F(t)=\\frac25t^5-2t^3\\). [1] So \\(F(2)-F(0)=-16/5\\). [1]",
      "Since \\(y=t(t^2-3)\\), it changes sign at \\(t=\\sqrt3\\) within the interval. [1] The unsigned area is \\(-F(\\sqrt3)+[F(2)-F(\\sqrt3)]=(24\\sqrt3-16)/5\\). [1]"
    ],
    "answer": "Horizontal tangent \\((2,-2)\\); signed integral \\(-16/5\\); geometric area \\((24\\sqrt3-16)/5\\approx5.11384\\).",
    "misconception": "Using the signed area formula without splitting where the curve crosses the axis causes positive and negative regions to cancel.",
    "reflection": "Why does finding dy/dx not by itself determine the correct integration limits for the geometric area?"
  }
];
