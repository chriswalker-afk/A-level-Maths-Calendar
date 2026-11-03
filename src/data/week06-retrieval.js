export const week06Retrieval = [
  {
    "id": "W06-R1",
    "section": "R",
    "title": "An arithmetic term",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "arithmetic progressions",
      "nth term"
    ],
    "stem": "An arithmetic sequence begins \\(7,12,17,\\ldots\\).",
    "parts": [
      [
        "Find the \\(18\\)th term.",
        2
      ]
    ],
    "hint": "First identify the first term and common difference.",
    "steps": [
      "The first term is \\(a=7\\) and the common difference is \\(d=5\\). [1]",
      "Use \\(u_n=a+(n-1)d\\): \\(u_{18}=7+17(5)=92\\). [1]"
    ],
    "answer": "\\(92\\)",
    "misconception": "Using 18 differences rather than 17 places the answer one term too far along.",
    "reflection": "Why does the formula use n minus 1 rather than n?"
  },
  {
    "id": "W06-R2",
    "section": "R",
    "title": "An arithmetic sum",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "arithmetic series",
      "finite sums"
    ],
    "stem": "An arithmetic series has first term \\(5\\) and common difference \\(4\\).",
    "parts": [
      [
        "Find the sum of the first \\(12\\) terms.",
        2
      ]
    ],
    "hint": "Find term 12, then average the first and last terms.",
    "steps": [
      "The twelfth term is \\(5+11(4)=49\\). [1]",
      "The sum is \\(S_{12}=\\frac{12}{2}(5+49)=324\\). [1]"
    ],
    "answer": "\\(324\\)",
    "misconception": "A formula for the twelfth term is not a formula for the sum of twelve terms.",
    "reflection": "How would doubling the number of terms affect the sum, and why is it not simply double?"
  },
  {
    "id": "W06-R3",
    "section": "R",
    "title": "A geometric term",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "geometric progressions",
      "nth term"
    ],
    "stem": "A geometric sequence starts \\(81,54,36,\\ldots\\).",
    "parts": [
      [
        "Find its fifth term.",
        2
      ]
    ],
    "hint": "The second term divided by the first gives the common ratio.",
    "steps": [
      "The common ratio is \\(r=\\frac{54}{81}=\\frac23\\). [1]",
      "Hence \\(u_5=81(\\frac23)^4=16\\). [1]"
    ],
    "answer": "\\(16\\)",
    "misconception": "An arithmetic difference of negative 27 does not stay constant in this sequence.",
    "reflection": "Which observation proves it is geometric rather than arithmetic?"
  },
  {
    "id": "W06-R4",
    "section": "R",
    "title": "A finite geometric sum",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "geometric series",
      "finite sums"
    ],
    "stem": "A geometric series has first term \\(5\\) and common ratio \\(2\\).",
    "parts": [
      [
        "Find the sum of the first six terms.",
        2
      ]
    ],
    "hint": "Use the finite sum formula, not the infinite sum formula.",
    "steps": [
      "For \\(r\\ne1\\), \\(S_n=a\\frac{r^n-1}{r-1}\\). [1]",
      "So \\(S_6=5(2^6-1)=315\\). [1]"
    ],
    "answer": "\\(315\\)",
    "misconception": "The infinite sum does not exist when the common ratio is 2.",
    "reflection": "Why is a ratio greater than 1 still permitted in a finite sum?"
  },
  {
    "id": "W06-R5",
    "section": "R",
    "title": "An alternating infinite series",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "infinite geometric sums",
      "convergence"
    ],
    "stem": "The terms of a geometric series are \\(24,-8,\\frac83,\\ldots\\).",
    "parts": [
      [
        "Determine whether its sum to infinity exists and, if so, find it.",
        2
      ]
    ],
    "hint": "Calculate the signed common ratio before checking its magnitude.",
    "steps": [
      "Here \\(r=-\\frac13\\); since \\(|r|<1\\), the series converges. [1]",
      "Its sum is \\(S_\\infty=\\frac{24}{1-(-1/3)}=18\\). [1]"
    ],
    "answer": "\\(18\\)",
    "misconception": "The alternating sign does not make the sum negative or undefined; check absolute ratio.",
    "reflection": "What happens to the partial sums as more alternating terms are added?"
  },
  {
    "id": "W06-R6",
    "section": "R",
    "title": "Iterate a recurrence",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "recurrence relations",
      "sequences"
    ],
    "stem": "A sequence is defined by \\(u_1=2,\\quad u_{n+1}=3u_n-1\\).",
    "parts": [
      [
        "Find \\(u_2\\) and \\(u_3\\).",
        2
      ]
    ],
    "hint": "Substitute each calculated term back into the recurrence.",
    "steps": [
      "\\(u_2=3(2)-1=5\\). [1]",
      "Then \\(u_3=3(5)-1=14\\). [1]"
    ],
    "answer": "\\(u_2=5,\\quad u_3=14\\)",
    "misconception": "The recurrence must act on the previous term, not on n.",
    "reflection": "What would you need to know to calculate the tenth term without listing all the earlier terms?"
  },
  {
    "id": "W06-R7",
    "section": "R",
    "title": "Sigma notation",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "sigma notation",
      "finite sums"
    ],
    "stem": "Consider the sum \\(\\displaystyle\\sum_{r=1}^{6}(2r-1)\\).",
    "parts": [
      [
        "Evaluate the sum.",
        2
      ]
    ],
    "hint": "The summand produces successive odd positive integers.",
    "steps": [
      "The six terms are \\(1+3+5+7+9+11\\). [1]",
      "Their sum is \\(36\\) (equivalently, the first six odd numbers sum to \\(6^2\\)). [1]"
    ],
    "answer": "\\(36\\)",
    "misconception": "The upper index tells you how many values are substituted, not the final value of the summand.",
    "reflection": "How could you justify that the sum of the first n odd numbers is n squared?"
  },
  {
    "id": "W06-R8",
    "section": "R",
    "title": "An integer binomial coefficient",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "integer binomial expansion",
      "coefficients"
    ],
    "stem": "Consider \\((2+x)^5\\).",
    "parts": [
      [
        "Find the coefficient of \\(x^2\\).",
        2
      ]
    ],
    "hint": "Select two x factors from the five brackets.",
    "steps": [
      "The \\(x^2\\) term is \\(\\binom52 2^3x^2\\). [1]",
      "Its coefficient is \\(10(8)=80\\). [1]"
    ],
    "answer": "\\(80\\)",
    "misconception": "The factor 2 is raised to the number of remaining constant factors, not the power of x.",
    "reflection": "Where does the binomial coefficient come from when multiplying five brackets?"
  },
  {
    "id": "W06-R9",
    "section": "R",
    "title": "A rational binomial series",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "non-integer binomial expansion",
      "rational indices"
    ],
    "stem": "For sufficiently small \\(x\\), consider \\((1+4x)^{-1/2}\\).",
    "parts": [
      [
        "Find the terms up to and including \\(x^2\\).",
        2
      ]
    ],
    "hint": "Use \\((1+u)^n=1+nu+\\frac{n(n-1)}{2}u^2+\\cdots\\).",
    "steps": [
      "With \\(n=-\\frac12,\\ u=4x\\), the linear term is \\(-\\frac12(4x)=-2x\\). [1]",
      "The quadratic term is \\(\\frac{(-1/2)(-3/2)}{2}(4x)^2=6x^2\\), giving \\(1-2x+6x^2\\). [1]"
    ],
    "answer": "\\(1-2x+6x^2\\)",
    "misconception": "Negative exponents do not make every coefficient negative; the quadratic coefficient is positive.",
    "reflection": "What numerical value of x would make this truncated expansion unreliable?"
  },
  {
    "id": "W06-R10",
    "section": "R",
    "title": "Validity of a rational expansion",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "non-integer binomial expansion",
      "validity"
    ],
    "stem": "The expression \\((3-2x)^{-2}\\) is to be expanded as an infinite binomial series in ascending powers of \\(x\\).",
    "parts": [
      [
        "State the exact open interval of validity.",
        2
      ]
    ],
    "hint": "First factor 3 from the bracket to identify the series variable.",
    "steps": [
      "Write \\((3-2x)^{-2}=\\frac19(1-\\frac{2x}{3})^{-2}\\). [1]",
      "Require \\(|\\frac{2x}{3}|<1\\), hence \\(-\\frac32<x<\\frac32\\). [1]"
    ],
    "answer": "\\(-\\frac32<x<\\frac32\\)",
    "misconception": "The endpoints are excluded; the condition is on the inner series variable, not just x.",
    "reflection": "Why does the factored constant outside the bracket not change the interval of validity?"
  }
];
