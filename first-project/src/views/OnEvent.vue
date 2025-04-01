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
      //alt+ enter 를 눌렀을 때 data msg 값을 빈값으로 만든다.
      clear(){
        this.msg =''
      },
      //이벤트 버블링 : 클릭시 돔을 따라 이벤트가 전파된다.
      mesg(str){
        alert(str)
      },
      //클릭시 변수 대채식 함수로 실행 counter  변수를 1씩 증가 시킨다.
      increasCounter(event){
        console.log('increase',event);
        this.counter++
      },
      // 클릭 함수 내부에서 value 값과 $event  대상을 받아서 카운터에다 value  값을 더한다( 여기산  num  값을 받아오는데 값이 6으로 지정 돼있기 때문에 6씩 증가)
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