import { useActivities } from "./activities";
import { HOURS_IN_DAY } from "./constants";

// export const timelineItems = useState('timelineItems', () => generateTimelineItems(activities.value));
export const useTimelineItems = () => {
  const activities = useActivities();
  return useState('timelineItems', () => generateTimelineItems(activities));
}

export const setTimelineItemActivity = (timelineItem, activityId) => {
  timelineItem.activityId = activityId
}

export const updateTimelineItemActivitySeconds = (timelineItem, activitySeconds) => {
  timelineItem.activitySeconds += activitySeconds
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