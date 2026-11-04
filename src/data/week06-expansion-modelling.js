export const week06ExpansionModelling = [
  {
    "id": "W06-M3",
    "section": "M",
    "title": "A repeating pollutant pulse approaches a ceiling",
    "marks": 14,
    "ao": {
      "AO1": 1,
      "AO2": 4,
      "AO3": 9
    },
    "topics": [
      "discrete recurrence",
      "geometric sums",
      "logarithmic threshold",
      "modelling limitations"
    ],
    "stem": "At the end of each month a treatment system has pollutant mass \\(u_n\\) grams, where \\(u_0=0\\). Between monthly measurements 20% of the existing pollutant is removed, then a new pulse of 60 grams is added. The system is modelled by \\(u_{n+1}=0.8u_n+60\\) for integers \\(n\\ge0\\).",
    "parts": [
      [
        "Calculate the first three nonzero masses and explain the role of the 0.8 factor.",
        3
      ],
      [
        "Derive a general formula for u_n and verify it satisfies the given recurrence and initial condition.",
        4
      ],
      [
        "Find the first month n in which the modelled mass reaches or exceeds 250 grams. Give evidence that the previous month has not reached this value.",
        4
      ],
      [
        "Find the long-run limiting mass and evaluate one reason why the model could misrepresent a real treatment process.",
        3
      ]
    ],
    "hint": "Write the total as 60(1+0.8+⋯+0.8^{n−1}), then use a finite GP formula. For the threshold, isolate 0.8^n and remember logs of 0.8 are negative.",
    "steps": [
      "\\(u_1=60,\\quad u_2=0.8(60)+60=108,\\quad u_3=0.8(108)+60=146.4\\). [2] The factor 0.8 represents the 80% remaining after a 20% removal in each monthly cycle, before the next 60g addition. [1]",
      "The new pulses form a GP in the remaining mass, so \\(u_n=60\\sum_{k=0}^{n-1}(0.8)^k\\). [1] Thus \\(u_n=60(1-0.8^n)/(1-0.8)=300(1-0.8^n)\\). [1] It gives \\(u_0=0\\); substituting yields \\(0.8u_n+60=240(1-0.8^n)+60=300(1-0.8^{n+1})=u_{n+1}\\). [2]",
      "Threshold \\(300(1-0.8^n)\\ge250\\) is equivalent to \\(0.8^n\\le1/6\\). [1] Taking logs (noting \\(\\ln0.8<0\\)) gives \\(n\\ge\\ln(1/6)/\\ln(0.8)\\approx8.03\\). [1] The least integer is n=9; \\(u_8=300(1-0.8^8)\\approx249.67<250\\). [1] While \\(u_9=300(1-0.8^9)\\approx259.73\\ge250\\). [1]",
      "Because \\(0.8^n\\to0\\), the predicted limit is \\(300\\ \\mathrm g\\). [2] A constant percentage of pollutant removed and a constant 60g pulse every month are assumptions that may fail as equipment wears or inflow varies; one justified example earns a mark. [1]"
    ],
    "answer": "\\(u_n=300(1-0.8^n)\\) grams; first reaches 250g at month9; limit 300g.",
    "misconception": "Dividing by ln0.8 reverses the inequality. The first permissible month is an integer, so round the real threshold upwards.",
    "reflection": "How would a one-off additional removal pulse alter the recurrence and the next few observed masses?"
  }
];
