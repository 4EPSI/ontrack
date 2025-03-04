<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem 
        v-for="icon, page in navItems" 
        :key="page"
        :to="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage}"
        @click="currentPage = page">
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from '../constants'

const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}

const currentPage = ref(PAGE_TIMELINE);

const normalizePageHash = () => {
  if(process.client) {
    const hash = window.location.hash.slice(1);

    if(Object.keys(navItems).includes(hash)) {
      return hash
    }

    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }
  return PAGE_TIMELINE
}

onMounted(() => {
  currentPage.value = normalizePageHash()
})

</script>