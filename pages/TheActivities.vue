<template>
  <div class="flex flex-col grow" id="activities">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem 
        v-for="activity in activities" 
        :key="activity" 
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>

<script setup>
import ActivityItem from '~/components/ActivityItem.vue';
import { isActivityValid, validateActivities } from '../validators.js'
import TheActivityForm from '../components/TheActivityForm.vue'
import TheActivitiesEmptyState from '~/components/TheActivitiesEmptyState.vue';

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  }
})

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid
})

</script>