<template>
  <div id="timeline" class="mt-7">
    <ul>
      <TimelineItem 
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour" 
        :timelineItem="timelineItem"
        :activities="activities"
        :activitySelectOptions="activitySelectOptions"
        ref="timelineItemRefs"
        @scrollToHour="scrollToHour"
        @selectActivity="emit('setTimelineItemActivity', timelineItem, $event )"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref, watchPostEffect, nextTick } from 'vue';
import { validateTimelineItems, validateSelectOptions, isTimelineItemValid, isActivityValid, isPageValid } from '../validators.js'
import TimelineItem from '../components/TimelineItem.vue';
import { MIDNIGHT_HOUR, PAGE_TIMELINE } from '~/constants.js';

const props = defineProps({
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
  },
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid
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

const timelineItemRefs = ref([])

watchPostEffect(async () => {
  if(props.currentPage === PAGE_TIMELINE) {
    await nextTick()

    setTimeout(() => scrollToHour(null, false), 100)
  }
})

const scrollToHour = (hour = null, isSmooth = true) => {
  hour ??= new Date().getHours()

  const options = { behavior: isSmooth? 'smooth' : 'instant' }
  if(hour === MIDNIGHT_HOUR) {
    document.body.scrollIntoView(options)
  } else {
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(options)
  }
}

defineExpose({
  scrollToHour
})
</script>