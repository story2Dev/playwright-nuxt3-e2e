// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxt/ui", "@nuxtjs/color-mode", "@nuxtjs/apollo"],

  runtimeConfig: {
    public: {
      authURL: `${process.env.AUTH_SERVER_URL}`,
    },
  },

  apollo: {
    autoImports: true,
    clients: {
      default: {
        authHeader: 'Authorization',
        tokenStorage: 'cookie',
        tokenName: 'token',
        httpEndpoint: "http://localhost:8080/v1/graphql",
      },
    },
  },
});
