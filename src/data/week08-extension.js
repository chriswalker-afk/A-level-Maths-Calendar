export const week08Extension = [
  {
    "id": "W08-X1",
    "section": "X",
    "title": "Prove an iteration is safe, then certify five decimal places",
    "marks": 14,
    "minutes": 40,
    "ao": {
      "AO1": 2,
      "AO2": 8,
      "AO3": 4
    },
    "topics": [
      "Newton–Raphson derivation",
      "exact rational iterates",
      "convergence proof",
      "quadratic error",
      "rigorous bounds"
    ],
    "stem": "Consider the equation \\(x^2-2=0\\) and the iteration \\(x_{n+1}=\\frac12(x_n+\\frac2{x_n})\\), starting at \\(x_0=2\\). An examiner wants more than a decimal approximation: prove why the iteration succeeds and supply rigorous upper and lower bounds that certify five decimal places for the positive root \\(\\alpha=\\sqrt2\\).",
    "parts": [
      [
        "Derive the given iteration directly from Newton–Raphson applied to \\(f(x)=x^2-2\\).",
        2
      ],
      [
        "Calculate \\(x_1\\), \\(x_2\\) and \\(x_3\\) as exact fractions.",
        3
      ],
      [
        "Prove that each iterate after the start is at least \\(\\sqrt2\\), and that the sequence is decreasing unless it has already reached that root. Deduce that it converges to \\(\\sqrt2\\).",
        3
      ],
      [
        "If \\(e_n=x_n-\\sqrt2\\), derive an exact formula for \\(e_{n+1}\\) in terms of \\(e_n\\) and \\(x_n\\). Explain why the error then shrinks especially rapidly once the iterates are near the root.",
        3
      ],
      [
        "Find \\(x_4\\) exactly, construct a rational lower bound and upper bound for \\(\\sqrt2\\), and prove its value correct to five decimal places.",
        3
      ]
    ],
    "hint": "The key identity is \\(\\frac12(x+\\frac2x)-\\sqrt2=\\frac{(x-\\sqrt2)^2}{2x}\\) for \\(x>0\\). A second identity compares the next iterate directly with the current one.",
    "steps": [
      "For \\(f(x)=x^2-2\\), \\(f'(x)=2x\\). Newton's formula gives \\(x_{n+1}=x_n-\\frac{x_n^2-2}{2x_n}=\\frac12(x_n+\\frac2{x_n})\\), valid whenever \\(x_n>0\\). [2]",
      "From \\(x_0=2\\), \\(x_1=\\frac12(2+1)=\\frac32\\). Next \\(x_2=\\frac12(\\frac32+\\frac43)=\\frac{17}{12}\\). Then \\(x_3=\\frac12(\\frac{17}{12}+\\frac{24}{17})=\\frac{577}{408}\\). [3]",
      "For any \\(x>0\\), \\(g(x)-\\sqrt2=\\frac{(x-\\sqrt2)^2}{2x}\\ge0\\), so every subsequent iterate is at least \\(\\sqrt2\\). Also \\(x-g(x)=\\frac{x^2-2}{2x}>0\\) for \\(x>\\sqrt2\\). Starting at 2, the sequence decreases and is bounded below, so it converges to some positive \\(L\\). Continuity gives \\(L=g(L)\\) or \\(L^2=2\\), hence \\(L=\\sqrt2\\). [3]",
      "Define \\(e_n=x_n-\\sqrt2\\). The identity above gives \\(e_{n+1}=\\frac{e_n^2}{2x_n}\\) exactly. Since \\(x_n\\ge\\sqrt2\\), \\(0\\le e_{n+1}\\le\\frac{e_n^2}{2\\sqrt2}\\). The new error is proportional to the square of the old error, explaining the rapid (quadratic) convergence. [3]",
      "Using \\(x_3=577/408\\), \\(x_4=\\frac12(\\frac{577}{408}+\\frac{816}{577})=\\frac{665857}{470832}\\). For any \\(x_4>\\sqrt2\\), \\(\\frac2{x_4}<\\sqrt2<x_4\\), giving the exact bounds \\(\\frac{941664}{665857}<\\sqrt2<\\frac{665857}{470832}\\). Numerically, \\(1.4142135623715<\\sqrt2<1.4142135623747\\); both endpoints are strictly between \\(1.414205\\) and \\(1.414215\\), the five-decimal rounding boundaries. Thus \\(\\sqrt2=1.41421\\) to five decimal places. [3]"
    ],
    "answer": "\\(x_1=\\frac32,\\ x_2=\\frac{17}{12},\\ x_3=\\frac{577}{408},\\ x_4=\\frac{665857}{470832}\\); certified bounds \\(\\frac{941664}{665857}<\\sqrt2<\\frac{665857}{470832}\\) and \\(\\sqrt2\\approx1.41421\\) to five decimal places.",
    "misconception": "A sequence of apparently stable decimal values is not, alone, a rigorous convergence proof or error bound. The fixed-point monotonicity and rational bracketing make this result mathematically secure.",
    "reflection": "Why does doubling the number of correct digits per Newton step become plausible once the error is small, and how is that different from simply assuming the displayed digits are correct?"
  }
];
