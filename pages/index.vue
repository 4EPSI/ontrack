<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav @navigate="currentPage = $event" :current-page="currentPage" />
</template>

<script setup>
import TheTimeline from './TheTimeline.vue';
import TheActivities from './TheActivities.vue';
import TheProgress from './TheProgress.vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constants'

const currentPage = ref(PAGE_TIMELINE);

const normalizePageHash = () => {
  if(process.client) {
    const hash = window.location.hash.slice(1);

    if([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
      return hash
    }

    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }
  return PAGE_TIMELINE
}

onMounted(() => {
  currentPage.value = normalizePageHash()
})
</script>