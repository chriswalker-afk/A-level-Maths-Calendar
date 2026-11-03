export const week04Timed = [
  {
    "id": "W04-T1",
    "section": "T",
    "title": "A horizontal tangent and a normal",
    "marks": 8,
    "minutes": 12,
    "ao": {
      "AO1": 3,
      "AO2": 5
    },
    "topics": [
      "product rule",
      "exponential curves",
      "stationary points",
      "tangent and normal"
    ],
    "stem": "The curve is \\(y=xe^{-x}\\), where \\(x\\) is real.",
    "parts": [
      [
        "Find \\(\\frac{dy}{dx}\\) and simplify.",
        2
      ],
      [
        "Find the only stationary point and state its exact coordinates.",
        2
      ],
      [
        "Use the second derivative to classify the stationary point.",
        2
      ],
      [
        "Find an equation of the normal to the curve at \\(x=0\\).",
        2
      ]
    ],
    "hint": "Use the product and chain rules. For the normal at x = 0, calculate both its point and the tangent gradient first.",
    "steps": [
      "Differentiate with the product rule: \\(y'=e^{-x}+x(-e^{-x})=e^{-x}(1-x)\\). [2]",
      "Because \\(e^{-x}>0\\) for all real \\(x\\), \\(y'=0\\) only when \\(x=1\\). Then \\(y=e^{-1}=\\frac1e\\), so the point is \\((1,\\frac1e)\\). [2]",
      "Differentiate again: \\(y''=-e^{-x}(1-x)-e^{-x}=e^{-x}(x-2)\\). At \\(x=1\\), \\(y''=-\\frac1e<0\\), so the stationary point is a local maximum. [2]",
      "At \\(x=0\\), the curve passes through \\((0,0)\\) with tangent gradient \\(y'(0)=1\\). The normal gradient is \\(-1\\), giving \\(y=-x\\). [2]"
    ],
    "answer": "Stationary maximum \\((1,\\frac1e)\\); normal at the origin \\(y=-x\\).",
    "misconception": "A horizontal tangent at x = 1 has a vertical normal there, but the question asks for the normal at x = 0, where the tangent gradient is 1.",
    "reflection": "How could you justify that the stationary point is also the global maximum without using a full sketch?"
  },
  {
    "id": "W04-T2",
    "section": "T",
    "title": "A rational curve with a constrained domain",
    "marks": 12,
    "minutes": 17,
    "ao": {
      "AO1": 4,
      "AO2": 8
    },
    "topics": [
      "quotient rule",
      "stationary points",
      "second derivative",
      "inequalities",
      "domains"
    ],
    "stem": "Let \\(f(x)=\\frac{x^2+1}{x+1}\\), with domain \\(x>-1\\).",
    "parts": [
      [
        "Show by algebraic division that \\(f(x)=x-1+\\frac{2}{x+1}\\).",
        2
      ],
      [
        "Find \\(f'(x)\\) in its simplest form.",
        2
      ],
      [
        "Find the only stationary point on the stated domain and classify it using the second derivative.",
        3
      ],
      [
        "Find the exact minimum value of \\(f\\) on the domain.",
        2
      ],
      [
        "Solve \\(f(x)\\le2\\) on the stated domain, giving exact endpoints.",
        3
      ]
    ],
    "hint": "Divide first to differentiate efficiently. For the inequality, multiply by x + 1 only after checking its sign throughout the stated domain.",
    "steps": [
      "Since \\(x^2+1=(x+1)(x-1)+2\\), dividing gives \\(f(x)=x-1+\\frac2{x+1}\\). [2]",
      "Differentiate: \\(f'(x)=1-\\frac2{(x+1)^2}\\). [2]",
      "Setting \\(f'(x)=0\\) gives \\((x+1)^2=2\\), hence \\(x=-1\\pm\\sqrt2\\). The domain \\(x>-1\\) admits only \\(x=\\sqrt2-1\\). Further \\(f''(x)=\\frac4{(x+1)^3}>0\\) on the domain, so it is a minimum. [3]",
      "Substitute into the divided expression: \\(f(\\sqrt2-1)=\\sqrt2-2+\\frac2{\\sqrt2}=2\\sqrt2-2\\). This is the minimum value, since the derivative switches from negative to positive and the function grows at either end of the domain. [2]",
      "Because \\(x+1>0\\), \\(f(x)\\le2\\) is equivalent to \\(x^2+1\\le2x+2\\), or \\(x^2-2x-1\\le0\\). Its roots are \\(x=1\\pm\\sqrt2\\), so \\(1-\\sqrt2\\le x\\le1+\\sqrt2\\). Both endpoints satisfy \\(x>-1\\). [3]"
    ],
    "answer": "Unique minimum at \\(x=\\sqrt2-1\\) with value \\(2\\sqrt2-2\\); \\(f(x)\\le2\\) for \\(1-\\sqrt2\\le x\\le1+\\sqrt2\\).",
    "misconception": "Do not include x = −1 − √2 as a stationary point: it lies outside the given domain. Multiplying inequalities by a variable denominator is only safe after establishing its sign.",
    "reflection": "Would the inequality answer change if the domain were x < −1? Explain the effect on the inequality direction."
  },
  {
    "id": "W04-T3",
    "section": "T",
    "title": "A non-parallel resultant force",
    "marks": 12,
    "minutes": 16,
    "ao": {
      "AO1": 3,
      "AO2": 4,
      "AO3": 5
    },
    "topics": [
      "force resolution",
      "Newton's second law",
      "vectors",
      "trigonometry",
      "equilibrium"
    ],
    "stem": "A particle of mass \\(2\\) kg moves freely on a smooth horizontal plane. Three horizontal forces act: \\(20\\) N directed \\(30^\\circ\\) north of east, \\(12\\) N due west, and \\(8\\) N due south. Take east as the \\(\\mathbf i\\) direction and north as \\(\\mathbf j\\).",
    "parts": [
      [
        "Resolve the three forces into components and show that their resultant is \\((10\\sqrt3-12)\\mathbf i+2\\mathbf j\\) newtons.",
        4
      ],
      [
        "Find the acceleration of the particle as an exact vector.",
        2
      ],
      [
        "Find the exact magnitude of this acceleration and the direction of acceleration to the nearest degree north of east.",
        4
      ],
      [
        "Find the force vector that would have to be added to bring the resultant force to zero.",
        2
      ]
    ],
    "hint": "The 20 N force has components 20cos(30°) east and 20sin(30°) north. Add all signed components before dividing by the mass.",
    "steps": [
      "The angled force has east component \\(20\\cos30^\\circ=10\\sqrt3\\) N and north component \\(20\\sin30^\\circ=10\\) N. The west and south forces contribute \\(-12\\) N and \\(-8\\) N to their respective components. The resultant is \\(\\mathbf R=(10\\sqrt3-12)\\mathbf i+(10-8)\\mathbf j=(10\\sqrt3-12)\\mathbf i+2\\mathbf j\\) N. [4]",
      "Newton's second law \\(\\mathbf R=m\\mathbf a\\) gives \\(\\mathbf a=(5\\sqrt3-6)\\mathbf i+\\mathbf j\\) m s⁻². [2]",
      "The acceleration magnitude is \\(|\\mathbf a|=\\sqrt{(5\\sqrt3-6)^2+1}=\\sqrt{112-60\\sqrt3}\\) m s⁻². Since \\(5\\sqrt3-6>0\\), the direction is north of east with \\(\\theta=\\tan^{-1}\\left(\\frac1{5\\sqrt3-6}\\right)\\approx21^\\circ\\) to the nearest degree. [4]",
      "The balancing force is \\(-\\mathbf R=(12-10\\sqrt3)\\mathbf i-2\\mathbf j\\) N. The resultant is then zero, so acceleration is zero (Newton's first law). [2]"
    ],
    "answer": "\\(\\mathbf a=(5\\sqrt3-6)\\mathbf i+\\mathbf j\\) m s⁻², magnitude \\(\\sqrt{112-60\\sqrt3}\\) m s⁻², direction approximately \\(21^\\circ\\) north of east; balancing force \\((12-10\\sqrt3)\\mathbf i-2\\mathbf j\\) N.",
    "misconception": "Subtracting the force magnitudes as ordinary numbers is incorrect when forces point in different directions. Resolve first, then find the resultant magnitude.",
    "reflection": "How would the direction change if the southward force increased from 8 N to 10 N?"
  }
];
