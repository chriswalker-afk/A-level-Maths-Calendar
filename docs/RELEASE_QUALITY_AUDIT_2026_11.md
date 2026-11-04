# Release-quality audit — Maths Calendar, 4 November 2026

**Branch / review:** `feat/release-quality-audit-maths-accessibility-coverage` (PR #22); Pass 3 PR #21 has been merged into `main`. **Scope:** ten published weeks of original Pearson Edexcel A Level Mathematics (9MA0) questions, including all Pure and Year 1-only Applied for the internal examination.

## Release decision

**Technically ready for a supervised student pilot after PR #22 validation and review; not yet warranted to claim 100% directly assessed specification skill coverage or empirically verified 4–6-hour completion times.**

The programme is complete as a *weekly study resource*: Weeks 1–9 each have 25 essential questions for 175 marks (4 hours planned), 29 recommended for 215 marks (5 hours) and 31 optional for 245 marks (6 hours). Week 10 retains its independent 100-mark Pure and 50-mark Year 1 Applied mock, plus 60 minutes of marking and repair planning. Totals are derived rather than estimated.

| Inventory | Verified count |
|---|---:|
| Published questions across Weeks 1–10 | **301** |
| Essential questions including Week 10 | **247** |
| Separately marked question parts | **932** |
| All published practice and mock marks | **2,355** |
| Essential plus mock marks | **1,725** |
| Complete 9MA0 student-friendly skill registry | **262** |
| In-scope internal-exam skills | **222** |

## 1. Specification-skill coverage: quantified, not overstated

Coverage measures **published question-to-skill links**, not student competence. A marked part can award marks to **one primary skill only**; optional secondary skills show connected exposure without earning duplicate marks. No evidence is never represented as a student's zero accuracy. The separate future Year 2 Applied skills remain outside the published stage.

| Strand/topic | Directly assessed | Direct or connected | In scope |
|---|---:|---:|---:|
| P01 Proof | 4 | 4 | 5 |
| P02 Algebra and functions | 26 | 28 | 29 |
| P03 Coordinate geometry | 10 | 11 | 11 |
| P04 Sequences and series | 16 | 16 | 16 |
| P05 Trigonometry | 20 | 21 | 22 |
| P06 Exponentials and logarithms | 12 | 12 | 14 |
| P07 Differentiation | 17 | 17 | 20 |
| P08 Integration | 17 | 17 | 20 |
| P09 Numerical methods | 11 | 11 | 11 |
| P10 Vectors | 7 | 8 | 10 |
| S01 Sampling | 3 | 5 | 7 |
| S02 Data presentation and interpretation | 13 | 14 | 16 |
| S03 Probability (Year 1) | 4 | 4 | 4 |
| S04 Statistical distributions (Year 1) | 3 | 3 | 5 |
| S05 Binomial hypothesis testing (Year 1) | 6 | 7 | 7 |
| M06 Quantities and units | 2 | 3 | 5 |
| M07 Kinematics | 10 | 11 | 11 |
| M08 Forces and Newton's laws (Year 1) | 6 | 6 | 9 |
| **Total** | **187** | **198** | **222** |

Across the internal-exam catalogue, **187/222 (84.2%)** have a directly credit-bearing published part, a further **11** have only connected links, and **24** have no published link at all. **198/222 (89.2%)** are linked in at least one capacity. Those 35 skills without direct evidence are not proof that a student has never practised the technique: they reflect exactly what the permanent **per-part tags** explicitly evidence.

### Priority gaps to address in the next targeted coverage pass

1. **Fundamental mechanics and statistics (highest priority):** M08-007 Newton's third law, M08-009 perpendicular-force interpretation, M06-001/M06-002/M06-004 units and scalars/vectors, S04-001/S04-002 simple discrete and uniform distributions, S01-005 systematic/quota/opportunity sampling, S02-010 standard deviation from summary statistics. These are examinable, not optional enrichment.
2. **Proof, graph and model language:** P01-002 proof by exhaustion, P05-015 geometrical compound-angle proof, P06-001 exponential graph interpretation, P07-003 derivative graphs, P07-019/P07-020 forming and interpreting a rate-based differential equation, P08-020 connecting ODEs to models.
3. **Algebra and context checks:** P02-014 polynomial factorisation, P02-019 direct/inverse proportion, P06-009 logarithmic change of base, P10-001/P10-002/P10-010 explicit vector language, P03-010 parametric modelling.
4. **Some indirect/incomplete links:** P05-001 non-right-triangle trigonometry; P08-001 reverse differentiation, P08-005 particular integrals, S01-001/002/007, S02-005/007, S05-004 and M07-005 should be reviewed against authored questions before adding or replacing tags.

**Do not reassign earlier primary skill IDs merely to make the dashboard look complete.** That would retroactively change the interpretation of existing students' part marks. Instead, moderate the exact question phrasing and then add new original diagnostic parts or a short optional *specification repair bank* covering genuine omissions. Keep the fixed four-hour essentials intact, and re-assess true completion times before considering replacements. Do not present secondary links as demonstrated accuracy.

To regenerate the audit: run `npm run audit:release` (readable summary) or `node scripts/release-audit.mjs --json` (machine-readable output). This runs in pull-request CI and fails if Year 2/out-of-scope tags leak into released parts.

## 2. Mathematics and curriculum moderation

- **Source of scope:** [Pearson 9MA0 Issue 4 specification](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf) and [Pearson enhanced content guidance](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/pearson-edexcel-l3-advanced-gce-mathematics-9ma0-enhanced-content-guidance-issue-2.pdf).
- The Year 1 restrictions are upheld: no Normal distributions, Year 2 conditional probability, Year 2 projectile kinematics, friction, moments or Year 2 correlation significance tests in the staged Applied section. Calculating a discrete random variable's binomial mean or variance is excluded by Pearson's guidance; the earlier Pass 2 correction remains in place.
- Existing MathJax tests parse mathematical expressions from **all 301 questions**, not just brace/delimiter balance. Earlier independent Pass 1–3 and Week 3–10 tests recompute roots, integrals, probability tails, numerical errors and mechanics model predictions rather than trusting stored answer prose. The new release audit additionally verifies every one of the **932 primary mark-bearing part links** belongs to the intended syllabus scope.
- **Remaining human review:** independent moderation of question wording, AO labels and method marks by another experienced 9MA0 teacher, especially when a novel valid solution is not the one in the supplied scheme. Automated tests cannot certify every mathematical line or every sensible alternate solution.

## 3. Student experience and accessibility corrections in PR #22

- Question route transitions now focus the **specific question title**, with a unique accessible name that includes its permanent question code and mark total. Previously the screen reader was moved only to the repeated *week* heading.
- The skip link has a reliably focusable main landmark. The mobile section rail, question selection rail, correct active state, accessible labels and reduced-motion behaviour receive explicit automated regression coverage.
- The homepage essential completion count is derived from **actually released** questions, avoiding leaked progress from future locked weeks.
- Browser-storage failures in self-marking now **restore the previous saved score, status and part marks** and show a clear failure message. A failed write no longer leaves a new finished state displayed as saved. Valid zero marks still finish questions; help/independence flags alone never do.
- The mark-scheme jump respects system reduced-motion settings rather than enforcing smooth animation.
- Obsolete pre-expansion timing and question-count constants are removed from the application.
- Syntax checks now automatically include *all* current and future source/test modules, avoiding the earlier hand-maintained file list that omitted some week additions.

**Limits of verification:** The automated UI work checks DOM navigation and CSS breakpoint contracts, **not pixel-perfect rendering on a real phone or tablet**. A real device/browser pass at approximately 320, 375, 768 and 1280 pixels is still needed to verify formula overflow, canvas drawing, focus visibility and the mathematics editor. The mathematics display and rich entry tools rely on external CDNs for full functionality, so test both a school network and a degraded/unavailable connection.

## 4. Realistic workload and marking

| Pathway | Questions | Marks | Planned solving | Marking/reflection | Total |
|---|---:|---:|---:|---:|---:|
| Essential (Weeks 1–9) | 25 | 175 | 210 min | 30 min | **240 min** |
| With recommended timed practice | 29 | 215 | 258 min | 42 min | **300 min** |
| With optional extension | 31 | 245 | 294 min | 66 min | **360 min** |
| Week 10 mock | 22 | 150 | 180 min | 60 min | **240 min** |

This uses **1.2 minutes per question mark** as a benchmark (not a measured completion speed). The higher AO2/AO3 proportion makes classroom timing particularly important. A pilot should record completion time for connected Pure, modelling and Applied questions separately, time spent checking/marking and the number of questions students left unmarked. Do not turn unmarked work into demonstrated 0%.

## 5. Release gates and next decision

Technical acceptance: full GitHub Actions validation passes; `npm run audit:release` has no invalid scope links; original question IDs and local-storage key remain unchanged; Week 10 and future publication gates still work; zero-score completion, retries and backups are tested. PR #22 is a **review PR**, not an automatic production sign-off.

Suggested sequence: **review and merge PR #22 if checks pass; run a supervised mobile and student timing pilot; moderate the gaps above and add a short skill-repair/coverage pass; then sign off the programme for wider student release.** Continue the February–June 2027 full A Level plan separately without prematurely releasing Year 2 Applied.
