<template>
  <li 
    class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4" 
  >
    <TimelineHour :hour="timelineItem.hour" />

    <BaseSelect 
      placeholder="Rest" 
      :selected="timelineItem.activityId" 
      :options="activitySelectOptions" 
      @select="selectActivity"
    />
    <div class="flex w-full gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER">
        <ArrowPathIcon class="h-8" />
      </BaseButton>
      <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
        00:00:00
      </div>
      <BaseButton :type="BUTTON_TYPE_WARNING">
        <PauseIcon class="h-8" />
      </BaseButton>
      <BaseButton :type="BUTTON_TYPE_SUCCESS">
        <PlayIcon class="h-8" />
      </BaseButton>
    </div>
  </li>
</template>

<script setup>
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, NULLABLE_ACTIVITY } from '~/constants'
import BaseSelect from './BaseSelect.vue'
import { isActivityValid, isTimelineItemValid, validateSelectOptions, validateActivities } from '../validators.js'
import TimelineHour from './TimelineHour.vue'
import BaseButton from './BaseButton.vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  selectActivity: isActivityValid
})

const selectActivity = (id) => {
  emit('selectActivity', findActivityById(id))
}

const findActivityById = (id) => {
  return  props.activities.find(activity => activity.id === id) || NULLABLE_ACTIVITY
}
</script>