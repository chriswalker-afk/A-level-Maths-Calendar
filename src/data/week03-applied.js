export const week03Applied = [
  {
    "id": "W03-A1",
    "section": "A",
    "title": "Independent does not mean disjoint",
    "marks": 4,
    "minutes": 8,
    "ao": {
      "AO1": 2,
      "AO3": 2
    },
    "topics": [
      "probability",
      "independence",
      "mutually exclusive events",
      "addition rule"
    ],
    "stem": "A fair six-sided die is rolled once. Let \\(A\\) be the event that the outcome is even and \\(B\\) the event that the outcome is greater than \\(4\\).",
    "parts": [
      [
        "Calculate \\(P(A)\\) and \\(P(B)\\).",
        2
      ],
      [
        "Determine whether \\(A\\) and \\(B\\) are independent, showing the necessary probability calculation.",
        1
      ],
      [
        "Determine whether the events are mutually exclusive. Give a reason.",
        1
      ]
    ],
    "hint": "List each event's outcomes. Independence tests whether \\(P(A\\cap B)=P(A)P(B)\\); mutual exclusivity tests whether the overlap is empty.",
    "steps": [
      "\\(A=\\{2,4,6\\}\\) gives \\(P(A)=\\frac36=\\frac12\\), and \\(B=\\{5,6\\}\\) gives \\(P(B)=\\frac26=\\frac13\\). [2]",
      "The overlap is outcome \\(6\\), so \\(P(A\\cap B)=\\frac16\\). Since \\(P(A)P(B)=\\frac12\\cdot\\frac13=\\frac16\\), the events are independent. [1]",
      "They are not mutually exclusive: outcome \\(6\\) belongs to both events, so \\(P(A\\cap B)>0\\). [1]"
    ],
    "answer": "\\(P(A)=\\frac12\\), \\(P(B)=\\frac13\\); independent, but not mutually exclusive.",
    "misconception": "Independent events can occur together. Mutually exclusive events cannot both occur on the same trial.",
    "reflection": "Can two non-empty events with positive probability be both independent and mutually exclusive? Explain."
  },
  {
    "id": "W03-A2",
    "section": "A",
    "title": "A dependent two-draw tree",
    "marks": 8,
    "minutes": 18,
    "ao": {
      "AO1": 2,
      "AO2": 2,
      "AO3": 4
    },
    "topics": [
      "probability trees",
      "without replacement",
      "complementary events",
      "independence"
    ],
    "stem": "A bag contains \\(3\\) red counters and \\(2\\) blue counters. Two counters are selected at random, one after the other, without replacement. Every counter is equally likely to be chosen at each draw.",
    "parts": [
      [
        "Give the probabilities for both first-draw branches and for the second-draw branches following a red and a blue first draw.",
        3
      ],
      [
        "Find the probability that the two counters have different colours.",
        2
      ],
      [
        "Find the probability of drawing at least one red counter.",
        1
      ],
      [
        "If the first counter were replaced before the second draw, find the probability of different colours and explain how and why the answer differs.",
        2
      ]
    ],
    "hint": "The number of counters left changes after a draw. For 'at least one red', subtract the probability of two blues from 1.",
    "steps": [
      "First draw: \\(P(R)=\\frac35\\), \\(P(B)=\\frac25\\). After red: \\(P(R)=\\frac24\\), \\(P(B)=\\frac24\\). After blue: \\(P(R)=\\frac34\\), \\(P(B)=\\frac14\\). [3]",
      "Different colours means RB or BR: \\(P(RB)+P(BR)=\\frac35\\frac24+\\frac25\\frac34=\\frac6{20}+\\frac6{20}=\\frac35\\). [2]",
      "Two blues have probability \\(P(BB)=\\frac25\\frac14=\\frac1{10}\\). Therefore at least one red has probability \\(1-\\frac1{10}=\\frac9{10}\\). [1]",
      "With replacement the probabilities do not change between draws, so \\(P(RB\\text{ or }BR)=2\\cdot\\frac35\\cdot\\frac25=\\frac{12}{25}\\). This is \\(\\frac35-\\frac{12}{25}=\\frac3{25}\\) lower than without replacement: after the first colour is removed, drawing the other colour becomes comparatively more likely. [2]"
    ],
    "answer": "Without replacement, different colours \\(\\frac35\\) and at least one red \\(\\frac9{10}\\). With replacement, different colours \\(\\frac{12}{25}\\).",
    "misconception": "Drawing twice without replacement does not keep the original denominator of five on the second draw.",
    "reflection": "Which individual path has the greatest probability, and how do you know?"
  },
  {
    "id": "W03-A3",
    "section": "A",
    "title": "Overlapping clubs and two selections",
    "marks": 10,
    "minutes": 22,
    "ao": {
      "AO1": 2,
      "AO2": 3,
      "AO3": 5
    },
    "topics": [
      "Venn diagrams",
      "independence tests",
      "without replacement",
      "model assumptions"
    ],
    "stem": "A year group contains \\(120\\) students. Of these, \\(70\\) belong to the sports club \\((S)\\), \\(55\\) belong to the music club \\((M)\\), and \\(25\\) belong to neither club. One student is selected at random. Later, two distinct students are selected without replacement.",
    "parts": [
      [
        "Calculate how many students belong to both clubs.",
        2
      ],
      [
        "Find the number in each of the four regions of a two-set Venn diagram, and hence the probability that one randomly selected student belongs to exactly one club.",
        3
      ],
      [
        "Test whether club membership events \\(S\\) and \\(M\\) are independent for a randomly selected student. Show both probabilities you compare.",
        2
      ],
      [
        "Calculate the probability that both of the two students chosen without replacement belong to neither club.",
        2
      ],
      [
        "Explain why squaring the one-student probability of belonging to neither club would be an inappropriate calculation for the two-student selection.",
        1
      ]
    ],
    "hint": "First find the number in the union from the 'neither' count, then use inclusion–exclusion. For the final selection, the pool loses one student after the first choice.",
    "steps": [
      "\\(n(S\\cup M)=120-25=95\\). By inclusion–exclusion \\(95=70+55-n(S\\cap M)\\), giving \\(n(S\\cap M)=30\\). [2]",
      "Sports only: \\(70-30=40\\); both: \\(30\\); music only: \\(55-30=25\\); neither: \\(25\\). Exactly one club has \\(40+25=65\\) students, so the probability is \\(\\frac{65}{120}=\\frac{13}{24}\\). [3]",
      "\\(P(S\\cap M)=\\frac{30}{120}=\\frac14=\\frac{72}{288}\\) while \\(P(S)P(M)=\\frac{70}{120}\\cdot\\frac{55}{120}=\\frac{77}{288}\\). These differ, so the events are not independent. [2]",
      "The probability both students are in neither club is \\(\\frac{25}{120}\\cdot\\frac{24}{119}=\\frac5{119}\\). [2]",
      "The first selected student is not replaced, so the second selection is from \\(119\\) students and only \\(24\\) remain in neither club if the first also belonged to neither. The successive draws are dependent; \\((\\frac{25}{120})^2\\) assumes replacement/unchanged probabilities. [1]"
    ],
    "answer": "Both clubs \\(30\\); sports only \\(40\\), music only \\(25\\), neither \\(25\\). Exactly one club: \\(\\frac{13}{24}\\). Not independent; two 'neither' students: \\(\\frac5{119}\\).",
    "misconception": "A Venn diagram overlap describes memberships in one student, while the second part uses two dependent student draws. Do not confuse event overlap with dependence between draws.",
    "reflection": "What extra information would you need to know whether the club counts are representative of the whole school?"
  }
];
