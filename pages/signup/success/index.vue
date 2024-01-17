<template>
    <div class="pages">
      <h3>{{store.name}}님, 회원가입이 완료되었습니다.</h3>
      <p>
        이메일 : {{store.email}}<br/>
        주소 : {{store.address}}<br/>
        연락처 : {{store.phone}}
      </p>
    </div>
  </template>

 <!-- ======================================== scoped SCSS ======================================== -->
  <style lang="scss" scoped>
  h3 {font-size: 32px;}
  </style>

  <!-- ======================================== scoped SCSS ======================================== -->
  <script lang="ts" setup>
    import { useJoinUser } from "@/stores/joinUser";
    import "../signup.scss";

    const store = useJoinUser();
  </script>