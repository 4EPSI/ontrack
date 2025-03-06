<template>
  <div id="timeline" class="mt-7">
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
import { isTimelineItemValid } from '../validators.js'
import TimelineItem from '../components/TimelineItem.vue';
defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator(timelineItems) {
      return timelineItems.every(isTimelineItemValid)
    }
  }
})
</script>