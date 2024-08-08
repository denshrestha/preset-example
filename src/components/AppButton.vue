<template>
  <button
    v-loading="loading"
    :disabled="disabled"
    :class="['button', buttonClass]"
    :type="nativeType"
    @click="!disabled && !loading && $emit('click', $event)"
  >
    <div class="h-full w-full" :class="loading ? 'opacity-0' : 'opacity-100'">
      <slot />
    </div>
  </button>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from 'vue'

defineEmits(['click'])

const { $buttonSize, $buttonType } = useGlobalProperties()

const props = withDefaults(defineProps<{
  type?: keyof typeof $buttonType
  nativeType?: ButtonHTMLAttributes['type']
  size?: keyof typeof $buttonSize
  disabled?: boolean
  loading?: boolean
}>(),
{
  size: 'default',
  disabled: false,
  nativeType: 'button',
  loading: false
})

const buttonClass = computed(() => [
  `button--${props.type}`,
  `button--${props.size}`,
  ...(props.loading ? ['button--loading'] : [])
])
</script>
