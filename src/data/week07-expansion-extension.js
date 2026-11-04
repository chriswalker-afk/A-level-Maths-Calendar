export const week07ExpansionExtension = [
  {
    "id": "W07-X2",
    "section": "X",
    "title": "Two sharp logarithmic bounds from derivatives",
    "marks": 16,
    "ao": {
      "AO2": 12,
      "AO3": 4
    },
    "topics": [
      "proof by monotonicity",
      "logarithmic inequalities",
      "exact area",
      "reciprocal transformation"
    ],
    "stem": "For every \\(x>0\\), define \\(L(x)=\\frac{2(x-1)}{x+1}\\) and \\(U(x)=\\frac{x-1}{\\sqrt{x}}\\). A mathematician conjectures that \\(L(x)\\le\\ln x\\le U(x)\\) for \\(x\\ge1\\).",
    "parts": [
      [
        "For \\(x\\ge1\\), prove \\(L(x)\\le\\ln x\\) and determine when equality holds.",
        3
      ],
      [
        "Prove the upper bound \\(\\ln x\\le U(x)\\) and determine when equality holds.",
        3
      ],
      [
        "Obtain two explicit radical/rational bounds for \\(\\ln2\\) without evaluating logarithms.",
        3
      ],
      [
        "Evaluate \\(I=\\int_1^2\\ln x\\,dx\\) and deduce a pair of exact bounds for this area.",
        3
      ],
      [
        "Determine the corresponding correct inequalities for \\(0<x<1\\) and justify the direction reversal.",
        4
      ]
    ],
    "hint": "Compare each proposed bound with ln x using a difference function. Squares in the derivatives determine the sign and make the bounds rigorous.",
    "steps": [
      "Let \\(F(x)=\\ln x-L(x)\\); \\(F'(x)=\\frac1x-\\frac4{(x+1)^2}=\\frac{(x-1)^2}{x(x+1)^2}\\ge0\\). [2] Since \\(F(1)=0\\), we have \\(F(x)\\ge0\\) for \\(x\\ge1\\), strictly positive for \\(x>1\\). [1]",
      "Define \\(G(x)=U(x)-\\ln x=\\sqrt{x}-x^{-1/2}-\\ln x\\). [1] Its derivative is \\(G'(x)=\\frac{(\\sqrt{x}-1)^2}{2x^{3/2}}\\ge0\\). [1] Because \\(G(1)=0\\), the inequality follows, with equality only at \\(x=1\\). [1]",
      "Substitute \\(x=2\\) into both inequalities. [1] The lower expression is \\(L(2)=2/3\\). [1] The upper is \\(U(2)=1/\\sqrt2\\), so \\(\\frac23<\\ln2<\\frac1{\\sqrt2}\\). [1]",
      "Integration by parts gives \\(I=[x\\ln x-x]_1^2=2\\ln2-1\\). [1] The lower logarithmic bound gives \\(I>2(2/3)-1=1/3\\). [1] The upper gives \\(I<2/\\sqrt2-1=\\sqrt2-1\\). [1]",
      "Both \\(F'(x)\\) and \\(G'(x)\\) remain nonnegative for \\(0<x<1\\). [1] As \\(F(1)=G(1)=0\\), both functions are strictly negative to the left of 1. [1] Thus \\(\\ln x<L(x)\\) and \\(U(x)<\\ln x\\) for \\(0<x<1\\). [1] Combining them yields \\(U(x)<\\ln x<L(x)\\), with equality only at \\(x=1\\) when the non-strict inequalities are extended. [1]"
    ],
    "answer": "For \\(x>1\\): \\(\\frac{2(x-1)}{x+1}<\\ln x<\\frac{x-1}{\\sqrt{x}}\\); \\(\\frac13<\\int_1^2\\ln x\\,dx<\\sqrt2-1\\). Reverse the bounds for \\(0<x<1\\).",
    "misconception": "A graph or a handful of calculator values is not a proof for all positive x; derive inequalities from derivative signs and a known equality point.",
    "reflection": "What feature of the derivative proofs makes the bounds sharp at x=1 rather than merely approximate?"
  }
];
