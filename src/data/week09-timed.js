export const week09Timed = [
  {
    "id": "W09-T1",
    "section": "T",
    "title": "A fractional binomial model and a threshold",
    "marks": 8,
    "minutes": 12,
    "ao": {
      "AO1": 2,
      "AO2": 6
    },
    "topics": [
      "fractional binomial expansion",
      "validity intervals",
      "inequalities",
      "approximation"
    ],
    "stem": "A calibration factor is modelled by \\(F(x)=(1-2x)^{-1/2}\\), where \\(0\\le x<\\frac12\\). A truncated series may be used for small values of x.",
    "parts": [
      [
        "Expand \\(F(x)\\) in ascending powers of x, up to and including \\(x^2\\).",
        3
      ],
      [
        "State the full open interval on which the infinite binomial expansion about zero converges.",
        2
      ],
      [
        "Find the exact set of allowed x-values for which \\(F(x)>\\frac65\\).",
        2
      ],
      [
        "Use the quadratic truncation to estimate \\(F(0.1)\\).",
        1
      ]
    ],
    "hint": "Apply the fractional binomial coefficients for \\((1+u)^n\\) with \\(n=-\\frac12\\) and \\(u=-2x\\). For the threshold, note that both sides are positive before squaring.",
    "steps": [
      "The expansion is \\(1+(-\\frac12)(-2x)+\\frac{(-1/2)(-3/2)}2(-2x)^2+\\cdots=1+x+\\frac32x^2+\\cdots\\). Award for the correct binomial set-up, linear term and quadratic term. [3]",
      "Because the exponent is not a non-negative integer, the expansion requires \\(|-2x|<1\\), giving \\(-\\frac12<x<\\frac12\\) for the full mathematical series. The model additionally restricts x to \\(0\\le x<\\frac12\\). [2]",
      "On this domain both sides are positive. \\((1-2x)^{-1/2}>\\frac65\\) implies \\(\\frac1{1-2x}>\\frac{36}{25}\\). Since the denominator is positive, \\(25>36-72x\\), hence \\(x>\\frac{11}{72}\\). With the model domain, \\(\\frac{11}{72}<x<\\frac12\\). [2]",
      "Use the truncation \\(F(0.1)\\approx1+0.1+\\frac32(0.1)^2=1.115\\) (exact value approximately \\(1.118034\\)). [1]"
    ],
    "answer": "\\(F(x)=1+x+\\frac32x^2+\\cdots\\), infinite expansion valid \\(|x|<\\frac12\\), model threshold \\(11/72<x<1/2\\), quadratic estimate \\(1.115\\).",
    "misconception": "The convergence interval of a binomial series and the real-world domain of a model are different restrictions; state both. Reversing an inequality involving a positive reciprocal must be handled carefully.",
    "reflection": "How could the next term in the series help judge whether the estimate at x=0.1 is too small or too large?"
  },
  {
    "id": "W09-T2",
    "section": "T",
    "title": "A maximum and a numerical area from one curve",
    "marks": 12,
    "minutes": 17,
    "ao": {
      "AO1": 3,
      "AO2": 7,
      "AO3": 2
    },
    "topics": [
      "product and chain differentiation",
      "stationary points",
      "integration by parts",
      "trapezium rule",
      "numerical error"
    ],
    "stem": "For \\(x\\ge0\\), consider \\(y=x^2e^{-x}\\). A numerical calculation of the area beneath this curve on \\(0\\le x\\le3\\) is to be compared with an exact integral.",
    "parts": [
      [
        "Differentiate y and express \\(dy/dx\\) in factorised form.",
        2
      ],
      [
        "Find and classify the non-zero stationary point; give its exact height.",
        2
      ],
      [
        "Use repeated integration by parts to evaluate the area \\(I=\\int_0^3x^2e^{-x}\\,dx\\) exactly.",
        3
      ],
      [
        "Use three equal-width trapezia to approximate I, showing the ordinates at x=0,1,2,3.",
        3
      ],
      [
        "Find the signed difference between the trapezium estimate and the exact area and explain what the sign means.",
        2
      ]
    ],
    "hint": "Differentiate using the product rule. For the integral, integrate by parts twice; then use a trapezium width of 1.",
    "steps": [
      "Using product and chain rules, \\(y'=2xe^{-x}-x^2e^{-x}=xe^{-x}(2-x)\\). [2]",
      "The derivative vanishes at x=0 and x=2. On \\((0,2)\\), it is positive and beyond 2 it is negative; the non-zero point at \\(x=2\\) is a maximum, with \\(y(2)=4e^{-2}\\). [2]",
      "Twice integrating by parts gives \\(\\int x^2e^{-x}\\,dx=-(x^2+2x+2)e^{-x}+C\\). Hence \\(I=[-(x^2+2x+2)e^{-x}]_0^3=2-17e^{-3}\\approx1.153619838\\) square units. [3]",
      "The ordinates are \\(y_0=0,\\ y_1=e^{-1},\\ y_2=4e^{-2},\\ y_3=9e^{-3}\\). With h=1, \\(T_3=\\frac12[y_0+2(y_1+y_2)+y_3]=\\frac12(2e^{-1}+8e^{-2}+9e^{-3})\\approx1.133262382\\). [3]",
      "The signed error is \\(T_3-I\\approx-0.020357456\\) square units. Its negative sign shows this particular three-strip trapezium estimate is an underestimate; because curvature changes on the interval, do not infer this error direction from a single sign of \\(y''\\) throughout. [2]"
    ],
    "answer": "\\(y'=xe^{-x}(2-x)\\); maximum \\(4e^{-2}\\) at x=2; exact area \\(2-17e^{-3}\\approx1.153620\\), trapezium \\(1.133262\\), signed error \\(-0.020357\\).",
    "misconception": "A changing concavity means the direction of numerical integration error cannot be justified by asserting that the entire curve is convex or concave. Here compare the actual estimates.",
    "reflection": "How would you improve the numerical estimate while preserving the same integration interval?"
  },
  {
    "id": "W09-T3",
    "section": "T",
    "title": "A test vehicle and its independent quality trial",
    "marks": 12,
    "minutes": 16,
    "ao": {
      "AO1": 2,
      "AO2": 4,
      "AO3": 6
    },
    "topics": [
      "two-stage SUVAT",
      "stopping distance",
      "binomial distribution",
      "one-tailed hypothesis testing",
      "contextual conclusions"
    ],
    "stem": "A test vehicle travels along a straight track. It begins at rest and accelerates uniformly at \\(1.5\\,\\mathrm{m\\,s^{-2}}\\) for \\(6\\) seconds. It then brakes uniformly at \\(2\\,\\mathrm{m\\,s^{-2}}\\) until it stops. In a separate quality-control trial for this vehicle model, \\(10\\) independently inspected components are either defective or non-defective. Five are defective. Let p be the population defect probability; the manufacturer's claim is \\(p=0.2\\). Test for evidence that p is higher, using the 5% significance level.",
    "parts": [
      [
        "Find the vehicle's speed and displacement at the end of the acceleration stage.",
        2
      ],
      [
        "Find the braking time and braking displacement.",
        2
      ],
      [
        "Determine the total elapsed moving time and total distance travelled.",
        2
      ],
      [
        "State the hypotheses for the defect probability and the null distribution of the defect count X.",
        2
      ],
      [
        "Calculate the exact upper-tail p-value for the observed five defects, giving four decimal places.",
        2
      ],
      [
        "Make the 5% significance decision in context and explain one assumption needed for the binomial model.",
        2
      ]
    ],
    "hint": "Use \\(v=u+at\\) and \\(v^2=u^2+2as\\) in the two mechanical stages. For the independent trial, use \\(X\\sim B(10,0.2)\\) under the null and calculate \\(P(X\\ge5)\\).",
    "steps": [
      "From rest, \\(v=0+1.5(6)=9\\,\\mathrm{m\\,s^{-1}}\\). First-stage displacement is \\(s_1=\\frac12(1.5)(6)^2=27\\,\\mathrm m\\). [2]",
      "Braking from speed 9 at acceleration \\(-2\\,\\mathrm{m\\,s^{-2}}\\), \\(0=9-2t_2\\) gives \\(t_2=4.5\\,\\mathrm s\\). From \\(0=9^2+2(-2)s_2\\), \\(s_2=81/4=20.25\\,\\mathrm m\\). [2]",
      "Total moving time is \\(6+4.5=10.5\\,\\mathrm s\\), and the vehicle never reverses, so distance is \\(27+20.25=47.25\\,\\mathrm m\\). [2]",
      "State \\(H_0:p=0.2\\) and \\(H_1:p>0.2\\). Under the null \\(X\\sim B(10,0.2)\\) for independent, identical-pass-probability classifications. [2]",
      "The upper-tail probability is \\(P(X\\ge5)=\\sum_{r=5}^{10}\\binom{10}{r}(0.2)^r(0.8)^{10-r}\\approx0.0327935\\), or \\(0.0328\\) to four decimals. [2]",
      "Since \\(0.0328<0.05\\), reject \\(H_0\\): this sample provides evidence that the population defect probability exceeds 0.2. This depends on a reasonable independence assumption and constant defect probability across the inspected components; a non-representative selection could undermine the inference. [2]"
    ],
    "answer": "Vehicle: \\(9\\,\\mathrm{m\\,s^{-1}}\\), first stage \\(27\\,\\mathrm m\\), braking \\(4.5\\,\\mathrm s\\) and \\(20.25\\,\\mathrm m\\), total \\(10.5\\,\\mathrm s,\\ 47.25\\,\\mathrm m\\). One-tailed binomial p-value \\(0.0328\\), reject \\(p=0.2\\) at 5%.",
    "misconception": "Braking acceleration is negative relative to the forward positive direction. The separate quality-control sample uses a tail probability, not P(X=5) alone.",
    "reflection": "Why should the mechanics model and the statistical defect model be evaluated using different kinds of evidence?"
  }
];
