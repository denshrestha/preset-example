<template>
  <div class="flex justify-center items-center">
    <AppButton
      type="primary"
      size="large"
      class="mr-2"
      @click="dashboardStore.increment"
    >
      Increment
    </AppButton>
    <AppButton
      type="secondary"
      size="large"
      @click="dashboardStore.decrement"
    >
      Decrement
    </AppButton>
  </div>
</template>
<script lang="ts" setup>
const dashboardStore = useDashboardStore()
</script>
