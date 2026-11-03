export const week03Extension = [
  {
    "id": "W03-X1",
    "section": "X",
    "title": "When a wave only just reaches the threshold",
    "marks": 14,
    "minutes": 40,
    "ao": {
      "AO1": 3,
      "AO2": 11
    },
    "topics": [
      "parameterised trigonometric models",
      "R-sine form",
      "tangency",
      "inequality intervals",
      "approximation"
    ],
    "stem": "For a real parameter \\(k\\), a periodic signal is \\(f_k(x)=\\sin x+k\\cos x\\), with \\(0\\le x<2\\pi\\). A sensor triggers when \\(f_k(x)\\ge2\\). In a separate mode, the same sensor can be set to trigger at the lower level \\(1\\).",
    "parts": [
      [
        "Prove that \\(f_k(x)=R\\sin(x+\\alpha)\\), where \\(R=\\sqrt{1+k^2}\\) and \\(-\\frac\\pi2<\\alpha<\\frac\\pi2\\) with \\(\\tan\\alpha=k\\).",
        3
      ],
      [
        "Classify all real \\(k\\) according to whether \\(f_k(x)=2\\) has no solutions, exactly one solution, or exactly two solutions in one period.",
        3
      ],
      [
        "For \\(k=\\sqrt3\\), find the exact point where \\(f_k(x)=2\\). Prove that \\(y=2\\) is tangent to the signal graph there.",
        3
      ],
      [
        "For \\(k=\\sqrt3\\), find all times in \\(0\\le x<2\\pi\\) for which \\(f_k(x)\\ge1\\). Hence find the fraction of the full period spent at or above this lower trigger level.",
        4
      ],
      [
        "Explain why a small-angle approximation such as \\(\\sin x\\approx x\\) is not a valid way to classify the number of crossings across an entire period.",
        1
      ]
    ],
    "hint": "The amplitude is \\(\\sqrt{1+k^2}\\). The line \\(y=2\\) is crossed twice if the peak exceeds \\(2\\), touched once if the peak equals \\(2\\), and not met if the peak is below \\(2\\). For the lower threshold with \\(k=\\sqrt3\\), solve a sine inequality over the shifted interval.",
    "steps": [
      "Expand \\(R\\sin(x+\\alpha)=R\\cos\\alpha\\sin x+R\\sin\\alpha\\cos x\\). Require \\(R\\cos\\alpha=1\\) and \\(R\\sin\\alpha=k\\). Thus \\(R^2=1+k^2\\) and \\(R=\\sqrt{1+k^2}>0\\). As \\(\\cos\\alpha=\\frac1R>0\\), choose \\(-\\frac\\pi2<\\alpha<\\frac\\pi2\\), giving \\(\\tan\\alpha=k\\) and the required form. [3]",
      "The maximum of \\(f_k\\) over a full period is \\(R=\\sqrt{1+k^2}\\). If \\(R<2\\) there are no solutions, equivalent to \\(|k|<\\sqrt3\\); if \\(R=2\\) there is exactly one touching point, equivalent to \\(k=\\pm\\sqrt3\\); if \\(R>2\\) there are two crossings, equivalent to \\(|k|>\\sqrt3\\). Each classification applies to \\(0\\le x<2\\pi\\). [3]",
      "With \\(k=\\sqrt3\\), \\(R=2\\) and \\(\\alpha=\\frac\\pi3\\), so \\(f_{\\sqrt3}(x)=2\\sin(x+\\frac\\pi3)\\). Equality to \\(2\\) occurs at \\(x+\\frac\\pi3=\\frac\\pi2\\), i.e. \\(x=\\frac\\pi6\\). Here \\(f'_{\\sqrt3}(x)=\\cos x-\\sqrt3\\sin x\\) gives \\(f'_{\\sqrt3}(\\frac\\pi6)=\\frac{\\sqrt3}{2}-\\sqrt3(\\frac12)=0\\). Thus the line \\(y=2\\) touches the curve with equal gradient, establishing tangency. [3]",
      "The lower threshold is \\(2\\sin(x+\\frac\\pi3)\\ge1\\), or \\(\\sin(x+\\frac\\pi3)\\ge\\frac12\\). With \\(\\frac\\pi3\\le x+\\frac\\pi3<\\frac{7\\pi}3\\), the permitted angular intervals are \\([\\frac\\pi3,\\frac{5\\pi}6]\\cup[\\frac{13\\pi}6,\\frac{7\\pi}3)\\). Hence \\(x\\in[0,\\frac\\pi2]\\cup[\\frac{11\\pi}6,2\\pi)\\). Total length \\(\\frac\\pi2+\\frac\\pi6=\\frac{2\\pi}3\\), so the signal is at or above \\(1\\) for \\(\\frac{(2\\pi/3)}{2\\pi}=\\frac13\\) of each period. [4]",
      "A small-angle approximation only describes behaviour near the origin in radians, and does not reproduce the periodic maxima, troughs or repeated crossings; it cannot reliably classify all solutions on \\(0\\le x<2\\pi\\). [1]"
    ],
    "answer": "For \\(|k|<\\sqrt3\\), no crossings of \\(y=2\\); at \\(k=\\pm\\sqrt3\\), one touching point; for \\(|k|>\\sqrt3\\), two crossings. For \\(k=\\sqrt3\\), tangency occurs at \\((\\frac\\pi6,2)\\) and \\(f_k\\ge1\\) on \\([0,\\frac\\pi2]\\cup[\\frac{11\\pi}6,2\\pi)\\), exactly \\(\\frac13\\) of the period.",
    "misconception": "A sensor threshold is a horizontal line: equality at a peak is one touching solution, not two distinct crossings. Also, the interval includes x = 0 but excludes x = 2π, so the endpoint is not duplicated.",
    "reflection": "How would the number of solutions change if the trigger threshold were negative rather than positive?"
  }
];
