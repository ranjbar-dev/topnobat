// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },

  css: ["~/assets/css/fontiran.css", "~/assets/css/main.css"],

  compatibilityDate: "2024-11-01",

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  }
  
});