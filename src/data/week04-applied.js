export const week04Applied = [
  {
    "id": "W04-A1",
    "section": "A",
    "title": "Every force belongs on the diagram",
    "marks": 4,
    "minutes": 8,
    "ao": {
      "AO1": 2,
      "AO3": 2
    },
    "topics": [
      "force diagrams",
      "normal reaction",
      "weight",
      "equilibrium"
    ],
    "stem": "A block of mass \\(4\\) kg rests on a horizontal surface while it is pulled horizontally to the right with a force of \\(18\\) N. A constant resistive force of \\(6\\) N acts to the left. There is no vertical acceleration. Take \\(g=9.8\\ \\mathrm{m\\,s^{-2}}\\).",
    "parts": [
      [
        "Draw a labelled force diagram showing all four forces acting on the block. State the direction of each force, including the normal reaction and weight.",
        3
      ],
      [
        "Find the magnitude of the normal reaction from the surface.",
        1
      ]
    ],
    "hint": "Separate horizontal and vertical forces. The downward force is weight mg, and the normal reaction is perpendicular to the horizontal surface.",
    "steps": [
      "An acceptable labelled diagram shows the \\(18\\) N pull to the right and \\(6\\) N resistance to the left, plus weight \\(W=mg=4g\\) vertically down and normal reaction \\(R\\) vertically up. Award for the correct four forces, directions and labels. [3]",
      "There is no vertical acceleration, so \\(R-4g=0\\). Therefore \\(R=4(9.8)=39.2\\) N. [1]"
    ],
    "answer": "Right: \\(18\\) N; left: \\(6\\) N; down: \\(39.2\\) N weight; up: \\(39.2\\) N normal reaction.",
    "misconception": "The normal reaction is not a Newton's third-law pair with the weight: both act on the block, whereas action–reaction pairs act on different bodies.",
    "reflection": "Why is the normal reaction equal to weight here even though the block accelerates horizontally?"
  },
  {
    "id": "W04-A2",
    "section": "A",
    "title": "Two perpendicular force components",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO1": 2,
      "AO2": 3,
      "AO3": 3
    },
    "topics": [
      "force vectors",
      "Newton's second law",
      "resultant",
      "magnitude and direction"
    ],
    "stem": "A particle of mass \\(2\\) kg moves on a smooth horizontal plane. Two horizontal forces act on it: \\(\\mathbf F_1=(6\\mathbf i+8\\mathbf j)\\ \\mathrm N\\) and \\(\\mathbf F_2=(-2\\mathbf i+4\\mathbf j)\\ \\mathrm N\\), where \\(\\mathbf i\\) points east and \\(\\mathbf j\\) points north. Ignore other horizontal forces.",
    "parts": [
      [
        "Find the resultant horizontal force in vector form.",
        2
      ],
      [
        "Use Newton's second law to calculate the acceleration vector.",
        2
      ],
      [
        "Find the exact magnitude of the acceleration and its direction to the nearest degree north of east.",
        3
      ],
      [
        "State the single additional horizontal force vector that would give zero resultant force if the original two forces were unchanged.",
        1
      ]
    ],
    "hint": "Add the i-components and j-components independently, then divide by the mass. Use Pythagoras and arctangent for the magnitude and direction.",
    "steps": [
      "The two forces add to \\(\\mathbf F=(6-2)\\mathbf i+(8+4)\\mathbf j=(4\\mathbf i+12\\mathbf j)\\ \\mathrm N\\). [2]",
      "By \\(\\mathbf F=m\\mathbf a\\), \\(\\mathbf a=\\frac12(4\\mathbf i+12\\mathbf j)=(2\\mathbf i+6\\mathbf j)\\ \\mathrm{m\\,s^{-2}}\\). [2]",
      "Magnitude \\(|\\mathbf a|=\\sqrt{2^2+6^2}=\\sqrt{40}=2\\sqrt{10}\\ \\mathrm{m\\,s^{-2}}\\). Direction \\(\\tan^{-1}(6/2)=\\tan^{-1}3\\approx71.6^\\circ\\), or \\(72^\\circ\\) north of east. [3]",
      "An additional force equal to the negative resultant is \\(\\mathbf F_3=(-4\\mathbf i-12\\mathbf j)\\ \\mathrm N\\). [1]"
    ],
    "answer": "Resultant \\(4\\mathbf i+12\\mathbf j\\) N; acceleration \\(2\\mathbf i+6\\mathbf j\\) m s⁻² of magnitude \\(2\\sqrt{10}\\) m s⁻² at \\(72^\\circ\\) north of east; balancing force \\(-4\\mathbf i-12\\mathbf j\\) N.",
    "misconception": "Newton's second law applies to the vector resultant, not to the magnitudes of different-direction forces simply added as positive numbers.",
    "reflection": "How would the acceleration vector change if the particle's mass were doubled without changing the forces?"
  },
  {
    "id": "W04-A3",
    "section": "A",
    "title": "When the string becomes slack",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO1": 2,
      "AO2": 2,
      "AO3": 6
    },
    "topics": [
      "connected particles",
      "Newton's second law",
      "tension",
      "SUVAT",
      "staged motion"
    ],
    "stem": "A particle \\(A\\) of mass \\(3\\) kg moves on a horizontal surface, connected by a light inextensible string passing over a smooth pulley to a hanging particle \\(B\\) of mass \\(2\\) kg. The only horizontal resistance on \\(A\\) is a constant force of \\(3\\) N opposite its motion. The system is released from rest while \\(B\\) is \\(1.2\\) m above the ground. Take \\(g=9.8\\ \\mathrm{m\\,s^{-2}}\\). Assume the resistance remains \\(3\\) N as long as \\(A\\) moves and that the string goes slack once \\(B\\) reaches the ground.",
    "parts": [
      [
        "Write a separate Newton's second-law equation for each particle during the initial motion, taking \\(A\\) towards the pulley and \\(B\\) downwards as positive.",
        3
      ],
      [
        "Find the common acceleration and the tension while the string is taut.",
        3
      ],
      [
        "Find the speed of the particles just before \\(B\\) reaches the ground.",
        2
      ],
      [
        "Find the further distance \\(A\\) travels along the horizontal surface after \\(B\\) reaches the ground before \\(A\\) comes to rest.",
        2
      ]
    ],
    "hint": "Use T − 3 = 3a for A and 2g − T = 2a for B. After B lands, the string is slack and only the 3 N horizontal resistance decelerates A.",
    "steps": [
      "For \\(A\\), along the surface \\(T-3=3a\\) (tension forward, \\(3\\) N resistance backward). For \\(B\\), taking down as positive, \\(2g-T=2a\\). With a light string and smooth pulley the accelerations have equal magnitudes while the string is taut. [3]",
      "Adding the equations eliminates tension: \\(2g-3=5a\\), hence \\(a=\\frac{19.6-3}{5}=3.32\\ \\mathrm{m\\,s^{-2}}\\). Back-substitution gives \\(T=3a+3=3(3.32)+3=12.96\\) N. [3]",
      "Before impact, the particles move \\(1.2\\) m from rest under constant acceleration, so \\(v^2=u^2+2as=0+2(3.32)(1.2)=7.968\\). Therefore \\(v=\\sqrt{7.968}\\approx2.82\\ \\mathrm{m\\,s^{-1}}\\). [2]",
      "After \\(B\\) lands, the taut-string model no longer applies: on \\(A\\), the \\(3\\) N resistance causes deceleration \\(a=-\\frac33=-1\\ \\mathrm{m\\,s^{-2}}\\). Setting final speed to zero in \\(v^2=u^2+2as\\) gives \\(0=7.968-2s\\), so the additional distance is \\(s=3.984\\) m. [2]"
    ],
    "answer": "Initial acceleration \\(3.32\\) m s⁻², tension \\(12.96\\) N, speed at impact \\(\\sqrt{7.968}\\approx2.82\\) m s⁻¹; extra distance travelled by \\(A\\) after impact \\(3.984\\) m.",
    "misconception": "After the hanging particle reaches the ground, the tension no longer acts on the moving block. Apply a fresh force equation for the second stage before using SUVAT.",
    "reflection": "What changes if the horizontal resistance does not remain constant after the string becomes slack?"
  }
];
