# Week 7 authoring, curriculum and mathematics audit

Course: **Pearson Edexcel A Level Mathematics 9MA0**. Programme 1 covers all Pure content and **Year 1 Statistics/Mechanics only**. Week 7 is "Exponentials, logarithms and differential equations", with **Year 1 regression** and **Year 1 two-tailed binomial testing** in the Applied block.

## Specification checks

- Pure P06 (6.1–6.7): log laws, domains, inverses, exponential equations, power/exponential linearisation and exponential models.
- Pure P08 (8.7–8.8): separable first-order differential equations, initial conditions and limitations.
- P07 differentiation and P08 integration are revisited; P04 discrete growth is a deliberate spaced retrieval return.
- Statistics S02 (2.2, Year 1): interpret regression of y on x, fitted slope/intercept, outliers, interpolation/extrapolation. Do not claim regression proves causation.
- Statistics S05 (5.1–5.2, Year 1): one-/two-tailed binomial tests, critical regions, exact null tails, population-probability hypotheses and contextual conclusions.
- **Not included:** Year 2 Normal distribution, tests of population correlation, conditional probability or Year 2 vector mechanics.

Source: [Pearson Edexcel enhanced content guidance](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/pearson-edexcel-l3-advanced-gce-mathematics-9ma0-enhanced-content-guidance-issue-2.pdf). The Year 1 order also matches [TLMaths' Edexcel Year 1 curriculum guide](https://www.tlmaths.com/home/a-level-maths/edexcel-textbook-order/statistics-and-mechanics-year-1).

## Exact authoring budget

| Block | Questions | Marks | Working minutes |
|---|---:|---:|---:|
| R | 10 | 20 | 30 |
| P | 3 | 30 | 67 |
| M | 2 | 26 | 68 |
| A | 3 | 22 | 48 |
| **Essential total** | **18** | **98** | **213** |
| T | 3 | 32 | 45 (+15 checking) |
| X | 1 | 14 | 40 (+20 reflecting) |

Essential timing: 213 min solving + 20 min self-marking + 7 min buffer = 240 min. Essential resource AO targets: AO1 26, AO2 39, AO3 33 marks; **not** Pearson exam-paper weightings.

## Independent mathematical verification

Tests in `tests/week07-maths-audit.test.mjs` perform numerical integration/differentiation, binomial sums and direct substitutions, not simply string matching against question solutions.

- P1: common domain x>2; only x=2√2 satisfies the original log equation.
- P2: y=6x^(3/2) fits all three measurements, y(16)=384, and y>300 for x>50^(2/3)≈13.572, an extrapolation.
- P3: y=−1+√(2x²+4) solves the stated separable equation; y''>0 and the tangent of slope 1 is y=x+√2−1.
- M1: C(t)=5+80e^(−(ln2)t/3); C(3)=45, C(6)=25, first reaches 15 at t=9 h, average fall 10 units/h.
- M2: unrestricted U(t)=20e^(.2t), logistic L(t)=100/(1+4e^(−.2t)); hit 50 at 4.581 and 6.931 months. Predictions at t=10: 147.781 and 64.879.
- A2: with five observations, least-squares line y=2.7x−1.8; the first four observations lie on y=1.5x+3. At x=7 they differ by 3.6 hundreds.
- A3: two-tailed binomial with n=20,p0=.5,observed15: exact p=43400/1048576≈.0414. Critical region X≤5 or X≥15; expanding one step gives ≈.1153>5%.
- Timed T1 area=1−3e^(−2). Timed T2 integral ∫₁⁹ 24x^(−1/2)dx=96. Timed T3 two-tailed n=18,observed14: p=8096/262144≈.0309.
- X1: E(T)=40/k²[1−(1+kT)e^(−kT)], k=ln2/2. Limiting exposure=160/(ln2)². Exact 75% equation (1+kT)e^(−kT)=1/4 has a unique solution, T≈7.76930096 h (7.77 h).

## Skill integrity and publication

The **62 marked parts** each have one 9MA0 primary skill linked to permanent catalogue identifiers and optional connected skills with no duplicate mark credit. Marked zeros count as completed; incomplete questions do not imply measured zero accuracy.

The branch raises the manual gate to **7 released weeks**, while Weeks 8–10 remain unauthored/locked and programme 2 unpublished. Calendar, progress, specification links and revision suggestions use the existing shared release gate. The storage key remains `alevel-maths-calendar-progress-v1`; the site retains earlier drawings, typed working, notes, scores, history, retries and backup compatibility. A PR alone does **not** change the live site until merged.
