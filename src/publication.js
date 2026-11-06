/**
 * Calendar publication gate. A week is released only when it has actual
 * questions AND the teacher-controlled manual/scheduled gate allows it.
 * Scheduled weeks unlock at midnight Brunei time, UTC+08:00.
 *
 * This is a navigation gate, not an embargo on public GitHub source files.
 */
import {siteConfig} from "./config.js";
import {programmeOne} from "./data/programmes.js";

// Injected only by tests so timed-paper clocks are not globally modified.
export const publicationClock={now:()=>Date.now()};

export function weekReleaseDate(week,{stage=siteConfig.stage1}={}){
 if(!Number.isInteger(week)||week<1||
    stage?.releaseMode!=="scheduled"||
    !/^\d{4}-\d{2}-\d{2}$/.test(stage.startDate||""))return null;
 const start=Date.parse(stage.startDate+"T00:00:00+08:00");
 return Number.isFinite(start)?new Date(start+(week-1)*7*86400000):null;
}

export function isWeekReleased(week,questions,{
 stage=siteConfig.stage1,weeks=programmeOne.weeks,now=publicationClock.now()
}={}){
 if(!Number.isInteger(week)||week<1)return false;
 const meta=weeks[week-1];
 if(!meta?.hasPublishedContent||!Array.isArray(questions)||!questions.length)return false;
 if(stage?.releaseMode==="manual")
  return Number.isInteger(stage.releasedWeeks)&&week<=stage.releasedWeeks;
 const opensAt=weekReleaseDate(week,{stage});
 return Boolean(opensAt)&&Number.isFinite(now)&&now>=opensAt.getTime();
}
