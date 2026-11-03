# Student-friendly 9MA0 specification and question-skill evidence

**Status:** Pass 4A specification library and Pass 4B question-part tagging are implemented. The personalised percentage dashboard follows in Pass 4C.

## Curriculum authority

The material is our own student-friendly interpretation of the Pearson Edexcel A Level Mathematics **9MA0** specification, Issue 4. The official specification is the source of truth: [Pearson 9MA0 specification](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf). Students should use the original document for any examination-content dispute.

The subject groupings are **10 Pure**, **5 Statistics** and **4 Mechanics** topics. Mathematical argument/proof, problem-solving and modelling are shown in their own cross-topic section (OT1, OT2, OT3).

The language is intentionally accessible and not a reproduction of Pearson's prose. Individual skills are *examples of examinable demands*, not a definitive list of every possible question wording.

## User-facing location

- Main menu: **My specification** (`#/specification/internal`).
- Toggle the scope between **Internal exams** (all Pure + Year 1 Applied) and **Full A Level** (all Pure + Year 1/2 Applied).
- Search topic titles, student-friendly skills, exam demands and specification references. Filter by Pure / Statistics / Mechanics.
- Open a topic to explore individual skill cards, with Pearson reference codes and examples of what an exam might ask.
- Year 2 Applied skills stay discoverable as **future content** in the internal programme, never implied to be examinable in the upcoming internal assessment.
- Click to expand a skill. Deep links support `#/specification/full/P02/P02-001`.
- Clear links to Pearson's definitive specification; study and progress data are not altered by browsing.

## Canonical data files

| File | Purpose |
|---|---|
| `src/data/specification-core.js` | Reference URL; stable record structure; curriculum scope; cross-paper themes; search helpers |
| `src/data/specification-pure-a.js` | Pure topics P01–P05 |
| `src/data/specification-pure-b.js` | Pure topics P06–P10 |
| `src/data/specification-statistics.js` | Statistics topics S01–S05 |
| `src/data/specification-mechanics.js` | Mechanics topics M06–M09 |
| `src/data/specification.js` | Aggregation and public lookup helpers |
| `src/specification-view.js` | Searchable, responsive student interface |
| `tests/specification-data.test.mjs` | Reference, ID, coverage, scope and notation checks |
| `tests/specification-ui.test.mjs` | Filter, search, future content and deep-link tests |

## Important schema rules for Pass 4B

Each skill has these fields:

- `id`: permanent question-tagging key, e.g. `P02-004`, `S03-005`.
- `topicId`: the 19-topic grouping, e.g. `P02`, `S03` or `M07`.
- `reference`: original Pearson section code with a domain prefix (e.g. `P2.3`, `S5.1`, `M7.4`) to avoid collisions.
- `statement`: independent student-friendly 'I can...' capability.
- `examDemand`: an example of how an examiner could test the skill.
- `pitfall`: optional misconception or caution.
- `year`: 1 or 2 for Applied, null for Pure (all Pure is internal and final).
- `scope`: `internal` for all Pure and Year 1 Applied, `full` for Year 2-only Applied.

**Do not renumber existing skill IDs after question parts have been tagged.** When revising the catalogue in the future, append new permanent identifiers, retire obsolete keys through an explicit migration map, and audit any question links. An ID is a data key, not an ordinal to regenerate casually.

Do not count the same marks repeatedly for several secondary-topic tags. For accuracy calculations, allocate marks at the part level to a **primary skill**, with secondary skills recorded as *exposure/links*, not automatically credited again.

## Pass 4B — implemented question-to-skill tagging

Week 1 now has **22 fully tagged questions**, including 18 essential questions, three timed-set questions and one extension. Each mark-bearing part has **exactly one primary skill ID**, zero or more secondary connected-skill IDs, and the same marks it had in the original question.

The published question data remains unchanged in \`src/data/week01.js\`. The curriculum mapping is separate and reviewable in \`src/data/week01-skill-map.js\`; \`src/data/tagged-questions.js\` attaches the verified metadata on loading.

A tagged part looks like this conceptually:

\`\`\`js
["Part (c) question text", 5, {
  key: "c",
  primarySkillId: "P02-021",
  secondarySkillIds: ["P02-011", "P02-020"]
}]
\`\`\`

The **primary skill alone** can receive the part's marks. Secondary skill tags represent cross-topic connections and allow students to discover relevant practice, but **must never receive duplicate credit**. A single question's connected skill might be tagged by multiple parts; specification practice links deduplicate the question.

The specification's skill pages link to questions that are **actually released**, without leaking the unreleased Week 2–10 question sets. On a question, a collapsible list of skill links is offered after the working and solutions areas so students can keep practising method selection before inspecting tags.

### Part-by-part self-marking

Students can continue using the original one-number self-marking system. The newly added **Optional: mark each part separately** panel is available for multi-part questions and displays the specification skill for each part.

- A completed breakdown automatically calculates the total, including marks of **zero** for a part.
- **All parts must have valid whole-number marks** before the breakdown can generate precise skill accuracy evidence.
- A previously saved *overall* score remains valid when the student begins an incomplete breakdown; once all part scores are entered, the sum replaces the overall score.
- If the student deletes a part score from a derived total, the previously calculated overall mark becomes invalid and the question returns to *Not yet finished*.
- Clearing all marks removes only marks and breakdowns; it never removes their independence choice, written working, maths lines or drawing.
- Students with legacy scores do not need to re-mark every question to keep it marked as finished.

New saved fields:

\`\`\`js
{
  score: 6, // finished, exactly the same overall score used before Pass 4B
  scoreSource: "parts", // "overall" for a one-number score; absent in legacy records
  partMarks: {a: 2, b: 0, c: 4}
}
\`\`\`

\`src/part-marking.js\` exposes \`verifiedPartEvidence(question, record)\` for the next analytics pass. It returns per-part earned/available marks with **one primary specification skill** only when every part has a valid mark, the score was derived from the parts, and the total matches. It returns no precise skill marks for legacy whole-question scores or unfinished detailed breakdowns.

### Implementation and tests

- \`src/data/week01-skill-map.js\`: reviewed curriculum map for every Week 1 question part.
- \`src/data/tagged-questions.js\`: strict tagging validation and stable part keys.
- \`src/data/skill-practice-index.js\`: published-question references for specification skill pages; connected skills are links, not marks.
- \`src/part-marking.js\`: pure part-score and evidence functions, including legacy compatibility.
- \`src/question-assessment.js\`: optional detailed-marking UI with automatic totals.
- \`tests/question-skill-tags.test.mjs\`, \`tests/part-marking.test.mjs\`, \`tests/detailed-marking-ui.test.mjs\`: validation of all mappings and scores.

## Still planned

**4C — Evidence dashboard:** Calculate distinct questions attempted, validated primary-skill marks earned and available, and topic-level coverage and independence. Keep total-only question completion separate from **accurately measured marks by skill**; use *No evidence yet* when no valid part evidence exists. Consider whether a topic has enough evidence to give a meaningful interpretation and never duplicate marks across secondary tags.

**4D — Targeted revision and data portability:** Recommend *published* questions for under-practised or low-accuracy skills, preserve repeat attempts and support progress export/import across devices.

Teacher monitoring, logins and cross-device syncing remain separate projects, not automatic capabilities of local browser storage.
