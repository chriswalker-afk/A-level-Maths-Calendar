export const week08Modelling = [
  {
    "id": "W08-M1",
    "section": "M",
    "title": "Optimise a treatment time when the minimum has no elementary expression",
    "marks": 12,
    "minutes": 32,
    "ao": {
      "AO2": 2,
      "AO3": 10
    },
    "topics": [
      "optimisation",
      "Newton–Raphson",
      "unique stationary point",
      "exponential model",
      "model critique"
    ],
    "stem": "A laboratory models the combined penalty and operating cost of processing a batch for \\(t\\) hours by \\(C(t)=20e^{-t}+t^2+5t\\) pounds, where \\(t\\ge0\\). The first term models a penalty for insufficient processing; the last two model increasing operational costs. The laboratory wants the lowest predicted total cost, but the stationarity equation cannot be rearranged into a simple elementary expression for \\(t\\).",
    "parts": [
      [
        "Differentiate \\(C(t)\\) and write down the equation that a stationary processing time must satisfy.",
        2
      ],
      [
        "Show that exactly one stationary time exists for \\(t>0\\) and that it gives the global minimum for \\(t\\ge0\\). Locate it between 1 and 1.1 hours.",
        3
      ],
      [
        "Starting with \\(t_0=1\\), use Newton–Raphson twice to approximate this time. Give the second iterate to at least five decimal places.",
        3
      ],
      [
        "Estimate the recommended time to two decimal places and the corresponding cost to the nearest penny. Interpret both in context.",
        2
      ],
      [
        "Explain two different reasons why the model alone should not determine a real laboratory processing protocol.",
        2
      ]
    ],
    "hint": "Set \\(f(t)=C'(t)\\) and apply Newton–Raphson to \\(f(t)=0\\) using \\(f'(t)=C''(t)\\). To establish a minimum, check the sign of \\(C''\\).",
    "steps": [
      "Differentiate to obtain \\(C'(t)=-20e^{-t}+2t+5\\). A stationary time therefore satisfies \\(-20e^{-t}+2t+5=0\\). [2]",
      "The second derivative is \\(C''(t)=20e^{-t}+2>0\\) for all \\(t\\ge0\\), so \\(C'\\) is strictly increasing and any stationary point is the unique global minimum. Since \\(C'(0)=-15<0\\) and \\(C'(t)\\to\\infty\\), one exists. Numerically \\(C'(1)\\approx-0.357589<0\\) and \\(C'(1.1)\\approx0.542578>0\\), giving \\(1<t_{\\min}<1.1\\). [3]",
      "Newton's formula for \\(f(t)=C'(t)\\) is \\(t_{n+1}=t_n-\\frac{-20e^{-t_n}+2t_n+5}{20e^{-t_n}+2}\\). From \\(t_0=1\\), obtain \\(t_1=1.038213778\\ldots\\) and \\(t_2=1.038797845\\ldots\\). [3]",
      "The recommended processing duration is approximately \\(1.04\\) hours, with modelled cost \\(C(1.03879798\\ldots)\\approx13.350687\\), or \\(£13.35\\). This is the minimum of the stated mathematical model, not necessarily a safe operating instruction. [2]",
      "The fitted penalty formula may not match measured material quality; equipment and safety rules may impose a minimum safe exposure time. The cost parameters may also change, and a continuous time recommendation may not match available scheduling increments. Award any two different limitations appropriately explained. [2]"
    ],
    "answer": "\\(C'(t)=-20e^{-t}+2t+5\\); unique minimum at \\(t\\approx1.038798\\) hours; practical rounded recommendation \\(1.04\\) hours at about \\(£13.35\\) under this model.",
    "misconception": "Newton's iteration must be applied to C'(t)=0, so the derivative in its denominator is C''(t), not C'(t). A stationary root alone is not sufficient without a minimum test.",
    "reflection": "If the laboratory imposed a minimum permitted processing time of 1.5 hours, how would you identify the least-cost feasible choice without new differentiation?"
  },
  {
    "id": "W08-M2",
    "section": "M",
    "title": "Compare an exact exposure model with sampled numerical evidence",
    "marks": 14,
    "minutes": 36,
    "ao": {
      "AO2": 2,
      "AO3": 12
    },
    "topics": [
      "exponential rate model",
      "analytical integration",
      "trapezium estimation",
      "numerical roots",
      "model reliability"
    ],
    "stem": "During decontamination, a sensor's concentration reading is modelled by \\(C(t)=10+90e^{-0.3t}\\) parts per million (ppm) at time \\(t\\ge0\\) hours. The constant \\(10\\) ppm is a background reading. The accumulated excess exposure in the first five hours is \\(E=\\int_0^5(C(t)-10)\\,dt\\), measured in ppm hours. A technician samples the process at integer hours and compares a trapezium estimate with the analytical model.",
    "parts": [
      [
        "Show that the model satisfies \\(\\frac{dC}{dt}=-0.3(C-10)\\) and identify its initial concentration.",
        2
      ],
      [
        "Calculate the exact model value of \\(E\\) and independently approximate it using five equal-width trapezia with hourly excess-concentration samples.",
        4
      ],
      [
        "Find the signed error (trapezium estimate minus exact model integral) and explain the direction of that error using the curve's shape.",
        3
      ],
      [
        "Find when the model first reaches \\(40\\) ppm. Show two Newton–Raphson steps starting at \\(t_0=3.5\\) hours, then give the time to two decimal places.",
        3
      ],
      [
        "Give two distinct reasons the discrepancy between the numerical and exact answers does not tell the technician how accurate the underlying real-world model is.",
        2
      ]
    ],
    "hint": "Integrate \\(90e^{-0.3t}\\) exactly and evaluate it at \\(t=0,1,2,3,4,5\\) for the numerical estimate. The threshold equation is \\(F(t)=90e^{-0.3t}-30=0\\).",
    "steps": [
      "Differentiation gives \\(C'(t)=-27e^{-0.3t}=-0.3(90e^{-0.3t})=-0.3(C(t)-10)\\). The initial concentration is \\(C(0)=10+90=100\\) ppm. [2]",
      "The exact excess exposure is \\(E=[-300e^{-0.3t}]_0^5=300(1-e^{-1.5})\\approx233.060952\\) ppm hours. The six excess-concentration ordinates are \\(90,\\ 66.673640,\\ 49.393047,\\ 36.591269,\\ 27.107479,\\ 20.081714\\) at hour marks 0 through 5. With \\(h=1\\), the trapezium rule gives \\(T_5=\\frac12[y_0+2(y_1+y_2+y_3+y_4)+y_5]\\approx234.806293\\) ppm hours. [4]",
      "Subtract the exact value: \\(T_5-E\\approx234.806293-233.060952=+1.745341\\) ppm hours. Here the excess function has \\((C-10)''=8.1e^{-0.3t}>0\\), so the straight chords lie above the convex exponential curve; the trapezium rule overestimates the model integral. [3]",
      "For the threshold define \\(F(t)=90e^{-0.3t}-30\\) and \\(F'(t)=-27e^{-0.3t}\\). Newton's rule \\(t_{n+1}=t_n-\\frac{F(t_n)}{F'(t_n)}\\) gives \\(t_1=3.658165424\\ldots\\) and \\(t_2=3.662038710\\ldots\\) from \\(t_0=3.5\\). Thus \\(t\\approx3.66\\) hours; the exact log check is \\(t=\\ln3/0.3\\approx3.662041\\). [3]",
      "The trapezium error compares two ways of calculating the same assumed exponential function; it does not account for sensor calibration errors or actual changes in the decay rate. A constant background assumption may also fail, and hourly readings are a sparse set of measurements. Credit two distinct reasons linked to evidence or model uncertainty. [2]"
    ],
    "answer": "\\(C(0)=100\\) ppm; exact excess \\(E=300(1-e^{-1.5})\\approx233.060952\\) ppm h; numerical \\(T_5\\approx234.806293\\) ppm h; signed error \\(+1.745341\\) ppm h. Threshold \\(40\\) ppm at \\(t\\approx3.66\\) hours.",
    "misconception": "A small integration error only indicates numerical closeness to the chosen formula, not that the formula is a good fit to observations. Do not confuse concentration and accumulated exposure units.",
    "reflection": "What additional measurements would best test whether the observed concentration follows a fixed-rate exponential law, rather than merely make the trapezium estimate more precise?"
  }
];
