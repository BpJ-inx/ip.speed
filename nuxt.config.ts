// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['./src',],
  modules: ['@nuxtjs/tailwindcss'],
  css: ['../src/assets/styles/index.scss'],
})
