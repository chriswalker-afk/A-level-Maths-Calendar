export const week01Questions = [
  {
    "id": "W01-R1",
    "section": "R",
    "title": "Indices and surds",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "algebra",
      "surds"
    ],
    "stem": "Simplify the expression fully.",
    "parts": [
      [
        "Write \\\\(\\\\sqrt{72}\\\\) in the form \\\\(a\\\\sqrt{2}\\\\), where \\\\(a\\\\) is an integer.",
        2
      ]
    ],
    "hint": "Find the largest square factor of 72.",
    "steps": [
      "\\\\(72=36\\\\times 2\\\\).",
      "\\\\(\\\\sqrt{72}=\\\\sqrt{36}\\\\sqrt{2}=6\\\\sqrt{2}\\\\)."
    ],
    "answer": "\\\\(6\\\\sqrt{2}\\\\)",
    "misconception": "Do not simplify a square root by dividing the number inside by 2.",
    "reflection": "Which perfect square was useful here?"
  },
  {
    "id": "W01-R2",
    "section": "R",
    "title": "Discriminants",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "quadratics"
    ],
    "stem": "The equation \\\\(x^2-6x+k=0\\\\) has a repeated real root.",
    "parts": [
      [
        "Find the value of \\\\(k\\\\).",
        2
      ]
    ],
    "hint": "A repeated root means the discriminant is zero.",
    "steps": [
      "For \\\\(ax^2+bx+c=0\\\\), a repeated root requires \\\\(b^2-4ac=0\\\\).",
      "Here \\\\(36-4k=0\\\\), so \\\\(k=9\\\\)."
    ],
    "answer": "\\\\(k=9\\\\)",
    "misconception": "A repeated root corresponds to discriminant zero, not positive.",
    "reflection": "What would happen if k were larger than 9?"
  },
  {
    "id": "W01-R3",
    "section": "R",
    "title": "Functions and inverses",
    "marks": 2,
    "minutes": 4,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "functions"
    ],
    "stem": "Let \\\\(f(x)=3x-7\\\\), for real \\\\(x\\\\).",
    "parts": [
      [
        "Find \\\\(f^{-1}(x)\\\\).",
        2
      ]
    ],
    "hint": "Use y = 3x − 7, swap x and y, then rearrange.",
    "steps": [
      "Let \\\\(y=3x-7\\\\). Interchange variables: \\\\(x=3y-7\\\\).",
      "Rearrange: \\\\(3y=x+7\\\\), hence \\\\(f^{-1}(x)=(x+7)/3\\\\)."
    ],
    "answer": "\\\\(f^{-1}(x)=\\\\frac{x+7}{3}\\\\)",
    "misconception": "The inverse function is not the reciprocal of f(x).",
    "reflection": "How could you verify your inverse by composition?"
  },
  {
    "id": "W01-R4",
    "section": "R",
    "title": "Algebraic restrictions",
    "marks": 2,
    "minutes": 4,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "algebra",
      "rational expressions"
    ],
    "stem": "Consider \\\\(g(x)=\\\\dfrac{x^2-9}{x^2+4x+3}\\\\).",
    "parts": [
      [
        "Simplify \\\\(g(x)\\\\) and state all excluded values of \\\\(x\\\\).",
        2
      ]
    ],
    "hint": "Factor both numerator and denominator before cancelling.",
    "steps": [
      "\\\\(g(x)=\\\\dfrac{(x-3)(x+3)}{(x+1)(x+3)}\\\\).",
      "For \\\\(x\\\\ne -3,-1\\\\), cancel \\\\(x+3\\\\) to obtain \\\\(\\\\dfrac{x-3}{x+1}\\\\). Keep both original exclusions."
    ],
    "answer": "\\\\(g(x)=\\\\dfrac{x-3}{x+1}\\\\), \\\\(x\\\\ne-3,-1\\\\)",
    "misconception": "Cancelling a common factor never removes exclusions from the original function.",
    "reflection": "Why does x = −3 remain excluded?"
  },
  {
    "id": "W01-P1",
    "section": "P",
    "title": "Proof through a quadratic",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "quadratics",
      "proof",
      "inequalities"
    ],
    "stem": "A student claims that \\\\(x^2-6x+13\\\\) is always at least 5 for all real \\\\(x\\\\).",
    "parts": [
      [
        "Write \\\\(x^2-6x+13\\\\) in completed-square form.",
        2
      ],
      [
        "Determine whether the student's claim is true, with proof.",
        3
      ],
      [
        "Another student claims that \\\\(x^2-6x+13>4\\\\) for all real \\\\(x\\\\). Explain why this new claim is false.",
        3
      ]
    ],
    "hint": "Express the quadratic as a non-negative square plus a constant.",
    "steps": [
      "\\\\(x^2-6x+13=(x-3)^2+4\\\\). [2]",
      "Since \\\\((x-3)^2\\\\ge 0\\\\), the expression is at least 4, not necessarily 5. The first claim is false: choose \\\\(x=3\\\\) and the value is 4. [3]",
      "The second claim is false because equality is possible: at \\\\(x=3\\\\), \\\\(x^2-6x+13=4\\\\), which is not strictly greater than 4. [3]"
    ],
    "answer": "Both claims are false. The minimum is 4 at x = 3.",
    "misconception": "A single counterexample disproves a universal claim; it does not prove one.",
    "reflection": "How does completing the square support a proof involving every real x?"
  },
  {
    "id": "W01-P2",
    "section": "P",
    "title": "Restricted inverse and inequalities",
    "marks": 10,
    "minutes": 24,
    "ao": {
      "AO1": 3,
      "AO2": 7
    },
    "topics": [
      "functions",
      "inequalities",
      "composites"
    ],
    "stem": "Let \\\\(f(x)=(x-2)^2+1\\\\), with domain \\\\(x\\\\ge 2\\\\), and let \\\\(g(x)=x+3\\\\).",
    "parts": [
      [
        "State the range of \\\\(f\\\\).",
        2
      ],
      [
        "Find \\\\(f^{-1}(x)\\\\), stating its domain.",
        3
      ],
      [
        "Solve \\\\(f(g(x))\\\\le 10\\\\), taking account of the domain of the composite function.",
        5
      ]
    ],
    "hint": "Use the restriction x ≥ 2 to choose the correct square-root branch. Check where g(x) belongs to the domain of f.",
    "steps": [
      "Because \\\\((x-2)^2\\\\ge 0\\\\), \\\\(f(x)\\\\ge 1\\\\), with equality at 2. Range is \\\\([1,\\\\infty)\\\\). [2]",
      "From \\\\(y=(x-2)^2+1\\\\) and \\\\(x\\\\ge 2\\\\), \\\\(x=2+\\\\sqrt{y-1}\\\\). Hence \\\\(f^{-1}(x)=2+\\\\sqrt{x-1}\\\\), domain \\\\(x\\\\ge1\\\\). [3]",
      "For the composite, \\\\(g(x)=x+3\\\\ge2\\\\) requires \\\\(x\\\\ge-1\\\\).",
      "\\\\(f(g(x))=(x+1)^2+1\\\\le10\\\\) gives \\\\( (x+1)^2\\\\le9\\\\), so \\\\(-4\\\\le x\\\\le2\\\\).",
      "Intersecting with \\\\(x\\\\ge-1\\\\) gives \\\\(-1\\\\le x\\\\le2\\\\). [5]"
    ],
    "answer": "Range [1,∞); inverse 2 + √(x−1), x≥1; solution −1≤x≤2.",
    "misconception": "Solving a composite inequality without checking the domain can introduce extraneous values.",
    "reflection": "Which constraint changed the answer to part (c)?"
  },
  {
    "id": "W01-M1",
    "section": "M",
    "title": "A pricing model worth questioning",
    "marks": 12,
    "minutes": 29,
    "ao": {
      "AO1": 3,
      "AO2": 3,
      "AO3": 6
    },
    "topics": [
      "quadratics",
      "inequalities",
      "modelling"
    ],
    "stem": "A school club plans to sell tickets. At a price of \\\\(p\\\\) dollars, the predicted number sold is \\\\(N(p)=300-10p\\\\), for \\\\(0\\\\le p\\\\le30\\\\). Fixed event costs are $1800. Each ticket sold also costs $2 to provide. Profit is revenue minus total costs.",
    "parts": [
      [
        "Show that the predicted profit is \\\\(P(p)=-10p^2+320p-2400\\\\).",
        3
      ],
      [
        "Determine the ticket prices for which predicted profit is non-negative.",
        4
      ],
      [
        "Find the ticket price producing maximum predicted profit, and state that profit.",
        3
      ],
      [
        "Explain one limitation of the model.",
        2
      ]
    ],
    "hint": "Revenue is pN(p). Costs are 1800 + 2N(p). For nonnegative profit, factor the quadratic after dividing by −10 carefully.",
    "steps": [
      "\\\\(P(p)=p(300-10p)-1800-2(300-10p)=-10p^2+320p-2400\\\\). [3]",
      "\\\\(P(p)=-10(p^2-32p+240)=-10(p-12)(p-20)\\\\).",
      "Because the quadratic opens downward, \\\\(P(p)\\\\ge0\\\\) for \\\\(12\\\\le p\\\\le20\\\\), within the model domain. [4]",
      "The turning point is at \\\\(p=16\\\\), the midpoint of 12 and 20 (or \\\\(-b/(2a)\\\\)). \\\\(P(16)=-10(4)(-4)=160\\\\). [3]",
      "The demand model assumes sales fall linearly with ticket price; real demand may vary for other reasons (or pricing may have discrete constraints). [2]"
    ],
    "answer": "Break-even interval $12–$20 inclusive; maximum predicted profit $160 at $16.",
    "misconception": "Profit is not the same as revenue. Ticket provision costs must be included.",
    "reflection": "How might the predicted optimum change if the demand function were less reliable at high prices?"
  },
  {
    "id": "W01-A1",
    "section": "A",
    "title": "Choosing a sample",
    "marks": 4,
    "minutes": 9,
    "ao": {
      "AO1": 2,
      "AO3": 2
    },
    "topics": [
      "sampling",
      "statistics"
    ],
    "stem": "A sixth-form survey wants opinions from students in Years 12 and 13. Year 12 has 180 students and Year 13 has 120 students. The researcher wants 30 responses that reflect the relative sizes of both years.",
    "parts": [
      [
        "Name an appropriate sampling method.",
        1
      ],
      [
        "Find the number of students to sample from each year.",
        2
      ],
      [
        "State one practical requirement for selecting students fairly within each year.",
        1
      ]
    ],
    "hint": "The two year groups should be represented in the same 180:120 ratio as the population.",
    "steps": [
      "Use stratified random sampling by year group. [1]",
      "Year 12: \\\\(30\\\\times180/300=18\\\\). Year 13: \\\\(30\\\\times120/300=12\\\\). [2]",
      "Use a complete list of students in each year group and randomly select without duplicates within each stratum. [1]"
    ],
    "answer": "Stratified random sample; 18 from Year 12 and 12 from Year 13.",
    "misconception": "An equal number from each year would not reflect the year groups' unequal sizes.",
    "reflection": "What source of bias might remain even after a valid random selection?"
  },
  {
    "id": "W01-A2",
    "section": "A",
    "title": "Interpreting variation in data",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO1": 4,
      "AO2": 2,
      "AO3": 2
    },
    "topics": [
      "statistics",
      "data"
    ],
    "stem": "The times, in minutes, taken by five students to complete a task are 8, 9, 9, 12 and 17.",
    "parts": [
      [
        "Calculate the mean and median time.",
        3
      ],
      [
        "Calculate the range and the population standard deviation, to 2 decimal places.",
        3
      ],
      [
        "A sixth student takes 50 minutes. Explain which of the mean and median is likely to be more representative of a typical completion time, with a reason.",
        2
      ]
    ],
    "hint": "For standard deviation use \\\\(\\\\sqrt{\\\\frac{\\\\sum x^2}{n}-\\\\bar{x}^2}\\\\).",
    "steps": [
      "Sum is 55; mean \\\\(55/5=11\\\\) minutes and median is 9 minutes. [3]",
      "Range is \\\\(17-8=9\\\\). Sum of squares: \\\\(64+81+81+144+289=659\\\\).",
      "Population variance is \\\\(659/5-11^2=131.8-121=10.8\\\\). Standard deviation \\\\(\\\\sqrt{10.8}\\\\approx3.29\\\\) minutes. [3]",
      "The sixth time is an extreme high value. The mean changes substantially (to \\\\(105/6=17.5\\\\)) while the new median is \\\\( (9+12)/2=10.5\\\\), so the median is more resistant to the outlier. [2]"
    ],
    "answer": "Mean 11, median 9, range 9, population standard deviation 3.29 min; median more robust with the 50-min outlier.",
    "misconception": "Standard deviation is not calculated by averaging absolute deviations; check whether a population or sample formula is required.",
    "reflection": "How does an outlier affect both a measure of centre and a measure of spread?"
  }
];
