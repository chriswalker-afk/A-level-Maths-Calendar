export const week01ExpansionExtension = [
  {
    "id": "W01-X2",
    "section": "X",
    "title": "A sharp inequality for every rectangular design",
    "marks": 16,
    "ao": {
      "AO1": 1,
      "AO2": 11,
      "AO3": 4
    },
    "topics": [
      "parameter inequalities",
      "proof with squares",
      "rational constraints",
      "design optimisation"
    ],
    "stem": "A rectangular garden has positive side lengths \\(x\\) and \\(A/x\\) metres, so its area is the fixed positive number \\(A\\) square metres. The perimeter is \\(P=2(x+A/x)\\). A supplier imposes additional constraints on a garden of area \\(36\\ \\mathrm{m^2}\\).",
    "parts": [
      [
        "Without using calculus, prove for all positive A and x that \\(P\\ge4\\sqrt A\\), and state precisely when equality occurs.",
        4
      ],
      [
        "For area 36, find all side lengths x for which the perimeter is at most \\(26\\) metres.",
        4
      ],
      [
        "The supplier also requires the side called 'width', x, to be at least \\(7.2\\) metres. Determine the minimum possible perimeter satisfying both restrictions and give the dimensions.",
        4
      ],
      [
        "Generalise the first two parts: show that a rectangle of fixed area A can have a perimeter at most p only if \\(p^2\\ge16A\\), and explain why the condition is also sufficient for positive A and p.",
        4
      ]
    ],
    "hint": "Start from (x−√A)²≥0. For fixed area 36, multiply the perimeter inequality by the positive number x; use the resulting quadratic's roots.",
    "steps": [
      "As \\((x-\\sqrt A)^2\\ge0\\), \\(x^2+A\\ge2x\\sqrt A\\). [2] Divide by x>0 to obtain \\(x+A/x\\ge2\\sqrt A\\) and hence \\(P\\ge4\\sqrt A\\). [1] Equality requires \\(x=\\sqrt A\\), so both sides are equal and the garden is square. [1]",
      "For A=36, \\(2(x+36/x)\\le26\\) becomes \\(x+36/x\\le13\\). [1] Multiply by x>0: \\(x^2-13x+36\\le0\\). [1] Factor \\((x-4)(x-9)\\le0\\). [1] Thus \\(4\\le x\\le9\\) metres. [1]",
      "The width condition restricts the interval further to \\(7.2\\le x\\le9\\). [1] \\(P'(x)=2(1-36/x^2)>0\\) for x>6, so P increases throughout the feasible range. [1] Its minimum occurs at x=7.2; the other side is \\(36/7.2=5\\). [1] The minimum perimeter is \\(2(7.2+5)=24.4\\) metres, meeting the perimeter cap. [1]",
      "For arbitrary area A, \\(2(x+A/x)\\le p\\) implies \\(2x^2-px+2A\\le0\\) after multiplying by x>0. [1] This quadratic has a permissible real interval only if its discriminant is nonnegative, namely \\(p^2-16A\\ge0\\). [1] Conversely, if \\(p\\ge4\\sqrt A\\), the square \\(x=\\sqrt A\\) has perimeter \\(4\\sqrt A\\le p\\), so an admissible rectangle exists. [2]"
    ],
    "answer": "\\(P\\ge4\\sqrt A\\); for A=36 and P≤26, \\(4\\le x\\le9\\); with width≥7.2, optimum \\(7.2\\mathrm m\\times5\\mathrm m\\) and perimeter \\(24.4\\mathrm m\\); general feasibility \\(p\\ge4\\sqrt A\\).",
    "misconception": "You may only multiply an inequality by x without reversing its sign because the model explicitly requires x>0.",
    "reflection": "Explain how the inequality proof and the discriminant argument establish the same general feasibility condition by different methods."
  }
];
