export const week08Applied = [
  {
    "id": "W08-A1",
    "section": "A",
    "title": "Identify every force in a light-string pulley system",
    "marks": 4,
    "minutes": 8,
    "ao": {
      "AO1": 2,
      "AO2": 2
    },
    "topics": [
      "connected particles",
      "force diagrams",
      "smooth pulley",
      "Newton's laws"
    ],
    "stem": "Particle \\(A\\) has mass \\(2\\,\\mathrm{kg}\\) and rests on a smooth horizontal table. Particle \\(B\\) has mass \\(3\\,\\mathrm{kg}\\) and hangs freely over the table's edge. They are connected by a light inextensible string passing over a smooth fixed pulley. Take \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\). The system is released from rest and the string remains taut for the stage considered.",
    "parts": [
      [
        "Draw separate labelled force diagrams for both particles. State the forces acting on each, including their directions.",
        2
      ],
      [
        "Explain why the particles have equal acceleration magnitudes while the string is taut, and why the tension is the same on both sides of the pulley.",
        2
      ]
    ],
    "hint": "Treat each particle separately. A smooth table exerts a normal reaction but no friction; a light string over a smooth pulley has a common tension.",
    "steps": [
      "For \\(A\\), draw weight \\(2g=19.6\\,\\mathrm N\\) vertically downward, the normal reaction \\(R\\) vertically upward and tension \\(T\\) horizontally towards the pulley. For \\(B\\), draw weight \\(3g=29.4\\,\\mathrm N\\) downwards and tension \\(T\\) upwards. Award one mark for each correct particle diagram. [2]",
      "The taut, inextensible string constrains the two particles to move equal distances in equal times, so their acceleration magnitudes are equal. The light string and smooth pulley model transmit a uniform tension \\(T\\). Each explanation earns a mark. [2]"
    ],
    "answer": "\\(A\\): \\(R\\uparrow,\\ 2g\\downarrow,\\ T\\) toward pulley. \\(B\\): \\(T\\uparrow,\\ 3g\\downarrow\\). Equal magnitude of acceleration and one common tension while taut.",
    "misconception": "Do not put the hanging mass's weight directly on the table particle. Each force diagram shows only forces acting on that particle, not forces elsewhere in the system.",
    "reflection": "Which conclusions would no longer be valid if the table were rough or the pulley had significant friction?"
  },
  {
    "id": "W08-A2",
    "section": "A",
    "title": "Acceleration, tension and distance for two connected masses",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO2": 5,
      "AO3": 3
    },
    "topics": [
      "Newton's second law",
      "connected particles",
      "smooth pulley",
      "tension",
      "constant-acceleration kinematics"
    ],
    "stem": "Particle \\(A\\) of mass \\(4\\,\\mathrm{kg}\\) lies on a smooth horizontal table and is connected by a light inextensible string over a smooth pulley to a freely hanging particle \\(B\\) of mass \\(1.5\\,\\mathrm{kg}\\). The system is released from rest. The string stays taut and neither mass reaches an obstruction during the first \\(2\\) seconds. Use \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
    "parts": [
      [
        "Write a Newton's second law equation for each particle and hence find the magnitude of their common acceleration.",
        3
      ],
      [
        "Calculate the tension in the string and justify its value using one of the particle equations.",
        3
      ],
      [
        "Find the distance travelled by each particle during the first two seconds, stating the direction of motion.",
        2
      ]
    ],
    "hint": "Choose \\(A\\) toward the pulley and \\(B\\) downward as positive. The equations are \\(T=4a\\) and \\(1.5g-T=1.5a\\).",
    "steps": [
      "For \\(A\\), horizontal Newton's law is \\(T=4a\\). For \\(B\\), \\(1.5g-T=1.5a\\). Adding eliminates \\(T\\), giving \\(1.5g=5.5a\\) and \\(a=14.7/5.5\\approx2.67273\\,\\mathrm{m\\,s^{-2}}\\). [3]",
      "From \\(T=4a\\), \\(T=4(14.7/5.5)=588/55\\approx10.6909\\,\\mathrm N\\). This is less than the hanging weight \\(14.7\\,\\mathrm N\\) because \\(B\\) is accelerating down, rather than remaining in equilibrium. [3]",
      "For each particle, \\(s=ut+\\frac12at^2\\) with \\(u=0,\\ t=2\\) gives \\(s=\\frac12(14.7/5.5)(2)^2\\approx5.34545\\,\\mathrm m\\). Particle \\(A\\) moves towards the pulley and \\(B\\) descends by the same distance. [2]"
    ],
    "answer": "Acceleration \\(a\\approx2.673\\,\\mathrm{m\\,s^{-2}}\\), string tension \\(T\\approx10.691\\,\\mathrm N\\), and distance \\(s\\approx5.345\\,\\mathrm m\\) for each mass in two seconds.",
    "misconception": "The driving force is the hanging weight, but the accelerating mass is the combined 5.5 kg; using 1.5 kg alone overestimates the acceleration. Tension is not equal to the hanging weight in an accelerating system.",
    "reflection": "What changes if the hanging mass becomes much smaller while the table mass stays 4 kg?"
  },
  {
    "id": "W08-A3",
    "section": "A",
    "title": "One connected system, then a slack string",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO2": 4,
      "AO3": 6
    },
    "topics": [
      "connected particles",
      "multi-stage kinematics",
      "smooth surfaces",
      "tension and acceleration",
      "modelling assumptions"
    ],
    "stem": "Particle \\(A\\) of mass \\(2\\,\\mathrm{kg}\\) is on a sufficiently long smooth horizontal table. It is connected by a light inextensible string over a smooth fixed pulley to particle \\(B\\) of mass \\(3\\,\\mathrm{kg}\\) which hangs \\(1.2\\,\\mathrm m\\) above a floor. Both are released from rest. While the string is taut, \\(B\\) descends and \\(A\\) moves toward the pulley. When \\(B\\) reaches the floor it stops without bouncing, and the string becomes slack. The table is long enough for \\(A\\) to move a further \\(0.8\\,\\mathrm m\\) before reaching a stopper. Ignore air resistance and use \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
    "parts": [
      [
        "Before \\(B\\) reaches the floor, use separate equations of motion to determine the common acceleration and tension.",
        3
      ],
      [
        "Calculate the time from release until \\(B\\) first strikes the floor.",
        2
      ],
      [
        "Find the speed of \\(A\\) at that instant.",
        2
      ],
      [
        "Determine the additional time required for \\(A\\) to move the remaining \\(0.8\\,\\mathrm m\\), and hence the total elapsed time to reach the stopper.",
        2
      ],
      [
        "Explain the physical reason why \\(A\\) no longer accelerates horizontally after \\(B\\) reaches the floor in the idealised model.",
        1
      ]
    ],
    "hint": "While taut, use \\(T=2a\\) and \\(3g-T=3a\\). At floor contact the horizontal force on \\(A\\) changes: the string is slack and the surface is smooth.",
    "steps": [
      "Newton's law for \\(A\\) gives \\(T=2a\\). For descending \\(B\\), \\(3g-T=3a\\). Adding gives \\(a=\\frac{3g}{5}=\\frac{29.4}{5}=5.88\\,\\mathrm{m\\,s^{-2}}\\) and \\(T=2(5.88)=11.76\\,\\mathrm N\\). [3]",
      "Before contact, \\(B\\) starts from rest and moves \\(1.2\\,\\mathrm m\\) with constant acceleration. \\(1.2=\\frac12(5.88)t_1^2\\), so \\(t_1=\\sqrt{2.4/5.88}\\approx0.638877\\,\\mathrm s\\). [2]",
      "At contact the common speed is \\(v=at_1\\) or \\(v^2=2as=2(5.88)(1.2)=14.112\\). Hence \\(v=\\sqrt{14.112}\\approx3.756594\\,\\mathrm{m\\,s^{-1}}\\). [2]",
      "After \\(B\\) stops, \\(A\\) travels the additional \\(0.8\\,\\mathrm m\\) at constant speed \\(v\\). Thus \\(t_2=0.8/3.756594\\ldots\\approx0.212959\\,\\mathrm s\\) and \\(t_{\\mathrm{total}}=t_1+t_2\\approx0.851835\\,\\mathrm s\\). [2]",
      "The string is slack so it exerts no horizontal tension on \\(A\\); the smooth table provides no friction. Its resultant horizontal force is zero, so its velocity remains constant up to the stopper. [1]"
    ],
    "answer": "While taut, \\(a=5.88\\,\\mathrm{m\\,s^{-2}}\\), \\(T=11.76\\,\\mathrm N\\). Floor-contact time \\(0.638877\\,\\mathrm s\\), speed \\(3.756594\\,\\mathrm{m\\,s^{-1}}\\), further time \\(0.212959\\,\\mathrm s\\), total \\(0.851835\\,\\mathrm s\\).",
    "misconception": "Continuing to apply the common acceleration and a nonzero string tension after the hanging mass hits the floor is incorrect. Treat the journey as two different motion stages.",
    "reflection": "If a small resistance force acted on A after contact, which of your second-stage equations would have to change?"
  }
];
