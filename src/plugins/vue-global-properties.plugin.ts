import type { Plugin } from 'vue'
import { routeNames } from '@/router/route-names'
import { useFormatters } from '@/composables/formatters'
import { useCustomRouter } from '@/composables/custom-router'
import { EElComponentSize, EElComponentType, EButtonSize, EButtonType } from '@/types/enums'

export const globalProperties = {
  $elComponentSize: EElComponentSize,
  $elComponentType: EElComponentType,
  $buttonSize: EButtonSize,
  $buttonType: EButtonType,
  $elModalDefault: {
    width: '470px',
    appendToBody: true,
    showClose: false
  },
  $elFormDefault: {
    labelPosition: 'top',
    requireAsteriskPosition: 'right'
  } as {
    labelPosition: 'left' | 'right' | 'top'
    requireAsteriskPosition: 'left' | 'right'
  },
  $routeNames: routeNames,
  $formatters: useFormatters(),
  $customRouter: useCustomRouter()
}

export const VueGlobalPropertiesPlugin: Plugin = {
  install: (app) => {
    for (const i in globalProperties) {
      app.config.globalProperties[i] = globalProperties[i as keyof typeof globalProperties]
    }
  }
}
