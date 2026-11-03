export const week06ExpansionPure = [
  {
    "id": "W06-P4",
    "section": "P",
    "title": "When an exponential series overtakes an arithmetic one",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "arithmetic series",
      "geometric series",
      "proof by induction",
      "comparison of growth"
    ],
    "stem": "Two positive sequences begin with \\(3\\). The first is arithmetic with common difference \\(3\\); the second is geometric with common ratio \\(2\\). Let \\(A_n\\) and \\(G_n\\) be their sums of the first n terms.",
    "parts": [
      [
        "Find closed expressions for A_n and G_n.",
        3
      ],
      [
        "Determine every n in {1,2,3} for which the two sums are equal.",
        2
      ],
      [
        "Prove by induction that \\(2^n-1>\\frac12n(n+1)\\) for every integer n≥3.",
        3
      ],
      [
        "Hence justify, for every integer n≥1, exactly when the geometric total exceeds the arithmetic total.",
        2
      ]
    ],
    "hint": "Both sums have a factor 3. For induction, double the inequality and compare n(n+1)+1 with (n+1)(n+2)/2.",
    "steps": [
      "For the AP, \\(A_n=\\frac n2[2(3)+(n-1)3]=\\frac32n(n+1)\\). [2] For the GP, \\(G_n=3(2^n-1)/(2-1)=3(2^n-1)\\). [1]",
      "At n=1, both sums are 3. [1] At n=2, both are 9; at n=3, \\(A_3=18\\) while \\(G_3=21\\). [1]",
      "Base n=3: \\(2^3-1=7>6=\\frac12(3)(4)\\). [1] If \\(2^n-1>\\frac12n(n+1)\\), then \\(2^{n+1}-1=2(2^n-1)+1>n(n+1)+1\\). [1] For n≥3, \\(n(n+1)+1-\\frac12(n+1)(n+2)=\\frac12((n+1)(n-2)+2)>0\\), completing induction. [1]",
      "Multiply the established inequality by 3 to obtain \\(G_n>A_n\\) whenever n≥3. [1] The two sums are equal precisely at n=1 and n=2 (from part (b)), with geometric total greater for all later positive integers. [1]"
    ],
    "answer": "\\(A_n=3n(n+1)/2,\\ G_n=3(2^n-1)\\); equality only at n=1 and 2, then \\(G_n>A_n\\) for all n≥3.",
    "misconception": "Checking a few values does not prove an inequality holds for every later n; induction establishes the universal claim.",
    "reflection": "Which structural feature of the induction step expresses why exponential growth eventually dominates quadratic growth?"
  },
  {
    "id": "W06-P5",
    "section": "P",
    "title": "A fractional binomial approximation with an error estimate",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 6,
      "AO3": 2
    },
    "topics": [
      "generalised binomial expansion",
      "convergence interval",
      "numerical approximation",
      "error estimation"
    ],
    "stem": "The function \\(f(x)=(1+2x)^{-1/2}\\) is approximated near x=0 using the generalised binomial theorem.",
    "parts": [
      [
        "Expand f(x) up to and including the term in x³.",
        4
      ],
      [
        "State the open interval of convergence for the expansion centred at x=0 and explain the constraint.",
        2
      ],
      [
        "Use your cubic polynomial to estimate \\(f(0.1)\\).",
        2
      ],
      [
        "Find the next term in the expansion and use its magnitude to comment on the accuracy of your estimate.",
        2
      ]
    ],
    "hint": "Write (1+u)^n with n=−1/2 and u=2x. At x=0.1, the terms alternate in sign and decrease in size.",
    "steps": [
      "Use \\((1+u)^\\alpha=1+\\alpha u+\\frac{\\alpha(\\alpha-1)}{2!}u^2+\\frac{\\alpha(\\alpha-1)(\\alpha-2)}{3!}u^3+\\cdots\\). [1] With \\(\\alpha=-1/2,\\ u=2x\\), the successive coefficients are \\(-x\\), \\(+\\frac32x^2\\) and \\(-\\frac52x^3\\). [3]",
      "The generalised series converges for \\(|2x|<1\\). [1] Thus \\(-\\frac12<x<\\frac12\\); outside this interval the power-series expansion about zero is not generally valid. [1]",
      "At x=0.1, the cubic gives \\(1-0.1+\\frac32(0.1)^2-\\frac52(0.1)^3=0.9125\\). [2]",
      "The fourth-degree term is \\(+\\frac{35}{8}x^4\\). [1] At x=0.1 its magnitude is \\(0.0004375\\), so the cubic estimate should be accurate to roughly four decimal places only cautiously; for this alternating decreasing series the exact remainder is smaller than that next term. [1]"
    ],
    "answer": "\\((1+2x)^{-1/2}=1-x+\\frac32x^2-\\frac52x^3+\\cdots\\) for |x|<1/2, cubic at 0.1 =0.9125, next term +0.0004375.",
    "misconception": "The convergence condition applies to u=2x, not directly to x; do not assume the interval is −1<x<1.",
    "reflection": "Why does the sign and size of the next term help more at x=0.1 than near the edge x=0.5?"
  },
  {
    "id": "W06-P6",
    "section": "P",
    "title": "A recurrence discovers a square root",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "nonlinear recurrence",
      "fixed points",
      "bounded monotonic sequences",
      "proof"
    ],
    "stem": "Define \\(u_1=3\\) and \\(u_{n+1}=\\frac12(u_n+6/u_n)\\) for all \\(n\\ge1\\). Assume every term is positive.",
    "parts": [
      [
        "Calculate \\(u_2\\) and \\(u_3\\) exactly.",
        2
      ],
      [
        "Prove that if u_n>0 then \\(u_{n+1}\\ge\\sqrt6\\).",
        3
      ],
      [
        "Prove that the sequence is decreasing from its first term, but remains bounded below by √6.",
        3
      ],
      [
        "Deduce the limit and explain why a second algebraic fixed point must be rejected.",
        2
      ]
    ],
    "hint": "For every positive u, (u−√6)²≥0 implies u+6/u≥2√6. Subtract u_n from the recurrence.",
    "steps": [
      "\\(u_2=(3+6/3)/2=5/2\\). [1] \\(u_3=(5/2+6/(5/2))/2=(5/2+12/5)/2=49/20\\). [1]",
      "For u>0, \\((u-\\sqrt6)^2\\ge0\\) yields \\(u^2+6\\ge2u\\sqrt6\\). [2] Divide by 2u to get \\(\\frac12(u+6/u)\\ge\\sqrt6\\), so \\(u_{n+1}\\ge\\sqrt6\\). [1]",
      "\\(u_1=3>\\sqrt6\\) and part (b) keeps all later terms at least √6. [1] Also \\(u_{n+1}-u_n=(6-u_n^2)/(2u_n)\\le0\\) when u_n≥√6. [1] Hence the sequence is nonincreasing and bounded below. [1]",
      "The monotone bounded sequence converges to L>0. Substitution in the recurrence gives \\(L=(L+6/L)/2\\), so \\(L^2=6\\). [1] Positivity excludes the negative fixed point, hence \\(L=\\sqrt6\\). [1]"
    ],
    "answer": "\\(u_2=5/2,\\ u_3=49/20\\), and \\(u_n\\downarrow\\sqrt6\\).",
    "misconception": "A fixed point is only a candidate limit. The bound and monotonicity are needed to justify convergence before solving for L.",
    "reflection": "Why does starting with a positive term prevent the negative fixed point from being the limit?"
  },
  {
    "id": "W06-P7",
    "section": "P",
    "title": "Choosing between two escalating payment plans",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 5,
      "AO3": 3
    },
    "topics": [
      "arithmetic sequences",
      "geometric sums",
      "logarithmic thresholds",
      "model choice"
    ],
    "stem": "Two contracts specify payments in pounds for successive months. Contract A charges \\(a_n=100+5(n-1)\\) in month n; Contract G charges \\(g_n=100(1.05)^{n-1}\\). All payments are made at the end of each month, with no interest or fees beyond the amounts shown.",
    "parts": [
      [
        "Find formulas for the total amount payable in the first n months under each contract.",
        3
      ],
      [
        "Determine the first month in which the payment under G strictly exceeds £120.",
        2
      ],
      [
        "Determine the first month in which the payment under A strictly exceeds £120.",
        2
      ],
      [
        "Compare the six-month costs and state which contract is cheaper over that period, explaining why this does not determine the cheapest contract for all time horizons.",
        3
      ]
    ],
    "hint": "Use AP and GP sum formulas, remembering that 'strictly exceeds' excludes equality. For G use logarithms to solve a positive exponential inequality.",
    "steps": [
      "The A payments form an AP, so \\(S_A(n)=\\frac n2[200+5(n-1)]=\\frac n2(195+5n)\\). [2] The G payments form a GP, so \\(S_G(n)=100\\frac{1.05^n-1}{0.05}=2000(1.05^n-1)\\). [1]",
      "For G, \\(100(1.05)^{n-1}>120\\) means \\(n-1>\\ln1.2/\\ln1.05\\approx3.736\\). [1] The first integer n satisfying it is \\(n=5\\). [1]",
      "For A, \\(100+5(n-1)>120\\) reduces to \\(n>5\\). [1] The first permissible integer month is \\(n=6\\). [1]",
      "\\(S_A(6)=6(195+30)/2=675\\) pounds. [1] \\(S_G(6)=2000(1.05^6-1)\\approx680.19\\) pounds. [1] A is cheaper by about £5.19 over six months; exponential and linear growth differ over longer horizons, so a comparison at n=6 alone cannot justify a general time-independent recommendation. [1]"
    ],
    "answer": "\\(S_A(n)=n(195+5n)/2,\\ S_G(n)=2000(1.05^n-1)\\); first >£120 in G month5, A month6; six-month costs £675 vs about £680.19, so A is cheaper for six months.",
    "misconception": "A comparison of one monthly payment is not the same as a comparison of cumulative cost; neither alone settles every contract length.",
    "reflection": "What assumptions about inflation, extra fees or interest would alter the comparison?"
  }
];
