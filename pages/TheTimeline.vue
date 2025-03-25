<template>
  <div id="timeline" class="mt-7">
    <ul>
      <TimelineItem 
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour" 
        :timelineItem="timelineItem"
        ref="timelineItemRefs"
        @scrollToHour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref, watchPostEffect, nextTick } from 'vue';
import TimelineItem from '../components/TimelineItem.vue';
import { MIDNIGHT_HOUR, PAGE_TIMELINE } from '~/constants.js';
import { currentPage } from '~/router.js';
import { currentHour } from '~/functions.js';
import { useTimelineItems } from '~/timelineItems';

const timelineItems = useTimelineItems();
const timelineItemRefs = ref([])

watchPostEffect(async () => {
  if(currentPage.value === PAGE_TIMELINE) {
    await nextTick()

    setTimeout(() => scrollToHour(null, false), 100)
  }
})

const scrollToHour = (hour = null, isSmooth = true) => {
  hour ??= currentHour()

  const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el
  el.scrollIntoView({ behavior: isSmooth? 'smooth' : 'instant' })
}

defineExpose({
  scrollToHour
})
</script>