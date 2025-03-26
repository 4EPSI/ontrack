import { useActivities } from "./activities";
import { HOURS_IN_DAY } from "./constants";

// export const timelineItems = useState('timelineItems', () => generateTimelineItems(activities.value));
export const useTimelineItems = () => {
  const activities = useActivities();
  return useState('timelineItems', () => generateTimelineItems(activities));
}

export const updateTimelineItem = (timelineItem, fields) => {
  return Object.assign(timelineItem, fields)
}

export const resetTimelineItemActivities = (activity) => {
  const timelineItems = useTimelineItems()
  timelineItems.value
    .filter(timelineItem => timelineItem.activityId === activity.id)
    .forEach(timelineItem => updateTimelineItem(timelineItem,  {
      activityId: null,
      activitySeconds: 0
  }))
}

export const getTotalActivitySeconds = (activity) => {
  return useTimelineItems().value
    .filter((timelineItem) => timelineItem.activityId === activity.id)
    .reduce((totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds), 0)
}

const generateTimelineItems = (activities) => {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: [0,1,2,3,4].includes(hour) ? activities.value[hour % 3].id : null,
    activitySeconds: [0,1,2,3,4].includes(hour) ?hour * 600 : 0
    // activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
    // activitySeconds: hour % 4 === 0 ? 0 :(15 * SECONDS_IN_MINUTE * hour) % SECONDS_IN_HOUR
  }))
}