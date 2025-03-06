<template>
  <div class="mt-7">
    <ul>
      <TimelineItem 
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour" 
        :timelineItem="timelineItem"
      />
    </ul>
  </div>
</template>

<script setup>
import { generateTimelineItems } from '~/functions';
import TimelineItem from '../components/TimelineItem.vue';
const timelineItems = generateTimelineItems()
</script>