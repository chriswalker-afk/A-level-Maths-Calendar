# Pass 3: Weeks 7–9 expansion and release audit

## Scope and student-data safety

Pass 3 completes the **full nine-week, 4/5/6-hour challenge programme**, before the distinct Week 10 authentic 100-mark Pure and 50-mark Year 1 Applied mock. It adds exactly **nine original questions per week** (P4–P7; M3; A4–A5; T4; X2), leaving all earlier section-local IDs and part labels intact. Every new question carries a first-step hint, original AO2/AO3 reasoning, complete part-by-part mark scheme, final answer, misconception, reflection, and permanent 9MA0 primary and optional connected skill IDs.

| Section | Legacy IDs | New IDs | Questions/week | Marks/week | Working minutes |
|---|---|---|---:|---:|---:|
| Retrieval (R) | R1–R10 | — | 10 | 20 | 24 |
| Connected Pure (P) | P1–P3 | P4–P7 | 7 | 70 | 84 |
| Modelling (M) | M1–M2 | M3 | 3 | 40 | 48 |
| Year 1 Applied (A) | A1–A3 | A4–A5 | 5 | 45 | 54 |
| **Essential** | | | **25** | **175** | **210 + 30 self-marking = 240** |
| Timed practice (T) | T1–T3 | T4 | 4 | 40 | 48 + 12 marking |
| **Recommended cumulative** | | | **29** | **215** | **300 total** |
| Optional extension (X) | X1 | X2 | 2 | 30 | 36 + 24 reflection |
| **Optional cumulative** | | | **31** | **245** | **360 total** |

Across Weeks 7–9 there are **27 new questions, 303 additional marks and 111 additional marked parts**. Published Weeks 1–10 now contain **301 questions, of which 247 are essential**. No new stage of the future February–June 2027 9MA0 programme has been released.

The planning benchmark is **1.2 minutes of question-working per mark**, with separate marking and reflection. Students' actual completion times **have not been measured** and should be piloted, particularly with non-routine A* proof, AO2, and AO3 problems. The pedagogical AO mix is not the official examination-paper weighting.

## AO profiles for the complete 175-mark essential core

| Week | AO1 | AO2 | AO3 | AO2 + AO3 |
|---|---:|---:|---:|---:|
| 7 | 39 | 75 | 61 | 136/175 (77.7%) |
| 8 | 39 | 76 | 60 | 136/175 (77.7%) |
| 9 | 39 | 77 | 59 | 136/175 (77.7%) |

AO labels describe the problem design and are subject to later teaching-team moderation, not claims about Pearson's official AO weights.

## Curriculum and challenge

### Week 7 — Growth and logarithms
The Pure additions introduce parameter-dependent log root counts; a stationary **inflection** rather than a turning point; logarithmic differentiation of a variable exponent, with an integer-constrained optimum; and a derivative-and-integral proof of bounds on ln 2. A new model compares exponential growth and finite-capacity adoption using derivatives, a unique crossover and Newton–Raphson. Year 1 Statistics uses an influential regression outlier and a binomial hypothesis test with different conclusions at 5% and 1%. The extension proves sharp upper/lower logarithm inequalities without relying on graphs.

### Week 8 — Numerical method critique
Students show why root counting and Newton iteration are different; why a double root can escape sign-change detection and reduce convergence; why concavity fixes the sign of trapezium error; and why a trigonometric threshold has one nonzero numerical root. The model shows **four individual numerical integration errors cancelling**, giving a correct total for the wrong reason. Year 1 Applied covers vertical motion and multi-batch binomial reliability; no 2D Year 2 vector kinematics is included. The extension proves the number of solutions of ln x = kx and finds the exact (root-dependent) area of its two-crossing case.

### Week 9 — Synoptic selection
Students choose algebra, trigonometry, calculus or integration without a supplied method. Additions include a rational inverse with sign-chart constraints, exact trigonometric lobe area, partial-fraction minimisation, and parametric **signed versus geometric** area. The model optimises total operating cost under a bounded speed range and tests a cost coefficient change. Year 1 Applied links stratified sampling, conditional binomial assumptions and a variable-force particle that changes acceleration sign before velocity sign. The extension rigorously classifies cubic root counts as a parameter changes.

No Normal distribution, Year 2-only conditional probability, 2D projectile motion, friction, inclined planes, rigid-body moments, correlation testing or other Year 2-only Applied material is included. New A-section primary tags point exclusively to `scope: internal`, `year: 1` specification skills. Connected skills carry **no** extra mark credit.

## Code and release guarantees

- New data modules are additive to the originals: `src/data/week0{7,8,9}-expansion-{pure,modelling,applied,timed,extension}.js`.
- The new `week0N-expansion.js` aggregators append P4–P7, M3, A4–A5, T4 and X2 after existing questions of each section, preserving all old `#/study/N/<section>/<index>` routes.
- `pacedExpandedWeek` allocates exact per-section solving minutes; all completed original questions retain their stable IDs and existing part-mark data.
- `week0N-expansion-skill-map.js` stores one permanent primary ID for every marked part. The original specification-linked library and practice indexing remain unchanged.
- The browser's storage key **`alevel-maths-calendar-progress-v1`** is unchanged: student notes, maths lines, drawings, scored zero, help flags, retry history, progress, exported backups and restored attempts are not migrated or deleted.
- Week 10 remains a **150-mark original two-paper mock plus 60-minute review**, and the future full-course programme remains unpublished.

## Automated and independent validation

- `tests/pass3-expansion-content.test.mjs` checks exact question counts, per-section mark and minute budgets, all original index positions, specification scope, Year 1 Applied restrictions, TeX delimiters, per-part scheme credits, AO profiles, release locks, links, and completed-zero/no-evidence states.
- `tests/pass3-expansion-maths-audit.test.mjs` recomputes roots and Newton steps, exact/numerical integrals, inequality bounds, regression slopes, binomial tails, motion signs and distances, costs, parametric areas, and cubic root regimes independently of stored solution prose.
- Earlier Pass 1, Pass 2, Week 7–10 and UI regression tests are adjusted **only** for genuinely changed published totals, workloads, section sizes and permitted Year 1 skills.
- Required CI acceptance: `npm run check && npm test` via the `Validate calendar` GitHub Actions workflow, with **zero failures** before considering merge.

## Release-readiness next steps

1. Review the Pass 3 pull request preview, including mobile navigation, mathematical typesetting, feedback disclosure, and marking flows.
2. Moderate a representative spread of AO2/AO3 mark schemes with another subject specialist.
3. Pilot genuine 4-, 5- and 6-hour completion times with students, and adjust workload if necessary instead of assuming the 1.2-minutes-per-mark benchmark holds for every student.
4. Complete the specification coverage/skill-evidence audit and Week 10 feedback-quality pass; keep the February–June 2027 full-course programme unpublished until independently authored and validated.
