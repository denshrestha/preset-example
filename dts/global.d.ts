import 'vue-router'
import { useFormatters } from '@/composables/formatters'
import { useCustomRouter } from '@/composables/custom-router'
import { routeNames } from '@/router/route-names'
import { globalProperties, portals } from '@/plugins'
import type { EMarketingType } from '@/types/enums'

declare module 'vue-router' {
  interface RouteMeta {
    backRouteKey?: string
    label?: string
    requireAuth?: boolean
    hideNavigation?: boolean,
    hideHeader?: boolean,
    pagePadding?: string,
    entityType?: EMarketingType
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // todo: Here you define you global vue definitions.
    $portals: typeof portals
    $routeNames: typeof routeNames

    // todo: These ones are used only for element library for size and type props;
    $elComponentSize: typeof globalProperties.$elComponentSize
    $elComponentType: typeof globalProperties.$elComponentType

    $buttonSize: typeof globalProperties.$buttonSize
    $buttonType: typeof globalProperties.$buttonType
    $elModalDefault: typeof globalProperties.$elModalDefault
    $elFormDefault: typeof globalProperties.$elFormDefault

    $formatters: ReturnType<typeof useFormatters>
    $formatters: ReturnType<typeof useFormatters>
    $customRouter: ReturnType<typeof useCustomRouter>

  }
}

export { }
