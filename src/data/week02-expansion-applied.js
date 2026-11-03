export const week02ExpansionApplied = [
  {
    "id": "W02-A4",
    "section": "A",
    "title": "A journey reconstructed from its velocity graph",
    "marks": 11,
    "ao": {
      "AO1": 3,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "velocity–time graph",
      "acceleration",
      "distance from area",
      "average speed"
    ],
    "stem": "A test vehicle starts from rest on a straight track. Its velocity grows uniformly to \\(12\\ \\mathrm{m\\,s^{-1}}\\) in the first \\(4\\) seconds, remains constant for another \\(5\\) seconds, then falls uniformly to rest in \\(3\\) seconds. Its velocity is always nonnegative.",
    "parts": [
      [
        "State the coordinates (t,v) of the four vertices of its velocity–time graph and find the acceleration during both nonconstant stages.",
        3
      ],
      [
        "Calculate the entire displacement using the area under that graph.",
        3
      ],
      [
        "Find the average speed over the complete journey.",
        2
      ],
      [
        "Explain why the area method is appropriate here and identify two ways the actual journey could differ from this model.",
        3
      ]
    ],
    "hint": "The graph consists of a triangle, a rectangle and a second triangle. Gradient represents acceleration; signed area represents displacement.",
    "steps": [
      "The vertices are \\((0,0),(4,12),(9,12),(12,0)\\). [1] Acceleration in the first segment is \\((12-0)/4=3\\ \\mathrm{m\\,s^{-2}}\\). [1] Final deceleration is \\((0-12)/(12-9)=-4\\ \\mathrm{m\\,s^{-2}}\\). [1]",
      "The initial triangle has area \\(\\frac12(4)(12)=24\\) m; the rectangle contributes \\(5(12)=60\\) m. [2] The final triangle contributes \\(\\frac12(3)(12)=18\\) m, for total displacement \\(24+60+18=102\\ \\mathrm m\\). [1]",
      "Total time is \\(4+5+3=12\\) s. [1] With nonnegative velocity, total distance equals displacement, so average speed is \\(102/12=8.5\\ \\mathrm{m\\,s^{-1}}\\). [1]",
      "Area under a velocity–time curve is displacement, so the method is valid because velocity is modelled piecewise and the sign stays nonnegative. [1] In real driving acceleration may vary instead of remaining constant, and reaction time or road conditions may change braking; two distinct explanations earn two marks. [2]"
    ],
    "answer": "Vertices \\((0,0),(4,12),(9,12),(12,0)\\); accelerations \\(3,-4\\ \\mathrm{m\\,s^{-2}}\\), distance \\(102\\ \\mathrm m\\), average speed \\(8.5\\ \\mathrm{m\\,s^{-1}}\\).",
    "misconception": "The area is not 12×12: speed is not at its maximum over the entire 12 seconds.",
    "reflection": "How would the distance calculation change if part of the graph were below the time axis?"
  },
  {
    "id": "W02-A5",
    "section": "A",
    "title": "Two cyclists approach with different motion models",
    "marks": 12,
    "ao": {
      "AO1": 4,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "relative motion",
      "accelerating from rest",
      "solving quadratics",
      "modelling assumptions"
    ],
    "stem": "Cyclists A and B start \\(180\\ \\mathrm m\\) apart on a straight road at the same instant and ride towards each other. A accelerates uniformly from rest at \\(1\\ \\mathrm{m\\,s^{-2}}\\); B travels at constant speed \\(9\\ \\mathrm{m\\,s^{-1}}\\). Take A's starting point as \\(x=0\\) and rightwards as positive.",
    "parts": [
      [
        "Write the positions of A and B as functions of time t, valid until they meet.",
        3
      ],
      [
        "Find the meeting time and the distance each cyclist travels.",
        4
      ],
      [
        "Find their relative closing speed just before they meet.",
        2
      ],
      [
        "Give two assumptions behind these models and explain why one might become unreasonable if extrapolated for much longer.",
        3
      ]
    ],
    "hint": "A's displacement is ½at². B's position falls from 180 at a rate 9. Equate positions, keeping only nonnegative time.",
    "steps": [
      "\\(x_A(t)=\\frac12(1)t^2=\\frac12t^2\\) from rest. [1] B rides leftwards with velocity −9, so \\(x_B(t)=180-9t\\). [1] Both use the same time origin and positive direction. [1]",
      "At meeting, \\(\\frac12t^2=180-9t\\), hence \\(t^2+18t-360=0\\). [2] Factor \\((t-12)(t+30)=0\\), selecting \\(t=12\\) s. [1] A travels \\(72\\) m and B \\(108\\) m, totalling 180 m. [1]",
      "A's velocity at 12 s is \\(v_A=at=12\\ \\mathrm{m\\,s^{-1}}\\) to the right. [1] B's is −9 to the left, so the closing speed is \\(12-(-9)=21\\ \\mathrm{m\\,s^{-1}}\\). [1]",
      "The road must be straight and both cyclists must maintain the specified uniform-acceleration/constant-speed behaviour. [1] Ignored factors may include aerodynamic drag, gradients, rider fatigue or speed limits (one justified example). [1] Sustained acceleration for a long time would lead to unbounded speed, unrealistic for a cyclist, so the model should be used only in its stated interval. [1]"
    ],
    "answer": "\\(x_A=t^2/2,\\ x_B=180-9t\\); meeting at \\(t=12\\,\\mathrm s\\), distances \\(72\\,\\mathrm m,108\\,\\mathrm m\\), closing speed \\(21\\,\\mathrm{m\\,s^{-1}}\\).",
    "misconception": "Equating distances travelled is incorrect when the cyclists begin at different positions; equate their *positions* or set the distances to sum to 180.",
    "reflection": "Which model assumption makes the closing-speed result less useful beyond the meeting instant?"
  }
];
