# A Level Maths Calendar

An online independent-study calendar for **Pearson Edexcel A Level Mathematics (9MA0)**, designed to emphasise **combined skills, AO2 reasoning and AO3 modelling**.

## Calendar-first navigation and editorial design

The homepage **is the ten-week calendar**, arranged as two five-week planner blocks. There is no promotional hero or extra "overview" before the work. An available week links directly to its questions, resuming any unfinished reattempt or the next unmarked question; an unreleased week is labelled but not clickable.

Inside practice, students can switch directly between **Retrieval / Connected problems / Modelling & reasoning / Year 1 Applied / Timed set / Extension**, browse the question index, and continue across a section boundary with Next/Previous. Old bookmarked `#/week/N` URLs for published weeks open the questions instead of a separate intermediate screen.

The visual identity uses large week numerals, ruled graph-paper layouts, warm paper, dark ink, coral accents and highlighted active states. It also restyles My Progress, My Specification and the practical study guide to share the same design language.

**Design and flow reference:** [docs/VISUAL_IDENTITY_AND_FLOW.md](docs/VISUAL_IDENTITY_AND_FLOW.md). The finishing stylesheet `styles/identity-polish.css` now applies the same identity across the maths editor, marking, specification, progress, retry history and backups. New components should reuse its palette and typography rather than introduce a separate theme. New navigation regressions are covered by `tests/calendar-flow.test.mjs` and `tests/calendar-route-ui.test.mjs`.

## Two linked programmes

1. **Internal exam preparation:** 10 weeks, all Pure Mathematics + Year 1 Statistics & Mechanics. Four essential hours per week, one recommended hour of timed work, one optional hour for extended challenge or repair.
2. **Final exam preparation:** a planned 20-week full A Level programme from 1 February to 16 June 2027, incorporating Year 2 Applied and exam-specific preparation. The future programme is not yet published.

The full authoring specification is [docs/QUESTION_BLUEPRINT.md](docs/QUESTION_BLUEPRINT.md).

## Published study weeks

### Pass 1 expansion — Weeks 1–3 (November 2026)

Weeks 1, 2 and 3 have been **expanded to 31 original questions each** while retaining **all 22 earlier question IDs and marked parts** in their original section positions. The expanded work is designed to be more demanding and more exam-paced; 1.2 working minutes per mark is a **planning benchmark**, not a measured student-completion time. Student work is still saved to the original `alevel-maths-calendar-progress-v1` key.

| Section | Questions per week | Marks | Planned working |
|---|---:|---:|---:|
| Quick retrieval (R1–R10) | 10 | 20 | 24 min |
| Connected Pure (P1–P7) | 7 | 70 | 84 min |
| Modelling & reasoning (M1–M3) | 3 | 40 | 48 min |
| Year 1 Applied (A1–A5) | 5 | 45 | 54 min |
| **Four-hour essential** | **25** | **175** | **210 working + 30 marking/reflection = 240 min** |
| Recommended timed work (T1–T4) | 4 | 40 | 48 working + 12 marking |
| **Five-hour cumulative** | **29** | **215** | **300 min including review** |
| Optional A/A* extensions (X1–X2) | 2 | 30 | 36 working + 24 reflection |
| **Six-hour cumulative** | **31** | **245** | **360 min including review** |

The new parts have full worked mark schemes, independent first-step hints, misconceptions, reflection questions and primary specification skill IDs. Secondary linked skills remain practice-only. The new content includes proof by contradiction, domain/transform order, repeated poles, nonlinear constraints, constrained optimisation, codified data and outlier judgment in Week 1; parametric geometry, 3D vector proof, circular tangents, route restrictions and multi-stage Year 1 mechanics in Week 2; and advanced trig, exact circle intersection, approximation, periodic threshold decisions and Year 1 probability modelling in Week 3.

**Weeks 4–9 are still at their original 22-question / 98-essential-mark allocation** until their own expansion passes. **Week 10 remains the 100-mark Pure and 50-mark Year 1 Applied mock**, plus 60 minutes of diagnostic review. The calendar still links directly to questions, and the February–June 2027 full A Level course remains unpublished.

Across the ten published weeks the updated programme contains **247 questions**, including **205 essential**. Earlier scores, working, drawing, attempt history, specification progress links, recommendations and backups are preserved.

For the updated target and quality criteria see [docs/QUESTION_BLUEPRINT.md](docs/QUESTION_BLUEPRINT.md), and for the independent mathematics and safety audit see [docs/PASS1_WEEKS01_03_EXPANSION_AUDIT.md](docs/PASS1_WEEKS01_03_EXPANSION_AUDIT.md).

### Week 4 — Differentiation and curve behaviour

Week 4 is authored in full: **22 original exam-style questions**, including complete mark schemes, first-step hints, feedback and exact mathematical notation.

