<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem 
        v-for="navItem in NAV_ITEMS" 
        :key="navItem.page"
        :navItem="navItem" 
      />
    </ul>
  </nav>
</template>

<script setup>
import { NAV_ITEMS } from '~/constants'
import NavItem from './NavItem.vue'
</script>