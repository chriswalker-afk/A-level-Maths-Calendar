import {week02Retrieval} from "./week02-retrieval.js";
import {week02PureProblems} from "./week02-pure.js";
import {week02Modelling} from "./week02-modelling.js";
import {week02Applied} from "./week02-applied.js";
import {week02Timed} from "./week02-timed.js";
import {week02Extension} from "./week02-extension.js";
import {week02Expansion} from "./week02-expansion.js";
import {pacedExpandedWeek} from "./expanded-week-budget.js";

/** Authored Week 2, ordered by the six in-question navigation sections. */
export const week02Questions=pacedExpandedWeek([
 ...week02Retrieval,...week02PureProblems,...week02Expansion.P,
 ...week02Modelling,...week02Expansion.M,
 ...week02Applied,...week02Expansion.A,
 ...week02Timed,...week02Expansion.T,
 ...week02Extension,...week02Expansion.X
]);