| Section | Questions | Marks | Working time |
|---|---:|---:|---:|
| Quick retrieval — first principles, rational indices, chain/product/quotient, implicit/parametric, exponential and log derivatives | 10 | 20 | 30 minutes |
| Connected Pure — parameterised cubics; implicit tangent and intercept proof; horizontal/vertical parametric tangents and classification | 3 | 30 | 67 minutes |
| Modelling — minimum material in a radius-constrained container; comparison of two pollutant concentration models using rates and curvature | 2 | 26 | 68 minutes |
| Year 1 Mechanics — force diagram; two-dimensional force resolution; connected particles followed by motion with a slack string | 3 | 22 | 48 minutes |
| **Essential core** | **18** | **98** | **213 minutes + 20 marking + 7 buffer = four hours** |
| Recommended timed problems — exponential stationary point, rational extrema and inequalities, non-parallel force resultant | 3 | 32 | 45 + 15 minutes |
| Optional A/A* extension — parametric curve with a self-intersection and two distinct tangents | 1 | 14 | 40 + 20 minutes |

The core practice-authoring AO balance is **AO1 26 / AO2 39 / AO3 33** marks (a resource design choice, not the official full-paper AO weightings). All questions use the existing **Notes / Maths steps / Draw**, independent/with-help and numerical self-marking, saved retries and offline progress backup.

**Weeks 1–4 are available on the calendar** with **88 published questions (72 essential)**. Question IDs and part-by-part specification tags use the stable `W04-` and P07/M08 skill namespaces, with connected references back to algebra, exponentials, vectors and kinematics. The separate week record in My Progress and per-skill evidence in My Specification update automatically from these attempts. The release gate now keeps **Weeks 6–10 locked**; final-exam programme 2 remains unpublished.

Quality gates: `tests/week04-content.test.mjs` (marks, skills, AO, timing, release routing), `tests/week04-maths-audit.test.mjs` (independent algebraic/physical numerical checks), `tests/week04-student-flow.test.mjs` (four-week calendar, saved work, zero-mark completion, skill evidence), and the extended real MathJax parser suite.

### Week 5 — Integration and accumulation

The full **Week 5** pack contains **22 original exam-style questions** with fully worked mark schemes, hint scaffolding, answer checks, common misconceptions and permanent specification skill links.

| Section | Questions | Marks | Working time |
|---|---:|---:|---:|
| Retrieval — standard, reverse-chain, trigonometric, logarithmic and fractional-power integrals; substitution; by parts; partial fractions; areas; limits of sums | 10 | 20 | 30 minutes |
| Connected Pure — algebraic preparation; signed versus actual area; repeated integration by parts | 3 | 30 | 67 minutes |
| Modelling — accumulated water flow and average rate; squared sensor pulse and parameter sensitivity | 2 | 26 | 68 minutes |
| Year 1 Applied — binomial model assumptions; inclusive and strict cumulative tails; one-tailed binomial hypothesis test | 3 | 22 | 48 minutes |
| **Essential four-hour core** | **18** | **98** | **213 working + 20 marking + 7 buffer = 240 minutes** |
| Recommended timed — exact versus trapezium area; two parametric areas; two-tailed binomial hypothesis test | 3 | 32 | 45 minutes + 15 review |
| Optional A/A* extension — finite accumulated response and numerical threshold | 1 | 14 | 40 minutes + 20 reflection |

The 98 essential marks meet the intended resource-design **AO1/AO2/AO3 balance of 26/39/33**. These are resource practice allocations, not whole-exam assessment weightings. Individual marked parts are tagged to **P08 Integration**, **P09 Numerical methods**, **S04 Statistical distributions** and **S05 Statistical hypothesis testing**, with connected algebra, calculus and modelling skills.

