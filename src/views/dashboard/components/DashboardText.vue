<template>
  <div class="my-8 text-xl">Counter value: {{ counter }}</div>
</template>
<script lang="ts" setup>
const dashboardStore = useDashboardStore()
const { counter } = storeToRefs(dashboardStore)
</script>
