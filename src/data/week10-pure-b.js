export const week10PureB = [
  {
    "id": "W10-P5",
    "section": "P",
    "paper": "pure",
    "title": "A growing sequence and an approximation",
    "marks": 8,
    "minutes": 9,
    "ao": {
      "AO1": 3,
      "AO2": 5
    },
    "topics": [
      "geometric series",
      "non-integer binomial expansion",
      "validity and approximation"
    ],
    "stem": "A sequence has first term \\(3\\) and common ratio \\(2\\). Separately, a sensor correction is modelled for small x by \\(g(x)=(1+x)^{-1/2}\\).",
    "parts": [
      [
        "Find the sum of the first five terms of the sequence.",
        2
      ],
      [
        "Find the least positive integer n for which its first n terms sum to \\(381\\).",
        2
      ],
      [
        "Find the first three terms of the binomial expansion of \\(g(x)\\) and state its interval of convergence.",
        3
      ],
      [
        "Use those terms to estimate \\(g(0.1)\\).",
        1
      ]
    ],
    "hint": "Use the finite geometric sum formula for the first two parts. For the expansion use n = −1/2 and u = x.",
    "steps": [
      "For a GP, \\(S_n=3\\frac{2^n-1}{2-1}=3(2^n-1)\\). [1] Hence \\(S_5=3(32-1)=93\\). [1]",
      "Solve \\(3(2^n-1)=381\\), so \\(2^n=128=2^7\\). [1] Therefore \\(n=7\\). [1]",
      "Use \\((1+x)^r=1+rx+\\frac{r(r-1)}{2}x^2+\\cdots\\) with \\(r=-\\frac12\\). [1] This gives \\(g(x)=1-\\frac12x+\\frac38x^2+\\cdots\\). [1] The infinite expansion is valid when \\(|x|<1\\). [1]",
      "Substitute \\(x=0.1\\): \\(g(0.1)\\approx1-0.05+\\frac38(0.01)=0.95375\\). [1]"
    ],
    "answer": "\\(S_5=93\\), \\(n=7\\), \\((1+x)^{-1/2}=1-\\frac x2+\\frac{3x^2}{8}+\\cdots\\) for \\(|x|<1\\), estimate \\(0.95375\\).",
    "misconception": "A negative fractional binomial exponent produces an infinite series; the condition |x|<1 is essential for using that expansion.",
    "reflection": "Why is the first omitted term relevant when claiming an approximation is accurate?"
  },
  {
    "id": "W10-P6",
    "section": "P",
    "paper": "pure",
    "title": "A decaying quantity and its rate",
    "marks": 8,
    "minutes": 10,
    "ao": {
      "AO1": 2,
      "AO2": 4,
      "AO3": 2
    },
    "topics": [
      "exponential models",
      "logarithms",
      "half-life",
      "instantaneous rate"
    ],
    "stem": "The quantity remaining in a chemical reaction is modelled by \\(Q(t)=12e^{-kt}\\) grams, \\(t\\ge0\\) hours, where \\(k>0\\). A measurement shows \\(Q(4)=3\\) grams.",
    "parts": [
      [
        "Find an exact expression for the decay constant k.",
        3
      ],
      [
        "State the half-life implied by the model.",
        1
      ],
      [
        "Find the exact time threshold beyond which the quantity is strictly below \\(1\\) gram.",
        2
      ],
      [
        "Find \\(Q'(4)\\) and interpret its sign and units.",
        2
      ]
    ],
    "hint": "Divide the reading Q(4) by the initial value; natural logarithms determine k.",
    "steps": [
      "From \\(12e^{-4k}=3\\), \\(e^{-4k}=\\frac14\\). [1] Taking natural logs, \\(-4k=-\\ln4\\), [1] so \\(k=\\frac{\\ln4}{4}=\\frac{\\ln2}{2}\\) per hour. [1]",
      "The factor halves every \\(T=\\ln2/k=2\\) hours. [1]",
      "Solve \\(12e^{-kt}<1\\), giving \\(e^{-kt}<\\frac1{12}\\). [1] Since k>0, \\(t>\\frac{\\ln12}{k}=\\frac{2\\ln12}{\\ln2}\\approx7.170\\) hours. [1]",
      "Differentiate \\(Q'(t)=-12ke^{-kt}\\). [1] At t=4, \\(Q'(4)=-3k=-\\frac{3\\ln2}{2}\\ \\mathrm{g\\,h^{-1}}\\). The negative sign denotes a decrease in mass. [1]"
    ],
    "answer": "\\(k=\\ln2/2\\ \\mathrm{h^{-1}}\\), half-life \\(2\\ \\mathrm h\\), below 1 g when \\(t>2\\ln12/\\ln2\\approx7.170\\ \\mathrm h\\), \\(Q'(4)=-3\\ln2/2\\ \\mathrm{g\\,h^{-1}}\\).",
    "misconception": "The half-life is not four hours: the data show the amount quarters over four hours, which means two half-lives.",
    "reflection": "How many new measurements would you collect before relying on this model outside the observed time window?"
  },
  {
    "id": "W10-P7",
    "section": "P",
    "paper": "pure",
    "title": "Two tangents to an implicit curve",
    "marks": 9,
    "minutes": 11,
    "ao": {
      "AO1": 2,
      "AO2": 7
    },
    "topics": [
      "implicit differentiation",
      "tangent and normal",
      "curve geometry"
    ],
    "stem": "The equation \\(x^2+xy+y^2=7\\) defines a curve through the point \\(P=(1,2)\\).",
    "parts": [
      [
        "Verify that P lies on the curve.",
        1
      ],
      [
        "Differentiate implicitly to obtain a formula for \\(dy/dx\\) in terms of x and y.",
        4
      ],
      [
        "Find an exact equation of the tangent at P.",
        2
      ],
      [
        "Find an exact equation of the normal at P.",
        2
      ]
    ],
    "hint": "Differentiate xy using the product rule; terms containing y-prime must be collected.",
    "steps": [
      "At \\((1,2)\\), the left side is \\(1^2+1(2)+2^2=7\\), so P is on the curve. [1]",
      "Differentiate with respect to x: \\(2x+\\frac{d}{dx}(xy)+2y\\frac{dy}{dx}=0\\). [1] The product rule gives \\(\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}\\). [1] Therefore \\((x+2y)\\frac{dy}{dx}=-(2x+y)\\), [1] giving \\(\\frac{dy}{dx}=-\\frac{2x+y}{x+2y}\\) whenever the denominator is nonzero. [1]",
      "At P, \\(\\frac{dy}{dx}=-\\frac{4}{5}\\). [1] Thus the tangent is \\(y-2=-\\frac45(x-1)\\). [1]",
      "The normal is perpendicular to the tangent, so its gradient is \\(\\frac54\\). [1] Its equation is \\(y-2=\\frac54(x-1)\\). [1]"
    ],
    "answer": "\\(\\frac{dy}{dx}=-(2x+y)/(x+2y)\\), tangent \\(y-2=-\\frac45(x-1)\\), normal \\(y-2=\\frac54(x-1)\\).",
    "misconception": "The derivative of xy is y + x y-prime, not y alone: y is itself a function of x.",
    "reflection": "What would it mean geometrically if x+2y vanished at a point on this curve?"
  },
  {
    "id": "W10-P8",
    "section": "P",
    "paper": "pure",
    "title": "Two integrals requiring different decisions",
    "marks": 8,
    "minutes": 10,
    "ao": {
      "AO1": 3,
      "AO2": 5
    },
    "topics": [
      "reverse chain rule",
      "integration by parts",
      "definite integrals"
    ],
    "stem": "Two integrals arise in different models. Assume \\(x\\ge0\\) where necessary.",
    "parts": [
      [
        "Find \\(\\displaystyle\\int\\frac{3x^2}{1+x^3}\\,dx\\).",
        2
      ],
      [
        "Use integration by parts to find \\(\\displaystyle\\int xe^{2x}\\,dx\\).",
        4
      ],
      [
        "Hence evaluate \\(\\displaystyle\\int_0^1xe^{2x}\\,dx\\) exactly.",
        2
      ]
    ],
    "hint": "For the rational-looking expression, recognise the derivative of the denominator. For the product, differentiate x and integrate e^{2x}.",
    "steps": [
      "Substitute \\(u=1+x^3\\), giving \\(du=3x^2\\,dx\\). [1] Hence \\(\\int\\frac{3x^2}{1+x^3}\\,dx=\\ln(1+x^3)+C\\) for x≥0. [1]",
      "Choose \\(u=x,\\ dv=e^{2x}\\,dx\\), so \\(du=dx,\\ v=\\frac12e^{2x}\\). [2] Then \\(\\int xe^{2x}\\,dx=\\frac12xe^{2x}-\\frac12\\int e^{2x}\\,dx\\). [1] This simplifies to \\(\\frac12xe^{2x}-\\frac14e^{2x}+C=\\frac{e^{2x}}4(2x-1)+C\\). [1]",
      "Use the result as an antiderivative and substitute the limits. [1] \\(\\left[\\frac{e^{2x}}4(2x-1)\\right]_0^1=\\frac{e^2}{4}-(-\\frac14)=\\frac{e^2+1}{4}\\). [1]"
    ],
    "answer": "\\(\\ln(1+x^3)+C\\), \\(\\frac{e^{2x}}4(2x-1)+C\\), definite integral \\((e^2+1)/4\\).",
    "misconception": "Integration by parts introduces the subtractive integral; dropping its minus sign changes both the indefinite and definite results.",
    "reflection": "How can differentiating your final antiderivatives detect a missing factor or sign?"
  }
];
