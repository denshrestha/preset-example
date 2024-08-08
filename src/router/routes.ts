import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from './route-names'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: routeNames.dashboard }
  },
  {
    path: '/',
    redirect: { name: routeNames.dashboard },
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: routeNames.dashboard,
        component: () => import('@/views/dashboard/Dashboard.vue'),
        meta: {
          label: 'Dashboard',
          pagePadding: 'px-2 sm:px-12 py-10'
        }
      }
    ]
  }
]
