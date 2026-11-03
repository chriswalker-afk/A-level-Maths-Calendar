export const week04Extension = [
  {
    "id": "W04-X1",
    "section": "X",
    "title": "One curve, two gradients at the same point",
    "marks": 14,
    "minutes": 40,
    "ao": {
      "AO1": 3,
      "AO2": 11
    },
    "topics": [
      "parametric differentiation",
      "implicit curves",
      "branch intersections",
      "second derivatives",
      "geometry"
    ],
    "stem": "A curve is defined for all real \\(t\\) by the parametric equations \\(x=t^2-1,\\qquad y=t^3-3t\\). The curve has two different branches passing through one of its points.",
    "parts": [
      [
        "Eliminate the parameter to show that \\(y^2=(x+1)(x-2)^2\\). State the restriction on \\(x\\) coming from the parametric definition.",
        3
      ],
      [
        "Find the coordinates of the two horizontal stationary points and classify each as a local maximum or minimum on its branch.",
        3
      ],
      [
        "Show that two distinct parameter values give the same point \\((2,0)\\). Find the equations of both tangent lines there.",
        4
      ],
      [
        "Find the coordinates and equation of the vertical tangent to the curve.",
        2
      ],
      [
        "Explain why trying to find a single value of \\(\\frac{dy}{dx}\\) at \\((2,0)\\) by implicit differentiation alone is insufficient.",
        2
      ]
    ],
    "hint": "From \\(x=t^2-1\\) obtain \\(t^2=x+1\\). Express \\(y\\) as \\(t(x-2)\\). For gradients use \\(\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}\\) separately on each branch.",
    "steps": [
      "Since \\(t^2=x+1\\) and \\(y=t(t^2-3)=t(x-2)\\), squaring gives \\(y^2=t^2(x-2)^2=(x+1)(x-2)^2\\). Because \\(t\\) is real, \\(x=t^2-1\\ge-1\\). [3]",
      "The derivatives are \\(\\frac{dx}{dt}=2t\\), \\(\\frac{dy}{dt}=3t^2-3\\), so for \\(t\\ne0\\), \\(\\frac{dy}{dx}=\\frac{3(t^2-1)}{2t}\\). This is zero at \\(t=-1,1\\), giving respectively \\((0,2)\\) and \\((0,-2)\\). Further \\(\\frac{d^2y}{dx^2}=\\frac{3(t^2+1)}{4t^3}\\). It is negative at \\(t=-1\\) so \\((0,2)\\) is a local maximum on that branch; positive at \\(t=1\\) so \\((0,-2)\\) is a local minimum. [3]",
      "The point \\((2,0)\\) occurs whenever \\(t^2-1=2\\) and \\(t(t^2-3)=0\\), hence for the two distinct parameter values \\(t=\\sqrt3\\) and \\(t=-\\sqrt3\\). The slopes are \\(\\left.\\frac{dy}{dx}\\right|_{t=\\sqrt3}=\\frac{3(3-1)}{2\\sqrt3}=\\sqrt3\\) and \\(\\left.\\frac{dy}{dx}\\right|_{t=-\\sqrt3}=-\\sqrt3\\). Thus the two tangent lines are \\(y=\\sqrt3(x-2)\\) and \\(y=-\\sqrt3(x-2)\\). [4]",
      "At \\(t=0\\), \\(\\frac{dx}{dt}=0\\) while \\(\\frac{dy}{dt}=-3\\ne0\\). The point is \\((-1,0)\\), and the tangent is vertical with equation \\(x=-1\\). [2]",
      "Differentiate the implicit curve: \\(2y\\frac{dy}{dx}=3x(x-2)\\). At \\((2,0)\\), this gives only \\(0=0\\) and cannot determine a unique gradient. The parametrisation shows two different branches meet there, each with its own tangent; implicit differentiation is ambiguous at this singular point. [2]"
    ],
    "answer": "Implicit relation \\(y^2=(x+1)(x-2)^2,\\ x\\ge-1\\). Horizontal stationary points \\((0,2)\\) (local maximum) and \\((0,-2)\\) (local minimum). At \\((2,0)\\), tangents \\(y=\\pm\\sqrt3(x-2)\\). Vertical tangent at \\((-1,0)\\) is \\(x=-1\\).",
    "misconception": "A curve given implicitly can pass through one point more than once. At a branch intersection, the tangent gradient need not have a single value.",
    "reflection": "What does the sign of the second derivative at t = ±1 tell you about the appearance of the two branches close to x = 0?"
  }
];
