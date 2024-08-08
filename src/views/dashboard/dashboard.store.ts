export const useDashboardStore = defineStore('dashboardStore', () => {
  const counter = ref(0)

  const increment = () => counter.value++
  const decrement = () => counter.value--

  return {
    counter,
    decrement,
    increment,
    $reset () {
      counter.value = 0
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDashboardStore, import.meta.hot))
}
