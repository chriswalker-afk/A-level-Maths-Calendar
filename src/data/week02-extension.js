export const week02Extension = [
  {
    "id": "W02-X1",
    "section": "X",
    "title": "Two circles, one point and a common chord",
    "marks": 14,
    "minutes": 40,
    "ao": {
      "AO1": 3,
      "AO2": 11
    },
    "topics": [
      "circles",
      "algebraic proof",
      "perpendicularity",
      "symmetry",
      "geometry"
    ],
    "stem": "A circle lies in the first quadrant and is tangent to both the positive \\(x\\)-axis and the positive \\(y\\)-axis. It also passes through the fixed point \\(P(6,2)\\). Its radius is \\(r>0\\).",
    "parts": [
      [
        "Prove that the possible values of \\(r\\) satisfy \\(r^2-16r+40=0\\).",
        3
      ],
      [
        "Find the two possible radii exactly, and write the centre of each circle.",
        2
      ],
      [
        "The two circles intersect at \\(P\\) and one other point \\(Q\\). Prove that their common chord lies on \\(x+y=8\\), and find \\(Q\\).",
        4
      ],
      [
        "Show that the common chord is perpendicular to the line joining the two centres, and find their point of intersection.",
        3
      ],
      [
        "Find the exact difference between the areas of the two circles.",
        2
      ]
    ],
    "hint": "Tangency to both positive axes forces the centre to be \\((r,r)\\). Substitute \\(P\\) into the circle equation. For the common chord, subtract the two circle equations.",
    "steps": [
      "The centre must be \\(C(r,r)\\), so the circle is \\((x-r)^2+(y-r)^2=r^2\\). Since \\(P(6,2)\\) lies on it, \\((6-r)^2+(2-r)^2=r^2\\). Expanding gives \\(36-12r+r^2+4-4r+r^2=r^2\\), or \\(r^2-16r+40=0\\). [3]",
      "By the quadratic formula \\(r=\\dfrac{16\\pm\\sqrt{256-160}}2=8\\pm2\\sqrt6\\). Both radii are positive. The two centres are \\(C_1=(8+2\\sqrt6,8+2\\sqrt6)\\) and \\(C_2=(8-2\\sqrt6,8-2\\sqrt6)\\). [2]",
      "Expand the general circle to \\(x^2+y^2-2r(x+y)+r^2=0\\). Subtracting the equations for the distinct radii \\(r_1,r_2\\) gives \\(-2(r_1-r_2)(x+y)+(r_1^2-r_2^2)=0\\). Divide by \\(r_1-r_2\\) to get \\(x+y=\\dfrac{r_1+r_2}{2}=8\\). By symmetry of each circle under interchange of \\(x\\) and \\(y\\), the reflection of \\(P(6,2)\\) is \\(Q(2,6)\\), which also lies on both circles and on the common chord. [4]",
      "Both centres have equal coordinates, so their joining line is \\(y=x\\) with gradient \\(1\\). The common chord \\(x+y=8\\) has gradient \\(-1\\), so the two lines are perpendicular. Solving \\(x=y\\) and \\(x+y=8\\) gives their intersection \\((4,4)\\), which is also the chord's midpoint. [3]",
      "Larger area minus smaller area is \\(\\pi(r_1^2-r_2^2)=\\pi(r_1-r_2)(r_1+r_2)=\\pi(4\\sqrt6)(16)=64\\pi\\sqrt6\\) square units. [2]"
    ],
    "answer": "Radii \\(8\\pm2\\sqrt6\\); centres \\((8\\pm2\\sqrt6,8\\pm2\\sqrt6)\\); common chord \\(x+y=8\\) with endpoints \\((6,2)\\), \\((2,6)\\); perpendicular-centre-line intersection \\((4,4)\\); area difference \\(64\\pi\\sqrt6\\).",
    "misconception": "A circle tangent to both axes has centre (r,r), not (0,r), provided it touches both positive axes. Both quadratic roots satisfy the physical radius condition here.",
    "reflection": "Why is the reflection of P across y = x guaranteed to be on both circles?"
  }
];
