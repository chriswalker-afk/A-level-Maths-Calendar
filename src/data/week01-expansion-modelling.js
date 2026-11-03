export const week01ExpansionModelling = [
  {
    "id": "W01-M3",
    "section": "M",
    "title": "A box with a manufacturing restriction",
    "marks": 14,
    "ao": {
      "AO2": 4,
      "AO3": 10
    },
    "topics": [
      "geometric modelling",
      "cubic differentiation",
      "constraints",
      "optimal design"
    ],
    "stem": "A tray is formed by cutting a square of side \\(x\\) cm from each corner of a rectangular sheet measuring \\(30\\) cm by \\(20\\) cm, then folding up the sides. The tray has no lid. A new packaging rule requires the final base width to be at least \\(13\\) cm. All dimensions must remain positive.",
    "parts": [
      [
        "Create a volume model \\(V(x)\\) and state its physical domain before the new packaging rule is imposed.",
        4
      ],
      [
        "Find the value of x which maximises the unconstrained tray volume, giving three decimal places and justifying that it is the maximum.",
        4
      ],
      [
        "Determine the optimal cut once the minimum-width packaging rule applies. Calculate the resulting volume.",
        4
      ],
      [
        "Discuss two distinct reasons why the calculated volume may differ from the usable real-world volume.",
        2
      ]
    ],
    "hint": "The folded height is x and the base is (30−2x) by (20−2x). Differentiate the cubic, then apply the additional width inequality.",
    "steps": [
      "The final height is \\(x\\) with base \\((30-2x)\\) by \\((20-2x)\\). [2] Thus \\(V=x(30-2x)(20-2x)=600x-100x^2+4x^3\\). [1] Positive dimensions require \\(0<x<10\\). [1]",
      "\\(V'=600-200x+12x^2=4(3x^2-50x+150)\\). [1] The stationary roots are \\(x=(25\\pm5\\sqrt7)/3\\). [1] Only \\(x=(25-5\\sqrt7)/3\\approx3.924\\) lies in \\(0<x<10\\); the derivative changes from positive to negative there. [2]",
      "The width requirement is \\(20-2x\\ge13\\), so \\(0<x\\le3.5\\). [1] Since the unconstrained maximum occurs above 3.5, V is increasing on the permitted interval. [1] Choose \\(x=3.5\\) cm. [1] The volume is \\(3.5(23)(13)=1046.5\\ \\mathrm{cm^3}\\). [1]",
      "For example, sheet thickness reduces the internal dimensions; folds and tabs may consume material; corner gaps may prevent the tray holding liquids; cutting accuracy and wastage are ignored. Any two distinct justified limitations earn one mark each. [2]"
    ],
    "answer": "\\(V=x(30-2x)(20-2x)\\); unconstrained optimum \\(x\\approx3.924\\) cm; under the rule \\(x=3.5\\) cm and \\(V=1046.5\\,\\mathrm{cm^3}\\).",
    "misconception": "A stationary point outside a feasible design interval cannot be selected as the constrained optimum.",
    "reflection": "How would you revise the mathematical model if the sheet had a non-negligible thickness?"
  }
];
