// Comprehensive content/UI regressions run at a simulated post-Week-10 date.
// Boundary-specific tests control the publication clock themselves.
import {publicationClock} from "../../src/publication.js";
publicationClock.now=()=>Date.parse("2027-01-12T12:00:00+08:00");
