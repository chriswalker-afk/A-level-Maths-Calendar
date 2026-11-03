# The Study Calendar — visual identity and student journey

## Design direction

This is a **working maths planner**, not a marketing website. Make the weekly calendar the first, largest, most recognisable element. The visual identity draws from printed term planners, graph paper, exam papers and handwritten annotations.

**Graphic decisions:** large, heavy week numbers; ten cells in two ruled blocks of five weeks; dark ink frames and strong rules; warm paper; a small number of confident accents (coral for numbering and emphasis, chartreuse for an open/selected state, cobalt for navigation). Avoid gratuitous rounded cards, airy marketing heroes and unsupported "learning journey" slogans.

**Type:** Space Grotesk for display and question titles; IBM Plex Mono for week indices, labels, marks and navigation; DM Sans for reading longer instructions and mathematical explanations. Mathematical typesetting remains MathJax/MathLive; never replace real notation with a decorative font or Unicode approximation.

The CSS tokens are collected at the bottom of \`styles.css\` under **Identity system 01**, so future components can follow the same grammar.

## Canonical student flow

1. **Arrival — \`#/\` and \`#/calendar\`:** both show the same calendar-first view. No separate Overview page. The top masthead is deliberately short; the ten-week grid appears immediately underneath.
2. **Choose week:** an *open* week card links straight into a question. The route targets the currently unfinished in-progress reattempt if one exists; otherwise the first unmarked essential question, then the first unmarked optional question, then the first question. **The student never has to visit an intermediate week overview.**
3. **Not yet released:** an unavailable week is a visible **non-interactive calendar cell** with its topic title. It must not be misrepresented as available or routed to a blank question. Old bookmarked unreleased \`#/week/N\` pages show a clearly labelled locked explanation.
4. **Within the question workspace:** the top section strip remains available across the six types (Retrieval, Connected problems, Modelling & reasoning, Year 1 Applied, Timed set, Extension). The left question index shows title, ID, recorded mark state and active question. On small screens, the index becomes a horizontally scrollable strip.
5. **Next/Previous:** stepping beyond the end of a subsection takes the student into the *next section* directly, without going through a weekly screen. At the first/last question of the whole week, navigation is disabled in the correct direction.
6. **Maths working and marking:** the existing Notes / Maths steps / Draw, hints, worked solutions, two-step completion, detailed part marking, reattempt history, and browser-local saving remain intact. Changing question navigates only after the saved working-space callbacks have fired, as before.
7. **Progress and specification:** secondary, clearly labelled shortcuts are positioned *below* the calendar. These support revisiting skills and tracking evidence rather than competing with the calendar for primary real estate.
8. **Future programme:** show an honest compact note about February–June 2027 after the study tools; do not create a large "buy-in" promotional card above the calendar.
9. **Legacy routes:** previously shared \`#/week/N\` links for a published week redirect to a real question. The brand link \`#/\` and nav link \`#/calendar\` lead to the same surface.

## Release and accessibility rules

- Never invent month names, dates or weekdays for Stage 1, whose exact release start is not configured. The planner is a clearly labelled *week* calendar, not a false dated diary.
- The first open week is genuinely interactive; future weeks are plain descriptive blocks, not fake disabled buttons.
- All open cells and section choices use **native links with explicit destinations**. Question numbers use buttons with stable \`data-jump\` selectors.
- Keep visible focus states and at least comfortable touch targets. Horizontal scrolling on narrow screens is signalled by the visible neighbouring sections/questions.
- Distinguish *not started*, *in progress* and *finished* with text/icons as well as colour.
- Respect \`prefers-reduced-motion\`; use no indispensable animations.
- Older progress records, score history and maths input remain untouched by the redesign.


## Final visual polish layer — all student surfaces

The final polish is maintained in `styles/identity-polish.css`, linked **after**
`styles.css` in `index.html`. Existing component CSS remains intact as a
functional baseline. **Use the new design variables and patterns for all new
components**; do not add more one-off mint-green gradients or unrelated rounded
card treatments to the legacy file.

### Palette and type

| Token | Use |
|---|---|
| `--editorial-ink` | Dark headings, strong rules, primary actions and selected states |
| `--editorial-paper` | Question paper, writing surfaces and content cards |
| `--editorial-cream` | Warm graph-paper page background |
| `--editorial-coral` | Emphasis on dark ink, filled accents and decorative rules |
| `--editorial-coral-ink` | Accessible coral text when printed *on* paper |
| `--editorial-lime` | Clearly selected tabs, active pens, completion indicators |
| `--editorial-cobalt` | Navigation, focus, mathematical input and progress bars |
| `--editorial-rule` | Secondary borders and graph-paper details |
| `--editorial-font-display` | Display headings and question titles |
| `--editorial-font-index` | Question IDs, marks, labels, controls, statistics |

Prefer **sharp 2–4px corners**, strong top or side rules, and clearly selected
controls. Warm white space is useful for calculations; do not flood every
surface with accent colours. Preserve the original MathJax and MathLive
rendering rather than attempting to style equations as text.

### Covered components

- Calendar/home, navigation, global buttons, headings, tags, cards, guide and examination dates.
- Exam questions, hints, fully worked solutions, data tables and specification links.
- Working space: notes, line-by-line maths input, the MathLive virtual keyboard colour, line controls, explanations, symbol toolbar and drawing canvas.
- Drawing: graphite/cobalt/coral active pen swatches, pen widths, eraser, grid, undo/redo, export and saved ink.
- Self-marking: independently/with-help selections, completion status, numeric marks, detailed part marks, errors and save status.
- Reattempt history, saved maths/drawing previews and improvement comparison.
- Specification: syllabus switch, Pure/Statistics/Mechanics accent, search/filter, expandable skills, future-year states and practice links.
- Progress: summary counters, topic cards, skill evidence and coverage bars.
- Revision suggestions, backup download/upload, import conflict choices and warnings.
- Mobile and print states, visible keyboard focus, reduced-motion settings and readable status contrast.

**Compatibility:** old strokes retain their original hex colours when painted
from saved records. Only the *currently selected pen colour* is remapped to
graphite/cobalt/coral on load. Storage format, history, notes, scoring and
question IDs remain unchanged.

### Prevention of style drift

Before merging future additions, check that they use the palette variables,
index font, input and selection states, and spacing established here.
Run `npm run check`; `tests/design-system.test.mjs` checks CSS parsing,
stylesheet load order, component coverage and old-drawing compatibility.
Use `#/`, Week 1 practice, My Specification and My Progress as the visual
review route, including 390px mobile.

