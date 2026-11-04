# Pass 2 authoring and release audit — Weeks 4–6

## Scope and original-question compatibility

This pass adds original **P4–P7, M3, A4–A5, T4 and X2** items in each of Weeks 4, 5 and 6. All existing R1–R10, P1–P3, M1–M2, A1–A3, T1–T3 and X1 questions keep their permanent IDs, part labels, scoring and existing saved student evidence. The calendar still opens directly into the first unfinished question. All writing and scores use the existing `alevel-maths-calendar-progress-v1` local storage schema, with zero treated as a valid completed mark.

| Per-week section | Original | Added | Questions after Pass 2 | Marks |
|---|---:|---:|---:|---:|
| R — retrieval | 10 | 0 | 10 | 20 |
| P — connected Pure | 3 | 4 | 7 | 70 |
| M — modelling/reasoning | 2 | 1 | 3 | 40 |
| A — Year 1 Applied | 3 | 2 | 5 | 45 |
| **Essential (4 h)** | **18** | **7** | **25** | **175** |
| T — recommended timed | 3 | 1 | 4 | 40 |
| **Recommended cumulative (5 h)** | **21** | **8** | **29** | **215** |
| X — optional challenge | 1 | 1 | 2 | 30 |
| **Optional cumulative (6 h)** | **22** | **9** | **31** | **245** |

**Total additional content:** 27 questions, 303 marks. The complete released programme now contains **274 questions**, including **226 essential**, across ten weeks. Weeks 7–9 remain unexpanded; Week 10 retains the 100-mark Pure and 50-mark Year 1 Applied authentic mock.

Workload is a **planning benchmark** of 1.2 minutes per mark: 210 working +30 marking/reflection = 240 essential minutes; +48 timed working +12 review =300; +36 extension working +24 additional reflection =360. The demanding AO2/AO3 difficulty means actual times require classroom piloting.

## AO profile — all essential questions, including legacy

| Week | AO1 | AO2 | AO3 | AO2+AO3 share |
|---|---:|---:|---:|---:|
| Week 4 | 37 | 76 | 62 | 138/175 = 78.9% |
| Week 5 | 42 | 75 | 58 | 133/175 = 76.0% |
| Week 6 | 41 | 76 | 58 | 134/175 = 76.6% |

The AO distributions are **practice-design labels**, not official Pearson paper-level weightings. Extended applications connect several Pure methods, require a reasoned choice of model and discuss real mathematical constraints.

## Mathematics and specification checks

- **Week 4:** Quartic symmetry and curvature, ladder connected rates, implicit ellipse tangency, exponential threshold, bounded conical tank, forces and resultant vectors, staged-lift tension, and a non-calculus ellipse bound. The endpoint at x=0 on the restricted exponential product curve is explicitly distinguished from an interior stationary point.
- **Week 5:** Trigonometric area identities, repeated-pole partial fractions, separable ODE, area between curves, finite exponential accumulation, Year 1 binomial probability and a one-tailed binomial hypothesis test.
- **Week 6:** AP-versus-GP induction, fractional binomial validity and remainder, monotone-bounded recurrence, financial and pollutant series models, grouped frequency densities, connected particles, and Pure binomial coefficient sum identities.

**Required curriculum correction:** The official Pearson [9MA0 enhanced content guidance](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/pearson-edexcel-l3-advanced-gce-mathematics-9ma0-enhanced-content-guidance-issue-2.pdf), Statistics 4.1, excludes calculation of mean and variance of discrete random variables. Week 5 A4 now calculates and interprets individual/tail binomial probabilities instead of binomial mean/variance. Week 6 X2 now proves a binomial weighted-square identity instead of deriving binomial variance. The invalid Year 2-only skill S03-008 is not tagged to any Year 1 Applied question.

No Year 2 Applied techniques are introduced. Each mark-bearing part has exactly one **permanent primary specification skill ID**; secondary tags are practice links only.

## Regression and independent verification

- `tests/pass2-expansion-content.test.mjs`: per-section quotas; 4/5/6-hour budgets; complete mark allocations; primary/connected skill validity; Year 1 scope; MathJax delimiter and explicit step-credit checks; old question routes; zero-score completion; lock state and local-storage continuity.
- `tests/pass2-expansion-maths-audit.test.mjs`: independently recomputes numeric and algebraic results for each of the three weeks, including numerical quadrature versus exact integrals, Newtonian force balance, recurrence limits, binomial tails, cumulative models and binomial identities.
- Original Week 4–6, Pass 1 and cumulative Week 7–10 regression expectations are updated to match the **new published number of questions**, without weakening checks on original student behaviour.
- Run `npm run check && npm test` in CI. Do not merge if the GitHub validation workflow reports a pending or failed result.

## Next pass

Expand Weeks 7–9 under the same 175/215/245-mark pathway contract, then pilot actual student completion times and perform a final release-quality accessibility/MathJax/mobile audit before adding the February–June 2027 programme.
