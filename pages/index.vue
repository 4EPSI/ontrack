<template>
  <TheHeader 
    @navigate="goTo($event)"
  />

  <main class="flex flex-grow flex-col">
    <TheTimeline 
      v-show="currentPage === PAGE_TIMELINE" 
      :timelineItems="timelineItems" 
      :activities="activities"
      :activitySelectOptions="activitySelectOptions" 
      :currentPage="currentPage"
      ref="timeline"
      @setTimelineItemActivity="setTimelineItemActivity"
      @updateTimelineItemActivitySeconds="updateTimelineItemActivitySeconds"
    />

    <TheActivities 
      v-show="currentPage === PAGE_ACTIVITIES" 
      :activities="activities" 
      :timelineItems="timelineItems" 
      @deleteActivity="deleteActivity" 
      @createActivity="createActivity"
      @setActivitySecondsToComplete="setActivitySecondsToComplete"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav 
    :current-page="currentPage" 
    @navigate="goTo($event)" 
  />
</template>

<script setup>
import { computed, ref } from 'vue';
import TheTimeline from './TheTimeline.vue';
import TheActivities from './TheActivities.vue';
import TheProgress from './TheProgress.vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constants'
import { normalizePageHash, generateTimelineItems, generateActivityOptions, generateActivities } from '../functions'

const currentPage = ref(PAGE_TIMELINE);
const activities = useState('activities', () => generateActivities() || []);
// const timelineItems = useState('timelineItems', generateTimelineItems(activities.value));
const timelineItems = useState('timelineItems', () => generateTimelineItems(activities.value));
const timeline = ref()
const activitySelectOptions = useState('activitySelectOptions', () => generateActivityOptions(activities.value));
// const timelineItems = ref(generateTimelineItems())

// const activities = ref(generateActivities())

// const activitySelectOptions = computed(() => generateActivityOptions(activities.value))

onMounted(() => {
  currentPage.value = normalizePageHash()
})

function goTo(page) {
  if(currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timeline.value.scrollToHour()
  }

  if(page !== PAGE_TIMELINE) {
    document.body.scrollIntoView()
  }

  currentPage.value = page
}

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

const setTimelineItemActivity = (timelineItem, activity) => {
  timelineItem.activityId = activity.id
}

const updateTimelineItemActivitySeconds = (timelineItem, activitySeconds) => {
  timelineItem.activitySeconds += activitySeconds
}

const setActivitySecondsToComplete = (activity, secondsToComplete) => {
  activity.secondsToComplete = secondsToComplete
}
</script>