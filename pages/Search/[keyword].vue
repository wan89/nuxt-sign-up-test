<template>
    <div class="search">
      <div class="wrapper">
        <h2>[{{ $route.params.keyword }}]에 대한 검색결과</h2>

        <div class="sections company">
          <h3>업체 (총 {{partnerTotalCount}}개의 검색결과)</h3>
          
          <div class="section-wrapper" :style="'max-height:'+(companyMoreIdx*500)+'px'" ref="companyWrapper" v-if="companys">
            <div v-for="(item) in companys" 
                :key="item" 
                 class="item"
            >
              <router-link :to="'/partner/'+item.id">
                <span>
                  <div class="item-image" :style="'background-image:url('+item.thumbnail+'); background-position:center;'"></div>
                  {{item.name}}<a class="item-region">{{item.category.nameKor}}</a>
                </span>
              </router-link>
            </div>
            <div class="empty-item" v-if="companys.length == 0">검색결과가 없습니다</div>
          </div>

          <div class="append-btn" v-if="companys.length != 0 && isCompanyMore" @click="companyMoreBtnHandler">더보기</div>
        </div>

        <div class="sections contents">
          <h3>컨텐츠 (총 {{contentTotalCount}}개의 검색결과)</h3>
          <div class="section-wrapper">
            <Swiper
                  v-if="contents.length != 0"
                  :slides-per-view="'auto'"
                  :space-between="15"
                  class="items">
              <SwiperSlide v-for="item in contents" :key="item">
                  <router-link :to="'/contents/detail/'+item.contentId">
                    <span>
                      <div class="images" :style="'background-image: url('+item.thumbnail+');'"></div>
                      <span>{{item.title}}</span>
                      <p><a class="user-icon" :style="'background-image:url('+item.imageUrl+')'"></a>{{item.name}}</p>
                    </span>
                  </router-link>
              </SwiperSlide>
            </Swiper>
            <div class="empty-item" v-if="contents.length == 0">검색결과가 없습니다</div>
          </div>
        </div>

        <div class="sections talk">
          <h3>웨딩톡 (총 {{weddingTalkTotalCount}}개의 검색결과)</h3>
          <div  v-if="talks.length != 0" class="section-wrapper">
            <div v-for="(item) in talks" 
                :key="item" 
                class="item"
                @click="talkClick(item.id)"
              >
              
              <div class="content-text-box" v-html="item.content"></div>
              <span class="more-btn">...더보기</span>
              <p>
                <a :style="'background-image:url('+item.user.imageUrl+')'"></a>
                {{item.user.nickName}}
              </p>
            </div>
            <div class="append-btn" @click="talkMoreBtnHandler">더보기</div>
          </div>
          <div class="empty-item" v-if="talks.length == 0">검색결과가 없습니다</div>
        </div>

      </div>
    </div>
</template>

<script lang="ts" setup>
  import "./Search.scss";

/* ================================================================================================= */
/* == values == */
/* ================================================================================================= */
  const route:any = useRoute();
  let isTalkPop                     = ref(false);
  let companyWrapper                = ref(null);
  let companys:Ref<Object[]>        = ref([]);
  let partnerTotalCount:Ref<number> = ref(0);
  let contents:Ref<Object[]>  = ref([]);
  let contentTotalCount       = ref(0);
  let talks:Ref<Object[]>     = ref([]);
  let weddingTalkTotalCount   = ref(0);
  let talkId          = ref(0);
  let talkIdx         = ref(1);
  let companyMoreIdx  = ref(1);
  let isCompanyMore   = ref(true);
  let isShowPop       = false;

/* ================================================================================================= */
/* == functions == */
/* ================================================================================================= */
  useHead({
    title: '',
    meta : [
      {name: 'description', content: '웨딩의 여신에서 ['+route.params.keyword+'] 검색결과를 알아보세요!'}
    ]
  });

  const talkClick = (id:number) => {
    talkId.value = id;
    isTalkPop.value = true;
  };
  const talkHidePop = () => isTalkPop.value = false;
  
  const talkMoreBtnHandler = () => {
    talkIdx.value++;
  };
  const companyMoreBtnHandler = () => {
      let companyWrapperHeight = companyWrapper.scrollHeight;
      companyMoreIdx.value++;
      if(companyWrapperHeight < companyMoreIdx.value*500){
        isCompanyMore.value = false;
      }
    
  };
</script>