export const week05Applied = [
  {
    "id": "W05-A1",
    "section": "A",
    "title": "Is a binomial model justified?",
    "marks": 4,
    "minutes": 8,
    "ao": {
      "AO1": 2,
      "AO3": 2
    },
    "topics": [
      "binomial distribution",
      "model assumptions",
      "parameters"
    ],
    "stem": "A manufacturer selects \\(12\\) items from a production process. Each item independently has probability \\(0.08\\) of failing a quality check, and this probability remains unchanged during the sampling. Let \\(X\\) count the failed items.",
    "parts": [
      [
        "State a suitable probability distribution for \\(X\\), identifying both of its parameters.",
        2
      ],
      [
        "Give two distinct conditions from the question that justify the binomial distribution.",
        2
      ]
    ],
    "hint": "A binomial variable counts successes in a fixed number of independent Bernoulli trials with constant success probability.",
    "steps": [
      "Each item gives a pass/fail trial with \"failure\" treated as the event counted. There are \\(n=12\\) trials and probability \\(p=0.08\\) of that event, so \\(X\\sim B(12,0.08)\\). [2]",
      "The item outcomes are independent, so observing one item does not change the probability of another; the failure probability is constant at \\(0.08\\) for each selected item. These are two separate justifications, alongside the fixed number of two-outcome trials. [2]"
    ],
    "answer": "\\(X\\sim B(12,0.08)\\)",
    "misconception": "The success probability p in a binomial model means the probability of the event being counted. Here X counts failures, so p = 0.08 rather than 0.92.",
    "reflection": "What could make the assumption of independence unreasonable if the twelve items were drawn from a very small batch without replacement?"
  },
  {
    "id": "W05-A2",
    "section": "A",
    "title": "Choose the right binomial tail and boundary",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO1": 2,
      "AO2": 2,
      "AO3": 4
    },
    "topics": [
      "binomial probability",
      "cumulative probabilities",
      "complements",
      "event inequalities"
    ],
    "stem": "A discrete random variable has distribution \\(X\\sim B(10,0.3)\\). You may use a calculator's binomial probability and cumulative probability functions. Give probabilities to four decimal places where required.",
    "parts": [
      [
        "Write an exact binomial expression for \\(P(X=3)\\), and evaluate it to four decimal places.",
        2
      ],
      [
        "Calculate \\(P(X\\le2)\\) to four decimal places.",
        3
      ],
      [
        "Hence calculate \\(P(X\\ge3)\\) to four decimal places.",
        1
      ],
      [
        "A colleague says that \\(P(X\\ge3)\\) and \\(P(X>3)\\) are equal. Calculate \\(P(X>3)\\) to four decimal places and explain why the colleague is mistaken.",
        2
      ]
    ],
    "hint": "For at least three, use \\(1-P(X\\le2)\\). For strictly more than three, use \\(1-P(X\\le3)\\); the difference is the probability of exactly three.",
    "steps": [
      "\\(P(X=3)=\\binom{10}{3}(0.3)^3(0.7)^7\\approx0.2668\\). [2]",
      "Use the cumulative distribution, or sum three individual probabilities: \\(P(X\\le2)=\\sum_{r=0}^{2}\\binom{10}{r}(0.3)^r(0.7)^{10-r}\\approx0.3828\\). [3]",
      "\\(P(X\\ge3)=1-P(X\\le2)\\approx1-0.3827827864=0.6172\\). [1]",
      "\\(P(X>3)=P(X\\ge4)=1-P(X\\le3)\\approx0.3504\\). This differs from \\(P(X\\ge3)\\approx0.6172\\) by \\(P(X=3)\\approx0.2668\\): the equality event \\(X=3\\) is included in the non-strict tail but excluded in the strict one. [2]"
    ],
    "answer": "\\(P(X=3)=0.2668\\), \\(P(X\\le2)=0.3828\\), \\(P(X\\ge3)=0.6172\\), \\(P(X>3)=0.3504\\).",
    "misconception": "Cumulative binomial probabilities use inclusive integer boundaries. P(X ≥ 3) and P(X > 3) differ by the nonzero probability P(X = 3).",
    "reflection": "Why would applying a strict inequality rather than an inclusive one change a hypothesis-test tail probability?"
  },
  {
    "id": "W05-A3",
    "section": "A",
    "title": "A one-tailed test with a critical boundary",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO1": 2,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "binomial hypothesis testing",
      "critical regions",
      "p-values",
      "significance",
      "contextual conclusions"
    ],
    "stem": "A machine normally produces defective items with probability \\(0.25\\). A technician suspects that the defect rate has increased. During a period in which successive outcomes can reasonably be treated as independent, the technician takes a random sample of \\(20\\) items and finds \\(9\\) defective items. Test at the \\(5\\%\\) significance level. Let \\(p\\) denote the underlying probability that an item is defective.",
    "parts": [
      [
        "State the null and alternative hypotheses using \\(p\\).",
        2
      ],
      [
        "State the distribution of the number of defective items under the null hypothesis, and justify the direction of the test.",
        2
      ],
      [
        "Calculate the exact-tail p-value \\(P(X\\ge9)\\) to four decimal places.",
        3
      ],
      [
        "Use the p-value to reach a decision at the \\(5\\%\\) level and write a conclusion in context.",
        2
      ],
      [
        "State what a Type I error would mean in this investigation.",
        1
      ]
    ],
    "hint": "Because the technician suspects an increase, choose a right-tailed test. Under H₀ calculate the probability of observing nine or more defective items, not nine or fewer.",
    "steps": [
      "The hypotheses are \\(H_0:p=0.25\\) and \\(H_1:p>0.25\\). [2]",
      "Under \\(H_0\\), the defect count \\(X\\sim B(20,0.25)\\). The alternative is an increase, so an unusually large number of defects is evidence against \\(H_0\\); use an upper-tail test. [2]",
      "The p-value is \\(P(X\\ge9)=\\sum_{r=9}^{20}\\binom{20}{r}(0.25)^r(0.75)^{20-r}\\approx0.0409\\). [3]",
      "Because \\(0.0409<0.05\\), reject \\(H_0\\) at the \\(5\\%\\) level. There is sufficient evidence from these sample data that the true defective-item probability has increased above \\(0.25\\). [2]",
      "A Type I error would be concluding that the machine's defect probability has increased when in reality the probability is still \\(0.25\\). [1]"
    ],
    "answer": "Upper-tailed binomial test, \\(P(X\\ge9)\\approx0.0409<0.05\\). Reject \\(H_0\\); evidence supports an increased defect rate, not certainty that it increased.",
    "misconception": "The p-value is not the probability that H₀ is true. It is the probability, assuming H₀, of an outcome at least as extreme in the direction specified by H₁.",
    "reflection": "Why is a statistically significant result not proof that the defect probability definitely changed?"
  }
];
