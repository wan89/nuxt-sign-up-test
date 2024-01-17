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
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css' },
        // { rel: 'icon', href: '<%= BASE_URL %>favicon.ico' },
      ],
      script: [
        { src: '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=159ac098233764363697bc5976c3d45c', defer: true },
        { src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js' },
      ],
    }
  },
  modules: [
    'nuxt-swiper',
    '@pinia/nuxt',
  ],
};

export default defineNuxtConfig(config);