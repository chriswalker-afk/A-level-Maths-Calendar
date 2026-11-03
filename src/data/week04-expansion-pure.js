export const week04ExpansionPure = [
  {
    "id": "W04-P4",
    "section": "P",
    "title": "A symmetric quartic hides four different behaviours",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "factorised derivative",
      "stationary classification",
      "points of inflection",
      "graph symmetry"
    ],
    "stem": "The curve \\(y=x^2(x-2)^2\\) is defined for every real x. Its apparent symmetry is useful but does not replace a derivative argument.",
    "parts": [
      [
        "Differentiate and factorise \\(dy/dx\\) completely; find the three stationary points.",
        3
      ],
      [
        "Classify each stationary point and explain where the curve is increasing and decreasing.",
        3
      ],
      [
        "Find the two points of inflection exactly, and justify that the concavity changes at both.",
        3
      ],
      [
        "Explain why the line \\(x=1\\) is an axis of symmetry.",
        1
      ]
    ],
    "hint": "Rewrite x(x−2) as (x−1)²−1. A factored first derivative gives all turning points; use the sign of the second derivative for inflections.",
    "steps": [
      "\\(y=x^4-4x^3+4x^2\\), hence \\(y'=4x^3-12x^2+8x=4x(x-1)(x-2)\\). [1] Thus x=0,1,2. [1] The points are \\((0,0),(1,1),(2,0)\\). [1]",
      "For x increasing through 0,1,2 the derivative signs alternate \\(-,+,-,+\\) on the four intervals. [1] Therefore (0,0) and (2,0) are minima, while (1,1) is a local maximum. [1] The curve decreases on \\((-\\infty,0)\\) and (1,2), and increases on (0,1) and \\((2,\\infty)\\). [1]",
      "\\(y''=12x^2-24x+8=12(x-1)^2-4\\). [1] Setting this to zero gives \\(x=1\\pm1/\\sqrt3\\). At either value \\(y=((x-1)^2-1)^2=(-2/3)^2=4/9\\). [1] The expression y'' switches from positive to negative and back at these simple roots, so both are genuine inflection points. [1]",
      "As \\(y=[(x-1)^2-1]^2\\) depends only on \\((x-1)^2\\), replacing x by \\(2-x\\) leaves y unchanged, so x=1 is the axis of symmetry. [1]"
    ],
    "answer": "Stationary points \\((0,0),(1,1),(2,0)\\); inflections \\((1\\pm1/\\sqrt3,4/9)\\); symmetry axis \\(x=1\\).",
    "misconception": "A point where y''=0 is not automatically an inflection point: check for a change in concavity.",
    "reflection": "How does the second derivative's sign explain why one maximum can lie between two minima?"
  },
  {
    "id": "W04-P5",
    "section": "P",
    "title": "A sliding ladder changes both height and area",
    "marks": 10,
    "ao": {
      "AO1": 1,
      "AO2": 4,
      "AO3": 5
    },
    "topics": [
      "connected rates of change",
      "implicit differentiation",
      "geometric area",
      "constrained optimisation"
    ],
    "stem": "A rigid ladder of length \\(10\\ \\mathrm m\\) rests between the ground and a vertical wall. Its foot is x metres from the wall and its top is y metres above the ground. At an instant when \\(x=6\\) metres the foot is moving outwards at \\(0.6\\ \\mathrm{m\\,s^{-1}}\\). The associated right-triangle area is \\(A=xy/2\\).",
    "parts": [
      [
        "Write the geometric constraint and determine the height at the specified instant.",
        2
      ],
      [
        "Use differentiation with respect to time to find the vertical velocity of the ladder's top, including its sign and units.",
        3
      ],
      [
        "Find \\(dA/dt\\) at this instant and interpret whether the triangular area is increasing or decreasing.",
        3
      ],
      [
        "Prove that the largest possible triangle area is \\(25\\ \\mathrm{m^2}\\) and state the ladder position at equality.",
        2
      ]
    ],
    "hint": "Start from x²+y²=100. Differentiate both sides with respect to time rather than treating y as constant.",
    "steps": [
      "\\(x^2+y^2=100\\) by Pythagoras. [1] At x=6, \\(y=\\sqrt{100-36}=8\\ \\mathrm m\\). [1]",
      "Implicitly differentiating with respect to time gives \\(2x\\,dx/dt+2y\\,dy/dt=0\\). [2] Therefore \\(dy/dt=-(6/8)(0.6)=-0.45\\ \\mathrm{m\\,s^{-1}}\\); the top descends. [1]",
      "Use the product rule: \\(dA/dt=\\frac12(y\\,dx/dt+x\\,dy/dt)\\). [1] At the given instant this is \\(\\frac12[8(0.6)+6(-0.45)]=1.05\\ \\mathrm{m^2\\,s^{-1}}\\). [1] Because it is positive, the area is increasing. [1]",
      "From \\((x-y)^2\\ge0\\), \\(x^2+y^2\\ge2xy\\); so \\(A=xy/2\\le100/4=25\\ \\mathrm{m^2}\\). [1] Equality occurs at \\(x=y=5\\sqrt2\\ \\mathrm m\\) (both positive and consistent with the 10 m ladder). [1]"
    ],
    "answer": "At x=6, y=8 m; \\(dy/dt=-0.45\\ \\mathrm{m\\,s^{-1}}\\), \\(dA/dt=1.05\\ \\mathrm{m^2\\,s^{-1}}\\); maximum area 25 m² at \\(x=y=5\\sqrt2\\).",
    "misconception": "The height is not a constant when the foot slides; use related rates and keep the negative sign on the descending top.",
    "reflection": "Will the triangular area continue to increase after the foot has moved beyond 5√2 metres?"
  },
  {
    "id": "W04-P6",
    "section": "P",
    "title": "A tangent to an implicitly defined ellipse",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 8
    },
    "topics": [
      "implicit differentiation",
      "tangent and normal",
      "axis intersections",
      "tangent uniqueness"
    ],
    "stem": "The curve \\(x^2+xy+y^2=7\\) contains the point \\(P=(1,2)\\). A student wants to use a quadratic discriminant to check that a calculated tangent does not cut the curve at a second point.",
    "parts": [
      [
        "Differentiate implicitly to obtain \\(dy/dx\\) and evaluate the gradient at P.",
        3
      ],
      [
        "Find the tangent equation at P and both of its coordinate-axis intercepts.",
        3
      ],
      [
        "Find an equation of the normal at P.",
        2
      ],
      [
        "Substitute the tangent equation into the original curve to prove that P is the only point of intersection.",
        2
      ]
    ],
    "hint": "Differentiate xy using the product rule. For the final check, eliminate y using your tangent's equation.",
    "steps": [
      "Differentiate to give \\(2x+y+x\\,y'+2y\\,y'=0\\). [1] Thus \\(y'=-(2x+y)/(x+2y)\\). [1] At (1,2), the gradient is \\(-4/5\\). [1]",
      "\\(y-2=-\\frac45(x-1)\\) simplifies to \\(4x+5y=14\\). [2] Its intercepts are \\((7/2,0)\\) and \\((0,14/5)\\). [1]",
      "The normal gradient is the negative reciprocal \\(5/4\\). [1] Its equation is \\(y-2=\\frac54(x-1)\\) or \\(5x-4y=-3\\). [1]",
      "Substituting \\(y=(14-4x)/5\\) into the ellipse and multiplying by 25 yields \\(21x^2-42x+21=0\\). [1] This is \\(21(x-1)^2=0\\), with sole root x=1 and y=2; the point of intersection is repeated, proving tangency. [1]"
    ],
    "answer": "\\(y'=-(2x+y)/(x+2y)\\); tangent \\(4x+5y=14\\); normal \\(5x-4y=-3\\); unique contact P.",
    "misconception": "The normal is perpendicular to the tangent; it is not obtained by simply negating the tangent gradient.",
    "reflection": "How would the repeated intersection root change if a nearby parallel line were used instead?"
  },
  {
    "id": "W04-P7",
    "section": "P",
    "title": "An exponential hump and its changing concavity",
    "marks": 10,
    "ao": {
      "AO1": 2,
      "AO2": 7,
      "AO3": 1
    },
    "topics": [
      "product rule",
      "stationary behaviour",
      "inflection",
      "number of roots",
      "tangent lines"
    ],
    "stem": "The curve \\(f(x)=xe^{-x}\\) is defined for \\(x\\ge0\\). A horizontal threshold at height c intersects the curve a different number of times depending on c.",
    "parts": [
      [
        "Determine the unique stationary point and classify it, giving its coordinates.",
        3
      ],
      [
        "Find the point of inflection and explain the concavity on either side.",
        3
      ],
      [
        "For \\(0<c<1/e\\), prove that the equation \\(f(x)=c\\) has exactly two positive solutions.",
        2
      ],
      [
        "Find the tangent at \\(x=2\\) and its y-intercept exactly.",
        2
      ]
    ],
    "hint": "Factor out e^(−x) in both derivatives, then consider the sign of f' on (0,1) and (1,∞).",
    "steps": [
      "\\(f'(x)=e^{-x}(1-x)\\) by the product rule. [1] The only stationary x is 1, where \\(f(1)=1/e\\). [1] Because f' changes from positive to negative there, it is a maximum. [1]",
      "\\(f''(x)=e^{-x}(x-2)\\). [1] The inflection point is \\((2,2e^{-2})\\). [1] f'' is negative on (0,2) and positive on (2,∞), so the concavity genuinely changes. [1]",
      "The continuous curve rises strictly from f(0)=0 to f(1)=1/e and then decreases strictly towards 0 as \\(x\\to\\infty\\). [1] Every c strictly between these values is taken once on (0,1) and once on (1,∞), hence exactly twice. [1]",
      "At x=2 the gradient is \\(-e^{-2}\\) and the point is \\((2,2e^{-2})\\). [1] Thus \\(y-2e^{-2}=-e^{-2}(x-2)\\) or \\(y=e^{-2}(4-x)\\); its y-intercept is \\(4e^{-2}\\). [1]"
    ],
    "answer": "Maximum \\((1,e^{-1})\\), inflection \\((2,2e^{-2})\\), two positive roots of f(x)=c when 0<c<1/e, tangent at x=2 is \\(y=e^{-2}(4-x)\\).",
    "misconception": "f'' changing sign at x=2 marks an inflection, not an additional stationary point (f'(2)≠0).",
    "reflection": "Why can an exponential curve approach zero without meeting a positive level a third time?"
  }
];
