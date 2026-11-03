export const week02Applied = [
  {
    "id": "W02-A1",
    "section": "A",
    "title": "Units before modelling",
    "marks": 4,
    "minutes": 8,
    "ao": {
      "AO1": 2,
      "AO3": 2
    },
    "topics": [
      "mechanics",
      "units",
      "constant acceleration"
    ],
    "stem": "A vehicle's speed increases from \\(36\\) \\(\\mathrm{km\\,h^{-1}}\\) to \\(72\\) \\(\\mathrm{km\\,h^{-1}}\\) in \\(5\\) seconds. A modeller assumes acceleration is constant during this interval.",
    "parts": [
      [
        "Convert both speeds to \\(\\mathrm{m\\,s^{-1}}\\).",
        2
      ],
      [
        "Calculate the modelled acceleration in \\(\\mathrm{m\\,s^{-2}}\\).",
        1
      ],
      [
        "State one limitation of the constant-acceleration assumption in this situation.",
        1
      ]
    ],
    "hint": "Divide speeds in km/h by 3.6 before using any SUVAT relationship.",
    "steps": [
      "\\(36\\text{ km h}^{-1}=\\dfrac{36}{3.6}=10\\text{ m s}^{-1}\\) and \\(72\\text{ km h}^{-1}=\\dfrac{72}{3.6}=20\\text{ m s}^{-1}\\). [2]",
      "\\(a=\\dfrac{v-u}{t}=\\dfrac{20-10}{5}=2\\text{ m s}^{-2}\\). [1]",
      "In reality the acceleration may vary during a gear change or with the driver's input; a single constant value is only an average over this interval. [1]"
    ],
    "answer": "Speeds \\(10\\) and \\(20\\) \\(\\mathrm{m\\,s^{-1}}\\); acceleration \\(2\\) \\(\\mathrm{m\\,s^{-2}}\\).",
    "misconception": "Do not substitute km/h into a formula while treating the answer as m/s².",
    "reflection": "Why would the answer's numerical value be different if you did not convert units?"
  },
  {
    "id": "W02-A2",
    "section": "A",
    "title": "Turning around under constant acceleration",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO1": 2,
      "AO2": 2,
      "AO3": 4
    },
    "topics": [
      "mechanics",
      "SUVAT",
      "distance",
      "displacement"
    ],
    "stem": "A particle moves along a straight horizontal track. Take east as positive. At time \\(t=0\\), it is moving east at \\(12\\) \\(\\mathrm{m\\,s^{-1}}\\). It then has constant acceleration \\(-2\\) \\(\\mathrm{m\\,s^{-2}}\\) for \\(9\\) seconds.",
    "parts": [
      [
        "Find its velocity at \\(t=9\\), and state its direction of travel.",
        2
      ],
      [
        "Find the time at which the particle changes direction.",
        2
      ],
      [
        "Calculate its displacement over the nine seconds.",
        2
      ],
      [
        "Calculate its total distance travelled over the nine seconds.",
        2
      ]
    ],
    "hint": "Use \\(v=u+at\\) and \\(s=ut+\\tfrac12at^2\\). For total distance, split the motion where \\(v=0\\).",
    "steps": [
      "Using east as positive, \\(v=12-2(9)=-6\\) \\(\\mathrm{m\\,s^{-1}}\\). The negative sign shows the particle is travelling west. [2]",
      "At the change of direction \\(v=0\\), so \\(0=12-2t\\) and \\(t=6\\) seconds. [2]",
      "Signed displacement is \\(s=12(9)+\\tfrac12(-2)(9^2)=108-81=27\\) m east. [2]",
      "In the first \\(6\\) s the particle travels \\(12(6)-6^2=36\\) m east. In the remaining \\(3\\) s it travels \\(|\\tfrac12(-2)(3^2)|=9\\) m west. Total distance \\(36+9=45\\) m. [2]"
    ],
    "answer": "Velocity \\(-6\\) \\(\\mathrm{m\\,s^{-1}}\\) (west); turns at \\(6\\) s; displacement \\(27\\) m east; distance \\(45\\) m.",
    "misconception": "The absolute value of net displacement is not generally the total distance if the particle reverses.",
    "reflection": "Which result would you obtain from the signed area under a velocity–time graph?"
  },
  {
    "id": "W02-A3",
    "section": "A",
    "title": "Thrown upwards from a balcony",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO1": 2,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "vertical motion",
      "SUVAT",
      "modelling",
      "distance"
    ],
    "stem": "A ball is thrown vertically upwards from a balcony \\(20\\) m above horizontal ground at \\(14\\) \\(\\mathrm{m\\,s^{-1}}\\). Model it as a particle moving freely under gravity \\(g=9.8\\) \\(\\mathrm{m\\,s^{-2}}\\), neglecting air resistance. Use upward as positive and take the ground as height zero.",
    "parts": [
      [
        "Find the time to reach the greatest height and its greatest height above the ground.",
        3
      ],
      [
        "Find the time from release until the ball first reaches the ground, giving an exact expression and a decimal to 2 decimal places.",
        3
      ],
      [
        "Find the speed of the ball when it reaches the ground, in exact form.",
        2
      ],
      [
        "Find the total vertical distance travelled before impact and state one limitation of the model.",
        2
      ]
    ],
    "hint": "Height above the ground is \\(y(t)=20+14t-4.9t^2\\). At the highest point the velocity is zero. For distance, add the upward segment and the fall from the highest point.",
    "steps": [
      "Velocity \\(v=14-9.8t\\). At maximum height \\(t=\\dfrac{14}{9.8}=\\dfrac{10}{7}\\) s. The rise above the balcony is \\(\\dfrac{14^2}{2(9.8)}=10\\) m, so the greatest height above ground is \\(20+10=30\\) m. [3]",
      "At impact \\(20+14t-4.9t^2=0\\). Multiply by \\(10\\): \\(49t^2-140t-200=0\\). Solving yields \\(t=\\dfrac{10(1\\pm\\sqrt3)}7\\). Time cannot be negative, so \\(t=\\dfrac{10(1+\\sqrt3)}7\\approx3.90\\) s. [3]",
      "At that time \\(v=14-9.8\\left[\\dfrac{10(1+\\sqrt3)}7\\right]=-14\\sqrt3\\) \\(\\mathrm{m\\,s^{-1}}\\). Its speed is \\(14\\sqrt3\\) \\(\\mathrm{m\\,s^{-1}}\\) (downwards). [2]",
      "The ball rises \\(10\\) m from the balcony to height \\(30\\) m and falls \\(30\\) m to the ground. Total distance is \\(10+30=40\\) m. The assumption of negligible air resistance or a perfectly vertical throw may not hold in practice. [2]"
    ],
    "answer": "Greatest height \\(30\\) m at \\(10/7\\) s; impact at \\(\\dfrac{10(1+\\sqrt3)}7\\approx3.90\\) s with speed \\(14\\sqrt3\\) \\(\\mathrm{m\\,s^{-1}}\\); total distance \\(40\\) m.",
    "misconception": "The 20 m balcony height is part of height above the ground, but must not be counted as an extra upward distance.",
    "reflection": "How would drag affect the predicted maximum height and impact speed?"
  }
];
