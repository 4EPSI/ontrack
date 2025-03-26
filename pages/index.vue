<template>
  <TheHeader />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE"/>
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav />
</template>

<script setup>
import TheTimeline from './TheTimeline.vue';
import TheActivities from './TheActivities.vue';
import TheProgress from './TheProgress.vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constants'
import { currentPage } from '~/router';
import { useActivities, useActivitySelectOptions } from '~/activities';
import { useTimelineItems } from '~/timelineItems';

const activities = useActivities();
const activitySelectOptions = useActivitySelectOptions();
const timelineItems = useTimelineItems();
</script>