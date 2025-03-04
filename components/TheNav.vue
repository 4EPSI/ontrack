<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem 
        v-for="icon, page in navItems" 
        :key="page"
        :to="`#${page}`">
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = {
  timline: ClockIcon,
  activites: ListBulletIcon,
  progress: ChartBarIcon
}
</script>