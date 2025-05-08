// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: false,

  app: {
    head: {
      title: 'تاپ نوبت',
      htmlAttrs: {
        lang: 'fa',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },

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

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
  
});