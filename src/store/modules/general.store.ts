export const useGeneralStore = defineStore('generalStore', () => {
  const route = useRoute()
  const { $routeNames } = useGlobalProperties()

  const isMobile = computed(() => window.innerWidth <= 768)
  const isOpenMobileSidebar = ref(false)
  const sidebarOpened = ref(window.innerWidth >= 1280 && !['firstLogin'].includes(route.name as string))

  watch(route, () => {
    if (route.name === $routeNames.dashboard && window.innerWidth >= 1280) {
      sidebarOpened.value = true
    }
  })
  return {
    isOpenMobileSidebar,
    sidebarOpened,
    isMobile
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
