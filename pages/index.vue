<template>
  <TheHeader />

  <main class="flex flex-grow flex-col">
    <keep-alive>
      <component :is="routes[currentPage]" />
    </keep-alive>
  </main>

  <TheNav />
</template>

<script setup>
import { routes, currentPage } from '~/router';
import { useActivities, useActivitySelectOptions } from '~/activities';
import { useTimelineItems } from '~/timelineItems';

const activities = useActivities();
const activitySelectOptions = useActivitySelectOptions();
const timelineItems = useTimelineItems();
</script>