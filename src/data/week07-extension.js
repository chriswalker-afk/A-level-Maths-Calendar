export const week07Extension = [
  {
    "id": "W07-X1",
    "section": "X",
    "title": "Weighted exposure: from a differential equation to a unique threshold",
    "marks": 14,
    "minutes": 40,
    "ao": {
      "AO1": 2,
      "AO2": 8,
      "AO3": 4
    },
    "topics": [
      "separable differential equations",
      "exponential decay",
      "integration by parts",
      "limits",
      "monotonicity",
      "numerical threshold"
    ],
    "stem": "A chemical sensor follows \\(\\frac{dC}{dt}=-k(C-5)\\) for \\(t\\ge0\\), where \\(k=\\frac{\\ln2}{2}\\) per hour and \\(C(0)=45\\) concentration units. The background concentration is \\(5\\). For \\(T\\ge0\\), define the weighted excess exposure \\(E(T)=\\int_0^Tt(C(t)-5)\\,dt\\). A threshold is reached when \\(E(T)\\) equals \\(75\\%\\) of the limiting exposure \\(E_\\infty=\\lim_{T\\to\\infty}E(T)\\).",
    "parts": [
      [
        "Solve the differential equation and prove that \\(C(t)=5+40e^{-kt}\\).",
        3
      ],
      [
        "Use integration by parts to show that \\(E(T)=\\frac{40}{k^2}[1-(1+kT)e^{-kT}]\\).",
        4
      ],
      [
        "Find \\(E_\\infty\\) exactly and explain why the limit exists despite the increasing weight \\(t\\).",
        2
      ],
      [
        "Prove that there is exactly one \\(T>0\\) at which the threshold is reached.",
        2
      ],
      [
        "Obtain the equation for this threshold and solve numerically to two decimal places, giving a bracket that justifies the rounding.",
        3
      ]
    ],
    "hint": "Subtract the background concentration before separating the equation. Integrate \\(\\int te^{-kt}\\,dt\\) by parts, then consider the derivative of the resulting accumulated-exposure function to prove uniqueness.",
    "steps": [
      "Set \\(u=C-5\\). Then \\(\\frac{du}{dt}=-ku\\) and \\(u(0)=40\\). Separating yields \\(\\ln u=-kt+\\text{constant}\\), so \\(u=40e^{-kt}\\) and \\(C(t)=5+40e^{-kt}\\) for \\(t\\ge0\\). [3]",
      "Substitute into the definition: \\(E(T)=40\\int_0^Tte^{-kt}\\,dt\\). Integrating by parts with \\(u=t,\\ dv=e^{-kt}\\,dt\\) gives \\(\\int te^{-kt}\\,dt=-\\frac{t}{k}e^{-kt}-\\frac1{k^2}e^{-kt}+C\\). Evaluate from 0 to T: \\(E(T)=40[-(\\frac{T}{k}+\\frac1{k^2})e^{-kT}+\\frac1{k^2}]=\\frac{40}{k^2}[1-(1+kT)e^{-kT}]\\). [4]",
      "Because \\(k>0\\), \\((1+kT)e^{-kT}\\to0\\) as \\(T\\to\\infty\\). Therefore \\(E_\\infty=\\frac{40}{k^2}=\\frac{160}{(\\ln2)^2}\\). The exponential decay dominates the linearly increasing weight. [2]",
      "The derivative of accumulated exposure is \\(E'(T)=40Te^{-kT}>0\\) for every \\(T>0\\). Also \\(E(0)=0\\) and \\(E(T)\\to E_\\infty\\) continuously, strictly increasing. Hence the \\(75\\%\\) level occurs at exactly one finite positive time. [2]",
      "Set \\(E(T)=\\frac34E_\\infty\\) and cancel the positive factor \\(40/k^2\\): \\((1+kT)e^{-kT}=\\frac14\\). With \\(k=\\frac{\\ln2}{2}\\), numerical solution gives \\(T\\approx7.76930\\) hours. To justify two decimal places, the left-hand side is about \\(0.250272\\) at \\(T=7.765\\) and about \\(0.249640\\) at \\(T=7.775\\), so the unique root lies between those boundaries and rounds to \\(T=7.77\\) hours. [3]"
    ],
    "answer": "\\(C(t)=5+40e^{-kt}\\), \\(E(T)=\\frac{40}{k^2}[1-(1+kT)e^{-kT}]\\), \\(E_\\infty=\\frac{160}{(\\ln2)^2}\\); unique 75% time \\(T\\approx7.77\\) hours.",
    "misconception": "Weighted exposure is not the same as ordinary concentration accumulation. The growing factor t does not make the integral diverge because exponential decay eventually dominates; numerical thresholds need a justified unique crossing.",
    "reflection": "How would the time to reach 75% of the limiting weighted exposure scale if the decay constant k were doubled?"
  }
];
