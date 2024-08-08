/// <reference types="vite/client" />

/* UPDATE DEPENDING ON YOUR PROJRCT NEEDS */

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_URL_OLD: string
  readonly VITE_RECAPTCHA_SITE_KEY: string
  readonly VITE_DEV_SERVER_HOST: string
  readonly ZOOM_SDK_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
