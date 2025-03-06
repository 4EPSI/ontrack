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
import { validateTimelineItems } from '../validators.js'
import TimelineItem from '../components/TimelineItem.vue';
defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validate: validateTimelineItems
  }
})
</script>