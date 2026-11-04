import {week04Expansion} from "./week04-expansion.js";
import {pacedExpandedWeek} from "./expanded-week-budget.js";
import {week04Retrieval} from "./week04-retrieval.js";
import {week04PureProblems} from "./week04-pure.js";
import {week04Modelling} from "./week04-modelling.js";
import {week04Applied} from "./week04-applied.js";
import {week04Timed} from "./week04-timed.js";
import {week04Extension} from "./week04-extension.js";

/** Original, complete Week 4, in the six in-question navigation sections. */
export const week04Questions=pacedExpandedWeek([
 ...week04Retrieval,
 ...week04PureProblems,...week04Expansion.P,
 ...week04Modelling,...week04Expansion.M,
 ...week04Applied,...week04Expansion.A,
 ...week04Timed,...week04Expansion.T,
 ...week04Extension,...week04Expansion.X
]);
