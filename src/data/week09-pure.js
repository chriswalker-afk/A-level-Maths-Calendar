export const week09PureProblems = [
  {
    "id": "W09-P1",
    "section": "P",
    "title": "A circle, a chord and a repeating design",
    "marks": 8,
    "minutes": 21,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "coordinate geometry",
      "cosine rule",
      "exact surds",
      "geometric series"
    ],
    "stem": "The circle \\(x^2+y^2=25\\) is cut by the line \\(y=x+1\\) at distinct points \\(A\\) and \\(B\\). The centre is \\(O=(0,0)\\). A designer uses chord \\(AB\\) as the first segment of a sequence of decorative strips; each new strip is half the length of the preceding one.",
    "parts": [
      [
        "Find the coordinates of both intersection points exactly.",
        2
      ],
      [
        "Find the exact length of chord \\(AB\\).",
        2
      ],
      [
        "Use the cosine rule in triangle \\(AOB\\) to find \\(\\cos\\angle AOB\\).",
        2
      ],
      [
        "Calculate the total length of all decorative strips if the pattern continues indefinitely and explain why the total exists.",
        2
      ]
    ],
    "hint": "Substitute the line into the circle, then use the distance formula. For the angle, the two radii are length 5 and the chord is the opposite side.",
    "steps": [
      "Substitute \\(y=x+1\\) into the circle: \\(x^2+(x+1)^2=25\\); hence \\(2x^2+2x-24=0\\), or \\((x+4)(x-3)=0\\). The intersections are \\(A=(3,4)\\) and \\(B=(-4,-3)\\) in either order. [2]",
      "Apply the distance formula: \\(AB=\\sqrt{(3+4)^2+(4+3)^2}=\\sqrt{98}=7\\sqrt2\\). [2]",
      "Since \\(OA=OB=5\\), the cosine rule gives \\((7\\sqrt2)^2=5^2+5^2-2(5)(5)\\cos\\angle AOB\\). Thus \\(98=50-50\\cos\\angle AOB\\) and \\(\\cos\\angle AOB=-\\frac{24}{25}\\) (an obtuse central angle). [2]",
      "Strip lengths form a GP with \\(a=7\\sqrt2\\) and \\(r=\\frac12\\). Because \\(|r|<1\\), \\(S_\\infty=\\frac{7\\sqrt2}{1-1/2}=14\\sqrt2\\) length units. [2]"
    ],
    "answer": "Intersections \\((3,4),(-4,-3)\\); \\(AB=7\\sqrt2\\), \\(\\cos\\angle AOB=-24/25\\), total strips \\(14\\sqrt2\\) units.",
    "misconception": "Both circle points must be substituted into the line as well as the circle. The decorative GP describes strip lengths, not repeated chords of one circle.",
    "reflection": "What would happen to the total strip length if the scale factor were increased from 1/2 to 1?"
  },
  {
    "id": "W09-P2",
    "section": "P",
    "title": "An area and two numerical solutions from one curve",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO2": 8,
      "AO3": 2
    },
    "topics": [
      "logarithmic differentiation",
      "optimisation",
      "definite integral",
      "Newton–Raphson",
      "root counts"
    ],
    "stem": "Consider the curve \\(y=f(x)=\\frac{\\ln x}{x}\\) for \\(x>0\\). A horizontal line \\(y=\\frac15\\) intersects the curve twice.",
    "parts": [
      [
        "Differentiate \\(f(x)\\) and state the sign of \\(f'(x)\\) either side of its stationary point.",
        2
      ],
      [
        "Find the stationary point exactly and show it is a maximum.",
        2
      ],
      [
        "Evaluate \\(\\displaystyle\\int_1^{e^2}\\frac{\\ln x}{x}\\,dx\\) exactly.",
        2
      ],
      [
        "Justify that \\(f(x)=\\frac15\\) has exactly two positive solutions and identify brackets of length \\(0.1\\) and \\(1\\) respectively.",
        2
      ],
      [
        "Use two Newton–Raphson iterations from \\(x_0=12\\) to estimate the larger solution to four decimal places.",
        2
      ]
    ],
    "hint": "Use the quotient rule for the derivative; the substitution \\(u=\\ln x\\) helps with the area. Newton must be applied to \\(F(x)=\\ln x/x-1/5\\) and its derivative.",
    "steps": [
      "By the quotient rule \\(f'(x)=\\frac{1-\\ln x}{x^2}\\). Since \\(x^2>0\\), the derivative is positive for \\(0<x<e\\) and negative for \\(x>e\\). [2]",
      "The only stationary point satisfies \\(\\ln x=1\\), hence \\(x=e\\) and \\(f(e)=1/e\\). The derivative changes from positive to negative, so this is a maximum. [2]",
      "Substitute \\(u=\\ln x,\\ du=dx/x\\): \\(\\int_1^{e^2}\\frac{\\ln x}{x}\\,dx=\\left[\\frac12(\\ln x)^2\\right]_1^{e^2}=\\frac12(2)^2=2\\). [2]",
      "The curve has \\(f(1)=0\\), \\(f(e)=1/e>1/5\\), and \\(f(x)\\to0\\) as \\(x\\to\\infty\\). Its strict increase then strict decrease proves precisely two intersections with \\(1/5\\). Numerically the smaller lies in \\((1.2,1.3)\\) and the larger in \\((12,13)\\); the signs of \\(f(x)-1/5\\) change over each. [2]",
      "Take \\(F(x)=\\frac{\\ln x}{x}-\\frac15\\) and \\(F'(x)=\\frac{1-\\ln x}{x^2}\\). Newton's formula \\(x_{n+1}=x_n-\\frac{F(x_n)}{F'(x_n)}\\) gives \\(x_1=12.686157475\\ldots\\) and \\(x_2=12.713167890\\ldots\\) from \\(x_0=12\\). A further value \\(x_3=12.713206789\\ldots\\) confirms the larger solution rounds to \\(12.7132\\). [2]"
    ],
    "answer": "\\(f'(x)=(1-\\ln x)/x^2\\), maximum \\((e,e^{-1})\\), exact area \\(2\\), two solutions in \\((1.2,1.3)\\) and \\((12,13)\\); larger root \\(12.7132\\).",
    "misconception": "A valid Newton update does not establish the number of roots. First use domain, monotonicity and boundary behaviour to justify why there are two.",
    "reflection": "Why is the same curve suitable for both exact integration and numerical solution of an equation?"
  },
  {
    "id": "W09-P3",
    "section": "P",
    "title": "One parametric curve: gradient, tangent and area",
    "marks": 12,
    "minutes": 24,
    "ao": {
      "AO1": 2,
      "AO2": 8,
      "AO3": 2
    },
    "topics": [
      "parametric differentiation",
      "trigonometric identities",
      "tangent geometry",
      "parametric area",
      "endpoint behaviour"
    ],
    "stem": "A plane curve is described parametrically by \\(x=t+\\sin t,\\quad y=1-\\cos t\\) for \\(0\\le t\\le\\pi\\). The relevant region is between the curve and the \\(x\\)-axis, bounded by its two endpoints.",
    "parts": [
      [
        "Find \\(dx/dt\\) and \\(dy/dt\\). Explain why \\(x\\) increases as \\(t\\) goes from 0 towards \\(\\pi\\).",
        2
      ],
      [
        "Show that for \\(0<t<\\pi\\), \\(\\frac{dy}{dx}=\\tan(\\frac t2)\\).",
        2
      ],
      [
        "Find the coordinates and exact equation of the tangent at \\(t=\\frac\\pi2\\).",
        3
      ],
      [
        "Evaluate the exact area between the curve and the \\(x\\)-axis for \\(0\\le t\\le\\pi\\).",
        3
      ],
      [
        "Explain why the tangent becomes vertical at the endpoint \\(t=\\pi\\) even though the formula for \\(dy/dx\\) is undefined there.",
        2
      ]
    ],
    "hint": "Find \\(dy/dx=(dy/dt)/(dx/dt)\\) then use the sine half-angle identity. The area is \\(\\int y\\,dx=\\int_0^\\pi y(t)x'(t)\\,dt\\).",
    "steps": [
      "Differentiate \\(x=t+\\sin t\\) and \\(y=1-\\cos t\\) to obtain \\(x'(t)=1+\\cos t\\), \\(y'(t)=\\sin t\\). Since \\(1+\\cos t>0\\) for \\(0\\le t<\\pi\\), the x-coordinate increases throughout the interior. [2]",
      "For \\(0<t<\\pi\\), \\(\\frac{dy}{dx}=\\frac{\\sin t}{1+\\cos t}=\\frac{2\\sin(t/2)\\cos(t/2)}{2\\cos^2(t/2)}=\\tan(t/2)\\). [2]",
      "At \\(t=\\pi/2\\), \\(x=\\pi/2+1\\), \\(y=1\\), and slope \\(\\tan(\\pi/4)=1\\). Hence \\(y-1=x-(\\pi/2+1)\\) or \\(y=x-\\frac\\pi2\\). [3]",
      "The non-negative area is \\(\\int_0^\\pi(1-\\cos t)(1+\\cos t)\\,dt=\\int_0^\\pi\\sin^2t\\,dt\\). Using \\(\\sin^2t=\\frac12(1-\\cos2t)\\), the area is \\(\\left[\\frac t2-\\frac{\\sin2t}{4}\\right]_0^\\pi=\\frac\\pi2\\) square units. [3]",
      "As \\(t\\to\\pi^-\\), \\(\\tan(t/2)\\to+\\infty\\), so the tangent approaches a vertical line at \\((x,y)=(\\pi,2)\\). At precisely \\(t=\\pi\\), both parameter derivatives vanish, so the gradient formula is \\(0/0\\) and must be interpreted using a limit. [2]"
    ],
    "answer": "\\(x'=1+\\cos t,\\ y'=\\sin t\\), \\(dy/dx=\\tan(t/2)\\), tangent \\(y=x-\\pi/2\\), enclosed area \\(\\pi/2\\), limiting vertical tangent at \\((\\pi,2)\\).",
    "misconception": "At t=pi, a zero numerator and denominator in the parametric gradient do not prove a horizontal tangent. Investigate its one-sided limit.",
    "reflection": "How does the parametric area integral avoid the need to rearrange this curve into y=f(x)?"
  }
];
