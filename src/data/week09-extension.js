export const week09Extension = [
  {
    "id": "W09-X1",
    "section": "X",
    "title": "A finite geometric identity proves a bound for a logarithm",
    "marks": 14,
    "minutes": 40,
    "ao": {
      "AO1": 2,
      "AO2": 8,
      "AO3": 4
    },
    "topics": [
      "finite geometric sums",
      "integration",
      "proof of convergence",
      "alternating series bounds",
      "numerical certification"
    ],
    "stem": "Define \\(S_n=\\sum_{k=1}^n\\frac{(-1)^{k-1}}{k}\\) for positive integers n. Without assuming any remembered power-series formula for the logarithm, investigate how finite geometric sums and a definite integral can give rigorous bounds on \\(\\ln2\\). For the last part you may use the independently evaluated values \\(S_{300}\\approx0.6914832917\\) and \\(S_{301}\\approx0.6948055508\\).",
    "parts": [
      [
        "Starting from a finite geometric progression, prove that \\(\\frac1{1+x}=\\sum_{k=0}^{n-1}(-x)^k+\\frac{(-x)^n}{1+x}\\) for every \\(x\\ne-1\\).",
        2
      ],
      [
        "Integrate this identity from 0 to 1 to show \\(\\ln2=S_n+(-1)^nR_n\\), where \\(R_n=\\int_0^1\\frac{x^n}{1+x}\\,dx\\).",
        3
      ],
      [
        "Prove that \\(R_n>0\\) and deduce \\(S_{2m}<\\ln2<S_{2m+1}\\) for every positive integer \\(m\\).",
        3
      ],
      [
        "Prove the strict error bounds \\(\\frac1{2(n+1)}<R_n<\\frac1{n+1}\\) and use them to justify convergence of \\(S_n\\) to \\(\\ln2\\).",
        3
      ],
      [
        "Use the supplied values of \\(S_{300}\\) and \\(S_{301}\\) to certify \\(\\ln2\\) to two decimal places. Explain why simply noticing that two successive decimal approximations agree is not, in general, a proof of convergence.",
        3
      ]
    ],
    "hint": "For \\(r=-x\\), a finite geometric sum leaves a remainder \\(r^n/(1-r)\\). Integrate term by term only while the sum is finite; then use the sign and size of the integral remainder.",
    "steps": [
      "The finite geometric identity gives \\(\\sum_{k=0}^{n-1}(-x)^k=\\frac{1-(-x)^n}{1+x}\\) for \\(x\\ne-1\\). Rearranging, \\(\\frac1{1+x}=\\sum_{k=0}^{n-1}(-x)^k+\\frac{(-x)^n}{1+x}\\). This is exact for finite n and requires no interchange of an infinite series and an integral. [2]",
      "Integrate on \\(0\\le x\\le1\\). The left side is \\(\\int_0^1\\frac{dx}{1+x}=\\ln2\\). The finite sum integrates to \\(\\sum_{k=0}^{n-1}\\frac{(-1)^k}{k+1}=S_n\\). The remaining term gives \\((-1)^n\\int_0^1\\frac{x^n}{1+x}\\,dx=(-1)^nR_n\\), yielding the required identity. [3]",
      "For \\(0<x<1\\), \\(x^n/(1+x)>0\\), so \\(R_n>0\\). For even n, \\(\\ln2=S_n+R_n>S_n\\). For odd n, \\(\\ln2=S_n-R_n<S_n\\). Therefore \\(S_{2m}<\\ln2<S_{2m+1}\\). [3]",
      "For \\(0\\le x\\le1\\), \\(\\frac12\\le\\frac1{1+x}\\le1\\). Multiplying by non-negative \\(x^n\\) and integrating yields \\(\\frac12\\int_0^1x^n\\,dx<R_n<\\int_0^1x^n\\,dx\\), with strictness on a set of positive width. Since \\(\\int_0^1x^n\\,dx=1/(n+1)\\), the strict bounds are \\(\\frac1{2(n+1)}<R_n<\\frac1{n+1}\\). By squeezing, \\(R_n\\to0\\), hence \\(S_n\\to\\ln2\\). [3]",
      "The proven alternating bracket gives \\(0.6914832917\\approx S_{300}<\\ln2<S_{301}\\approx0.6948055508\\). Both bounds lie strictly inside the two-decimal rounding interval \\([0.685,0.695)\\); therefore \\(\\ln2=0.69\\) to two decimal places. Mere agreement of displayed iterates or partial sums can be deceptive without a convergence argument and a justified error or bracketing criterion. [3]"
    ],
    "answer": "\\(\\ln2=S_n+(-1)^n\\int_0^1\\frac{x^n}{1+x}\\,dx\\), alternating bounds and \\(1/[2(n+1)]<R_n<1/(n+1)\\); certified \\(\\ln2\\approx0.69\\) to 2 d.p.",
    "misconception": "Writing ln2 as an infinite alternating sum without explaining the remainder is not a proof. A rigorous accuracy claim needs an error bound or valid bracketing, not a coincidental run of matching digits.",
    "reflection": "How does the definite-integral remainder turn an informal infinite-series pattern into a justified limit and a numerical error guarantee?"
  }
];
