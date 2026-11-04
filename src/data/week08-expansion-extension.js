export const week08ExpansionExtension = [
  {
    "id": "W08-X2",
    "section": "X",
    "title": "When a horizontal threshold meets a logarithmic ratio",
    "marks": 16,
    "ao": {
      "AO2": 11,
      "AO3": 5
    },
    "topics": [
      "logarithm optimisation",
      "number of solutions",
      "two Newton roots",
      "area between curves",
      "tangency"
    ],
    "stem": "For \\(x>0\\), consider the family of equations \\(\\ln x=kx\\) where \\(k>0\\). The answers will depend on whether a horizontal threshold crosses the curve \\(r(x)=\\frac{\\ln x}{x}\\).",
    "parts": [
      [
        "Differentiate \\(r(x)\\) and find its maximum value and location.",
        3
      ],
      [
        "Prove the exact number of positive roots for each regime \\(0<k<1/e\\), \\(k=1/e\\), and \\(k>1/e\\).",
        3
      ],
      [
        "For \\(k=1/4\\), apply Newton–Raphson with \\(x_0=1.5\\) and \\(x_0=9\\) to approximate both roots to three decimal places.",
        4
      ],
      [
        "Show that the area between \\(y=\\ln x\\) and \\(y=x/4\\) on \\([\\alpha,\\beta]\\) is exactly \\(\\left[\\frac{x^2}{8}-x\\right]_{\\alpha}^{\\beta}\\).",
        4
      ],
      [
        "Explain geometrically why the limiting case \\(k=1/e\\) produces a tangent rather than two intersections.",
        2
      ]
    ],
    "hint": "Maximise ln(x)/x first, then solve ln x−x/4 separately on each side of the maximum. Use the root equation to simplify the area.",
    "steps": [
      "Quotient differentiation gives \\(r'(x)=\\frac{1-\\ln x}{x^2}\\). [1] It vanishes only at \\(x=e\\). [1] The sign is positive before e and negative after, so \\(r_{\\max}=1/e\\) at \\(x=e\\). [1]",
      "The ratio tends to \\(-\\infty\\) as \\(x\\to0^+\\) and \\(0^+\\) as \\(x\\to\\infty\\). [1] For \\(0<k<1/e\\) the threshold cuts both increasing and decreasing limbs, giving exactly two roots. [1] At \\(k=1/e\\) it touches at x=e (one root), whereas for \\(k>1/e\\) there are no positive roots. [1]",
      "Use \\(F(x)=\\ln x-x/4\\) and \\(F'(x)=1/x-1/4\\), so \\(x_{n+1}=x_n-F(x_n)/F'(x_n)\\). [1] Starting at 1.5 gives \\(1.426883741,1.429607776\\) in two steps. [1] Starting at 9 gives \\(8.620016957,8.613171812\\). [1] Further iteration confirms the roots \\(\\alpha\\approx1.430\\) and \\(\\beta\\approx8.613\\). [1]",
      "Between the two crossings the ratio \\(r(x)>1/4\\), hence the logarithmic curve is above the line. [1] Integrate their difference: \\(A=\\int_\\alpha^\\beta(\\ln x-x/4)\\,dx\\). [1] An antiderivative is \\(x\\ln x-x-x^2/8\\). [1] At either root \\(\\ln x=x/4\\), so endpoint substitution simplifies to \\(A=[x^2/8-x]_\\alpha^\\beta\\approx1.8343\\). [1]",
      "At \\(x=e\\), the graphs \\(y=\\ln x\\) and \\(y=x/e\\) meet because both equal 1. [1] Their gradients agree, \\(1/x=1/e\\) and \\(k=1/e\\), so the line is tangent there. [1]"
    ],
    "answer": "Two roots for \\(0<k<1/e\\); one tangent root at \\(k=1/e\\); none for \\(k>1/e\\). At \\(k=1/4\\): \\(\\alpha\\approx1.430,\\ \\beta\\approx8.613,\\ A\\approx1.8343\\).",
    "misconception": "Finding only one Newton root does not prove uniqueness or account for the second branch. The derivative vanishes at a different point from either root.",
    "reflection": "How does the maximum of a quotient reveal the complete root-count diagram for a parameterised equation?"
  }
];
