import {week09Expansion} from "./week09-expansion.js";
import {pacedExpandedWeek} from "./expanded-week-budget.js";
import {week09Retrieval} from "./week09-retrieval.js";
import {week09PureProblems} from "./week09-pure.js";
import {week09Modelling} from "./week09-modelling.js";
import {week09Applied} from "./week09-applied.js";
import {week09Timed} from "./week09-timed.js";
import {week09Extension} from "./week09-extension.js";

/** Stable original IDs and subsection offsets; expanded sections append new questions. */
export const week09Questions=pacedExpandedWeek([
 ...week09Retrieval,
 ...week09PureProblems,...week09Expansion.P,
 ...week09Modelling,...week09Expansion.M,
 ...week09Applied,...week09Expansion.A,
 ...week09Timed,...week09Expansion.T,
 ...week09Extension,...week09Expansion.X
]);
