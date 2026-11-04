export const week07ExpansionPure = [
  {
    "id": "W07-P4",
    "section": "P",
    "title": "A logarithmic equation with two distinct branches",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "logarithmic equations",
      "stationary-point reasoning",
      "number of roots",
      "Newton–Raphson"
    ],
    "stem": "For a positive parameter \\(a\\), consider \\(F_a(x)=\\ln x-a+a/x\\) on \\(x>0\\). The equation \\(F_a(x)=0\\) always has the obvious solution \\(x=1\\), but that may not be the only solution.",
    "parts": [
      [
        "Differentiate and determine the unique minimum of \\(F_a\\) for \\(a>0\\).",
        3
      ],
      [
        "For \\(a=2\\), prove that there is exactly one further root, and locate it in \\((4,5)\\).",
        2
      ],
      [
        "Starting from \\(x_0=5\\), give the Newton–Raphson recurrence and two iterates to five decimal places.",
        3
      ],
      [
        "Prove that for every \\(a>0\\), \\(a\\ne1\\), the equation has precisely two positive solutions.",
        2
      ]
    ],
    "hint": "Differentiate first: the sign of (x−a)/x² controls the number of solutions, and the known root at x=1 identifies one branch.",
    "steps": [
      "Differentiating gives \\(F_a'(x)=1/x-a/x^2=(x-a)/x^2\\). [1] The sign changes from negative to positive at \\(x=a\\). [1] Thus the unique minimum occurs at \\((a,\\ln a-a+1)\\). [1]",
      "For \\(a=2\\), \\(F_2(1)=0\\) and \\(F_2(2)=\\ln2-1<0\\); \\(F_2(4)=\\ln4-3/2<0\\) and \\(F_2(5)=\\ln5-8/5>0\\). [1] Since \\(F_2\\) is strictly increasing for \\(x>2\\), the sign change in \\((4,5)\\) gives exactly one additional root. [1]",
      "Apply Newton to \\(F_2(x)=\\ln x-2+2/x\\) with derivative \\((x-2)/x^2\\). [1] Thus \\(x_{n+1}=x_n-\\frac{\\ln x_n-2+2/x_n}{(x_n-2)/x_n^2}\\). [1] From \\(x_0=5\\), successive iterates approach the larger root near \\(4.92\\); show both calculator values to five decimal places. [1]",
      "The inequality \\(\\ln a<a-1\\) for \\(a>0,a\\ne1\\) gives \\(F_a(a)<0\\). [1] Since \\(F_a(x)\\to\\infty\\) as \\(x\\to0^+\\) and as \\(x\\to\\infty\\), and \\(F_a\\) strictly decreases then increases, it crosses zero once on either side of the minimum; one crossing is \\(x=1\\). [1]"
    ],
    "answer": "\\(F_a'(x)=(x-a)/x^2\\); two positive roots for \\(a\\ne1\\); for \\(a=2\\) the second root lies in \\((4,5)\\).",
    "misconception": "An iteration near x=1 cannot find the larger root: Newton's method is local, and the derivative may be small near the minimum.",
    "reflection": "How would the number of roots change exactly at a=1, when the minimum touches the horizontal axis?"
  },
  {
    "id": "W07-P5",
    "section": "P",
    "title": "A stationary point that is not a turning point",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "product differentiation",
      "stationary inflection",
      "definite integrals",
      "monotonicity"
    ],
    "stem": "Let \\(f(x)=(x^2+1)e^{-x}\\) for \\(x\\ge0\\). A student's sketch claims that any stationary point must be either a maximum or a minimum.",
    "parts": [
      [
        "Find and factorise \\(f'(x)\\); identify every stationary point in the domain.",
        3
      ],
      [
        "Show that the stationary point is an inflection rather than an extremum.",
        3
      ],
      [
        "Evaluate \\(\\int_0^2 f(x)\\,dx\\) exactly using integration by parts.",
        2
      ],
      [
        "Find the horizontal tangent at \\(x=1\\) and explain why the whole curve is not on the same side of it.",
        2
      ]
    ],
    "hint": "Factor the derivative before classifying: a squared factor can touch zero without changing the derivative's sign.",
    "steps": [
      "Product rule gives \\(f'(x)=2xe^{-x}-(x^2+1)e^{-x}\\). [1] Hence \\(f'(x)=-(x-1)^2e^{-x}\\). [1] The only stationary point is \\((1,2/e)\\). [1]",
      "Because \\(f'(x)<0\\) whenever \\(x\\ne1\\), the function decreases on both sides: there is no turning point. [1] Differentiate again to obtain \\(f''(x)=e^{-x}(x-1)(x-3)\\). [1] Its sign changes from positive to negative across \\(x=1\\), so the stationary point is an inflection. [1]",
      "Integration by parts twice yields \\(\\int (x^2+1)e^{-x}\\,dx=-(x^2+2x+3)e^{-x}+C\\). [1] The definite integral is \\(3-11e^{-2}\\). [1]",
      "As \\(f'(1)=0\\), the tangent is \\(y=2/e\\). [1] Strict decrease gives \\(f(x)>2/e\\) for \\(0\\le x<1\\) and \\(f(x)<2/e\\) for \\(x>1\\), so the curve crosses the tangent. [1]"
    ],
    "answer": "\\(f'(x)=-(x-1)^2e^{-x}\\); stationary inflection \\((1,2/e)\\); area \\(3-11e^{-2}\\).",
    "misconception": "Using only f'(1)=0 to claim a maximum overlooks the derivative sign on both sides.",
    "reflection": "Which part of your argument uses the first derivative, and which uses the second derivative?"
  },
  {
    "id": "W07-P6",
    "section": "P",
    "title": "Optimising a power with a changing exponent",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "logarithmic differentiation",
      "optimisation",
      "limits",
      "integer arguments"
    ],
    "stem": "A dimensionless efficiency index for a positive real setting \\(x\\) is \\(E(x)=x^{1/x}\\). A device can instead be restricted to positive integer settings.",
    "parts": [
      [
        "Use logarithmic differentiation to obtain \\(E'(x)\\) for \\(x>0\\).",
        3
      ],
      [
        "Find and classify the global maximum of \\(E\\) over positive reals.",
        3
      ],
      [
        "Prove that the best positive integer setting is \\(x=3\\).",
        2
      ],
      [
        "Determine the limiting value of \\(E(x)\\) as \\(x\\to\\infty\\) and explain its meaning for the index.",
        2
      ]
    ],
    "hint": "Taking logarithms turns the variable exponent into a quotient whose derivative has an informative sign.",
    "steps": [
      "Write \\(\\ln E=\\frac{\\ln x}{x}\\). [1] Differentiating gives \\(E'/E=(1-\\ln x)/x^2\\). [1] Therefore \\(E'(x)=x^{1/x}(1-\\ln x)/x^2\\). [1]",
      "The derivative vanishes exactly when \\(\\ln x=1\\), namely at \\(x=e\\). [1] The derivative is positive for \\(0<x<e\\) and negative for \\(x>e\\). [1] Hence the unique global maximum is \\(E(e)=e^{1/e}\\). [1]",
      "Monotonicity shows any integer optimum must be 2 or 3 because \\(2<e<3\\). [1] Compare \\(3^{1/3}>2^{1/2}\\), equivalent to \\(3^2>2^3\\) or \\(9>8\\); hence 3 is best. [1]",
      "Since \\(\\ln E(x)=\\ln x/x\\to0\\), continuity of the exponential gives \\(E(x)\\to e^0=1\\). [1] Very large settings push the index back towards 1, rather than towards its maximum. [1]"
    ],
    "answer": "Unique real maximum \\(e^{1/e}\\) at \\(x=e\\); integer optimum \\(x=3\\); \\(\\lim_{x\\to\\infty}E(x)=1\\).",
    "misconception": "Do not differentiate x^(1/x) by treating 1/x as a constant exponent.",
    "reflection": "Why is checking only the integer settings 2 and 3 enough to prove the discrete optimum?"
  },
  {
    "id": "W07-P7",
    "section": "P",
    "title": "An exact logarithmic bound hides inside an area",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 6,
      "AO3": 2
    },
    "topics": [
      "logarithm inequalities",
      "differentiation",
      "integration by parts",
      "proof"
    ],
    "stem": "For \\(x\\ge0\\), define \\(g(x)=\\ln(1+x)-\\frac{x}{1+x}\\). The integral of this function offers a bound on \\(\\ln2\\) without using a decimal approximation.",
    "parts": [
      [
        "Prove that \\(g(x)>0\\) for all \\(x>0\\).",
        3
      ],
      [
        "Show that \\(\\frac{x}{1+x}<\\ln(1+x)<x\\) for \\(x>0\\).",
        3
      ],
      [
        "Evaluate \\(I=\\int_0^1g(x)\\,dx\\) exactly.",
        2
      ],
      [
        "Deduce a rigorous lower bound for \\(\\ln2\\) that is sharper than \\(1/2\\).",
        2
      ]
    ],
    "hint": "Use a derivative to prove the integrand's sign before calculating the definite integral.",
    "steps": [
      "Differentiate to obtain \\(g'(x)=1/(1+x)-1/(1+x)^2=x/(1+x)^2\\). [1] This is strictly positive for \\(x>0\\). [1] Since \\(g(0)=0\\), it follows that \\(g(x)>0\\) whenever \\(x>0\\). [1]",
      "The first inequality is exactly \\(g(x)>0\\). [1] For the second define \\(h(x)=x-\\ln(1+x)\\), so \\(h'(x)=x/(1+x)>0\\). [1] As \\(h(0)=0\\), the strict upper bound also follows. [1]",
      "Integration by parts gives \\(\\int_0^1\\ln(1+x)\\,dx=2\\ln2-1\\). [1] Since \\(\\int_0^1\\frac{x}{1+x}\\,dx=1-\\ln2\\), subtracting gives \\(I=3\\ln2-2\\). [1]",
      "Because \\(g(x)>0\\) on \\((0,1)\\), its integral satisfies \\(I>0\\). [1] Thus \\(3\\ln2-2>0\\), giving \\(\\ln2>2/3>1/2\\). [1]"
    ],
    "answer": "\\(I=3\\ln2-2>0\\); therefore \\(\\ln2>2/3\\).",
    "misconception": "A positive endpoint value alone does not prove a function is positive throughout an interval; use monotonicity.",
    "reflection": "Why is the integral inequality stronger than just substituting x=1 in the original pointwise bound?"
  }
];
