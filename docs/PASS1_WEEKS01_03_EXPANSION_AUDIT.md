# Pass 1 — Weeks 1–3 expansion audit

**Repository:** A-level-Maths-Calendar, Pearson Edexcel 9MA0. **Curriculum:** all Pure Mathematics; **Year 1** Statistics and Mechanics only. **Scope:** first three weeks of the published internal-exam programme, without altering the exam-format Week 10.

## Delivered programme

Each of the three weeks now consists of **31 original questions: 25 essential, four recommended timed and two optional extensions**. The new work is fully additive within its original six sections. Existing R1–R10, P1–P3, M1–M2, A1–A3, T1–T3 and X1 are **not replaced**, moved to different subsection indices or renumbered; P4–P7, M3, A4–A5, T4 and X2 are appended after the earlier questions in their own sections.

| Section | Original marks | New marks | Current questions | Current marks | Planned working time |
|---|---:|---:|---:|---:|---:|
| Retrieval | 20 | 0 | 10 | 20 | 24 minutes |
| Connected Pure | 30 | 40 | 7 | 70 | 84 minutes |
| Modelling & reasoning | 26 | 14 | 3 | 40 | 48 minutes |
| Year 1 Applied | 22 | 23 | 5 | 45 | 54 minutes |
| **Four-hour essential** | **98** | **77** | **25** | **175** | **210 minutes + 30 marking and reflection** |
| Timed practice | 32 | 8 | 4 | 40 | 48 minutes + 12 review |
| **Five-hour cumulative** | **130** | **85** | **29** | **215** | **300 minutes total** |
| Optional A/A* extension | 14 | 16 | 2 | 30 | 36 minutes + 24 reflection |
| **Six-hour cumulative** | **144** | **101** | **31** | **245** | **360 minutes total** |

