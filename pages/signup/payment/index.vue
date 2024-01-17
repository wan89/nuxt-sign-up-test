<template>
    <div class="pages">
      <div class="contents-title">
        <h2>회원가입</h2>
        <p>결재정보 입력</p>
      </div>
  
      <table>
        <tr>
          <td colspan="2">
            <p>카드번호</p>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="td-card-number">
            <input type="text"/><input type="text"/><input type="text"/><input type="text"/>
          </td>
        </tr>
      </table>
  
      <button class="next">다음</button>
    </div>
  </template>
  <style lang="scss" scoped>
  .td-card-number {
    display: flex;
    input {
      margin-right: 5px;
    }
  };
</style>
  <script>
  import "../signup.scss";
  
  export default {
    mounted(){
      
    },
    methods: {
    },
  }
  </script>