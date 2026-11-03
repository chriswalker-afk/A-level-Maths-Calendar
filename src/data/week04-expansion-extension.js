export const week04ExpansionExtension = [
  {
    "id": "W04-X2",
    "section": "X",
    "title": "An ellipse, a tangent and a moving optimum",
    "marks": 16,
    "ao": {
      "AO1": 2,
      "AO2": 11,
      "AO3": 3
    },
    "topics": [
      "implicit curve proof",
      "tangent discriminant",
      "connected rates",
      "sharp optimisation",
      "normal gradients"
    ],
    "stem": "Consider the ellipse \\(x^2+2y^2=18\\) in the first quadrant, including its axes. Point \\(P=(4,1)\\) lies on it. At one instant a particle travels on the ellipse with \\(dx/dt=-0.2\\ \\mathrm{m\\,s^{-1}}\\) (coordinates in metres).",
    "parts": [
      [
        "Differentiate implicitly to obtain the gradient and write the tangent at P in the form \\(ax+by=c\\).",
        3
      ],
      [
        "Substitute your tangent line into the ellipse equation to prove that it has precisely one intersection with the ellipse.",
        3
      ],
      [
        "At P find \\(dy/dt\\) and the rate of change of \\(xy\\). State the appropriate units.",
        3
      ],
      [
        "Prove a sharp upper bound for xy at all first-quadrant points of the ellipse, without using calculus. State the point of equality.",
        4
      ],
      [
        "Find the first-quadrant point whose tangent has gradient \\(-1\\), and obtain that tangent's exact equation.",
        3
      ]
    ],
    "hint": "Implicit differentiation gives x + 2y(dy/dx)=0. For the sharp bound, consider (x−√2 y)²≥0.",
    "steps": [
      "Differentiate \\(2x+4y\\,dy/dx=0\\), so \\(dy/dx=-x/(2y)\\). [2] At P the slope is −2; the tangent \\(y-1=-2(x-4)\\) simplifies to \\(2x+y=9\\). [1]",
      "Substitute \\(y=9-2x\\) to obtain \\(x^2+2(9-2x)^2=18\\). [1] Simplifying gives \\(9x^2-72x+144=9(x-4)^2=0\\). [1] Thus x=4 only, with y=1; the intersection is repeated and unique. [1]",
      "Differentiate the ellipse with respect to time: \\(2x\\,dx/dt+4y\\,dy/dt=0\\). [1] At P, \\(dy/dt=-(4/2)(-0.2)=0.4\\ \\mathrm{m\\,s^{-1}}\\). [1] Product rule gives \\(d(xy)/dt=y\\,dx/dt+x\\,dy/dt=-0.2+4(0.4)=1.4\\ \\mathrm{m^2\\,s^{-1}}\\). [1]",
      "Because \\((x-\\sqrt2y)^2\\ge0\\), \\(x^2+2y^2\\ge2\\sqrt2xy\\). [2] The left side is 18, so \\(xy\\le9/\\sqrt2\\). [1] Equality occurs where \\(x=\\sqrt2y\\), giving \\((x,y)=(3,3/\\sqrt2)\\); it lies on the ellipse. [1]",
      "A tangent gradient −1 requires \\(x/(2y)=1\\), or \\(x=2y\\). [1] Substitution yields \\(6y^2=18\\), so \\((x,y)=(2\\sqrt3,\\sqrt3)\\) in the first quadrant. [1] Its tangent is \\(x+y=3\\sqrt3\\). [1]"
    ],
    "answer": "Tangent at P \\(2x+y=9\\); rates \\(dy/dt=0.4\\ \\mathrm{m\\,s^{-1}}\\), \\(d(xy)/dt=1.4\\ \\mathrm{m^2\\,s^{-1}}\\); maximum \\(xy=9/\\sqrt2\\) at \\((3,3/\\sqrt2)\\); slope−1 tangent \\(x+y=3\\sqrt3\\).",
    "misconception": "An ellipse has no single globally valid explicit y(x) without selecting a branch; a tangent calculation can be done implicitly and checked algebraically.",
    "reflection": "Compare proving the maximum product by a square inequality with setting its derivative to zero."
  }
];
