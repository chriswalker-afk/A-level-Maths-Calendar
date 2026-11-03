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

**Week 1 — Algebra, functions and proof** remains available with all its existing questions and saved work.

**Week 2 — Coordinate geometry and vectors** is now fully authored and available from the calendar, with **22 original questions**:

| Section | Questions | Marks | Planned working |
|---|---:|---:|---:|
| Retrieval: lines, circles, 2D/3D vectors | 10 | 20 | 30 min |
| Connected Pure: tangency, ratios, circle proof | 3 | 30 | 67 min (+3 min buffer) |
| Modelling: a route around a circular reserve and constrained garden area | 2 | 26 | 68 min (+2 min buffer) |
| Year 1 Mechanics: units, signed motion, vertical motion | 3 | 22 | 48 min (+2 min buffer) |
| **Essential core** | **18** | **98** | **Up to 220 min, plus 20 min marking** |
| Recommended timed problems: circumcircle, 3D parallelogram, velocity-time graph | 3 | 32 | 45 min (+15 min review) |
| Optional extension: two circles and their common chord | 1 | 14 | 40 min (+20 min review) |

The **four-hour essential pathway** retains the blueprint's AO1/AO2/AO3 mark distribution: **26 / 39 / 33**. These are resource-authoring proportions, not the 9MA0 paper-wide assessment weighting.

Each Week 2 question includes correctly typeset maths, part-by-part marks, a first-step hint, fully worked solutions, a verified answer, a misconception, a reflection prompt and a permanent primary specification skill for each marked part (with optional connected skills). All the existing Notes / Maths steps / Draw, self-marking, independent/with-help selection, retry history and backup functions work unchanged.

The student calendar now opens **Weeks 1–4 directly into questions**. The 72 essential questions across those weeks contribute to cumulative progress; topic accuracy counts precise evidence only once per finished question. **Weeks 5–10 remain locked.** Release logic is shared by question routes and specification-practice links, so an unreleased week is not accidentally exposed by a topic link. The full final-exam programme is still only planned.

Quality gates: `tests/week02-content.test.mjs`, `tests/week02-student-flow.test.mjs` and `tests/publication.test.mjs`, plus the existing MathJax, progress, marking and backup suites.

### Week 3 — Trigonometry and periodic models

The complete **Week 3** pack is now authored and released with **22 original questions (144 marks overall)**, organised exactly like the earlier weeks:

| Section | Questions | Marks | Working time |
|---|---:|---:|---:|
| Quick retrieval — exact values, radians, trig graphs, identities, compound/double angles, R-sine and small angles | 10 | 20 | 30 minutes |
| Connected Pure — identity proof/domain, shifted-sine inequality, ambiguous sine-rule triangles | 3 | 30 | 67 minutes |
| Modelling — ferry-ramp tide access intervals; signal stationary points and approximation error | 2 | 26 | 68 minutes |
| Year 1 Applied — independent/exclusive events, counters without replacement, overlapping clubs and two selections | 3 | 22 | 48 minutes |
| **Essential core** | **18** | **98** | **213 minutes + 20 marking + 7 buffer = four hours** |
| Recommended timed set — sector/segment, double-angle inequality, common-condition probability tree | 3 | 32 | 45 + 15 minutes |
| Optional A/A* extension — parameterised sine-wave threshold and tangency proof | 1 | 14 | 40 + 20 minutes |

Week 3 has the planned resource-authoring mark balance of **AO1 26 / AO2 39 / AO3 33**. Students use the same Notes, Maths steps, Draw, first-step hints, step-by-step mark schemes, independence choices, self-marking and reattempt history as before.

All Week 3 marked parts carry **permanent 9MA0 skill tags** across P05 (Trigonometry), S03 (Year 1 probability) and connected algebra/calculus. At the completion of Week 3, the calendar had **66 published questions** (54 essential); Week 4 expands this to **88 published questions** (72 essential). My Progress displays a separate record for each week; aggregate and topic accuracy include the third week's validated attempts, without changing earlier saved work. **Weeks 5–10 remain locked**.

The QA suite now covers the Week 3 mark allocations and timing, correct MathJax rendering, specification links, exact-value maths audit, manually controlled Brunei release gates and a student end-to-end flow through Week 3 marking and My Progress.

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

**Weeks 1–4 are available on the calendar** with **88 published questions (72 essential)**. Question IDs and part-by-part specification tags use the stable `W04-` and P07/M08 skill namespaces, with connected references back to algebra, exponentials, vectors and kinematics. The separate week record in My Progress and per-skill evidence in My Specification update automatically from these attempts. The release gate keeps **Weeks 5–10 locked**; final-exam programme 2 remains unpublished.

Quality gates: `tests/week04-content.test.mjs` (marks, skills, AO, timing, release routing), `tests/week04-maths-audit.test.mjs` (independent algebraic/physical numerical checks), `tests/week04-student-flow.test.mjs` (four-week calendar, saved work, zero-mark completion, skill evidence), and the extended real MathJax parser suite.