The implementation uses `src/data/expanded-week-budget.js` to allocate planned question-working time at **1.2 minutes per mark** (Edexcel's 100-mark/120-minute examination pace). This is **a target for timing and volume, not empirical evidence** that a highly demanding proof fits that time. It deliberately separates marking/review time. If real students need more time, adjust the load or recommended pacing based on classroom evidence; do not simply accelerate them.

**Across Weeks 1–3:** 27 genuinely new questions, 303 new marks and **100 new independently marked parts**; original 66 questions remain unchanged in their assessed substance.

## Original challenging content

**Week 1 — Algebra, functions and proof**
- **P4:** explicit proof by contradiction, irrationality and rationalising conjugates.
- **P5:** inverse/domain and composite functions, graph-transform order and restricted inequalities.
- **P6:** repeated-linear-factor partial fractions plus a global positivity proof and sign-chart inequality.
- **P7:** simultaneous nonlinear constraints and sharp product bound by squared differences.
- **M3:** cubic volume model with domain, derivative-based unconstrained optimum, a binding packaging constraint, and practical limitations.
- **A4–A5:** true proportional stratified sampling, coded mean/standard deviation, opportunity-bias reasoning; comparison of mean versus median, quartile/IQR outlier rule and justified data-cleaning decisions.
- **T4/X2:** rational sign chart under time pressure; parameterised fixed-area rectangle inequality, feasible dimensions, constrained minimum and a general discriminant condition.

**Week 2 — Coordinate geometry and vectors, Year 1 mechanics**
- **P4:** parametric path and Cartesian line, line–circle intersections, excluded parameter branch and contradictory destination constraints.
- **P5:** 3D vector medians and centroid proof with exact lengths.
- **P6:** similar triangles through parameterised points, moving lines, area and vector magnitude.
- **P7:** complete two-tangent solution through a discriminant and exact contact points.
- **M3:** direct versus compliant route across a circular exclusion zone, travel times and model validity.
- **A4–A5:** velocity–time graph, three-stage displacement and average speed; meeting of accelerating and constant-speed cyclists.
- **T4/X2:** chord, sector and segment area; fully parameterised proof of the slopes and contact locus for every tangent from an external point to a circle.

**Week 3 — Trigonometry, periodic models and Year 1 probability**
- **P4:** secant/tangent reciprocal identity to exact double-angle and inverse results.
- **P5:** R-form trigonometry connected to an exact unit-circle/line intersection and a global maximum.
- **P6:** minor arc versus chord, sector/segment geometry, explicit small-angle approximation error and tolerance judgement.
- **P7:** proof of a reciprocal-trig lower bound and both complementary exact inverse solutions.
- **M3:** phase-shifted warning model, time above a threshold, extremum, finite cycle and evidence required to validate periodicity.
- **A4–A5:** fair versus weighted spinner, overlap and independence, complements; without-replacement two-draw tree, disjoint orders and dependence.
- **T4/X2:** double-angle equation solved without losing exact roots; a general family of unit-circle chords, intersection thresholds and sharp triangle-area proof.

No Year 2 Applied content (conditional probability rules as taught in Year 2, Normal models, PMCC significance, projectiles, friction, inclined planes and moments) was deliberately introduced. All question stems are original, and solutions allocate marks to exact worked steps rather than generic answer-only credit.

## AO emphasis — authoring profile, not official paper weightings

| Essential work | AO1 | AO2 | AO3 | AO2 + AO3 |
|---|---:|---:|---:|---:|
| Week 1 | 54 | 72 | 49 | 121/175 = 69.1% |
| Week 2 | 42 | 76 | 57 | 133/175 = 76% |
| Week 3 | 42 | 73 | 60 | 133/175 = 76% |

Some original Week 1 material remains retrieval- and AO1-heavy; the expansion improves its profile without retroactively relabelling prior marks to force a numerical quota. AO3 classification should continue to be moderated by teachers: an AO3 tag is **not itself evidence of an unstructured task**.

## Permanent skill evidence and curriculum gaps

Question-part tags are additive through `week01-expansion-skill-map.js`, `week02-expansion-skill-map.js` and `week03-expansion-skill-map.js`. Each of the **100 new parts** has exactly one in-scope primary skill ID, with connected skills for practice/navigation only. No secondary tags earn duplicate marks. Existing skill identifiers and attempts are never renumbered.

The internal specification catalogue has **222 in-scope individual skills**. The complete ten-week tag union now contains **179 skills with direct assessed evidence** (previously 165), and **193 skills with either direct or connected evidence** (previously 175). This still leaves **43 without primary assessed evidence**, including **29 with neither a primary nor a connected practice link**. These are measured *tagging evidence gaps*, not proof that a method is absent from the mathematical text. Passes 2–4 must continue closing them, particularly the weaker Year 1 Applied strands.

## Student-data and release contract

After Pass 1 is merged, **all ten original weeks remain released**: 247 published questions in total, including **205 essential questions**. Weeks 4–9 retain their existing 22-question/98-essential-mark structure until their planned expansion. Week 10 retains its original 100-mark Pure and 50-mark Year 1 Applied assessment and diagnostic review. The February–June 2027 second programme remains unpublished.

Existing `alevel-maths-calendar-progress-v1` data, all original question IDs/part keys and original section indices are preserved. Student notes, line-by-line mathematical input, drawings, completed zeros, independent/with-help choices, reattempt histories, skill analytics and version-1 export/import remain compatible. Only the **displayed planned working minutes** on Weeks 1–3 are recalibrated; old question stems, answers, marked parts and solutions remain unchanged.

## Test strategy

- `tests/pass1-expansion-content.test.mjs`: 31 questions, 175/215/245 marks, 240/300/360-minute plans, stable ID/route indices, one-primary-skill attribution and correct zero-versus-unmarked analytics.
- `tests/pass1-expansion-maths-audit.test.mjs`: independent exact algebra, symbolic constraints, geometric proof checks, numerical derivatives, statistics, kinematics and probability for all 27 new questions.
- Existing Week 1–10 regression suite: earlier working, marking, published-practice links, specification progress, MathJax, save/retry, timer and backup/restore.
- `npm run check` and GitHub Actions `validate` are required to pass before review. No automatic merge.

This pass is intended as a **finished Week 1–3 upgrade** and a repeatable model for expanding Weeks 4–6 next.
