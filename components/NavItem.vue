<template>
  <li class="flex-1">
    <nuxt-link v-bind="$attrs" class="flex flex-col items-center p-2 text-xs capitalize">
      <slot></slot>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>