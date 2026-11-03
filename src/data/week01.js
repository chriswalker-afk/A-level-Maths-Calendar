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
    "stem": "Simplify both expressions completely.",
    "parts": [
      [
        "Simplify \\(\\dfrac{x^5}{x^2}\\), where \\(x\\ne0\\).",
        1
      ],
      [
        "Write \\(\\sqrt{72}\\) in the form \\(a\\sqrt{2}\\), where \\(a\\) is an integer.",
        1
      ]
    ],
    "hint": "Find the largest square factor of 72.",
    "steps": [
      "Using \\(x^m/x^n=x^{m-n}\\), the first expression is \\(x^{5-2}=x^3\\). [1]",
      "Since \\(72=36\\times2\\), \\(\\sqrt{72}=6\\sqrt2\\). [1]"
    ],
    "answer": "\\(\\displaystyle x^3,\\qquad 6\\sqrt2\\)",
    "misconception": "Do not simplify a square root by dividing the number inside by 2.",
    "reflection": "What is the difference between an index law and simplifying a surd?"
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
    "stem": "The equation \\(x^2-6x+k=0\\) has a repeated real root.",
    "parts": [
      [
        "Find the value of \\(k\\).",
        2
      ]
    ],
    "hint": "A repeated root means the discriminant is zero.",
    "steps": [
      "For \\(ax^2+bx+c=0\\), a repeated root requires \\(b^2-4ac=0\\).",
      "Here \\(36-4k=0\\), so \\(k=9\\)."
    ],
    "answer": "\\(k=9\\)",
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
    "stem": "Let \\(f(x)=3x-7\\), for real \\(x\\).",
    "parts": [
      [
        "Find \\(f^{-1}(x)\\).",
        2
      ]
    ],
    "hint": "Use y = 3x − 7, swap x and y, then rearrange.",
    "steps": [
      "Let \\(y=3x-7\\). Interchange variables: \\(x=3y-7\\).",
      "Rearrange: \\(3y=x+7\\), hence \\(f^{-1}(x)=(x+7)/3\\)."
    ],
    "answer": "\\(f^{-1}(x)=\\frac{x+7}{3}\\)",
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
    "stem": "Consider \\(g(x)=\\dfrac{x^2-9}{x^2+4x+3}\\).",
    "parts": [
      [
        "Simplify \\(g(x)\\) and state all excluded values of \\(x\\).",
        2
      ]
    ],
    "hint": "Factor both numerator and denominator before cancelling.",
    "steps": [
      "\\(g(x)=\\dfrac{(x-3)(x+3)}{(x+1)(x+3)}\\).",
      "For \\(x\\ne -3,-1\\), cancel \\(x+3\\) to obtain \\(\\dfrac{x-3}{x+1}\\). Keep both original exclusions."
    ],
    "answer": "\\(g(x)=\\dfrac{x-3}{x+1}\\), \\(x\\ne-3,-1\\)",
    "misconception": "Cancelling a common factor never removes exclusions from the original function.",
    "reflection": "Why does x = −3 remain excluded?"
  },
  {
    "id": "W01-R5",
    "section": "R",
    "title": "Factor theorem",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "algebra",
      "polynomials"
    ],
    "stem": "A polynomial is defined by \\(f(x)=x^3-4x^2+x+6\\).",
    "parts": [
      [
        "Determine whether \\((x-2)\\) is a factor of \\(f(x)\\). Give a reason.",
        2
      ]
    ],
    "hint": "What does the factor theorem say about f(2)?",
    "steps": [
      "Evaluate \\(f(2)=2^3-4(2^2)+2+6=8-16+2+6=0\\). [1]",
      "Since \\(f(2)=0\\), the factor theorem shows that \\((x-2)\\) is a factor. [1]"
    ],
    "answer": "Yes: \\(f(2)=0\\).",
    "misconception": "Testing whether x = 2 is a root is sufficient; long division is not needed.",
    "reflection": "What value would you substitute to test (x + 3) as a factor?"
  },
  {
    "id": "W01-R6",
    "section": "R",
    "title": "Quadratic inequalities",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "quadratics",
      "inequalities"
    ],
    "stem": "Solve the inequality over the real numbers.",
    "parts": [
      [
        "\\(x^2-5x+6\\le 0\\).",
        2
      ]
    ],
    "hint": "Factorise first, then think where an upward-opening parabola is below the axis.",
    "steps": [
      "\\(x^2-5x+6=(x-2)(x-3)\\), giving roots \\(x=2,3\\). [1]",
      "The expression is non-positive between the roots, including the endpoints: \\(2\\le x\\le3\\). [1]"
    ],
    "answer": "\\(2\\le x\\le3\\)",
    "misconception": "Do not reverse the solution interval; check one value between the roots.",
    "reflection": "How would the solution change for a strict inequality?"
  },
  {
    "id": "W01-R7",
    "section": "R",
    "title": "Partial fractions",
    "marks": 2,
    "minutes": 4,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "algebra",
      "partial fractions"
    ],
    "stem": "Express the rational expression in partial fractions.",
    "parts": [
      [
        "\\(\\dfrac{5x+1}{(x+1)(x+2)}\\).",
        2
      ]
    ],
    "hint": "Set \\(\\dfrac{5x+1}{(x+1)(x+2)}=\\dfrac{A}{x+1}+\\dfrac{B}{x+2}\\).",
    "steps": [
      "\\(5x+1=A(x+2)+B(x+1)=(A+B)x+(2A+B)\\). [1]",
      "Thus \\(A+B=5\\), \\(2A+B=1\\), so \\(A=-4\\), \\(B=9\\). The result is \\(\\dfrac{-4}{x+1}+\\dfrac{9}{x+2}\\). [1]"
    ],
    "answer": "\\(\\displaystyle-\\frac4{x+1}+\\frac9{x+2}\\)",
    "misconception": "Equate coefficients of x and constants separately; the numerators are not both 5.",
    "reflection": "How can you verify the result quickly without starting again?"
  },
  {
    "id": "W01-R8",
    "section": "R",
    "title": "Modulus inequalities",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "modulus",
      "inequalities"
    ],
    "stem": "Solve the modulus inequality.",
    "parts": [
      [
        "\\(\\lvert2x-3\\rvert<5\\).",
        2
      ]
    ],
    "hint": "Use \\(|A|<c\\iff -c<A<c\\) for \\(c>0\\).",
    "steps": [
      "From \\(\\lvert2x-3\\rvert<5\\), obtain \\(-5<2x-3<5\\). [1]",
      "Add 3 and divide by 2: \\(-1<x<4\\). [1]"
    ],
    "answer": "\\(-1<x<4\\)",
    "misconception": "A modulus inequality of this form is an interval, not two disconnected inequalities.",
    "reflection": "How would the solution set look for |2x−3| > 5?"
  },
  {
    "id": "W01-R9",
    "section": "R",
    "title": "Composite functions",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "functions",
      "composites"
    ],
    "stem": "Let \\(f(x)=2x-1\\) and \\(g(x)=x^2+3\\).",
    "parts": [
      [
        "Solve \\(f(g(x))=13\\).",
        2
      ]
    ],
    "hint": "Substitute the whole expression g(x) into f before solving.",
    "steps": [
      "\\(f(g(x))=2(x^2+3)-1=2x^2+5\\). [1]",
      "So \\(2x^2+5=13\\Rightarrow x^2=4\\Rightarrow x=\\pm2\\). [1]"
    ],
    "answer": "\\(x=-2\\) or \\(x=2\\)",
    "misconception": "f(g(x)) is not multiplication f(x)g(x).",
    "reflection": "How does the order of composition change the result?"
  },
  {
    "id": "W01-R10",
    "section": "R",
    "title": "Graph transformations",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "graphs",
      "transformations"
    ],
    "stem": "A curve has equation \\(y=(x-3)^2+2\\).",
    "parts": [
      [
        "Describe the two translations that take \\(y=x^2\\) onto this curve.",
        2
      ]
    ],
    "hint": "An x − 3 inside the bracket moves the graph horizontally; +2 outside moves it vertically.",
    "steps": [
      "The change \\(x\\mapsto x-3\\) translates the graph 3 units to the right. [1]",
      "Adding 2 outside translates it 2 units upward. [1]"
    ],
    "answer": "Right 3 units, then up 2 units.",
    "misconception": "A negative inside a bracket corresponds to a positive horizontal shift.",
    "reflection": "Where is the vertex of the transformed parabola?"
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
    "stem": "A student claims that \\(x^2-6x+13\\) is always at least 5 for all real \\(x\\).",
    "parts": [
      [
        "Write \\(x^2-6x+13\\) in completed-square form.",
        2
      ],
      [
        "Determine whether the student's claim is true, with proof.",
        3
      ],
      [
        "Another student claims that \\(x^2-6x+13>4\\) for all real \\(x\\). Explain why this new claim is false.",
        3
      ]
    ],
    "hint": "Express the quadratic as a non-negative square plus a constant.",
    "steps": [
      "\\(x^2-6x+13=(x-3)^2+4\\). [2]",
      "Since \\((x-3)^2\\ge 0\\), the expression is at least 4, not necessarily 5. The first claim is false: choose \\(x=3\\) and the value is 4. [3]",
      "The second claim is false because equality is possible: at \\(x=3\\), \\(x^2-6x+13=4\\), which is not strictly greater than 4. [3]"
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
    "stem": "Let \\(f(x)=(x-2)^2+1\\), with domain \\(x\\ge 2\\), and let \\(g(x)=x+3\\).",
    "parts": [
      [
        "State the range of \\(f\\).",
        2
      ],
      [
        "Find \\(f^{-1}(x)\\), stating its domain.",
        3
      ],
      [
        "Solve \\(f(g(x))\\le 10\\), taking account of the domain of the composite function.",
        5
      ]
    ],
    "hint": "Use the restriction x ≥ 2 to choose the correct square-root branch. Check where g(x) belongs to the domain of f.",
    "steps": [
      "Because \\((x-2)^2\\ge 0\\), \\(f(x)\\ge 1\\), with equality at 2. Range is \\([1,\\infty)\\). [2]",
      "From \\(y=(x-2)^2+1\\) and \\(x\\ge 2\\), \\(x=2+\\sqrt{y-1}\\). Hence \\(f^{-1}(x)=2+\\sqrt{x-1}\\), domain \\(x\\ge1\\). [3]",
      "For the composite, \\(g(x)=x+3\\ge2\\) requires \\(x\\ge-1\\).",
      "\\(f(g(x))=(x+1)^2+1\\le10\\) gives \\( (x+1)^2\\le9\\), so \\(-4\\le x\\le2\\).",
      "Intersecting with \\(x\\ge-1\\) gives \\(-1\\le x\\le2\\). [5]"
    ],
    "answer": "Range [1,∞); inverse 2 + √(x−1), x≥1; solution −1≤x≤2.",
    "misconception": "Solving a composite inequality without checking the domain can introduce extraneous values.",
    "reflection": "Which constraint changed the answer to part (c)?"
  },
  {
    "id": "W01-P3",
    "section": "P",
    "title": "The hidden gap in a rational graph",
    "marks": 12,
    "minutes": 25,
    "ao": {
      "AO1": 4,
      "AO2": 8
    },
    "topics": [
      "algebra",
      "rational functions",
      "proof",
      "inequalities"
    ],
    "stem": "A rational function is defined by \\(h(x)=\\dfrac{x^2-4x+3}{x^2-1}\\).",
    "parts": [
      [
        "Simplify \\(h(x)\\) and list every value excluded from its original domain.",
        3
      ],
      [
        "Express the simplified function in the form \\(1+\\dfrac{A}{x+1}\\), finding \\(A\\).",
        2
      ],
      [
        "State the vertical and horizontal asymptotes and the coordinates of the removable discontinuity (hole).",
        3
      ],
      [
        "Solve \\(h(x)>0\\), explaining how the excluded values affect your answer.",
        4
      ]
    ],
    "hint": "Factor both quadratics, but do not forget the original denominator. For the sign inequality, consider the factors of the simplified expression.",
    "steps": [
      "\\(h(x)=\\dfrac{(x-1)(x-3)}{(x-1)(x+1)}=\\dfrac{x-3}{x+1}\\), provided \\(x\\ne-1,1\\). Both exclusions remain. [3]",
      "Since \\(x-3=(x+1)-4\\), \\(h(x)=1-\\dfrac4{x+1}\\), so \\(A=-4\\). [2]",
      "The vertical asymptote is \\(x=-1\\), the horizontal asymptote is \\(y=1\\). At the excluded value \\(x=1\\), the simplified expression gives \\(-1\\), so the hole is \\((1,-1)\\). [3]",
      "For \\(\\dfrac{x-3}{x+1}>0\\), numerator and denominator must have the same sign. A sign diagram with boundaries \\(x=-1,3\\) gives \\(x<-1\\) or \\(x>3\\). Neither interval contains \\(x=1\\), so the hole does not change these solution intervals. [4]"
    ],
    "answer": "\\(h(x)=1-\\dfrac4{x+1}\\), \\(x\\ne-1,1\\); asymptotes \\(x=-1,\\ y=1\\); hole \\((1,-1)\\); positive for \\(x<-1\\) or \\(x>3\\).",
    "misconception": "Cancellation removes a factor but not a domain restriction. A removable discontinuity is not a vertical asymptote.",
    "reflection": "How would your sign diagram differ if the numerator had a repeated factor?"
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
    "stem": "A school club plans to sell tickets. At a price of \\(p\\) dollars, the predicted number sold is \\(N(p)=300-10p\\), for \\(0\\le p\\le30\\). Fixed event costs are $1800. Each ticket sold also costs $2 to provide. Profit is revenue minus total costs.",
    "parts": [
      [
        "Show that the predicted profit is \\(P(p)=-10p^2+320p-2400\\).",
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
      "\\(P(p)=p(300-10p)-1800-2(300-10p)=-10p^2+320p-2400\\). [3]",
      "\\(P(p)=-10(p^2-32p+240)=-10(p-12)(p-20)\\).",
      "Because the quadratic opens downward, \\(P(p)\\ge0\\) for \\(12\\le p\\le20\\), within the model domain. [4]",
      "The turning point is at \\(p=16\\), the midpoint of 12 and 20 (or \\(-b/(2a)\\)). \\(P(16)=-10(4)(-4)=160\\). [3]",
      "The demand model assumes sales fall linearly with ticket price; real demand may vary for other reasons (or pricing may have discrete constraints). [2]"
    ],
    "answer": "Break-even interval $12–$20 inclusive; maximum predicted profit $160 at $16.",
    "misconception": "Profit is not the same as revenue. Ticket provision costs must be included.",
    "reflection": "How might the predicted optimum change if the demand function were less reliable at high prices?"
  },
  {
    "id": "W01-M2",
    "section": "M",
    "title": "Which advertising campaign is actually better?",
    "marks": 14,
    "minutes": 36,
    "ao": {
      "AO1": 3,
      "AO2": 4,
      "AO3": 7
    },
    "topics": [
      "functions",
      "composition",
      "calculus",
      "inequalities",
      "modelling"
    ],
    "stem": "A business is comparing two advertising campaigns. Spending \\(x\\) hundreds of dollars on advertising is allowed for \\(0\\le x\\le6\\). Campaign A predicts \\(f(x)=40+20x-2x^2\\) customers, and Campaign B predicts \\(g(x)=60+8x-x^2\\) customers. Each customer contributes $25 towards profit, and costs are \\(C(x)=600+100x\\) dollars, including advertising expenditure. For either campaign, predicted profit is \\(25\\times\\text{customers}-C(x)\\).",
    "parts": [
      [
        "Write the profit \\(P_A(x)\\) for Campaign A as a combination of functions, and show that \\(P_A(x)=400+400x-50x^2\\).",
        3
      ],
      [
        "Show that Campaign B has profit \\(P_B(x)=900+100x-25x^2\\).",
        2
      ],
      [
        "Find each campaign's maximum predicted profit and the advertising spend at which it occurs. Justify both maxima.",
        5
      ],
      [
        "Find all allowed values of \\(x\\) for which Campaign A predicts a greater profit than Campaign B.",
        3
      ],
      [
        "State one reason that the decision should not be based only on these model predictions.",
        1
      ]
    ],
    "hint": "Use \\(P_A(x)=25f(x)-C(x)\\) and \\(P_B(x)=25g(x)-C(x)\\). To compare campaigns, look at \\(P_A(x)-P_B(x)\\), not their separate maximum points.",
    "steps": [
      "\\(P_A=25(40+20x-2x^2)-(600+100x)=400+400x-50x^2\\). [3]",
      "\\(P_B=25(60+8x-x^2)-(600+100x)=900+100x-25x^2\\). [2]",
      "\\(P'_A=400-100x=0\\Rightarrow x=4\\). Since \\(P''_A=-100<0\\), this is a maximum; \\(P_A(4)=1200\\). Campaign A spends $400 on advertising and predicts $1200 profit. [3]",
      "\\(P'_B=100-50x=0\\Rightarrow x=2\\). Since \\(P''_B=-50<0\\), this is a maximum; \\(P_B(2)=1000\\). Campaign B spends $200 and predicts $1000 profit. [2]",
      "\\(P_A-P_B=-500+300x-25x^2=-25(x-2)(x-10)\\). Hence \\(P_A>P_B\\) for \\(2<x<10\\); intersect with the permitted \\(0\\le x\\le6\\) to obtain \\(2<x\\le6\\). [3]",
      "Customer-response predictions might be inaccurate or change with season, competition or other factors. [1]"
    ],
    "answer": "Campaign A: maximum $1200 at $400 advertising; Campaign B: maximum $1000 at $200 advertising. Campaign A predicts more profit when \\(2<x\\le6\\).",
    "misconception": "The best campaign at a fixed spend is not necessarily the one with the largest unrestricted maximum. Compare values over the same domain.",
    "reflection": "Which campaign would you recommend if only $150 could be spent, and why?"
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
      "Year 12: \\(30\\times180/300=18\\). Year 13: \\(30\\times120/300=12\\). [2]",
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
    "hint": "For standard deviation use \\(\\sqrt{\\frac{\\sum x^2}{n}-\\bar{x}^2}\\).",
    "steps": [
      "Sum is 55; mean \\(55/5=11\\) minutes and median is 9 minutes. [3]",
      "Range is \\(17-8=9\\). Sum of squares: \\(64+81+81+144+289=659\\).",
      "Population variance is \\(659/5-11^2=131.8-121=10.8\\). Standard deviation \\(\\sqrt{10.8}\\approx3.29\\) minutes. [3]",
      "The sixth time is an extreme high value. The mean changes substantially (to \\(105/6=17.5\\)) while the new median is \\( (9+12)/2=10.5\\), so the median is more resistant to the outlier. [2]"
    ],
    "answer": "Mean 11, median 9, range 9, population standard deviation 3.29 min; median more robust with the 50-min outlier.",
    "misconception": "Standard deviation is not calculated by averaging absolute deviations; check whether a population or sample formula is required.",
    "reflection": "How does an outlier affect both a measure of centre and a measure of spread?"
  },
  {
    "id": "W01-A3",
    "section": "A",
    "title": "Reading a grouped distribution carefully",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO1": 3,
      "AO2": 2,
      "AO3": 5
    },
    "topics": [
      "statistics",
      "histograms",
      "sampling",
      "estimation"
    ],
    "stem": "A voluntary survey of 120 students recorded travel time \\(t\\) to school, in minutes. The grouped results are:\n\n| Travel time (min) | \\(0\\le t<10\\) | \\(10\\le t<20\\) | \\(20\\le t<40\\) | \\(40\\le t<70\\) |\n|---|---:|---:|---:|---:|\n| Frequency | 18 | 48 | 36 | 18 |\n\nA histogram would use frequency density on its vertical axis.",
    "parts": [
      [
        "Calculate the frequency densities for the classes \\(20\\le t<40\\) and \\(40\\le t<70\\).",
        2
      ],
      [
        "Estimate the median travel time using linear interpolation within its class.",
        3
      ],
      [
        "Estimate the percentage of surveyed students whose travel time exceeds 30 minutes. State your within-class assumption.",
        3
      ],
      [
        "Give two limitations of using these results to estimate the travel times of all students at the school.",
        2
      ]
    ],
    "hint": "Frequency density is frequency divided by class width. The median is around the 60th item. For 30 minutes, you must estimate part of a class.",
    "steps": [
      "For \\(20\\le t<40\\), frequency density \\(=36/20=1.8\\). For \\(40\\le t<70\\), density \\(=18/30=0.6\\). [2]",
      "The median position is the 60th observation. Cumulative frequency before \\(10\\le t<20\\) is 18, and that class contains 48 observations. Median estimate \\(=10+\\dfrac{60-18}{48}\\times10=18.75\\) minutes. [3]",
      "Assuming observations are uniformly spread inside \\(20\\le t<40\\), about half of its 36 observations are above 30 minutes: 18. Including the final class gives \\(18+18=36\\). Percentage \\(\\dfrac{36}{120}\\times100=30\\%\\). [3]",
      "Voluntary responses may be unrepresentative (e.g. long-distance travellers respond differently), and grouping loses the exact travel times / assuming uniformity may not match the real distribution. [2]"
    ],
    "answer": "Frequency densities 1.8 and 0.6; estimated median 18.75 minutes; estimated proportion over 30 minutes 30%; with stated modelling and sampling limitations.",
    "misconception": "With unequal class widths, histogram heights must use frequency density, not raw frequency. Estimates inside classes depend on assumptions.",
    "reflection": "How could a stratified random sample improve the reliability of the conclusion?"
  },
  {
    "id": "W01-T1",
    "section": "T",
    "title": "Tangency without a diagram",
    "marks": 8,
    "minutes": 12,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "quadratics",
      "geometry",
      "discriminants"
    ],
    "stem": "Let \\(f(x)=x^2-4x+7\\). A straight line has equation \\(y=mx+3\\).",
    "parts": [
      [
        "Write \\(f(x)\\) in completed-square form and hence state its minimum value.",
        2
      ],
      [
        "Find every value of \\(m\\) for which the line is a tangent to the curve \\(y=f(x)\\).",
        4
      ],
      [
        "For \\(m=-8\\), find the point of tangency.",
        2
      ]
    ],
    "hint": "Tangency means the line and curve have exactly one common point, so their intersection quadratic has discriminant zero.",
    "steps": [
      "\\(f(x)=(x-2)^2+3\\), so the minimum is \\(3\\). [2]",
      "Set \\(x^2-4x+7=mx+3\\). Rearranging gives \\(x^2-(m+4)x+4=0\\). At tangency \\((m+4)^2-16=0\\), so \\(m+4=\\pm4\\), giving \\(m=0\\) or \\(m=-8\\). [4]",
      "For \\(m=-8\\), the quadratic is \\(x^2+4x+4=(x+2)^2=0\\), so \\(x=-2\\). Then \\(y=-8(-2)+3=19\\). The point is \\((-2,19)\\). [2]"
    ],
    "answer": "Minimum \\(3\\); \\(m=0\\) or \\(m=-8\\); point \\((-2,19)\\).",
    "misconception": "A tangent need not be horizontal; both values of m are valid.",
    "reflection": "How could the derivative confirm both tangent gradients?"
  },
  {
    "id": "W01-T2",
    "section": "T",
    "title": "A trigonometric inequality with a missing point",
    "marks": 12,
    "minutes": 18,
    "ao": {
      "AO1": 3,
      "AO2": 9
    },
    "topics": [
      "trigonometry",
      "algebra",
      "inequalities"
    ],
    "stem": "For \\(0\\le\\theta<2\\pi\\), define \\(F(\\theta)=2\\sin^2\\theta-3\\sin\\theta+1\\).",
    "parts": [
      [
        "Factorise \\(F(\\theta)\\) as a product of two expressions involving \\(\\sin\\theta\\).",
        2
      ],
      [
        "Solve \\(F(\\theta)=0\\), giving all exact angles in the given interval.",
        4
      ],
      [
        "Solve \\(F(\\theta)<0\\), carefully excluding any equality points.",
        4
      ],
      [
        "Determine the minimum possible value of \\(F(\\theta)\\) in the given interval.",
        2
      ]
    ],
    "hint": "Treat \\(u=\\sin\\theta\\) as a quadratic variable, remembering that \\(-1\\le u\\le1\\).",
    "steps": [
      "\\(F=(2\\sin\\theta-1)(\\sin\\theta-1)\\). [2]",
      "Thus \\(\\sin\\theta=\\tfrac12\\) or \\(\\sin\\theta=1\\); in the interval these occur at \\(\\theta=\\frac{\\pi}{6},\\frac{\\pi}{2},\\frac{5\\pi}{6}\\). [4]",
      "The quadratic in \\(u=\\sin\\theta\\) is negative when \\(\\tfrac12<u<1\\). Thus \\(\\frac{\\pi}{6}<\\theta<\\frac{\\pi}{2}\\) or \\(\\frac{\\pi}{2}<\\theta<\\frac{5\\pi}{6}\\). The middle point is excluded because \\(F(\\pi/2)=0\\). [4]",
      "Complete the square in \\(u\\): \\(2u^2-3u+1=2(u-\\tfrac34)^2-\\tfrac18\\). Since \\(u=\\tfrac34\\) is attainable, the minimum is \\(-\\tfrac18\\). [2]"
    ],
    "answer": "Zeros: \\(\\frac{\\pi}{6},\\frac{\\pi}{2},\\frac{5\\pi}{6}\\). Negative on \\((\\frac{\\pi}{6},\\frac{\\pi}{2})\\cup(\\frac{\\pi}{2},\\frac{5\\pi}{6})\\). Minimum \\(-\\frac18\\).",
    "misconception": "The point (\theta=pi/2) must be removed from the negative interval; (sin\theta=1) makes the product zero.",
    "reflection": "Why are the two negative intervals separated by an excluded point?"
  },
  {
    "id": "W01-T3",
    "section": "T",
    "title": "A sample and its estimates",
    "marks": 12,
    "minutes": 15,
    "ao": {
      "AO1": 6,
      "AO2": 2,
      "AO3": 4
    },
    "topics": [
      "sampling",
      "statistics",
      "estimation"
    ],
    "stem": "A sixth form has 240 Year 12 students and 160 Year 13 students. A researcher takes a stratified random sample of 40 students, proportional to year-group size. The sampled students report their journeys to school; grouped distances are:\n\n| Distance \\(d\\) (km) | \\(0\\le d<5\\) | \\(5\\le d<10\\) | \\(10\\le d<20\\) |\n|---|---:|---:|---:|\n| Frequency | 10 | 18 | 12 |",
    "parts": [
      [
        "Determine how many students should be sampled from each year group.",
        3
      ],
      [
        "Use class midpoints to estimate the mean journey distance.",
        4
      ],
      [
        "Estimate the median journey distance using linear interpolation.",
        3
      ],
      [
        "State two reasons why the estimates might not match the true statistics for the entire sixth form.",
        2
      ]
    ],
    "hint": "Use proportional allocation for the sample. For grouped means use the weighted class midpoints; for the median locate the 20th value.",
    "steps": [
      "There are \\(240+160=400\\) students. Year 12: \\(40(240/400)=24\\); Year 13: \\(40(160/400)=16\\). [3]",
      "Class midpoints are \\(2.5,7.5,15\\) km. Weighted total \\(10(2.5)+18(7.5)+12(15)=25+135+180=340\\). Estimated mean \\(340/40=8.5\\) km. [4]",
      "The median lies around the 20th value, in the second class (10 observations before it). Interpolate: \\(5+\\frac{20-10}{18}\\times5=7.777\\ldots\\approx7.78\\) km. [3]",
      "The sample may suffer random sampling variation, incomplete or non-response, and midpoint/interpolation assumptions introduce approximation because exact individual distances were not recorded. Any two justified limitations. [2]"
    ],
    "answer": "24 Year 12, 16 Year 13; mean ≈ 8.5 km; median ≈ 7.78 km.",
    "misconception": "Using equal numbers in the two year groups is not proportional stratification.",
    "reflection": "How could you improve the reliability of the estimates with the same sampling budget?"
  },
  {
    "id": "W01-X1",
    "section": "X",
    "title": "A whole family of touching curves",
    "marks": 14,
    "minutes": 40,
    "ao": {
      "AO1": 3,
      "AO2": 11
    },
    "topics": [
      "quadratics",
      "proof",
      "calculus",
      "parameter"
    ],
    "stem": "For each real number \\(k\\), a curve \\(C_k\\) has equation \\(y=f_k(x)=x^2-2(k+1)x+k^2+2k+5\\). A straight line \\(L\\) has equation \\(y=2x+c\\).",
    "parts": [
      [
        "Show that every curve \\(C_k\\) has minimum \\(y\\)-value 4, irrespective of \\(k\\).",
        3
      ],
      [
        "Find \\(c\\) in terms of \\(k\\) if \\(L\\) touches \\(C_k\\) at exactly one point.",
        4
      ],
      [
        "Prove that the \\(y\\)-coordinate of the point of tangency is always 5.",
        3
      ],
      [
        "Find the values of \\(k\\) for which \\(L\\) has a positive \\(y\\)-intercept.",
        2
      ],
      [
        "Find the value of \\(k\\) for which \\(L\\) passes through \\((1,3)\\).",
        2
      ]
    ],
    "hint": "Complete the square first. At tangency, the quadratic intersection equation has one repeated solution.",
    "steps": [
      "\\(f_k(x)=(x-k-1)^2+4\\), so the minimum is \\(4\\) at \\(x=k+1\\) for every real \\(k\\). [3]",
      "Equating line and curve: \\(x^2-2(k+2)x+k^2+2k+5-c=0\\). For one repeated root, its discriminant is zero: \\(4(k+2)^2-4(k^2+2k+5-c)=0\\). This simplifies to \\(2k-1+c=0\\), so \\(c=1-2k\\). [4]",
      "At tangency the repeated root is \\(x=k+2\\). On the line, \\(y=2(k+2)+1-2k=5\\), independent of \\(k\\). [3]",
      "A positive \\(y\\)-intercept requires \\(c=1-2k>0\\), so \\(k<\\tfrac12\\). [2]",
      "At \\((1,3)\\), \\(3=2+c\\), so \\(c=1\\) and \\(1-2k=1\\Rightarrow k=0\\). [2]"
    ],
    "answer": "Minimum \\(4\\); tangent \\(c=1-2k\\); tangency height always \\(5\\); positive intercept when \\(k<\\tfrac12\\); line through \\((1,3)\\) when \\(k=0\\).",
    "misconception": "Do not confuse the parameter k defining the curve with the slope of the tangent line, which is fixed at 2.",
    "reflection": "Can you obtain the constant tangency height again using differentiation instead of a discriminant?"
  }
];
