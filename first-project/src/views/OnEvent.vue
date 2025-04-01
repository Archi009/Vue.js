<!--views/OnEvent.vue-->
<template>
  <div>
    <input v-model="msg" v-on:keyup.alt.enter="clear();">
    <p>{{ msg }}</p>
  </div>
  <hr>
  <form v-on:click.self="mesg('form')">                                       <!-- self : 스스로의 이벤트만 동작-->
    Form
    <div v-on:click.once="mesg('div')">                                       <!-- once : 단 한 번 동작-->
      Div
      <p @click.stop="mesg('p')">                                             <!-- 이벤트 버블링 차단-->
        P
        <a @click.prevent="mesg('a')" href="http://www.naver.com">네이버</a>  <!--prevent를 설정시 이 후 이벤트의 발생을 막는다. (ex href)-->
      </p>
    </div>
  </form>
  <hr>
  <button @click="increasCounter">Add 1</button>                       <!--추가 적인 매개변수 지정이 불가능한 onclick함수의 내용을 대체-->
  <br>
  <button @click="setCount(num,$event)">Add {{ num }}</button>         <!--추가 적인 매개변수 지정 가능! onclick 함수 내부에 함수지정-->
  <p>The Counter is : {{ counter }}</p> 

</template>
<script>
  export default{
    data(){  //데이터 (CRUD) => 프로퍼티
      return{
        msg : '',
        num : 6,
        counter : 0
      }
    },
    methods : {
      clear(){
        this.msg =''
      },
      mesg(str){
        alert(str)
      },
      increasCounter(event){
        console.log('increase',event);
        this.counter++
      },
      setCount(value, event){
        console.log('setCount',event);
        this.counter += value
      }

    }
  }
</script>
<style scoped>
form, form * {
  margin: 10px;
  border: 1px solid rebeccapurple;
}
</style>