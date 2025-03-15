import { PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR } from '../constants'
import { isPageValid } from './validators';

export const normalizePageHash = () => {
  const page = window.location.hash.slice(1);
  if(isPageValid[page]) {
    return page
  }
  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
  // if(process.client) {

  //   if(isPageValid[page]) {
  //     return page
  //   }

  //   // window.location.hash = PAGE_TIMELINE
  //   // return PAGE_TIMELINE
  // }
  // return PAGE_TIMELINE
}

// TIMELINE

export const generateTimelineItems = () => {
  const timelineItems = []
  for(let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}

// ACTIVITIES
export const generateActivityOptions = (activities) => {
  return activities.map((label, value) => ({ label, value}))
}