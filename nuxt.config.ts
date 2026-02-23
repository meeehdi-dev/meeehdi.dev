// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/a11y", "@nuxt/scripts", "@nuxtjs/turnstile"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    discord: {
      webhookUrl: "",
    },
    turnstile: {
      secretKey: "",
    },
    public: {
      turnstile: {
        siteKey: "",
      },
    },
  },
});

