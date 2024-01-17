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
          <td colspan="2" >
            <div class="td-card-number">
              <input 
                type="text" 
                maxlength="4" 
                v-for="(item,idx) in this.cardNumber" 
                @input="handleCardNumberInput($event, idx)"
                v-model="item.value" 
                :key="idx" >
            </div>
            <a v-if="cardNumErrorMsg !== ''">{{ cardNumErrorMsg }}</a>
          </td>
          
        </tr>
      </table>
  
      <button class="next" @click="compedStep">다음</button>
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
  <script lang="ts">
  import "../signup.scss";
  
  export default {
    data() {
    return {
      
      cardNumber: [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" }
      ],

      cardNumErrorMsg: '',
    };
  },
    mounted(){
      
    },
    methods: {
      handleCardNumberInput(event, index) {
        const numericValue = event.target.value.replace(/\D/g, '');
        this.cardNumber[index].value = numericValue;
      },
      compedStep() {
        const concatenatedCardNumber:string = this.cardNumber.reduce((acc, item) => acc + item.value, '');
        if(concatenatedCardNumber.length !== 16) {
          this.cardNumErrorMsg = '카드번호를 입력해주세요';
        }else if(!this.validateCardNumber(concatenatedCardNumber)){
          this.cardNumErrorMsg = '유효한 카드번호가 아닙니다.';
        }else{
          this.$router.push('/signup/success');
        }
      },

      validateCardNumber(cardNumber) {
        // 카드번호 유효성 검사
        // 다음 카드번호를 오른쪽부터 reverse()로 뒤집어서 배열로 만든다.
        const digits = Array.from(cardNumber).reverse().map(Number);
        let sum = 0;

        for (let i = 0; i < digits.length; i++) {
          let digit = digits[i];

          if (i % 2 === 1) {
            // 짝수번째 자리수의 숫자들은 예외처리, 2를 곱한다.
            digit *= 2;

            if (digit > 9) {
              // 만약 2를 곱한 수가 9 이상일 경우 각각의 자리수의 값을 더한다.
              digit = digit.toString().split('').reduce((acc, val) => acc + Number(val), 0);
            }

          }
          // 결과값 변수에 더한다
          sum += digit;
        }
        console.log(sum);
        // 결과값이 10으로 나누어 떨어지면 유효한 카드번호이다.
        return sum % 10 === 0;
      }
    },
  }
  </script>