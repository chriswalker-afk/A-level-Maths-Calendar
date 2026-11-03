export const week02ExpansionModelling = [
  {
    "id": "W02-M3",
    "section": "M",
    "title": "The shortest route is not permitted",
    "marks": 14,
    "ao": {
      "AO1": 1,
      "AO2": 4,
      "AO3": 9
    },
    "topics": [
      "coordinate modelling",
      "circle exclusion",
      "distance and speed",
      "practical assumptions"
    ],
    "stem": "A maintenance vehicle travels at a modelled constant speed of \\(2\\) units per second, from \\(A=(-4,3)\\) to \\(B=(8,3)\\). A circular danger zone has centre \\((2,0)\\) and radius \\(4\\) coordinate units. The zone includes its interior; touching its boundary may be acceptable, but the planner prefers a margin.",
    "parts": [
      [
        "Determine whether the direct horizontal journey enters the circle, and find the exact entry and exit coordinates.",
        4
      ],
      [
        "Find the time at which the direct journey first reaches the danger zone and the total time of the direct journey.",
        3
      ],
      [
        "Assess a proposed three-stage detour: vertically to \\((-4,5)\\); horizontally to \\((8,5)\\); vertically to B. Find its length and travel time and explain geometrically why it stays outside the circular zone.",
        4
      ],
      [
        "Identify two practical limitations of comparing the journeys solely by this model, and explain which journey can be recommended under the exclusion rule.",
        3
      ]
    ],
    "hint": "On the direct route substitute y=3 into the circle equation. For the detour, check the height y=5 against the highest point of the circle.",
    "steps": [
      "On y=3, the circle equation \\((x-2)^2+y^2=16\\) becomes \\((x-2)^2=7\\). [2] The entry point moving right is \\((2-\\sqrt7,3)\\); the exit is \\((2+\\sqrt7,3)\\). [1] Both lie between x=−4 and 8, so the direct journey crosses the forbidden interior. [1]",
      "The distance from A to the first contact is \\((2-\\sqrt7)-(-4)=6-\\sqrt7\\). [1] First-contact time \\((6-\\sqrt7)/2\\approx1.677\\) seconds. [1] Direct travel length is 12, hence direct time \\(6\\) seconds. [1]",
      "The detour legs have lengths \\(2,12,2\\) respectively. [2] Total length \\(16\\) and time \\(16/2=8\\) seconds. [1] Its horizontal segment is on y=5, above the zone's highest y=4; the two vertical legs have x=−4 or x=8, both six units from the centre horizontally. All segments remain outside. [1]",
      "For example, the vehicle has nonzero size so a safety margin is needed; speed may vary on corners; the risk zone may be uncertain or change; shortest actual detour might curve rather than use right angles. Two distinct justified limitations earn two marks. [2] The direct six-second journey breaches the stated restriction; among the two offered routes, the eight-second detour is compliant and should be recommended. [1]"
    ],
    "answer": "Direct entry \\((2-\\sqrt7,3)\\) at \\((6-\\sqrt7)/2\\) s, exit \\((2+\\sqrt7,3)\\); direct 6 s unsafe, detour length16 and time8 s safe.",
    "misconception": "A smaller travel time is not automatically the best solution if the route violates a hard safety constraint.",
    "reflection": "How might you design a shorter *safe* route, and what further information would you need to prove it is optimal?"
  }
];
