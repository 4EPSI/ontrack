<template>
  <div class="flex w-full gap-2">
    <BaseButton :disabled="!seconds" @click="reset" :type="BUTTON_TYPE_DANGER">
      <ArrowPathIcon class="h-8" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-if="isRunning" @click="stop" :type="BUTTON_TYPE_WARNING">
      <PauseIcon class="h-8" />
    </BaseButton>
    <BaseButton v-else @click="start" :disabled="isStartButtonDisabled" :type="BUTTON_TYPE_SUCCESS">
      <PlayIcon class="h-8" />
    </BaseButton>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, MILLISECONDS_IN_SECOND } from '~/constants'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import {  isTimelineItemValid } from '~/validators';
import { currentHour, formatSeconds } from '~/functions'
import { updateTimelineItem } from '~/timelineItems';

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  },
})


const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)

const isStartButtonDisabled = props.timelineItem.hour !== currentHour()

watch(
  () => props.timelineItem.activityId, 
  () => updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
)

const start = () => {
  isRunning.value = setInterval(() => {
    updateTimelineItem(props.timelineItem, { activitySeconds: props.timelineItem.activitySeconds + 1 })

    seconds.value++
  }, MILLISECONDS_IN_SECOND);
}

const stop = () => {
  clearInterval(isRunning.value)
  isRunning.value = false
}

const reset = () => {
  stop()
  updateTimelineItem(props.timelineItem, { activitySeconds: props.timelineItem.activitySeconds - seconds.value })
  seconds.value = 0
}
</script>