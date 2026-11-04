export const week04ExpansionApplied = [
  {
    "id": "W04-A4",
    "section": "A",
    "title": "The third force changes the route",
    "marks": 11,
    "ao": {
      "AO1": 2,
      "AO2": 4,
      "AO3": 5
    },
    "topics": [
      "Newton's first and second laws",
      "resultant vector force",
      "kinematics",
      "modelled position"
    ],
    "stem": "A particle of mass \\(2\\ \\mathrm{kg}\\) moves on a smooth horizontal plane. Two horizontal forces are \\(\\mathbf F_1=(12\\mathbf i+5\\mathbf j)\\ \\mathrm N\\) and \\(\\mathbf F_2=(-4\\mathbf i+3\\mathbf j)\\ \\mathrm N\\). A third force \\(\\mathbf T\\) may be applied. The particle initially occupies \\(\\mathbf r(0)=\\mathbf i-2\\mathbf j\\) metres and has velocity \\(\\mathbf v(0)=2\\mathbf i+\\mathbf j\\) metres per second.",
    "parts": [
      [
        "Calculate the combined resultant of the first two forces.",
        2
      ],
      [
        "Find the third force required for constant velocity and its exact magnitude.",
        3
      ],
      [
        "Instead take \\(\\mathbf T=(-6\\mathbf i-4\\mathbf j)\\ \\mathrm N\\). Find the acceleration vector and its magnitude.",
        3
      ],
      [
        "Assuming these three forces stay constant, calculate the particle's position vector after three seconds.",
        3
      ]
    ],
    "hint": "Add the two known vectors. Constant velocity requires zero net force; otherwise use F=ma before integrating constant acceleration.",
    "steps": [
      "\\(\\mathbf F_1+\\mathbf F_2=(8\\mathbf i+8\\mathbf j)\\ \\mathrm N\\) by adding components. [2]",
      "For zero acceleration, Newton's first law requires \\(\\mathbf T=-(8\\mathbf i+8\\mathbf j)\\ \\mathrm N\\). [2] Its magnitude is \\(\\sqrt{(-8)^2+(-8)^2}=8\\sqrt2\\ \\mathrm N\\). [1]",
      "With the replacement third force, the total is \\((2\\mathbf i+4\\mathbf j)\\ \\mathrm N\\). [1] Newton's second law gives \\(\\mathbf a=(\\mathbf i+2\\mathbf j)\\ \\mathrm{m\\,s^{-2}}\\). [1] The magnitude is \\(\\sqrt5\\ \\mathrm{m\\,s^{-2}}\\). [1]",
      "For constant acceleration \\(\\mathbf r(t)=\\mathbf r(0)+\\mathbf v(0)t+\\frac12\\mathbf a t^2\\). [1] Substituting t=3 gives \\((\\mathbf i-2\\mathbf j)+3(2\\mathbf i+\\mathbf j)+\\frac92(\\mathbf i+2\\mathbf j)\\). [1] Hence \\(\\mathbf r(3)=\\frac{23}{2}\\mathbf i+10\\mathbf j\\) metres. [1]"
    ],
    "answer": "Known resultant \\(8\\mathbf i+8\\mathbf j\\) N; balancing force \\(-8\\mathbf i-8\\mathbf j\\) N, magnitude \\(8\\sqrt2\\) N; alternative acceleration \\(\\mathbf i+2\\mathbf j\\) m/s²; position at 3 s \\(\\frac{23}{2}\\mathbf i+10\\mathbf j\\) m.",
    "misconception": "A zero resultant force means constant velocity, not necessarily a stationary particle. Use the mass when converting net force into acceleration.",
    "reflection": "Which physical assumption makes it legitimate to integrate the acceleration as a constant vector over three seconds?"
  },
  {
    "id": "W04-A5",
    "section": "A",
    "title": "A lift must accelerate and then brake",
    "marks": 12,
    "ao": {
      "AO1": 2,
      "AO2": 3,
      "AO3": 7
    },
    "topics": [
      "Newton's second law",
      "vertical tension",
      "two-stage SUVAT",
      "safety limits"
    ],
    "stem": "A lift of total mass \\(500\\ \\mathrm{kg}\\) moves vertically. It starts from rest and accelerates upwards at \\(1.2\\ \\mathrm{m\\,s^{-2}}\\) for \\(5\\) seconds. It then slows uniformly to rest with downward acceleration magnitude \\(0.8\\ \\mathrm{m\\,s^{-2}}\\). The motor cable supplies a constant tension within each stage. Use \\(g=9.8\\ \\mathrm{m\\,s^{-2}}\\) and take upwards as positive. The safety limit is \\(5200\\ \\mathrm N\\) of tension.",
    "parts": [
      [
        "Find the cable tension and the speed reached in the first stage.",
        3
      ],
      [
        "Determine the time required to brake to rest and the total vertical distance travelled.",
        3
      ],
      [
        "Find the cable tension during the braking stage, giving a suitable Newton's-law equation.",
        3
      ],
      [
        "Evaluate whether the proposed movement meets the stated safety limit, and give two reasons why the simplified force model might not describe a real lift exactly.",
        3
      ]
    ],
    "hint": "Apply T−mg=ma using a positive upwards axis. For the second stage a is negative although the lift is still moving upwards.",
    "steps": [
      "In the first stage \\(T-500(9.8)=500(1.2)\\). [1] Therefore \\(T=5500\\ \\mathrm N\\). [1] The speed after five seconds is \\(v=0+1.2(5)=6\\ \\mathrm{m\\,s^{-1}}\\). [1]",
      "Braking from 6 m/s to rest at \\(a=-0.8\\) takes \\(t=6/0.8=7.5\\) s. [1] The initial distance is \\(s_1=\\frac12(1.2)(5^2)=15\\) m; braking distance \\(s_2=\\frac12(6)(7.5)=22.5\\) m. [1] Total rise is \\(37.5\\ \\mathrm m\\). [1]",
      "During braking, \\(T-500(9.8)=500(-0.8)\\). [2] Therefore \\(T=4500\\ \\mathrm N\\). [1]",
      "The maximum tension is 5500 N, greater than the 5200 N limit, so the plan fails the stated safety restriction. [1] In practice acceleration may not change instantly between stages, and variable passenger load, mechanical friction or drag may change the force required; any two distinct explained limitations earn one mark each. [2]"
    ],
    "answer": "Accelerating tension 5500 N and speed 6 m/s; braking time 7.5 s and total rise 37.5 m; braking tension 4500 N. The maximum exceeds the 5200 N limit.",
    "misconception": "When the lift brakes while moving upwards, its acceleration is downwards; the tension can be less than its weight without the lift moving downwards.",
    "reflection": "What acceleration limit could be imposed in the first stage to stay under the cable's stated tension rating?"
  }
];
