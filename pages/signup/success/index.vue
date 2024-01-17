<template>
    <div class="pages">
      <h3>{{store.name}}님,<br/>회원가입이<br/>완료되었습니다.</h3>
      <p>
        이메일 : {{store.email}}<br/>
        주소 : {{store.address}}<br/>
        연락처 : {{store.phone}}
      </p>
    </div>
  </template>

 <!-- ======================================== scoped SCSS ======================================== -->
  <style lang="scss" scoped>
    h3 {font-size: 35px; width: 100%; text-align: center;}
    p { text-align: center;}
  </style>

  <!-- ======================================== scoped SCSS ======================================== -->
  <script lang="ts" setup>
    import { useJoinUser } from "@/stores/joinUser";
    import { useRouter } from 'vue-router';
    import "../signup.scss";

    const router = useRouter();
    const store = useJoinUser();

    onMounted(()=>{
      if(store.name==='' || store.email==='' || store.address==='' || store.phone===''){
        alert("잘못된 접근입니다");
        router.push('/signup');
      }
    });
  </script>