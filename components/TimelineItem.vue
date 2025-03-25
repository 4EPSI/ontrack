<template>
  <li 
    class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4" 
  >
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour')" />

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
import BaseSelect from './BaseSelect.vue'
import { isTimelineItemValid, isUndefined } from '../validators.js'
import TimelineHour from './TimelineHour.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'
import { setTimelineItemActivity } from '~/timelineItems'
import { useActivitySelectOptions } from '~/activities'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
})

const activitySelectOptions = useActivitySelectOptions()

const emit = defineEmits({
  scrollToHour: isUndefined
})
</script>