## Implementation

- \`src/calendar-view.js\`: pure calendar, week-resume routing, subsection strip and question-index markup.
- \`src/app.js\`: direct question-route integration, shared Home/Calendar view, legacy redirect and continuous next/previous.
- \`index.html\`: simplified navigation, concise branding and display type.
- \`styles.css\`: editorial graph-paper colours and ruled, high-contrast layouts for home, questions and support pages.
- \`tests/calendar-flow.test.mjs\` and \`tests/calendar-route-ui.test.mjs\`: content/route/accessibility smoke tests on top of the existing mathematical validation and student-state tests.

## Reviewing the PR

1. Open \`#/\`. The calendar should be above all feature shortcuts, with ten numbered cells and *only published weeks clickable*.
2. Click the available Week 1 cell and verify the question opens directly. Mark one retrieval question; return to the calendar and confirm the next open question is selected.
3. Inside Week 1, navigate directly to **Connected problems** and back to **Retrieval** without an overview step.
4. On retrieval question 10, use Next. It should open Connected problems question 1. Previous returns to retrieval question 10.
5. Check the 390px mobile layout: accessible section scrolling, compact question index, readable question maths and no page-width overflow.
6. Revisit existing Notes, Maths steps, Draw, worked solution, self-marking, reattempt history, specification progress and backup controls. The redesign must not change their saved data.
