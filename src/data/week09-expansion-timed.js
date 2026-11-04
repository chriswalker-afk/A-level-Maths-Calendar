export const week09ExpansionTimed = [
  {
    "id": "W09-T4",
    "section": "T",
    "title": "One logarithmic graph, a tangent and a vanishing area",
    "marks": 8,
    "ao": {
      "AO1": 2,
      "AO2": 5,
      "AO3": 1
    },
    "topics": [
      "logarithmic domains",
      "monotonicity",
      "tangent equations",
      "integral symmetry"
    ],
    "stem": "On \\(0<x<2\\), let \\(f(x)=\\ln(2-x)-\\ln x\\). The graph has a reflection property that saves a lengthy integration.",
    "parts": [
      [
        "Solve \\(f(x)=\\ln2\\) exactly, including the domain restriction.",
        2
      ],
      [
        "Prove the solution is unique by differentiating \\(f\\).",
        2
      ],
      [
        "Find an equation of the tangent at \\(x=1\\).",
        2
      ],
      [
        "Prove without evaluating an antiderivative that \\(\\int_{1/2}^{3/2}f(x)\\,dx=0\\).",
        2
      ]
    ],
    "hint": "Check the logarithm domain first. For the last part substitute u=2−x and compare f(u) with f(x).",
    "steps": [
      "Use the logarithm law to write \\(\\ln((2-x)/x)=\\ln2\\). [1] Because \\(0<x<2\\), the equation becomes \\(2-x=2x\\), so \\(x=2/3\\) is valid. [1]",
      "Differentiate to give \\(f'(x)=-1/(2-x)-1/x\\). [1] Both denominators are positive for \\(0<x<2\\), so \\(f'(x)<0\\) everywhere in the domain; hence the solution is unique. [1]",
      "Here \\(f(1)=0\\) and \\(f'(1)=-2\\). [1] The tangent is \\(y=-2(x-1)\\). [1]",
      "Replacing \\(x\\) by \\(2-x\\) gives \\(f(2-x)=\\ln x-\\ln(2-x)=-f(x)\\). [1] The interval \\([1/2,3/2]\\) is symmetric about 1, so opposite signed areas cancel and the integral is zero. [1]"
    ],
    "answer": "Unique solution \\(x=2/3\\); tangent \\(y=-2(x-1)\\); symmetric signed integral 0.",
    "misconception": "An integral of zero does not mean that the graph is identically zero; positive and negative areas can cancel.",
    "reflection": "How does a reflection identity replace a long integration by parts calculation?"
  }
];
