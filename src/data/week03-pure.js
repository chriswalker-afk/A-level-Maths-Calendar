export const week03PureProblems = [
  {
    "id": "W03-P1",
    "section": "P",
    "title": "An identity with a forbidden denominator",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO2": 8
    },
    "topics": [
      "double-angle identities",
      "trigonometric equations",
      "proof",
      "restrictions"
    ],
    "stem": "Consider \\(F(x)=\\dfrac{\\sin 2x}{1+\\cos 2x}\\) on \\(0\\le x<2\\pi\\) wherever the denominator is non-zero.",
    "parts": [
      [
        "Prove that \\(F(x)=\\tan x\\) wherever \\(F\\) is defined. State the excluded values of \\(x\\) in the given interval.",
        4
      ],
      [
        "Hence solve \\(F(x)=\\sqrt3\\) on \\(0\\le x<2\\pi\\). Give exact answers.",
        3
      ],
      [
        "Explain why \\(x=\\frac\\pi2\\) cannot be included as a solution, even though the simplified expression has familiar nearby values.",
        1
      ]
    ],
    "hint": "Use sin(2x) = 2sin(x)cos(x) and 1 + cos(2x) = 2cos²(x). Prove the identity only for permissible x, then solve the equivalent tangent equation.",
    "steps": [
      "The double-angle formulae give \\(\\sin2x=2\\sin x\\cos x\\) and \\(1+\\cos2x=2\\cos^2x\\). Therefore \\(F(x)=\\dfrac{2\\sin x\\cos x}{2\\cos^2x}=\\tan x\\) provided \\(\\cos x\\ne0\\). On the stated interval, \\(x=\\frac\\pi2,\\frac{3\\pi}2\\) are excluded because the original denominator is zero. [4]",
      "The equation becomes \\(\\tan x=\\sqrt3\\). The reference angle is \\(\\frac\\pi3\\) and tangent has period \\(\\pi\\). Thus \\(x=\\frac\\pi3,\\frac{4\\pi}3\\); neither value is excluded. [3]",
      "At \\(x=\\frac\\pi2\\), \\(1+\\cos\\pi=0\\); the original quotient is undefined. A cancellation-based identity does not make an undefined point valid. [1]"
    ],
    "answer": "\\(x=\\frac\\pi3,\\ \\frac{4\\pi}3\\)",
    "misconception": "Identity proofs must preserve domain restrictions even when a factor cancels.",
    "reflection": "Can the same proof be written using the half-angle identity for tan(x)?"
  },
  {
    "id": "W03-P2",
    "section": "P",
    "title": "A useful shifted form",
    "marks": 10,
    "minutes": 24,
    "ao": {
      "AO2": 10
    },
    "topics": [
      "R-sine form",
      "trig graphs",
      "inequalities",
      "extrema"
    ],
    "stem": "A periodic quantity is modelled by \\(f(x)=5\\sin x+12\\cos x\\), with \\(0\\le x<2\\pi\\).",
    "parts": [
      [
        "Write \\(f(x)\\) as \\(R\\sin(x+\\alpha)\\), where \\(R>0\\) and \\(0<\\alpha<\\frac\\pi2\\). State \\(R\\) exactly and give a defining expression for \\(\\alpha\\).",
        4
      ],
      [
        "Find the maximum and minimum values of \\(f\\) and give the value of \\(x\\) where each occurs, in terms of \\(\\alpha\\).",
        3
      ],
      [
        "Solve \\(f(x)\\ge0\\) over the given interval.",
        3
      ]
    ],
    "hint": "Compare coefficients after expanding Rsin(x + α). Use the fact that a sine wave is positive for an interval of length π in each cycle.",
    "steps": [
      "\\(R\\sin(x+\\alpha)=R\\cos\\alpha\\sin x+R\\sin\\alpha\\cos x\\). Hence \\(R\\cos\\alpha=5\\) and \\(R\\sin\\alpha=12\\). Squaring and adding gives \\(R=\\sqrt{5^2+12^2}=13\\). As \\(0<\\alpha<\\frac\\pi2\\), \\(\\tan\\alpha=\\frac{12}{5}\\), so \\(\\alpha=\\tan^{-1}(\\frac{12}{5})\\). Therefore \\(f(x)=13\\sin(x+\\alpha)\\). [4]",
      "The maximum is \\(13\\) when \\(x+\\alpha=\\frac\\pi2\\) so \\(x=\\frac\\pi2-\\alpha\\). The minimum is \\(-13\\) when \\(x+\\alpha=\\frac{3\\pi}2\\) so \\(x=\\frac{3\\pi}2-\\alpha\\). Both points belong to \\(0\\le x<2\\pi\\). [3]",
      "The inequality is \\(\\sin(x+\\alpha)\\ge0\\). With \\(\\alpha\\le x+\\alpha<2\\pi+\\alpha\\), sine is nonnegative for \\(x+\\alpha\\in[\\alpha,\\pi]\\cup[2\\pi,2\\pi+\\alpha)\\). Subtracting \\(\\alpha\\) gives \\(x\\in[0,\\pi-\\alpha]\\cup[2\\pi-\\alpha,2\\pi)\\). [3]"
    ],
    "answer": "Maximum \\(13\\) at \\(x=\\frac\\pi2-\\alpha\\), minimum \\(-13\\) at \\(x=\\frac{3\\pi}2-\\alpha\\), where \\(\\alpha=\\tan^{-1}(12/5)\\). Nonnegative for \\([0,\\pi-\\alpha]\\cup[2\\pi-\\alpha,2\\pi)\\).",
    "misconception": "Because the domain is one complete cycle, a positive interval can be split by the domain boundary. Do not omit the short interval near 2π.",
    "reflection": "What changes to the solution intervals if the constant term +2 is added to f(x)?"
  },
  {
    "id": "W03-P3",
    "section": "P",
    "title": "Two triangles with the same data",
    "marks": 12,
    "minutes": 25,
    "ao": {
      "AO2": 12
    },
    "topics": [
      "sine rule",
      "ambiguous case",
      "exact values",
      "triangle area",
      "geometric reasoning"
    ],
    "stem": "A triangle \\(ABC\\) has \\(AB=10\\) cm, \\(AC=5\\sqrt2\\) cm and \\(\\angle ABC=30^\\circ\\). The three measurements do not uniquely determine the triangle.",
    "parts": [
      [
        "Use the sine rule to show that \\(\\sin C=\\frac1{\\sqrt2}\\).",
        2
      ],
      [
        "Find both possible pairs of angles \\(A\\) and \\(C\\), giving exact values in degrees. Explain why both are permitted.",
        3
      ],
      [
        "Find the two possible lengths of \\(BC\\) exactly, simplifying all surds.",
        4
      ],
      [
        "Find the exact area of each triangle, and explain which has the larger area.",
        3
      ]
    ],
    "hint": "The side opposite B is AC; the side opposite C is AB. After finding sin(C), consider the acute angle and its supplementary angle.",
    "steps": [
      "By the sine rule, \\(\\dfrac{\\sin C}{AB}=\\dfrac{\\sin B}{AC}\\). Hence \\(\\sin C=\\dfrac{10\\sin30^\\circ}{5\\sqrt2}=\\dfrac5{5\\sqrt2}=\\frac1{\\sqrt2}\\). [2]",
      "Thus \\(C=45^\\circ\\) or \\(C=135^\\circ\\). As \\(A=180^\\circ-30^\\circ-C\\), the corresponding values are \\(A=105^\\circ\\) or \\(A=15^\\circ\\). Both triangles are possible because both pairs give positive angles summing with B to \\(180^\\circ\\). [3]",
      "By the sine rule \\(BC=\\dfrac{AC}{\\sin B}\\sin A=10\\sqrt2\\sin A\\). Since \\(\\sin105^\\circ=\\frac{\\sqrt6+\\sqrt2}{4}\\), the first length is \\(BC=5(\\sqrt3+1)\\) cm. Since \\(\\sin15^\\circ=\\frac{\\sqrt6-\\sqrt2}{4}\\), the second is \\(BC=5(\\sqrt3-1)\\) cm. [4]",
      "The included angle at B is \\(30^\\circ\\), so area \\(=\\frac12(AB)(BC)\\sin B=\\frac52 BC\\). Areas are \\(\\frac{25}{2}(\\sqrt3+1)\\) cm² when \\(A=105^\\circ\\) and \\(\\frac{25}{2}(\\sqrt3-1)\\) cm² when \\(A=15^\\circ\\). The first is larger because its corresponding \\(BC\\) is longer, with the other factors fixed. [3]"
    ],
    "answer": "Possible triangles: \\((A,C)=(105^\\circ,45^\\circ)\\) and \\((15^\\circ,135^\\circ)\\). Respectively \\(BC=5(\\sqrt3+1)\\) or \\(5(\\sqrt3-1)\\) cm; areas \\(\\frac{25}{2}(\\sqrt3+1)\\) or \\(\\frac{25}{2}(\\sqrt3-1)\\) cm².",
    "misconception": "An inverse-sine result is often only the principal solution. With SSA information, check the supplementary angle and the sum of interior angles.",
    "reflection": "Which extra measurement would distinguish the two triangles without another construction?"
  }
];
