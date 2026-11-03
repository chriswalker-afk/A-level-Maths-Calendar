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
    "title": "The energy of an adjustable sensor pulse",
    "marks": 14,
    "minutes": 36,
    "ao": {
      "AO2": 2,
      "AO3": 12
    },
    "topics": [
      "accumulation models",
      "integration by parts",
      "parameter sensitivity",
      "energy index",
      "model restrictions"
    ],
    "stem": "A sensor records a short pulse described by \\(s_a(t)=a\\sqrt{t}\\,e^{-t/4}\\) for \\(0\\le t\\le4\\), where \\(a>0\\) is an adjustable amplitude parameter. A dimensionless accumulated energy index is defined to be the integral of the square of the signal, \\(E(a)=\\int_0^4s_a(t)^2\\,dt\\). For this design, the index must not exceed \\(9(4-12e^{-2})\\).",
    "parts": [
      [
        "Show that \\(E(a)=a^2\\int_0^4te^{-t/2}\\,dt\\).",
        2
      ],
      [
        "Use integration by parts to prove \\(\\int_0^4te^{-t/2}\\,dt=4-12e^{-2}\\).",
        4
      ],
      [
        "Find the exact expression for \\(E(a)\\) and its derivative \\(E'(a)\\).",
        2
      ],
      [
        "Find all permissible values of \\(a\\) and justify the inequality used.",
        2
      ],
      [
        "Calculate the exact percentage increase in the energy index when \\(a\\) increases by \\(10\\%\\).",
        2
      ],
      [
        "Find the time at which the sensor pulse has its maximum amplitude, and express that amplitude in terms of \\(a\\).",
        2
      ]
    ],
    "hint": "Square the pulse model before integrating. Choose \\(u=t\\) and \\(dv=e^{-t/2}\\,dt\\) for integration by parts. The index is proportional to the square of the scale parameter.",
    "steps": [
      "By definition \\(E(a)=\\int_0^4s_a(t)^2\\,dt\\) and \\(s_a(t)^2=a^2te^{-t/2}\\). Since \\(a\\) is independent of \\(t\\), \\(E(a)=a^2\\int_0^4te^{-t/2}\\,dt\\). [2]",
      "Use parts with \\(u=t\\) and \\(dv=e^{-t/2}\\,dt\\), so \\(du=dt\\) and \\(v=-2e^{-t/2}\\). Therefore \\(\\int te^{-t/2}\\,dt=-2te^{-t/2}+2\\int e^{-t/2}\\,dt=-2(t+2)e^{-t/2}+C\\). Evaluating from \\(0\\) to \\(4\\) gives \\(-12e^{-2}-(-4)=4-12e^{-2}\\). [4]",
      "Hence \\(E(a)=a^2(4-12e^{-2})\\) and \\(E'(a)=2a(4-12e^{-2})\\). The constant is positive because \\(e^2>3\\). [2]",
      "The cap is \\(a^2(4-12e^{-2})\\le9(4-12e^{-2})\\). Dividing by the positive factor gives \\(a^2\\le9\\). With \\(a>0\\), the range is \\(0<a\\le3\\). [2]",
      "As \\(E(a)\\) is proportional to \\(a^2\\), changing to \\(1.1a\\) multiplies the index by \\(1.1^2=1.21\\). Its percentage increase is \\(21\\%\\). [2]",
      "For \\(t>0\\), differentiate the signal: \\(s_a'(t)=\\frac{ae^{-t/4}}{4\\sqrt t}(2-t)\\). The derivative changes from positive to negative at \\(t=2\\), and \\(s_a(0)=0\\); hence the maximum is \\(s_a(2)=a\\sqrt2e^{-1/2}\\). [2]"
    ],
    "answer": "\\(E(a)=a^2(4-12e^{-2})\\), permitted \\(0<a\\le3\\); increasing amplitude by \\(10\\%\\) increases the index by \\(21\\%\\); maximum pulse \\(a\\sqrt2e^{-1/2}\\) at \\(t=2\\).",
    "misconception": "The model defines the energy index by integrating the square of a pulse; it is not a geometric volume. Increasing amplitude by 10% increases a squared-amplitude accumulation by 21%.",
    "reflection": "What assumptions would need checking before treating this simplified energy index as a real measurement of energy transferred by a sensor?"
  }
];
