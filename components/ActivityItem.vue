<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivity(activity)">
        <BaseIcon :name="ICON_TRASH" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect 
        class="font-mono grow" 
        placeholder="hh:mm" 
        :options="PERIOD_SELECT_OPTIONS" 
        :selected="activity.secondsToComplete || null"
        @select="updateActivity(activity, { secondsToComplete: $event || 0 })"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>

<script setup>
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '~/constants.js'
import { isActivityValid } from '../validators.js'
import { deleteActivity, updateActivity } from '~/activities';
import BaseButton from '~/components/BaseButton.vue';
import BaseIcon from '~/components/BaseIcon.vue';
import BaseSelect from '~/components/BaseSelect.vue';
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { resetTimelineItemActivities } from '~/timelineItems.js';
import { ICON_TRASH } from '~/icons.js';

defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  },
})
const deleteAndResetActivity = (activity) => {
  resetTimelineItemActivities(activity)
  deleteActivity(activity)
}
</script>