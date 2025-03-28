<template>
  <li 
    class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4" 
  >
    <TimelineHour :hour="timelineItem.hour" />

    <BaseSelect 
      placeholder="Rest" 
      :selected="timelineItem.activityId" 
      :options="activitySelectOptions" 
      @select="updateTimelineItem(timelineItem, { activityId: $event })"
    />
    <TimelineStopwatch 
      :timelineItem="timelineItem"
    />
  </li>
</template>

<script setup>
import BaseSelect from './BaseSelect.vue'
import { isTimelineItemValid } from '../validators.js'
import TimelineHour from './TimelineHour.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'
import { updateTimelineItem } from '~/timelineItems'
import { useActivitySelectOptions } from '~/activities'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
})

const activitySelectOptions = useActivitySelectOptions()
</script>