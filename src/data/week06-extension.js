export const week06Extension = [
  {
    "id": "W06-X1",
    "section": "X",
    "title": "A weighted geometric series and its exact remainder",
    "marks": 14,
    "minutes": 40,
    "ao": {
      "AO1": 2,
      "AO2": 8,
      "AO3": 4
    },
    "topics": [
      "finite GP proof",
      "differentiating a sum",
      "infinite series",
      "exact remainder",
      "binomial coefficients"
    ],
    "stem": "For \\(r\\ne1\\) and positive integer \\(N\\), define \\(G_N(r)=\\sum_{k=0}^{N}r^k\\) and \\(H_N(r)=\\sum_{k=1}^{N}kr^{k-1}\\). This challenge links finite geometric sums, differentiation and binomial coefficients.",
    "parts": [
      [
        "Derive the finite geometric identity \\(G_N(r)=\\frac{1-r^{N+1}}{1-r}\\) without quoting a formula for the answer.",
        3
      ],
      [
        "By differentiating the finite identity, prove \\(H_N(r)=\\frac{1-(N+1)r^N+Nr^{N+1}}{(1-r)^2}\\).",
        4
      ],
      [
        "For \\(|r|<1\\), take the limit as \\(N\\to\\infty\\) to find \\(\\sum_{k=1}^{\\infty}kr^{k-1}\\), explaining why the extra numerator terms vanish.",
        2
      ],
      [
        "For \\(r=\\frac13\\), evaluate \\(H_5(r)\\) exactly and find the exact difference between the infinite sum and this five-term partial sum.",
        3
      ],
      [
        "Put \\(r=2x\\) in your infinite-series result. Find the coefficient of \\(x^4\\) in \\((1-2x)^{-2}\\) and state the open interval of validity.",
        2
      ]
    ],
    "hint": "Multiply the finite sum \\(G_N\\) by \\(r\\) and subtract. Unlike a divergent infinite series, this finite polynomial can always be differentiated term by term.",
    "steps": [
      "Multiply the finite sum by r: \\(rG_N=r+r^2+\\cdots+r^{N+1}\\). Subtract from \\(G_N=1+r+\\cdots+r^N\\) to obtain \\((1-r)G_N=1-r^{N+1}\\). For \\(r\\ne1\\), divide to obtain \\(G_N=\\frac{1-r^{N+1}}{1-r}\\). [3]",
      "Since \\(G_N\\) is a polynomial, differentiating term by term gives \\(G_N'(r)=1+2r+3r^2+\\cdots+Nr^{N-1}=H_N(r)\\). By the quotient rule, \\(H_N=\\frac{-(N+1)r^N(1-r)+(1-r^{N+1})}{(1-r)^2}\\). Expand the numerator to obtain \\(H_N=\\frac{1-(N+1)r^N+Nr^{N+1}}{(1-r)^2}\\). [4]",
      "For fixed \\(|r|<1\\), both \\(r^N\\to0\\) and \\(Nr^N\\to0\\) as \\(N\\to\\infty\\) (exponential decay dominates linear growth). Therefore \\(\\sum_{k=1}^{\\infty}kr^{k-1}=\\frac{1}{(1-r)^2}\\). [2]",
      "For \\(r=\\frac13\\), the infinite sum is \\(\\frac1{(2/3)^2}=\\frac94\\). The omitted tail after five terms is \\(\\frac{6(1/3)^5-5(1/3)^6}{(1-1/3)^2}=\\frac{13}{324}\\). Hence \\(H_5(\\frac13)=\\frac94-\\frac{13}{324}=\\frac{179}{81}\\), and the exact error is \\(\\frac{13}{324}\\). [3]",
      "Set \\(r=2x\\). Then \\((1-2x)^{-2}=\\sum_{k=1}^{\\infty}k(2x)^{k-1}\\) for \\(|2x|<1\\). The term in \\(x^4\\) has \\(k=5\\), giving coefficient \\(5\\cdot2^4=80\\). Validity is \\(-\\frac12<x<\\frac12\\). [2]"
    ],
    "answer": "\\(H_N(r)=\\frac{1-(N+1)r^N+Nr^{N+1}}{(1-r)^2}\\), \\(H_\\infty(r)=\\frac1{(1-r)^2}\\) for \\(|r|<1\\); \\(H_5(1/3)=\\frac{179}{81}\\), exact tail \\(\\frac{13}{324}\\), and \\([x^4](1-2x)^{-2}=80\\) for \\(|x|<\\frac12\\).",
    "misconception": "Differentiation of each finite polynomial is legitimate, but exchanging differentiation and an infinite sum needs a convergent interval. The remainder is not just the sixth term.",
    "reflection": "What does the factor k in the differentiated series do to the size of the omitted tail compared with an ordinary geometric tail?"
  }
];
