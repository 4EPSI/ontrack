<template>
  <div class="flex flex-col grow" id="activities">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem 
        v-for="activity in activities" 
        :key="activity.id" 
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
        @setSecondsToComplete="setSecondsToComplete(activity, $event)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>

<script setup>
import ActivityItem from '~/components/ActivityItem.vue';
import { isActivityValid, validateActivities, isNumber } from '../validators.js'
import TheActivityForm from '../components/TheActivityForm.vue'
import TheActivitiesEmptyState from '~/components/TheActivitiesEmptyState.vue';

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  },
})

const emit = defineEmits({
  setActivitySecondsToComplete(activity, secondsToComplete) {
    return [
      isActivityValid(activity),
      isNumber(secondsToComplete)
    ].every(Boolean)
  },
  deleteActivity: isActivityValid,
  createActivity: isActivityValid
})


const setSecondsToComplete = (activity, secondsToComplete) => {
  emit('setActivitySecondsToComplete', activity, secondsToComplete)
}
</script>