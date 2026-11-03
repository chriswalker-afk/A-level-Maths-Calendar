# A Level Maths Calendar

An online independent-study calendar for **Pearson Edexcel A Level Mathematics (9MA0)**, designed to emphasise **combined skills, AO2 reasoning and AO3 modelling**.

## Two linked programmes

1. **Internal exam preparation:** 10 weeks, all Pure Mathematics + Year 1 Statistics & Mechanics. Four essential hours per week, one recommended hour of timed work, one optional hour for extended challenge or repair.
2. **Final exam preparation:** a planned 20-week full A Level programme from 1 February to 16 June 2027, incorporating Year 2 Applied and exam-specific preparation. The future programme is not yet published.

The full authoring specification is [docs/QUESTION_BLUEPRINT.md](docs/QUESTION_BLUEPRINT.md).

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
- `src/data/week01.js`: completed Week 1 content, including T and X extension sections.
- `src/app.js`: calendar, question navigator, MathJax typesetting, solutions and progress tracking.
- `src/working-state.js`, `src/working-space.js`, `src/workspace-maths.js`, `src/workspace-drawing.js`: working modes and local persistence.
- `src/question-assessment.js`: score-driven completion, clear independence/help reporting and self-marking.
- `styles.css`: responsive design, math layout and print styling.
- `tests/content.test.mjs`: content, maths delimiters, AO marks and time audits.
- `tests/math-render.test.mjs`: MathJax parse tests against all authored equations.
- `tests/working-state.test.mjs`, `tests/working-ui.test.mjs`, `tests/question-assessment.test.mjs`: working space and scoring UI regressions.

## Next passes

1. Review actual student interactions and mathematical rendering on phones/tablets and desktops.
2. Refine the working and self-marking experience before scaling.
3. Produce and validate Weeks 2–10 one week at a time.
4. Build the February–June full A Level programme using the same question library architecture.
