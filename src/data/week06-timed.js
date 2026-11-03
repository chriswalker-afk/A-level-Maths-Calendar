export const week06Timed = [
  {
    "id": "W06-T1",
    "section": "T",
    "title": "An arithmetic target and an odd-number proof",
    "marks": 8,
    "minutes": 12,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "arithmetic progression",
      "quadratic inequalities",
      "sigma proof"
    ],
    "stem": "An arithmetic series has first term \\(9\\) and common difference \\(4\\). Its first \\(n\\) terms add to \\(S_n\\).",
    "parts": [
      [
        "Show that \\(S_n=n(2n+7)\\).",
        2
      ],
      [
        "Find the smallest positive integer \\(n\\) for which \\(S_n>500\\) and justify why your answer is the first possible one.",
        3
      ],
      [
        "Prove, using algebraic sums rather than a diagram, that \\(\\displaystyle\\sum_{k=1}^{n}(2k-1)=n^2\\) for every positive integer \\(n\\).",
        3
      ]
    ],
    "hint": "Use \\(S_n=\\frac n2[2a+(n-1)d]\\). For the final proof, separate the two sums \\(2\\sum k\\) and \\(\\sum1\\).",
    "steps": [
      "The arithmetic sum is \\(S_n=\\frac n2[2(9)+(n-1)4]=\\frac n2(4n+14)=n(2n+7)\\). [2]",
      "We need \\(n(2n+7)>500\\). Check the integers on either side of the positive quadratic crossing: \\(S_{14}=14(35)=490\\) and \\(S_{15}=15(37)=555\\). Since each new term is positive, \\(S_n\\) strictly increases; the first valid integer is \\(15\\). [3]",
      "By splitting the sum, \\(\\sum_{k=1}^{n}(2k-1)=2\\sum_{k=1}^{n}k-\\sum_{k=1}^{n}1\\). Using \\(\\sum_{k=1}^{n}k=\\frac{n(n+1)}2\\) and \\(\\sum_{k=1}^{n}1=n\\), the expression is \\(n(n+1)-n=n^2\\), proving the statement for any positive integer. [3]"
    ],
    "answer": "\\(S_n=n(2n+7)\\); first threshold at \\(n=15\\); \\(\\sum_{k=1}^{n}(2k-1)=n^2\\).",
    "misconception": "A real root of S_n = 500 is not an admissible number of terms; n must be an integer and the inequality is strict.",
    "reflection": "Why is checking two neighbouring integer values sufficient once you know all future terms are positive?"
  },
  {
    "id": "W06-T2",
    "section": "T",
    "title": "Two binomial expansions in one expression",
    "marks": 12,
    "minutes": 17,
    "ao": {
      "AO1": 3,
      "AO2": 6,
      "AO3": 3
    },
    "topics": [
      "integer binomial expansion",
      "fractional binomial expansion",
      "products of series",
      "domain of validity"
    ],
    "stem": "Let \\(G(x)=\\frac{\\sqrt{1+x}}{1-3x}\\). Use binomial expansions about \\(x=0\\) and retain terms up to the powers requested.",
    "parts": [
      [
        "Find the coefficient of \\(x^3\\) in \\((1-2x)^7\\).",
        2
      ],
      [
        "Expand \\((1-3x)^{-1}\\) up to and including \\(x^3\\).",
        3
      ],
      [
        "Expand \\((1+x)^{1/2}\\) up to and including \\(x^3\\).",
        3
      ],
      [
        "Hence find the coefficient of \\(x^2\\) in the series for \\(G(x)\\).",
        2
      ],
      [
        "State the common open interval on which both infinite expansions, and hence the product expansion, are valid. Explain the restriction.",
        2
      ]
    ],
    "hint": "For the coefficient in a product of series, the x-squared contribution comes from degrees (0,2), (1,1) and (2,0). For validity, intersect the two input intervals.",
    "steps": [
      "In \\((1-2x)^7\\), the cubic term is \\(\\binom73(-2x)^3=35(-8)x^3=-280x^3\\). Coefficient: \\(-280\\). [2]",
      "Using the geometric or binomial series, \\((1-3x)^{-1}=1+3x+9x^2+27x^3+\\cdots\\). [3]",
      "For \\(n=\\frac12\\), \\((1+x)^{1/2}=1+\\frac12x-\\frac18x^2+\\frac1{16}x^3+\\cdots\\). The quadratic coefficient is \\(\\frac{(1/2)(-1/2)}2=-\\frac18\\), and the cubic coefficient is \\(\\frac{(1/2)(-1/2)(-3/2)}6=\\frac1{16}\\). [3]",
      "Multiply the two expansions. The coefficient of \\(x^2\\) in G is \\(1(9)+(\\frac12)(3)+(-\\frac18)(1)=9+\\frac32-\\frac18=\\frac{83}{8}\\). [2]",
      "The denominator expansion requires \\(|3x|<1\\), so \\(|x|<\\frac13\\); the square-root expansion requires \\(|x|<1\\). Their common open interval is \\(-\\frac13<x<\\frac13\\). [2]"
    ],
    "answer": "Coefficient \\(-280\\) in the integer expansion; \\([x^2]G(x)=\\frac{83}{8}\\); common validity \\(-\\frac13<x<\\frac13\\).",
    "misconception": "The validity of a product of two infinite expansions is restricted by the tighter interval; it is not automatically the larger of their two ranges.",
    "reflection": "Why is the cubic coefficient of the square-root series positive even though its quadratic coefficient is negative?"
  },
  {
    "id": "W06-T3",
    "section": "T",
    "title": "Exact distance during a reversal of motion",
    "marks": 12,
    "minutes": 16,
    "ao": {
      "AO1": 2,
      "AO2": 4,
      "AO3": 6
    },
    "topics": [
      "kinematics by integration",
      "quadratic velocity",
      "turning times",
      "total distance",
      "model critique"
    ],
    "stem": "A particle on a straight rail has acceleration \\(a(t)=6t-12\\ \\mathrm{m\\,s^{-2}}\\), initial velocity \\(v(0)=8\\ \\mathrm{m\\,s^{-1}}\\), and initial displacement \\(s(0)=0\\). The model applies for \\(0\\le t\\le4\\) seconds, with positive displacement to the right.",
    "parts": [
      [
        "Find the velocity function \\(v(t)\\).",
        2
      ],
      [
        "Find the two times when the particle changes direction, in exact form, and give the direction in each resulting interval.",
        3
      ],
      [
        "Calculate the net displacement and exact total distance travelled from \\(t=0\\) to \\(t=4\\).",
        3
      ],
      [
        "Find the acceleration and velocity at \\(t=2\\) and explain what their values mean.",
        2
      ],
      [
        "State two plausible limitations of using this polynomial model for an actual vehicle on a rail beyond the four-second observation.",
        2
      ]
    ],
    "hint": "Integrate twice and retain the constants from the initial conditions. To find total distance, locate the zeros of v(t) and sum the absolute position changes.",
    "steps": [
      "Integrating, \\(v(t)=3t^2-12t+C\\). Since \\(v(0)=8\\), \\(v(t)=3t^2-12t+8\\). [2]",
      "Solve \\(3t^2-12t+8=0\\), giving \\(t=2\\pm\\frac{2\\sqrt3}{3}\\). The upward-opening quadratic is positive before the first root, negative between the roots and positive after the second. Thus the motion is right, left, then right. [3]",
      "Integrating again and using \\(s(0)=0\\), \\(s(t)=t^3-6t^2+8t\\). At the two turning times \\(t_-=2-\\frac{2\\sqrt3}3,\\ t_+=2+\\frac{2\\sqrt3}3\\), the displacements are \\(s(t_-)=\\frac{16\\sqrt3}{9}\\) and \\(s(t_+)=-\\frac{16\\sqrt3}{9}\\) metres. Since \\(s(4)=s(0)=0\\), the net displacement is \\(0\\). Distance is \\(|s(t_-)|+|s(t_+)-s(t_-)|+|s(4)-s(t_+)|=\\frac{64\\sqrt3}{9}\\ \\mathrm m\\). [3]",
      "At \\(t=2\\), \\(a(2)=0\\ \\mathrm{m\\,s^{-2}}\\) and \\(v(2)=-4\\ \\mathrm{m\\,s^{-1}}\\). It is travelling left at constant instantaneous velocity to first order; zero acceleration is not rest. [2]",
      "The formula is calibrated only over \\(0\\le t\\le4\\); extrapolating would impose unlimited polynomial growth in speed/acceleration. An actual vehicle might encounter friction, speed controls or a finite rail length. Any two distinct contextual limitations. [2]"
    ],
    "answer": "\\(v(t)=3t^2-12t+8\\), reversing at \\(2\\pm\\frac{2\\sqrt3}{3}\\) s; displacement \\(0\\); total distance \\(\\frac{64\\sqrt3}{9}\\approx12.317\\ \\mathrm m\\).",
    "misconception": "Even if the final position equals the starting position, the distance travelled is not zero. Break the journey at both velocity zeros.",
    "reflection": "How can you deduce the three direction intervals from the velocity graph without drawing the full position graph?"
  }
];
