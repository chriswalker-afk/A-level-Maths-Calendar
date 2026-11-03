export const week06Modelling = [
  {
    "id": "W06-M1",
    "section": "M",
    "title": "Weekly growth is not continuous growth",
    "marks": 12,
    "minutes": 33,
    "ao": {
      "AO2": 3,
      "AO3": 9
    },
    "topics": [
      "geometric growth model",
      "exponential model",
      "logarithms",
      "thresholds",
      "model evaluation"
    ],
    "stem": "A service has \\(200\\) active users at time \\(0\\). Two analysts construct alternative growth models. Model D increases its user count by exactly \\(15\\%\\) at the end of each whole week; write \\(D_n\\) for the count after \\(n\\) completed weeks, ignoring the fact that a real count must be an integer. Model C assumes a continuous proportional growth rate of \\(0.15\\) per week; write \\(C(t)\\) for its prediction after \\(t\\) weeks.",
    "parts": [
      [
        "Obtain a formula for \\(D_n\\) for non-negative integer \\(n\\).",
        2
      ],
      [
        "Obtain an appropriate formula for \\(C(t)\\) and explain one mathematical difference between the models.",
        2
      ],
      [
        "For each model, find when its predicted user count first reaches or exceeds \\(400\\). Give a whole-week answer for D and a time to three decimal places for C.",
        3
      ],
      [
        "Calculate both predictions at the end of week \\(5\\) and the percentage by which Model C exceeds Model D, using D as the baseline.",
        3
      ],
      [
        "State two distinct limitations of using either model to plan staffing far into the future.",
        2
      ]
    ],
    "hint": "Repeated percentage changes give \\(D_n=200(1.15)^n\\). Constant continuous proportional growth gives \\(C(t)=200e^{0.15t}\\). Use logs to compare crossing times.",
    "steps": [
      "A \\(15\\%\\) weekly rise means multiplying by \\(1.15\\) at each completed week, so \\(D_n=200(1.15)^n\\) for integer \\(n\\ge0\\). [2]",
      "A constant instantaneous proportional growth rate \\(0.15\\) per week corresponds to \\(C(t)=200e^{0.15t}\\) for \\(t\\ge0\\). D changes in weekly jumps while C changes continuously, and \\(e^{0.15}>1.15\\). [2]",
      "For D, solve \\(200(1.15)^n\\ge400\\), giving \\(n\\ge\\frac{\\ln2}{\\ln1.15}\\approx4.960\\); the earliest whole week is \\(n=5\\). For C, \\(e^{0.15t}=2\\), so \\(t=\\frac{\\ln2}{0.15}\\approx4.621\\) weeks. [3]",
      "At week 5, \\(D_5=200(1.15)^5\\approx402.271\\), while \\(C(5)=200e^{0.75}\\approx423.400\\). Relative to D, the percentage difference is \\(100\\frac{423.400-402.271}{402.271}\\approx5.252\\%\\) (about \\(5.25\\%\\)). [3]",
      "A real user count is an integer rather than a perfectly smooth or fractional amount; also neither model accounts for market saturation, changing demand, capacity constraints, cancellations or changes in the growth rate. Award two different defensible limitations, linked to the setting. [2]"
    ],
    "answer": "\\(D_n=200(1.15)^n\\), \\(C(t)=200e^{0.15t}\\); doubling by completed week \\(5\\) versus \\(4.621\\) continuous weeks. At week 5, C is about \\(5.25\\%\\) above D.",
    "misconception": "A continuous rate of 15% per week is not identical to a 15% once-per-week multiplier; the continuous one-week factor is e^0.15, not 1.15.",
    "reflection": "If both models had instead been calibrated to agree exactly after one week, what continuous rate would Model C need?"
  },
  {
    "id": "W06-M2",
    "section": "M",
    "title": "Two escalating saving plans under a contribution cap",
    "marks": 14,
    "minutes": 35,
    "ao": {
      "AO2": 3,
      "AO3": 11
    },
    "topics": [
      "arithmetic deposit plans",
      "geometric savings",
      "finite sums",
      "caps and thresholds",
      "contextual interpretation"
    ],
    "stem": "A community project considers two annual donation plans. Both begin with a donation of \\(£1200\\) at the end of year 1. Under Plan A, each later annual donation is \\(£100\\) more than the previous one. Under Plan B, each later annual donation is \\(8\\%\\) more than the previous one. There is no interest: the total saved is simply the sum of the donations. A sponsor can contribute at most \\(£2000\\) in any one year. First compare the plans without this cap, then test whether the cap is respected.",
    "parts": [
      [
        "Write expressions for the donation in year \\(n\\) under each plan, where \\(n\\ge1\\).",
        3
      ],
      [
        "Derive expressions for the cumulative amount raised in the first \\(n\\) years under each plan. Hence compare the totals after eight years, temporarily ignoring the annual cap.",
        4
      ],
      [
        "Find the first year in which each plan would require a donation strictly greater than \\(£2000\\).",
        3
      ],
      [
        "Compare the money raised under the two plans in the first seven years, a period during which both satisfy the cap. State the larger total.",
        2
      ],
      [
        "Identify two distinct assumptions or limitations that could affect which plan is preferable in practice.",
        2
      ]
    ],
    "hint": "Plan A is an AP; Plan B is a GP. First express the year-n terms, then compare finite sums. For the cap, solve a linear inequality for A and a logarithmic inequality for B.",
    "steps": [
      "Plan A has first term \\(1200\\) and difference \\(100\\), so \\(A_n=1200+100(n-1)\\). Plan B has ratio \\(1.08\\), so \\(B_n=1200(1.08)^{n-1}\\). Both formulas use year 1 as the first term. [3]",
      "The eight-year totals come from \\(S_A(n)=\\frac n2[2400+100(n-1)]\\) and \\(S_B(n)=1200\\frac{1.08^n-1}{0.08}=15000(1.08^n-1)\\). Therefore \\(S_A(8)=12400\\) pounds and \\(S_B(8)\\approx12763.95\\) pounds. Ignoring the cap, Plan B gives approximately \\(£363.95\\) more after eight years. [4]",
      "For A, \\(1200+100(n-1)>2000\\) gives \\(n>9\\); the first breach is year \\(10\\). For B, \\(1200(1.08)^{n-1}>2000\\) gives \\(n>1+\\frac{\\ln(5/3)}{\\ln1.08}\\approx7.637\\); the first breach is year \\(8\\) (donation about \\(£2056.59\\)). [3]",
      "Over the same first seven years, \\(S_A(7)=\\frac72(2400+600)=10500\\) pounds and \\(S_B(7)=15000(1.08^7-1)\\approx10707.36\\) pounds. Both respect the cap in these seven years, and B raises about \\(£207.36\\) more. [2]",
      "The model assumes contributors can afford the rises indefinitely and that the percentage or fixed increase is followed exactly. It also ignores inflation, interest, missed donations and changes in budgets. Any two distinct contextual issues with a plausible consequence earn credit. [2]"
    ],
    "answer": "\\(A_n=1200+100(n-1)\\), \\(B_n=1200(1.08)^{n-1}\\); eight-year totals \\(£12400\\) and about \\(£12763.95\\); cap breached in years \\(10\\) and \\(8\\) respectively. Through year 7, Plan B leads by about \\(£207.36\\).",
    "misconception": "A cap on an individual year's payment is not a cap on total savings. Compare totals over the same allowed time interval, not over different numbers of years.",
    "reflection": "How would including inflation or interest change the interpretation of which plan is better?"
  }
];
