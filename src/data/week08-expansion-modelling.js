export const week08ExpansionModelling = [
  {
    "id": "W08-M3",
    "section": "M",
    "title": "A numerical estimate is exact for the wrong reason",
    "marks": 14,
    "ao": {
      "AO2": 4,
      "AO3": 10
    },
    "topics": [
      "variable velocity",
      "distance versus displacement",
      "trapezium rule",
      "cancellation of errors",
      "model critique"
    ],
    "stem": "The signed velocity of a laboratory cart is modelled by \\(v(t)=3t^2-12t+9\\) metres per second for \\(0\\le t\\le4\\) seconds. Initially \\(s(0)=0\\). A motion sensor samples speed only at integer seconds and applies the composite trapezium rule to estimate total distance.",
    "parts": [
      [
        "Factorise the velocity, find direction changes and state the direction on each time interval.",
        3
      ],
      [
        "Integrate to find displacement \\(s(t)\\) and calculate both the signed displacement and total distance over four seconds.",
        4
      ],
      [
        "Use four equal trapezia applied to the sampled speed \\(|v(t)|\\) to find the numerical distance estimate.",
        4
      ],
      [
        "Show how individual trapezium errors cancel, and explain why the agreement does not prove the sensor model is perfect.",
        3
      ]
    ],
    "hint": "Integrate signed velocity and split at the two zeros before finding total distance. Then compare each trapezium separately, not only the final sum.",
    "steps": [
      "Factorisation gives \\(v(t)=3(t-1)(t-3)\\). [1] Direction changes occur at \\(t=1\\) and \\(t=3\\). [1] The cart travels forwards on \\((0,1)\\) and \\((3,4)\\), and backwards on \\((1,3)\\). [1]",
      "Integrating \\(s'(t)=v(t)\\) with \\(s(0)=0\\) yields \\(s(t)=t^3-6t^2+9t\\). [1] The positions are \\(s(0)=0,s(1)=4,s(3)=0,s(4)=4\\). [1] Net displacement is \\(4\\) metres. [1] Actual distance is \\(|4-0|+|0-4|+|4-0|=12\\) metres. [1]",
      "Speeds at \\(t=0,1,2,3,4\\) are \\(9,0,3,0,9\\) m/s. [1] With \\(h=1\\) the rule gives \\(T_4=\\frac12[9+2(0+3+0)+9]\\). [2] Hence \\(T_4=12\\) metres, numerically identical to the exact distance. [1]",
      "Over \\([0,1],[1,2],[2,3],[3,4]\\), exact distances are \\(4,2,2,4\\) m, whereas trapezia give \\(4.5,1.5,1.5,4.5\\) m. [1] The signed errors \\(+0.5,-0.5,-0.5,+0.5\\) sum to zero. [1] This coincidence of totals conceals inaccurate subinterval estimates; real sensor noise, between-sample variation or a different sampling grid would generally destroy the cancellation. [1]"
    ],
    "answer": "Displacement \\(4\\ \\mathrm m\\), distance \\(12\\ \\mathrm m\\), trapezium estimate \\(12\\ \\mathrm m\\), with cancelling subinterval errors.",
    "misconception": "Integrating velocity directly gives displacement, not total distance; an apparently exact trapezium sum may conceal offsetting errors.",
    "reflection": "Would the same perfect agreement survive if the measurements were taken every half-second?"
  }
];
