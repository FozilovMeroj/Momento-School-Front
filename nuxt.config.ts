// https://nuxt.com/docs/api/configuration/nuxt-config
import variables from "@/assets/scss/_variables.scss";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxt/image",
    "dayjs-nuxt",
    "@nuxt/icon",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "vuetify-nuxt-module",
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
        themes: {
          dark: {
            dark: true,
            colors: {
              primary: "#120c42",
            },
          },
        },
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
