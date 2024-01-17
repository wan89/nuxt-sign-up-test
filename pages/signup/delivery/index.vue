<template>
    <div class="pages">
      <SignupSubHeader title="회원가입" summary="배송지 정보 입력"/>
  
      <table>
        <tr>
          <td>이름</td>
          <td>
            <input type="text" v-model="name" placeholder="이름"/>
            <a v-if="nameErrorMsg !== ''">{{ nameErrorMsg }}</a>
          </td>
        </tr>
        <tr>
          <td>연락처</td>
          <td>
            <input type="phone" v-model="phone" placeholder="연락처"/>
            <a v-if="phoneErrorMsg !== ''">{{ phoneErrorMsg }}</a>
          </td>
        </tr>
        <br/>
        <tr>
          <td colspan="2">
            <div class="adress-title">
              <p>주소</p>
              <button @click="postCodeSearch">배송지 찾기</button>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="text"  v-model="adressMain" placeholder="배송지찾기를 눌러주세요" disabled />
            <a v-if="addrErrorMsg !== ''">{{ addrErrorMsg }}</a>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="text" v-model="adressDetail" placeholder="상세주소를 입력하세요"/>
          </td>
        </tr>
      </table>

      <div class="step-btns">
        <button class="prev" @click="goBackPage">이전</button>
        <button class="next" @click="nextStep">다음</button>
      </div>
    </div>
  </template>
  

<script lang="ts" setup>
  import { useJoinUser } from "@/stores/joinUser";
  import "../signup.scss";
  import { useRouter } from 'vue-router'

  import { REG_EXP } from "@/public/Utils";

  /* eslint-disable no-unused-vars */
  // 다음 주소 API
  declare global {
    interface Window { daum: any; }
  }
  /* eslint-disable no-unused-vars */

  // 필요한 데이터만 정의
  type IDaumPostAPIData = {
    roadAddress: string
  }

  // =================================

  const router = useRouter();
  const store = useJoinUser();
  const name = ref('');
  const phone = ref('');
  const adressMain = ref('');
  const adressDetail = ref('');

  const nameErrorMsg = ref('');
  const phoneErrorMsg = ref('');
  const addrErrorMsg = ref('');

  // =================================
  const goBackPage = () => router.push('/signup');

  const nextStep = () => {
    // 에러 메시지 초기화
    nameErrorMsg.value = '';
    phoneErrorMsg.value = '';
    addrErrorMsg.value = '';
    
    // 인풋값 검사 체크
    if (name.value === '') {
      nameErrorMsg.value = '이름을 입력해주세요.';
    } else if(!(REG_EXP.EN_NAME_TEST(name.value) || REG_EXP.KR_NAME_TEST(name.value))){
      nameErrorMsg.value = '이름을 정확히 입력해주세요.';
    } else if (phone.value === '') {
      phoneErrorMsg.value = '전화번호를 입력해주세요.';
    } else if(!phoneValidation(phone.value)){
      phoneErrorMsg.value = '전화번호를 정확히 입력해주세요.';
    } else if (adressMain.value === '') {
      addrErrorMsg.value = '주소를 입력해주세요';
    } else {
      store.setName(name.value);
      store.setPhone(phone.value);
      store.setAddress(adressMain.value + ' ' + adressDetail.value);
      router.push('/signup/payment');
    }
  };

  const phoneValidation = (phoneNumStr:string) => {
    //문자열만 존재하는경우 최소값
    if(phone.value.length < 10) return false;
    //하이픈과 공백이 같이 들어가 있는 경우
    if(phone.value.indexOf('-') !== -1 && phone.value.indexOf(' ') !== -1) return false;
    let data = phoneNumStr.replaceAll(' ', '-');

    //하이픈이 있는경우와 없는경우 분기처리
    return data.indexOf('-') === -1 ?
      REG_EXP.PHONE_TEST(data) :
      REG_EXP.HYPHEN_PHONE_TEST(data);
  };

  const postCodeSearch = () => {
    // 다음 주소 API
    new window.daum.Postcode({
      oncomplete: (data:IDaumPostAPIData)=> {
        // console.log(data.roadAddress);
        adressMain.value = data.roadAddress;
      }
    }).open();
  };

</script>