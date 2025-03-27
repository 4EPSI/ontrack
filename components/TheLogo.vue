<template>
  <nuxt-link @click="handleClick" :to="`#${PAGE_TIMELINE}`">
    <img class="h-9" src="../assets/img/logo.png" alt="Logo">
  </nuxt-link>
</template>

<script setup>
import { PAGE_TIMELINE } from '../constants'
import { currentPage ,navigate } from '~/router';
import { scrollToCurrentHour } from '~/timelineItems'
import { nextTick } from 'vue';

const handleClick = async () => {
  currentPage.value === PAGE_TIMELINE 
  ? await nextTick().then(() => scrollToCurrentHour(true))
  : navigate(PAGE_TIMELINE)
}
</script>