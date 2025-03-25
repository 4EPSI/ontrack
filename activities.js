import { generateActivities, generateActivityOptions } from "./functions";

export const useActivities = () => useState('activities', () => generateActivities() || []);
export const useActivitySelectOptions = () => computed(() => generateActivityOptions(useActivities().value));

export const createActivity = (activity) => {
  const activities = useActivities();
  activities.value.push(activity)
}

export const deleteActivity = (activity) => {
  const activities = useActivities();
  const timelineItems = useState('timelineItems')

  timelineItems.value.forEach(timelineItem => {
    if(timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export const setActivitySecondsToComplete = (activity, secondsToComplete) => {
  activity.secondsToComplete = secondsToComplete || 0
}