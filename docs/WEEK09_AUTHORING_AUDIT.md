# Week 9 — synoptic mathematical, curriculum and publication audit

**Course:** Pearson Edexcel 9MA0 A Level Mathematics. **Programme:** internal examination preparation with all Pure topics and **Year 1 Applied only**. **Status:** 22 original questions authored in the Week 9 feature branch; Week 10 locked.

## Published-course blueprint reconciliation

The original Week 9 draft asked for '50-minute ~40-mark Pure sets' in P1/P2 slots of **8 and 10 marks**, and a '45-minute 30–35-mark Applied set' in the **12-mark** P3 slot. Those cannot simultaneously satisfy the existing six-section question interface and 98-mark four-hour essential programme. The *authored* resolution retains the established weekly structure: P1/P2/P3 are connected **8/10/12-mark** Pure synoptic problems; A1/A2/A3 provide the Year 1 Applied section; M2 is the **14-mark marking/error-analysis** activity, and T1/T2/T3 are the recommended **32-mark** timed set. The original mock-style idea can be developed as a separate Week 10 or mock-paper format rather than mislabelling an 8-mark question as 40 marks. The change is recorded in `docs/QUESTION_BLUEPRINT.md`.

## Pearson 9MA0 curriculum checks

Checked against [Pearson 9MA0 Issue 4 specification](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf) and [enhanced guidance, Issue 2](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/pearson-edexcel-l3-advanced-gce-mathematics-9ma0-enhanced-content-guidance-issue-2.pdf).

- Pure topics P01–P10 are revisited: proof, cubic factorisation, coordinate geometry and vector displacement, geometric sequences, trigonometric equations and cosine rule, exponential and logarithmic reasoning, derivatives, integrals, parametric differentiation and area, and numerical roots.
- Applied S01/S02/S04/S05: stratified random sampling, regression interpretation with caution about extrapolation, Year 1 binomial probability and one-/two-tailed hypothesis testing.
- Applied M07/M08: straight-line displacement/velocity and Newton's laws for connected particles over smooth pulleys, without Year 2-only friction or inclined planes.
- Excludes all Programme 1 Year 2-only Applied content including conditional probability, Normal distributions, correlation significance tests, friction, moments and projectiles.
- The A/A* alternating-logarithm argument is a rigorous optional proof extension; it is not misrepresented as a routine specification requirement.

## Exact structure and mark/skill integrity

| Section | Questions | Marks | Working min | Marked parts |
|---|---:|---:|---:|---:|
| R | 10 | 20 | 30 | 10 |
| P | 3 | 30 | 67 | 14 |
| M | 2 | 26 | 68 | 11 |
| A | 3 | 22 | 48 | 11 |
| **Essential** | **18** | **98** | **213** | **46** |
| T | 3 | 32 | 45 | 15 |
| X | 1 | 14 | 40 | 5 |
| **All questions** | **22** | **144** | — | **66** |

The core is **213 minutes of questions + 20 minutes of marking + 7 minutes of buffer = 240 minutes**. Resource-specific AO mark targets: **AO1 26, AO2 39, AO3 33**. Each of the 66 marked parts receives **one and only one primary permanent skill identifier**, not multiple scores for connected skills.

## Independently validated mathematical results

Tests in `tests/week09-maths-audit.test.mjs` calculate values independently using exact identities, substitutions, Newton updates, numerical quadrature, direct force balances and binomial coefficient sums. High-risk results include:

- R1 polynomial factorises into (x−2)(x−3)(x+1); R3's exact angles are π/6 and π/3; R7's first Newton iterate is 35/27.
- P1 intersection points (3,4) and (−4,−3), vector BA=(7,7), chord 7√2, cos AOB=−24/25, geometric total 14√2.
- P2 derivative of ln x/x is (1−ln x)/x²; maximum (e,1/e); integral from 1 to e² equals 2; f(x)=0.2 has exactly two positive roots, with larger root ≈12.713206789 (12.7132 to 4 d.p.).
- P3 parametric x=t+sin t, y=1−cos t: tangent at t=π/2 is y=x−π/2; non-negative parametric area is π/2; the endpoint tangent is vertical in the limiting sense.
- M1 power P(t)=20t(6−t), peak 180 W at t=3, cumulative E(t)=60t²−(20/3)t³, full energy 720 Wh; unique 480 Wh crossing at t≈3.678221141 h.
- M2 corrected output derivative N'(t)=120e^(−t/2)(1−t/2), so maximum at t=2 equals 240/e; binomial X~B(12,0.4) with x=8 has point probability 0.04204265472 but required upper tail 0.05730992128. The wrong point probability would incorrectly reject at 5%; the correct test does **not** reject.
- A1 stratified sampling of populations (120,80,50) into 50 yields (24,16,10). A2 force equations T−4=3a and 19.6−T=2a yield a=3.12 m/s² and T=13.36 N. A3 regression y-hat=14+1.5x predicts 23 at x=6 but an impossible 44/40 at x=20; two-tailed binomial X~B(16,0.5), observed 13, has p=1394/65536≈0.0212708 (reject at 5%, not 1%).
- T1 rational binomial (1−2x)^−1/2 has quadratic series 1+x+3x²/2, valid |x|<1/2; above 6/5 only when 11/72<x<1/2 in the stated domain. T2 exact ∫₀³ x²e^−x dx = 2−17e^−3≈1.153619838; three-strip trapezia ≈1.133262382 (error −0.020357456). T3 driving distance 47.25 m in 10.5 s; binomial B(10,0.2) upper tail for five defects ≈0.0327934976.
- X1: integrate an *exact finite* geometric identity to obtain ln2=S_n+(−1)^n R_n; 1/[2(n+1)]<R_n<1/(n+1). This proves S_{2m}<ln2<S_{2m+1} and convergence. Values S300≈0.6914832917 and S301≈0.6948055508 rigorously bracket ln2 inside the two-decimal rounding interval for 0.69 (up to the supplied calculator accuracy).

## Publication and saved student evidence

The branch releases **Weeks 1–9**, or **198 questions including 162 essential**, and leaves **Week 10 locked**. Publication gates remain shared across calendar, direct study routes, specification practice and recommendations. Programme 2 stays unpublished. Existing storage key **alevel-maths-calendar-progress-v1** is unchanged; no saved notes, handwriting, mathematical working, attempts, scores (including zero), history, topic evidence, backup files or old question identifiers are migrated or removed. An unattempted question remains *no evidence*, not measured zero accuracy.

Validation adds `tests/week09-content.test.mjs`, `tests/week09-maths-audit.test.mjs`, `tests/week09-student-flow.test.mjs`, and extends all previously published weeks' regression tests, full MathJax rendering and JavaScript syntax checks. GitHub Actions is the authoritative final test report. The unmerged PR does not change the live website.
