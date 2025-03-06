<template>
  <TheHeader 
    @navigate="goTo($event)"
  />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timelineItems="timelineItems" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
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
import { normalizePageHash, generateTimelineItems } from '../functions'

const currentPage = ref(PAGE_TIMELINE);

const timelineItems = generateTimelineItems()

onMounted(() => {
  currentPage.value = normalizePageHash()
})

function goTo(page) {
  currentPage.value = page
}
</script>