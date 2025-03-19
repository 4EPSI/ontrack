<template>
  <div id="timeline" class="mt-7">
    <ul>
      <TimelineItem 
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour" 
        :timelineItem="timelineItem"
        :activities="activities"
        :activitySelectOptions="activitySelectOptions"
        @selectActivity="emit('setTimelineItemActivity', timelineItem, $event )"
      />
    </ul>
  </div>
</template>

<script setup>
import { validateTimelineItems, validateSelectOptions, isTimelineItemValid, isActivityValid } from '../validators.js'
import TimelineItem from '../components/TimelineItem.vue';
defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems
  },
  activities: {
    type: Array,
    required: true,
    // default: () => []
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [
      isTimelineItemValid(timelineItem),
      isActivityValid(activity)
    ].every(Boolean)
  }
})
</script>