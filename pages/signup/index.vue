<template>
  <div class="pages">
    <SignupSubHeader title="회원가입" summery="기본 정보 입력"/>

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
        <td><input v-model="passwordConfirm" type="password"/></td>
      </tr>
    </table>

    <button class="next" @click="nextStep">다음</button>
  </div>
</template>


<script lang="ts" setup>
  import { useJoinUser } from "@/stores/joinUser";
  import { useRouter } from 'vue-router';

  import "./signup.scss";
  
  import { REG_EXP } from "@/public/Utils";

  // =================================
  const router = useRouter();
  const store = useJoinUser();

  const email = ref('');
  const password = ref('');
  const passwordConfirm = ref('');

  const emailErrorMsg = ref('');
  const passwordErrorMsg = ref('');

  // =================================

  const nextStep = () => {
    // 에러 메시지 초기화
    emailErrorMsg.value = '';
    passwordErrorMsg.value = '';
    
    // 인풋값 검사 체크
    if (email.value === '') {
      emailErrorMsg.value = '이메일을 입력해주세요.';
    } else if(!REG_EXP.EMAIL_TEST(email.value)){
      emailErrorMsg.value = '이메일을 정확히 입력해주세요.';
    } else if(!REG_EXP.PASSWORD_TEST(password.value)){
      passwordErrorMsg.value = '영문 대문자, 소문자, 숫자, 특수문자를 포함한 8자리 이상의 문자열';
    } else if(password.value !== passwordConfirm.value){
      passwordErrorMsg.value = '비밀번호가 일치하지 않습니다.';
    } else {
      store.setEmail(email.value);
      router.push('/signup/delivery');
    }
  };
</script>