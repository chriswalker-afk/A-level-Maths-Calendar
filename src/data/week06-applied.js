export const week06Applied = [
  {
    "id": "W06-A1",
    "section": "A",
    "title": "Velocity and acceleration are different quantities",
    "marks": 4,
    "minutes": 8,
    "ao": {
      "AO1": 2,
      "AO3": 2
    },
    "topics": [
      "one-dimensional kinematics",
      "differentiation",
      "stationary acceleration"
    ],
    "stem": "A particle moves on a straight line. Its displacement from a fixed origin, in metres, is \\(s(t)=t^3-6t^2+9t\\), where \\(t\\) is measured in seconds and \\(t\\ge0\\). Take positive displacement to the right.",
    "parts": [
      [
        "Find an expression for the velocity \\(v(t)\\).",
        2
      ],
      [
        "Find the acceleration when \\(t=2\\) seconds and state whether the particle is at rest at that instant, explaining your answer.",
        2
      ]
    ],
    "hint": "Velocity is the time derivative of displacement. To decide whether the particle is at rest, evaluate velocity rather than acceleration.",
    "steps": [
      "Differentiate the displacement: \\(v(t)=\\frac{\\mathrm ds}{\\mathrm dt}=3t^2-12t+9\\) metres per second. [2]",
      "The acceleration is \\(a(t)=\\frac{\\mathrm dv}{\\mathrm dt}=6t-12\\), so \\(a(2)=0\\ \\mathrm{m\\,s^{-2}}\\). But \\(v(2)=12-24+9=-3\\ \\mathrm{m\\,s^{-1}}\\), so the particle is moving left, not at rest. [2]"
    ],
    "answer": "\\(v(t)=3t^2-12t+9\\), \\(a(2)=0\\ \\mathrm{m\\,s^{-2}}\\), but \\(v(2)=-3\\ \\mathrm{m\\,s^{-1}}\\) so it is not at rest.",
    "misconception": "Zero acceleration means velocity is momentarily not changing; it does not imply velocity is zero.",
    "reflection": "What condition on v(t), rather than a(t), defines an instant of rest?"
  },
  {
    "id": "W06-A2",
    "section": "A",
    "title": "Reconstruct a motion and test its direction",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO1": 1,
      "AO2": 3,
      "AO3": 4
    },
    "topics": [
      "variable acceleration",
      "integration constants",
      "displacement",
      "direction of motion"
    ],
    "stem": "A particle moves along a straight track with acceleration \\(a(t)=6t-4\\ \\mathrm{m\\,s^{-2}}\\) for \\(0\\le t\\le3\\) seconds. Initially its velocity is \\(3\\ \\mathrm{m\\,s^{-1}}\\) and its displacement from the origin is \\(2\\ \\mathrm m\\). Positive is to the right.",
    "parts": [
      [
        "Find \\(v(t)\\) using the initial velocity.",
        3
      ],
      [
        "Find \\(s(t)\\) using the initial displacement; hence find its displacement from the origin at \\(t=3\\).",
        3
      ],
      [
        "Prove that the particle never changes direction in the stated interval, and find its total distance travelled over those three seconds.",
        2
      ]
    ],
    "hint": "Integrate acceleration once for velocity and again for position, finding both integration constants. To study direction, investigate the minimum value of the velocity quadratic.",
    "steps": [
      "Integrating gives \\(v(t)=\\int(6t-4)\\,\\mathrm dt=3t^2-4t+C\\). From \\(v(0)=3\\), \\(C=3\\), so \\(v(t)=3t^2-4t+3\\). [3]",
      "Integrate once more: \\(s(t)=t^3-2t^2+3t+D\\). Since \\(s(0)=2\\), \\(D=2\\). Hence \\(s(3)=27-18+9+2=20\\ \\mathrm m\\). [3]",
      "Complete the square: \\(v(t)=3(t-\\frac23)^2+\\frac53>0\\) at every real \\(t\\). The particle travels only right, so its distance is \\(s(3)-s(0)=20-2=18\\ \\mathrm m\\). [2]"
    ],
    "answer": "\\(v(t)=3t^2-4t+3\\), \\(s(t)=t^3-2t^2+3t+2\\), \\(s(3)=20\\ \\mathrm m\\), distance travelled \\(18\\ \\mathrm m\\).",
    "misconception": "Integrating acceleration gives velocity plus a constant; there is a second, separate integration constant when recovering position.",
    "reflection": "Why is it legitimate here, but not in every kinematics question, to equate total distance with the magnitude of displacement?"
  },
  {
    "id": "W06-A3",
    "section": "A",
    "title": "Signed displacement against actual distance",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO2": 7,
      "AO3": 3
    },
    "topics": [
      "variable velocity",
      "direction changes",
      "definite integration",
      "distance versus displacement",
      "interpretation"
    ],
    "stem": "A particle travels on a straight line for \\(0\\le t\\le5\\) seconds. Its signed velocity is \\(v(t)=t^2-6t+8\\ \\mathrm{m\\,s^{-1}}\\) and its initial displacement is \\(s(0)=0\\). The positive direction is to the right.",
    "parts": [
      [
        "Find all times in the interval when the particle is momentarily at rest, and describe its direction of travel between those times.",
        2
      ],
      [
        "Determine \\(s(t)\\) and find the displacements at \\(t=2,\\ 4,\\ 5\\) seconds.",
        3
      ],
      [
        "Calculate both the overall displacement and the total distance travelled during the five seconds.",
        3
      ],
      [
        "Calculate the acceleration at \\(t=3\\) seconds and explain why its value does not establish that the particle is stationary then.",
        2
      ]
    ],
    "hint": "Factor the velocity polynomial before integrating. The direction changes where velocity changes sign, so split distance into separate intervals before taking absolute values.",
    "steps": [
      "The roots of \\(v(t)=t^2-6t+8=(t-2)(t-4)\\) are \\(t=2,4\\). Velocity is positive on \\(0<t<2\\), negative on \\(2<t<4\\), and positive on \\(4<t<5\\). [2]",
      "Integrating with \\(s(0)=0\\) gives \\(s(t)=\\frac{t^3}{3}-3t^2+8t\\). Thus \\(s(2)=\\frac{20}{3}\\ \\mathrm m\\), \\(s(4)=\\frac{16}{3}\\ \\mathrm m\\) and \\(s(5)=\\frac{20}{3}\\ \\mathrm m\\). [3]",
      "Displacement is \\(s(5)-s(0)=\\frac{20}{3}\\ \\mathrm m\\) to the right. Total distance is \\(|s(2)-s(0)|+|s(4)-s(2)|+|s(5)-s(4)|=\\frac{20}{3}+\\frac43+\\frac43=\\frac{28}{3}\\ \\mathrm m\\). [3]",
      "Acceleration is \\(a(t)=2t-6\\), so \\(a(3)=0\\ \\mathrm{m\\,s^{-2}}\\). Yet \\(v(3)=9-18+8=-1\\ \\mathrm{m\\,s^{-1}}\\), so the particle is moving left at that instant. Acceleration zero is not the criterion for rest. [2]"
    ],
    "answer": "Rest at \\(t=2,\\ 4\\), overall displacement \\(\\frac{20}{3}\\ \\mathrm m\\) right, total distance \\(\\frac{28}{3}\\ \\mathrm m\\), acceleration at 3 s is zero but velocity is \\(-1\\ \\mathrm{m\\,s^{-1}}\\).",
    "misconception": "An integral of signed velocity gives displacement. Distance requires integrating speed or adding magnitudes over each interval between reversals.",
    "reflection": "How would the distance and displacement differ if the journey ended at t=4 rather than t=5?"
  }
];
