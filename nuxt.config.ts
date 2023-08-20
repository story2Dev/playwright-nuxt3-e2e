// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxthq/ui', '@nuxtjs/color-mode'],

  runtimeConfig:{
    public:{
      authURL: `${process.env.AUTH_SERVER_URL}`
    }
  }
})
