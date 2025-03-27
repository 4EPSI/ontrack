<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input 
      class="w-full rounded border px-4 text-xl" 
      placeholder="Activity nam" 
      type="text" 
      v-model="name"
    />
    <BaseButton :disabled="name.trim() === ''">
      <BaseIcon :name="ICON_PLUS" class="h-8" />
    </BaseButton>
  </form>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import BaseIcon from '~/components/BaseIcon.vue';
import BaseButton from './BaseButton.vue'
import { id, } from '~/functions'
import { createActivity } from '~/activities'
import { ICON_PLUS } from '~/icons';

const submit = async () => {
  createActivity({
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })
  name.value = ''

  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}

const name = ref('')
</script>