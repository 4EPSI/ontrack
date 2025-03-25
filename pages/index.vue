<template>
  <TheHeader />

  <main class="flex flex-grow flex-col">
    <TheTimeline 
      v-show="currentPage === PAGE_TIMELINE" 
      :timelineItems="timelineItems" 
      ref="timelineRef"
    />

    <TheActivities 
      v-show="currentPage === PAGE_ACTIVITIES" 
      :activities="activities" 
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav />
</template>

<script setup>
import { provide, readonly } from 'vue';
import TheTimeline from './TheTimeline.vue';
import TheActivities from './TheActivities.vue';
import TheProgress from './TheProgress.vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constants'
import { generateTimelineItems, generateActivityOptions, generateActivities, generatePeriodSelectOptions } from '../functions'
import { currentPage, timelineRef } from '~/router';
import * as keys from '~/keys'


const activities = useState('activities', () => generateActivities() || []);
const timelineItems = useState('timelineItems', () => generateTimelineItems(activities.value));
const activitySelectOptions = useState('activitySelectOptions', () => generateActivityOptions(activities.value));

const createActivity = (activity) => {
  activities.value.push(activity)
}

const deleteActivity = (activity) => {
  timelineItems.value.forEach(timelineItem => {
    if(timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

const setTimelineItemActivity = (timelineItem, activityId) => {
  timelineItem.activityId = activityId
}

const updateTimelineItemActivitySeconds = (timelineItem, activitySeconds) => {
  timelineItem.activitySeconds += activitySeconds
}

const setActivitySecondsToComplete = (activity, secondsToComplete) => {
  activity.secondsToComplete = secondsToComplete || 0
}

provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, deleteActivity)
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions.value))
provide(keys.timelineItemsKey, readonly(timelineItems.value))
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)

</script>