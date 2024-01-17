<template>
  <div class="swiper-lazy-box">
    <skeleton-box  style="width:100%; height:442px;"/>
    <img class="swiper-lazy" :data-src="src" ref="imgEle">
  </div>
</template>

<script>
  import SkeletonBox from "@/components/SkeletonBox.vue";

  export default {
    name: 'lazyImage',
    props: {
      src: String
    },
    data() {
      return {
          isShow : false
      }
    },
    updated() {
      this.$refs.imgEle.src = this.src
    },
    components: {
      SkeletonBox
    },
  }
</script>