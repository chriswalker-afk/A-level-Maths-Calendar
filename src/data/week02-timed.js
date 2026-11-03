export const week02Timed = [
  {
    "id": "W02-T1",
    "section": "T",
    "title": "The circle through three points",
    "marks": 8,
    "minutes": 12,
    "ao": {
      "AO1": 3,
      "AO2": 5
    },
    "topics": [
      "circles",
      "perpendicular bisectors",
      "tangents"
    ],
    "stem": "Three non-collinear points are \\(A(0,0)\\), \\(B(6,0)\\) and \\(C(2,4)\\). There is a circle through all three points.",
    "parts": [
      [
        "Find equations of the perpendicular bisectors of \\(AB\\) and \\(AC\\).",
        3
      ],
      [
        "Hence determine the centre, radius and equation of the circle.",
        3
      ],
      [
        "Find an equation of the tangent to the circle at \\(A\\).",
        2
      ]
    ],
    "hint": "The circle's centre is where the perpendicular bisectors intersect. The tangent at \\(A\\) is perpendicular to the radius from the centre to \\(A\\).",
    "steps": [
      "The midpoint of \\(AB\\) is \\((3,0)\\), and \\(AB\\) is horizontal, so its perpendicular bisector is \\(x=3\\). The midpoint of \\(AC\\) is \\((1,2)\\); since the gradient of \\(AC\\) is \\(2\\), its perpendicular bisector is \\(y-2=-\\tfrac12(x-1)\\). [3]",
      "At \\(x=3\\), the second line gives \\(y-2=-1\\), so the centre is \\(O(3,1)\\). Then \\(r=\\sqrt{(3-0)^2+(1-0)^2}=\\sqrt{10}\\) and the circle is \\((x-3)^2+(y-1)^2=10\\). [3]",
      "The radius \\(OA\\) has gradient \\(\\tfrac13\\). A perpendicular tangent has gradient \\(-3\\) and passes through \\((0,0)\\), so \\(y=-3x\\). [2]"
    ],
    "answer": "Perpendicular bisectors \\(x=3\\) and \\(y-2=-\\tfrac12(x-1)\\); circle \\((x-3)^2+(y-1)^2=10\\); tangent \\(y=-3x\\).",
    "misconception": "The centre of the circle is not generally the midpoint of one chord; it lies on that chord's perpendicular bisector.",
    "reflection": "Why do two perpendicular bisectors determine the same point as the third?"
  },
  {
    "id": "W02-T2",
    "section": "T",
    "title": "Prove a 3D parallelogram",
    "marks": 12,
    "minutes": 17,
    "ao": {
      "AO1": 5,
      "AO2": 7
    },
    "topics": [
      "vectors",
      "three dimensions",
      "proof",
      "distance"
    ],
    "stem": "Four points have three-dimensional coordinates \\(A(1,-2,3)\\), \\(B(5,0,-1)\\), \\(C(3,4,1)\\) and \\(D\\). They are the consecutive vertices of a parallelogram \\(ABCD\\).",
    "parts": [
      [
        "Find the coordinates of \\(D\\).",
        3
      ],
      [
        "Show that both pairs of opposite sides of \\(ABCD\\) are equal as vectors, and hence justify the parallelogram property.",
        3
      ],
      [
        "Find the exact perimeter of \\(ABCD\\).",
        4
      ],
      [
        "Determine whether \\(ABCD\\) is a rectangle. Justify your answer using the lengths of the diagonals.",
        2
      ]
    ],
    "hint": "In a parallelogram, \\(\\overrightarrow{AD}=\\overrightarrow{BC}\\). To test for a rectangle without using a dot product, compare the two diagonal lengths.",
    "steps": [
      "\\(\\overrightarrow{BC}=\\langle -2,4,2\\rangle\\). Thus \\(\\overrightarrow{OD}=\\overrightarrow{OA}+\\overrightarrow{BC}=\\langle1,-2,3\\rangle+\\langle-2,4,2\\rangle=\\langle-1,2,5\\rangle\\), giving \\(D(-1,2,5)\\). [3]",
      "\\(\\overrightarrow{AB}=\\langle4,2,-4\\rangle\\) and \\(\\overrightarrow{DC}=\\langle4,2,-4\\rangle\\); also \\(\\overrightarrow{AD}=\\langle-2,4,2\\rangle\\) and \\(\\overrightarrow{BC}=\\langle-2,4,2\\rangle\\). Equal vectors imply opposite sides are parallel and equal in length. [3]",
      "\\(AB=\\sqrt{4^2+2^2+(-4)^2}=6\\), while \\(BC=\\sqrt{(-2)^2+4^2+2^2}=2\\sqrt6\\). The perimeter is \\(2(6+2\\sqrt6)=12+4\\sqrt6\\) units. [4]",
      "Diagonals are \\(\\overrightarrow{AC}=\\langle2,6,-2\\rangle\\) and \\(\\overrightarrow{BD}=\\langle-6,2,6\\rangle\\). Their squared lengths are \\(44\\) and \\(76\\), so they are unequal. A rectangle's diagonals are equal; therefore this parallelogram is not a rectangle. [2]"
    ],
    "answer": "\\(D(-1,2,5)\\); perimeter \\(12+4\\sqrt6\\) units; it is not a rectangle because the diagonals have different lengths.",
    "misconception": "All parallelograms have diagonals that bisect each other, but only special parallelograms such as rectangles have equal-length diagonals.",
    "reflection": "How could you determine whether a parallelogram is a rhombus from its side lengths?"
  },
  {
    "id": "W02-T3",
    "section": "T",
    "title": "A two-stage velocity graph",
    "marks": 12,
    "minutes": 16,
    "ao": {
      "AO1": 4,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "mechanics",
      "velocity–time graphs",
      "SUVAT",
      "modelling"
    ],
    "stem": "A cyclist travels along a straight road in one direction. Starting from rest, the cyclist accelerates uniformly to \\(16\\) m s\\(^{-1}\\) in \\(8\\) seconds. The cyclist immediately brakes at a constant rate until coming to rest. The total distance from starting to stopping is \\(160\\) m.",
    "parts": [
      [
        "Calculate the initial acceleration and distance travelled in the first eight seconds.",
        3
      ],
      [
        "Find the duration of braking and the braking acceleration.",
        4
      ],
      [
        "Describe a labelled velocity–time graph of the journey and explain how its area checks the total distance.",
        3
      ],
      [
        "State two modelling limitations that might affect the predicted braking distance.",
        2
      ]
    ],
    "hint": "Distance equals the triangular area under each straight-line segment of a velocity–time graph. The second stage begins at \\(16\\) m s\\(^{-1}\\) and ends at rest.",
    "steps": [
      "First-stage acceleration \\(a_1=\\dfrac{16-0}{8}=2\\) m s\\(^{-2}\\). First-stage displacement \\(s_1=\\tfrac12(0+16)(8)=64\\) m. [3]",
      "The braking distance is \\(160-64=96\\) m. If its duration is \\(t\\) seconds, \\(96=\\tfrac12(16+0)t=8t\\), giving \\(t=12\\) s. Braking acceleration \\(a_2=\\dfrac{0-16}{12}=-\\tfrac43\\) m s\\(^{-2}\\). [4]",
      "The graph is formed by straight segments joining \\((0,0)\\), \\((8,16)\\) and \\((20,0)\\) on axes of time (s) and velocity (m s\\(^{-1}\\)). The signed area is positive throughout and equals \\(\\tfrac12(8)(16)+\\tfrac12(12)(16)=64+96=160\\) m, verifying the distance. [3]",
      "Acceleration and braking are unlikely to be perfectly constant; the sudden switch from accelerating to braking ignores reaction time or transitions. Road slope, wind and tyre grip also affect the braking performance. Any two distinct, explained limitations. [2]"
    ],
    "answer": "Initial acceleration \\(2\\) m s\\(^{-2}\\); braking time \\(12\\) s; braking acceleration \\(-\\tfrac43\\) m s\\(^{-2}\\); total time \\(20\\) s.",
    "misconception": "Braking distance is not computed using the initial acceleration; the second stage has a new negative acceleration.",
    "reflection": "What would change if the cyclist travelled for a three-second interval at constant speed before braking?"
  }
];
