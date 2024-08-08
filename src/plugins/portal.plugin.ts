import type { Plugin } from 'vue'
import PortalVue from 'portal-vue'

const portals = {
  header: 'header',
  footer: 'footer',
  pageLabel: 'pageLabel'
}

const PortalPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$portals = portals
    app.use(PortalVue)
  }
}

export {
  portals,
  PortalPlugin
}
