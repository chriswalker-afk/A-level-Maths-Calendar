# Pass 4A — Student-friendly 9MA0 specification library

**Status:** Catalogue and interactive reader authored; question-to-skill evidence is deliberately not implemented until Pass 4B.

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

## Deliberately not present in 4A

- Topic or skill percentage accuracy and attempt counters.
- Automatic mastery claims based on unaudited whole-question marks.
- A teacher dashboard or student log-in.
- Links from every skill to questions that have not yet been tagged.
- Publishing future-week questions.

Displaying zeros for unattempted skills would be misleading; until tagged data exists, the interface explicitly explains the future evidence system.

## Next steps

**4B — Detailed question tagging.** Introduce `part.skills.primary` (one stable skill ID per marked part), optional secondary skill IDs, reliable part-mark data and backward compatibility with existing overall scores. Make existing Week 1 content the test bed and validate all IDs.

**4C — Evidence dashboard.** Calculate distinct questions attempted, valid marks earned/available per primary skill, scope-specific topic coverage and independence. Use 'no evidence' when there are no marked attempts, and avoid treating unscored questions as 0%.

**4D — Targeted revision.** Recommend released questions for under-practised or low-accuracy skills, preserve repeat attempts, and support controlled progress export/import.
