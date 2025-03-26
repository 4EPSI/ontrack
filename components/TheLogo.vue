<template>
  <nuxt-link @click="handleClick" :to="`#${PAGE_TIMELINE}`">
    <img class="h-9" src="../assets/img/logo.png" alt="Logo">
  </nuxt-link>
</template>

<script setup>
import { PAGE_TIMELINE } from '../constants'
import { currentPage ,navigate } from '~/router';
import { scrollToHour } from '~/timelineItems'

const handleClick = () => {
  currentPage.value === PAGE_TIMELINE ? scrollToHour() : navigate(PAGE_TIMELINE)
}
</script>