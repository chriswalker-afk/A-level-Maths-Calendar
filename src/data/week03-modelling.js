export const week03Modelling = [
  {
    "id": "W03-M1",
    "section": "M",
    "title": "When can the ferry use the ramp?",
    "marks": 12,
    "minutes": 32,
    "ao": {
      "AO2": 2,
      "AO3": 10
    },
    "topics": [
      "periodic modelling",
      "inequalities",
      "tide predictions",
      "restrictions"
    ],
    "stem": "A ferry ramp is usable only when the tide is at least \\(4\\) metres high. The height \\(h\\) metres above a reference level is modelled by \\(h(t)=3+2\\cos\\left(\\frac{\\pi}{6}(t-3)\\right)\\), for \\(0\\le t\\le24\\), where \\(t\\) is the number of hours after midnight. One ferry service requires two uninterrupted hours of ramp access.",
    "parts": [
      [
        "State the modelled maximum and minimum tide heights and the period of the model, with units.",
        2
      ],
      [
        "Find all intervals of \\(t\\) during this 24-hour day for which the ramp is usable, giving exact endpoints.",
        4
      ],
      [
        "Calculate the total number of hours for which the ramp is usable in the stated day.",
        2
      ],
      [
        "Find every possible start-time interval for a service requiring two continuous hours of ramp access.",
        2
      ],
      [
        "Explain two reasons why the modelled access windows might not be reliable on a particular day.",
        2
      ]
    ],
    "hint": "Set \\(h(t)\\ge4\\), which becomes \\(\\cos\\left(\\frac{\\pi}{6}(t-3)\\right)\\ge\\frac12\\). Find the appropriate angular intervals, and then allow for the entire two-hour service to fit inside each usable window.",
    "steps": [
      "The mean tide height is \\(3\\) m and amplitude is \\(2\\) m. Thus the maximum is \\(5\\) m and minimum \\(1\\) m. Angular frequency is \\(\\omega=\\frac\\pi6\\) radians per hour, so period \\(T=\\frac{2\\pi}{\\omega}=12\\) hours. [2]",
      "The access rule gives \\(3+2\\cos\\left(\\frac\\pi6(t-3)\\right)\\ge4\\), hence \\(\\cos\\left(\\frac\\pi6(t-3)\\right)\\ge\\frac12\\). Around a maximum the argument lies between \\(-\\frac\\pi3\\) and \\(\\frac\\pi3\\), including both endpoints. This gives \\(-2\\le t-3\\le2\\), i.e. \\(1\\le t\\le5\\). Repeating after the \\(12\\)-hour period gives \\(13\\le t\\le17\\). There are no further such times within \\(0\\le t\\le24\\). [4]",
      "The usable windows are both \\(4\\) hours long, so the total usable time is \\(4+4=8\\) hours. [2]",
      "If the ferry begins at time \\(s\\), its full interval \\([s,s+2]\\) must fit inside one four-hour access window. Therefore \\(1\\le s\\le3\\) or \\(13\\le s\\le15\\) (hours after midnight). [2]",
      "The formula assumes a perfectly repeating sinusoidal tide with fixed amplitude and period; actual weather, atmospheric pressure or storm surge can change the level. Alternatively, predicted timings or the chosen reference level may be inaccurate. Any two distinct justified limitations. [2]"
    ],
    "answer": "The ramp is usable \\(1\\le t\\le5\\) and \\(13\\le t\\le17\\) hours after midnight, for \\(8\\) hours in total. Two-hour services can start when \\(1\\le s\\le3\\) or \\(13\\le s\\le15\\).",
    "misconception": "Two separate four-hour windows do not form one uninterrupted eight-hour window. A continuous service must fit entirely inside one window.",
    "reflection": "If safety rules required the tide to be strictly greater than 4 metres, which endpoints would change?"
  },
  {
    "id": "W03-M2",
    "section": "M",
    "title": "A signal with a hidden stationary point",
    "marks": 14,
    "minutes": 36,
    "ao": {
      "AO2": 2,
      "AO3": 12
    },
    "topics": [
      "periodic signals",
      "double angles",
      "differentiation",
      "stationary points",
      "small-angle approximations"
    ],
    "stem": "A laboratory records a dimensionless periodic signal modelled by \\(s(t)=2\\sin t+\\sin2t\\), for \\(0\\le t<2\\pi\\). The input \\(t\\) is measured in radians. The modeller wants to identify the largest possible signal, all stationary points, and the range over which a small-angle approximation is useful.",
    "parts": [
      [
        "Show that \\(s(t)=2\\sin t(1+\\cos t)\\).",
        2
      ],
      [
        "Differentiate the signal and show that \\(s'(t)=2(2\\cos t-1)(\\cos t+1)\\).",
        4
      ],
      [
        "Find every stationary point within the stated interval, giving exact coordinates, and classify them as a maximum, minimum or stationary point of inflection.",
        4
      ],
      [
        "Use small-angle approximations to predict \\(s(0.5)\\). Calculate the actual signal to 3 decimal places and find the percentage by which the approximation overestimates it, to 1 decimal place.",
        3
      ],
      [
        "Explain why the small-angle approximation cannot be used to find all the stationary points over a complete cycle.",
        1
      ]
    ],
    "hint": "Differentiate the original form using the chain rule. Then replace \\(\\cos2t\\) by \\(2\\cos^2t-1\\) and factorise. Check the sign of the derivative on both sides of \\(t=\\pi\\).",
    "steps": [
      "The double-angle identity gives \\(\\sin2t=2\\sin t\\cos t\\). Hence \\(s(t)=2\\sin t+2\\sin t\\cos t=2\\sin t(1+\\cos t)\\). [2]",
      "Differentiating \\(2\\sin t+\\sin2t\\) gives \\(s'(t)=2\\cos t+2\\cos2t\\). With \\(\\cos2t=2\\cos^2t-1\\), \\(s'(t)=2(2\\cos^2t+\\cos t-1)=2(2\\cos t-1)(\\cos t+1)\\). [4]",
      "Stationary points require \\(\\cos t=\\frac12\\) or \\(\\cos t=-1\\). Thus \\(t=\\frac\\pi3,\\pi,\\frac{5\\pi}3\\). Their ordinates are respectively \\(\\frac{3\\sqrt3}{2},0,-\\frac{3\\sqrt3}{2}\\). The derivative changes from positive to negative at \\(\\frac\\pi3\\), so that is a maximum; from negative to positive at \\(\\frac{5\\pi}3\\), so that is a minimum. Near \\(t=\\pi\\), \\(\\cos t+1>0\\) and \\(2\\cos t-1<0\\) on both sides: the derivative is negative on each side, so \\((\\pi,0)\\) is a stationary point of inflection. [4]",
      "For a small radian input, \\(\\sin t\\approx t\\) and \\(\\sin2t\\approx2t\\), giving \\(s(t)\\approx4t\\) and \\(s(0.5)\\approx2.000\\). Directly, \\(s(0.5)=2\\sin(0.5)+\\sin(1)\\approx1.800322\\) or \\(1.800\\) to 3 d.p. The relative overestimate is \\(\\frac{2-1.800322}{1.800322}\\times100\\%\\approx11.1\\%\\). [3]",
      "The approximations \\(\\sin u\\approx u\\) are justified only for small \\(|u|\\) in radians; they do not preserve the oscillation, repeated roots or behaviour near \\(t=\\pi\\) and \\(\\frac{5\\pi}3\\). [1]"
    ],
    "answer": "Stationary maximum \\((\\frac\\pi3,\\frac{3\\sqrt3}{2})\\), stationary inflection \\((\\pi,0)\\), and stationary minimum \\((\\frac{5\\pi}3,-\\frac{3\\sqrt3}{2})\\). Small-angle prediction at \\(t=0.5\\) is \\(2.000\\), actual \\(1.800\\), overestimate \\(11.1\\%\\).",
    "misconception": "Solving s′(t) = 0 does not prove a turning point; at t = π, the derivative is negative on both sides and the graph passes through a horizontal point of inflection.",
    "reflection": "What is the largest radian input for which you would accept less than 1% relative error in s(t) ≈ 4t? How could you test it?"
  }
];
