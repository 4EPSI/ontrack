<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select @change="emit('select', +$event.target.value)" class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option 
        v-for="{ value, label } in options" 
        :key="value" 
        :value="value" 
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import BaseButton from './BaseButton.vue';
import { validateSelectOptions, isUndefinedOrNull, isNumberOrNull } from '../validators';

const props = defineProps({
  selected: Number,
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  },
  placeholder: {
    type: String,
    required: true
  }
})

const emit = defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>