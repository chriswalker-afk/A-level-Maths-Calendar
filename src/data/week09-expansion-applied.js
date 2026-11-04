export const week09ExpansionApplied = [
  {
    "id": "W09-A4",
    "section": "A",
    "title": "A stratified survey and a conditional binomial conclusion",
    "marks": 11,
    "ao": {
      "AO1": 3,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "Year 1 stratified sampling",
      "random selection",
      "binomial tails",
      "hypothesis testing",
      "model assumptions"
    ],
    "stem": "A school has \\(120\\) students in Group A, \\(180\\) in Group B and \\(300\\) in Group C. It selects a proportional stratified sample of \\(20\\) students for a new-lesson survey. Of the twenty, fifteen prefer the new approach. An analyst proposes a model in which each sampled student's response is an independent Bernoulli outcome with the same preference probability \\(p\\).",
    "parts": [
      [
        "Determine the number of students to select from each group.",
        2
      ],
      [
        "Explain how to implement the stratified random selection and identify a necessary assumption for the proposed binomial model.",
        3
      ],
      [
        "Under the analyst's model, test \\(H_0:p=0.5\\) against \\(H_1:p>0.5\\) by calculating the one-tailed \\(p\\)-value.",
        3
      ],
      [
        "State the conclusion at 5% and at 1%, and evaluate how the sampling design affects confidence in it.",
        3
      ]
    ],
    "hint": "Allocate the sample in proportion to group sizes. The binomial tail is a conditional calculation: it depends on the identical, independent response assumptions.",
    "steps": [
      "The population total is \\(120+180+300=600\\). [1] Proportional allocations are \\(20(120/600)=4\\), \\(20(180/600)=6\\) and \\(20(300/600)=10\\), respectively. [1]",
      "Select students by a random method within each group, not by asking for volunteers. [1] The model treats the 20 responses as independent events. [1] It also assumes the same preference probability across all three groups; if groups differ or students influence each other, a simple binomial model may be unsuitable. [1]",
      "Under \\(H_0\\), the model specifies \\(X\\sim B(20,0.5)\\). [1] The upper tail is \\(P(X\\ge15)=\\sum_{k=15}^{20}\\binom{20}{k}2^{-20}\\). [1] Its exact value is \\(21700/1048576\\approx0.020695\\). [1]",
      "At 5%, \\(p\\text{-value}<0.05\\) so reject \\(H_0\\) and find evidence for a preference above one half under the proposed model. [1] At 1%, do not reject because \\(0.020695>0.01\\). [1] The inference needs caution: stratification improves coverage, but the small sample and possible different preferences between groups can undermine the identical-independent-response assumptions and how generally the result applies. [1]"
    ],
    "answer": "Allocations \\(4,6,10\\); \\(p\\text{-value}=21700/1048576\\approx0.020695\\); reject at 5% but not 1%, conditional on the binomial model.",
    "misconception": "Stratification does not automatically make sample responses independent or the probability identical across groups.",
    "reflection": "Would it be safer to report each group's observed preference separately before combining the results? Why?"
  },
  {
    "id": "W09-A5",
    "section": "A",
    "title": "A changing force reverses before the particle does",
    "marks": 12,
    "ao": {
      "AO1": 2,
      "AO2": 3,
      "AO3": 7
    },
    "topics": [
      "Year 1 Newton's second law",
      "variable acceleration",
      "integration constants",
      "distance and displacement"
    ],
    "stem": "A \\(2\\ \\mathrm{kg}\\) particle moves on a smooth straight horizontal track. Its net horizontal force, in the chosen positive direction, is \\(F(t)=8-4t\\) newtons for \\(0\\le t\\le5\\) seconds. Initially it is at the origin and at rest. Forces are idealised and the positive direction is fixed.",
    "parts": [
      [
        "Derive expressions for acceleration \\(a(t)\\) and velocity \\(v(t)\\).",
        3
      ],
      [
        "Find the times at which force and velocity change sign, and explain the difference.",
        3
      ],
      [
        "Find displacement \\(s(t)\\) and the particle's positions at 4 s and 5 s.",
        3
      ],
      [
        "Calculate both total distance and signed displacement in the five seconds, and state one modelling limitation.",
        3
      ]
    ],
    "hint": "Do not equate negative acceleration with negative velocity. Integrate acceleration first, then locate velocity zeros before finding distance.",
    "steps": [
      "Newton's second law gives \\(2a(t)=8-4t\\), so \\(a(t)=4-2t\\) m/s². [1] Integrate \\(dv/dt=a\\) to obtain \\(v(t)=4t-t^2+C\\). [1] Using \\(v(0)=0\\) gives \\(v(t)=4t-t^2\\). [1]",
      "The force changes from positive to negative at \\(t=2\\) s. [1] The velocity is \\(v(t)=t(4-t)\\), so it is positive up to \\(t=4\\) s and then negative. [1] The particle keeps moving forwards for two seconds after the net force reverses because negative acceleration first reduces its existing forward velocity. [1]",
      "Integrate the velocity: \\(s(t)=2t^2-t^3/3+C\\). [1] With \\(s(0)=0\\), \\(C=0\\); hence \\(s(4)=32/3\\) metres. [1] At five seconds, \\(s(5)=25/3\\) metres. [1]",
      "The displacement is \\(25/3\\) m. [1] Distance is \\(32/3+(32/3-25/3)=13\\) m because the particle reverses at t=4. [1] The model assumes exactly the specified time-varying net force and neglects unmodelled friction or force fluctuations; a relevant implication earns a mark. [1]"
    ],
    "answer": "Force reverses at \\(t=2\\) s; velocity at \\(t=4\\) s. At t=5, displacement \\(25/3\\) m and distance \\(13\\) m.",
    "misconception": "Force controls acceleration, not instantaneous direction. Distance must account for the period after the velocity changes sign.",
    "reflection": "What would a velocity–time sketch show between t=2 and t=4 that a force–time sketch alone would not?"
  }
];
