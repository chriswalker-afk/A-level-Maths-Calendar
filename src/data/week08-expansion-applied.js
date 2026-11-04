export const week08ExpansionApplied = [
  {
    "id": "W08-A4",
    "section": "A",
    "title": "A ball returns below its starting position",
    "marks": 11,
    "ao": {
      "AO1": 3,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "Year 1 vertical SUVAT",
      "sign conventions",
      "highest point",
      "total distance"
    ],
    "stem": "A ball is thrown vertically upward at \\(14.7\\ \\mathrm{m\\,s^{-1}}\\) from a platform \\(19.6\\) metres above ground. Ignore air resistance and take upwards as positive, with \\(g=9.8\\ \\mathrm{m\\,s^{-2}}\\).",
    "parts": [
      [
        "Obtain a displacement/height equation for \\(t\\ge0\\) and state the acceleration sign.",
        3
      ],
      [
        "Find the time and height of the greatest altitude.",
        3
      ],
      [
        "Calculate the first time the ball reaches the ground and its impact velocity.",
        3
      ],
      [
        "Distinguish displacement and distance travelled before impact, and identify one modelling assumption.",
        2
      ]
    ],
    "hint": "Take upwards as positive throughout. The speed becomes zero at the top, but the ball has not stopped moving permanently.",
    "steps": [
      "Take the upward initial velocity \\(u=14.7\\), with constant acceleration \\(a=-9.8\\) m/s². [1] From \\(s=ut+\\frac12at^2\\), displacement above launch is \\(s(t)=14.7t-4.9t^2\\). [1] Height above ground is \\(h(t)=19.6+14.7t-4.9t^2\\) metres. [1]",
      "At the highest point \\(v=14.7-9.8t=0\\), so \\(t=1.5\\) s. [1] The rise above launch is \\(14.7(1.5)-4.9(1.5)^2=11.025\\) m. [1] Hence the greatest height is \\(19.6+11.025=30.625\\) m above ground. [1]",
      "Set \\(19.6+14.7t-4.9t^2=0\\), or \\(t^2-3t-4=0\\). [1] Factor \\((t-4)(t+1)=0\\); only \\(t=4\\) s is physically possible. [1] The impact velocity is \\(v(4)=14.7-9.8(4)=-24.5\\) m/s, downward. [1]",
      "Net displacement is \\(-19.6\\) m, from the platform to the ground; total distance is \\(11.025+30.625=41.65\\) m. [1] Air resistance, ball size or nonconstant gravity is ignored; one relevant assumption with its physical implication earns the final mark. [1]"
    ],
    "answer": "Top at \\(t=1.5\\) s, \\(30.625\\) m above ground; impact at \\(t=4\\) s with velocity \\(-24.5\\) m/s; distance \\(41.65\\) m.",
    "misconception": "Displacement is signed and measures the final minus initial position; total travel includes the upward journey.",
    "reflection": "How would drag change the highest point and impact time without changing the sign conventions?"
  },
  {
    "id": "W08-A5",
    "section": "A",
    "title": "Testing reliability across batches, not just items",
    "marks": 12,
    "ao": {
      "AO1": 2,
      "AO2": 3,
      "AO3": 7
    },
    "topics": [
      "Year 1 binomial model",
      "independent events",
      "complements",
      "model suitability"
    ],
    "stem": "Each sensor has independent probability \\(p=0.2\\) of failing inspection. A batch contains four sensors and is accepted if no more than one fails. A supplier sends five independently produced batches of four. A customer wants at least 95% of individual batches accepted.",
    "parts": [
      [
        "State the null binomial model for the number of failed sensors in one batch and justify it.",
        2
      ],
      [
        "Find the probability that one batch is accepted, giving exact decimal terms.",
        3
      ],
      [
        "Find the probability that at least one of the five batches is rejected.",
        3
      ],
      [
        "Assess the customer's 95% requirement and bracket a smaller item-failure probability that would achieve it. Explain one real-world weakness of the independence assumption.",
        4
      ]
    ],
    "hint": "First find P(X≤1). For five batches, calculate the probability that all are accepted before using the complement.",
    "steps": [
      "For a single batch the number failed is \\(X\\sim B(4,0.2)\\). [1] The model relies on four fixed trials with two outcomes and a constant probability of failure, with independence assumed. [1]",
      "The batch is accepted for \\(X=0\\) or \\(X=1\\). [1] Thus \\(P(X\\le1)=0.8^4+\\binom41(0.2)(0.8)^3\\). [1] Evaluating gives \\(0.4096+0.4096=0.8192\\). [1]",
      "Since batches are independent, \\(P(\\text{all accepted})=(0.8192)^5\\approx0.368935\\). [1] Take the complement \\(1-(0.8192)^5\\). [1] Therefore \\(P(\\text{at least one rejected})\\approx0.631065\\). [1]",
      "At \\(p=0.2\\), a batch acceptance probability of \\(0.8192\\) fails the 95% criterion. [1] In general \\(q(p)=(1-p)^4+4p(1-p)^3\\). [1] Testing \\(p=0.09\\) gives \\(q\\approx0.957035\\), whereas \\(p=0.10\\) gives \\(q=0.9477\\); the maximum acceptable failure probability is between 0.09 and 0.10. [1] Defects from the same production fault could be correlated, invalidating the independent-trials calculation. [1]"
    ],
    "answer": "One-batch acceptance \\(0.8192\\); at least one rejection among five \\(0.631065\\ldots\\); 95% acceptance requires item failure probability below 0.10, between 0.09 and 0.10 at the boundary.",
    "misconception": "Batch acceptance is a different event from individual-item success; do not substitute 0.8 into the five-batch calculation.",
    "reflection": "How could a shared production fault create several rejections even if the overall failure percentage seemed correct?"
  }
];
