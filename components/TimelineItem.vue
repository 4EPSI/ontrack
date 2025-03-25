<template>
  <li 
    class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4" 
  >
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour', timelineItem.hour)" />

    <BaseSelect 
      placeholder="Rest" 
      :selected="timelineItem.activityId" 
      :options="activitySelectOptions" 
      @select="setTimelineItemActivity(timelineItem, $event)"
    />
    <TimelineStopwatch 
      :timelineItem="timelineItem"
    />
  </li>
</template>

<script setup>
import { inject } from 'vue'
import BaseSelect from './BaseSelect.vue'
import { isTimelineItemValid, isHourValid } from '../validators.js'
import TimelineHour from './TimelineHour.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'
import { activitySelectOptionsKey, setTimelineItemActivityKey } from '~/keys'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
})

const activitySelectOptions = inject(activitySelectOptionsKey)
const setTimelineItemActivity = inject(setTimelineItemActivityKey)

const emit = defineEmits({
  scrollToHour: isHourValid
})
</script>