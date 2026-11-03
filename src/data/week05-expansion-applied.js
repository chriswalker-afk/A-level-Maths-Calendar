export const week05ExpansionApplied = [
  {
    "id": "W05-A4",
    "section": "A",
    "title": "A binomial demand forecast with a fragile assumption",
    "marks": 11,
    "ao": {
      "AO1": 3,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "Year 1 binomial probability",
      "expectation and variance",
      "model assumptions"
    ],
    "stem": "A company models the number X of returned items among eight independently shipped items by \\(X\\sim\\mathrm{B}(8,0.3)\\). A return is either recorded or not recorded.",
    "parts": [
      [
        "State the two main assumptions that justify using this binomial distribution in context.",
        2
      ],
      [
        "Calculate the probabilities that exactly zero items and at most one item are returned. Give exact numerical expressions and decimal values.",
        3
      ],
      [
        "Find the expected number and variance of returned items.",
        2
      ],
      [
        "Calculate the probability of at least two returns, and explain why predicting exactly 2.4 returned items on a particular shipment would misuse the model.",
        4
      ]
    ],
    "hint": "Use P(X=r)=C(8,r)(0.3)^r(0.7)^{8−r}. 'At least two' is the complement of 'at most one'.",
    "steps": [
      "The eight return indicators are assumed independent. [1] They have the same fixed return probability 0.3 for each item (binary return/no-return outcome). [1]",
      "\\(P(X=0)=0.7^8=0.05764801\\). [1] Also \\(P(X=1)=\\binom81(0.3)(0.7)^7=0.19765032\\). [1] Thus \\(P(X\\le1)=0.7^8+8(0.3)(0.7)^7=0.25529833\\). [1]",
      "\\(E(X)=np=8(0.3)=2.4\\). [1] The variance is \\(\\mathrm{Var}(X)=np(1-p)=8(0.3)(0.7)=1.68\\). [1]",
      "\\(P(X\\ge2)=1-P(X\\le1)=1-0.25529833=0.74470167\\). [2] The value 2.4 is the *long-run mean across repetitions* of eight-item shipments, not a possible integer return count on one shipment. [1] Independence or constant p could break down if shipments share a faulty batch, so even the distributional assumption should be checked. [1]"
    ],
    "answer": "\\(P(X=0)=0.05764801,\\ P(X\\le1)=0.25529833,\\ P(X\\ge2)=0.74470167,\\ E(X)=2.4,\\ \\mathrm{Var}(X)=1.68\\).",
    "misconception": "Expected value need not be a possible observation; 2.4 returns does not mean a shipment can contain a fraction of a returned item.",
    "reflection": "What evidence would suggest items from the same production batch are not independent?"
  },
  {
    "id": "W05-A5",
    "section": "A",
    "title": "A one-sided decision from ten trials",
    "marks": 12,
    "ao": {
      "AO1": 3,
      "AO2": 4,
      "AO3": 5
    },
    "topics": [
      "Year 1 binomial hypothesis testing",
      "critical region",
      "conclusions in context"
    ],
    "stem": "A supplier claims that the chance an individual seal fails is \\(p=0.2\\). A quality officer believes this probability has **increased**, and independently tests ten seals chosen under identical conditions. Five fail. The officer uses a 5% significance level.",
    "parts": [
      [
        "State the null and alternative hypotheses and give the distribution of X under the null.",
        2
      ],
      [
        "Calculate the exact expression and decimal value of the one-sided p-value for the observed five failures.",
        3
      ],
      [
        "Show that the 5% upper-tail critical region is \\(X\\ge5\\).",
        4
      ],
      [
        "State the decision and conclusion in context, and explain one limitation of treating these ten failures as independent trials.",
        3
      ]
    ],
    "hint": "Under H0 use X~B(10,0.2). A one-sided p-value is the probability of *at least* five failures; find the smallest integer k with P(X≥k)≤0.05.",
    "steps": [
      "\\(H_0:p=0.2,\\qquad H_1:p>0.2\\) because the concern is an increase. [1] Under the null, \\(X\\sim\\mathrm{B}(10,0.2)\\). [1]",
      "The upper-tail p-value is \\(P(X\\ge5)=\\sum_{r=5}^{10}\\binom{10}{r}(0.2)^r(0.8)^{10-r}\\). [2] Evaluating yields \\(P(X\\ge5)=0.0327934976\\ldots\\). [1]",
      "The probability \\(P(X\\ge5)\\approx0.03279<0.05\\). [1] One lower threshold gives \\(P(X\\ge4)=P(X\\ge5)+\\binom{10}{4}(0.2)^4(0.8)^6\\approx0.1208738816>0.05\\). [2] Thus the smallest upper-tail rejection threshold is 5, so the critical region is \\(X\\ge5\\). [1]",
      "Since the observed X=5 is in the critical region, reject H0 at the 5% significance level. [1] There is statistically significant evidence that the failure probability has risen above 0.2; this does not prove p>0.2 with certainty. [1] A common production batch or correlated failures would breach independence, making the binomial model's tail probabilities unreliable. [1]"
    ],
    "answer": "\\(H_0:p=0.2,\\ H_1:p>0.2\\); p-value ≈0.03279; critical region \\(X\\ge5\\); reject H0 at 5%, evidence of an increased failure probability.",
    "misconception": "The significance level is not the probability that the null hypothesis is true, and 'significant' does not mean the model has been proven wrong beyond doubt.",
    "reflection": "How might the conclusion change if the officer had decided on a 1% significance level before collecting the data?"
  }
];
