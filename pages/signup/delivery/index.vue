<template>
    <div class="pages">
      <div class="contents-title">
        <h2>회원가입</h2>
        <p>배송지정보 입력</p>
      </div>
  
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
  
  <script>
  import "../signup.scss";
  
  export default {
    head: {
      title: '회원가입 - 배송지정보 입력',
      meta: [
        { charset: 'utf-8' }, 
        { name: 'viewport', content: 'width=750,user-scalable=no,target-densitydpi=device-dpi' },
        { hid: 'description', name: 'description', content: '소개 문구' },
        { name: 'title', content: '타이틀' },
        { name: 'keywords', content: '키워드' }
      ],
    },
    data() {
      return {
        name: '',
        nameErrorMsg: '',
        phone: '',
        phoneErrorMsg: '',
        adressMain: '',
        adressDetail: '',
        addrErrorMsg: ''
      };
    },
    mounted(){
      
    },
    methods: {
      nextStep() {
        // 에러 메시지 초기화
        this.nameErrorMsg = '';
        this.phoneErrorMsg = '';
        this.addrErrorMsg = '';
        
        // 인풋값 검사 체크
        if (this.name === '') {
          this.nameErrorMsg = '이름을 입력해주세요.';
        } else if(!this.isValidName(this.name)){
          this.nameErrorMsg = '이름을 정확히 입력해주세요.';
        } else if (this.phone === '') {
          this.phoneErrorMsg = '전화번호를 입력해주세요.';
        } else if(!this.isValidPhone(this.phone)){
          this.phoneErrorMsg = '전화번호를 정확히 입력해주세요.';
        } else if (this.adressMain === '') {
          this.addrErrorMsg = '주소를 입력해주세요';
        } else {
          this.$router.push('/signup/payment');
        }

        
      },

      isValidName(name){
        const koreanRegex = /^[가-힣]{2,}$/;
        const englishRegex = /^[a-zA-Z]{3,}$/;
        // console.log(koreanRegex.test(name), englishRegex.test(name))

        return koreanRegex.test(name) || englishRegex.test(name);
      },

      isValidPhone(phone){
        if(phone.length < 10) return false;
        const phoneRegex = /^0\d{1,3}[-\s]?(\d{3,4}[-\s]?\d{4})$/;
        
        return phoneRegex.test(phone)
      },

      goBackPage() {
        this.$router.go('/signup');
      },

      postCodeSearch(){
        new daum.Postcode({
          oncomplete: (data)=> {
            console.log(data.roadAddress);
            this.adressMain = data.roadAddress;
            
          }
        }).open();
      }
    },
  }
  </script>