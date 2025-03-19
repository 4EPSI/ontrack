import { PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR, SECONDS_IN_HOUR } from '../constants'
import { isPageValid, isNull } from './validators';

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

export const normalSelectValue = (value) => {
  return isNull(value) || isNaN(value) ? value : +value
}


// ['Coding', 'Reading', 'Training']

export const generateActivities = () => {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
      id: id(),
      name,
      secondsToComplete: hours * SECONDS_IN_HOUR
  }))
}

export const id = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

// TIMELINE

export const generateTimelineItems = () => {
  const timelineItems = []
  for(let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: null
    })
  }
  return timelineItems
}

// ACTIVITIES
export const generateActivityOptions = (activities) => {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }))
}