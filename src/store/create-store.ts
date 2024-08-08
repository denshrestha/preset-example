export const store = createPinia()

store.use(({ store }) => {
  store.$onAction(({ name }) => {
    if (name === 'logout') {
      [
        useDashboardStore()
      ].forEach(store => store.$reset())
    }
  })
})