**Curriculum correction:** Pearson 9MA0 P8.3 requires areas under and between curves, including parametric curves, not volumes of revolution (a Further Maths requirement). Week 5 therefore uses authentic area and accumulation models instead of off-syllabus revolving-solid questions. Similarly, Year 1 binomial work does not introduce Year 2 conditional probability. See [Pearson's 9MA0 enhanced guidance](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/pearson-edexcel-l3-advanced-gce-mathematics-9ma0-enhanced-content-guidance-issue-2.pdf).

**At the end of Week 5, Weeks 1–5 were enabled**, providing **110 published questions (90 essential)**. All student question routes, working, maths typing, drawing, independence choices, zero-mark completions, optional part marking, retries, backups and My Specification accuracy continue to share the existing code and storage key. **Weeks 7–10 stay locked**, and programme 2 remains unpublished.

Quality gates include `tests/week05-content.test.mjs`, `tests/week05-maths-audit.test.mjs`, `tests/week05-student-flow.test.mjs` and the expanded real MathJax parser tests.


### Week 6 — Sequences, series and binomial expansion

Week 6 added **22 original exam-style questions (144 marks)** with fully worked answers, precise per-part marks, first-step hints, misconceptions, reflections and permanent specification tags. At the Week 6 release the programme had **132 released questions across six weeks (108 essential)**.

| Section | Questions | Marks | Working time |
|---|---:|---:|---:|
| Quick retrieval — AP/GP terms and sums, recurrence, sigma notation, integer and rational binomial expansion and validity | 10 | 20 | 30 min |
| Connected Pure — geometric collection threshold, rational coefficient cancellation, recurrence and sum proof | 3 | 30 | 67 min (+3 buffer) |
| Modelling — discrete vs continuous subscriber growth; two escalating donation plans under a yearly cap | 2 | 26 | 68 min (+2 buffer) |
| Year 1 Applied — velocity from displacement, integrate variable acceleration, direction changes and distance | 3 | 22 | 48 min (+2 buffer) |
| **Essential four-hour programme** | **18** | **98** | **213 working + 20 marking + 7 buffer = 240 min** |
| Recommended timed set — arithmetic proof, mixed binomial products, exact changing-direction motion | 3 | 32 | 45 min + 15 review |
| Optional A/A* extension — finite weighted GP, differentiated sums, exact remainder and binomial coefficient | 1 | 14 | 40 min + 20 reflection |

The essential mark allocation is **AO1 26 / AO2 39 / AO3 33**, the resource's authoring target rather than Pearson's examination-wide assessment weights. Each of the **60 marked parts** is tagged to exactly one primary stable skill, with supplementary connections that do not double-count marks. Pure work primarily covers **P04 Sequences and series**, while the Applied problems use **M07 Year 1 Kinematics (7.4)**; short retrieval items also revisit previous algebra, inequalities and binomial probability.

**Curriculum validation:** the official 9MA0 guidance includes the binomial expansion for rational powers with its required |bx/a| < 1 restriction, arithmetic/geometric sums and recurrence, and calculus to recover velocity/displacement in one-dimensional kinematics. The Week 6 Applied questions avoid Year 2-only projectile, friction, moments and vector-calculus problems. [Pearson enhanced guidance](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/pearson-edexcel-l3-advanced-gce-mathematics-9ma0-enhanced-content-guidance-issue-2.pdf).

At the Week 6 release, **Weeks 1–6 were available directly from the calendar**; the second programme remained unpublished. Existing storage and attempts are not migrated or overwritten. Week 6 is validated by the Week 6 content, maths-audit, student-flow and expanded MathJax tests.


### Week 7 — Exponentials, logarithms and differential equations

Week 7 contains **22 original exam-style questions (144 marks)** with precise part marks, first-step hints, full worked solutions, final answers, misconceptions, reflections and stable links to the specification. At this stage the calendar has **154 questions, including 126 essential questions**, across seven published weeks.

| Section | Questions | Marks | Working time |
|---|---:|---:|---:|
| Retrieval — log laws/equations, logarithmic domains, exponential derivatives and integrals, linearisation, separation and initial conditions | 10 | 20 | 30 min |
| Connected Pure — log equations and excluded roots; fitting a power law; a separable differential equation with a tangent | 3 | 30 | 67 min (+3 buffer) |
| Modelling — pollutant decay from data; unlimited versus logistic population growth | 2 | 26 | 68 min (+2 buffer) |
| Year 1 Applied — interpret a regression; compare predictions before/after an outlier; exact two-tailed binomial test | 3 | 22 | 48 min (+2 buffer) |
| **Essential four-hour programme** | **18** | **98** | **213 working + 20 marking + 7 buffer = 240 min** |
| Recommended timed set — exponential maximum and area; power-law integral; regression plus binomial inference | 3 | 32 | 45 min + 15 review |
| Optional A/A* extension — differential-equation decay, weighted exposure, exact infinite limit and unique numerical threshold | 1 | 14 | 40 min + 20 reflection |

The essential AO marks are **AO1 26 / AO2 39 / AO3 33** (practice-design targets, not examination-paper weights). Every one of **62 marked parts** has one primary permanent skill for accuracy; connected skills are links for retrieval and diagnosis rather than additional marks. Applied tags use **S02** (Year 1 regression) and **S05** (Year 1 binomial hypothesis testing), with no Year 2 correlation-coefficient tests or Normal distribution.

**At the Week 7 release**, Weeks 1–7 were directly accessible; programme two remained unpublished. The local storage key, previous notes/drawings/attempts and backup compatibility are unchanged. Quality gates cover exact mathematics, correct Year 1 scope, all published MathJax, the student marking flow and release-safe specification links.



### Week 8 — Numerical methods and synthesis

Week 8 adds **22 original exam-style questions (144 marks)** with complete worked schemes, first-step hints, robust MathJax notation, identified misconceptions, reflection prompts and permanent primary per-part specification skills. At the Week 8 release the programme had **176 released questions across eight weeks (144 essential)**.

| Section | Questions | Marks | Working time |
|---|---:|---:|---:|
| Quick retrieval — sign changes/continuity, iterations and staircase behaviour, Newton steps, trapezia, error direction and interpreted roots | 10 | 20 | 30 minutes |
| Connected Pure — Newton root with an accuracy check; exponential trapezium versus exact area; two algebraically equivalent iterations with different stability | 3 | 30 | 67 minutes (+3 buffer) |
| Modelling — optimum treatment duration requiring a numerical root; exact versus sampled excess-exposure predictions and threshold | 2 | 26 | 68 minutes (+2 buffer) |
| Year 1 Mechanics — separate smooth-pulley force diagrams; acceleration and tension; two-stage travel after the hanging particle reaches the floor and the string becomes slack | 3 | 22 | 48 minutes (+2 buffer) |
| **Essential four-hour programme** | **18** | **98** | **213 solving + 20 marking + 7 buffer = 240 minutes** |
| Recommended timed — bracketed root, concave logarithmic trapezium error, motion model with Newton threshold | 3 | 32 | 45 minutes + 15 review |
| Optional A/A* extension — derive Newton's method for √2, prove convergence, obtain exact rational error bounds and certify five decimal places | 1 | 14 | 40 minutes + 20 reflection |

The essential resource-design allocation remains **AO1 26 / AO2 39 / AO3 33**, rather than Pearson's full-examination AO weightings. Each of the **63 marked parts** has one stable primary specification skill; connected skills provide navigation without awarding its marks again.

**Curriculum scope:** Pure practice focuses on **P09 numerical methods**, supported by algebra, differentiation and integration. Applied questions use Year 1 **M08-008 connected particles, light strings and smooth pulleys**, along with constant-acceleration kinematics, and deliberately exclude Year 2 friction, inclined-plane dynamics, moments and projectile motion. The A/A* Newton proof develops an optional higher-level justification rather than assuming it is required in every 9MA0 examination answer.

**Publication:** Weeks **1–8** are released directly from the calendar; Weeks **9–10** remain inaccessible until authored. The 2027 programme stays unpublished. Existing working spaces, student mark records (including zero), attempts, revision advice, backups and the unchanged local storage key all remain compatible.

Quality gates include the new `tests/week08-content.test.mjs`, `tests/week08-maths-audit.test.mjs`, `tests/week08-student-flow.test.mjs` and expanded real MathJax parser coverage. A detailed mathematical and curriculum audit is at `docs/WEEK08_AUTHORING_AUDIT.md`.


### Week 9 — Synoptic problem solving

Week 9 includes **22 original mixed examination-style questions (144 marks)**, each with first-step hints, complete per-part worked mark schemes, final answers, misconceptions, reflection prompts and permanent specification links. The released programme reaches **198 questions across nine weeks, including 162 essential questions**.

| Section | Questions | Marks | Working time |
|---|---:|---:|---:|
| R — quick mixed retrieval across algebra, geometry, trigonometry, series, calculus, numerical methods and Year 1 Applied | 10 | 20 | 30 min |
| P — connected Pure: circle/vector/chord/geometric sum; logarithmic optimisation/integration/Newton; parametric differentiation, tangent and area | 3 | 30 | 67 min |
| M — model calibration, optimisation and energy target; exam-script marking, error diagnosis and constructive feedback | 2 | 26 | 68 min |
| A — Year 1 Statistics stratification; connected-particle forces, tension and motion; regression plus two-tailed binomial testing | 3 | 22 | 48 min |
| **Essential four-hour programme** | **18** | **98** | **213 working + 20 self-marking + 7 buffer = 240 min** |
| T — recommended timed Pure/Applied mix including rational binomial expansion, integration, trapezia, SUVAT and hypothesis testing | 3 | 32 | 45 min + 15 review |
| X — optional A/A* proof using finite geometric sums to bound and numerically certify ln 2 | 1 | 14 | 40 min + 20 reflection |

**Resource AO distribution:** AO1 **26** / AO2 **39** / AO3 **33** essential marks. There are **66 independently tagged marked parts**; each has one primary permanent skill, while connected skills are navigational and never receive duplicate mark credit.

**Blueprint interpretation:** An earlier Week 9 plan proposed 30–40-mark, 50-minute mini-papers inside question slots allocated only 8, 10 or 12 marks. To preserve a consistent interactive calendar, Week 9 uses the established 22-question, 98-essential-mark structure and makes the P questions integrated synoptic problems. The 32-mark recommended T set provides additional timed practice. See `docs/QUESTION_BLUEPRINT.md` for the reconciled allocation. The question stems avoid telling students which Pure technique to choose.

**Curriculum:** Week 9 revisits all ten Pure topics through primary and connected skills, with explicit coordinate/vector geometry, series and proof; its Applied material is restricted to Year 1 Statistics (sampling, regression, binomial probability and tests) and Mechanics (constant acceleration, variable velocity and smooth connected-particle models). Year 2-only conditional probability, Normal models, correlation hypothesis testing, inclined-plane dynamics, friction and moments remain excluded.

**Publication and data:** Weeks **1–9** open directly from the calendar. Week **10**, the 2027 revision programme, and all unshipped questions remain locked. No progress key migration occurs: the existing local-storage key, notes, mathematical-input lines, drawings, saved marks (including zero), attempts, backups and skill-evidence rules are unchanged.

The independent mathematics, release-safety, MathJax and student-flow tests live in `tests/week09-content.test.mjs`, `tests/week09-maths-audit.test.mjs` and `tests/week09-student-flow.test.mjs`. The detailed audit is in `docs/WEEK09_AUTHORING_AUDIT.md`.


### Week 10 — Mock examination and consolidation

Unlike the 98-mark Weeks 1–9 weekly drills, this final week contains an **original 100-mark two-hour Pure paper** (12 questions) and **50-mark one-hour Year 1 Applied mini-mock** (10 questions; 25 Statistics + 25 Mechanics), followed by **one hour of self-marking and diagnostic reflection**. The papers are original revision materials, not official Pearson past papers.

| Activity | Questions | Marks | Duration |
|---|---:|---:|---:|
| Pure mock — proof, algebra, geometry, trig, series, calculus, exponentials, numerical methods and vectors | 12 | 100 | 120 min |
| Year 1 Statistics — sampling, grouped data, probability, binomial models and tests | 5 | 25 | 30 min |
| Year 1 Mechanics — velocity/displacement, SUVAT, calculus of motion, forces and connected particles | 5 | 25 | 30 min |
| **Examination total** | **22** | **150** | **180 min** |
| Mark, diagnose and plan — mark every question, identify the first error and choose specific reattempts | — | — | 60 min |

Week 10’s 150-mark authored AO mix is **AO1 75 / AO2 38 / AO3 37** (roughly the 50/25/25 qualification weighting). Every one of **68 marked parts** has one permanent primary skill tag and optional non-credit-bearing connected tags. Applied content is **Year 1 only**, excluding Normal distributions, conditional probability, Year 2 correlation significance tests, projectiles, friction, inclined planes and moments.

**Exam mode:** Students can start independent 120/60-minute timed sittings. During an active sitting the questions and working spaces remain available, but hints, solutions, score information, mark entry and diagnostic review are hidden. Finishing the sitting restores the full mark schemes and optional per-part marking. The clock records its start and stop timestamps in the existing local-progress record; restarting never clears writing or marks. Timer overruns display clearly rather than deleting working or forcing a submission.

**Evidence-led review:** Visit **Mark & review both papers** after the timed sittings. The 60-minute screen shows per-question marking status, independent versus help-supported attempts, 25/25 Applied submarks and only evidence-backed repair priorities. **An unanswered or unmarked question is not treated as a zero.** Overall paper scores are shown only when every paper question has been scored; a recorded zero is a completed question. Three review notes (first error, repair method and reattempt plan) are included in the existing version-1 progress backup.

**Published course:** All **ten weeks** are open through the calendar, with **220 original questions** (including **184 essential**). The separate February–June 2027 full A Level programme remains planned but **unpublished**. All earlier saved notes, maths input, drawings, scores, attempts/history, topic evidence, local storage key and version-1 backup/restore are preserved.

See `docs/WEEK10_AUTHORING_AUDIT.md` for specification and independent mathematics checks, and `docs/QUESTION_BLUEPRINT.md` for the explicit Week 10 paper-format correction.

## My Specification — Pass 4A

The website now includes a permanent **My specification** page for Pearson Edexcel 9MA0, with **19 official topic groups** (10 Pure, 5 Statistics, 4 Mechanics) and a full original student-friendly *I can…* skills library.

- Search by skill, topic, likely exam demand or Pearson section number.
- Filter Pure / Statistics / Mechanics.
- Switch between **Internal exams** (all Pure + Year 1 Applied) and **Full A Level** (including Year 2 Applied).
- Open each topic and skill to read specific examination demands, common pitfalls and the exact Pearson topic reference.
- Future-only Applied content is labelled and remains discoverable rather than being presented as part of the internal exam.
- The three overarching themes of argument/proof, problem solving and modelling are prominent across the course.
- Stable skill identifiers connect every published Week 1–5 question part to a primary and optional related skill; **4C now shows completed attempts, skills encountered and appropriately attributed mark accuracy**.

**Topic-level self-mark accuracy is now available when evidence is assignable to a specific skill.** Multi-part questions need a complete part breakdown; single-part questions can use their exact whole score. Old multi-part whole scores still count toward attempts, without inventing which skill earned the marks. No evidence is shown as *No part accuracy yet*, not 0%. The reference guide is [docs/SPECIFICATION_LIBRARY.md](docs/SPECIFICATION_LIBRARY.md) and the official authority is [Pearson's 9MA0 specification](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf).

## Pass 4B — Question-to-skill links and detailed marking

All **247 questions in published Weeks 1–10** are now linked to the 9MA0 skill library **part by part**.

Each question part has exactly **one primary skill ID**, used for eventual accuracy calculations, and optional **connected skill IDs** used only to show cross-topic practice links. The primary and connected tags do **not** multiply the available marks.

Students can optionally expand **Mark each part separately** while self-marking:

- Enter a whole-number score between **0** and the maximum for each part.
- When every part has a score, the overall mark is **automatically calculated**, and the question becomes **Finished**.
- If a derived part score is removed, that total is no longer valid and the question returns to *Not yet finished*.
- An existing overall-only score remains saved and valid while students try an unfinished breakdown; completing it replaces the previous total.
- Students who prefer to enter one overall mark can continue doing so. Previously saved marks, working and independence choices are preserved.

In **My Specification**, individual skills now link to published questions that practise them. On each question, students can optionally reveal which skills were used. Future weeks are **not** released by these links.

Skill percentage accuracy and per-topic results are available from **Pass 4C**, calculated only when each mark can be assigned to one primary specification skill. Multi-part total-only scores remain counted as attempts without misallocating their marks. See [the specification and evidence guide](docs/SPECIFICATION_LIBRARY.md) for the permanent skill-ID schema and scoring rules.

## Pass 4C — Personal progress by specification topic

**My Progress** now provides a syllabus-wide overview with switching between **Internal exams** and **Full A Level**, and filtering by **Pure**, **Statistics**, or **Mechanics**.

Students can see:

- Distinct questions completed for each topic, including mixed-topic questions; the overall count is **never** calculated by adding the topic counts.
- Skills encountered out of the relevant syllabus total. This measures **practice exposure**, not mastery.
- Independent / with-help completions, based on the student's choice rather than assumptions about their working.
- Topic-level and individual-skill **self-marked accuracy** only where marks can be assigned to a unique primary skill. A full detailed marking breakdown is required for multi-part questions. A one-part question's whole score is itself an exact part mark.
- The marks and number of questions supporting an accuracy estimate, plus a warning when evidence is limited.
- Clear **No part accuracy yet** and **No published practice yet** states instead of false 0% readings.

**My Specification** now includes the same progress evidence on topic cards, topic pages and individual skill details, alongside the existing search, examination demands and links to published questions.

Everything is calculated locally from the existing browser storage. There is no new account, teacher monitoring or server-side data transfer. The full rules and known limitations are documented in [docs/SPECIFICATION_LIBRARY.md](docs/SPECIFICATION_LIBRARY.md). **Pass 4D** also provides suggested revision, archived retries and offline backup/restore.

## Pass 4D — Revision suggestions, improvement history & backup

The website now provides a fully student-facing **What should I practise next?** section in **My Progress**. Recommendations use only actually released questions, and combine unpractised specification skills, early part-mark evidence, previously needed support, and low self-marked scores. They suggest varied AO1/AO2/AO3 practice with a short rationale and a link to the relevant skill; they do **not** label a student weak or diagnose mastery from one question.

### Compare successive attempts without losing earlier work

After completing and self-marking a question, students can choose **Start a fresh attempt**. A confirmation explains that the current marks, independence/help status, notes, line-by-line maths and vector drawing are archived before a blank new workspace opens. The earlier attempts remain in a collapsible, read-only **Try again & track improvement** panel, with scores, comparison to the previous attempt, maths steps and drawing previews. Up to 20 archived attempts per question may be stored locally; the site refuses to silently delete old attempts when that limit is reached.

**Statistics still count a question only once.** The latest finished attempt supplies the current mark evidence. If a student starts a retry but has not yet finished it, their last finished mark and topic progress stay visible. The current question still displays **Not yet finished** until a fresh mark is entered.

### Back up and restore safely

**My Progress → Save or restore your progress** offers a versioned JSON download containing self-marks, reflection notes, mathematical working, ink strokes and reattempt history. The file is created locally in the browser; it is not uploaded to a server.

When importing a backup, students see a preview of the saved contents and choose one of three modes:

- **Keep my current work** (default): add only records absent from the current device, and leave all matching question records unchanged.
- **Use imported for matches:** explicitly replace matching saved question records while leaving unrelated local records alone, after a warning.
- **Replace everything:** explicitly restore the selected backup and remove records absent from it, after a warning recommending a local backup first.

Invalid, oversized, version-mismatched and malformed backups are rejected. Progress is saved atomically; if browser storage fails, the import is not applied. The backup includes potentially private student notes, so the interface reminds students to store it privately.

**Next:** conduct a full release-quality and accessibility audit of Weeks 1–10; then build the February–June 2027 final-exam preparation programme without making unreleased Year 2 content accessible. Later, create and release the February–June 2027 final-exam programme without publishing unreleased practice prematurely.

## Earlier Week 1 launch record (before Pass 1)

The original Week 1 comprised 22 questions and an essential 98-mark core. That release design is retained as historical context only; the **current** Week 1 has 31 questions and an expanded 175-mark essential core, as documented above. Previously assigned marks, attempts and student work remain attached to the original question IDs.

## Mathematical notation

Mathematical questions, steps, answers, hints and statistical-table headers are rendered with **MathJax**. Use standard LaTeX inline delimiters `\( ... \)` **with a single backslash in the JavaScript string value**. MathJax source is loaded via CDN.

The CI workflow runs checks for correctly paired delimiters, no accidental doubled escaping, mark/section/time totals and **a genuine MathJax parse of every LaTeX expression**. New content should pass these checks before it is released.

For data tables, provide a structured `table` property on the question object rather than inserting Markdown pipe tables inside its stem.

## Local preview

Start a static web server in the repository root:

    python3 -m http.server 8000

Then visit http://localhost:8000 (ES module imports do not run correctly on `file://` URLs).

For development validation:

    npm install
    npm run check

## Publishing

The repository is GitHub Pages-compatible and needs no frontend build step. Pages can be enabled at **Settings → Pages → Deploy from a branch → main → /(root)**. Review the actual Pages deployment rather than assuming an open PR is live.

### Progressive weekly release

Edit `src/config.js`: the default is `stage1.releaseMode = "manual"` with `releasedWeeks = 5`. To release a future week:

1. Fully author and validate that week's questions and mark schemes.
2. Add its own content module and import it through `src/app.js`.
3. Mark the corresponding week `hasPublishedContent: true` in `src/data/programmes.js`.
4. Increase `releasedWeeks` and merge the release.
5. Check MathJax, accessibility, device widths and the actual deployed website.

Future-week topics may be previewed but **unreleased question files must not be bundled in the public website**. Merely hiding a loaded JavaScript question object with a browser lock is not a secure embargo.

## Student working space (Pass 3)

Each question offers three complementary working modes. All three remain saved when switching tabs or navigating away from the question.

- **Notes** is the original free-text scratchpad. Previously saved text is migrated without loss.
- **Maths steps** is a line-by-line editor using a touch-friendly [MathLive](https://mathlive.io/mathlive/) mathematical keyboard (pinned CDN version). Students can enter fractions, indices, roots, inequalities and integrals without writing LaTeX manually; they can insert/remove lines and annotate each mathematical step. If MathLive cannot load, plain LaTeX entry with a MathJax preview remains available.
- **Draw** supports mouse, finger and stylus using a resolution-independent vector drawing canvas. There are three ink colours, three widths, an optional grid, pen/eraser tools, undo/redo, a clear confirmation and PNG export. Content is saved per question.

The working modes keep data separately within the same question's record. Work is not uploaded to a server, graded automatically or shared with teachers. An **Expand space** control gives extra room for longer solutions and diagrams.

## Question completion and self-marking (Pass 3)

At the end of each question, students follow two clearly numbered steps:

1. **How did you complete it?** Select **Independently** or **With help** to record how they worked **during the attempt**, before reading the solution.
2. **How many marks did you earn?** Open the full worked solution and enter a whole-number score, from **0** to the question's available marks.

**Completion is determined exclusively by entering a valid mark.** Zero is a valid mark and means the question is finished; merely choosing an independence option never completes a question. Students may clear their mark to set the question back to "Not yet finished." Entering an invalid/out-of-range score does not count.

The progress dashboard and sidebar ticks use this score-based completion rule. Independence/help is recorded separately to help students reflect. Previous I/P/S data remains readable; older "Still stuck" statuses are preserved, but they do not make a question finished without a score.

An optional error category and study reflections help guide reattempts.

## Student data and privacy

Working, drawing strokes, self-awarded marks and reflections live **only in local browser storage**. They do not automatically sync between students or devices. Clearing browser data may remove them; saved drawings can also be exported as PNG. Students should not treat a local-browser save as a permanent backup.

## Source layout

- `docs/QUESTION_BLUEPRINT.md`: required week-by-week curriculum and authoring guidance.
- `src/config.js`, `src/publication.js`: teacher-controlled release settings, shared publication gating, local storage key and Brunei timezone.
- `src/data/programmes.js`: week titles, curricula and 2027 final programme preview.
- `src/data/week01.js`: original Week 1 content.
- `src/data/week02.js`, `src/data/week02-retrieval.js`, `src/data/week02-pure.js`, `src/data/week02-modelling.js`, `src/data/week02-applied.js`, `src/data/week02-timed.js`, `src/data/week02-extension.js`: Week 2 content across all six subsections.
- `src/data/week03.js`, `src/data/week03-retrieval.js`, `src/data/week03-pure.js`, `src/data/week03-modelling.js`, `src/data/week03-applied.js`, `src/data/week03-timed.js`, `src/data/week03-extension.js`: Week 3 content in the same format.
- `src/data/week04.js`, `src/data/week04-retrieval.js`, `src/data/week04-pure.js`, `src/data/week04-modelling.js`, `src/data/week04-applied.js`, `src/data/week04-timed.js`, `src/data/week04-extension.js`: Week 4 question content in six existing modes.
- `src/data/week05.js`, `src/data/week05-retrieval.js`, `src/data/week05-pure.js`, `src/data/week05-modelling.js`, `src/data/week05-applied.js`, `src/data/week05-timed.js`, `src/data/week05-extension.js`: Week 5 material across six existing subsections.
- `src/data/week01-skill-map.js`, `src/data/week02-skill-map.js`, `src/data/week03-skill-map.js`, `src/data/week04-skill-map.js`, `src/data/week05-skill-map.js`, `src/data/tagged-questions.js`: permanent, reviewed part-by-part skill tags across both released weeks.
- `src/data/skill-practice-index.js`: links from individual skills to published questions only.
- `src/part-marking.js`: validated part scores, derived totals and exact primary-skill mark evidence.
- `src/specification-analytics.js`, `src/specification-progress-view.js`: pure analytics and responsive topic/skill progress UI.
- `src/revision-recommendations.js`, `src/revision-recommendations-view.js`: published-only, evidence-aware next-practice suggestions.
- `src/attempt-history.js`, `src/attempt-history-view.js`: explicitly archived retries, trends and read-only earlier maths/ink.
- `src/progress-portability.js`, `src/progress-transfer-view.js`: JSON backup validation, safe merge/replace choices and offline transfer UI.
- `src/app.js`: calendar, question navigator, MathJax typesetting, solutions and progress tracking.
- `src/working-state.js`, `src/working-space.js`, `src/workspace-maths.js`, `src/workspace-drawing.js`: working modes and local persistence.
- `src/question-assessment.js`: score-driven completion, clear independence/help reporting and self-marking.
- `styles.css`: responsive design, math layout and print styling.
- `tests/content.test.mjs`, `tests/week02-content.test.mjs`, `tests/week02-student-flow.test.mjs`, `tests/week03-content.test.mjs`, `tests/week03-maths-audit.test.mjs`, `tests/week03-student-flow.test.mjs`, `tests/week04-content.test.mjs`, `tests/week04-maths-audit.test.mjs`, `tests/week04-student-flow.test.mjs`, `tests/week05-content.test.mjs`, `tests/week05-maths-audit.test.mjs`, `tests/week05-student-flow.test.mjs`, `tests/publication.test.mjs`: content, maths, AO, release gating and five-week interaction audits.
- `tests/math-render.test.mjs`: MathJax parse tests against all authored equations.
- `tests/working-state.test.mjs`, `tests/working-ui.test.mjs`, `tests/question-assessment.test.mjs`: working space and scoring UI regressions.
- `tests/question-skill-tags.test.mjs`, `tests/part-marking.test.mjs`, `tests/detailed-marking-ui.test.mjs`: skill mapping, legacy marks, complete breakdowns and numeric validation.
- `tests/specification-analytics.test.mjs`, `tests/specification-progress-ui.test.mjs`, `tests/specification-progress-route.test.mjs`: accurate topic evidence, no-data states, release scope and live routing.
- `tests/attempt-history.test.mjs`, `tests/revision-recommendations.test.mjs`, `tests/progress-portability.test.mjs`, `tests/pass4d-student-ui.test.mjs`: retry history, suggestions, backup safety, and full student flow.

## Next development phases

1. **Release-quality audit:** inspect the complete Week 1–10 maths, student experience, mobile rendering, marking and backup/restore after merging the Week 10 PR.
2. **Consolidation:** review topic-specification coverage and adjust future-targeted reattempt guidance without overwriting student results.
3. **2027 final-exam preparation:** extend the existing February–June plan to Year 2 Applied and final-exam practice using the same skill IDs and local progress format.
4. **Optional future teacher features:** only consider anonymous class-level summaries or secure multi-device sync if there is a clear privacy and school-authorisation plan. Neither is silently enabled.
