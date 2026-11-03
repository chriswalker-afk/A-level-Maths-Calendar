export const week04PureProblems = [
  {
    "id": "W04-P1",
    "section": "P",
    "title": "A family of cubics with moving turning points",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO2": 8
    },
    "topics": [
      "stationary points",
      "parameters",
      "factorisation",
      "classification",
      "proof"
    ],
    "stem": "For a real parameter \\(a\\), the cubic curve is \\(y=x^3-3ax^2+3(a^2-1)x\\).",
    "parts": [
      [
        "Show that \\(\\frac{dy}{dx}=3[(x-a)^2-1]\\) and hence find the \\(x\\)-coordinates of both stationary points in terms of \\(a\\).",
        3
      ],
      [
        "Classify both stationary points and give their \\(y\\)-coordinates in terms of \\(a\\).",
        3
      ],
      [
        "Find every exact value of \\(a\\) for which the local maximum lies on the \\(x\\)-axis.",
        2
      ]
    ],
    "hint": "Complete the square in the derivative. For the last part, substitute the x-coordinate of the local maximum and factor the resulting cubic in a.",
    "steps": [
      "Differentiate: \\(y'=3x^2-6ax+3(a^2-1)=3[(x-a)^2-1]\\). Setting \\(y'=0\\) gives \\(x-a=±1\\), so the stationary parameters are \\(x=a-1\\) and \\(x=a+1\\). [3]",
      "Since \\(y''=6(x-a)\\), at \\(x=a-1\\) it is \\(-6\\) (local maximum), and at \\(x=a+1\\) it is \\(6\\) (local minimum). Put \\(u=x-a\\) to write \\(y=u^3-3u+a^3-3a\\). Thus maximum ordinate \\(a^3-3a+2\\) and minimum ordinate \\(a^3-3a-2\\). [3]",
      "For the maximum to lie on the x-axis, \\(a^3-3a+2=0\\). Factorise \\(a^3-3a+2=(a-1)^2(a+2)\\). Therefore \\(a=1\\) or \\(a=-2\\). The stationary-point classification is unchanged at these parameter values. [2]"
    ],
    "answer": "Maximum at \\((a-1,a^3-3a+2)\\), minimum at \\((a+1,a^3-3a-2)\\); maximum touches the x-axis when \\(a=1\\) or \\(a=-2\\).",
    "misconception": "Do not classify points from their x-positions alone. The sign of y'' gives the local behaviour even while the parameter a changes.",
    "reflection": "How does translating the graph horizontally and vertically explain the constant four-unit difference between its turning-point heights?"
  },
  {
    "id": "W04-P2",
    "section": "P",
    "title": "Tangent and intercepts of an implicit curve",
    "marks": 10,
    "minutes": 24,
    "ao": {
      "AO2": 10
    },
    "topics": [
      "implicit differentiation",
      "tangent equations",
      "coordinate geometry",
      "discriminant",
      "proof"
    ],
    "stem": "The curve \\(x^2+2xy+3y^2=18\\) passes through \\(P(3,1)\\). A tangent is drawn to the curve at \\(P\\).",
    "parts": [
      [
        "Use implicit differentiation to show that \\(\\frac{dy}{dx}=-\\frac{x+y}{x+3y}\\), where the denominator is non-zero.",
        3
      ],
      [
        "Find the exact equation of the tangent at \\(P\\).",
        2
      ],
      [
        "Find where the tangent meets both coordinate axes.",
        2
      ],
      [
        "Calculate the exact area of the triangle enclosed by the tangent and the positive coordinate axes.",
        2
      ],
      [
        "Substitute the tangent equation into the original curve to confirm that it has exactly one point of intersection with the curve.",
        1
      ]
    ],
    "hint": "Differentiate xy with the product rule. The tangent gradient comes from the implicit derivative at (3,1). For the final check, substitute y = (9 − 2x)/3 and simplify.",
    "steps": [
      "Differentiate both sides: \\(2x+2y+2x\\frac{dy}{dx}+6y\\frac{dy}{dx}=0\\). Rearranging \\(2(x+3y)\\frac{dy}{dx}=-2(x+y)\\) yields \\(\\frac{dy}{dx}=-\\frac{x+y}{x+3y}\\). [3]",
      "At \\(P(3,1)\\), \\(\\frac{dy}{dx}=-\\frac{3+1}{3+3}=-\\frac23\\). The tangent is \\(y-1=-\\frac23(x-3)\\) or \\(2x+3y=9\\). [2]",
      "At \\(y=0\\), \\(x=\\frac92\\), giving \\((\\frac92,0)\\). At \\(x=0\\), \\(y=3\\), giving \\((0,3)\\). [2]",
      "The area between the positive axes and the tangent is \\(A=\\frac12\\left(\\frac92\\right)(3)=\\frac{27}{4}\\) square units. [2]",
      "Substitute \\(y=\\frac{9-2x}{3}\\) into the curve. Clearing denominators and simplifying gives \\(9(x-3)^2=0\\). The repeated root \\(x=3\\) gives \\(y=1\\); there is exactly one distinct intersection. [1]"
    ],
    "answer": "Tangent \\(2x+3y=9\\); axis intercepts \\((\\frac92,0)\\) and \\((0,3)\\); enclosed area \\(\\frac{27}{4}\\) square units.",
    "misconception": "An implicit tangent is found from the actual derivative of the implicit relation, not by treating y as a constant.",
    "reflection": "Why is a repeated intersection root the algebraic signature of tangency here?"
  },
  {
    "id": "W04-P3",
    "section": "P",
    "title": "Horizontal, vertical and curved behaviour",
    "marks": 12,
    "minutes": 25,
    "ao": {
      "AO2": 12
    },
    "topics": [
      "parametric curves",
      "first derivative",
      "second derivative",
      "stationary points",
      "vertical tangent"
    ],
    "stem": "The parametric curve is given by \\(x=t^2+t,\\qquad y=t^3-3t\\), where \\(t\\) takes all real values. The curve may have more than one branch.",
    "parts": [
      [
        "Find \\(\\frac{dy}{dx}\\) in terms of \\(t\\), stating where the expression is defined.",
        3
      ],
      [
        "Find the coordinates of all points with horizontal tangents.",
        3
      ],
      [
        "Show that \\(\\frac{d^2y}{dx^2}=\\frac{6(t^2+t+1)}{(2t+1)^3}\\) and use it to classify the two horizontal stationary points.",
        3
      ],
      [
        "Find the parameter and coordinates where the curve has a vertical tangent.",
        2
      ],
      [
        "Explain why the vertical tangent is not a further horizontal stationary point.",
        1
      ]
    ],
    "hint": "Compute dx/dt and dy/dt separately. For the second derivative, differentiate dy/dx with respect to t and divide by dx/dt. A vertical tangent occurs when dx/dt vanishes but dy/dt does not.",
    "steps": [
      "\\(\\frac{dx}{dt}=2t+1,\\quad \\frac{dy}{dt}=3t^2-3\\). Therefore \\(\\frac{dy}{dx}=\\frac{3(t^2-1)}{2t+1}\\), provided \\(t\\ne-\\frac12\\). [3]",
      "A horizontal tangent requires \\(\\frac{dy}{dt}=0\\) and \\(\\frac{dx}{dt}\\ne0\\). Thus \\(t=-1,1\\). At \\(t=-1\\), \\((x,y)=(0,2)\\); at \\(t=1\\), \\((x,y)=(2,-2)\\). Both have non-zero dx/dt. [3]",
      "Differentiating the quotient with respect to t gives \\(\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)=\\frac{6(t^2+t+1)}{(2t+1)^2}\\). Dividing by \\(\\frac{dx}{dt}=2t+1\\) gives \\(\\frac{d^2y}{dx^2}=\\frac{6(t^2+t+1)}{(2t+1)^3}\\). At \\(t=-1\\) it is \\(-6\\) so \\((0,2)\\) is a local maximum on that branch; at \\(t=1\\) it is \\(\\frac23\\) so \\((2,-2)\\) is a local minimum. [3]",
      "At \\(t=-\\frac12\\), \\(\\frac{dx}{dt}=0\\) but \\(\\frac{dy}{dt}=3(\\frac14-1)=-\\frac94\\ne0\\). The point is \\((x,y)=(-\\frac14,\\frac{11}{8})\\) and the vertical tangent is \\(x=-\\frac14\\). [2]",
      "A horizontal tangent requires \\(\\frac{dy}{dt}=0\\) with \\(\\frac{dx}{dt}\\ne0\\). Here the opposite occurs: dx/dt = 0 and dy/dt is nonzero, so the tangent is vertical. [1]"
    ],
    "answer": "Horizontal stationary points \\((0,2)\\) (local maximum) and \\((2,-2)\\) (local minimum); vertical tangent \\(x=-\\frac14\\) at \\((-\\frac14,\\frac{11}{8})\\).",
    "misconception": "Never declare a stationary point from a vanishing dx/dt alone. Check dy/dt and whether the required slope is zero or undefined.",
    "reflection": "Could the parametric curve have two different y-values for one x-value? Explain why that matters when sketching."
  }
];
