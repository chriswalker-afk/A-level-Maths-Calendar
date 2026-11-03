export const week02ExpansionExtension = [
  {
    "id": "W02-X2",
    "section": "X",
    "title": "Every possible tangent in one parameter proof",
    "marks": 16,
    "ao": {
      "AO1": 1,
      "AO2": 12,
      "AO3": 3
    },
    "topics": [
      "generalised discriminant",
      "tangent loci",
      "circle diameter theorem",
      "vector geometry"
    ],
    "stem": "A circle has centre O at the origin and positive radius \\(r\\). An external point is \\(A=(a,0)\\) with \\(a>r>0\\). A line through A has gradient m. You are to derive a formula for *all* lines through A tangent to the circle, rather than choosing particular numerical values.",
    "parts": [
      [
        "Form an intersection quadratic and simplify its discriminant in terms of a, r and m.",
        4
      ],
      [
        "Hence determine both tangent gradients. Explain why \\(a>r\\) matters.",
        3
      ],
      [
        "Find the coordinates of both points of tangency and the common length of the tangent segments.",
        5
      ],
      [
        "Show that every tangency point lies on the circle whose diameter is OA, and use the two circle equations to recover its x-coordinate independently.",
        4
      ]
    ],
    "hint": "Substitute y=m(x−a) in x²+y²=r². Tangents correspond to a repeated quadratic root. The radius and tangent are perpendicular.",
    "steps": [
      "The line is \\(y=m(x-a)\\). [1] Substitution in \\(x^2+y^2=r^2\\) gives \\(x^2+m^2(x-a)^2=r^2\\). [1] Thus \\((1+m^2)x^2-2am^2x+(a^2m^2-r^2)=0\\). [1] Its discriminant simplifies to \\(\\Delta=4[r^2-(a^2-r^2)m^2]\\). [1]",
      "A tangent has \\(\\Delta=0\\), so \\(m^2=r^2/(a^2-r^2)\\). [2] As a>r, the denominator is positive and the two real slopes are \\(m=\\pm r/\\sqrt{a^2-r^2}\\). [1]",
      "The repeated x-root is \\(x=am^2/(1+m^2)=r^2/a\\). [2] Substituting in the line gives \\(y=m(r^2/a-a)=\\mp r\\sqrt{a^2-r^2}/a\\). [1] Therefore contacts are \\((r^2/a,\\pm r\\sqrt{a^2-r^2}/a)\\). [1] The tangent length is \\(\\sqrt{a^2-r^2}\\) using the right triangle with hypotenuse OA=a and radius OP=r. [1]",
      "The circle with diameter OA has centre \\((a/2,0)\\) and radius a/2, so its equation is \\((x-a/2)^2+y^2=(a/2)^2\\). [1] Hence \\(x^2+y^2=ax\\). [1] A tangent radius OP is perpendicular to AP, giving angle OPA=90°, so P lies on that diameter circle. [1] Intersecting with \\(x^2+y^2=r^2\\) gives \\(ax=r^2\\) and therefore \\(x=r^2/a\\), consistent with part (c). [1]"
    ],
    "answer": "\\(m=\\pm r/\\sqrt{a^2-r^2}\\); contact coordinates \\((r^2/a,\\pm r\\sqrt{a^2-r^2}/a)\\); tangent length \\(\\sqrt{a^2-r^2}\\).",
    "misconception": "The discriminant must vanish at tangency. Assuming m=0 because A lies on the x-axis would describe a secant here, not a tangent.",
    "reflection": "What degenerates when a=r, and why do no tangents through A exist if 0<a<r?"
  }
];
