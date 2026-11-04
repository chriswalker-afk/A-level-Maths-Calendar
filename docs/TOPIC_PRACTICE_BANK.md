# Fresh AO1 / AO2 / AO3 practice by specification topic

## Purpose and status

**Pass A: framework only. No original question is published yet.**
Each of the 19 official Edexcel 9MA0 topic pages shows three independent
question slots: AO1 technique, AO2 reasoning, and AO3 problem solving/modelling.
These are intended as a **fresh second attempt** when a student has found
weekly practice difficult. They are **not copies, revisions or reordered
versions of the weekly questions**.

The bank is entirely separate from the ten-week programme: its marks and
attempts do not change weekly target hours, weekly completion totals, the Week
10 mock or existing specification accuracy denominators. When a question is
published, its working, maths editor, drawing, hints, worked solutions,
self-marking, and retry history reuse the existing components and browser-local
saved record format. Its own progress is displayed on the three AO cards.

## Content structure and publishing

- Each topic has its own module: \`src/data/topic-practice/p01.js\` through
  \`p10.js\`, \`s01.js\` through \`s05.js\`, and \`m06.js\` through \`m09.js\`.
  These currently export empty arrays. **Pass B** edits a topic module at
  a time; independent topic authoring need not touch weekly questions.
- \`index.js\` registers all 19 modules, provides three slots per topic,
  and resolves published URLs of the form
  \`#/topic-practice/internal/P02/AO2\` or \`#/topic-practice/full/M09/AO3\`.
- \`schema.js\` strictly validates published entries, stable IDs, syllabus
  scope, exam-style question parts, AO mark totals, and specification tags.
  An incomplete entry fails validation instead of silently loading.
- The stable question key is \`TP-P02-AO2\` (topic and dominant AO). Do not
  reuse weekly \`Wxx-\` IDs or change published keys: local attempts are
  stored against these IDs.
- Do **not** commit unpublished drafts to this public website's
  JavaScript modules, even with a false flag: the JS is downloadable.
  Review the question and mark scheme before adding it with
  \`published: true\`. An empty module is the safe holding state.

## Example authoring shape (documentation only; NOT a published question)

\`\`\`js
export default [
  {
    id:"TP-P02-AO1",
    published:true,
    topicId:"P02",
    aoFocus:"AO1", // AO1 / AO2 / AO3 is the largest mark allocation
    scope:"internal", // "full" for questions requiring Year 2 Applied
    title:"Original question title",
    marks:5,
    minutes:7,
    ao:{AO1:4,AO2:1,AO3:0},
    stem:"Original exam-style situation, using \\( ... \\) for maths",
    parts:[
      ["Original question part (a)",2,{primarySkillId:"P02-001"}],
      ["Original question part (b)",3,{
        primarySkillId:"P02-003",
        secondarySkillIds:["P02-001"]
      }]
    ],
    hint:"A short first-step nudge; no complete answer",
    steps:["Worked marking for part (a) [2]","Worked marking for part (b) [3]"],
    answer:"Exact final result",
    misconception:"One realistic mistake",
    reflection:"An insightful follow-up question"
  }
];
\`\`\`

The illustrative content strings above **must be replaced with mathematically
correct original questions and fully worked marking** before publication.

## Syllabus and marking rules

- AO focus is the **dominant AO**, not a claim that a whole question
  assesses only AO1, AO2 or AO3. AO mark counts add to question marks.
- Every part has exactly one primary permanent specification skill ID
  and optional distinct connected skills. At least one tagged skill
  belongs to the topic named on the question card. Never renumber
  specification skill IDs.
- Internal practice can only link to internal syllabus skills. Questions
  using Year 2-only material must set \`scope:"full"\`; internal students
  must not be able to access the question through a deep link.
- The Moments topic is Year 2-only. The internal specification view
  directs students to the Full A Level view, rather than promising
  them an internal-exam exercise.
- All questions must be genuinely fresh: not a weekly question with
  different constants, a cosmetic change, or an uncredited reproduction
  of an external examination paper.
- Before publishing, verify the question is valid, has the stated
  number of marks, has a complete solution *for every part*, has
  suitable mathematical notation, and is difficult for the declared AO.
- No solution or hint is displayed before the learner requests it.
  Local progress and retry history are preserved by the existing app.

## Next steps

**Pass B:** author and check the 57 new original questions, ideally in
small batches (e.g. Pure P01-P05, then P06-P10, then Statistics and Mechanics)
with systematic mathematical review. No weekly content should be modified.
Questions become available independently once their topic module is completed.

**Pass C:** add robust topic practice analytics (separate from weekly
benchmarks), check keyboard/mobile presentation with real long
questions, review the AO balance and multi-skill demand, and extend
progress reporting if desired without double-counting weekly marks.

Tests: \`npm run check\`, \`npm run audit:release\`, plus
\`tests/topic-practice-data.test.mjs\` and
\`tests/topic-practice-ui.test.mjs\`.
