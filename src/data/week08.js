import {week08Expansion} from "./week08-expansion.js";
import {pacedExpandedWeek} from "./expanded-week-budget.js";
import {week08Retrieval} from "./week08-retrieval.js";
import {week08PureProblems} from "./week08-pure.js";
import {week08Modelling} from "./week08-modelling.js";
import {week08Applied} from "./week08-applied.js";
import {week08Timed} from "./week08-timed.js";
import {week08Extension} from "./week08-extension.js";

/** Stable original IDs and subsection offsets; expanded sections append new questions. */
export const week08Questions=pacedExpandedWeek([
 ...week08Retrieval,
 ...week08PureProblems,...week08Expansion.P,
 ...week08Modelling,...week08Expansion.M,
 ...week08Applied,...week08Expansion.A,
 ...week08Timed,...week08Expansion.T,
 ...week08Extension,...week08Expansion.X
]);
