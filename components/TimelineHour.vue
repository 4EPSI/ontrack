<template>
  <nuxt-link @click.prevent="scrollToHour(hour)" :class="classes" >
    {{ formattedHour }}
  </nuxt-link>
</template>

<script setup>
import { isHourValid } from '../validators.js'
import { currentHour } from '../functions.js'
import { scrollToHour } from '~/timelineItems.js'

const props = defineProps({
  hour: {
    type: Number,
    required: true,
    validator: isHourValid
  }
})

const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg',
  props.hour === currentHour()
  ? 'bg-purple-900 font-black text-white'
  : 'bg-gray-100 text-gray-500'
]

const formattedHour = `${ props.hour.toString().padStart(2, 0) } :00`
</script>