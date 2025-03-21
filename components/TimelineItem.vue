<template>
  <li 
    class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4" 
  >
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour', timelineItem.hour)" />

    <BaseSelect 
      placeholder="Rest" 
      :selected="timelineItem.activityId" 
      :options="activitySelectOptions" 
      @select="selectActivity"
    />
    <TimelineStopwatch 
      :timelineItem="timelineItem"
    />
  </li>
</template>

<script setup>
import { inject } from 'vue'
import { NULLABLE_ACTIVITY } from '~/constants'
import BaseSelect from './BaseSelect.vue'
import { isActivityValid, isTimelineItemValid, isHourValid } from '../validators.js'
import TimelineHour from './TimelineHour.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
})

const activitySelectOptions = inject('activitySelectOptions')
const activities = inject('activities')

const emit = defineEmits({
  selectActivity: isActivityValid,
  scrollToHour: isHourValid
})

const selectActivity = (id) => {
  emit('selectActivity', findActivityById(id))
}

const findActivityById = (id) => {
  return  activities.find(activity => activity.id === id) || NULLABLE_ACTIVITY
}
</script>