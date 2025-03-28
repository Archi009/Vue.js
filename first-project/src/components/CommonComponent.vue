<!-- components/CommonComponent.vue-->
 <template>
  <!-- Component 가 가지는 HTML-->
   <p>{{ year }}년 {{ month }}월 {{ day }}일</p>
   <p>다음해 {{ afterYear }}</p>
 </template>
 <script>
    
    // Component 를 관리하는 Vue 객체 정의 : DATA 포함
  export default {
    // (OPTIONS)
    data(){ // 데이터 (CRUD) => 프로퍼티 (vue가 다뤄야 하는 대상들)
      let today = new Date()
      return {
        year : today.getFullYear(),
        month : today.getMonth() +1,
        day : today.getDate()
      }
    },
    computed : { // 기존 데이터를 기반으로 연산한 결과값 (Read Only)
                  // => 프로퍼티 
        afterYear(){ // afterYear : function(){}
          return this.year + 1  // 사실 this.data.year 이지만 data와 computed는 생략 가능
        }
    },
    methods : {  // Vue가 사용하는 모든 종류의 함수  : 값을 가지고 AJAX 통신을 진행할 수도 있음

    },
    watch : {   // 데이터 변경에 따른 추가 작업 정의
      month(){
        if(this.moth < 10){
          this.month = '0' + this.month;
        }
      }
    }
  }

</script>
 <style scoped>
  /* Component가 가지는 Style */
</style>