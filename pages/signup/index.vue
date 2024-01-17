<template>
    <div class="pages">
        <div class="contents-title">
            <h2>회원가입</h2>
            <p>개인정보 입력</p>
        </div>
  
      <table>
        <tr>
          <td>이메일</td>
          <td>
            <input type="email" v-model="email" />
            <a v-if="emailErrorMsg !== ''">{{ emailErrorMsg }}</a>
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input v-model="password" type="password"/>
            <a v-if="passwordErrorMsg !== ''">{{ passwordErrorMsg }}</a>
          </td>
        </tr>
        <tr>
          <td>비밀번호 확인</td>
          <td><input v-model="rePassword" type="password"/></td>
        </tr>
      </table>
  
      <button class="next" @click="nextStep">다음</button>
    </div>
  </template>
  
  <script lang="ts">
  import "./signup.scss";

  export default {
    data() {
      return {
        email: '',
        emailErrorMsg: '',
        password: '',
        rePassword: '',
        passwordErrorMsg: '',
      };
    },
    mounted(){
      
    },
    methods: {
      isValidPW(password) {
        // 비밀번호 유효성 검사 
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
        return passwordRegex.test(password);
      },
      isValidEmail(email: string) {
        // 이메일 유효성 검사 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
      nextStep() {
        // 에러 메시지 초기화
        this.emailErrorMsg = '';
        this.passwordErrorMsg = '';
        
        // 인풋값 검사 체크
        if (this.email === '') {
          this.emailErrorMsg = '이메일을 입력해주세요.';
        } else if(!this.isValidEmail(this.email)){
          this.emailErrorMsg = '이메일을 정확히 입력해주세요.';
        } else if(!this.isValidPW(this.password)){
          this.passwordErrorMsg = '영문 대문자, 소문자, 숫자, 특수문자를 포함한 8자리 이상의 문자열';
        } else if(this.password !== this.rePassword){
          this.passwordErrorMsg = '비밀번호가 일치하지 않습니다.';
        } else {
          this.$router.push('/signup/delivery');
        }
      },
    },
  }
  </script>