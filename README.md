# A Level Maths Calendar

A static, GitHub Pages-compatible revision calendar for **Pearson Edexcel A Level Mathematics (9MA0)**.

## Programmes

- **Internal exam preparation:** ten weeks, all Pure Mathematics plus Year 1 Statistics and Mechanics; 4 hours of essential work, one recommended hour and one optional hour.
- **Final examination preparation (future):** 20 weeks from 1 February 2027 through 16 June 2027, covering both years of Applied Mathematics.

The content specification is [docs/QUESTION_BLUEPRINT.md](docs/QUESTION_BLUEPRINT.md).

## Preview locally

Use a web server because the site uses JavaScript ES modules:

    python3 -m http.server 8000

Open http://localhost:8000.

## Publish

After merging the website pull request, enable GitHub Pages under **Settings → Pages**, using the main branch and repository root. Verify the deployment before distributing a link. A repository commit alone does not guarantee that Pages has been enabled.

## Release policy

Release settings are in `src/config.js`. The default is manual release of one week. Student-facing future-week descriptions are always visible, but full questions are provided only in individual content modules. Never distribute future hidden answers in the frontend bundle if they are intended to remain embargoed.

The first website pass includes an **illustrative Week 1 question experience**; the full 18-question Week 1 content, timed practice and optional extension will follow the authoring blueprint and be reviewed before general release.

## Progress

Students mark their own answers against worked solutions. Status (Independent / Prompt needed / Still stuck), scores, error type and reflections are stored in **local browser storage only**. The site does not presently support logins, cross-device sync or teacher analytics.

## Structure

- `src/data/programmes.js`: programme and week metadata.
- `src/data/week01.js`: published pilot questions for Week 1.
- `src/config.js`: release settings, timezone and storage key.
- `src/app.js`: calendar, questions, solutions, progress and study guide.
- `styles.css`: design system.
- `docs/QUESTION_BLUEPRINT.md`: the authoritative full question authoring plan.

Mathematics is rendered by MathJax over a CDN. The site does not require npm or a backend.

## Next passes

1. Complete and review every Week 1 question against the blueprint.
2. Refine the mathematics working and marking interaction, including mobile accessibility.
3. Author and publish Weeks 2–10 incrementally.
4. Build the February–June full A Level stage using the same underlying architecture.
