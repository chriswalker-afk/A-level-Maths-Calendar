# A Level Maths Calendar

An online independent-study calendar for **Pearson Edexcel A Level Mathematics (9MA0)**, designed to emphasise **combined skills, AO2 reasoning and AO3 modelling**.

## Calendar-first navigation and editorial design

The homepage **is the ten-week calendar**, arranged as two five-week planner blocks. There is no promotional hero or extra "overview" before the work. An available week links directly to its questions, resuming any unfinished reattempt or the next unmarked question; an unreleased week is labelled but not clickable.

Inside practice, students can switch directly between **Retrieval / Connected problems / Modelling & reasoning / Year 1 Applied / Timed set / Extension**, browse the question index, and continue across a section boundary with Next/Previous. Old bookmarked `#/week/N` URLs for published weeks open the questions instead of a separate intermediate screen.

The visual identity uses large week numerals, ruled graph-paper layouts, warm paper, dark ink, coral accents and highlighted active states. It also restyles My Progress, My Specification and the practical study guide to share the same design language.

**Design and flow reference:** [docs/VISUAL_IDENTITY_AND_FLOW.md](docs/VISUAL_IDENTITY_AND_FLOW.md). The finishing stylesheet `styles/identity-polish.css` now applies the same identity across the maths editor, marking, specification, progress, retry history and backups. New components should reuse its palette and typography rather than introduce a separate theme. New navigation regressions are covered by `tests/calendar-flow.test.mjs` and `tests/calendar-route-ui.test.mjs`.

## Links to other maths websites

