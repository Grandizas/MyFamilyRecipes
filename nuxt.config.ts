// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import i18nModule from '@nuxtjs/i18n';

export default defineNuxtConfig({
  compatibilityDate: '2024-12-21',
  devtools: { enabled: true },
  css: [
    '@/assets/scss/main.scss', // path to your main SCSS file
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
    },
  },
  modules: [i18nModule],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
});
