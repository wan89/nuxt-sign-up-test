<template>
    <div class="talk" ref="scrollComponent" style="width:100%;">
      <div class="wrapper">
        <ul class="talk-nav pc">
          <li v-for="categoryListItem in navList" :class="((categoryListItem.id == selectList)? 'active':'')" @click="selectCategory(categoryListItem)" :key="categoryListItem.id">{{categoryListItem.categoryNameKor}}</li>
        </ul>
        <select class="talk-list m" v-model="selectList">
          <option v-for="(listItem,idx) in navList" :key="idx" :value="listItem.id">{{listItem.categoryNameKor}}</option>
        </select>
        <div class="talk-content-wrapper" v-if="talks.length != 0">
          <div 
            :class="'talk-item '+((item.notice)? 'notice ':'')"
            v-for="(item,idx) in talks" 
            :key="idx" 
            @click="showTalkPopup(item)"
          >
            <p v-if="item.talkWriter">
              <a :style="'background-color:#'+item.talkWriter.color+'; background-image: url('+item.talkWriter.userImageUrl+')'"></a>
              <span><b>{{item.talkWriter.nickName}}</b>{{item.creationTimeToString}}</span>
            </p>
            <b>{{item.categoryToString}}</b>
            <div class="talk-content" v-html="item.content"></div>
            <span>... 더보기</span>
            <div class="talk-line"></div>
            <div class="talk-icons">
              <!-- <a><i class="bi bi-eye"></i> {{item.viewCount}}</a> -->
              <a><i class="bi bi-heart-fill"></i> {{item.loveCount}}</a>
              <a><i class="bi bi-chat-dots"></i> {{item.commentCount}}</a>
            </div>
          </div>
        </div>
        <div v-else-if="isIninMount" class="talk-content-wrapper empty-data">
          <div>데이터가 없습니다.</div>
        </div>
      </div>
    </div>

</template>

<script lang="ts" setup >
  import { ref } from "vue";

  import "./Talk.scss";

  /* ================================================================================================= */
  /* == values == */
  /* ================================================================================================= */
  let navList:Ref<Object[]>       = ref([]);
  let isIninMount:Ref<boolean>    = ref(false);
  let isDetailPop:Ref<Boolean>    = ref(false);
  let pageIdx:Ref<number>         = ref(1);
  let isProcess:Ref<Boolean>      = ref(false);
  let targetLastData:Ref<Boolean> = ref(false);
  let talks:Ref<Object[]>         = ref([]);
  let currentItem:Ref<Object>     = ref({});
  let selectList:Ref<number>      = ref(1);
  let scrollComponent             = ref(null);
  
  /* ================================================================================================= */
  /* == inits == */
  /* ================================================================================================= */

  onMounted(() => { window.addEventListener("scroll", handleScroll); });
  onUnmounted(() => { window.removeEventListener("scroll", handleScroll); });

  useHead({
    title: '웨딩의 여신 :: 웨딩톡',
    meta : [
      {name: 'description', content: '웨딩의 여신에서 여신들과 수다를 나눠요'}
    ]
  });

  /* ================================================================================================= */
  /* == functions == */
  /* ================================================================================================= */

  const hideTalkPopup = () => isDetailPop.value = false;

  const handleScroll = () => {
    let element:any = scrollComponent;
    if (element?.value.getBoundingClientRect().bottom < window.innerHeight+300 && !isProcess.value) {
      
      isProcess.value = true;
    }
  };


  const selectCategory = (select:any) => { 
    console.log(select.id);
    selectList.value = select.id;
    pageIdx.value = 1;
  };

  const showTalkPopup = (item:any) => { 
    
    currentItem.value = {
      userNickname: item.talkWriter.nickname,
      userImageUrl: item.talkWriter.imageUrl,
      creationTimeToString: item.creationTimeToString,
      category: item.categoryToString,
      text: item.content,
      id: item.id
    }
    isDetailPop.value = true;
  };

</script>