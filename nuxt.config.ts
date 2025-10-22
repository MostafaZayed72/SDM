// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/fonts'
  ],
  googleFonts: {
    families: {
      Tajwal: [400, 500, 700],
    },
    display: 'swap',
    download: true,
  },
  i18n: {
    langDir: 'locales',

    locales: [
      { code: 'en', name: 'English', iso: 'en-US', dir: 'ltr', file: 'en.json' },
      { code: 'ar', name: 'العربية', iso: 'ar-AR', dir: 'rtl', file: 'ar.json' }
    ],
    defaultLocale: 'en',
  }
})