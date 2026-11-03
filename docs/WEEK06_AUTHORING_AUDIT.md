# Week 6 — mathematics and specification authoring audit

Course: **Pearson Edexcel 9MA0**, first ten-week internal examination programme, **all Pure + Year 1 Statistics and Mechanics**.

## Exam-board validation

Checked against Pearson's [9MA0 enhanced content guidance, issue 2](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/pearson-edexcel-l3-advanced-gce-mathematics-9ma0-enhanced-content-guidance-issue-2.pdf).

- **Pure 4.1:** integer and rational binomial expansion; rational expansion requires |bx/a| < 1. Week 6 works with (1+2x)^(-1/2), (1+x)^(1/2), (1-3x)^(-1) and (1-2x)^(-2). No endpoints included.
- **Pure 4.2–4.6:** sequence formulae and recurrences, sigma notation, arithmetic and geometric sums, proof, convergence |r| < 1, contextually appropriate financial/growth models.
- **Mechanics 7.4, Year 1:** use derivatives and integrals to obtain velocity, acceleration, position, displacement and distance for one-dimensional variable acceleration. The stable M07-010/M07-011/M07-012 skills are explicitly Year 1. Excluded: 2D vector calculus and projectiles.
- Year 2 Applied such as moments, friction, Normal distributions and conditional probability is absent.

## Exact core and attribution

| Section | Items | Marks | Minutes |
|---|---:|---:|---:|
| R | 10 | 20 | 30 |
| P | 3 | 30 | 67 |
| M | 2 | 26 | 68 |
| A | 3 | 22 | 48 |
| Total essential | 18 | 98 | 213 |

The remaining 27 minutes are 20 minutes for checking/marking and 7 minutes for buffer. The essential AO allocation is AO1 **26**, AO2 **39**, AO3 **33** marks; it is a practice-design target, not Pearson's examination-wide weighting. Timed T1–T3: 32 marks, 45 minutes working; extension X1: 14 marks, 40 minutes working.

## Independent mathematical cross-checks

The dedicated maths audit checks mathematical results against separately calculated formulae, finite sums, calculus and numerical quadrature, not by merely checking the existence of question text:

- P1's first £700 month is month 10, and the £800 geometric limit is never attained in finite time.
- P2's cancellation produces 1 + x²/2 − x³, and F(0.1) ≈ 1.004.
- P3's shifted recurrence gives uₙ = 6 − 2^(2−n) and Sₙ = 6n − 4(1−2^(−n)).
- M1's same-nominal-rate discrete and continuous models differ at week five by approximately 5.252%.
- M2's eight-year unconstrained totals are £12,400 and £12,763.95; the £2,000 yearly cap is first exceeded in years 10 and 8 respectively.
- A1–A3 validate position, velocity, acceleration, sign changes and distance 28/3 m against numerical integration.
- Timed T3 has displacement 0 m but total distance 64√3/9 m due to two direction changes.
- X1 differentiates a finite geometric sum before taking a justified convergent limit; at r=1/3 the five-term sum is 179/81 with an exact omitted tail of 13/324; the x⁴ coefficient in (1−2x)^(-2) is 80.

Each of the 60 mark-bearing parts has one and only one primary permanent 9MA0 skill ID. Connected skill tags are navigational only; earlier-topic retrieval is deliberately linked. The check suite includes test files for content, mathematics, end-to-end student workflow and real MathJax parsing.

## Release integrity

The feature branch proposes a manual release count of 6; Week 6's authored content flag is true, Weeks 7–10 remain false, and programme two is unpublished. Publication gating remains shared between calendar, routes and practice recommendations. The storage key is unchanged (**alevel-maths-calendar-progress-v1**) and all old notes, drawings, mark histories and saved backups remain compatible. Opening the PR alone does not publish the changes; merging will publish Week 6.
