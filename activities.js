import { id } from "./functions";
import { SECONDS_IN_HOUR } from "./constants";
import { updateTimelineItem } from "./timelineItems";

export const useActivities = () => useState('activities', () => generateActivities() || []);
export const useActivitySelectOptions = () => computed(() => generateActivityOptions(useActivities().value));

export const trackedActivities = computed(() => {
  const activities = useActivities();
  // activities.value.filter(({ secondsToComplete }) => secondsToComplete > 0)
  return activities.value.filter(({ secondsToComplete }) => secondsToComplete > 0);
})

export const createActivity = (activity) => {
  const activities = useActivities();
  activities.value.push(activity)
}

export const updateActivity = (activity, fields) => {
  return Object.assign(activity, fields)
}

export const deleteActivity = (activity) => {
  const activities = useActivities();
  const timelineItems = useState('timelineItems')

  activities.value.splice(activities.value.indexOf(activity), 1)
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
