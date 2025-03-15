<template>
  <div id="timeline" class="mt-7">
    <ul>
      <TimelineItem 
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour" 
        :timelineItem="timelineItem"
        :activitySelectOptions="activitySelectOptions"
      />
    </ul>
  </div>
</template>

<script setup>
import { validateTimelineItems, validateSelectOptions } from '../validators.js'
import TimelineItem from '../components/TimelineItem.vue';
defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  }
})
</script>