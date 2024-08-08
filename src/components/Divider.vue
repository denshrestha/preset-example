<template>
  <div class="rounded-[2px] bg-grey-light" :class="directionClass" />
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ vertical?: boolean }>(),
  { vertical: false }
)
const directionClass = computed(() => {
  return props.vertical ? 'w-px' : 'h-px'
})
</script>
