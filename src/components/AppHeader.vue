<template>
  <header class="border-b border-grey-light py-5 px-3 sm:px-12 bg-white h-18 sticky top-0 w-full z-50">
    <PortalTarget :name="$portals.header">
      <div class="h-full flex items-center justify-between">
        <transition name="slide-left" mode="out-in">
          <div :key="$route.meta.label + String($route.params.id)" class="flex items-center">
            <div class="mr-3 w-6 text-center sm:hidden" @click="isOpenMobileSidebar = true">
              <div
                class="w-full h-0.5 rounded-sm mb-1.5 bg-primary"
              />
              <div
                class="w-full h-0.5 rounded-sm mb-1.5 bg-primary"
              />
              <div
                class="w-full h-0.5 rounded-sm bg-primary"
              />
            </div>
            <BackButton
              v-if="$customRouter.backRoutes.value[String($route.meta.backRouteKey)]"
              class="cursor-pointer mr-4"
              @click-button="$customRouter.navigateTo($customRouter.backRoutes.value[String($route.meta.backRouteKey)])"
            />

            <div
              :class="['courseMarketing', 'workshopMarketing',
                       'bookMarketing', 'webinarMarketing', 'workshop'].includes(String($route.name))
                ? 'text-lg font-700'
                : 'text-subheading'"
            >
              <PortalTarget :name="$portals.pageLabel">
                <p>{{ $route.meta.label }}</p>
              </PortalTarget>
            </div>
          </div>
        </transition>
      </div>
    </PortalTarget>
  </header>
</template>

<script lang="ts" setup>
const generalStore = useGeneralStore()
const { isOpenMobileSidebar } = storeToRefs(generalStore)
</script>
