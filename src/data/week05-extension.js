export const week05Extension = [
  {
    "id": "W05-X1",
    "section": "X",
    "title": "A finite accumulation over an endless interval",
    "marks": 14,
    "minutes": 40,
    "ao": {
      "AO1": 3,
      "AO2": 11
    },
    "topics": [
      "improper integration as a limit",
      "repeated integration by parts",
      "numerical methods",
      "accumulation models",
      "proof"
    ],
    "stem": "An experimental process has a nonnegative response rate \\(r(t)=t^2e^{-2t}\\), for \\(t\\ge0\\). The accumulated response during the first \\(a>0\\) time units is \\(A(a)=\\int_0^a r(t)\\,dt\\). The measurement units are defined so that this integral gives the total response.",
    "parts": [
      [
        "Explain why \\(A(a)\\) increases as \\(a\\) increases, and write the exact integral defining the accumulated response.",
        2
      ],
      [
        "By integrating by parts twice, show that \\(A(a)=\\frac14\\left[1-e^{-2a}(2a^2+2a+1)\\right]\\).",
        5
      ],
      [
        "Differentiate \\(A(a)\\) and find the limiting total response as \\(a\\to\\infty\\). Explain why the limit exists.",
        3
      ],
      [
        "Show that \\(75\\%\\) of the limiting response is accumulated when \\(e^{-2a}(2a^2+2a+1)=\\frac14\\). Find the corresponding \\(a\\) to two decimal places and justify that it is unique.",
        3
      ],
      [
        "Explain why the response can continue indefinitely but have a finite total accumulation.",
        1
      ]
    ],
    "hint": "Start with the nonnegative rate \\(r(t)=t^2e^{-2t}\\). For the two integrations by parts, first choose \\(u=t^2\\) and then \\(u=t\\). To solve for the 75% threshold, use the strict monotonicity of A.",
    "steps": [
      "The rate \\(r(t)=t^2e^{-2t}\\) is nonnegative and is positive for \\(t>0\\), so longer intervals add a positive amount. The accumulated response is \\(A(a)=\\int_0^a t^2e^{-2t}\\,dt\\). [2]",
      "Integrate \\(\\int t^2e^{-2t}\\,dt\\) by parts with \\(u=t^2,\\ dv=e^{-2t}\\,dt\\), so \\(v=-\\frac12e^{-2t}\\). This gives \\(-\\frac12t^2e^{-2t}+\\int te^{-2t}\\,dt\\). A second integration by parts yields \\(\\int te^{-2t}\\,dt=-\\frac12te^{-2t}-\\frac14e^{-2t}+C\\). Hence \\(\\int t^2e^{-2t}\\,dt=-\\frac14e^{-2t}(2t^2+2t+1)+C\\). Evaluate from \\(0\\) to \\(a\\) to obtain \\(A(a)=\\frac14[1-e^{-2a}(2a^2+2a+1)]\\). [5]",
      "Differentiation gives \\(A'(a)=a^2e^{-2a}>0\\) for \\(a>0\\). Exponential decay dominates polynomial growth, so \\(e^{-2a}(2a^2+2a+1)\\to0\\) as \\(a\\to\\infty\\). Thus \\(A_\\infty=\\lim_{a\\to\\infty}A(a)=\\frac14\\) response units. [3]",
      "For \\(75\\%\\) of the limiting response, \\(A(a)=\\frac34\\cdot\\frac14=\\frac3{16}\\). The exact formula gives \\(e^{-2a}(2a^2+2a+1)=\\frac14\\). Numerically \\(a=1.960201\\ldots\\) and hence \\(a=1.96\\) to two decimal places. Since \\(A(a)\\) is strictly increasing from \\(0\\) to a value approaching \\(\\frac14\\), there is exactly one solution. [3]",
      "The response rate becomes very small as \\(t\\) grows; the added contributions shrink sufficiently rapidly that their total is bounded, although the process does not stop at a finite time. [1]"
    ],
    "answer": "\\(A(a)=\\frac14[1-e^{-2a}(2a^2+2a+1)]\\); the limiting response is \\(\\frac14\\) and its \\(75\\%\\) threshold is reached once at \\(a\\approx1.96\\).",
    "misconception": "An ever-increasing total need not grow without bound. Infinite time does not imply infinite accumulated response when the rate decays sufficiently quickly.",
    "reflection": "How could you use the formula to show that the accumulated response after time t = 5 is already very close to its final value?"
  }
];
