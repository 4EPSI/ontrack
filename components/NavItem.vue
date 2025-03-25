<template>
  <li class="flex-1">
    <nuxt-link :to="`#${page}`" :class="classes" @click="navigate(page)">
      <slot></slot>
    </nuxt-link>
  </li>
</template>

<script setup>
import { computed } from 'vue';
import { navigate, currentPage } from '~/router'
import { isPageValid } from '~/validators';

const props = defineProps({
  page: {
    type: String,
    required: true,
    validator: isPageValid
  }
})

const classes = computed(() => [
  'flex flex-col items-center p-2 text-xs capitalize',
  { 'bg-gray-200 pointer-events-none': props.page === currentPage.value }
])
</script>