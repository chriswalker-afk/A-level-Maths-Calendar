export const week03ExpansionExtension = [
  {
    "id": "W03-X2",
    "section": "X",
    "title": "A line through a unit circle: a general chord theorem",
    "marks": 16,
    "ao": {
      "AO1": 1,
      "AO2": 11,
      "AO3": 4
    },
    "topics": [
      "unit circle intersections",
      "trigonometric geometry",
      "parameter constraints",
      "optimisation proof"
    ],
    "stem": "For real c, consider the unit circle \\(x^2+y^2=1\\) and the line \\(3x+4y=c\\). When the line meets the circle twice, the chord between intersection points is denoted PQ. All areas are in square coordinate units.",
    "parts": [
      [
        "Prove that there are two distinct intersections exactly when \\(|c|<5\\), one tangent intersection when \\(|c|=5\\), and none when \\(|c|>5\\).",
        4
      ],
      [
        "Derive the exact chord-length formula \\(PQ=2\\sqrt{1-c^2/25}\\) whenever \\(|c|\\le5\\).",
        3
      ],
      [
        "For c=3, find the two intersection coordinates and their exact separation. Then determine every c for which the chord length is 6/5.",
        4
      ],
      [
        "Let A(c) be the area of triangle OPQ, where O is the origin and P,Q are the two endpoints. Prove the largest possible value of A(c) and find all c attaining it, without calculus.",
        5
      ]
    ],
    "hint": "The line is at perpendicular distance |c|/5 from O. An intersection exists only if that distance does not exceed radius 1. For the last part, set u=c²/25.",
    "steps": [
      "The normal vector of the line is \\(\\langle3,4\\rangle\\), whose length is 5. [1] Perpendicular distance from O to the line is \\(d=|c|/5\\). [1] When d<1 the line cuts the unit circle twice; at d=1 it is tangent; for d>1 it misses the circle. [2]",
      "A radius to the chord midpoint is perpendicular to the line and has length \\(|c|/5\\). [1] In one of the two right triangles, the half-chord has length \\(\\sqrt{1-(c/5)^2}\\). [1] Doubling gives \\(PQ=2\\sqrt{1-c^2/25}\\). [1]",
      "With c=3, solve \\(3x+4y=3,\\ x^2+y^2=1\\) to obtain \\((x,y)=(1,0)\\) and \\((-7/25,24/25)\\). [2] Their separation is \\(\\sqrt{(32/25)^2+(24/25)^2}=8/5\\). [1] If \\(PQ=6/5\\), then \\(2\\sqrt{1-c^2/25}=6/5\\), so \\(c^2=16\\) and \\(c=\\pm4\\). [1]",
      "Triangle area is \\(A(c)=\\frac12(PQ)\\,d=\\frac{|c|}{5}\\sqrt{1-c^2/25}\\). [2] Put \\(u=c^2/25\\) so \\(0\\le u\\le1\\) and \\(A^2=u(1-u)=\\frac14-(u-\\frac12)^2\\). [2] Thus \\(A\\le1/2\\), with equality at \\(u=1/2\\), that is \\(c=\\pm5/\\sqrt2\\). [1]"
    ],
    "answer": "Intersections as stated for |c| relative to 5; \\(PQ=2\\sqrt{1-c^2/25}\\); for c=3, points \\((1,0),(-7/25,24/25)\\) and chord 8/5; chord 6/5 when c=±4; maximum triangle area 1/2 at \\(c=\\pm5/\\sqrt2\\).",
    "misconception": "When c is negative, perpendicular distance is |c|/5, not c/5; an area is nonnegative and both signs can yield the same maximum.",
    "reflection": "Which parts of this argument extend to a circle of arbitrary radius and a line ax+by=c?"
  }
];
