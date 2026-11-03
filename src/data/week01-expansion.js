import {week01ExpansionPure} from "./week01-expansion-pure.js";
import {week01ExpansionModelling} from "./week01-expansion-modelling.js";
import {week01ExpansionApplied} from "./week01-expansion-applied.js";
import {week01ExpansionTimed} from "./week01-expansion-timed.js";
import {week01ExpansionExtension} from "./week01-expansion-extension.js";

/** Additive question sets. Every original W01 ID and part remains unchanged. */
export const week01Expansion={
 P:week01ExpansionPure,M:week01ExpansionModelling,A:week01ExpansionApplied,
 T:week01ExpansionTimed,X:week01ExpansionExtension
};
