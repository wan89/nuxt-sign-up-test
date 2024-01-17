<!-- Company info box (header)2-->
<template>
    <div class="contents-header-info">
        <h2>
          <a v-if="name">{{name}}</a>
          <SkeletonBox v-else width='250px' height='40px'></SkeletonBox>
        </h2>
        <div class="location">
          <!-- svg! marker -->
          <img src="@/public/icon-svg/marker.svg" />
          <p @click="showMap()">
            <a v-if="adress">{{adress}}</a>
            <SkeletonBox v-else width='280px' height='30px'></SkeletonBox>
          </p>
        </div>
        <hr/>
        <span v-if="tags" class="tags">
          <a v-for='(tag, idx) in tags' :key="idx" @click="tagClickHandler(tag)" >#{{tag}}</a>
        </span>
        <SkeletonBox v-else width='200px' height='30px'></SkeletonBox>
        
        <div class="estimate" v-if="isEstimate" @click="estimateClickHandler()">
          <!-- svg! estimate -->
          <img src="@/public/icon-svg/estimate.svg" />
        </div>

        <div class="btns">

          <div class="tel">
            <a v-if="tel" :href="'tel://'+tel" target="_tab" @click="interfaceClick('tel')">
              <!-- svg! tel -->
              <img src="@/public/icon-svg/tel.svg" class='wish-icon' style="position:relative; top:-1px;" />
              
              {{tel}}
            </a>
            <SkeletonBox v-else width='170px' height='30px'></SkeletonBox>
          </div>

          <div class="zzim">
            <a v-if="like != null"  @click="likeClickHandler()" style="cursor:pointer">
              <!-- svg! check -->
              <img src="@/public/icon-svg/check.svg" class='wish-icon' style="position:relative; top:-1px;" />
              찜 {{like}}
            </a>
            <SkeletonBox v-else width='170px' height='30px'></SkeletonBox>
          </div>

          <div class="home">
            <a v-if="homepage" :href="homepage" target="_tab" @click="interfaceClick('website')">
              <!-- svg! link -->
              <img src="@/public/icon-svg/link.svg" style="position:relative; top:-2px;" />
              홈페이지 연결
            </a>
            <SkeletonBox v-else width='200px' height='30px'></SkeletonBox>
          </div>
          
      </div>

      <div class="pc-fixed-menu">
      </div>

      <div class="company-inquiry pc" @click="inquiryClickHandler()" >1:1 문의하기</div>
      
    </div>
    <!-- contents-head -->
</template>

<script lang="ts">
  /* ================================================================================================= */
  /* == import == */
  /* ================================================================================================= */
  import { useCategoryStore } from "@/stores/categorys"
  import SkeletonBox from '@/components/SkeletonBox.vue';
  
  /* ================================================================================================= */
  /* == script body == */
  /* ================================================================================================= */
  export default {
    data() {  return {} },
    components: {SkeletonBox},
    props: {
      name: String,
      adress: String,
      tags: Array,
      tel: String,
      homepage: String,
      like: Number,
      isLike: Boolean,
      isEstimate: Boolean,
      popupHandler: Function,
      zzimHandler: Function
    },
    setup() {
        const store         = useCategoryStore();
        const setIsAppDown  = (isShow:boolean) => store.downPopController(isShow);

        const tagClickHandler = (tagStr:string) => { window.location.href = '/search/'+tagStr; }

        const likeClickHandler      = () => { setIsAppDown(true); };
        const estimateClickHandler  = () => { setIsAppDown(true); };
        const inquiryClickHandler   = () => { setIsAppDown(true); };
        
        return { likeClickHandler, estimateClickHandler, inquiryClickHandler, tagClickHandler }
    },
    methods: {
        showMap(){  
          // props func 호출
          if(this.popupHandler) this.popupHandler();
        },
        interfaceClick(_target:string){
          if(_target == 'tel'){
            //gaTrack('웨딩의여신_업체상세_전화하기링크_click', this.name);
          }
        }
    },
  }
</script>
<style scoped lang="scss">
  $red: #ff607c;
  .contents-header-info {
      position: relative; width:408px; min-width: 300px; height:100%; border: 1px solid #DADADA; margin-left: 25px; border-radius: 10px;
      background-color:white; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25); padding:36px 24px; z-index: 2;
      
      h2 { margin-bottom:20px; font-size: 25px; font-weight: 700; }
        
      .location {
        display: flex; margin: 25px 0 20px; align-items:center;
        p { 
          font-size: 14px; margin-bottom: 0; white-space:nowrap; overflow-x: scroll; overflow-y: hidden; width: 100%; line-height: 24px;

          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          -webkit-mask-image: linear-gradient(to left,rgba(0,0,0,0) 0,rgba(0,0,0,1) 10%);
          a { margin-right: 30px; }
        }
        p::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
        }
        img { position:relative; margin-right:5px; }
      }
      hr { margin: 5px 0 10px;}

      .tags {
        white-space:nowrap; overflow-x: scroll; overflow-y: hidden; width:100%;
        display: block; -webkit-mask-image: linear-gradient(to left,rgba(0,0,0,0) 0,rgba(0,0,0,1) 10%);
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        a { cursor: pointer;}
        a:last-child { margin-right: 50px;}
        a:hover { font-weight: bold;}
      }
      .tags::-webkit-scrollbar {  display: none;    }

      span {  a { font-size: 14px; color:$red !important; margin-right: 5px;} }
      div.estimate { width:44px; height: 44px; position: absolute; top:35px; right: 20px; cursor: pointer; }
      div.btns {
          width: auto; height: auto; margin-top: 20px;
          div { 
            display: block; height: auto; padding:5px 0; margin-bottom: 10px; font-size: 15px;
            a { padding-bottom: 5px;}
            img { margin-right: 12px;}
          }
          div a:hover {
            border-bottom: 2px solid $red; color:$red;
            image path { stroke: $red; }
          }
          div:first-child a:hover svg path { fill: $red; stroke: none;}
      }
    }

    @media screen and (max-width: 840px) {
      .company, .partner{
        .contents-header{
          .contents-header-image-nav { top:320px; margin-left: 270px;}
          .contents-header-info div.estimate { transform: scale(1.7); top:60px;}
          .contents-header-info .location p { font-size: 21px;}
        }
      }
    }
</style>