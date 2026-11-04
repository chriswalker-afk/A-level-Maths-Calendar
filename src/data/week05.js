import {week05Expansion} from "./week05-expansion.js";
import {pacedExpandedWeek} from "./expanded-week-budget.js";
import {week05Retrieval} from "./week05-retrieval.js";
import {week05PureProblems} from "./week05-pure.js";
import {week05Modelling} from "./week05-modelling.js";
import {week05Applied} from "./week05-applied.js";
import {week05Timed} from "./week05-timed.js";
import {week05Extension} from "./week05-extension.js";

/** All 22 authored Week 5 questions, retaining direct subsection navigation. */
export const week05Questions=pacedExpandedWeek([
 ...week05Retrieval,
 ...week05PureProblems,...week05Expansion.P,
 ...week05Modelling,...week05Expansion.M,
 ...week05Applied,...week05Expansion.A,
 ...week05Timed,...week05Expansion.T,
 ...week05Extension,...week05Expansion.X
]);
