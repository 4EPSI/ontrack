<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <BaseIcon :name="ICON_X_MARK" class="h-8" />
    </BaseButton>
    <select @change="select($event.target.value)" class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
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
import { BUTTON_TYPE_NEUTRAL } from '~/constants';
import BaseButton from './BaseButton.vue';
import BaseIcon from '~/components/BaseIcon.vue';
import { ICON_X_MARK } from '~/icons';
import { validateSelectOptions, isUndefinedOrNull, isSelectValueValid, } from '../validators';
import { normalSelectValue } from '~/functions'

const props = defineProps({
  selected: [String, Number],
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
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

const select = (value) => {
  emit('select', normalSelectValue(value))
}
</script>