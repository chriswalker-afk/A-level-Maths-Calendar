import {week07Expansion} from "./week07-expansion.js";
import {pacedExpandedWeek} from "./expanded-week-budget.js";
import {week07Retrieval} from "./week07-retrieval.js";
import {week07PureProblems} from "./week07-pure.js";
import {week07Modelling} from "./week07-modelling.js";
import {week07Applied} from "./week07-applied.js";
import {week07Timed} from "./week07-timed.js";
import {week07Extension} from "./week07-extension.js";

/** Stable original IDs and subsection offsets; expanded sections append new questions. */
export const week07Questions=pacedExpandedWeek([
 ...week07Retrieval,
 ...week07PureProblems,...week07Expansion.P,
 ...week07Modelling,...week07Expansion.M,
 ...week07Applied,...week07Expansion.A,
 ...week07Timed,...week07Expansion.T,
 ...week07Extension,...week07Expansion.X
]);
