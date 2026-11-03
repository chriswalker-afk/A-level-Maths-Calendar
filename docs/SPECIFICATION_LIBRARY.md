# Student-friendly 9MA0 specification and question-skill evidence

**Status:** Pass 4A specification library, Pass 4B question-part tagging and Pass 4C self-marked specification progress are implemented. Pass 4D adds revision recommendations, reattempt history and portability.

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

The published question data remains unchanged in `src/data/week01.js`. The curriculum mapping is separate and reviewable in `src/data/week01-skill-map.js`; `src/data/tagged-questions.js` attaches the verified metadata on loading.

A tagged part looks like this conceptually:

```js
["Part (c) question text", 5, {
  key: "c",
  primarySkillId: "P02-021",
  secondarySkillIds: ["P02-011", "P02-020"]
}]
```

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

```js
{
  score: 6, // finished, exactly the same overall score used before Pass 4B
  scoreSource: "parts", // "overall" for a one-number score; absent in legacy records
  partMarks: {a: 2, b: 0, c: 4}
}
```

`src/part-marking.js` exposes `verifiedPartEvidence(question, record)` for the next analytics pass. It returns per-part earned/available marks with **one primary specification skill** when every part has a valid mark and the total matches. The exact exception is a **single-part question**: its overall mark belongs entirely to its sole primary skill, including older total-only records. It returns no precise skill marks for **multi-part** overall-only scores or unfinished/inconsistent detailed breakdowns.

### Implementation and tests

- `src/data/week01-skill-map.js`: reviewed curriculum map for every Week 1 question part.
- `src/data/tagged-questions.js`: strict tagging validation and stable part keys.
- `src/data/skill-practice-index.js`: published-question references for specification skill pages; connected skills are links, not marks.
- `src/part-marking.js`: pure part-score and evidence functions, including legacy compatibility.
- `src/question-assessment.js`: optional detailed-marking UI with automatic totals.
- `tests/question-skill-tags.test.mjs`, `tests/part-marking.test.mjs`, `tests/detailed-marking-ui.test.mjs`: validation of all mappings and scores.

## Pass 4C — personal specification progress

The website now calculates browser-local progress from the **actually released** and fully tagged questions. No student records or analytics are sent to a server. The student can see:

- **My Progress**: a syllabus switch (Internal exam vs Full A Level), Pure/Statistics/Mechanics filters, a summary strip and 19 official topic groups (18 active for the internal exam; Moments is Year 2-only).
- **My Specification overview**: compact progress for every topic, including questions attempted, encountered skills, and accuracy **only where direct mark evidence exists**.
- **Topic detail**: distinct completed questions linked to the topic, number of skills encountered, independent and with-help questions, marks earned/available, and a limited/growing-evidence note.
- **Individual skill details**: questions attempted involving the skill (direct or connected), direct attempts, independently completed questions and any accurately assigned primary-skill mark evidence.

### Definitions and denominator rules

1. **Question attempted / finished:** A valid recorded overall score from 0 up to the question's maximum, regardless of whether the student chose Independently or With help.
2. **Question attempted by a topic:** A distinct completed question whose tagged parts use that topic as either a primary or connected skill. Synoptic questions may count once in several topics. **Never add topic attempt counts to infer a global count.**
3. **Skill encountered:** At least one completed question tags that skill as primary or secondary. Exposure does **not** equal mastery.
4. **Skills encountered by a topic:** Distinct in-scope skills encountered divided by all in-scope specification skills in the topic. Unreleased skills are included in this syllabus denominator but do not imply a student weakness.
5. **Accuracy by skill / topic:** The sum of **earned marks / available marks** for parts whose primary skill matches. Secondary tags never receive mark credit. A part's marks contribute to only one skill and its topic. A completed detailed mark breakdown is valid. **For a one-part question, its whole score is exactly equivalent to the part score** and also counts, including legacy records.
6. **No evidence:** If no assignable mark evidence exists, accuracy is **null**, rendered as *No part accuracy yet* rather than false 0%. A genuinely recorded 0 out of a positive number of available marks is correctly rendered as **0%**.
7. **Independence:** Only recorded I/P status for **finished** questions counts as independent / with help. Where the student chose neither, it is *unrecorded*, not automatically with help.
8. **Evidence volume:** The user can see how many parts, available marks and fully scored questions support a percentage. Fewer than three questions or fewer than 12 available marks is shown as *early evidence*; this is not a claim of reliability or exam-grade prediction.
9. **Publication:** Only a passed-in set of released questions can supply progress. Future Year 2 Applied skills are browsable under Full A Level but have **no fabricated attempts or marks**.

### Calculation examples

- A three-part question marked **2/2, 1/3, 0/5** produces **3/10** total and three primary-skill mark contributions. Any linked secondary skills receive practice exposure only.
- A saved **7/10** from a three-part question (with no breakdown) counts as **one finished question** and its connected skills are encountered, but **cannot** be assigned to individual skill accuracy.
- A saved **0/2** from a one-part AO1 discriminant question counts as **one finished question and 0% accuracy evidence for that single primary skill**, because the assignment is unambiguous.
- A topic with no released questions displays **No published practice yet**. A topic with released but unmarked questions displays **Not started**. A topic with attempts but no attributable marks displays **No part accuracy yet**.

### Implementation and QA

- `src/specification-analytics.js`: deterministic, side-effect-free progress aggregation with deduplicated question sets and checked primary-mark accounting.
- `src/specification-progress-view.js`: accessible topic dashboard, progress meters, syllabus filtering and skill/topic evidence presentations.
- `src/specification-view.js` and `src/app.js`: render the analytics from saved browser records and the current released-question set; no new storage key or data migration.
- `tests/specification-analytics.test.mjs`: empty data, real zero, multi-part and one-part marks, cross-topic counting, independence, legacy data, scope and evidence.
- `tests/specification-progress-ui.test.mjs`, `tests/specification-progress-route.test.mjs`: visible states and live routing without modifying saved marks/work.

## Next

**4D — Targeted revision and data portability.** Use the evidence to suggest suitable **published** problems, add reattempt history without overwriting earlier attempts, and implement export/import of saved work and scores for device transfers. Avoid a mastery verdict based on a single question and ensure recommendations can distinguish little evidence from genuinely low accuracy.

**Content scale-out.** Author and release Weeks 2–10 against the stable primary-skill IDs, preserving the original AO1/AO2/AO3 blueprint and adding regression tests for every newly published set.

Teacher monitoring, logins, cloud sync, and cross-device accounts remain separate projects; nothing in Pass 4C exposes individual student data to teachers or other users.
