# Student workspace — release quality checklist

This checklist covers the answering experience introduced in Passes A–D. It is about the **student's task flow**, not the number of questions or the course coverage.

## Core acceptance criteria

A student can read a question, write notes/maths/draw, check the worked solution, award marks (including 0), and go to the next question without repeated page-level scrolling. Long mathematical content may scroll **within** its panel. On wide screens the question stays visible throughout; on narrow screens students switch between Question, My working, and Check & mark.

Important invariants:

- No lost notes, LaTeX maths lines, or drawing strokes when changing views or browser width.
- No duplicate question route, scoring record, or progress key is introduced.
- Part-by-part marks remain optional; a valid overall score (including 0) finishes a question.
- A failed browser-storage write is announced, not silently treated as successful.
- When a Week 10 timed paper is active, the worked solution, marks and review pane are not mounted. They become available only after the sitting ends.
- Tabs expose their selection state, allow arrow/Home/End keyboard navigation and skip disabled controls. Visible controls meet a minimum 44px touch target on tablet/phone.
- External mathematics-keyboard failure degrades to editable LaTeX with an on-screen preview instead of losing mathematical input.

## Automated real-browser audit

GitHub Actions: **Student experience browser audit** (PR and main-branch runs).

- 1440 × 900 desktop
- 1366 × 768 laptop
- 820 × 1180 tablet
- 390 × 844 phone
- 360 × 640 small phone
- 844 × 390 landscape device

The workflow serves the actual static site in headless Chrome. It checks horizontal overflow, independent question/solution scrolling, navigation, saved notes, zero marks, long questions and solutions, optional detailed marking, keyboard-height resizing, maths-entry fallback, pointer drawing, quota warnings, and active/finished timed-mock restrictions. It attaches **pass-d-viewport-screenshots** with screen captures and `audit-results.json`.

Locally, with Chrome and Node 22:

```bash
npm install
npm run check
npm run audit:release
npm run audit:browser
```

Set `CHROME_BIN` when Chrome is not installed in one of the usual Linux paths. The browser test deliberately serves the site offline (with the bundled MathJax asset), so it also tests the maths-entry fallback when the external visual keyboard cannot load.

## Manual device checks after merge

Automated screenshots and Chromium assertions cannot reproduce every real device. Before a full student release, complete these manual checks on real devices where available.

| Scenario | Expected behaviour |
| --- | --- |
| iPhone Safari, portrait, keyboard open | Notes and maths input remain reachable; question tabs are usable above the keyboard |
| Android Chrome, portrait and landscape | Question, My working and Check & mark are reachable without horizontal page scrolling |
| Tablet and laptop at 100%–200% zoom | Controls reflow without overlapping diagrams, equations, the mark box or navigation |
| Apple Pencil/stylus or finger drawing | Pen, eraser, colour, Undo and Redo remain usable; strokes survive changing tabs |
| 8–12-step worked solution | Scheme scrolls within its region; marking stays accessible |
| Multi-part question | Each part can be assigned 0 or another valid score; total and completion update |
| Full/blocked browser storage | Clear error appears; previously recorded marks stay intact |
| Active Week 10 timed sitting | Neither mobile nor desktop reveals solution/mark controls until the timer is finished |
| Slow or offline third-party keyboard | LaTeX fallback remains editable, visible and saved |
| Reduced-motion and keyboard-only use | Tabs, hints, questions and marks work without mouse or animated transitions |

If a visual issue is found, link the screen width, browser, question code, and the specific tab in the issue/PR. Avoid changing the question bank or progress storage format as a styling workaround.

## Remaining product-level measurement

The audit checks whether the workflow is **possible and stable**, not whether all students find it quick. A small classroom pilot should compare the previous and updated flow by recording the number of page-level scrolls and time taken for Answer → Check → Mark on short, long, and multi-part questions. That is the most meaningful way to confirm the original friction has actually been reduced.
