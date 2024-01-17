<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
  .app{
    width:100%;
  }
</style>

<script lang="ts">
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