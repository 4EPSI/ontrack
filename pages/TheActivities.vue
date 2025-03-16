<template>
  <div id="activities">
    <ul class="divide-y">
      <ActivityItem 
        v-for="activity in activities" 
        :key="activity" 
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <form @submit.prevent="" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
      <input class="w-full rounded border px-4 text-xl" placeholder="Activity nam" type="text">
      <BaseButton>
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
import ActivityItem from '~/components/ActivityItem.vue';
import { isActivityValid, validateActivities } from '../validators.js'
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from '~/components/BaseButton.vue'

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  }
})

const emit = defineEmits({
  deleteActivity: isActivityValid
})
</script>