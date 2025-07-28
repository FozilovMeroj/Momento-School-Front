// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: {enabled: true},
    ssr: false,
    runtimeConfig: {
        public: {appTitle: process.env.APP_TITLE},
    },
    modules: [
        "@nuxt/image",
        "dayjs-nuxt",
        "@nuxt/icon",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt",
        "@vueuse/nuxt",
        "vuetify-nuxt-module",
        "@nuxtjs/google-fonts",
        "@nuxtjs/tailwindcss",
    ],
    css: ["~/assets/scss/main.scss"],
    icon: {
        size: '20px',
        serverBundle: {
            collections: ["tabler"],
        },
    },
    googleFonts: {
        families: {
            "JetBrains+Mono": [100, 200, 300, 400, 500, 600, 700, 800],
        },
        display: "swap",
    },
    vuetify: {
        vuetifyOptions: {
            localeMessages: ['en', 'ru'],
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