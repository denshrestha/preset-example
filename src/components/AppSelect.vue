<template>
  <el-select
    :model-value="modelValue"
    :filterable="filterable"
    :placeholder="placeholder"
    :suffix-icon="IconArrowSmall"
    :clearable="clearable"
    popper-class="!-my-2 py-2"
    @change="$emit('update:modelValue', $event)"
  >
    <el-option
      v-for="(option, index) in options"
      :key="index"
      :label="`${option.name} (${option.abbreviation})`"
      :value="option.abbreviation"
    >
      <slot name="option" :option="option" />
    </el-option>
  </el-select>
</template>

<script lang="ts" setup>
import IconArrowSmall from '~icons/icon/arrow-small'

defineProps<{
  options: ICollege[]
  modelValue: any
  filterable?: boolean
  clearable?: boolean
  placeholder?: string
}>()

defineEmits(['update:modelValue'])
</script>
