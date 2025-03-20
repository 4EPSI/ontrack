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
        @selectActivity="emit('setTimelineItemActivity', timelineItem, $event )"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { validateTimelineItems, validateSelectOptions, isTimelineItemValid, isActivityValid } from '../validators.js'
import TimelineItem from '../components/TimelineItem.vue';
import { MIDNIGHT_HOUR } from '~/constants.js';
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

const timelineItemRefs = ref([])

onMounted(() => scrollToCurrentTimelineItem())

const scrollToCurrentTimelineItem = () => {
  const currentHour = new Date().getHours()

  if(currentHour === MIDNIGHT_HOUR) {
    document.body.scrollIntoView()
  } else {
    timelineItemRefs.value[currentHour - 1].$el.scrollIntoView()
  }
}
</script>