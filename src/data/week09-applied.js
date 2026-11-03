export const week09Applied = [
  {
    "id": "W09-A1",
    "section": "A",
    "title": "Sample fairly across three unequal groups",
    "marks": 4,
    "minutes": 8,
    "ao": {
      "AO1": 2,
      "AO2": 2
    },
    "topics": [
      "stratified sampling",
      "proportional allocation",
      "representativeness"
    ],
    "stem": "A survey population contains \\(120\\) Year 11 students, \\(80\\) Year 12 students and \\(50\\) Year 13 students. A researcher wants a stratified random sample of \\(50\\) students to represent the year groups in their population proportions.",
    "parts": [
      [
        "Calculate how many students should be sampled from each year group.",
        2
      ],
      [
        "Explain how individuals should be selected within each group and why a convenience sample of 50 students arriving early could be biased.",
        2
      ]
    ],
    "hint": "There are 250 students in total. Multiply 50 by each group's fraction and then choose each group's students randomly.",
    "steps": [
      "The sampling fraction is \\(50/250=1/5\\). Allocate \\(120/5=24\\) from Year 11, \\(80/5=16\\) from Year 12 and \\(50/5=10\\) from Year 13. These total 50. [2]",
      "Number all students in each separate year-group list and randomly select the required number without replacement (ignoring repeated random selections). Early arrivals may differ systematically from later students in transport, punctuality or attitudes, so choosing only them could bias the survey. [2]"
    ],
    "answer": "Sample \\(24\\) Year 11, \\(16\\) Year 12 and \\(10\\) Year 13 students, selected randomly within their strata.",
    "misconception": "Proportional allocation is not 50/3 students per year group; the sample must reflect the actual population sizes.",
    "reflection": "What other characteristic might still be under-represented despite stratifying correctly by year group?"
  },
  {
    "id": "W09-A2",
    "section": "A",
    "title": "Connected particles with an additional external resistance",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO2": 5,
      "AO3": 3
    },
    "topics": [
      "Newton's laws",
      "light strings and smooth pulleys",
      "tension",
      "constant acceleration",
      "modelling assumptions"
    ],
    "stem": "A particle \\(A\\) of mass \\(3\\,\\mathrm{kg}\\) lies on a smooth horizontal table. It is connected by a light inextensible string over a smooth pulley to a hanging particle \\(B\\) of mass \\(2\\,\\mathrm{kg}\\). An external horizontal resistive force of constant magnitude \\(4\\,\\mathrm N\\) acts on A away from the pulley; this is a separate applied force, not friction from the table. Both particles start at rest, the string stays taut and neither mass reaches a barrier during the first two seconds. Use \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
    "parts": [
      [
        "Write a separate Newton's second-law equation for each particle using a consistent positive direction.",
        2
      ],
      [
        "Find the common acceleration and its direction.",
        2
      ],
      [
        "Calculate the string tension and show it is compatible with the equation for the hanging mass.",
        2
      ],
      [
        "Find the speed and distance moved by each mass after two seconds. State one physical assumption needed for this calculation.",
        2
      ]
    ],
    "hint": "Take A towards the pulley and B downward as positive. Include the separate 4 N force only on A.",
    "steps": [
      "For A: \\(T-4=3a\\). For B: \\(2g-T=2a\\). Positive directions are towards the pulley for A and downwards for B. [2]",
      "Add the equations to eliminate T: \\(2g-4=5a\\), so \\(a=(19.6-4)/5=3.12\\,\\mathrm{m\\,s^{-2}}\\). The positive value confirms A moves towards the pulley while B descends. [2]",
      "From \\(T-4=3a\\), \\(T=3(3.12)+4=13.36\\,\\mathrm N\\). Check for B: \\(19.6-13.36=6.24=2(3.12)\\). [2]",
      "With constant acceleration and initial speed zero, \\(v=at=3.12(2)=6.24\\,\\mathrm{m\\,s^{-1}}\\) and \\(s=\\frac12at^2=\\frac12(3.12)(2)^2=6.24\\,\\mathrm m\\). Each has this speed and travels this distance in its constrained direction. This requires the string to remain taut and the 4 N resistance to remain constant over the whole interval (either is a valid stated assumption). [2]"
    ],
    "answer": "\\(T-4=3a,\\quad19.6-T=2a\\), hence \\(a=3.12\\,\\mathrm{m\\,s^{-2}}\\), \\(T=13.36\\,\\mathrm N\\), and after 2 s \\(v=6.24\\,\\mathrm{m\\,s^{-1}},\\ s=6.24\\,\\mathrm m\\).",
    "misconception": "The table is smooth, but the question gives a separate 4 N applied resistance. Do not silently omit it or wrongly add it to the hanging particle's force diagram.",
    "reflection": "How would the direction of motion change if the external resistive force became larger than the hanging weight?"
  },
  {
    "id": "W09-A3",
    "section": "A",
    "title": "One survey, two different types of evidence",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO2": 4,
      "AO3": 6
    },
    "topics": [
      "regression interpretation",
      "extrapolation",
      "two-tailed binomial test",
      "hypothesis testing",
      "assumptions"
    ],
    "stem": "A study of a revision programme records \\(x\\), the number of sessions a student attended, and \\(y\\), a score out of 40. For \\(2\\le x\\le8\\), the fitted regression line of score on sessions is \\(\\hat y=14+1.5x\\). Independently, the programme team classifies \\(16\\) randomly selected, independently assessed practice attempts as successful or unsuccessful; \\(13\\) are successful. It is claimed that the underlying success probability is \\(p=0.5\\). At the \\(5\\%\\) significance level, test whether that probability has changed.",
    "parts": [
      [
        "Interpret the regression gradient in context and predict the score for a student attending six sessions.",
        2
      ],
      [
        "Calculate the predicted score for 20 sessions and explain why this is an unreliable use of the fitted line.",
        2
      ],
      [
        "State the null and alternative hypotheses and the distribution of the number of successes under the null hypothesis.",
        2
      ],
      [
        "Find the exact two-tailed p-value using both appropriate tails, and give it to four decimal places.",
        2
      ],
      [
        "Conclude at both the 5% and 1% significance levels, and explain why neither result proves that attending revision sessions causes more successes.",
        2
      ]
    ],
    "hint": "Use the fitted line only over the observed range for meaningful predictions. Under the null, \\(X\\sim B(16,0.5)\\); a count of 13 is equally extreme to a count of 3.",
    "steps": [
      "The model predicts an increase of \\(1.5\\) marks for each extra session, on average. At \\(x=6\\), \\(\\hat y=14+1.5(6)=23\\) marks out of 40. [2]",
      "At \\(x=20\\), \\(\\hat y=14+1.5(20)=44\\) marks, exceeding the possible maximum 40. Since 20 lies far outside the observed range of 2–8 sessions, this extrapolation is not trustworthy. [2]",
      "Let p be the underlying population success probability. State \\(H_0:p=0.5\\) against \\(H_1:p\\ne0.5\\). Under \\(H_0\\), \\(X\\sim B(16,0.5)\\). [2]",
      "By symmetry, the two-tailed p-value is \\(P(X\\le3)+P(X\\ge13)=2\\sum_{r=13}^{16}\\binom{16}{r}(0.5)^{16}\\). Since \\(\\sum_{r=13}^{16}\\binom{16}{r}=697\\), it is \\(1394/65536\\approx0.0213\\). [2]",
      "At 5%, \\(0.0213<0.05\\) so reject \\(H_0\\); there is evidence of a changed population probability. At 1%, \\(0.0213>0.01\\) so do not reject. The binary-success sample and score regression do not establish causation; student motivation and background attainment could influence both outcomes, and the attempts may not represent all students. [2]"
    ],
    "answer": "Gradient \\(1.5\\) marks/session, prediction \\(23\\) at six sessions; 20-session prediction \\(44\\) is implausible extrapolation. Test \\(H_0:p=0.5\\) vs \\(H_1:p\\ne0.5\\), exact \\(p\\text{-value}=1394/65536\\approx0.0213\\); reject at 5%, not at 1%.",
    "misconception": "A two-tailed p-value must include both extreme tails, and a statistically significant test of one outcome does not establish a causal relationship for a separate regression.",
    "reflection": "What extra study design or evidence would make an argument about the benefit of revision sessions stronger?"
  }
];
