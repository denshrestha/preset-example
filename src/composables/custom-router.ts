import { router } from '@/router'
import type { RouteLocationRaw } from 'vue-router'

const backRoutes = ref<Record<string, RouteLocationRaw>>({})

export function useCustomRouter () {
  async function navigateTo (route: RouteLocationRaw, options?: { replace?: boolean; backRoute?: RouteLocationRaw}) {
    await router[options?.replace ? 'replace' : 'push'](route)

    if (router.currentRoute.value.meta.backRouteKey && options?.backRoute) {
      backRoutes.value[router.currentRoute.value.meta.backRouteKey] = options.backRoute
    }
  }

  return {
    backRoutes,
    navigateTo
  }
}
