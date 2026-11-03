export const week08Timed = [
  {
    "id": "W08-T1",
    "section": "T",
    "title": "A real root by bracket and tangent iteration",
    "marks": 8,
    "minutes": 12,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "polynomial sign changes",
      "Newton–Raphson",
      "root accuracy",
      "numerical limitations"
    ],
    "stem": "The equation \\(x^3-2x-2=0\\) has a positive solution. Let \\(f(x)=x^3-2x-2\\).",
    "parts": [
      [
        "Demonstrate a change of sign between \\(x=1.7\\) and \\(x=1.8\\) and explain why this is evidence of a root.",
        2
      ],
      [
        "Starting with \\(x_0=1.8\\), perform two Newton–Raphson updates using an explicit derivative.",
        3
      ],
      [
        "Give the root to four decimal places and justify this rounding using an additional update or a suitable bracket.",
        2
      ],
      [
        "State one specific starting-value issue that might make Newton's method unsuccessful.",
        1
      ]
    ],
    "hint": "Differentiate the cubic and substitute into \\(x_{n+1}=x_n-f(x_n)/f'(x_n)\\). Retain full precision between steps.",
    "steps": [
      "Calculate \\(f(1.7)=1.7^3-2(1.7)-2=-0.487\\) and \\(f(1.8)=1.8^3-2(1.8)-2=0.232\\). The polynomial is continuous so a root lies in \\((1.7,1.8)\\). [2]",
      "Here \\(f'(x)=3x^2-2\\) and \\(x_{n+1}=x_n-\\frac{x_n^3-2x_n-2}{3x_n^2-2}\\). From \\(x_0=1.8\\), \\(x_1=1.769948187\\ldots\\) and \\(x_2=1.769292663\\ldots\\). [3]",
      "A further iterate is \\(x_3=1.769292354\\ldots\\). These values justify reporting \\(x\\approx1.7693\\) to four decimal places; an appropriate sign-change rounding bracket is an alternative. [2]",
      "Starting at a point with \\(f'(x_0)=0\\) would make the update undefined; a very small derivative can produce a huge step. [1]"
    ],
    "answer": "A root in \\((1.7,1.8)\\); Newton iterates \\(1.769948187,\\ 1.769292663,\\ 1.769292354\\); root \\(1.7693\\) to four decimal places.",
    "misconception": "Do not use a derivative evaluated at the original starting point in every update; Newton's derivative must be recalculated at the current iterate.",
    "reflection": "What evidence would you give a reader who wanted proof that your four-decimal-place rounding is secure?"
  },
  {
    "id": "W08-T2",
    "section": "T",
    "title": "Trapezia under a concave logarithmic graph",
    "marks": 12,
    "minutes": 17,
    "ao": {
      "AO1": 3,
      "AO2": 7,
      "AO3": 2
    },
    "topics": [
      "logarithmic integration",
      "trapezium rule",
      "concavity",
      "signed numerical error",
      "method refinement"
    ],
    "stem": "An analyst needs \\(I=\\int_0^2\\ln(1+x)\\,dx\\). A calculator is used to approximate it by the composite trapezium rule with four equal-width strips.",
    "parts": [
      [
        "Find the strip width and list the five exact ordinates in terms of logarithms.",
        2
      ],
      [
        "Calculate the trapezium estimate \\(T_4\\) to six decimal places, showing the weighted-ordinate calculation.",
        3
      ],
      [
        "Use integration by parts to find an exact expression for \\(I\\).",
        3
      ],
      [
        "Find the magnitude and sign of \\(T_4-I\\) to six decimal places.",
        2
      ],
      [
        "Use a derivative to justify the error direction and propose one reasonable numerical improvement.",
        2
      ]
    ],
    "hint": "The step size is \\(h=\\frac12\\) and \\(\\int\\ln(1+x)\\,dx=(1+x)\\ln(1+x)-(1+x)+C\\) can be derived by parts.",
    "steps": [
      "There are four intervals across a length of 2, so \\(h=0.5\\). The ordinates at \\(0,0.5,1,1.5,2\\) are \\(0,\\ln(3/2),\\ln2,\\ln(5/2),\\ln3\\). [2]",
      "The trapezium rule gives \\(T_4=\\frac12[\\frac12\\ln3+\\ln(3/2)+\\ln2+\\ln(5/2)]\\approx1.282105\\). Show the end ordinates halved and all interior ordinates at full weight. [3]",
      "Integrate by parts with \\(u=\\ln(1+x),\\ dv=dx\\) to obtain \\(\\int\\ln(1+x)\\,dx=(1+x)\\ln(1+x)-(1+x)+C\\). Hence \\(I=[(1+x)\\ln(1+x)-(1+x)]_0^2=3\\ln3-2\\approx1.295837\\). [3]",
      "Subtract \\(T_4-I\\approx1.282104582-1.295836866=-0.013732284\\), or \\(-0.013732\\) to six decimal places. The magnitude is \\(0.013732\\) square units, so the trapezium method is below the exact area. [2]",
      "Since \\(f''(x)=-\\frac1{(1+x)^2}<0\\) on the interval, the chords lie below this concave curve. Increasing the number of narrower trapezia would improve the numerical approximation. [2]"
    ],
    "answer": "\\(T_4\\approx1.282105\\), \\(I=3\\ln3-2\\approx1.295837\\), and \\(T_4-I\\approx-0.013732\\): an underestimate.",
    "misconception": "The sign of the trapezium error is tied to curvature, not whether the function rises or falls; here the increasing logarithmic graph is concave and chords lie below it.",
    "reflection": "Would you expect the trapezium estimate to rise or fall as the number of strips increases for this particular curve?"
  },
  {
    "id": "W08-T3",
    "section": "T",
    "title": "A motion model checked by two numerical methods",
    "marks": 12,
    "minutes": 16,
    "ao": {
      "AO1": 2,
      "AO2": 6,
      "AO3": 4
    },
    "topics": [
      "differentiation and integration",
      "positive velocity",
      "trapezium error",
      "Newton–Raphson",
      "kinematic interpretation"
    ],
    "stem": "A particle moves to the right along a straight track. Its displacement from its initial position is modelled by \\(s(t)=8t-3(1-e^{-2t})\\) metres for \\(0\\le t\\le2\\) seconds.",
    "parts": [
      [
        "Find expressions for velocity \\(v(t)\\) and acceleration \\(a(t)\\).",
        2
      ],
      [
        "Explain why the distance travelled from \\(t=0\\) to \\(t=2\\) equals the displacement over this interval, then find that displacement exactly.",
        3
      ],
      [
        "Use four equal trapezia to approximate the distance by integrating the velocity function from 0 to 2 seconds.",
        3
      ],
      [
        "Calculate the signed numerical error and explain its direction from the curvature of \\(v(t)\\).",
        2
      ],
      [
        "Use Newton–Raphson, starting at \\(t_0=1.8\\), to estimate when the displacement first reaches \\(12\\,\\mathrm m\\) to two decimal places.",
        2
      ]
    ],
    "hint": "Differentiate s to obtain v and a. For trapezia use times \\(0,0.5,1,1.5,2\\); for Newton solve \\(F(t)=s(t)-12=0\\) using \\(F'(t)=v(t)\\).",
    "steps": [
      "Differentiation gives \\(v(t)=s'(t)=8-6e^{-2t}\\) metres per second and \\(a(t)=v'(t)=12e^{-2t}\\) metres per second squared. [2]",
      "Since \\(0<e^{-2t}\\le1\\) for \\(t\\ge0\\), \\(v(t)=8-6e^{-2t}\\ge2>0\\). The particle does not reverse, so distance equals positive displacement. Its exact value is \\(s(2)-s(0)=16-3(1-e^{-4})=13+3e^{-4}\\approx13.054947\\,\\mathrm m\\). [3]",
      "At the nodes \\(0,0.5,1,1.5,2\\), the velocity ordinates are approximately \\(2,\\ 5.792723,\\ 7.187988,\\ 7.701278,\\ 7.890106\\). With \\(h=0.5\\), \\(T_4=\\frac h2[v_0+2(v_1+v_2+v_3)+v_4]\\approx12.813521\\,\\mathrm m\\). [3]",
      "The error is \\(T_4-(13+3e^{-4})\\approx-0.241426\\,\\mathrm m\\). Since \\(v''(t)=-24e^{-2t}<0\\), the velocity curve is concave and its chords lie below it; the numerical integral underestimates distance. [2]",
      "Take \\(F(t)=8t-3(1-e^{-2t})-12\\) with \\(F'(t)=8-6e^{-2t}\\). Newton's formula \\(t_{n+1}=t_n-F(t_n)/F'(t_n)\\) starting at \\(t_0=1.8\\) gives \\(t_1=1.86610835\\ldots\\) then \\(t_2=1.86602104\\ldots\\). Thus the particle first reaches 12 metres at about \\(1.87\\,\\mathrm s\\). [2]"
    ],
    "answer": "\\(v=8-6e^{-2t}\\), \\(a=12e^{-2t}\\); exact distance \\(13+3e^{-4}\\approx13.054947\\,\\mathrm m\\), trapezium \\(12.813521\\,\\mathrm m\\), error \\(-0.241426\\,\\mathrm m\\), threshold time \\(1.87\\,\\mathrm s\\).",
    "misconception": "A trapezium estimate of the integral of velocity has units of metres, not metres per second; its error direction follows the curvature of v(t), not the sign of acceleration alone.",
    "reflection": "Why is this a situation where using a numerical root finder is practical even though the displacement function is known exactly?"
  }
];
