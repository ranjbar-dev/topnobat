// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: false,

  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },

  css: ["~/assets/css/fontiran.css", "~/assets/css/main.css"],

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/icon"],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  router: {
    options: {
      strict: false
    }
  },
  
});