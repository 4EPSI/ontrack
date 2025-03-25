import { generateTimelineItems } from "./functions";
import { useActivities } from "./activities";

// export const timelineItems = useState('timelineItems', () => generateTimelineItems(activities.value));
export const useTimelineItems = () => {
  const activities = useActivities();
  return useState('timelineItems', () => generateTimelineItems(activities.value));
}

export const setTimelineItemActivity = (timelineItem, activityId) => {
  timelineItem.activityId = activityId
}

export const updateTimelineItemActivitySeconds = (timelineItem, activitySeconds) => {
  timelineItem.activitySeconds += activitySeconds
}