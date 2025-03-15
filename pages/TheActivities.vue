<template>
  <div id="activities">
    <ul class="divide-y">
      <ActivityItem 
        v-for="activity in activities" 
        :key="activity" 
        :activity="activity" 
        :periodSelectOptions="periodSelectOptions" 
      />
    </ul>
  </div>
</template>

<script setup>
import ActivityItem from '~/components/ActivityItem.vue';

const activities = ['Coding', 'Reading', 'Training']
</script>