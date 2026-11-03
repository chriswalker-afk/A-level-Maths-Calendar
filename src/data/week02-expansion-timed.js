export const week02ExpansionTimed = [
  {
    "id": "W02-T4",
    "section": "T",
    "title": "A chord, a sector and a segment",
    "marks": 8,
    "ao": {
      "AO1": 2,
      "AO2": 5,
      "AO3": 1
    },
    "topics": [
      "circle intersections",
      "chords",
      "sector area",
      "radians"
    ],
    "stem": "The circle \\(x^2+y^2=25\\) is cut by the horizontal line \\(y=3\\) at points A and B. Let O denote the origin, and take the minor sector AOB.",
    "parts": [
      [
        "Find the exact coordinates of A and B and the length AB.",
        3
      ],
      [
        "Find the shortest distance from O to AB and the area of triangle AOB.",
        2
      ],
      [
        "Find an exact expression, in square units, for the area of the minor circular segment between AB and the minor arc AB.",
        3
      ]
    ],
    "hint": "The chord endpoints have y=3. The central angle is twice the angle in a right triangle with adjacent 3 and hypotenuse 5.",
    "steps": [
      "Substitute y=3 to obtain \\(x^2+9=25\\), giving \\(x=\\pm4\\). [2] Thus \\(A=(-4,3),B=(4,3),AB=8\\). [1]",
      "The perpendicular distance from O to horizontal y=3 is \\(3\\) units. [1] Triangle area \\(\\frac12(8)(3)=12\\) square units. [1]",
      "The half-angle at O satisfies \\(\\cos(\\theta/2)=3/5\\), so \\(\\theta=2\\arccos(3/5)\\) radians. [1] Sector area \\(\\frac12(25)\\theta=25\\arccos(3/5)\\). [1] Subtract triangle area to get segment area \\(25\\arccos(3/5)-12\\) square units. [1]"
    ],
    "answer": "\\(A=(-4,3), B=(4,3)\\); chord 8; triangle area12; segment area \\(25\\arccos(3/5)-12\\) square units.",
    "misconception": "The segment is the sector minus the triangle, not the whole circle minus the triangle.",
    "reflection": "How can you verify the exact segment-area expression is positive?"
  }
];
