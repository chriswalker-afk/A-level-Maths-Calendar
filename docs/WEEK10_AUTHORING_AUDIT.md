# Week 10 — mock paper authoring, curriculum and student-experience audit

**Programme:** Pearson Edexcel 9MA0 Internal Exam Preparation (all Pure Mathematics, Year 1 Applied only). **Format:** two original, timed mock papers and a distinct diagnostic session.

## Why Week 10 is different from Weeks 1–9

The previous blueprint proposed a "100-mark Pure mock" inside a single 8-mark P1 question and a "50-mark Applied mock" inside a 10-mark P2 slot. These are internally incompatible with one-per-question marking and the standard weekly 98-mark target. Week 10 therefore **replaces, rather than distorts, the six-block 98-mark practice template**. It uses 12 genuine Pure paper questions (`W10-P1`–`W10-P12`, 100 marks/120 minutes), 10 genuine Year 1 Applied questions (`W10-A1`–`W10-A10`, 50 marks/60 minutes) and a separate review screen (60 minutes, no fake "marks"). **Total: 150 original mock marks, 22 questions and 240 minutes.** This change is recorded in `docs/QUESTION_BLUEPRINT.md`.

| Paper/task | Questions | Marks | Time |
|---|---:|---:|---:|
| Pure Mathematics | 12 | 100 | 120 min |
| Year 1 Statistics | 5 | 25 | 30 min |
| Year 1 Mechanics | 5 | 25 | 30 min |
| **Examination** | **22** | **150** | **180 min** |
| **Self-mark, first-error analysis and reattempt plan** | — | — | **60 min** |

The whole set has authoring-level AO1 **75**, AO2 **38**, AO3 **37** marks, close to Pearson's qualification-level 50/25/25 balance, not an attempt to reproduce the exact weighting of a named past paper.

## Official specification boundary

Crosschecked against [Pearson Edexcel 9MA0 Mathematics Issue 4](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf).

- **Pure:** proof and counterexamples, factor theorem and inequalities, circle and vector coordinate geometry, trigonometry, finite geometric sums, non-integer binomial expansion, logarithmic/exponential modelling, implicit differentiation, substitution/by-parts and partial-fraction integration, separable first-order differential equation, Newton–Raphson, trapezium integration, 3D vectors.
- **Statistics — Year 1:** stratified sampling, histogram densities and grouped means, unions/intersections and independence, binomial probabilities, and one-tailed binomial hypothesis testing. Year 2 Normal modelling, conditional probability and correlation hypothesis tests are not included.
- **Mechanics — Year 1:** straight-line displacement versus distance, vertical motion under constant gravity, variable acceleration in one dimension, Newton's laws on a smooth horizontal surface and connected particles with a light string over a smooth pulley. Year 2 inclined-plane dynamics, friction, moments and projectile motion are excluded.
- **Mathematics scope correction:** a proposed numerical-integration question involving `1/(1+x²)` was replaced with `√(1+4x)`, giving an appropriate reverse-chain-rule exact benchmark and a curved trapezium estimate without introducing an unsupported inverse-trigonometric integral.

Every part has a primary permanent specification skill ID. Connected skills are practice/navigation links only: marks are never counted a second time. The 22 questions contain **68 individually marked parts** and have original stems, hints, full worked mark schemes, answers, misconceptions and reflections.

## Independently checked numerical and exact results

The audit in `tests/week10-maths-audit.test.mjs` does not simply compare strings in solutions. It independently checks exact polynomial/vector identities, finite/infinite sums, numerical derivatives and Simpson quadrature as a verification oracle (not a method taught in the questions), Newton iterations, force equations and binomial probabilities.

