export const week03ExpansionApplied = [
  {
    "id": "W03-A4",
    "section": "A",
    "title": "When a fair spinner is replaced",
    "marks": 11,
    "ao": {
      "AO1": 3,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "discrete uniform outcomes",
      "overlapping events",
      "independence",
      "model change"
    ],
    "stem": "A spinner shows equally sized sectors numbered \\(1\\) to \\(8\\). Define A as 'the result is even' and B as 'the result is at least 6'. Two spins are assumed independent. A replacement spinner uses the same labels but allocates probability \\(1/4\\) to 8 and shares the remaining probability equally among labels 1–7.",
    "parts": [
      [
        "For the original spinner, calculate \\(P(A),P(B),P(A\\cap B)\\).",
        3
      ],
      [
        "Decide whether A and B are independent for one original spin. Justify numerically.",
        2
      ],
      [
        "Find the probability that at least one of two independent original spins gives B.",
        2
      ],
      [
        "For the replacement spinner find \\(P(A),P(B),P(A\\cap B)\\) and assess whether the event-independence conclusion changes.",
        4
      ]
    ],
    "hint": "List the labels in each event. For two independent spins, 'at least one' is the complement of neither. The replacement gives each label 1–7 probability 3/28.",
    "steps": [
      "Event A is \\(\\{2,4,6,8\\}\\), so \\(P(A)=4/8=1/2\\). [1] Event B is \\(\\{6,7,8\\}\\), so \\(P(B)=3/8\\). [1] The intersection is \\(\\{6,8\\}\\), giving \\(P(A\\cap B)=2/8=1/4\\). [1]",
      "\\(P(A)P(B)=(1/2)(3/8)=3/16\\). [1] This differs from \\(P(A\\cap B)=1/4\\), so A and B are not independent. [1]",
      "The complement of at least one B is neither spin being B: \\((5/8)^2=25/64\\). [1] Hence \\(P(\\text{at least one B})=1-25/64=39/64\\). [1]",
      "On the replacement, \\(P(8)=7/28\\) and all other outcomes have probability \\(3/28\\). [1] Thus \\(P(A)=3(3/28)+7/28=4/7\\) and \\(P(B)=2(3/28)+7/28=13/28\\). [1] Also \\(P(A\\cap B)=3/28+7/28=5/14\\). [1] The product is \\((4/7)(13/28)=13/49\\ne5/14\\), so the events remain dependent, though their probabilities change. [1]"
    ],
    "answer": "Original \\(P(A)=1/2,\\ P(B)=3/8,\\ P(A\\cap B)=1/4\\), not independent; two-spin probability \\(39/64\\). Replacement \\(4/7,13/28,5/14\\), still not independent.",
    "misconception": "Equal sectors produce uniform probabilities; unequal sectors require the weighted model rather than counting labels alone.",
    "reflection": "Does independence of the two *spins* imply independence of the two events A and B on a single spin? Why not?"
  },
  {
    "id": "W03-A5",
    "section": "A",
    "title": "Drawing twice without replacement",
    "marks": 12,
    "ao": {
      "AO1": 4,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "probability tree",
      "multiplication rule",
      "complements",
      "dependence"
    ],
    "stem": "A bag contains \\(4\\) red, \\(3\\) blue and \\(2\\) green counters. Two counters are selected at random without replacement. Colours alone are recorded, in draw order.",
    "parts": [
      [
        "Give the first-draw probabilities and the possible second-draw colour probabilities after drawing red and after drawing blue.",
        3
      ],
      [
        "Find the exact probabilities of both counters being red, and of obtaining one red and one blue in either order.",
        4
      ],
      [
        "Find the probability that no green counter is drawn and hence that at least one green is drawn.",
        3
      ],
      [
        "Explain why 'the first counter is red' and 'the second counter is red' are not independent in this model.",
        2
      ]
    ],
    "hint": "There are nine counters initially and eight remain after the first draw. Add disjoint red–blue orderings rather than multiplying them.",
    "steps": [
      "First draw probabilities are \\(P(R)=4/9,\\ P(B)=3/9,\\ P(G)=2/9\\). [1] After red, remaining are 3R,3B,2G, so the second-draw probabilities are \\(3/8,3/8,2/8\\). [1] After blue, remaining 4R,2B,2G gives \\(4/8,2/8,2/8\\). [1]",
      "Both red: \\((4/9)(3/8)=12/72=1/6\\). [2] One red and one blue occurs in RB or BR order: \\((4/9)(3/8)+(3/9)(4/8)=12/72+12/72=1/3\\). [2]",
      "No green means two draws from the seven non-green counters: \\((7/9)(6/8)=42/72=7/12\\). [2] Hence at least one green is \\(1-7/12=5/12\\). [1]",
      "By symmetry each draw position has marginal \\(P(R)=4/9\\). [1] But the joint event both red has probability 1/6, not \\((4/9)(4/9)=16/81\\), so the events are dependent. [1]"
    ],
    "answer": "\\(P(RR)=1/6,\\ P(RB\\text{ or }BR)=1/3,\\ P(\\text{no green})=7/12,\\ P(\\text{green at least once})=5/12\\); red events are dependent.",
    "misconception": "Without replacement, the denominator and usually the numerator change on the second draw; do not automatically square first-draw probabilities.",
    "reflection": "How would all the calculations change if each counter were replaced before the next draw?"
  }
];
