<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem 
        v-for="icon, page in NAV_ITEMS" 
        :key="page"
        :to="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage}"
        @click="emit('navigate', page)">
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
import { NAV_ITEMS } from '~/constants'
import { isPageValid } from '../validators.js'
import NavItem from './NavItem.vue'

defineProps({
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid
  }
})

const emit = defineEmits({
  navigate: isPageValid
})
</script>