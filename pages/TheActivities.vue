<template>
  <div class="flex flex-col grow" id="activities">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem 
        v-for="activity in activities" 
        :key="activity.id" 
        :activity="activity"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm />
  </div>
</template>

<script setup>
import ActivityItem from '~/components/ActivityItem.vue';
import { validateActivities } from '../validators.js'
import TheActivityForm from '../components/TheActivityForm.vue'
import TheActivitiesEmptyState from '~/components/TheActivitiesEmptyState.vue';

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  },
})
</script>