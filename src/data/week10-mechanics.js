export const week10Mechanics = [
  {
    "id": "W10-A6",
    "section": "A",
    "paper": "mechanics",
    "title": "A journey with a change of direction",
    "marks": 5,
    "minutes": 6,
    "ao": {
      "AO1": 2,
      "AO2": 3
    },
    "topics": [
      "velocity–time graphs",
      "displacement",
      "distance travelled"
    ],
    "stem": "A particle's velocity along a straight track is \\(v(t)=6-2t\\ \\mathrm{m\\,s^{-1}}\\) for \\(0\\le t\\le5\\) seconds. Positive velocity is to the right.",
    "parts": [
      [
        "Find the instant at which the particle changes direction.",
        1
      ],
      [
        "Calculate the signed displacement from \\(t=0\\) to \\(t=5\\).",
        2
      ],
      [
        "Find the total distance travelled over the same interval.",
        2
      ]
    ],
    "hint": "Velocity changes sign at zero. Calculate signed area and then add the magnitudes of the two triangles.",
    "steps": [
      "Set \\(6-2t=0\\), giving \\(t=3\\ \\mathrm s\\). The velocity changes from positive to negative there. [1]",
      "Signed displacement is \\(\\int_0^5(6-2t)\\,dt\\), [1] giving \\([6t-t^2]_0^5=30-25=5\\ \\mathrm m\\) to the right. [1]",
      "From 0 to 3 seconds the positive triangular area is \\(\\frac12(3)(6)=9\\ \\mathrm m\\). [1] From 3 to 5 seconds the negative triangle has magnitude \\(\\frac12(2)(4)=4\\ \\mathrm m\\), so total distance is \\(9+4=13\\ \\mathrm m\\). [1]"
    ],
    "answer": "Reversal at \\(3\\ \\mathrm s\\), displacement \\(+5\\ \\mathrm m\\), total distance \\(13\\ \\mathrm m\\).",
    "misconception": "Displacement is signed; distance counts both directions positively. The two answers are not generally equal if velocity changes sign.",
    "reflection": "What would the velocity–time graph show about the reversal point?"
  },
  {
    "id": "W10-A7",
    "section": "A",
    "paper": "mechanics",
    "title": "An object released upwards",
    "marks": 5,
    "minutes": 6,
    "ao": {
      "AO1": 2,
      "AO2": 3
    },
    "topics": [
      "vertical motion",
      "SUVAT",
      "gravity and maximum height"
    ],
    "stem": "A small ball is projected vertically upwards from ground level at \\(14.7\\ \\mathrm{m\\,s^{-1}}\\). Neglect air resistance and take \\(g=9.8\\ \\mathrm{m\\,s^{-2}}\\). Assume it returns to the same ground level.",
    "parts": [
      [
        "Find the time taken to reach its greatest height.",
        2
      ],
      [
        "Calculate the greatest height above the starting level.",
        2
      ],
      [
        "Find the total flight time.",
        1
      ]
    ],
    "hint": "Take upwards as positive, so acceleration is −9.8 m/s². At the top, vertical velocity equals zero.",
    "steps": [
      "Use \\(v=u+at\\) with \\(v=0\\) and \\(a=-9.8\\). [1] Then \\(0=14.7-9.8t\\), so \\(t=1.5\\ \\mathrm s\\). [1]",
      "Use \\(v^2=u^2+2as\\) with v=0. [1] Thus \\(0=14.7^2-19.6s\\), giving \\(s=14.7^2/19.6=11.025\\ \\mathrm m\\). [1]",
      "The ascent and descent times are equal in this constant-gravity, no-resistance model, so the total flight time is \\(2(1.5)=3\\ \\mathrm s\\). [1]"
    ],
    "answer": "Time to peak \\(1.5\\ \\mathrm s\\), maximum height \\(11.025\\ \\mathrm m\\), total flight time \\(3\\ \\mathrm s\\).",
    "misconception": "Do not set acceleration to zero at the top. Gravity still acts; it is instantaneous velocity that becomes zero.",
    "reflection": "Which step would cease to be valid if air resistance became significant?"
  },
  {
    "id": "W10-A8",
    "section": "A",
    "paper": "mechanics",
    "title": "A particle with variable acceleration",
    "marks": 6,
    "minutes": 7,
    "ao": {
      "AO1": 2,
      "AO2": 4
    },
    "topics": [
      "integration of acceleration",
      "velocity zeros",
      "variable motion",
      "total distance"
    ],
    "stem": "A particle moves on a straight line with acceleration \\(a(t)=6t-12\\ \\mathrm{m\\,s^{-2}}\\) for \\(0\\le t\\le4\\) seconds, where \\(t\\) is in seconds. The initial velocity is \\(v(0)=9\\ \\mathrm{m\\,s^{-1}}\\). Positive velocity points to the right.",
    "parts": [
      [
        "Find an expression for \\(v(t)\\).",
        2
      ],
      [
        "Find the times at which the particle is instantaneously at rest.",
        2
      ],
      [
        "Calculate the displacement and the total distance travelled from 0 to 4 seconds.",
        2
      ]
    ],
    "hint": "Integrate a(t) and use the initial velocity; split the distance calculation at all velocity zeros.",
    "steps": [
      "Integrate the acceleration: \\(v(t)=\\int(6t-12)\\,dt=3t^2-12t+C\\). [1] Since \\(v(0)=9\\), \\(C=9\\), giving \\(v(t)=3t^2-12t+9\\). [1]",
      "Factor \\(v(t)=3(t-1)(t-3)\\). [1] It is zero at \\(t=1\\) and \\(t=3\\) seconds, with changes of sign. [1]",
      "Take displacement \\(s(t)=\\int_0^t v(u)\\,du=t^3-6t^2+9t\\). Then \\(s(0)=0,\\ s(1)=4,\\ s(3)=0,\\ s(4)=4\\). [1] Signed displacement is \\(4\\ \\mathrm m\\), while total distance is \\(|4-0|+|0-4|+|4-0|=12\\ \\mathrm m\\). [1]"
    ],
    "answer": "\\(v(t)=3(t-1)(t-3)\\); rest at \\(1\\) and \\(3\\ \\mathrm s\\); displacement \\(4\\ \\mathrm m\\), total distance \\(12\\ \\mathrm m\\).",
    "misconception": "Finding s(4) alone gives only net displacement. The distance needs a separate calculation across both reversals.",
    "reflection": "Where on a position–time graph would its tangent be horizontal?"
  },
  {
    "id": "W10-A9",
    "section": "A",
    "paper": "mechanics",
    "title": "A horizontal resultant",
    "marks": 4,
    "minutes": 5,
    "ao": {
      "AO1": 2,
      "AO2": 2
    },
    "topics": [
      "Newton's second law",
      "force diagrams",
      "equilibrium of perpendicular forces"
    ],
    "stem": "A \\(5\\ \\mathrm{kg}\\) particle rests on a smooth horizontal surface. Two applied horizontal forces act: \\(18\\ \\mathrm N\\) to the right and \\(8\\ \\mathrm N\\) to the left. Use \\(g=9.8\\ \\mathrm{m\\,s^{-2}}\\).",
    "parts": [
      [
        "State all forces on the particle, including vertical directions and magnitudes where known.",
        2
      ],
      [
        "Find the magnitude and direction of the acceleration.",
        2
      ]
    ],
    "hint": "The smooth surface exerts no friction. Vertical forces balance; horizontal forces give the resultant.",
    "steps": [
      "Horizontally, show \\(18\\ \\mathrm N\\) right and \\(8\\ \\mathrm N\\) left. [1] Vertically, show weight \\(5g=49\\ \\mathrm N\\) down and normal reaction \\(49\\ \\mathrm N\\) up since there is no vertical acceleration. [1]",
      "The horizontal resultant is \\(18-8=10\\ \\mathrm N\\) to the right. [1] From \\(F=ma\\), \\(a=10/5=2\\ \\mathrm{m\\,s^{-2}}\\) to the right. [1]"
    ],
    "answer": "Weight and reaction each \\(49\\ \\mathrm N\\), applied forces 18 N right and 8 N left, acceleration \\(2\\ \\mathrm{m\\,s^{-2}}\\) right.",
    "misconception": "A smooth surface means zero friction but not zero resultant: two unequal applied horizontal forces still accelerate the particle.",
    "reflection": "Which force would you need to change to make the particle move at constant velocity?"
  },
  {
    "id": "W10-A10",
    "section": "A",
    "paper": "mechanics",
    "title": "Two particles connected by a pulley",
    "marks": 5,
    "minutes": 6,
    "ao": {
      "AO1": 1,
      "AO2": 4
    },
    "topics": [
      "connected particles",
      "light strings",
      "smooth pulleys",
      "SUVAT"
    ],
    "stem": "Particle A of mass \\(3\\ \\mathrm{kg}\\) rests on a smooth horizontal table. It is connected by a light inextensible string over a smooth fixed pulley to particle B of mass \\(2\\ \\mathrm{kg}\\), which hangs freely. They are released from rest. Assume the string remains taut and neither particle reaches an obstacle for at least \\(1.5\\) seconds. Take \\(g=9.8\\ \\mathrm{m\\,s^{-2}}\\).",
    "parts": [
      [
        "Write a separate Newton's second-law equation for each particle, with positive directions indicated.",
        2
      ],
      [
        "Find the common acceleration and the string tension.",
        2
      ],
      [
        "Find the distance each particle travels in the first \\(1.5\\) seconds.",
        1
      ]
    ],
    "hint": "Take A towards the pulley and B downward as positive. The common acceleration links their two equations.",
    "steps": [
      "For A, tension acts towards the pulley and \\(T=3a\\). [1] For B, weight acts downwards and \\(2g-T=2a\\). [1]",
      "Adding gives \\(2g=5a\\), so \\(a=19.6/5=3.92\\ \\mathrm{m\\,s^{-2}}\\). [1] Substitute to find \\(T=3a=11.76\\ \\mathrm N\\). [1]",
      "From rest with constant acceleration, \\(s=\\frac12at^2=\\frac12(3.92)(1.5)^2=4.41\\ \\mathrm m\\) for each particle. [1]"
    ],
    "answer": "\\(T=3a,\\ 19.6-T=2a\\), acceleration \\(3.92\\ \\mathrm{m\\,s^{-2}}\\), tension \\(11.76\\ \\mathrm N\\), distance \\(4.41\\ \\mathrm m\\).",
    "misconception": "The hanging weight accelerates both masses, not just the 2 kg particle. Tension is less than the hanging weight during downward acceleration.",
    "reflection": "Why is assuming a taut inextensible string essential when using one common acceleration?"
  }
];
