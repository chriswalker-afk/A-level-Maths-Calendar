export const week05PureProblems = [
  {
    "id": "W05-P1",
    "section": "P",
    "title": "Divide before decomposing",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO2": 8
    },
    "topics": [
      "polynomial division",
      "partial fractions",
      "logarithmic integrals",
      "method selection"
    ],
    "stem": "Consider \\(I=\\displaystyle\\int_0^1\\frac{x^3+3x^2+5x+5}{x^2+3x+2}\\,dx\\). The denominator has no zeros over the interval.",
    "parts": [
      [
        "Divide the numerator by the denominator to write the integrand as \\(x+\\frac{3x+5}{x^2+3x+2}\\).",
        2
      ],
      [
        "Decompose the remaining proper fraction into partial fractions.",
        3
      ],
      [
        "Hence evaluate \\(I\\) exactly, giving your result as a single logarithm plus a rational number.",
        3
      ]
    ],
    "hint": "First divide the cubic by the quadratic. Then factor x² + 3x + 2 = (x+1)(x+2), match coefficients in A/(x+1)+B/(x+2), and integrate.",
    "steps": [
      "Since \\(x(x^2+3x+2)=x^3+3x^2+2x\\), subtraction leaves \\(3x+5\\). Thus \\(\\frac{x^3+3x^2+5x+5}{x^2+3x+2}=x+\\frac{3x+5}{x^2+3x+2}\\). [2]",
      "Write \\(\\frac{3x+5}{(x+1)(x+2)}=\\frac{A}{x+1}+\\frac{B}{x+2}\\). Equating numerators gives \\(3x+5=A(x+2)+B(x+1)\\). Substituting \\(x=-1\\) gives \\(A=2\\); substituting \\(x=-2\\) gives \\(B=1\\). [3]",
      "Thus \\(I=\\left[\\frac{x^2}{2}+2\\ln(x+1)+\\ln(x+2)\\right]_0^1\\). Its upper value is \\(\\frac12+2\\ln2+\\ln3\\), its lower value is \\(0+0+\\ln2\\). Hence \\(I=\\frac12+\\ln6\\). The logarithm arguments are positive over \\([0,1]\\). [3]"
    ],
    "answer": "\\(I=\\frac12+\\ln6\\)",
    "misconception": "A partial-fraction split can only be applied directly after reducing an improper rational function to a polynomial plus a proper fraction.",
    "reflection": "Which single algebraic check confirms the partial-fraction decomposition before you integrate?"
  },
  {
    "id": "W05-P2",
    "section": "P",
    "title": "Enclosed area with changes of sign",
    "marks": 10,
    "minutes": 23,
    "ao": {
      "AO2": 10
    },
    "topics": [
      "area between curves",
      "intersection points",
      "sign analysis",
      "odd functions"
    ],
    "stem": "The curves \\(y=f(x)=x^3-3x\\) and \\(y=g(x)=x\\) enclose two bounded regions.",
    "parts": [
      [
        "Find all points where the curves meet.",
        3
      ],
      [
        "Determine which curve lies above the other on each interval between consecutive intersection points.",
        2
      ],
      [
        "Calculate the total exact area of the two enclosed regions.",
        3
      ],
      [
        "Evaluate \\(\\displaystyle\\int_{-2}^{2}(f(x)-g(x))\\,dx\\) and explain why that answer is not the total enclosed area.",
        2
      ]
    ],
    "hint": "Set f(x) = g(x), factorise the resulting cubic and test one x-value in each bounded interval. Integrate the upper curve minus the lower curve separately over those intervals.",
    "steps": [
      "Equate \\(x^3-3x=x\\) to give \\(x^3-4x=x(x-2)(x+2)=0\\). Thus \\(x=-2,0,2\\), and since \\(g(x)=x\\), the intersection points are \\((-2,-2), (0,0), (2,2)\\). [3]",
      "The signed difference is \\(f(x)-g(x)=x^3-4x\\). At \\(x=-1\\), the difference is \\(3>0\\), so \\(f\\) is above \\(g\\) on \\((-2,0)\\). At \\(x=1\\), the difference is \\(-3<0\\), so \\(g\\) is above \\(f\\) on \\((0,2)\\). [2]",
      "Total area \\(A=\\int_{-2}^0(x^3-4x)\\,dx+\\int_0^2(4x-x^3)\\,dx\\). The two regions have equal area by symmetry. Thus \\(A=2\\left[2x^2-\\frac{x^4}{4}\\right]_0^2=2(8-4)=8\\) square units. [3]",
      "Because \\(f(x)-g(x)=x^3-4x\\) is odd, its signed integral on \\([-2,2]\\) is \\(0\\). The negative second region cancels the positive first one in the signed integral; geometric area requires positive contributions from both regions, giving \\(8\\). [2]"
    ],
    "answer": "Intersections \\((-2,-2), (0,0), (2,2)\\); combined enclosed area \\(8\\) square units; signed integral \\(0\\).",
    "misconception": "The area between curves cannot generally be found from one signed integral when the upper curve changes at an intersection.",
    "reflection": "How would you sketch the two curves using odd symmetry before integrating?"
  },
  {
    "id": "W05-P3",
    "section": "P",
    "title": "When integration by parts returns",
    "marks": 12,
    "minutes": 26,
    "ao": {
      "AO2": 12
    },
    "topics": [
      "repeated integration by parts",
      "cyclical integrals",
      "exact definite integrals",
      "proof"
    ],
    "stem": "Define \\(I=\\displaystyle\\int_0^{\\pi/2}e^{2x}\\sin x\\,dx\\) and \\(J=\\displaystyle\\int_0^{\\pi/2}e^{2x}\\cos x\\,dx\\). A third integral is \\(K=\\displaystyle\\int_0^{\\pi/2}xe^{2x}\\sin x\\,dx\\).",
    "parts": [
      [
        "Using integration by parts twice, show that \\(\\displaystyle\\int e^{2x}\\sin x\\,dx=\\frac{e^{2x}}5(2\\sin x-\\cos x)+C\\).",
        4
      ],
      [
        "Evaluate \\(I\\) and \\(J\\) exactly.",
        3
      ],
      [
        "Use a further integration by parts to prove that \\(K=\\frac{(5\\pi-3)e^\\pi-4}{25}\\).",
        4
      ],
      [
        "Explain, without decimal approximations, why \\(K>0\\).",
        1
      ]
    ],
    "hint": "Set U = sin x and dV = e^{2x}dx, then integrate by parts again on the returned cosine integral. Solve the resulting equation for the original indefinite integral.",
    "steps": [
      "Put \\(H=\\int e^{2x}\\sin x\\,dx\\) and apply integration by parts with \\(u=\\sin x,\\ dv=e^{2x}dx\\). This gives \\(H=\\frac12e^{2x}\\sin x-\\frac12\\int e^{2x}\\cos x\\,dx\\). A second integration by parts gives \\(\\int e^{2x}\\cos x\\,dx=\\frac12e^{2x}\\cos x+\\frac12H\\). Thus \\(H=\\frac12e^{2x}\\sin x-\\frac14e^{2x}\\cos x-\\frac14H\\); solving, \\(H=\\frac{e^{2x}}5(2\\sin x-\\cos x)+C\\). [4]",
      "Use the result to obtain \\(I=\\left[\\frac{e^{2x}}5(2\\sin x-\\cos x)\\right]_0^{\\pi/2}=\\frac{2e^\\pi+1}{5}\\). Similarly \\(J=\\left[\\frac{e^{2x}}5(2\\cos x+\\sin x)\\right]_0^{\\pi/2}=\\frac{e^\\pi-2}{5}\\). [3]",
      "For \\(K\\), use parts with \\(u=x\\) and \\(dv=e^{2x}\\sin x\\,dx\\). Hence \\(K=\\left[\\frac{xe^{2x}}5(2\\sin x-\\cos x)\\right]_0^{\\pi/2}-\\frac15(2I-J)\\). The boundary contribution is \\(\\frac{\\pi e^\\pi}{5}\\), while \\(2I-J=\\frac{3e^\\pi+4}{5}\\). Therefore \\(K=\\frac{\\pi e^\\pi}5-\\frac{3e^\\pi+4}{25}=\\frac{(5\\pi-3)e^\\pi-4}{25}\\). [4]",
      "On \\(0<x<\\frac\\pi2\\), all factors \\(x,\\ e^{2x},\\ \\sin x\\) are positive, so the integral of their product is positive: \\(K>0\\). [1]"
    ],
    "answer": "\\(I=\\frac{2e^\\pi+1}{5},\\qquad J=\\frac{e^\\pi-2}{5},\\qquad K=\\frac{(5\\pi-3)e^\\pi-4}{25}\\)",
    "misconception": "When the original integral returns, rearrange the equation rather than trying to integrate the same expression indefinitely.",
    "reflection": "Why is checking the sign of the original integrand a particularly strong independent check of the final formula?"
  }
];
