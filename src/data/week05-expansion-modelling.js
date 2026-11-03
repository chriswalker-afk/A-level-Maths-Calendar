export const week05ExpansionModelling = [
  {
    "id": "W05-M3",
    "section": "M",
    "title": "A reservoir fills more slowly as conditions change",
    "marks": 14,
    "ao": {
      "AO1": 1,
      "AO2": 3,
      "AO3": 10
    },
    "topics": [
      "accumulation from variable rates",
      "differentiation",
      "exponential modelling",
      "model limits"
    ],
    "stem": "A reservoir receives water at the continuously varying rate \\(r(t)=6te^{-t^2/4}\\) cubic metres per hour at time \\(t\\ge0\\) hours. Initially it is empty. No water is lost. A designer claims the model predicts an unlimited increase in volume and says the maximum inflow must occur at t=0.",
    "parts": [
      [
        "Use integration to find the volume V(t), including its initial condition.",
        4
      ],
      [
        "Find the time when inflow is greatest and explain why it is a maximum.",
        3
      ],
      [
        "Find the exact first time when the reservoir reaches 90% of the limiting modelled volume.",
        4
      ],
      [
        "Explain why the designer's two claims are wrong and identify one relevant physical assumption of the model.",
        3
      ]
    ],
    "hint": "For the volume, use u=−t²/4. For maximum inflow differentiate t times an exponential. Reaching 90% means the remaining exponential factor is 0.1.",
    "steps": [
      "\\(V(t)=\\int_0^t6ue^{-u^2/4}\\,du\\) since the reservoir starts empty. [1] Using \\(d(-u^2/4)/du=-u/2\\), an antiderivative is \\(-12e^{-u^2/4}\\). [2] Evaluate the bounds: \\(V(t)=12(1-e^{-t^2/4})\\ \\mathrm{m^3}\\). [1]",
      "\\(r'(t)=6e^{-t^2/4}(1-t^2/2)\\). [1] It is positive for 0<t<√2 and negative for t>√2, so inflow peaks at \\(t=\\sqrt2\\) hours. [2]",
      "The limiting volume is \\(\\lim_{t\\to\\infty}V(t)=12\\ \\mathrm{m^3}\\). [1] For 90%, \\(12(1-e^{-t^2/4})=10.8\\). [1] Rearranging gives \\(e^{-t^2/4}=0.1\\) and \\(t^2=4\\ln10\\). [1] Since t≥0, \\(t=2\\sqrt{\\ln10}\\approx3.035\\) h; it is the first time because V is increasing for t>0. [1]",
      "The volume tends to 12, rather than growing without bound, since the inflow eventually decays towards zero. [1] The initial inflow is \\(r(0)=0\\), whereas it becomes positive and peaks at √2, so the second claim is false. [1] A physical reservoir has finite shape/capacity, evaporation or leaks may exist, or the fitted rate may be unreliable for large t; one justified relevant limitation earns a mark. [1]"
    ],
    "answer": "\\(V(t)=12(1-e^{-t^2/4})\\ \\mathrm{m^3}\\); peak inflow at \\(t=\\sqrt2\\) h; 90% of the 12 m³ limiting volume at \\(t=2\\sqrt{\\ln10}\\approx3.035\\) h.",
    "misconception": "A positive accumulation rate does not imply unlimited total accumulation: a rate can be positive yet have finite total integral.",
    "reflection": "How might a leakage rate depending on current volume change the differential equation and the limiting volume?"
  }
];
