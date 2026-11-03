export const week04ExpansionModelling = [
  {
    "id": "W04-M3",
    "section": "M",
    "title": "When a conical tank fills faster than it should",
    "marks": 14,
    "ao": {
      "AO2": 3,
      "AO3": 11
    },
    "topics": [
      "similarity and volume",
      "accumulation",
      "connected rates",
      "capacity constraints",
      "model evaluation"
    ],
    "stem": "A conical tank points downwards. Its height is \\(6\\) metres and its maximum radius is \\(3\\) metres. Water fills it to a depth h from the tip; at all times the surface is horizontal. Initially \\(h=2\\) metres. An inlet supplies water at \\(q(t)=6\\pi(1-t/12)\\ \\mathrm{m^3\\,h^{-1}}\\) for \\(0\\le t\\le6\\) hours, provided that the tank has not overflowed.",
    "parts": [
      [
        "Use similar triangles to express water-surface radius r in terms of h, and derive the water volume \\(V=\\pi h^3/12\\). State the capacity.",
        3
      ],
      [
        "Integrate the inflow rate to derive the predicted volume \\(V(t)\\) prior to overflow, including the initial condition.",
        4
      ],
      [
        "At \\(t=2\\) hours determine h exactly and find the instantaneous rate at which the water depth increases.",
        3
      ],
      [
        "Calculate the first time at which the tank reaches capacity, giving two decimal places. Explain why blindly extrapolating your volume expression beyond that time would be invalid.",
        4
      ]
    ],
    "hint": "The tank radius-to-height ratio is 3:6. Then integrate dV/dt=q(t) and relate dh/dt to q through dV/dh.",
    "steps": [
      "Similarity gives \\(r/h=3/6=1/2\\), so \\(r=h/2\\). [1] Hence \\(V=\\frac13\\pi r^2h=\\pi h^3/12\\). [1] Full capacity at h=6 is \\(18\\pi\\ \\mathrm{m^3}\\). [1]",
      "Initially \\(V(0)=\\pi(2)^3/12=2\\pi/3\\). [1] Accumulating inflow yields \\(V(t)=\\frac{2\\pi}{3}+\\int_0^t6\\pi(1-u/12)\\,du\\). [1] Integration gives \\(V(t)=\\pi(2/3+6t-t^2/4)\\) while the tank has not overflowed. [2]",
      "At t=2, \\(V=35\\pi/3\\). [1] Equating to \\(\\pi h^3/12\\) gives \\(h^3=140,\\ h=\\sqrt[3]{140}\\) metres. [1] Since \\(dV/dh=\\pi h^2/4\\), \\(dh/dt=q/(dV/dh)=20/140^{2/3}\\ \\mathrm{m\\,h^{-1}}\\). [1]",
      "Set \\(\\pi(2/3+6t-t^2/4)=18\\pi\\). [1] Rearranging gives \\(t^2-24t+208/3=0\\). [1] The relevant root is \\(t=12-4\\sqrt{14/3}\\approx3.36\\) hours (the other is beyond six hours). [1] After filling, water must overflow, stop entering, or leave through some other process, so the unbounded accumulating formula no longer gives water *stored* in the tank. [1]"
    ],
    "answer": "\\(V=\\pi h^3/12\\) and capacity \\(18\\pi\\) m³; pre-overflow \\(V(t)=\\pi(2/3+6t-t^2/4)\\); at t=2, \\(h=\\sqrt[3]{140}\\) m and \\(dh/dt=20/140^{2/3}\\) m/h; full after \\(3.36\\) h.",
    "misconception": "Integration predicts the cumulative water delivered, not the stored volume after the finite tank becomes full.",
    "reflection": "How would the model need to change if an overflow pipe carried away any excess water?"
  }
];
