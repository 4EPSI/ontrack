<template>
  <ul id="progress" class="divide-y">
    <ProgressItem 
      v-for="activity in trackedActivities" 
      :key="activity.id" 
      :activity="activity"
    />
  </ul>
</template>

<script setup>
import ProgressItem from "../components/ProgressItem.vue";
import { trackedActivities } from "~/activities";
</script>