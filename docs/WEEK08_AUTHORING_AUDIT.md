# Week 8 — independent mathematics, Edexcel 9MA0 scope and release audit

**Week:** 08, Numerical methods and synthesis. **Programme:** 10-week internal preparation using all Pure mathematics and Year 1 Statistics/Mechanics only.

## Primary course specification

Checked against Pearson's [9MA0 enhanced content guidance, issue 2](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/Teaching%20and%20learning%20materials/pearson-edexcel-l3-advanced-gce-mathematics-9ma0-enhanced-content-guidance-issue-2.pdf) and its [content exemplification](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/Teaching%20and%20learning%20materials/AS_and_A_level_Mathematics_Content_Exemplification.pdf).

- **P09 9.1:** roots from changes of sign on continuous intervals, including why an asymptote invalidates the test.
- **P09 9.2:** fixed-point iteration, staircase/cobweb behaviour, alternating versus diverging steps.
- **P09 9.3:** Newton–Raphson iterations, small/zero-derivative and poor-starting-value failures.
- **P09 9.4:** composite trapezium rule and sensible upper/lower error analysis. Pearson only requires the trapezium rule as a numerical integration method; the programme uses analytical integration as a benchmark, not additional off-syllabus quadrature rules.
- **P09 9.5:** choosing and evaluating numerical methods in context. P07/P08/P06 skills are revisited to integrate numerical and analytical reasoning.
- **M08 8.4, Year 1:** smooth pulley, light inextensible string, connected particles; one hanging mass and one horizontal-table mass are legitimate 9MA0 examples. Year 1 constant acceleration M07 skills underpin the second motion stage. Inclined-plane/friction/moments/projectile tasks have intentionally been excluded from the Year 1 block.

**Optional extension:** a proof that Newton's iteration for the positive square root of 2 converges, with exact rational upper/lower bounds, builds beyond routine exam requirements but is appropriate for optional A/A* challenge.

## Four-hour structure

| Section | Questions | Marks | Minutes |
|---|---:|---:|---:|
| R | 10 | 20 | 30 |
| P | 3 | 30 | 67 |
| M | 2 | 26 | 68 |
| A | 3 | 22 | 48 |
| **Essential** | **18** | **98** | **213** |
| T | 3 | 32 | 45 |
| X | 1 | 14 | 40 |

Essential 4 hours: 213 working + 20 self-marking + 7 buffer = 240 minutes. **AO1 26, AO2 39, AO3 33 essential marks** are resource-design targets, not whole-exam weightings.

## Independent mathematics checks

The dedicated `tests/week08-maths-audit.test.mjs` verifies results with independent formulas, function evaluations, numerical differentiation/integration, direct Newton steps and exact rational inequalities:

- **R1/P1:** x³−x−1 changes sign between 1.3 and 1.4; Newton from 1.3 reaches 1.324717957…, giving **1.3247** to 4 d.p.
- **R2:** 1/(x−2) changes sign from x=1 to 3 but has a pole, not a root, at x=2.
- **P2:** trapezium T₄ ≈ 1.727221905 vs exact ∫₀¹eˣdx = e−1 ≈ 1.718281828; **overestimate ≈ 0.008940076**, consistent with convexity.
- **P3:** positive root of x²+x−3=0 is (√13−1)/2 ≈ 1.302775638. The iteration √(3−x) has derivative −1/(2α) ≈ −0.383796, locally convergent. The alternative 3−x² has derivative −2α ≈ −2.605551, locally repelling.
- **M1:** C(t)=20e⁻ᵗ+t²+5t has C″(t)>0 on t≥0; unique cost minimum at **t≈1.038797978 h**, cost **£13.350687…**.
- **M2:** excess exposure 300(1−e⁻¹·⁵) ≈ **233.060952 ppm h**. Five hourly trapezia yield **234.806293 ppm h**, signed error **+1.745341 ppm h**. The 40 ppm crossing is **3.662040962 h**, independently verified via logs and Newton.
- **A2:** connected acceleration **14.7/5.5 ≈ 2.672727 m/s²**, tension **≈10.690909 N**, distance in two seconds **≈5.345455 m**.
- **A3:** connected acceleration **5.88 m/s²**, tension **11.76 N**. At floor contact, time **≈0.638877 s**, speed **≈3.756594 m/s**. Additional slack-string travel **≈0.212959 s**, total **≈0.851835 s**.
- **T1:** x³−2x−2 root **≈1.769292354**. **T2:** logarithmic trapezium **≈1.282104582**, exact integral 3ln3−2 **≈1.295836866**, signed error **−0.013732284**. **T3:** exact distance 13+3e⁻⁴ **≈13.054946917 m**, trapezia **≈12.813521163 m**; distance 12 m reached at **≈1.866021041 s**.
- **X1:** exact Newton iterates x₁=3/2, x₂=17/12, x₃=577/408, x₄=665857/470832. The rigorous bound **941664/665857 < √2 < 665857/470832** establishes **√2 = 1.41421** to 5 decimal places.

The full Week 8 question bank has **22 original questions, 63 marked parts, 144 marks**. Exactly one permanent primary 9MA0 skill is attached to each part, and connected practice links do not double-count marks.

## Publication and student data

The feature branch proposes `releasedWeeks:8`; Weeks 9–10 remain `hasPublishedContent:false`. The second programme remains unpublished. The shared release gate prevents unreleased questions from being accessed through calendar routes, saved bookmarks and specification practice. Existing question IDs, attempts, working modes, notes, drawings, progress, marking behaviour (including score zero), exports and backup/restore are untouched. Storage key remains **alevel-maths-calendar-progress-v1**.

New tests: `week08-content.test.mjs`, `week08-maths-audit.test.mjs`, `week08-student-flow.test.mjs`. Existing publication, UI, progress, all previous-week regression, MathJax parsing and JavaScript syntax checks are updated. Creating this PR does not publish Week 8 until merged.
