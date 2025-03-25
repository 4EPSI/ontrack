<template>
  <TheHeader />

  <main class="flex flex-grow flex-col">
    <TheTimeline 
      v-show="currentPage === PAGE_TIMELINE" 
      :timelineItems="timelineItems" 
      ref="timelineRef"
    />

    <TheActivities 
      v-show="currentPage === PAGE_ACTIVITIES" 
      :activities="activities" 
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav />
</template>

<script setup>
import { provide, readonly } from 'vue';
import TheTimeline from './TheTimeline.vue';
import TheActivities from './TheActivities.vue';
import TheProgress from './TheProgress.vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constants'
import { generatePeriodSelectOptions } from '../functions'
import { currentPage, timelineRef } from '~/router';
import * as keys from '~/keys'
import { setActivitySecondsToComplete, createActivity, deleteActivity, useActivities, useActivitySelectOptions } from '~/activities';
import { useTimelineItems, setTimelineItemActivity, updateTimelineItemActivitySeconds } from '~/timelineItems';

const activities = useActivities();
const activitySelectOptions = useActivitySelectOptions();
const timelineItems = useTimelineItems();

provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, deleteActivity)
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions))
provide(keys.timelineItemsKey, readonly(timelineItems))
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)

</script>