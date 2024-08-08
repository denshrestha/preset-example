<template>
  <div>
    <NavSidebar />

    <div
      class="will-change-[margin-left] transition-[margin-left] duration-300 relative ml-0"
      :class="[sidebarOpened ? 'sm:ml-sidebar-opened' : 'sm:ml-sidebar-closed']"
    >
      <AppHeader
        v-if="!$route.meta.hideNavigation"
        class="transition-opacity duration-200 overflow-x-auto"
        :class="{ 'opacity-0 ': $route.meta.hideHeader }"
      >
        <slot name="header" />

        <template #label>
          <slot name="label" />
        </template>
      </AppHeader>

      <RouterViewAnimated :padding="$route.meta.pagePadding" transition="slide-left" />

      <PortalTarget :name="$portals.footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const generalStore = useGeneralStore()
const { sidebarOpened } = storeToRefs(generalStore)
</script>
