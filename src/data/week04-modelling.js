export const week04Modelling = [
  {
    "id": "W04-M1",
    "section": "M",
    "title": "The can that does not fit the machine",
    "marks": 12,
    "minutes": 32,
    "ao": {
      "AO2": 2,
      "AO3": 10
    },
    "topics": [
      "optimization",
      "differentiation",
      "surface area",
      "constraints",
      "modelling assumptions"
    ],
    "stem": "A manufacturer designs a sealed, right circular cylindrical container with volume exactly \\(500\\pi\\) cm³. Its radius is \\(r\\) cm and height is \\(h\\) cm. The same material is used for its curved surface, lid and base, so the material area is \\(S=2\\pi r^2+2\\pi rh\\). The forming machine can accept a radius of at most \\(6\\) cm.",
    "parts": [
      [
        "Show that \\(h=\\frac{500}{r^2}\\) and \\(S(r)=2\\pi r^2+\\frac{1000\\pi}{r}\\) for \\(r>0\\).",
        3
      ],
      [
        "Differentiate \\(S(r)\\) and find the unrestricted stationary radius exactly.",
        3
      ],
      [
        "Prove that the stationary point is an unrestricted minimum, and find the corresponding height exactly.",
        2
      ],
      [
        "Find the minimum material area subject to the machine's radius limit, giving an exact expression and a value to the nearest square centimetre. State the restricted container's height.",
        2
      ],
      [
        "Give two realistic reasons why the mathematical area may differ from the material actually required to manufacture the container.",
        2
      ]
    ],
    "hint": "Eliminate h from the volume equation. Differentiate with respect to r before checking whether the stationary radius obeys r ≤ 6. If the unconstrained minimum is outside the feasible range, inspect the boundary.",
    "steps": [
      "Volume \\(\\pi r^2h=500\\pi\\) gives \\(h=\\frac{500}{r^2}\\). Substitute into the material-area formula: \\(S=2\\pi r^2+2\\pi r\\frac{500}{r^2}=2\\pi r^2+\\frac{1000\\pi}{r}\\) with \\(r>0\\). [3]",
      "Differentiate \\(S'(r)=4\\pi r-\\frac{1000\\pi}{r^2}\\). At a stationary point \\(4\\pi r=\\frac{1000\\pi}{r^2}\\), so \\(r^3=250\\) and \\(r=\\sqrt[3]{250}=5\\sqrt[3]{2}\\) cm. [3]",
      "The second derivative is \\(S''(r)=4\\pi+\\frac{2000\\pi}{r^3}>0\\) for every \\(r>0\\), so this is a minimum. Its height is \\(h=\\frac{500}{(5\\sqrt[3]2)^2}=10\\sqrt[3]2\\) cm, twice the unrestricted optimal radius. [2]",
      "The unconstrained radius is \\(5\\sqrt[3]2\\approx6.30>6\\) cm. Since \\(S'(r)<0\\) on \\(0<r\\le6\\), the constrained minimum occurs at \\(r=6\\). Then \\(h=\\frac{500}{36}=\\frac{125}{9}\\) cm and \\(S=2\\pi(6)^2+\\frac{1000\\pi}{6}=\\frac{716\\pi}{3}\\approx750\\) cm² to the nearest square centimetre. [2]",
      "Real construction may need seams, overlaps, thickness, fastening or trim waste beyond the ideal surface area. Alternatively lids and bases may require stronger or different materials and therefore the assumption of uniform material use is unrealistic. Any two distinct justified limitations. [2]"
    ],
    "answer": "Unrestricted radius \\(5\\sqrt[3]2\\) cm with height \\(10\\sqrt[3]2\\) cm. Under the machine limit, radius \\(6\\) cm, height \\(\\frac{125}{9}\\) cm and minimum material area \\(\\frac{716\\pi}{3}\\) cm², approximately \\(750\\) cm².",
    "misconception": "A stationary point that violates a manufacturing restriction is not a feasible optimum. The maximum allowed radius becomes the minimiser here.",
    "reflection": "If the forming machine allowed r up to 6.5 cm, what would change about the optimal dimensions?"
  },
  {
    "id": "W04-M2",
    "section": "M",
    "title": "Two models with the same initial rate",
    "marks": 14,
    "minutes": 36,
    "ao": {
      "AO2": 2,
      "AO3": 12
    },
    "topics": [
      "exponential models",
      "derivatives",
      "second derivatives",
      "proof",
      "model comparison"
    ],
    "stem": "Two teams model a pollutant concentration \\(C\\) (in \\(\\mathrm{mg\\,L^{-1}}\\)) after treatment begins at time \\(t\\) hours. They agree that \\(t\\ge0\\), but propose different functions: \\(A(t)=10+20e^{-t/4}\\) and \\(B(t)=10+\\frac{20}{1+t/4}\\). Lower concentrations are preferable. Assume the models are used only for nonnegative time.",
    "parts": [
      [
        "Show that the models predict the same initial concentration and the same long-term limiting concentration.",
        2
      ],
      [
        "Find \\(A'(t)\\) and \\(B'(t)\\), then show that the models predict the same initial rate of change. Include units.",
        4
      ],
      [
        "Find both second derivatives and compare their values at \\(t=0\\). Explain the implication for how quickly each model's rate of decline begins to become less negative.",
        3
      ],
      [
        "For \\(u\\ge0\\), let \\(g(u)=e^u-1-u\\). By differentiating \\(g\\), prove that \\(A(t)<B(t)\\) for every \\(t>0\\).",
        3
      ],
      [
        "State two reasons why the inequality between these predictions does not prove which model is more accurate for real water samples.",
        2
      ]
    ],
    "hint": "For B, use the chain rule on \\((1+t/4)^{-1}\\). To prove the inequality, show \\(g(0)=0\\) and \\(g'(u)>0\\) when \\(u>0\\); then take reciprocals of positive expressions.",
    "steps": [
      "At \\(t=0\\), both models give \\(10+20=30\\) \\(\\mathrm{mg\\,L^{-1}}\\). As \\(t\\to\\infty\\), both \\(e^{-t/4}\\) and \\((1+t/4)^{-1}\\) tend to zero, giving common limit \\(10\\) \\(\\mathrm{mg\\,L^{-1}}\\). [2]",
      "Differentiate: \\(A'(t)=-5e^{-t/4}\\) and \\(B'(t)=-5(1+t/4)^{-2}\\). At \\(t=0\\), \\(A'(0)=B'(0)=-5\\) \\(\\mathrm{mg\\,L^{-1}\\,h^{-1}}\\). Their initial decreases are numerically identical. [4]",
      "Differentiate again: \\(A''(t)=\\frac54e^{-t/4}\\) and \\(B''(t)=\\frac52(1+t/4)^{-3}\\). Thus \\(A''(0)=\\frac54\\) and \\(B''(0)=\\frac52\\) in \\(\\mathrm{mg\\,L^{-1}\\,h^{-2}}\\). As both are positive, their initially negative rates become less negative; B's rate does so twice as quickly at the start. [3]",
      "The function \\(g(u)=e^u-1-u\\) has \\(g(0)=0\\) and derivative \\(g'(u)=e^u-1>0\\) when \\(u>0\\). Hence \\(e^u>1+u>0\\) for \\(u>0\\). Taking positive reciprocals gives \\(e^{-u}<\\frac1{1+u}\\). Put \\(u=t/4>0\\) and multiply by 20, then add 10: \\(A(t)<B(t)\\) for every \\(t>0\\). [3]",
      "A mathematical comparison cannot determine which formula fits measured concentrations; data and error analysis are required. Both models assume an unchanging treatment process and a limiting background concentration of exactly 10, while temperature, inflow, mixing or treatment efficiency may change. Any two clearly distinct, contextual limitations. [2]"
    ],
    "answer": "Both start at \\(30\\) \\(\\mathrm{mg\\,L^{-1}}\\) and approach \\(10\\) \\(\\mathrm{mg\\,L^{-1}}\\). Both initially fall at \\(-5\\) \\(\\mathrm{mg\\,L^{-1}\\,h^{-1}}\\), but \\(A(t)<B(t)\\) for every \\(t>0\\).",
    "misconception": "Two models can have the same starting value and gradient without predicting the same future path; the second derivatives distinguish their early curvature.",
    "reflection": "How could a small set of actual observations at t = 1, 2 and 4 help decide which model is more appropriate?"
  }
];
