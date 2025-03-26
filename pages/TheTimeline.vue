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
import { watchPostEffect, nextTick } from 'vue';
import TimelineItem from '../components/TimelineItem.vue';
import { PAGE_TIMELINE } from '~/constants.js';
import { currentPage } from '~/router.js';
import { useTimelineItems, timelineItemRefs, scrollToHour, scrollToCurrentHour } from '~/timelineItems';

const timelineItems = useTimelineItems();


watchPostEffect(async () => {
  if(currentPage.value === PAGE_TIMELINE) {
    await nextTick()

    setTimeout(() => scrollToCurrentHour(false), 100)
  }
})
</script>