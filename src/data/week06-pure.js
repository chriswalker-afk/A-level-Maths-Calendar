export const week06PureProblems = [
  {
    "id": "W06-P1",
    "section": "P",
    "title": "The month when a geometric total passes its target",
    "marks": 8,
    "minutes": 21,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "geometric progressions",
      "finite sums",
      "logarithmic inequalities",
      "limits"
    ],
    "stem": "A conservation project collects \\(£160\\) in its first month. In each later month it collects \\(80\\%\\) of the previous month's amount. Assume this pattern continues exactly. Let \\(u_n\\) be the amount collected in month \\(n\\) and \\(S_n\\) the total after \\(n\\) months.",
    "parts": [
      [
        "Find a formula for \\(u_n\\) and the amount collected in month 4.",
        2
      ],
      [
        "Prove that \\(S_n=800(1-0.8^n)\\).",
        2
      ],
      [
        "Find the first whole month by the end of which the total collected is at least \\(£700\\). Justify your integer choice.",
        3
      ],
      [
        "Explain why the project never collects exactly \\(£800\\) in any finite number of months.",
        1
      ]
    ],
    "hint": "Start with \\(u_n=ar^{n-1}\\) and then use a finite geometric sum with \\(r=0.8\\). When solving a logarithmic inequality, remember that \\(\\log(0.8)<0\\).",
    "steps": [
      "The amounts form a GP with \\(a=160\\) and \\(r=0.8\\). Hence \\(u_n=160(0.8)^{n-1}\\) and \\(u_4=160(0.8)^3=81.92\\) pounds. [2]",
      "Using \\(S_n=\\frac{a(1-r^n)}{1-r}\\), obtain \\(S_n=\\frac{160(1-0.8^n)}{0.2}=800(1-0.8^n)\\) as required. [2]",
      "Require \\(800(1-0.8^n)\\ge700\\), so \\(0.8^n\\le\\frac18\\). Taking logs and reversing the inequality because \\(\\ln0.8<0\\), \\(n\\ge\\frac{\\ln(1/8)}{\\ln0.8}\\approx9.319\\). The first integer is \\(n=10\\); \\(S_9<700\\le S_{10}\\). [3]",
      "For every finite positive \\(n\\), \\(0.8^n>0\\), so \\(S_n<800\\). The limiting total as \\(n\\to\\infty\\) is \\(£800\\), but it is not attained in finitely many months. [1]"
    ],
    "answer": "\\(u_n=160(0.8)^{n-1}\\), \\(u_4=£81.92\\), \\(S_n=800(1-0.8^n)\\); the target is reached by the end of month \\(10\\); limiting total \\(£800\\).",
    "misconception": "Dividing a log inequality by the negative number ln(0.8) reverses the inequality; rounding 9.319 down would miss the target.",
    "reflection": "What change in the common ratio would make the target of £700 impossible to reach?"
  },
  {
    "id": "W06-P2",
    "section": "P",
    "title": "Cancel a coefficient in a fractional expansion",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO2": 8,
      "AO3": 2
    },
    "topics": [
      "rational binomial expansion",
      "coefficient comparison",
      "approximation",
      "validity intervals"
    ],
    "stem": "For \\(|x|<\\frac12\\), let \\(f(x)=(1+2x)^{-1/2}\\). A designer introduces \\(F_c(x)=(1+cx)f(x)\\) for a real constant \\(c\\). The designer wishes the linear dependence on \\(x\\) to cancel near \\(x=0\\).",
    "parts": [
      [
        "Expand \\(f(x)\\) in ascending powers of \\(x\\) up to and including the term in \\(x^3\\).",
        4
      ],
      [
        "Find \\(c\\) so that the coefficient of \\(x\\) in \\(F_c(x)\\) is zero.",
        2
      ],
      [
        "For this value of \\(c\\), find the coefficients of \\(x^2\\) and \\(x^3\\) in \\(F_c(x)\\).",
        2
      ],
      [
        "Use the truncated expansion to estimate \\(F_c(0.1)\\) and state why this input lies in the interval of validity.",
        2
      ]
    ],
    "hint": "For \\((1+u)^n\\), the coefficients through \\(u^3\\) are \\(1,n,\\frac{n(n-1)}2,\\frac{n(n-1)(n-2)}6\\); here \\(n=-\\frac12,\\ u=2x\\).",
    "steps": [
      "Apply the rational binomial series: \\((1+2x)^{-1/2}=1-\\frac12(2x)+\\frac{(-1/2)(-3/2)}2(2x)^2+\\frac{(-1/2)(-3/2)(-5/2)}6(2x)^3+\\cdots\\). The coefficients simplify to \\(f(x)=1-x+\\frac32x^2-\\frac52x^3+\\cdots\\). Award for setup, linear, quadratic and cubic coefficients. [4]",
      "Multiplying by \\(1+cx\\) gives linear coefficient \\(c-1\\). Setting it to zero yields \\(c=1\\). [2]",
      "With \\(c=1\\), \\(F_1(x)=(1+x)(1-x+\\frac32x^2-\\frac52x^3+\\cdots)=1+\\frac12x^2-x^3+\\cdots\\). Thus the quadratic and cubic coefficients are \\(\\frac12\\) and \\(-1\\). [2]",
      "At \\(x=0.1\\), \\(F_1(0.1)\\approx1+\\frac12(0.1)^2-(0.1)^3=1.004\\). The expansion is valid because \\(|2(0.1)|=0.2<1\\). (The exact value is about \\(1.004158\\).) [2]"
    ],
    "answer": "\\(f(x)=1-x+\\frac32x^2-\\frac52x^3+\\cdots\\), \\(c=1\\), \\(F_1(x)=1+\\frac12x^2-x^3+\\cdots\\), estimate \\(1.004\\).",
    "misconception": "It is not enough to cancel the linear term in f(x); multiplication by 1+cx also changes the quadratic and cubic coefficients.",
    "reflection": "What property of the modified function near zero does cancelling the linear term suggest, and how much confidence should you place in the cubic approximation at x=0.4?"
  },
  {
    "id": "W06-P3",
    "section": "P",
    "title": "From a recurrence to an exact partial-sum identity",
    "marks": 12,
    "minutes": 24,
    "ao": {
      "AO1": 1,
      "AO2": 9,
      "AO3": 2
    },
    "topics": [
      "recurrence relations",
      "geometric sequence proof",
      "finite series",
      "inequalities",
      "limits"
    ],
    "stem": "A sequence is defined by \\(u_1=4\\), \\(u_{n+1}=\\frac12u_n+3\\) for positive integers \\(n\\). Set \\(v_n=u_n-6\\) and write \\(S_n=\\sum_{k=1}^{n}u_k\\).",
    "parts": [
      [
        "Show that \\(v_{n+1}=\\frac12v_n\\) and state \\(v_1\\).",
        2
      ],
      [
        "Deduce an explicit expression for \\(u_n\\) and show that the terms are increasing and always below \\(6\\).",
        3
      ],
      [
        "By obtaining the finite geometric sum, prove \\(S_n=6n-4(1-2^{-n})\\).",
        3
      ],
      [
        "Find the smallest integer \\(n\\) for which \\(u_n>5.9\\).",
        2
      ],
      [
        "Prove that \\(0<6n-S_n<4\\) for all positive integers \\(n\\) and give its limit as \\(n\\to\\infty\\).",
        2
      ]
    ],
    "hint": "Subtract \\(6\\) from both sides of the recurrence. The shifted sequence is geometric, even though the original sequence is not.",
    "steps": [
      "From the recurrence, \\(v_{n+1}=u_{n+1}-6=\\frac12u_n-3=\\frac12(u_n-6)=\\frac12v_n\\). Also \\(v_1=4-6=-2\\). [2]",
      "Thus \\(v_n=-2(\\frac12)^{n-1}=-2^{2-n}\\), so \\(u_n=6-2^{2-n}\\). Since \\(2^{2-n}>0\\), every term is less than 6. Moreover \\(u_{n+1}-u_n=2^{1-n}>0\\), so it increases. [3]",
      "The partial sum is \\(S_n=\\sum_{k=1}^n(6-2(\\frac12)^{k-1})=6n-2\\frac{1-(1/2)^n}{1-1/2}\\). Simplify to \\(S_n=6n-4(1-2^{-n})\\). [3]",
      "Solve \\(6-2^{2-n}>5.9\\), equivalently \\(2^{2-n}<0.1\\). This gives \\(n>2+\\log_2(10)\\approx5.322\\), so the least positive integer is \\(n=6\\). [2]",
      "From the identity, \\(6n-S_n=4(1-2^{-n})\\). For \\(n\\ge1\\), \\(0<2^{-n}<1\\), giving \\(0<6n-S_n<4\\). Since \\(2^{-n}\\to0\\), the limit is \\(4\\). [2]"
    ],
    "answer": "\\(u_n=6-2^{2-n}\\), \\(S_n=6n-4(1-2^{-n})\\), threshold at \\(n=6\\), and \\(6n-S_n\\to4\\).",
    "misconception": "The original recurrence is not itself a geometric progression. Shift by its fixed point first; do not sum u_n using a geometric formula before identifying the constant term.",
    "reflection": "Why can u_n approach 6 while the difference between S_n and 6n approaches a nonzero constant?"
  }
];
