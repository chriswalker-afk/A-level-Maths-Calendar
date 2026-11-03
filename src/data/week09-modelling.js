export const week09Modelling = [
  {
    "id": "W09-M1",
    "section": "M",
    "title": "A day's output and a deadline chosen from a model",
    "marks": 12,
    "minutes": 32,
    "ao": {
      "AO2": 3,
      "AO3": 9
    },
    "topics": [
      "model calibration",
      "optimisation",
      "integration",
      "Newton method",
      "limitations of a model"
    ],
    "stem": "An experimental solar unit's output power, \\(P(t)\\) watts, is modelled over a \\(6\\)-hour operating window by \\(P(t)=kt(6-t)\\) for \\(0\\le t\\le6\\), where time is in hours and \\(k>0\\). A test reading shows output \\(160\\) watts at \\(t=2\\). The accumulated electrical energy \\(E(t)\\) is measured in watt-hours. An operator wants to stop the trial at the first time that 480 watt-hours have been produced.",
    "parts": [
      [
        "Calibrate the constant \\(k\\) and write an explicit formula for \\(P(t)\\).",
        2
      ],
      [
        "Find the time at which instantaneous output is greatest and calculate that maximum output.",
        2
      ],
      [
        "Construct a formula for \\(E(t)\\) and calculate the energy produced in the full six-hour window.",
        3
      ],
      [
        "Prove the 480 watt-hour target is reached exactly once in the interior of the operating interval. Use Newton–Raphson to estimate the stopping time to two decimal places.",
        3
      ],
      [
        "State two distinct reasons why the modelled stopping time should not be treated as a guaranteed real-world result.",
        2
      ]
    ],
    "hint": "Use the 160 W reading to determine k. Integrate power to obtain energy, then solve E(t)=480. Energy increases because power is positive between 0 and 6.",
    "steps": [
      "From \\(P(2)=k(2)(4)=160\\), obtain \\(k=20\\) (with the units required to make power watts). Hence \\(P(t)=20t(6-t)\\). [2]",
      "Differentiate \\(P'(t)=120-40t\\); it is zero at \\(t=3\\) and changes from positive to negative. The maximum is \\(P(3)=20(3)(3)=180\\ \\mathrm W\\). [2]",
      "Since \\(E'(t)=P(t)\\) and \\(E(0)=0\\), integrate to obtain \\(E(t)=\\int_0^t20u(6-u)\\,du=60t^2-\\frac{20}{3}t^3\\) watt-hours. At six hours \\(E(6)=60(36)-\\frac{20}{3}(216)=720\\ \\mathrm{Wh}\\). [3]",
      "On \\(0<t<6\\), \\(E'(t)=P(t)>0\\), so E is strictly increasing and continuous. As \\(E(0)=0<480<720=E(6)\\), a unique crossing exists. Apply Newton to \\(F(t)=60t^2-\\frac{20}{3}t^3-480\\) with \\(F'(t)=120t-20t^2\\). From \\(t_0=3.5\\), obtain \\(t_1\\approx3.676190476\\), \\(t_2\\approx3.678220815\\), and hence a stop at about \\(3.68\\ \\mathrm h\\). [3]",
      "Actual sunlight, shading, panel temperature and cloud cover cause changing power curves; a single calibration reading cannot validate the entire quadratic model. Battery or conversion losses may also mean electrical energy delivered to storage differs from integrated generator output. Credit any two distinct contextual limitations. [2]"
    ],
    "answer": "\\(P(t)=20t(6-t)\\) watts, peak \\(180\\ \\mathrm W\\) at \\(3\\ \\mathrm h\\), total \\(720\\ \\mathrm{Wh}\\), and the 480 Wh deadline at \\(t\\approx3.68\\ \\mathrm h\\).",
    "misconception": "Watts measure instantaneous power, while integrating power against hours gives watt-hours. The output reaches its peak at t=3, but the cumulative-energy target is reached later.",
    "reflection": "Which measured data would you collect to distinguish model-form error from ordinary weather variability?"
  },
  {
    "id": "W09-M2",
    "section": "M",
    "title": "Examiner's desk: diagnose two convincing but incorrect solutions",
    "marks": 14,
    "minutes": 36,
    "ao": {
      "AO2": 3,
      "AO3": 11
    },
    "topics": [
      "marking and misconceptions",
      "product rule",
      "optimisation",
      "binomial hypothesis testing",
      "p-values",
      "evaluating modelling assumptions"
    ],
    "stem": "Two students submit the following extracts. **Script A:** A model is \\(N(t)=120te^{-t/2}\\) for \\(t\\ge0\\). The student writes \\(N'(t)=120e^{-t/2}(1+t/2)\\) and concludes that output always increases, so there is no finite maximum. **Script B:** In an independent sample of \\(12\\) manufactured items, \\(8\\) pass inspection. Under \\(H_0:p=0.4\\) against \\(H_1:p>0.4\\), the student writes \\(P(X=8)=0.0420<0.05\\) and concludes that there is significant evidence of an improvement. Assume each item is independent with constant pass probability when using the binomial model. You are reviewing both scripts and preparing feedback.",
    "parts": [
      [
        "Find the exact error in Script A's differentiation and give the correct derivative.",
        3
      ],
      [
        "Find the actual maximum of \\(N(t)\\) on \\(t\\ge0\\) and explain why it is a maximum.",
        3
      ],
      [
        "Identify precisely what probability Script B has calculated instead of the required one, then write a correct binomial tail expression.",
        2
      ],
      [
        "Calculate the correct one-sided \\(p\\)-value and reach the decision at the \\(5\\%\\) level.",
        2
      ],
      [
        "Give one limitation of Script A's output model and one assumption that must be considered before Script B's statistical conclusion is meaningful.",
        2
      ],
      [
        "Write two brief, actionable pieces of feedback—one to each student—that would prevent these errors in similar exam questions.",
        2
      ]
    ],
    "hint": "For the product, differentiate the exponential factor using the chain rule. A one-sided binomial p-value is the probability of the observed count **or something more extreme**, not the point probability alone.",
    "steps": [
      "Script A differentiates \\(e^{-t/2}\\) incorrectly: the chain rule introduces \\(-\\frac12\\) rather than \\(+\\frac12\\). Correctly applying the product rule gives \\(N'(t)=120e^{-t/2}(1-t/2)\\). [3]",
      "The exponential factor is positive. Thus \\(N'(t)>0\\) for \\(0<t<2\\), \\(N'(2)=0\\), and \\(N'(t)<0\\) for \\(t>2\\). Hence the global maximum occurs at \\(t=2\\), with \\(N(2)=240/e\\approx88.291\\) model units. [3]",
      "Script B uses only \\(P(X=8)\\). Under \\(H_0\\), \\(X\\sim B(12,0.4)\\) and the right-tail p-value is \\(P(X\\ge8)=\\sum_{r=8}^{12}\\binom{12}{r}(0.4)^r(0.6)^{12-r}\\). [2]",
      "The exact tail gives \\(P(X\\ge8)\\approx0.0573099213\\). Since \\(0.0573>0.05\\), **do not reject** \\(H_0\\). The sample does not provide sufficient evidence at the 5% level that the population pass probability has increased above 0.4. [2]",
      "For A, a fixed exponential-decay factor and linear growth of the prefactor may not describe output after equipment or market conditions change. For B, repeated inspections may not be independent or may not share a constant pass probability; a random representative sample is also important for inference. One specific limitation for each earns credit. [2]",
      "Useful feedback A: 'Differentiate both factors, and explicitly carry the inner derivative \\(-1/2\\) before testing gradient signs.' Feedback B: 'For an upper-tail alternative, enter \\(P(X\\ge x_{\\mathrm{obs}})\\) in the binomial calculator, not \\(P(X=x_{\\mathrm{obs}})\\); then compare with 0.05.' Award specific, implementable advice to each student, not generic 'check work' comments. [2]"
    ],
    "answer": "Correct \\(N'(t)=120e^{-t/2}(1-t/2)\\); maximum \\(240/e\\) at \\(t=2\\). For the binomial test, \\(P(X\\ge8)\\approx0.05731\\) so **do not reject** \\(p=0.4\\) at 5%.",
    "misconception": "A point probability and a tail probability answer different statistical questions. In differentiation, the sign from the exponential's inner function can reverse the interpretation of a model.",
    "reflection": "Which two short calculator or algebra checks would have exposed the errors before either student submitted their work?"
  }
];
