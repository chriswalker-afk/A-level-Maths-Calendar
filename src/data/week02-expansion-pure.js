export const week02ExpansionPure = [
  {
    "id": "W02-P4",
    "section": "P",
    "title": "A route enters a restricted circle",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 5,
      "AO3": 3
    },
    "topics": [
      "parametric geometry",
      "Cartesian elimination",
      "circle intersections",
      "domain evaluation"
    ],
    "stem": "A robot follows the straight path \\(x=2+3t,\\ y=1+4t\\) for \\(0\\le t\\le1\\). Its destination is \\(B=(5,5)\\). A circular exclusion zone is centred on B and has radius \\(2\\) coordinate units. The robot has no size in the initial model.",
    "parts": [
      [
        "Eliminate t to find a Cartesian equation for the route, and identify the actual segment travelled.",
        3
      ],
      [
        "Find all algebraic values of t where the path intersects the exclusion-zone boundary. Decide which are physically relevant.",
        4
      ],
      [
        "Find the exact distance travelled before the robot first reaches the boundary.",
        2
      ],
      [
        "Explain one contradiction between the intended destination and the exclusion-zone rule.",
        1
      ]
    ],
    "hint": "The position relative to B is (3t−3,4t−4); substitute this directly in the circle equation.",
    "steps": [
      "As \\(t=(x-2)/3\\), \\(y-1=\\frac43(x-2)\\). [1] Equivalently \\(3y=4x-5\\). [1] The permitted segment is from \\((2,1)\\) to \\((5,5)\\) with \\(0\\le t\\le1\\). [1]",
      "The circle equation is \\((x-5)^2+(y-5)^2=4\\). [1] Substitution gives \\(9(t-1)^2+16(t-1)^2=4\\), so \\(25(t-1)^2=4\\). [1] Thus \\(t=1\\pm2/5=3/5,7/5\\). [1] Only \\(t=3/5\\) lies in [0,1]; 7/5 is on an extension beyond the robot's destination. [1]",
      "Over the whole segment the displacement has length \\(\\sqrt{3^2+4^2}=5\\). [1] The distance travelled to the first boundary is \\((3/5)(5)=3\\) coordinate units. [1]",
      "The stated destination B is itself the zone centre, so the robot cannot both stay outside the exclusion zone and reach B without changing the route or lifting the restriction. [1]"
    ],
    "answer": "\\(3y=4x-5\\) on the segment; relevant boundary parameter \\(t=3/5\\); first-entry distance \\(3\\) units. Destination is incompatible with remaining outside the zone.",
    "misconception": "Eliminating a parameter gives the entire infinite line; physical parameter restrictions may remove an algebraic intersection.",
    "reflection": "How would a robot with nonzero radius change the required safety buffer?"
  },
  {
    "id": "W02-P5",
    "section": "P",
    "title": "Why the medians meet in three dimensions",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "3D position vectors",
      "midpoints",
      "ratio proof",
      "vector magnitude"
    ],
    "stem": "A triangle has points \\(A=(1,-2,2)\\) , \\(B=(7,4,-1)\\) and \\(C=(-2,1,5)\\). Define a median to join a vertex to the midpoint of the opposite side.",
    "parts": [
      [
        "Find the midpoint of BC and give the vector from A to that midpoint.",
        2
      ],
      [
        "Find the point G lying two-thirds of the way from A to the midpoint of BC.",
        3
      ],
      [
        "Prove, using a second median, that G is also two-thirds of the way from B to the midpoint of AC.",
        3
      ],
      [
        "Find the exact lengths AB and AG.",
        2
      ]
    ],
    "hint": "Write midpoints as averages of position vectors. Express the point two-thirds along a segment as start + (2/3)×displacement.",
    "steps": [
      "The midpoint of BC is \\(D=(5/2,5/2,2)\\). [1] Therefore \\(\\overrightarrow{AD}=\\langle3/2,9/2,0\\rangle\\). [1]",
      "Use \\(\\vec g=\\vec a+\\frac23(\\vec d-\\vec a)\\). [1] The displacement is \\(\\frac23\\langle3/2,9/2,0\\rangle=\\langle1,3,0\\rangle\\). [1] Thus \\(G=(2,1,2)\\). [1]",
      "The midpoint of AC is \\(E=(-1/2,-1/2,7/2)\\). [1] Then \\(\\vec b+\\frac23(\\vec e-\\vec b)=(7,4,-1)+\\frac23(-15/2,-9/2,9/2)\\). [1] This simplifies to \\((2,1,2)=G\\), so the two medians meet there. [1]",
      "\\(\\overrightarrow{AB}=\\langle6,6,-3\\rangle\\), hence \\(AB=\\sqrt{36+36+9}=9\\). [1] Also \\(\\overrightarrow{AG}=\\langle1,3,0\\rangle\\), hence \\(AG=\\sqrt{10}\\). [1]"
    ],
    "answer": "Midpoint BC \\((5/2,5/2,2)\\), centroid \\(G=(2,1,2)\\), lengths \\(AB=9,\\ AG=\\sqrt{10}\\).",
    "misconception": "The medians meet two-thirds of the way from a vertex, not halfway along the median.",
    "reflection": "How does the position-vector average (a+b+c)/3 explain why the third median must also pass through G?"
  },
  {
    "id": "W02-P6",
    "section": "P",
    "title": "A moving triangle creates a moving line",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 6,
      "AO3": 2
    },
    "topics": [
      "vector parameters",
      "coordinate geometry",
      "similar triangles",
      "area reasoning"
    ],
    "stem": "Triangle ABC has vertices \\(A=(0,0),\\ B=(6,0),\\ C=(2,4)\\). A point P divides AB in the fraction t from A and a point Q divides AC in the same fraction t from A, with \\(0<t<1\\).",
    "parts": [
      [
        "Find P and Q as functions of t and hence determine \\(\\overrightarrow{PQ}\\).",
        3
      ],
      [
        "Find the equation of line PQ in Cartesian form and derive the exact area of triangle APQ.",
        3
      ],
      [
        "If triangle APQ has area \\(3\\) square units, find t and the equation of PQ.",
        2
      ],
      [
        "Find PQ in this case and explain why the other root of the area equation, if used, is invalid.",
        2
      ]
    ],
    "hint": "Use AP=t AB and AQ=t AC; a determinant or base×height gives the small triangle's area.",
    "steps": [
      "\\(P=(6t,0)\\) and \\(Q=(2t,4t)\\). [2] Thus \\(\\overrightarrow{PQ}=\\langle-4t,4t\\rangle\\). [1]",
      "Both P and Q satisfy \\(x+y=6t\\), so this is the equation of their joining line. [1] Using horizontal base AP=6t and vertical height 4t gives \\(\\mathrm{area}(APQ)=\\frac12(6t)(4t)=12t^2\\). [2]",
      "\\(12t^2=3\\), so \\(t^2=1/4\\) and \\(t=1/2\\) within the specified domain. [1] Then \\(PQ:\\ x+y=3\\). [1]",
      "At t=1/2, \\(\\overrightarrow{PQ}=\\langle-2,2\\rangle\\), so \\(PQ=2\\sqrt2\\). [1] The negative root t=−1/2 would place both points beyond A, violating \\(0<t<1\\). [1]"
    ],
    "answer": "\\(P=(6t,0),Q=(2t,4t),PQ:\\ x+y=6t\\); area \\(12t^2\\); for area3, \\(t=1/2\\), \\(x+y=3\\), \\(PQ=2\\sqrt2\\).",
    "misconception": "The negative root of t²=1/4 is not admissible simply because both points are defined to lie on the original segments.",
    "reflection": "Could you obtain the same area ratio by similarity rather than coordinate calculation?"
  },
  {
    "id": "W02-P7",
    "section": "P",
    "title": "Two tangents from one external point",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "circle geometry",
      "line gradients",
      "discriminant tangency",
      "exact distances"
    ],
    "stem": "The circle \\(x^2+y^2=9\\) is viewed from point \\(A=(5,0)\\) outside it. A line through A with gradient m may meet the circle in two points, one point or no real point.",
    "parts": [
      [
        "Write the line equation in terms of m and derive a quadratic in x for the intersections.",
        3
      ],
      [
        "Find both gradients for which the line is tangent to the circle.",
        3
      ],
      [
        "Find both exact points of tangency.",
        3
      ],
      [
        "Explain why the two tangent segments from A have equal length and state that length.",
        1
      ]
    ],
    "hint": "A line through (5,0) is y=m(x−5). Substitute in x²+y²=9; tangency means zero discriminant.",
    "steps": [
      "The line is \\(y=m(x-5)\\). [1] Substitute to obtain \\(x^2+m^2(x-5)^2=9\\). [1] Rearrangement yields \\((1+m^2)x^2-10m^2x+(25m^2-9)=0\\). [1]",
      "The discriminant is \\(D=(10m^2)^2-4(1+m^2)(25m^2-9)=36-64m^2\\). [2] For tangency D=0, so \\(m=\\pm3/4\\). [1]",
      "The double-root x-coordinate is \\(x=5m^2/(1+m^2)=9/5\\). [2] When \\(m=3/4\\), \\(y=(3/4)(9/5-5)=-12/5\\); when \\(m=-3/4\\), \\(y=12/5\\). Hence the two tangency points are \\((9/5,\\pm12/5)\\). [1]",
      "A radius to a tangent is perpendicular to it, so in each right triangle the tangent length is \\(\\sqrt{OA^2-r^2}=\\sqrt{25-9}=4\\); both use the same hypotenuse and radius. [1]"
    ],
    "answer": "\\(y=m(x-5)\\); slopes \\(m=\\pm3/4\\); tangency points \\((9/5,\\pm12/5)\\); both tangent lengths \\(4\\).",
    "misconception": "Tangency gives a repeated intersection root; a negative discriminant means no real point of contact.",
    "reflection": "How would the condition on the external point change if its distance to the centre were less than the radius?"
  }
];
