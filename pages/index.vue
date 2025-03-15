<template>
  <TheHeader 
    @navigate="goTo($event)"
  />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timelineItems="timelineItems" :activitySelectOptions="activitySelectOptions" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
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

const activities = ['Coding', 'Reading', 'Training']

const activitySelectOptions = generateActivityOptions(activities)

onMounted(() => {
  currentPage.value = normalizePageHash()
})

function goTo(page) {
  currentPage.value = page
}
</script>