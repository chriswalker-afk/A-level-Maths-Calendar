export const week05Modelling = [
  {
    "id": "W05-M1",
    "section": "M",
    "title": "Accumulated flow and the meaning of average",
    "marks": 12,
    "minutes": 32,
    "ao": {
      "AO2": 2,
      "AO3": 10
    },
    "topics": [
      "rate of flow",
      "accumulation",
      "definite integrals",
      "average value",
      "model limitations"
    ],
    "stem": "Water enters an initially partially filled tank at rate \\(q(t)=12+6t-t^2\\) litres per minute, where \\(t\\) is in minutes and \\(0\\le t\\le6\\). At \\(t=0\\), the tank holds \\(80\\) litres. Assume no water leaves during this period. A measuring device reports the instantaneous rate \\(q(t)\\).",
    "parts": [
      [
        "State the initial flow rate and find the maximum flow rate during the six-minute period.",
        2
      ],
      [
        "Find a formula for the amount \\(V(t)\\) in the tank, and hence calculate the volume at \\(t=6\\).",
        3
      ],
      [
        "Find the average rate at which water entered over the six-minute interval. Include units.",
        2
      ],
      [
        "Find the exact interval of times for which the instantaneous rate exceeds the average rate. Explain what this says about the accumulation of water during that interval.",
        3
      ],
      [
        "Explain two limitations of using this mathematical model to predict how much water will be in the tank at a much later time.",
        2
      ]
    ],
    "hint": "Integrate q(t) to find the total inflow. For the average rate, divide total accumulated volume by the elapsed time. To compare instantaneous and average rates, solve q(t) > 18.",
    "steps": [
      "At the start, \\(q(0)=12\\) litres/min. Differentiating gives \\(q'(t)=6-2t\\); the flow is greatest at \\(t=3\\), with \\(q(3)=12+18-9=21\\) litres/min. [2]",
      "The tank contains \\(V(t)=80+\\int_0^t(12+6u-u^2)\\,du=80+12t+3t^2-\\frac{t^3}{3}\\) litres. At \\(t=6\\), \\(V(6)=80+72+108-72=188\\) litres. Thus \\(108\\) litres entered in the six minutes. [3]",
      "Average inflow \\(\\bar q=\\frac1{6}\\int_0^6q(t)\\,dt=\\frac{108}{6}=18\\) litres/min. [2]",
      "Solve \\(12+6t-t^2>18\\), equivalent to \\(t^2-6t+6<0\\). The roots are \\(3\\pm\\sqrt3\\), hence \\(3-\\sqrt3<t<3+\\sqrt3\\) minutes. Throughout this interval the volume increases at more than \\(18\\) litres per minute, faster than its mean accumulation rate over the six minutes. [3]",
      "The inflow polynomial may not continue to represent a pump's output after six minutes; in fact it eventually predicts negative inflow. Also, the model assumes no outflow and sufficient tank capacity, which could cease to be true. Any two distinct contextual limitations. [2]"
    ],
    "answer": "Maximum flow \\(21\\) L/min at \\(t=3\\); \\(V(t)=80+12t+3t^2-\\frac{t^3}{3}\\) L, \\(V(6)=188\\) L; average inflow \\(18\\) L/min; faster than average for \\(3-\\sqrt3<t<3+\\sqrt3\\).",
    "misconception": "The average rate is total change divided by elapsed time, not the average of just the initial and final instantaneous rates. The model is only validated on the stated time domain.",
    "reflection": "Why does the model have the same rate q(0) = q(6) but a higher average rate over the full interval?"
  },
  {
    "id": "W05-M2",
    "section": "M",
    "title": "A rotating vessel with adjustable size",
    "marks": 14,
    "minutes": 36,
    "ao": {
      "AO2": 2,
      "AO3": 12
    },
    "topics": [
      "solids of revolution",
      "integration by parts",
      "parameter sensitivity",
      "optimisation",
      "manufacturing constraints"
    ],
    "stem": "A designer uses the curve \\(y=a\\sqrt{x}\\,e^{-x/4}\\), where \\(0\\le x\\le4\\) and \\(a>0\\), to describe the inner radius of a rotationally symmetric vessel. All lengths are in centimetres, with the scale parameter \\(a\\) chosen in consistent units. The region under the curve is rotated about the \\(x\\)-axis. The vessel's internal volume must not exceed \\(9\\pi(4-12e^{-2})\\) cubic centimetres.",
    "parts": [
      [
        "Show that the internal volume is \\(V(a)=\\pi a^2\\int_0^4 xe^{-x/2}\\,dx\\).",
        2
      ],
      [
        "Use integration by parts to show that \\(\\int_0^4 xe^{-x/2}\\,dx=4-12e^{-2}\\).",
        4
      ],
      [
        "Hence express \\(V(a)\\) exactly and differentiate it with respect to \\(a\\).",
        2
      ],
      [
        "Find all allowable values of \\(a\\) under the capacity restriction, explaining the inequality you use.",
        2
      ],
      [
        "If \\(a\\) increases by exactly \\(10\\%\\), calculate the exact percentage increase in volume.",
        2
      ],
      [
        "Find where the vessel's inner radius is greatest, and state its maximum radius in terms of \\(a\\).",
        2
      ]
    ],
    "hint": "Use the disc formula V = π∫y² dx. For the definite integral take u = x and dv = e^{-x/2}dx. When the radius scale a changes, the cross-sectional area changes as a².",
    "steps": [
      "Squaring the radius gives \\(y^2=a^2xe^{-x/2}\\). Revolving about the x-axis and integrating discs gives \\(V(a)=\\pi\\int_0^4y^2\\,dx=\\pi a^2\\int_0^4xe^{-x/2}\\,dx\\). [2]",
      "Apply parts to \\(\\int xe^{-x/2}\\,dx\\) with \\(u=x\\) and \\(dv=e^{-x/2}\\,dx\\); then \\(du=dx\\) and \\(v=-2e^{-x/2}\\). Therefore \\(\\int xe^{-x/2}\\,dx=-2xe^{-x/2}+2\\int e^{-x/2}\\,dx=-2(x+2)e^{-x/2}+C\\). Evaluate at \\(x=4\\) and \\(x=0\\): \\(-12e^{-2}-(-4)=4-12e^{-2}\\). [4]",
      "Consequently \\(V(a)=\\pi a^2(4-12e^{-2})\\) and \\(V'(a)=2\\pi a(4-12e^{-2})\\). The constant factor is positive because \\(e^2>3\\). [2]",
      "The capacity restriction becomes \\(\\pi a^2(4-12e^{-2})\\le9\\pi(4-12e^{-2})\\). Cancel the positive common factor to get \\(a^2\\le9\\). Together with \\(a>0\\), the allowed range is \\(0<a\\le3\\). [2]",
      "The volume is proportional to \\(a^2\\). Replacing \\(a\\) by \\(1.1a\\) multiplies it by \\((1.1)^2=1.21\\), a \\(21\\%\\) increase. [2]",
      "For \\(x>0\\), differentiate the radius: \\(y'=\\frac{ae^{-x/4}}{4\\sqrt{x}}(2-x)\\). The derivative is positive before \\(x=2\\) and negative afterwards; with \\(y(0)=0\\), the maximum is at \\(x=2\\), where \\(y_{\\max}=a\\sqrt2\\,e^{-1/2}\\) cm. [2]"
    ],
    "answer": "\\(V(a)=\\pi a^2(4-12e^{-2})\\) cm³; permissible \\(0<a\\le3\\); increasing \\(a\\) by \\(10\\%\\) increases volume by \\(21\\%\\); greatest radius \\(a\\sqrt2e^{-1/2}\\) cm at \\(x=2\\).",
    "misconception": "Rotating a region creates discs with area πy²; integrating y alone would calculate an ordinary planar area, not vessel volume. Increasing every radius by 10% does not increase volume by only 10%.",
    "reflection": "What engineering assumptions are hidden in treating the wall thickness as negligible and the inner radius as a perfectly smooth mathematical function?"
  }
];
