export const week10PureC = [
  {
    "id": "W10-P9",
    "section": "P",
    "paper": "pure",
    "title": "A rational rate and a particular solution",
    "marks": 9,
    "minutes": 11,
    "ao": {
      "AO1": 2,
      "AO2": 7
    },
    "topics": [
      "partial fractions",
      "logarithmic integration",
      "differential equations with initial values"
    ],
    "stem": "For \\(x>0\\), a function \\(y(x)\\) satisfies \\(\\frac{dy}{dx}=\\frac{3x+2}{x(x+2)}\\) and \\(y(1)=0\\).",
    "parts": [
      [
        "Express \\(\\frac{3x+2}{x(x+2)}\\) as partial fractions.",
        3
      ],
      [
        "Integrate to obtain the general solution for y.",
        3
      ],
      [
        "Find the particular solution satisfying the initial value, then calculate \\(y(3)\\) exactly.",
        3
      ]
    ],
    "hint": "Write A/x+B/(x+2) and solve for A and B. Use the initial value only after integrating.",
    "steps": [
      "Set \\(\\frac{3x+2}{x(x+2)}=\\frac A{x}+\\frac B{x+2}\\). [1] Multiplying by x(x+2) gives \\(3x+2=A(x+2)+Bx\\). [1] At x=0, \\(2=2A\\), so A=1; comparing x coefficients gives A+B=3 so B=2. [1]",
      "Therefore \\(\\frac{dy}{dx}=\\frac1x+\\frac2{x+2}\\). [1] Integrating yields \\(y=\\ln x+2\\ln(x+2)+C\\), with x>0. [2]",
      "At x=1, \\(0=\\ln1+2\\ln3+C\\), hence \\(C=-2\\ln3\\). [1] Thus \\(y=\\ln x+2\\ln(x+2)-2\\ln3\\). [1] Substituting x=3 gives \\(y(3)=\\ln3+2\\ln5-2\\ln3=\\ln(25/3)\\). [1]"
    ],
    "answer": "\\(\\frac1x+\\frac2{x+2}\\); \\(y=\\ln x+2\\ln(x+2)-2\\ln3\\), so \\(y(3)=\\ln(25/3)\\).",
    "misconception": "After partial fractions, the additive constant is determined from the original initial value; substituting x=1 into the derivative instead does not determine C.",
    "reflection": "Why is the restriction x>0 important when simplifying the logarithmic antiderivatives?"
  },
  {
    "id": "W10-P10",
    "section": "P",
    "paper": "pure",
    "title": "Two numerical calculations and their accuracy",
    "marks": 9,
    "minutes": 11,
    "ao": {
      "AO1": 3,
      "AO2": 6
    },
    "topics": [
      "trapezium rule",
      "exact integration",
      "Newton–Raphson",
      "error analysis"
    ],
    "stem": "A numerical method is used to approximate \\(I=\\int_0^1\\frac1{1+x^2}\\,dx\\). Separately, the real root of \\(x^3-x-1=0\\) is sought by Newton–Raphson.",
    "parts": [
      [
        "Use four equal-width trapezia to estimate I, showing the five ordinates and the calculation.",
        3
      ],
      [
        "Evaluate I exactly and find the signed error (trapezium estimate minus exact answer) to six decimal places.",
        2
      ],
      [
        "Starting from \\(x_0=1.3\\), derive a Newton–Raphson recurrence and find two successive iterates. Give the root to four decimal places after checking the accuracy.",
        4
      ]
    ],
    "hint": "The trapezium width is 0.25; the antiderivative of 1/(1+x²) is arctan x. For Newton, differentiate the cubic.",
    "steps": [
      "The ordinates at \\(x=0,\\frac14,\\frac12,\\frac34,1\\) are \\(1,\\frac{16}{17},\\frac45,\\frac{16}{25},\\frac12\\). [1] With \\(h=\\frac14\\), \\(T_4=\\frac h2[y_0+2(y_1+y_2+y_3)+y_4]\\). [1] Therefore \\(T_4=\\frac18[1+2(\\frac{16}{17}+\\frac45+\\frac{16}{25})+\\frac12]\\approx0.782794118\\). [1]",
      "The exact value is \\(I=[\\arctan x]_0^1=\\frac\\pi4\\approx0.785398163\\). [1] Signed error \\(T_4-I\\approx-0.002604\\) (an underestimate). [1]",
      "For \\(f(x)=x^3-x-1\\), \\(f'(x)=3x^2-1\\). [1] Newton gives \\(x_{n+1}=x_n-\\frac{x_n^3-x_n-1}{3x_n^2-1}\\). [1] From 1.3, \\(x_1\\approx1.325307125\\) and \\(x_2\\approx1.324718280\\). [1] A further iterate is \\(x_3\\approx1.324717957\\), which supports the four-decimal value \\(1.3247\\); a sign bracket at the rounding boundaries is an alternative. [1]"
    ],
    "answer": "\\(T_4\\approx0.782794118\\), \\(I=\\pi/4\\), signed error \\(-0.002604\\), Newton root \\(1.3247\\) to four decimal places.",
    "misconception": "Agreement of rounded Newton iterates supports a proposed root but does not by itself establish uniqueness; the numerical answer should be accompanied by appropriate checks.",
    "reflection": "Which of these two numerical tasks has an exact benchmark, and why is that useful?"
  },
  {
    "id": "W10-P11",
    "section": "P",
    "paper": "pure",
    "title": "A rise, a maximum and an accumulated total",
    "marks": 10,
    "minutes": 12,
    "ao": {
      "AO1": 2,
      "AO2": 6,
      "AO3": 2
    },
    "topics": [
      "product rule",
      "optimisation",
      "integration by parts",
      "modelling limitations"
    ],
    "stem": "A response index is modelled by \\(R(t)=te^{-t}\\) for \\(t\\ge0\\), where t measures time in hours. The total response accumulated from time 0 to time 2 is modelled by the area beneath the curve.",
    "parts": [
      [
        "Differentiate R(t) and find the stationary time.",
        3
      ],
      [
        "Classify the stationary point and give its exact response value.",
        2
      ],
      [
        "Use integration by parts to calculate \\(\\displaystyle\\int_0^2te^{-t}\\,dt\\) exactly.",
        3
      ],
      [
        "Give two different reasons why the formula may not describe the real response at arbitrarily large times.",
        2
      ]
    ],
    "hint": "Apply the product rule first, then the sign of its factors. For the integral, differentiate t and integrate e^{-t}.",
    "steps": [
      "Differentiation gives \\(R'(t)=e^{-t}-te^{-t}=e^{-t}(1-t)\\). [2] Since the exponential is positive, the only stationary time is \\(t=1\\). [1]",
      "The derivative is positive for \\(0<t<1\\) and negative for \\(t>1\\), so the point is a maximum. [1] Its exact height is \\(R(1)=e^{-1}\\). [1]",
      "With \\(u=t,\\ dv=e^{-t}\\,dt\\), integration by parts gives \\(\\int te^{-t}\\,dt=-te^{-t}-\\int e^{-t}\\,dt=-(t+1)e^{-t}+C\\). [2] Hence \\(\\int_0^2te^{-t}\\,dt=[-(t+1)e^{-t}]_0^2=1-3e^{-2}\\). [1]",
      "A real system might not follow the same growth and decay rates beyond the measured interval, and environmental inputs or system capacity might change. Two distinct contextual modelling limitations, with a reason, earn credit. [2]"
    ],
    "answer": "\\(R'(t)=e^{-t}(1-t)\\), maximum at \\(t=1\\) of \\(e^{-1}\\), accumulated response \\(1-3e^{-2}\\).",
    "misconception": "The product t e^{-t} does not decrease at every positive time: the increasing factor t initially dominates the decay.",
    "reflection": "What data would be needed to test the assumption that this response curve remains valid in the long run?"
  },
  {
    "id": "W10-P12",
    "section": "P",
    "paper": "pure",
    "title": "Four points in three dimensions",
    "marks": 9,
    "minutes": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7
    },
    "topics": [
      "3D position vectors",
      "parallelogram proof",
      "midpoints",
      "vector magnitude"
    ],
    "stem": "Points in three-dimensional space have position vectors \\(\\vec a=\\langle1,2,-1\\rangle\\), \\(\\vec b=\\langle5,-2,3\\rangle\\) and \\(\\vec c=\\langle3,0,1\\rangle\\). Point D is chosen so that quadrilateral A–B–D–C (in that cyclic order) is a parallelogram.",
    "parts": [
      [
        "Find the position vector of D.",
        3
      ],
      [
        "Prove using position vectors that the diagonals AD and BC have the same midpoint.",
        3
      ],
      [
        "Find the exact length of side AB and explain why the opposite side CD has the same length.",
        3
      ]
    ],
    "hint": "In a parallelogram AB and CD are equal parallel displacement vectors. Its diagonals bisect one another.",
    "steps": [
      "The parallelogram condition is \\(\\overrightarrow{CD}=\\overrightarrow{AB}\\). [1] Thus \\(\\vec d-\\vec c=\\vec b-\\vec a\\), or \\(\\vec d=\\vec b+\\vec c-\\vec a\\). [1] Substitute to find \\(\\vec d=\\langle5+3-1,-2+0-2,3+1-(-1)\\rangle=\\langle7,-4,5\\rangle\\). [1]",
      "The midpoint of A and D has position vector \\(\\frac{\\vec a+\\vec d}{2}=\\langle4,-1,2\\rangle\\). [1] The midpoint of B and C has vector \\(\\frac{\\vec b+\\vec c}{2}=\\langle4,-1,2\\rangle\\). [1] Their equality proves the diagonals meet at their common midpoint. [1]",
      "\\(\\overrightarrow{AB}=\\vec b-\\vec a=\\langle4,-4,4\\rangle\\). [1] Hence \\(AB=\\sqrt{4^2+(-4)^2+4^2}=4\\sqrt3\\). [1] From the parallelogram construction \\(\\overrightarrow{CD}=\\overrightarrow{AB}\\), so \\(CD=AB=4\\sqrt3\\). [1]"
    ],
    "answer": "\\(\\vec d=\\langle7,-4,5\\rangle\\), common diagonal midpoint \\(\\langle4,-1,2\\rangle\\), and \\(AB=CD=4\\sqrt3\\).",
    "misconception": "The order A–B–D–C matters: treating A–B–C–D as the cycle changes which vector equations define the parallelogram.",
    "reflection": "How could the same argument be written entirely in vector notation without using coordinates?"
  }
];
