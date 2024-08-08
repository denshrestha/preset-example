import { createRouter, createWebHistory } from 'vue-router'

import { routeGuard } from './route-guard'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 300)
    })
  }
})

router.beforeEach(routeGuard)