- **Pure P1–P2:** `n(n+1)(n+2)` is divisible by 6; `n(n+1)` is always even, not always divisible by 4. `x³−4x²−x+4=(x+1)(x−1)(x−4)` and the inequality is satisfied on `(-∞,−1] ∪ [1,4]`.
- **Pure P3–P4:** line–circle intersections `(2±√5,−1±2√5)` (matching signs) form a diameter of length 10. The trig curve `2sin x cos x−cos x` has four exact zeros `π/6,π/2,5π/6,3π/2`; at `x=π/3`, tangent slope is `√3/2−1`.
- **Pure P5–P6:** GP first five total `93` and `S₇=381`. Fractional binomial `(1+x)^(-1/2)=1−x/2+3x²/8+...` valid for `|x|<1`. The decaying quantity has `k=ln2/2 h⁻¹`, half-life 2 h, and drops under 1 g after `t>2ln12/ln2`.
- **Pure P7–P8:** implicit gradient `−(2x+y)/(x+2y)` gives tangent slope `−4/5` and normal `5/4` at (1,2). Integrals are `ln(1+x³)+C`, `e^(2x)(2x−1)/4+C`, and definite `(e²+1)/4`.
- **Pure P9–P10:** partial fractions `(3x+2)/[x(x+2)]=1/x+2/(x+2)` yield particular solution `y(3)=ln(25/3)`. The exact integral `∫₀¹√(1+4x)dx=(5√5−1)/6≈1.696723315`; 4-strip trapezia give `1.691074590`, signed error `−0.005648725`. Newton's method from 1.3 for `x³−x−1=0` gives `1.324717957`, or `1.3247` to 4 decimal places.
- **Pure P11–P12:** `t e^(−t)` peaks at `t=1` with height `1/e`, area to t=2 is `1−3e^(−2)`. The parallelogram's fourth 3D point is `(7,−4,5)`; diagonal midpoints both `(4,−1,2)`, with opposite side length `4√3`.
- **Statistics A1–A3:** stratified sample (36 Year 12, 24 Year 13); variable-width histogram densities (1.2,3.6,1.0), grouped mean 12.125. Independent events with intersection 0.2 have union 0.7 and neither 0.3.
- **Statistics A4–A5:** `P(B(8,0.25)=2)=0.3114624023`, `P(X≥1)=0.8998870849`. With 10 of 12 passes at `p₀=0.5`, the correct one-tailed exact p-value is `79/4096≈0.0193`; reject at 5%.
- **Mechanics A6–A8:** velocity `6−2t` reverses at 3 s, net displacement 5 m, total distance 13 m. A vertical launch at 14.7 m/s rises for 1.5 s to 11.025 m and returns in 3 s. From `a=6t−12, v(0)=9`, obtain `v=3(t−1)(t−3)`, displacement +4 m but distance 12 m in four seconds.
- **Mechanics A9–A10:** net horizontal force 10 N on 5 kg yields acceleration 2 m/s². A 3 kg table mass connected to a 2 kg hanging mass yields acceleration 3.92 m/s², tension 11.76 N and distance 4.41 m in 1.5 s.

## Exam interface, saved evidence and release control

Week 10 reuses the **calendar-first home screen** with direct link to `#/study/10/P/0`. Its two section tabs are labelled *Pure mock · 100 marks* and *Applied mini-mock · 50 marks*; each question has independent Notes/Maths/Draw working (locally saved). An optional 120- or 60-minute timer is stored at `reflections.week10.timers` using timestamped starts and finishes; no data is deleted on restart.

During active timed sittings **hints, worked solutions, self-marking controls, specification links, attempt history, prior paper marks and the diagnostic review are hidden**. The clock counts down independently of page navigation. On finish, worked solutions and scoring return. Recorded zero is completed; lack of a mark remains *unmarked*, not demonstrated zero accuracy. Overall 100- or 50-mark totals are presented as paper scores only when all questions are marked, with distinct 25/25 Applied submarks.

The 60-minute `#/mock-review/10` page provides a paper-by-paper marked-question table, evidence-led priority list, and three explicit editable diagnostic notes: first avoidable error, method to repair and scheduled reattempts. These are persisted inside the same `alevel-maths-calendar-progress-v1` record, and round-trip through the existing version-1 progress backup parser. Existing Weeks 1–9 question IDs, notes, written equations, handwriting/drawings, scores, history, and specification evidence remain untouched.

After **merging** this PR, Weeks **1–10** will have **220 authored questions, 184 essential**, with all ten weeks accessible. The separate February–June 2027 full A Level programme remains **unpublished**. There is no cloud account, external submission of student marks, or automatic grade prediction.

New checks: `tests/week10-content.test.mjs`, `tests/week10-maths-audit.test.mjs`, `tests/week10-mock.test.mjs`, and `tests/week10-student-flow.test.mjs`, with updated existing Week 1–9 student flows, the MathJax parser and publication checks. GitHub Actions is the authoritative final validation.
