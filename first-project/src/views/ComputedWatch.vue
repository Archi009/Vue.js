<!-- views/ComputedWatch.vue-->
 <template>
  <div>
    <input type="number" v-model="price">원
    <br>
    <input type="number" v-model="count">개
    <p>과세 금액 : {{ amount }}</p>
    <p>부가세 10% : {{ tax }}</p>
    <p>결제 금액 : {{ total }}</p>
    <p :class="{'warn' : isShow}">결제 금액이 5만원을 초과 했습니다.</p>
  </div>
 </template>
 <script>
  export default {
    data(){
      return {
        price : 0,
        count : 0,
        isShow : true
      }
    },
    computed : {  // 함수형식으로 썼지만 결국 변수에 return 값을 담는것과 다름 없다.
      amount(){
        return this.price * this.count
      },
      tax() {
        // 자바스크립트는 숫자 계산에 잼병이다.
        return this.amount * 0.1
      },
      total(){
        return this.amount + this.tax
      }
    },
    watch : {
      total(){                                         //watch의 감시대상과 함수 이름이 같아야 한다.
        if(this.total >50000){
          this.isShow = false
        }else{
          this.isShow = true
        }
      }
    }
  }
</script>
<style>
  .warn{
    display: none;
  }
</style>