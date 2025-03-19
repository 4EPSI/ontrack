<template>
  <div id="timeline" class="mt-7">
    <ul>
      <TimelineItem 
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour" 
        :timelineItem="timelineItem"
        :activities="activities"
        :activitySelectOptions="activitySelectOptions"
        @selectActivity="emit('setTimelineItemActivity', { timelineItem, activity: $event })"
      />
    </ul>
  </div>
</template>

<script setup>
import { validateTimelineItems, validateSelectOptions, isNull, isTimelineItemValid, isActivityValid } from '../validators.js'
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

const emit = defineEmits({
  setTimelineItemActivity({ timelineItem, activity }) {
    return [
      isTimelineItemValid(timelineItem),
      isNull(activity) ||
      isActivityValid(activity)
    ].every(Boolean)
  }
})
</script>