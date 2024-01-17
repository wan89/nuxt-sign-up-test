<template>
    <div class="pages">
      <div class="contents-title">
        <h2>회원가입</h2>
        <p>배송지정보 입력</p>
      </div>
  
      <table>
        <tr>
          <td>이름</td>
          <td><input type="text" placeholder="이름"/></td>
        </tr>
        <tr>
          <td>연락처</td>
          <td><input type="phone" placeholder="연락처"></td>
        </tr>
        <tr>
          <td colspan="2">
            <p>주소</p>
            <button onclick="">배송지 찾기</button>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="text"/>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="text"/>
          </td>
        </tr>
      </table>

      <div class="step-btns">
        <button class="prev">이전</button>
        <button class="next">다음</button>
      </div>
    </div>
  </template>
  
  <script>
  import "../signup.scss";
  
  export default {
    mounted(){
      
    },
    methods: {
    },
  }
  </script>