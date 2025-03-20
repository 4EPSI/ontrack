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
import { ref } from 'vue';
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, MILLISECONDS_IN_SECOND } from '~/constants'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import { isHourValid, isNumber } from '~/validators';
import { formatSeconds } from '~/functions'

const props = defineProps({
  seconds: {
    default: 0,
    type: Number,
    validator: isNumber
  },
  hour: {
    type: Number,
    required: true,
    validator: isHourValid
  }
})

const seconds = ref(props.seconds)
const isRunning = ref(false)

const isStartButtonDisabled = props.hour !== new Date().getHours()

const start = () => {
  isRunning.value = setInterval(() => {
    seconds.value++
  }, MILLISECONDS_IN_SECOND);
}

const stop = () => {
  clearInterval(isRunning.value)
  isRunning.value = false
}

const reset = () => {
  stop()
  seconds.value = 0
}
</script>