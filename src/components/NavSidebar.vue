<template>
  <div
    :class="[
      'fixed left-0 bottom-0 top-0 bg-primary z-[49]',
      'flex flex-col transition-[width] duration-300 will-change-[width] overflow-hidden h-full',
      sidebarOpened ? 'sm:w-sidebar-opened' : 'sm:w-sidebar-closed',
      isOpenMobileSidebar ? 'w-full sm:w-sidebar-opened' : 'w-0',
    ]"
  >
    <!-- LOGO -->
    <router-link
      #default="{ href, navigate }"
      :to="{ name: $routeNames.dashboard }"
      custom
    >
      <a
        class="h-18 flex items-center justify-center shrink-0"
        :href="href"
        @click="!$route.meta.hideNavigation ? navigate($event) : $event.preventDefault()"
      >
        <transition
          :name="sidebarOpened ? 'slide-right' : 'slide-left'"
          mode="out-in"
          style="--animation-duration: 175ms"
        >
          LOGO
          <!-- <img v-if="sidebarOpened || isOpenMobileSidebar" src="/images/logo.svg" alt="logo" class="max-w-none"> -->
          <!-- <img v-else src="/images/logo-small.svg" alt="logo"> -->
        </transition>
      </a>
    </router-link>

    <!-- LIST -->
    <div v-if="!$route.meta.hideNavigation" class="flex-grow flex flex-col px-5 pt-2.5 pb-5">
      <NavList :navigation="navigation" :show-label="sidebarOpened || isOpenMobileSidebar" />
      <!-- TOGGLE -->
      <div class="nav-list__item" @click="handleHideMenu">
        <!-- ICON -->
        <div class="w-5 flex items-center justify-center shrink-0">
          <IconArrowSmall
            class="transform transition-transform duration-300"
            :class="sidebarOpened ? 'rotate-90' : '-rotate-90'"
          />
        </div>

        <!-- LABEL -->
        <span v-show="sidebarOpened || isOpenMobileSidebar" class="ml-4 whitespace-nowrap">Hide menu</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconDashboard from '~icons/icon/dashboard'

const { $routeNames } = useGlobalProperties()

const generalStore = useGeneralStore()
const { sidebarOpened, isOpenMobileSidebar } = storeToRefs(generalStore)

const navigation: TNavigation = [
  { label: 'Dashboard', icon: IconDashboard, route: { name: $routeNames.dashboard } },
]

const handleHideMenu = () => {
  sidebarOpened.value = !sidebarOpened.value
  if (isOpenMobileSidebar.value) {
    isOpenMobileSidebar.value = false
  }
}

const { width: windowWidth } = useWindowSize()

watchDebounced(windowWidth, (newVal) => {
  if (newVal < 1280 && sidebarOpened.value) {
    sidebarOpened.value = false
  }
}, { debounce: 50 })
</script>
