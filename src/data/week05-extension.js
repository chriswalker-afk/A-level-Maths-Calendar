export const week05Extension = [
  {
    "id": "W05-X1",
    "section": "X",
    "title": "A solid that gets longer but has a volume limit",
    "marks": 14,
    "minutes": 40,
    "ao": {
      "AO1": 3,
      "AO2": 11
    },
    "topics": [
      "solids of revolution",
      "repeated integration by parts",
      "improper integrals",
      "numerical methods",
      "proof"
    ],
    "stem": "For \\(x\\ge0\\), the curve is \\(y=xe^{-x}\\). The region bounded by the curve, the \\(x\\)-axis and the vertical lines \\(x=0\\) and \\(x=a\\), where \\(a>0\\), is rotated about the \\(x\\)-axis to form a solid of volume \\(V(a)\\).",
    "parts": [
      [
        "Show that \\(V(a)=\\pi\\int_0^ax^2e^{-2x}\\,dx\\).",
        2
      ],
      [
        "By integrating by parts twice, show that \\(V(a)=\\frac\\pi4\\left[1-e^{-2a}(2a^2+2a+1)\\right]\\).",
        5
      ],
      [
        "Prove that \\(V(a)\\) increases for \\(a>0\\) and find its limiting value as \\(a\\to\\infty\\).",
        3
      ],
      [
        "Show that the solid reaches \\(75\\%\\) of its limiting volume when \\(e^{-2a}(2a^2+2a+1)=\\frac14\\) and find the corresponding value of \\(a\\) to two decimal places, justifying that it is unique.",
        3
      ],
      [
        "Explain how the solid can have an increasing length but a finite limiting volume.",
        1
      ]
    ],
    "hint": "A disc has area \\(\\pi y^2\\). For the integral \\(\\int x^2e^{-2x}\\,dx\\), use integration by parts with \\(u=x^2\\) and then again with \\(u=x\\). To justify the numerical solution, use the monotonicity from the preceding part.",
    "steps": [
      "Using discs perpendicular to the \\(x\\)-axis gives \\(V(a)=\\pi\\int_0^a y^2\\,dx=\\pi\\int_0^a x^2e^{-2x}\\,dx\\). [2]",
      "Integrate \\(\\int x^2e^{-2x}\\,dx\\) by parts with \\(u=x^2,\\ dv=e^{-2x}\\,dx\\), so \\(v=-\\frac12e^{-2x}\\). This gives \\(-\\frac12x^2e^{-2x}+\\int xe^{-2x}\\,dx\\). A second integration by parts yields \\(\\int xe^{-2x}\\,dx=-\\frac12xe^{-2x}-\\frac14e^{-2x}+C\\). Consequently \\(\\int x^2e^{-2x}\\,dx=-\\frac14e^{-2x}(2x^2+2x+1)+C\\). Evaluate at \\(0\\) and \\(a\\): \\(V(a)=\\frac\\pi4[1-e^{-2a}(2a^2+2a+1)]\\). [5]",
      "Differentiating (or applying the fundamental theorem) gives \\(V'(a)=\\pi a^2e^{-2a}>0\\) for all \\(a>0\\), so the volume is strictly increasing. Because \\(a^2e^{-2a}\\to0\\) and \\(ae^{-2a}\\to0\\) as \\(a\\to\\infty\\), \\(\\lim_{a\\to\\infty}V(a)=\\frac\\pi4\\) cubic units. [3]",
      "At \\(75\\%\\) of this limit, \\(V(a)=\\frac34\\left(\\frac\\pi4\\right)=\\frac{3\\pi}{16}\\). Equating the formula from part (b) gives \\(e^{-2a}(2a^2+2a+1)=\\frac14\\). Solving numerically (calculator solver or interval search) gives \\(a\\approx1.960201\\) and hence \\(a=1.96\\) to two decimal places. Since \\(V(a)\\) is strictly increasing from \\(V(0)=0\\) towards \\(\\frac\\pi4\\), this level is reached exactly once. [3]",
      "Although the solid becomes longer as \\(a\\) increases, its disc radii \\(xe^{-x}\\) tend to zero sufficiently rapidly that the added volume approaches zero in total, leaving a finite limit. [1]"
    ],
    "answer": "\\(V(a)=\\frac\\pi4[1-e^{-2a}(2a^2+2a+1)]\\). It increases to \\(\\frac\\pi4\\) cubic units; \\(75\\%\\) is reached once at \\(a\\approx1.96\\).",
    "misconception": "A shape can extend indefinitely while having finite volume. The relevant quantity is the integral of the cross-sectional areas, not the total length of the axis.",
    "reflection": "What feature of the factor e^{-2x} makes the polynomial factor x² insufficient to force the volume to diverge?"
  }
];