The **Links** tab (`#/links`) offers five independent resources: [Statistics Lab](https://statistics.mrwalkermaths.com/), [Mechanics Lab](https://mechanics.mrwalkermaths.com/), [Maths Words Lab](https://words.mrwalkermaths.com/), [Sampling Arcade](https://sampling.mrwalkermaths.com/), and [Race Around the Large Data Set](https://lds.mrwalkermaths.com/). Cards open in a new tab so students can return to their Calendar working without navigating away.

To add, rename or update a link, edit the data list in `src/links-view.js`; the route uses `styles/links-page.css` and is tested in `tests/links-page.test.mjs` and the Chrome browser audit. These are separate GitHub Pages sites with their own browser storage; saved calendar marks do not transfer.

## Two linked programmes

1. **Internal exam preparation:** 10 weeks, all Pure Mathematics + Year 1 Statistics & Mechanics. Four essential hours per week, one recommended hour of timed work, one optional hour for extended challenge or repair.
2. **Final exam preparation:** a planned 20-week full A Level programme from 1 February to 16 June 2027, incorporating Year 2 Applied and exam-specific preparation. The future programme is not yet published.

The full authoring specification is [docs/QUESTION_BLUEPRINT.md](docs/QUESTION_BLUEPRINT.md).

## Published study weeks

### Passes 1–3 — expanded Weeks 1–9

**Weeks 1–9 now contain 31 original questions each**, including 25 essential questions. All earlier question IDs, marked parts, working and self-marked attempts remain in place; the new questions were appended within each existing subsection after its earlier questions.

| Section | Questions per week | Marks | Planned working |
|---|---:|---:|---:|
| Retrieval (R1–R10) | 10 | 20 | 24 min |
| Connected Pure (P1–P7) | 7 | 70 | 84 min |
| Modelling & reasoning (M1–M3) | 3 | 40 | 48 min |
| Year 1 Applied (A1–A5) | 5 | 45 | 54 min |
| **Essential four-hour pathway** | **25** | **175** | **210 working + 30 marking/reflection = 240 min** |
| Recommended timed work (T1–T4) | 4 | 40 | 48 working + 12 review |
| **Recommended five-hour cumulative** | **29** | **215** | **300 min including review** |
| Optional A/A* work (X1–X2) | 2 | 30 | 36 working + 24 reflection |
| **Optional six-hour cumulative** | **31** | **245** | **360 min including review** |

The working-time allocations are **1.2 minutes per mark as an examination-paced planning benchmark**, not a claim that every student will complete very demanding AO2/AO3 questions at that speed. Teachers should pilot real completion times, particularly for extended proofs and multi-skill problems. The resource authoring AO2/AO3 emphasis is not the official examination AO weighting.

**Week 1:** proof by contradiction and surds, restricted functions and inverse transformations, repeated poles, nonlinear systems, optimisation, Year 1 sampling and outlier interpretation.

**Week 2:** parametric/Cartesian geometry and constraints, exact tangent/3D vector proofs, safer-route modelling, Year 1 constant-acceleration and multi-stage motion.

**Week 3:** reciprocal identities, R-form and unit-circle intersections, sector/segment approximations, periodic threshold models and Year 1 probability trees.

**Week 4 (Pass 2):** implicit differentiation and tangency, inverse/logarithm behaviour, related rates, rational stationary-point comparisons, a constrained conical tank, Year 1 forces and connected-particle questions.

**Week 5 (Pass 2):** exact trigonometric integration, repeated-pole partial fractions and bounds, separable differential equations, area between curves, finite exponential accumulation, Year 1 binomial distributions and hypothesis testing.

**Week 6 (Pass 2):** AP/GP comparison proofs, fractional binomial approximations, nonlinear recurrence convergence, financial sequence modelling, a recurring-pollutant threshold, Year 1 histogram interpretation and connected particles. The optional extension proves weighted binomial-coefficient identities without requiring out-of-specification discrete-distribution variance.

**Pass 3 has completed Weeks 7–9 at 31 questions each**, including a 175-mark essential core and harder AO2/AO3 challenge. **Week 10 remains an authentic 100-mark Pure and 50-mark Year 1 Applied assessment** with a 60-minute diagnostic review. The 2027 full A Level programme is still unpublished. Across the published ten weeks there are now **301 questions, including 247 essential**.

Each new marked part has **one permanent primary 9MA0 specification skill**; optional secondary skills only represent connected practice. The existing calendar, six-section navigation, line-by-line maths, drawing, local storage key `alevel-maths-calendar-progress-v1`, scored-zero completion, self-marking, retry history, progress, specification analytics and backups are preserved.

Read the [current question blueprint](docs/QUESTION_BLUEPRINT.md) and the [Pass 1](docs/PASS1_WEEKS01_03_EXPANSION_AUDIT.md), [Pass 2](docs/PASS2_WEEKS04_06_EXPANSION_AUDIT.md) and [Pass 3](docs/PASS3_WEEKS07_09_EXPANSION_AUDIT.md) authoring and validation audits.

### Week 7 — Exponentials, logarithms and differential equations

**31 original questions, 175/215/245 marks.** Connected Pure problems include logarithmic root counts, flat stationary inflections, variable-exponent optimisation and exact logarithmic bounds. The new model compares competing exponential forecasts using convexity and a numerical crossover. Year 1 Statistics investigates an influential regression outlier and a one-sided binomial test whose conclusion depends on the significance level. The optional extension proves logarithmic bounds by differentiation.

### Week 8 — Numerical methods and synthesis

**31 original questions, 175/215/245 marks.** Students establish root uniqueness before Newton–Raphson iteration, examine a double root that fails sign-change tests, calculate exact and numerical integrals, and use concavity to determine signed errors. A distinctive model shows how trapezium errors can cancel to give an exact total for the wrong reason. Year 1 Applied includes vertical SUVAT and binomial batch reliability. The extension uses logarithmic ratios and numerical roots to calculate a root-dependent area.

### Week 9 — Synoptic problem solving

**31 original questions, 175/215/245 marks.** The questions do not label the required method: students combine rational inverses and inequalities, exact trigonometric area, partial fractions, parametric geometric area and cost optimisation. Year 1 Applied combines stratified sampling and a conditional binomial decision, and a variable-force mechanics problem in which acceleration changes sign before velocity. The optional cubic-parameter investigation connects derivative signs, root counts, Newton iteration and exact integration.

**Across Weeks 7–9**, the essential 175-mark core in each week contains **136 marks attributed to AO2/AO3** (77.7% of its marks), for deliberate practice in mathematical argument, method selection and model evaluation. See the [Pass 3 audit](docs/PASS3_WEEKS07_09_EXPANSION_AUDIT.md) for content, scope, time and regression guarantees.

### Week 10 — Mock examination and consolidation

Unlike the 175-mark Weeks 1–9 weekly challenge pathways, this final week contains an **original 100-mark two-hour Pure paper** (12 questions) and **50-mark one-hour Year 1 Applied mini-mock** (10 questions; 25 Statistics + 25 Mechanics), followed by **one hour of self-marking and diagnostic reflection**. The papers are original revision materials, not official Pearson past papers.

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

**Published course:** All **ten weeks** are open through the calendar, with **301 original questions** (including **247 essential**). The separate February–June 2027 full A Level programme remains planned but **unpublished**. All earlier saved notes, maths input, drawings, scores, attempts/history, topic evidence, local storage key and version-1 backup/restore are preserved.

See `docs/WEEK10_AUTHORING_AUDIT.md` for specification and independent mathematics checks, and `docs/QUESTION_BLUEPRINT.md` for the explicit Week 10 paper-format correction.

## Release-quality review (November 2026)

The ten-week calendar now publishes **301 original questions, 932 marked parts and 247 essential questions**. The current release-quality audit separates technical validation from evidence of full syllabus skill coverage and real student completion times. See **[Release-quality audit and remaining gaps](docs/RELEASE_QUALITY_AUDIT_2026_11.md)** and reproduce its results with `npm run audit:release`.

Of the **222** in-scope Pure and Year 1 Applied skills in My Specification, **187 (84.2%)** have a directly credit-bearing published question part, **11** more have connected exposure, and **24** have no tagged published question. This is an honest measure of **question-to-skill links**, *not* student mastery or a claim that all techniques are absent from the prose of the other questions.

Marking and progress remain browser-local. A recorded zero completes a question; unattempted or unmarked questions do **not** imply 0% accuracy. The four-, five- and six-hour plans are timetable **benchmarks**, not observed student timings. Before broader roll-out, moderate the missing skill evidence and pilot timing and rendering on real student devices.

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

All **301 questions in published Weeks 1–10** are now linked to the 9MA0 skill library **part by part**.

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
- `src/data/week01.js`: preserved original Week 1 questions combined with the additive expansion and pacing metadata.
- `src/data/expanded-week-budget.js`, `src/data/week01-expansion-*.js`, `src/data/week02-expansion-*.js`, `src/data/week03-expansion-*.js`: Pass 1 original challenge additions, per-part specification tags and exam-paced four/five/six-hour allocations.
- `src/data/week02.js`, `src/data/week02-retrieval.js`, `src/data/week02-pure.js`, `src/data/week02-modelling.js`, `src/data/week02-applied.js`, `src/data/week02-timed.js`, `src/data/week02-extension.js`: Week 2 content across all six subsections.
- `src/data/week03.js`, `src/data/week03-retrieval.js`, `src/data/week03-pure.js`, `src/data/week03-modelling.js`, `src/data/week03-applied.js`, `src/data/week03-timed.js`, `src/data/week03-extension.js`: Week 3 content in the same format.
- `src/data/week04.js`, `src/data/week04-retrieval.js`, `src/data/week04-pure.js`, `src/data/week04-modelling.js`, `src/data/week04-applied.js`, `src/data/week04-timed.js`, `src/data/week04-extension.js`: Week 4 question content in six existing modes.
- `src/data/week05.js`, `src/data/week05-retrieval.js`, `src/data/week05-pure.js`, `src/data/week05-modelling.js`, `src/data/week05-applied.js`, `src/data/week05-timed.js`, `src/data/week05-extension.js`: Week 5 material across six existing subsections.
- `src/data/week01-skill-map.js`, `src/data/week02-skill-map.js`, `src/data/week03-skill-map.js`, `src/data/week04-skill-map.js`, `src/data/week05-skill-map.js`, `src/data/tagged-questions.js`: permanent, reviewed part-by-part skill tags; later weeks and additive Pass 1 mappings are loaded through the same shared tagging system.
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

1. **Release-quality PR #22:** confirm automated tests, inspect the published question flow, and merge after review.
2. **Student pilot and skill-evidence repair:** moderate the 35 in-scope skills without direct tagged question evidence, then add genuinely markable repair questions without silently expanding the fixed weekly workload. Check real completion times and mobile typesetting on student devices.
3. **2027 full-course programme:** author Year 2 Applied and complete-paper preparation while retaining existing permanent skill IDs and browser-progress formats. Future content remains unpublished.
4. **Optional privacy-safe teacher features:** only add class dashboards or multi-device sync after explicit school authorisation; neither is enabled by default.
