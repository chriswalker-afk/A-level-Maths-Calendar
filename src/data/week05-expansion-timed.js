export const week05ExpansionTimed = [
  {
    "id": "W05-T4",
    "section": "T",
    "title": "Integration by parts with a definite boundary",
    "marks": 8,
    "ao": {
      "AO1": 3,
      "AO2": 5
    },
    "topics": [
      "integration by parts",
      "definite integrals",
      "inverse differentiation"
    ],
    "stem": "Find exactly \\(I=\\int_0^1xe^{2x}\\,dx\\) and use differentiation to check your antiderivative.",
    "parts": [
      [
        "Choose functions for integration by parts and obtain an antiderivative.",
        3
      ],
      [
        "Apply the bounds to evaluate I exactly.",
        3
      ],
      [
        "Differentiate your antiderivative and verify it returns the original integrand.",
        2
      ]
    ],
    "hint": "Take u=x and dv=e^{2x}dx, so du=dx and v=e^{2x}/2.",
    "steps": [
      "With \\(u=x,\\ du=dx,\\ dv=e^{2x}dx,\\ v=e^{2x}/2\\). [1] By parts, \\(\\int xe^{2x}dx=\\frac12xe^{2x}-\\frac12\\int e^{2x}dx\\). [1] Hence antiderivative \\(\\frac12xe^{2x}-\\frac14e^{2x}+C\\). [1]",
      "At x=1, the expression is \\(\\frac12e^2-\\frac14e^2=\\frac14e^2\\). [1] At x=0 it is \\(-\\frac14\\). [1] Subtract lower from upper to obtain \\(I=(e^2+1)/4\\). [1]",
      "Differentiate \\(\\frac12xe^{2x}\\) using the product rule to get \\(\\frac12e^{2x}+xe^{2x}\\). [1] The derivative of \\(-\\frac14e^{2x}\\) is \\(-\\frac12e^{2x}\\), leaving precisely \\(xe^{2x}\\). [1]"
    ],
    "answer": "\\(I=(e^2+1)/4\\).",
    "misconception": "The antiderivative of e^{2x} is e^{2x}/2, not e^{2x}; the lower bound contributes −1/4 and cannot be ignored.",
    "reflection": "Why does differentiating the indefinite result provide a strong independent check of the integration?"
  }
];