## My Specification — Pass 4A

The website now includes a permanent **My specification** page for Pearson Edexcel 9MA0, with **19 official topic groups** (10 Pure, 5 Statistics, 4 Mechanics) and a full original student-friendly *I can…* skills library.

- Search by skill, topic, likely exam demand or Pearson section number.
- Filter Pure / Statistics / Mechanics.
- Switch between **Internal exams** (all Pure + Year 1 Applied) and **Full A Level** (including Year 2 Applied).
- Open each topic and skill to read specific examination demands, common pitfalls and the exact Pearson topic reference.
- Future-only Applied content is labelled and remains discoverable rather than being presented as part of the internal exam.
- The three overarching themes of argument/proof, problem solving and modelling are prominent across the course.
- Stable skill identifiers connect every published Week 1–4 question part to a primary and optional related skill; **4C now shows completed attempts, skills encountered and appropriately attributed mark accuracy**.

**Topic-level self-mark accuracy is now available when evidence is assignable to a specific skill.** Multi-part questions need a complete part breakdown; single-part questions can use their exact whole score. Old multi-part whole scores still count toward attempts, without inventing which skill earned the marks. No evidence is shown as *No part accuracy yet*, not 0%. The reference guide is [docs/SPECIFICATION_LIBRARY.md](docs/SPECIFICATION_LIBRARY.md) and the official authority is [Pearson's 9MA0 specification](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf).

## Pass 4B — Question-to-skill links and detailed marking

All **88 questions in published Weeks 1–4** are now linked to the 9MA0 skill library **part by part**.

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

**Next:** author Week 5 and build out Weeks 6–10 using the same stable specification tags and evidence rules. Later, create and release the February–June 2027 final-exam programme without publishing unreleased practice prematurely.

## Week 1 is now complete

The current release has **18 essential questions worth 98 marks** and two additional pathways:

| Section | Questions | Marks | Time |
|---|---:|---:|---:|
| R — AO1 Retrieval | 10 | 20 | 30 min |
| P — Connected problems | 3 | 30 | 70 min |
| M — Extended modelling | 2 | 26 | 70 min |
| A — Year 1 Statistics | 3 | 22 | 50 min |
| Self-marking and correction | — | — | 20 min |
| **Essential** | **18** | **98** | **240 min** |
| T — Timed mixed set | 3 | 32 | 45 min attempt + 15 min marking |
| X — A/A* extension | 1 | 14 | 40 min attempt + 20 min review |

All questions are original Edexcel-style practice, **not official Pearson past-paper questions**. Each question has full step-by-step solutions, an optional first-step hint, a misconception prompt and a reflection question.

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

Edit `src/config.js`: the default is `stage1.releaseMode = "manual"` with `releasedWeeks = 4`. To release a future week:

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
- `src/data/week01-skill-map.js`, `src/data/week02-skill-map.js`, `src/data/week03-skill-map.js`, `src/data/week04-skill-map.js`, `src/data/tagged-questions.js`: permanent, reviewed part-by-part skill tags across both released weeks.
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
- `tests/content.test.mjs`, `tests/week02-content.test.mjs`, `tests/week02-student-flow.test.mjs`, `tests/week03-content.test.mjs`, `tests/week03-maths-audit.test.mjs`, `tests/week03-student-flow.test.mjs`, `tests/week04-content.test.mjs`, `tests/week04-maths-audit.test.mjs`, `tests/week04-student-flow.test.mjs`, `tests/publication.test.mjs`: content, maths, AO, release gating and four-week interaction audits.
- `tests/math-render.test.mjs`: MathJax parse tests against all authored equations.
- `tests/working-state.test.mjs`, `tests/working-ui.test.mjs`, `tests/question-assessment.test.mjs`: working space and scoring UI regressions.
- `tests/question-skill-tags.test.mjs`, `tests/part-marking.test.mjs`, `tests/detailed-marking-ui.test.mjs`: skill mapping, legacy marks, complete breakdowns and numeric validation.
- `tests/specification-analytics.test.mjs`, `tests/specification-progress-ui.test.mjs`, `tests/specification-progress-route.test.mjs`: accurate topic evidence, no-data states, release scope and live routing.
- `tests/attempt-history.test.mjs`, `tests/revision-recommendations.test.mjs`, `tests/progress-portability.test.mjs`, `tests/pass4d-student-ui.test.mjs`: retry history, suggestions, backup safety, and full student flow.

## Next development phases

1. **Week 5 content:** author integration and accumulation, including Year 1 binomial probabilities and hypothesis testing, with the same detailed mark schemes and skill mapping.
2. **Weeks 6–10:** extend the internal-exam programme in a controlled weekly sequence, monitoring content quality and screen usability before each release.
3. **2027 final-exam preparation:** extend the existing February–June plan to Year 2 Applied and final-exam practice using the same skill IDs and local progress format.
4. **Optional future teacher features:** only consider anonymous class-level summaries or secure multi-device sync if there is a clear privacy and school-authorisation plan. Neither is silently enabled.
