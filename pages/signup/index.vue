<template>
    <div class="pages">
        <div class="contents-title">
            <h2>회원가입</h2>
            <p>개인정보 입력</p>
        </div>
  
      <table>
        <tr>
          <td>이메일</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td><input type="password"/></td>
        </tr>
        <tr>
          <td>비밀번호 확인</td>
          <td><input type="password"/></td>
        </tr>
      </table>
  
      <button class="next">다음</button>
    </div>
  </template>
  
  <script>
  import "./signup.scss";

  export default {
    mounted(){
      
    },
    methods: {
    },
  }
  </script>