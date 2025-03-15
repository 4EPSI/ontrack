<template>
  <TheHeader 
    @navigate="goTo($event)"
  />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timelineItems="timelineItems" :activitySelectOptions="activitySelectOptions" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" @deleteActivity="deleteActivity" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav 
    :current-page="currentPage" 
    @navigate="goTo($event)" 
  />
</template>

<script setup>
import TheTimeline from './TheTimeline.vue';
import TheActivities from './TheActivities.vue';
import TheProgress from './TheProgress.vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constants'
import { normalizePageHash, generateTimelineItems, generateActivityOptions } from '../functions'

const currentPage = ref(PAGE_TIMELINE);

const timelineItems = generateTimelineItems()

const activities = ref(['Coding', 'Reading', 'Training'])

const activitySelectOptions = generateActivityOptions(activities.value)

onMounted(() => {
  currentPage.value = normalizePageHash()
})

function goTo(page) {
  currentPage.value = page
}

const deleteActivity = (activity) => {
  activities.value.splice(activities.value.indexOf(activity), 1)
}
</script>