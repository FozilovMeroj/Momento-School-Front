import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config

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
      },
    },
  },
});
