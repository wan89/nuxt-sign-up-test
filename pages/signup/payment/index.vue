<template>
  <div class="pages">
    <SignupSubHeader title="회원가입" summery="결제 정보 입력"/>

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
              v-for="(item,idx) in cardNumber" 
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

<!-- ======================================== scoped SCSS ======================================== -->
<style lang="scss" scoped>
  .td-card-number {
    display: flex;
    input {
      margin-right: 5px;
    }
  };
</style>

<!-- ======================================== Func ======================================== -->
<script lang="ts" setup>
  import "../signup.scss";
  import { useRouter } from 'vue-router';
  
// =================================
  const router = useRouter();

  const cardNumber = ref([
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" }
  ]);

  const cardNumErrorMsg = ref('');

// =================================
  const handleCardNumberInput = (event:Event, index:number) => {
    if(event.target){
      const target:HTMLInputElement = event.target as HTMLInputElement;
      const numericValue:string     = target.value.replace(/\D/g, '');

      cardNumber.value[index].value = numericValue;
    }
  };

  const compedStep = () => {
    const concatenatedCardNumber:string = cardNumber.value.reduce((acc, item) => acc + item.value, '');
    
    if(concatenatedCardNumber.length !== 16) {
      cardNumErrorMsg.value = '카드번호를 입력해주세요';
    }else if(!validateCardNumber(concatenatedCardNumber)){
      cardNumErrorMsg.value = '유효한 카드번호가 아닙니다.';
    }else{
      router.push('/signup/success');
    }
  };

  const validateCardNumber = (cardNumber:string) => {
    // 카드번호 유효성 검사
    // 다음 카드번호를 오른쪽부터 reverse()로 뒤집어서 배열로 만든다.
    const digits:Array<number> = Array.from(cardNumber).reverse().map(Number);
    let sum:number = 0;

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
  };



</script>