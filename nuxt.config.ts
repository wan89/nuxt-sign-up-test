import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  mode: 'universal',
  ssr: true,
  generate: {
    fallback: true
  },
  app: {
    head: {
      meta: [
          { charset: 'utf-8' }, 
          { name: 'viewport', content: 'width=750,user-scalable=no,target-densitydpi=device-dpi' },
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css' },
        // { rel: 'icon', href: '<%= BASE_URL %>favicon.ico' },
      ],
      script: [
        { src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js' },
      ],
    }
  },
  css: [
    '@/public/common.scss'
  ],
  modules: [
    'nuxt-swiper',
    '@pinia/nuxt',
  ],
};

export default defineNuxtConfig(config);