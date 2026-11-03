/**
 * Single publication gate for the calendar, question routes, analytics and
 * specification practice links. Questions count as published ONLY if:
 *   - content has actually been authored and marked publishable; AND
 *   - the manual or scheduled release gate is open.
 *
 * startDate represents the teacher's local date in Brunei (UTC+08:00).
 * Using an offset-aware timestamp makes scheduled releases independent of
 * whichever timezone a student browser happens to be using.
 */
import {siteConfig} from "./config.js";
import {programmeOne} from "./data/programmes.js";

export function isWeekReleased(week,questions,{
 stage=siteConfig.stage1,weeks=programmeOne.weeks,now=Date.now()
}={}){
 if(!Number.isInteger(week)||week<1)return false;
 const meta=weeks[week-1];
 if(!meta?.hasPublishedContent||!Array.isArray(questions)||!questions.length)return false;
 if(stage?.releaseMode==="manual")
  return Number.isInteger(stage.releasedWeeks)&&week<=stage.releasedWeeks;
 if(stage?.releaseMode==="scheduled"&&stage.startDate){
  const start=Date.parse(stage.startDate+"T00:00:00+08:00");
  return Number.isFinite(start)&&Number.isFinite(now)&&now>=start+(week-1)*7*86400000;
 }
 return false;
}
