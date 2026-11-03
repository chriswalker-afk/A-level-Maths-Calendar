export const week06ExpansionTimed = [
  {
    "id": "W06-T4",
    "section": "T",
    "title": "A finite sigma sum reveals its stopping point",
    "marks": 8,
    "ao": {
      "AO1": 3,
      "AO2": 5
    },
    "topics": [
      "sigma notation",
      "arithmetic sum",
      "quadratic equations",
      "integer constraints"
    ],
    "stem": "An increasing series has general term \\(5k-3\\) at position \\(k\\ge1\\). Its first n terms sum to 119.",
    "parts": [
      [
        "Obtain a closed form for \\(S_n=\\sum_{k=1}^n(5k-3)\\).",
        2
      ],
      [
        "Determine n by solving an exact algebraic equation.",
        3
      ],
      [
        "Verify your value and explain why the total 119 cannot be attained by a second positive integer n.",
        3
      ]
    ],
    "hint": "Use Σk=n(n+1)/2. Your equation is quadratic, but n must be a positive integer.",
    "steps": [
      "\\(S_n=5\\sum_{k=1}^nk-3n=5n(n+1)/2-3n\\). [1] Simplify to \\(S_n=n(5n-1)/2\\). [1]",
      "Set \\(n(5n-1)/2=119\\), giving \\(5n^2-n-238=0\\). [1] The discriminant is \\(1+4(5)(238)=4761=69^2\\). [1] Hence \\(n=(1\\pm69)/10\\) and the admissible solution is \\(n=7\\). [1]",
      "Substitute \\(S_7=7(35-1)/2=119\\). [1] Each term \\(5k-3\\ge2>0\\) for k≥1, so successive partial sums strictly increase. [1] Thus no other positive integer n can give the same sum. [1]"
    ],
    "answer": "\\(S_n=n(5n-1)/2\\), and exactly \\(n=7\\) terms sum to 119.",
    "misconception": "The negative quadratic root is not a valid number of terms; an increasing sequence of positive terms has strictly increasing partial sums.",
    "reflection": "What would change if the summand could become negative at some positions?"
  }
];
