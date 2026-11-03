export const week05ExpansionExtension = [
  {
    "id": "W05-X2",
    "section": "X",
    "title": "A recurrence hidden inside exponential integration",
    "marks": 16,
    "ao": {
      "AO1": 1,
      "AO2": 12,
      "AO3": 3
    },
    "topics": [
      "integration by parts",
      "recurrence relations",
      "integral inequalities",
      "error awareness"
    ],
    "stem": "For every integer \\(n\\ge0\\), define \\(I_n=\\int_0^1x^ne^x\\,dx\\). All integrals are exact.",
    "parts": [
      [
        "Prove by integration by parts that for \\(n\\ge1\\), \\(I_n=e-nI_{n-1}\\).",
        3
      ],
      [
        "Find the exact values of \\(I_0,I_1,I_2\\).",
        3
      ],
      [
        "Use the recurrence to obtain \\(I_3\\) and explain why the answer must be positive.",
        3
      ],
      [
        "Prove for every n≥0 the strict bounds \\(\\frac1{n+1}<I_n<\\frac e{n+1}\\).",
        4
      ],
      [
        "Prove \\(I_{n+1}<I_n\\) and explain why repeatedly using the recurrence with rounded decimals can be dangerous for large n.",
        3
      ]
    ],
    "hint": "Use u=x^n, dv=e^x dx. For bounds compare 1<e^x<e on the open interval (0,1).",
    "steps": [
      "Integration by parts with \\(u=x^n,\\ dv=e^xdx\\) gives \\(I_n=[x^ne^x]_0^1-n\\int_0^1x^{n-1}e^x\\,dx\\). [2] For n≥1 the boundary term equals e, giving \\(I_n=e-nI_{n-1}\\). [1]",
      "\\(I_0=[e^x]_0^1=e-1\\). [1] The recurrence gives \\(I_1=e-I_0=1\\). [1] Similarly \\(I_2=e-2I_1=e-2\\). [1]",
      "\\(I_3=e-3I_2=e-3(e-2)=6-2e\\). [2] Since the defining integrand is positive for 0<x<1, the integral must be positive, consistent with \\(6-2e>0\\). [1]",
      "For 0<x<1, \\(1<e^x<e\\). [1] Multiplying by \\(x^n>0\\) preserves both inequalities. [1] Integrate: \\(\\int_0^1x^n\\,dx<I_n<e\\int_0^1x^n\\,dx\\). [1] Since \\(\\int_0^1x^n\\,dx=1/(n+1)\\) the strict bounds follow. [1]",
      "For 0<x<1, \\(x^{n+1}<x^n\\); multiplying by e^x and integrating gives \\(I_{n+1}<I_n\\). [2] The recurrence \\(e-nI_{n-1}\\) subtracts two nearby quantities for large n, so small rounding errors can be greatly amplified by multiplication by n, potentially producing a negative approximation despite the proven positive integral. [1]"
    ],
    "answer": "\\(I_n=e-nI_{n-1}\\); \\(I_0=e-1,\\ I_1=1,\\ I_2=e-2,\\ I_3=6-2e\\); bounds \\(1/(n+1)<I_n<e/(n+1)\\) and decreasing positive sequence.",
    "misconception": "A numerical recurrence can become unstable even when the underlying exact integral is strictly positive; a negative rounded result is evidence of numerical error.",
    "reflection": "Which method, direct positive integral or repeated subtraction, better preserves positivity when n is large, and why?"
  }
];
