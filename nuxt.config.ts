// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
  devtools: { enabled: true }, 
  pages: true,
  modules: [
      'nuxt-icon',
      'nuxt-lodash',
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/tailwindcss',
  ],
})
