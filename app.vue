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
        return {}
      },
      head: {
        title: 'sign up!',
        meta: [
           { charset: 'utf-8' }, 
           { name: 'viewport', content: 'width=750,user-scalable=no,target-densitydpi=device-dpi' },
           { hid: 'description', name: 'description', content: '소개 문구' },
           { name: 'title', content: '타이틀' },
           { name: 'keywords', content: '키워드' }
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