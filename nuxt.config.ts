// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiKey: "",
      apiBaseUrl: "",
    },
  },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-lucide-icons",
  ],
  shadcn: {
    componentDir: "./components/ui",
  },
});
