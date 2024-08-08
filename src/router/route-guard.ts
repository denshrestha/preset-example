import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { routeNames } from './route-names'

function checkRequireAuth (to: RouteLocationNormalized, next: NavigationGuardNext) {
  if (to.meta.requireAuth) {
    return next({ name: routeNames.login })
  } else {
    next()
  }
}

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  checkRequireAuth(to, next)
}
