<template>
  <div
    v-if="visible"
    class="absolute p-2 bg-white w-36 rounded shadow-md custom-tooltip"
    @click="hideTooltip"
  >
    <div class="max-w-sm tooltip-content p-2">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  visible: boolean
}>()

const emit = defineEmits(['update:visible'])

const hideTooltip = () => {
  emit('update:visible', false)
}

</script>

  <style scoped>
  .custom-tooltip {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 8px;
    z-index: 9999;
  }

  .tooltip-content {
    max-width: 200px;
  }
  </style>
