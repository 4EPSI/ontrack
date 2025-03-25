<template>
  <nuxt-link @click="navigate(PAGE_TIMELINE)" :to="`#${PAGE_TIMELINE}`">
    <img class="h-9" src="../assets/img/logo.png" alt="Logo">
  </nuxt-link>
</template>

<script setup>
import { PAGE_TIMELINE } from '../constants'
import { navigate } from '~/router';
</script>