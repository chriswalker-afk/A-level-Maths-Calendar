export const week02Retrieval = [
  {
    "id": "W02-R1",
    "section": "R",
    "title": "Equation through two points",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "lines",
      "gradients"
    ],
    "stem": "The points \\(A(2,-1)\\) and \\(B(6,7)\\) lie on a straight line.",
    "parts": [
      [
        "Find the equation of \\(AB\\) in the form \\(y=mx+c\\).",
        2
      ]
    ],
    "hint": "Calculate rise over run, then substitute one point into your line equation.",
    "steps": [
      "Gradient \\(m=\\dfrac{7-(-1)}{6-2}=\\dfrac84=2\\). [1]",
      "Using \\(A(2,-1)\\), \\(-1=2(2)+c\\), so \\(c=-5\\). The line is \\(y=2x-5\\). [1]"
    ],
    "answer": "\\(y=2x-5\\)",
    "misconception": "Do not swap the differences in the numerator and denominator of the gradient.",
    "reflection": "Which point could you substitute to check your equation?"
  },
  {
    "id": "W02-R2",
    "section": "R",
    "title": "A perpendicular line",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "lines",
      "perpendicularity"
    ],
    "stem": "The line \\(L:y=-\\dfrac12x+4\\) is given, and \\(P(3,-2)\\) is a point.",
    "parts": [
      [
        "Find the equation of the line through \\(P\\) perpendicular to \\(L\\).",
        2
      ]
    ],
    "hint": "Perpendicular gradients multiply to −1.",
    "steps": [
      "The gradient of a perpendicular line is \\(2\\) because \\(2(-\\tfrac12)=-1\\). [1]",
      "Use \\(y+2=2(x-3)\\), giving \\(y=2x-8\\). [1]"
    ],
    "answer": "\\(y=2x-8\\)",
    "misconception": "A perpendicular gradient is a negative reciprocal, not just a negative.",
    "reflection": "How do you know the new line passes through the given point?"
  },
  {
    "id": "W02-R3",
    "section": "R",
    "title": "Centre and radius",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "circles",
      "algebra"
    ],
    "stem": "A circle has equation \\(x^2+y^2-6x+4y-12=0\\).",
    "parts": [
      [
        "Find its centre and radius.",
        2
      ]
    ],
    "hint": "Group the x and y terms, and complete the square separately.",
    "steps": [
      "Complete both squares: \\((x-3)^2-9+(y+2)^2-4-12=0\\). [1]",
      "Thus \\((x-3)^2+(y+2)^2=25\\); centre \\((3,-2)\\), radius \\(5\\). [1]"
    ],
    "answer": "Centre \\((3,-2)\\); radius \\(5\\).",
    "misconception": "The signs of the centre coordinates are opposite to the signs inside the squared brackets.",
    "reflection": "How would you verify the radius using a point on the circle?"
  },
  {
    "id": "W02-R4",
    "section": "R",
    "title": "Circle with a diameter",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "circles",
      "midpoints"
    ],
    "stem": "The endpoints of a diameter are \\(A(-2,1)\\) and \\(B(4,5)\\).",
    "parts": [
      [
        "Find the equation of the circle.",
        2
      ]
    ],
    "hint": "The midpoint of a diameter is the centre.",
    "steps": [
      "The centre is the midpoint \\(\\bigl(\\tfrac{-2+4}{2},\\tfrac{1+5}{2}\\bigr)=(1,3)\\). [1]",
      "The squared radius is \\((-2-1)^2+(1-3)^2=9+4=13\\). Hence \\((x-1)^2+(y-3)^2=13\\). [1]"
    ],
    "answer": "\\((x-1)^2+(y-3)^2=13\\)",
    "misconception": "Use the radius (half the diameter), not the full diameter, in the circle equation.",
    "reflection": "How could you check both endpoints are on your circle?"
  },
  {
    "id": "W02-R5",
    "section": "R",
    "title": "Tangent to a circle",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "circles",
      "tangents"
    ],
    "stem": "The circle \\((x-1)^2+(y+2)^2=25\\) passes through \\(P(4,2)\\).",
    "parts": [
      [
        "Find an equation of the tangent at \\(P\\).",
        2
      ]
    ],
    "hint": "A circle tangent is perpendicular to the radius drawn to the touching point.",
    "steps": [
      "Centre \\(C(1,-2)\\); the radius \\(CP\\) has gradient \\(\\dfrac{2-(-2)}{4-1}=\\tfrac43\\). [1]",
      "The tangent gradient is \\(-\\tfrac34\\). Using \\(P\\), \\(y-2=-\\tfrac34(x-4)\\) or \\(3x+4y=20\\). [1]"
    ],
    "answer": "\\(3x+4y=20\\)",
    "misconception": "The tangent's gradient is not the same as the radius gradient.",
    "reflection": "Substitute P to check your line equation."
  },
  {
    "id": "W02-R6",
    "section": "R",
    "title": "Line–circle intersections",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "circles",
      "intersections"
    ],
    "stem": "A line \\(y=1\\) crosses the circle \\(x^2+y^2=10\\).",
    "parts": [
      [
        "Find all points of intersection.",
        2
      ]
    ],
    "hint": "Substitute the line equation into the circle equation.",
    "steps": [
      "Substitute \\(y=1\\): \\(x^2+1=10\\), so \\(x^2=9\\). [1]",
      "Hence \\(x=3\\) or \\(x=-3\\): points \\((3,1)\\) and \\((-3,1)\\). [1]"
    ],
    "answer": "\\((-3,1)\\) and \\((3,1)\\)",
    "misconception": "A positive square has two real square roots, not just one.",
    "reflection": "Why are two intersections possible here?"
  },
  {
    "id": "W02-R7",
    "section": "R",
    "title": "Vector combination",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "vectors",
      "components"
    ],
    "stem": "Two vectors are \\(\\mathbf a=\\binom{3}{-1}\\) and \\(\\mathbf b=\\binom{-2}{4}\\).",
    "parts": [
      [
        "Calculate \\(2\\mathbf a-\\mathbf b\\) in component form.",
        2
      ]
    ],
    "hint": "Multiply every component before subtracting.",
    "steps": [
      "Multiply first: \\(2\\mathbf a=\\binom{6}{-2}\\). [1]",
      "Subtract components: \\(\\binom{6}{-2}-\\binom{-2}{4}=\\binom8{-6}\\). [1]"
    ],
    "answer": "\\(\\binom8{-6}\\)",
    "misconception": "Subtracting a negative component means adding its magnitude.",
    "reflection": "How could you check your answer graphically?"
  },
  {
    "id": "W02-R8",
    "section": "R",
    "title": "Magnitude in three dimensions",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "vectors",
      "magnitude"
    ],
    "stem": "A vector is \\(\\mathbf v=2\\mathbf i-3\\mathbf j+6\\mathbf k\\).",
    "parts": [
      [
        "Find the magnitude of \\(\\mathbf v\\).",
        2
      ]
    ],
    "hint": "Square all three components and add before taking a square root.",
    "steps": [
      "\\(|\\mathbf v|=\\sqrt{2^2+(-3)^2+6^2}\\). [1]",
      "Thus \\(|\\mathbf v|=\\sqrt{4+9+36}=\\sqrt{49}=7\\). [1]"
    ],
    "answer": "\\(|\\mathbf v|=7\\)",
    "misconception": "The negative component contributes a positive square.",
    "reflection": "What would the length be if the third component were zero?"
  },
  {
    "id": "W02-R9",
    "section": "R",
    "title": "Unit direction vector",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "vectors",
      "unit vectors"
    ],
    "stem": "A vector is \\(\\mathbf u=3\\mathbf i+4\\mathbf j\\).",
    "parts": [
      [
        "Find the unit vector in the direction of \\(\\mathbf u\\).",
        2
      ]
    ],
    "hint": "A unit vector is the original vector divided by its magnitude.",
    "steps": [
      "The length is \\(|\\mathbf u|=\\sqrt{3^2+4^2}=5\\). [1]",
      "Divide by the length: \\(\\hat{\\mathbf u}=\\tfrac35\\mathbf i+\\tfrac45\\mathbf j\\). [1]"
    ],
    "answer": "\\(\\tfrac35\\mathbf i+\\tfrac45\\mathbf j\\)",
    "misconception": "Do not divide by the largest component or by the sum of the components.",
    "reflection": "How can you show the new vector has magnitude one?"
  },
  {
    "id": "W02-R10",
    "section": "R",
    "title": "Position vector and ratio",
    "marks": 2,
    "minutes": 3,
    "ao": {
      "AO1": 2
    },
    "topics": [
      "vectors",
      "position vectors"
    ],
    "stem": "The position vectors of \\(A\\) and \\(B\\) are \\(\\overrightarrow{OA}=\\binom12\\) and \\(\\overrightarrow{OB}=\\binom75\\). Point \\(P\\) divides \\(AB\\) internally with \\(AP:PB=1:2\\).",
    "parts": [
      [
        "Find the position vector \\(\\overrightarrow{OP}\\).",
        2
      ]
    ],
    "hint": "A 1:2 ratio puts P one-third of the way from A to B.",
    "steps": [
      "\\(\\overrightarrow{AB}=\\binom75-\\binom12=\\binom63\\) and \\(\\overrightarrow{AP}=\\tfrac13\\overrightarrow{AB}=\\binom21\\). [1]",
      "Therefore \\(\\overrightarrow{OP}=\\binom12+\\binom21=\\binom33\\). [1]"
    ],
    "answer": "\\(\\overrightarrow{OP}=\\binom33\\)",
    "misconception": "The ratio AP:PB = 1:2 does not put P halfway along AB.",
    "reflection": "Is P closer to A or B, as your answer suggests?"
  }
];
