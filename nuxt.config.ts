// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: { appTitle: process.env.APP_TITLE },
  },
  modules: [
    "@nuxt/image",
    "dayjs-nuxt",
    "@nuxt/icon",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "vuetify-nuxt-module",
    "@nuxtjs/google-fonts",
  ],
  css: ["~/assets/scss/main.scss"],
  icon: {
    serverBundle: {
      collections: ["tabler"],
    },
  },
  i18n:{
    locales: [
      {code: "en", iso: "en-US", file: "en.json", name: "English" },
      {code: "ru", iso: "ru-RU", file: "ru.json", name: "Russian" },
    ],
    defaultLocale: "en",
    lazy: true,
  },
  googleFonts: {
    families: {
      "JetBrains+Mono": [100, 200, 300, 400, 500, 600, 700, 800],
    },
    display: "swap",
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
});
