export const week08PureProblems = [
  {
    "id": "W08-P1",
    "section": "P",
    "title": "Bracket and refine a non-factorisable root",
    "marks": 8,
    "minutes": 21,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "change of sign",
      "Newton–Raphson",
      "accuracy",
      "method limitations"
    ],
    "stem": "Let \\(f(x)=x^3-x-1\\). The equation \\(f(x)=0\\) has a positive real root \\(\\alpha\\).",
    "parts": [
      [
        "Use a sign change to show that \\(1.3<\\alpha<1.4\\).",
        2
      ],
      [
        "Write down a Newton–Raphson recurrence for the equation and, starting from \\(x_0=1.3\\), find \\(x_1\\) and \\(x_2\\) to at least six decimal places.",
        3
      ],
      [
        "State the root to four decimal places and demonstrate that this degree of rounding is justified.",
        2
      ],
      [
        "Explain one reason why the method is not guaranteed to converge to a required root from an arbitrary starting value.",
        1
      ]
    ],
    "hint": "First check the signs of \\(f(1.3)\\) and \\(f(1.4)\\). Newton's method uses \\(f'(x)=3x^2-1\\), and an additional update confirms the rounded answer.",
    "steps": [
      "The function is a polynomial and hence continuous. Evaluate \\(f(1.3)=-0.103<0\\) and \\(f(1.4)=0.344>0\\). Therefore at least one root lies in \\((1.3,1.4)\\). In fact \\(f'(x)=3x^2-1>0\\) throughout this interval, so this root is unique there. [2]",
      "Differentiate and substitute into Newton's formula: \\(x_{n+1}=x_n-\\frac{x_n^3-x_n-1}{3x_n^2-1}\\). From \\(x_0=1.3\\), \\(x_1=1.325307125\\ldots\\) and \\(x_2=1.324718280\\ldots\\). [3]",
      "One further update gives \\(x_3=1.324717957\\ldots\\). The iterates agree to four decimal places, giving \\(\\alpha\\approx1.3247\\); alternatively check a sign change across the rounding limits \\(1.32465\\) and \\(1.32475\\). [2]",
      "A zero or very small derivative at a starting point can make the update undefined or produce an enormous step; an unfortunate starting point can also lead to another root or divergence. Any one supported limitation earns credit. [1]"
    ],
    "answer": "\\(1.3<\\alpha<1.4\\), Newton iterates \\(1.325307125,\\ 1.324718280,\\ 1.324717957\\), so \\(\\alpha=1.3247\\) to four decimal places.",
    "misconception": "Agreement of two rounded iterates is strong numerical evidence but, on its own, not a proof of an absolute error bound; check the rounding bracket if rigorous accuracy is needed.",
    "reflection": "Why is this starting bracket particularly suitable compared with a point where the derivative is almost zero?"
  },
  {
    "id": "W08-P2",
    "section": "P",
    "title": "Convexity decides the direction of an integration error",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "trapezium rule",
      "definite exponential integral",
      "convexity",
      "absolute error",
      "numerical accuracy"
    ],
    "stem": "An analyst approximates the area \\(I=\\int_0^1e^x\\,dx\\) with four equal-width trapezia. The exact integral is available as a benchmark for checking the numerical method.",
    "parts": [
      [
        "State the strip width and give the five ordinates in exact form.",
        2
      ],
      [
        "Apply the composite trapezium rule and calculate \\(T_4\\) to six decimal places.",
        3
      ],
      [
        "Evaluate \\(I\\) exactly and give its value to six decimal places.",
        2
      ],
      [
        "Find \\(T_4-I\\) to six decimal places and justify the sign of this error without relying on the decimal calculations.",
        2
      ],
      [
        "Explain what you would change in the numerical method to improve its accuracy.",
        1
      ]
    ],
    "hint": "For four strips \\(h=\\frac14\\) and the nodes are \\(0,\\frac14,\\frac12,\\frac34,1\\). To justify the error sign, examine \\(f''(x)\\).",
    "steps": [
      "The width is \\(h=(1-0)/4=\\frac14\\). The ordinates are \\(1,\\ e^{1/4},\\ e^{1/2},\\ e^{3/4},\\ e\\). [2]",
      "The composite trapezium rule is \\(T_4=\\frac h2[y_0+2(y_1+y_2+y_3)+y_4]\\). Thus \\(T_4=\\frac18[1+2(e^{1/4}+e^{1/2}+e^{3/4})+e]\\approx1.727222\\). [3]",
      "Direct integration gives \\(I=[e^x]_0^1=e-1\\approx1.718282\\). [2]",
      "Subtract to obtain \\(T_4-I\\approx0.008940>0\\). Because \\(f''(x)=e^x>0\\), every straight-line chord over an interval lies above the graph, making the trapezium estimate an overestimate. [2]",
      "Use more, narrower equal-width strips, keeping sufficient calculator precision. This generally reduces the trapezium approximation error for this smooth function. [1]"
    ],
    "answer": "\\(T_4=1.727222\\), \\(I=e-1=1.718282\\), and signed error \\(T_4-I=+0.008940\\) (overestimate).",
    "misconception": "A trapezium estimate is not invariably below the true area; convexity determines the direction of chord error for a smooth curve.",
    "reflection": "Why would halving the strip width usually reduce the trapezium error by approximately a factor of four for a smooth function?"
  },
  {
    "id": "W08-P3",
    "section": "P",
    "title": "Two equivalent rearrangements, two different iteration behaviours",
    "marks": 12,
    "minutes": 24,
    "ao": {
      "AO2": 10,
      "AO3": 2
    },
    "topics": [
      "fixed-point iteration",
      "convergence",
      "cobweb and staircase",
      "root uniqueness",
      "starting-value critique"
    ],
    "stem": "A positive solution \\(\\alpha\\) is required for \\(x^2+x-3=0\\). Two proposed methods are \\(x_{n+1}=g(x_n)=\\sqrt{3-x_n}\\) and \\(x_{n+1}=h(x_n)=3-x_n^2\\). Both share the same positive fixed point when defined.",
    "parts": [
      [
        "Find \\(\\alpha\\) exactly and prove that it is the only positive root of the original equation.",
        2
      ],
      [
        "Starting from \\(x_0=1.5\\), use \\(g\\) to find the next three iterates to six decimal places.",
        3
      ],
      [
        "Determine \\(g'(\\alpha)\\) and use its magnitude and sign to explain the expected local convergence pattern.",
        3
      ],
      [
        "For the same starting value, calculate the first two steps of \\(h\\) and use \\(h'(\\alpha)\\) to explain its local instability.",
        2
      ],
      [
        "Recommend which rearrangement is preferable for a starting value near \\(\\alpha\\), giving two mathematically grounded reasons or qualifications.",
        2
      ]
    ],
    "hint": "Both rearrangements solve the same polynomial. Local stability depends on \\(|g'(\\alpha)|\\) or \\(|h'(\\alpha)|\\), not merely on whether an iterate can be calculated.",
    "steps": [
      "Solving \\(x^2+x-3=0\\) gives \\(x=\\frac{-1\\pm\\sqrt{13}}2\\). Hence \\(\\alpha=\\frac{\\sqrt{13}-1}{2}\\approx1.302776\\). The other root is negative; also \\(2x+1>0\\) for \\(x>0\\), so no other positive root exists. [2]",
      "With \\(g(x)=\\sqrt{3-x}\\) and \\(x_0=1.5\\), \\(x_1=\\sqrt{1.5}\\approx1.224745\\), \\(x_2=\\sqrt{3-1.224744871\\ldots}\\approx1.332387\\) and \\(x_3\\approx1.291361\\). [3]",
      "Differentiate \\(g'(x)=-\\frac1{2\\sqrt{3-x}}\\). At a positive fixed point \\(g(\\alpha)=\\alpha\\), so \\(g'(\\alpha)=-\\frac1{2\\alpha}\\approx-0.383796\\). Since its magnitude is below 1, nearby iterates converge; its negative sign means they alternate on opposite sides of the fixed point, as a cobweb/staircase diagram would show. [3]",
      "For \\(h(x)=3-x^2\\), \\(x_1=3-(1.5)^2=0.75\\) and \\(x_2=3-(0.75)^2=2.4375\\). Here \\(h'(\\alpha)=-2\\alpha\\approx-2.605551\\), with magnitude greater than 1, making the positive fixed point repelling for nearby inputs. [2]",
      "Use \\(g\\) for a starting point near \\(\\alpha\\): \\(|g'(\\alpha)|<1\\) gives local contraction, while \\(|h'(\\alpha)|>1\\) predicts divergence. However the square root requires \\(x_n\\le3\\) and local convergence does not guarantee success from every possible starting value. [2]"
    ],
    "answer": "\\(\\alpha=(\\sqrt{13}-1)/2\\approx1.302776\\). Iteration \\(g\\) gives \\(1.224745,1.332387,1.291361\\) and converges locally, whereas \\(h\\) produces \\(0.75,2.4375\\) and is locally unstable.",
    "misconception": "Two algebraically equivalent fixed-point rearrangements need not behave similarly; the derivative magnitude at the fixed point, not the equality of the equations, controls local stability.",
    "reflection": "How could a cobweb diagram make the distinction between alternating contraction and alternating expansion immediately visible?"
  }
];
