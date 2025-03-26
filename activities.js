import { id } from "./functions";
import { SECONDS_IN_HOUR } from "./constants";
import { updateTimelineItem } from "./timelineItems";

export const useActivities = () => useState('activities', () => generateActivities() || []);
export const useActivitySelectOptions = () => computed(() => generateActivityOptions(useActivities().value));

export const createActivity = (activity) => {
  const activities = useActivities();
  activities.value.push(activity)
}

export const deleteActivity = (activity) => {
  const activities = useActivities();
  const timelineItems = useState('timelineItems')

  timelineItems.value
    .filter(timelineItem => timelineItem.activityId === activity.id)
    .forEach(timelineItem => updateTimelineItem(timelineItem,  {
      activityId: null,
      activitySeconds: 0
  }))
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export const setActivitySecondsToComplete = (activity, secondsToComplete) => {
  activity.secondsToComplete = secondsToComplete || 0
}

const generateActivities = () => {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
      id: id(),
      name,
      secondsToComplete: hours * SECONDS_IN_HOUR
  }))
}

const generateActivityOptions = (activities) => {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }))
}
