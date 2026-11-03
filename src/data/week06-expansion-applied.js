export const week06ExpansionApplied = [
  {
    "id": "W06-A4",
    "section": "A",
    "title": "A histogram can mislead if widths are ignored",
    "marks": 11,
    "ao": {
      "AO1": 3,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "Year 1 histograms",
      "frequency density",
      "linear interpolation",
      "limitations"
    ],
    "stem": "A random sample of \\(50\\) journeys has durations grouped as shown: 0–10 min (frequency 8); 10–20 min (frequency 12); 20–40 min (frequency 20); 40–50 min (frequency 10). Treat each class as continuous and assume values are approximately uniform within each class when estimating percentiles.",
    "parts": [
      [
        "Calculate the frequency densities for all four classes and identify which histogram bar is tallest.",
        3
      ],
      [
        "Estimate the sample median and the upper quartile by linear interpolation.",
        3
      ],
      [
        "Estimate the proportion of journeys exceeding 30 minutes and explain which assumption the estimate depends upon.",
        3
      ],
      [
        "Explain why the class with the most observations need not have the tallest histogram bar, and give one limitation of drawing conclusions from these grouped data.",
        2
      ]
    ],
    "hint": "Divide frequency by class width, not by total sample size. Median and upper quartile positions are the 25th and 37.5th observations of 50.",
    "steps": [
      "Class widths are 10,10,20,10. [1] Densities are \\(8/10=0.8,\\ 12/10=1.2,\\ 20/20=1,\\ 10/10=1\\). [1] The 10–20 minute class has the tallest histogram bar (density 1.2). [1]",
      "Cumulative frequencies are 8,20,40,50; the median (25th) lies in 20–40. [1] Interpolation gives \\(20+(25-20)(20/20)=25\\) min. [1] The upper quartile (37.5th) is \\(20+(37.5-20)(20/20)=37.5\\) min. [1]",
      "Within the 20–40 class, the 30–40 half is estimated to contain 10 journeys. [1] Together with all 10 journeys in 40–50, approximately 20 of 50 exceed 30 min, so the estimated proportion is \\(20/50=0.4\\). [1] This assumes observations are distributed uniformly within the 20–40 class. [1]",
      "Height represents frequency *density*, so the widest class can contain more observations yet have a shorter bar. [1] Grouped values conceal the precise times and any clustering or outliers within a class; a reasoned relevant limitation earns a mark. [1]"
    ],
    "answer": "Density values \\(0.8,1.2,1,1\\); tallest 10–20 class; estimated median 25 min, upper quartile 37.5 min; estimated proportion above30 min 0.4.",
    "misconception": "A histogram's height is frequency density, not raw frequency. Always account for unequal class widths.",
    "reflection": "How would the percentile estimates change if most observations in the 20–40 minute class clustered near 20?"
  },
  {
    "id": "W06-A5",
    "section": "A",
    "title": "Two connected particles, then a slack string",
    "marks": 12,
    "ao": {
      "AO1": 3,
      "AO2": 4,
      "AO3": 5
    },
    "topics": [
      "Year 1 connected particles",
      "Newton's second law",
      "constant acceleration",
      "staged motion"
    ],
    "stem": "Particle A has mass \\(3\\ \\mathrm{kg}\\) on a smooth horizontal table; it is connected by a light inextensible string over a smooth pulley to a hanging particle B of mass \\(2\\ \\mathrm{kg}\\). B begins \\(1.96\\ \\mathrm m\\) above the floor. Both particles are released from rest. Use \\(g=9.8\\ \\mathrm{m\\,s^{-2}}\\). Assume A remains on a sufficiently long table after B hits the floor and that the string then becomes slack.",
    "parts": [
      [
        "Write Newton's second-law equations for A and B before B hits the floor, with a consistent positive direction.",
        3
      ],
      [
        "Calculate the common acceleration and the string tension.",
        3
      ],
      [
        "Find the time at which B first hits the floor and the speed at that instant.",
        4
      ],
      [
        "Calculate how far A moves in the following two seconds if the horizontal surface stays smooth, and identify one practical assumption behind that result.",
        2
      ]
    ],
    "hint": "Take A towards the pulley and B downwards as positive. Before impact, use T=3a and 2g−T=2a. After impact, A experiences no horizontal resultant force in the stated model.",
    "steps": [
      "On A, horizontal Newton's second law gives \\(T=3a\\). [1] On B, downward positive gives \\(2g-T=2a\\). [1] The same acceleration magnitude is used because the string is light, inextensible and taut before impact. [1]",
      "Add the two equations to get \\(2g=5a\\), so \\(a=19.6/5=3.92\\ \\mathrm{m\\,s^{-2}}\\). [2] Then \\(T=3(3.92)=11.76\\ \\mathrm N\\). [1]",
      "Before impact, \\(s=ut+\\frac12at^2\\) with s=1.96, u=0 and a=3.92. [2] Therefore \\(1.96=1.96t^2\\) gives \\(t=1\\ \\mathrm s\\). [1] Speed \\(v=at=3.92\\ \\mathrm{m\\,s^{-1}}\\). [1]",
      "After B lands and the string slackens, A has no horizontal force on the modelled smooth table, so it continues at constant speed. The further distance is \\(3.92(2)=7.84\\ \\mathrm m\\). [1] This assumes negligible friction and a table long enough for A to remain on it during those two seconds (or another valid limitation). [1]"
    ],
    "answer": "\\(a=3.92\\ \\mathrm{m\\,s^{-2}},\\ T=11.76\\ \\mathrm N\\); B lands at t=1 s with speed 3.92 m/s; A travels another 7.84 m in two seconds on the frictionless table.",
    "misconception": "The tension force disappears after B contacts the floor and the string becomes slack; continuing to apply the previous acceleration is incorrect.",
    "reflection": "How would a modest frictional force on A change the distance travelled after impact?"
  }
];
