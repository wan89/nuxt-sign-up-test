<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
  .down-popup{
    width:100%; height: 100%; background-color: rgba(0, 0, 0, 0.6); flex-direction:column; position: fixed; top:0; left: 0; z-index: 9999; display: flex; align-items: center; justify-content: center;
    div { width:300px; height:385px; cursor: pointer; }
    p { color:white; padding-top: 10px; border-bottom: 1px solid white; cursor: pointer; }
  }
  @media screen and (max-width: 840px) {
    .down-popup{
      div{ width:600px; height:765px;}
      p { color:white; padding-top: 30px; border-bottom: 2px solid white; font-size: 30px; }
    }
  }
  @keyframes slidein {
    from { margin-top: 30px; opacity: 0; }
    to { margin-top: 0; opacity: 1; }
  }
</style>
<script lang="ts">
    import './public/common.scss';

    export default {
      name: 'hello-signup',
      data() {
        return {
          isGoTopBtn :false
        }
      },
      head: {
        title: 'sign up!',
        meta: [
           { charset: 'utf-8' }, 
           { name: 'viewport', content: 'width=750,user-scalable=no,target-densitydpi=device-dpi' },
           { hid: 'description', name: 'description', content: '소개 문구' },
           { name: 'title', content: '타이틀' },
           { name: 'keywords', content: '키워드' }
        ],
        link: [
          { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css' },
          { rel: 'icon', href: '<%= BASE_URL %>favicon.ico' },
        ],
        script: [
          { src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js' },
          { src: '//openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=yrtt7akvgt&submodules=geocoder' },
          { src: '//developers.kakao.com/sdk/js/kakao.js' }
        ]
      },
      setup() {
      },
      props: {
      },
      methods: {
      },
      components: {},
      mounted(){
      },
      unmounted(){
      }
  }
</script>