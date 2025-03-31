<!-- views/IfBinding--> 
<template>
  <div>
    <input type="number" v-model="grade">
    <p v-if="grade >= 90">성적 : A</p>           <!--if directive는 연속적으로 사용해야지만 된다.-->
    <p v-else-if="grade >= 80">성적 : B</p>
    <p v-else-if="grade >= 70">성적 : C</p>
    <p v-else>성적 : D</p>
    <hr>
    <input type="checkbox" v-model="chData">동의 여부
    <button v-show="chData">다음단계로 진행</button>
    <!--  하나의 (공간을 차지한)고정된 위치값이 있고 내용물을 바꿔 대상을 갈아끼울때는 v-if, 없던값을 생기게(보이게) 하는 것은  v-show-->
</div>
</template>
<script>
  export default{
    data(){
      return {
        grade : 50,
        chData : false
      }
    }
  }
</script>
<style>
</style>