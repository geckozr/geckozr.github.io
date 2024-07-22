// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  css: ["normalize.css/normalize.css", "~/assets/scss/main.scss"],
  vite: {
    plugins: [],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/abstract/global.scss";`,
        },
      },
    },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "en",
    baseUrl: "https://geckozr.github.io",
    locales: [
      {
        code: "en",
        iso: "en-GB",
        name: "English",
        defaultLocale: true,
        isCatchallLocale: true,
      },
      {
        code: "it",
        iso: "it-IT",
        name: "Italiano",
      },
    ],
    vueI18n: "./i18n.config.ts",
  },
});
