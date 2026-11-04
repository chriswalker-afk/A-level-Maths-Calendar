export const week09ExpansionExtension = [
  {
    "id": "W09-X2",
    "section": "X",
    "title": "A cubic parameter controls the number of real roots",
    "marks": 16,
    "ao": {
      "AO2": 12,
      "AO3": 4
    },
    "topics": [
      "stationary-point classification",
      "root-count proof",
      "discriminant alternatives",
      "Newton–Raphson",
      "exact integration"
    ],
    "stem": "For a real parameter \\(a\\ge0\\), consider \\(f_a(x)=x^3-3ax+2\\). Determine how many distinct real solutions \\(f_a(x)=0\\) can have. The limiting parameter case is also used to calculate an exact area.",
    "parts": [
      [
        "For \\(a>0\\), find both stationary points and the corresponding function values.",
        3
      ],
      [
        "Determine the number of distinct real roots when \\(0\\le a<1\\), \\(a=1\\), and \\(a>1\\).",
        4
      ],
      [
        "For \\(a=2\\), prove the three roots lie in \\((-3,-2)\\), \\((0,1)\\) and \\((2,3)\\).",
        3
      ],
      [
        "Starting from \\(x_0=2.5\\), perform three Newton steps for the largest root when \\(a=2\\).",
        3
      ],
      [
        "For \\(a=1\\), find exactly the area between \\(y=f_1(x)\\) and the \\(x\\)-axis on \\([0,1]\\).",
        3
      ]
    ],
    "hint": "Stationary values determine whether the cubic dips below zero. Use those signs for root counts, and use numerical iteration only after the number of roots is established.",
    "steps": [
      "Differentiate \\(f_a'(x)=3x^2-3a\\). [1] The stationary positions are \\(x=-\\sqrt a\\) and \\(x=\\sqrt a\\). [1] Their values are \\(f_a(-\\sqrt a)=2+2a^{3/2}\\) and \\(f_a(\\sqrt a)=2-2a^{3/2}\\); the first is a local maximum, the second a local minimum. [1]",
      "For \\(a=0\\), \\(f_0(x)=x^3+2\\) increases strictly and has one real root. [1] For \\(0<a<1\\), the local minimum \\(2-2a^{3/2}>0\\) is positive, so only the left-hand branch crosses the axis, giving one real root. [1] At \\(a=1\\), the minimum is zero: \\(f_1(x)=(x-1)^2(x+2)\\), with two distinct real roots, one of them repeated. [1] For \\(a>1\\), the local maximum is positive and minimum negative, giving three distinct real roots. [1]",
      "Here \\(f_2(x)=x^3-6x+2\\). [1] The endpoint values are \\(f_2(-3)=-7<0<f_2(-2)=6\\) and \\(f_2(0)=2>0>f_2(1)=-3\\). [1] Finally \\(f_2(2)=-2<0<f_2(3)=11\\); with at most three cubic roots, each interval contains exactly one. [1]",
      "Use \\(x_{n+1}=x_n-\\frac{x_n^3-6x_n+2}{3x_n^2-6}\\). [1] From \\(x_0=2.5\\) the first two iterates are \\(x_1=2.294117647\\ldots\\) and \\(x_2=2.262533009\\ldots\\). [1] The third is \\(x_3=2.261802633\\ldots\\); hence the largest root is approximately \\(2.262\\) to three decimal places. [1]",
      "The factorisation \\(f_1(x)=(x-1)^2(x+2)\\) shows the function is nonnegative on the interval. [1] Integrate \\(\\int_0^1(x^3-3x+2)\\,dx=[x^4/4-3x^2/2+2x]_0^1\\). [1] The area is exactly \\(1/4-3/2+2=3/4\\) square units. [1]"
    ],
    "answer": "One real root for \\(0\\le a<1\\); two distinct roots at \\(a=1\\); three for \\(a>1\\). At a=2 the largest root is \\(2.262\\) (3 d.p.); at a=1 the area is \\(3/4\\).",
    "misconception": "Counting repeated roots as distinct can give the wrong root count at the transition a=1.",
    "reflection": "How can a parameter-dependent stationary value replace solving a whole family of cubic equations explicitly?"
  }
];
