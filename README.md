# A Level Maths Calendar

An online independent-study calendar for **Pearson Edexcel A Level Mathematics (9MA0)**, designed to emphasise **combined skills, AO2 reasoning and AO3 modelling**.

## Two linked programmes

1. **Internal exam preparation:** 10 weeks, all Pure Mathematics + Year 1 Statistics & Mechanics. Four essential hours per week, one recommended hour of timed work, one optional hour for extended challenge or repair.
2. **Final exam preparation:** a planned 20-week full A Level programme from 1 February to 16 June 2027, incorporating Year 2 Applied and exam-specific preparation. The future programme is not yet published.

The full authoring specification is [docs/QUESTION_BLUEPRINT.md](docs/QUESTION_BLUEPRINT.md).

## My Specification — Pass 4A

The website now includes a permanent **My specification** page for Pearson Edexcel 9MA0, with **19 official topic groups** (10 Pure, 5 Statistics, 4 Mechanics) and a full original student-friendly *I can…* skills library.

- Search by skill, topic, likely exam demand or Pearson section number.
- Filter Pure / Statistics / Mechanics.
- Switch between **Internal exams** (all Pure + Year 1 Applied) and **Full A Level** (including Year 2 Applied).
- Open each topic and skill to read specific examination demands, common pitfalls and the exact Pearson topic reference.
- Future-only Applied content is labelled and remains discoverable rather than being presented as part of the internal exam.
- The three overarching themes of argument/proof, problem solving and modelling are prominent across the course.
- Stable skill identifiers connect every Week 1 question part to a primary and optional related skill; **4C now shows completed attempts, skills encountered and appropriately attributed mark accuracy**.

**Topic-level self-mark accuracy is now available when evidence is assignable to a specific skill.** Multi-part questions need a complete part breakdown; single-part questions can use their exact whole score. Old multi-part whole scores still count toward attempts, without inventing which skill earned the marks. No evidence is shown as *No part accuracy yet*, not 0%. The reference guide is [docs/SPECIFICATION_LIBRARY.md](docs/SPECIFICATION_LIBRARY.md) and the official authority is [Pearson's 9MA0 specification](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf).

## Pass 4B — Question-to-skill links and detailed marking

All **22 Week 1 questions** are now linked to the 9MA0 skill library **part by part**.

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

Everything is calculated locally from the existing browser storage. There is no new account, teacher monitoring or server-side data transfer. The full rules and known limitations are documented in [docs/SPECIFICATION_LIBRARY.md](docs/SPECIFICATION_LIBRARY.md). **Pass 4D** will turn these data into suggested revision and allow progress to be exported and restored between devices.

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

Edit `src/config.js`: the default is `stage1.releaseMode = "manual"` with `releasedWeeks = 1`. To release a future week:

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
- `src/config.js`: publication settings, local storage key and Brunei timezone.
- `src/data/programmes.js`: week titles, curricula and 2027 final programme preview.
- `src/data/week01.js`: original Week 1 question content, including T and X extension sections.
- `src/data/week01-skill-map.js`, `src/data/tagged-questions.js`: verified part-by-part skill tags.
- `src/data/skill-practice-index.js`: links from individual skills to published questions only.
- `src/part-marking.js`: validated part scores, derived totals and exact primary-skill mark evidence.
- `src/specification-analytics.js`, `src/specification-progress-view.js`: pure analytics and responsive topic/skill progress UI.
- `src/app.js`: calendar, question navigator, MathJax typesetting, solutions and progress tracking.
- `src/working-state.js`, `src/working-space.js`, `src/workspace-maths.js`, `src/workspace-drawing.js`: working modes and local persistence.
- `src/question-assessment.js`: score-driven completion, clear independence/help reporting and self-marking.
- `styles.css`: responsive design, math layout and print styling.
- `tests/content.test.mjs`: content, maths delimiters, AO marks and time audits.
- `tests/math-render.test.mjs`: MathJax parse tests against all authored equations.
- `tests/working-state.test.mjs`, `tests/working-ui.test.mjs`, `tests/question-assessment.test.mjs`: working space and scoring UI regressions.
- `tests/question-skill-tags.test.mjs`, `tests/part-marking.test.mjs`, `tests/detailed-marking-ui.test.mjs`: skill mapping, legacy marks, complete breakdowns and numeric validation.
- `tests/specification-analytics.test.mjs`, `tests/specification-progress-ui.test.mjs`, `tests/specification-progress-route.test.mjs`: accurate topic evidence, no-data states, release scope and live routing.

## Next passes

1. **4D — Smart revision and student data portability:** recommend only published questions for under-practised or low-accuracy skills; add reattempt history, and support progress export/import for another device.
2. **Scale content:** review the Week 1 student experience and create Weeks 2–10 in a steady sequence, tagging each new question's marked parts to permanent skill IDs.
3. **Full 2027 programme:** extend the data model to Year 2 Applied and final examination preparation, using the same local tracking rules.
