<template>
  <div v-loading.fullscreen.lock="loading">
    <div v-if="!loading">
      <div class="flex flex-col justify-center items-center">
        <p class="font-700">Example Dashboard page</p>
        <DashboardText />
        <DashboardActions />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const loading = ref(false)
// const dashboardStore = useDashboardStore()
// const { dashboardData, dashboardSummary } = storeToRefs(dashboardStore)
</script>
