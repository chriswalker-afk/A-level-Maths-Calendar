export const week02PureProblems = [
  {
    "id": "W02-P1",
    "section": "P",
    "title": "Touching, crossing or missing?",
    "marks": 8,
    "minutes": 18,
    "ao": {
    "AO2": 8
  },
    "topics": [
      "circles",
      "discriminants",
      "tangency"
    ],
    "stem": "A circle has equation \\((x-2)^2+(y+1)^2=8\\). A family of straight lines is given by \\(y=x+c\\), where \\(c\\) is real.",
    "parts": [
      [
        "Show that the \\(x\\)-coordinates of any intersections satisfy \\(2x^2+2(c-1)x+(c+1)^2-4=0\\).",
        2
      ],
      [
        "Find every value of \\(c\\) for which the line is tangent to the circle.",
        3
      ],
      [
        "Find the corresponding points of tangency.",
        2
      ],
      [
        "State the exact interval of \\(c\\) for which the line crosses the circle at two distinct points.",
        1
      ]
    ],
    "hint": "Substitute \\(y=x+c\\) into the circle. A repeated root occurs when the discriminant vanishes; classify all other cases by its sign.",
    "steps": [
      "Substitution gives \\((x-2)^2+(x+c+1)^2=8\\); expanding and collecting gives \\(2x^2+2(c-1)x+(c+1)^2-4=0\\). [2]",
      "The discriminant is \\(\\Delta=[2(c-1)]^2-8[(c+1)^2-4]=4[16-(c+3)^2]\\). Tangency requires \\(\\Delta=0\\), so \\((c+3)^2=16\\) and \\(c=1\\) or \\(c=-7\\). [3]",
      "At a repeated root \\(x=-\\dfrac{2(c-1)}{4}=\\dfrac{1-c}{2}\\). For \\(c=1\\): \\((x,y)=(0,1)\\). For \\(c=-7\\): \\((x,y)=(4,-3)\\). [2]",
      "Two distinct intersections need \\(\\Delta>0\\), or \\(|c+3|<4\\), hence \\(-7<c<1\\). [1]"
    ],
    "answer": "Tangents at \\((0,1)\\) when \\(c=1\\) and \\((4,-3)\\) when \\(c=-7\\); two intersections for \\(-7<c<1\\).",
    "misconception": "Tangency has one repeated intersection, not two points at the same location.",
    "reflection": "How does a discriminant encode how far a line is from a circle?"
  },
  {
    "id": "W02-P2",
    "section": "P",
    "title": "Collinearity from position vectors",
    "marks": 10,
    "minutes": 24,
    "ao": {
    "AO2": 10
  },
    "topics": [
      "vectors",
      "geometric proof",
      "ratios"
    ],
    "stem": "Three distinct points have position vectors \\(\\overrightarrow{OA}=\\mathbf a\\), \\(\\overrightarrow{OB}=\\mathbf b\\) and \\(\\overrightarrow{OC}=\\tfrac12(3\\mathbf b-\\mathbf a)\\). Point \\(P\\) lies on \\(AB\\) with \\(AP:PB=3:1\\). Assume \\(\\mathbf a\\ne\\mathbf b\\).",
    "parts": [
      [
        "Express \\(\\overrightarrow{OP}\\) in terms of \\(\\mathbf a\\) and \\(\\mathbf b\\).",
        3
      ],
      [
        "Prove that \\(P\\) is the midpoint of \\(AC\\).",
        3
      ],
      [
        "Show that \\(P,B,C\\) lie on one straight line, and state which of these points lies between the other two.",
        3
      ],
      [
        "Find the ratio \\(PB:BC\\).",
        1
      ]
    ],
    "hint": "Use \\(\\overrightarrow{OP}=\\overrightarrow{OA}+\\tfrac34\\overrightarrow{AB}\\). Compare displacement vectors as scalar multiples; do not use a sketch as proof.",
    "steps": [
      "Since \\(\\overrightarrow{AP}=\\tfrac34(\\mathbf b-\\mathbf a)\\), \\(\\overrightarrow{OP}=\\mathbf a+\\tfrac34(\\mathbf b-\\mathbf a)=\\tfrac14(\\mathbf a+3\\mathbf b)\\). [3]",
      "\\(\\overrightarrow{AC}=\\tfrac12(3\\mathbf b-\\mathbf a)-\\mathbf a=\\tfrac32(\\mathbf b-\\mathbf a)\\) while \\(\\overrightarrow{AP}=\\tfrac34(\\mathbf b-\\mathbf a)=\\tfrac12\\overrightarrow{AC}\\). As \\(P\\) lies on \\(AC\\) and is halfway from \\(A\\) to \\(C\\), it is its midpoint. [3]",
      "\\(\\overrightarrow{BP}=\\tfrac14(\\mathbf a-\\mathbf b)=-\\tfrac14(\\mathbf b-\\mathbf a)\\) and \\(\\overrightarrow{BC}=\\tfrac12(\\mathbf b-\\mathbf a)\\). Thus \\(\\overrightarrow{BP}=-\\tfrac12\\overrightarrow{BC}\\): the vectors are opposite scalar multiples, so \\(P,B,C\\) are collinear with \\(B\\) between \\(P\\) and \\(C\\). [3]",
      "Therefore \\(PB:BC=\\tfrac12:1=1:2\\). [1]"
    ],
    "answer": "\\(\\overrightarrow{OP}=\\tfrac14(\\mathbf a+3\\mathbf b)\\); \\(P\\) is the midpoint of \\(AC\\); \\(P,B,C\\) are collinear with \\(B\\) between them; \\(PB:BC=1:2\\).",
    "misconception": "A negative scalar multiple proves parallel vectors pointing in opposite directions, not the same direction.",
    "reflection": "Which vector equation is a complete proof of collinearity here?"
  },
  {
    "id": "W02-P3",
    "section": "P",
    "title": "A tangent parallel to the hypotenuse",
    "marks": 12,
    "minutes": 25,
    "ao": {
    "AO2": 12
  },
    "topics": [
      "circles",
      "vectors",
      "perpendicularity",
      "geometric proof"
    ],
    "stem": "The points \\(A(0,0)\\), \\(B(6,2)\\) and \\(C(8,-4)\\) form a triangle. A circle has \\(AC\\) as its diameter.",
    "parts": [
      [
        "Using displacement vectors and gradients, prove that \\(\\angle ABC=90^\\circ\\).",
        3
      ],
      [
        "Find the centre, radius and equation of the circle.",
        3
      ],
      [
        "Verify that \\(B\\) lies on the circle and find the equation of its tangent at \\(B\\).",
        4
      ],
      [
        "Prove that this tangent is parallel to \\(AC\\).",
        2
      ]
    ],
    "hint": "Calculate \\(\\overrightarrow{AB}\\) and \\(\\overrightarrow{BC}\\) first. The tangent at \\(B\\) is perpendicular to the line from the centre to \\(B\\).",
    "steps": [
      "\\(\\overrightarrow{AB}=\\binom62\\) has gradient \\(\\tfrac26=\\tfrac13\\). \\(\\overrightarrow{BC}=\\binom2{-6}\\) has gradient \\(-3\\). Their product is \\(-1\\), hence \\(AB\\) is perpendicular to \\(BC\\) and \\(\\angle ABC=90^\\circ\\). [3]",
      "The centre is the midpoint \\(O(4,-2)\\). The squared radius is \\(OA^2=4^2+(-2)^2=20\\), so \\(r=2\\sqrt5\\) and the circle is \\((x-4)^2+(y+2)^2=20\\). [3]",
      "At \\(B(6,2)\\), \\((6-4)^2+(2+2)^2=4+16=20\\), so \\(B\\) is on the circle. The radius \\(OB\\) has gradient \\(\\frac{2-(-2)}{6-4}=2\\), so the tangent gradient is \\(-\\tfrac12\\) and its equation is \\(y-2=-\\tfrac12(x-6)\\) or \\(x+2y=10\\). [4]",
      "The gradient of \\(AC\\) is \\(\\dfrac{-4-0}{8-0}=-\\tfrac12\\), the same as the tangent's gradient. Both are straight lines, so they are parallel. [2]"
    ],
    "answer": "Circle \\((x-4)^2+(y+2)^2=20\\); tangent at \\(B\\) is \\(x+2y=10\\), parallel to \\(AC\\).",
    "misconception": "Do not assume every side of a triangle is a radius. The circle's diameter is AC, and its centre is the midpoint of AC.",
    "reflection": "Which parts of the proof rely on vector differences, and which on circle geometry?"
  }
];
