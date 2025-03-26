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
import { onActivated } from 'vue';
import TimelineItem from '../components/TimelineItem.vue';
import { useTimelineItems, timelineItemRefs, scrollToHour, scrollToCurrentHour } from '~/timelineItems';

const timelineItems = useTimelineItems();

onActivated(scrollToCurrentHour)
</script>