import {week03Retrieval} from "./week03-retrieval.js";
import {week03PureProblems} from "./week03-pure.js";
import {week03Modelling} from "./week03-modelling.js";
import {week03Applied} from "./week03-applied.js";
import {week03Timed} from "./week03-timed.js";
import {week03Extension} from "./week03-extension.js";
import {week03Expansion} from "./week03-expansion.js";
import {pacedExpandedWeek} from "./expanded-week-budget.js";

/** All 22 authored Week 3 items, in in-page section order. */
export const week03Questions = pacedExpandedWeek([
 ...week03Retrieval,...week03PureProblems,...week03Expansion.P,
 ...week03Modelling,...week03Expansion.M,
 ...week03Applied,...week03Expansion.A,
 ...week03Timed,...week03Expansion.T,
 ...week03Extension,...week03Expansion.X
]);
