export const week06ExpansionExtension = [
  {
    "id": "W06-X2",
    "section": "X",
    "title": "Two binomial identities and a surprising square-sum",
    "marks": 16,
    "ao": {
      "AO1": 2,
      "AO2": 11,
      "AO3": 3
    },
    "topics": [
      "binomial theorem",
      "differentiation and sigma identities",
      "weighted binomial sums",
      "combinatorial proof"
    ],
    "stem": "Let \\(n\\ge2\\) be an integer. For \\(0\\le k\\le n\\), write \\(\\binom nk\\) for the standard binomial coefficient. The following identities must be *proved*, not quoted without justification.",
    "parts": [
      [
        "Use the binomial theorem and differentiation to show \\(\\sum_{k=0}^n k\\binom nk=n2^{n-1}\\).",
        4
      ],
      [
        "Differentiate again (or argue otherwise) to show \\(\\sum_{k=0}^nk^2\\binom nk=n(n+1)2^{n-2}\\).",
        4
      ],
      [
        "Use your earlier identities to show that \\(\\sum_{k=0}^n(2k-n)^2\\binom nk=n2^n\\). Explain why both sides are positive for n≥2.",
        4
      ],
      [
        "Prove exactly the identity \\(\\sum_{k=0}^n\\binom nk^2=\\binom{2n}n\\) and explain its combinatorial meaning.",
        4
      ]
    ],
    "hint": "Differentiate (1+x)^n=ΣC(n,k)x^k and substitute x=1. For squared coefficients, compare the coefficient of x^n in (1+x)^n(1+x)^n.",
    "steps": [
      "From \\((1+x)^n=\\sum_{k=0}^n\\binom nk x^k\\), differentiate to get \\(n(1+x)^{n-1}=\\sum_{k=0}^nk\\binom nk x^{k-1}\\). [2] Setting x=1 yields \\(\\sum_{k=0}^nk\\binom nk=n2^{n-1}\\). [2]",
      "Differentiate a second time: \\(n(n-1)(1+x)^{n-2}=\\sum_{k=0}^nk(k-1)\\binom nk x^{k-2}\\). [1] At x=1, \\(\\sum k(k-1)\\binom nk=n(n-1)2^{n-2}\\). [1] Use \\(k^2=k(k-1)+k\\) and part (a). [1] The sum is \\(n(n-1)2^{n-2}+n2^{n-1}=n(n+1)2^{n-2}\\). [1]",
      "Expand \\((2k-n)^2=4k^2-4nk+n^2\\) inside the sum. [1] Then use \\(\\sum\\binom nk=2^n\\), \\(\\sum k\\binom nk=n2^{n-1}\\) and \\(\\sum k^2\\binom nk=n(n+1)2^{n-2}\\). [1] The result simplifies to \\(n(n+1)2^n-2n^2\\cdot2^n+n^2\\cdot2^n=n2^n\\). [1] Every squared term is nonnegative and the term k=0 is positive because n≥2; also n2^n>0. [1]",
      "The coefficient of \\(x^n\\) in \\((1+x)^n(1+x)^n\\) is \\(\\sum_{k=0}^n\\binom nk\\binom n{n-k}\\). [2] Since \\(\\binom n{n-k}=\\binom nk\\), this equals the sum of squares; the product is also \\((1+x)^{2n}\\), whose x^n coefficient is \\(\\binom{2n}n\\). [1] Combinatorially it counts ways to select n items from two distinct groups of n by splitting the selection between groups. [1]"
    ],
    "answer": "\\(\\sum k\\binom nk=n2^{n-1},\\quad\\sum k^2\\binom nk=n(n+1)2^{n-2},\\quad\\sum(2k-n)^2\\binom nk=n2^n,\\quad\\sum\\binom nk^2=\\binom{2n}n\\).",
    "misconception": "To obtain k² from the second derivative, add the first-derivative sum: k(k−1) is not the same as k².",
    "reflection": "How can differentiating a binomial identity reveal exact sums that look difficult to evaluate term by term?"
  }
];
