// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui"],
  ui: {
    global: true,
    icons: [], // TODO: add other libs and install them or use nuxt icon instead
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },
  devtools: { enabled: true },
});