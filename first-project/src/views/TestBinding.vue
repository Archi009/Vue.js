<!-- views/TestBinding-->
 <template>
  <div>
  <h1>{{ title }}</h1>
  <p v-text="title"></p>
  <hr>
  <p v-html="tagList"></p>
  <p v-text="tagList" v-bind:name="tagName"></p>
    <hr>
    <p>--------------------v-model-----------------------</p>
  <input type="text" v-model="valueModel">
  <p>{{ valueModel }}, {{ typeof valueModel }}</p>
  <input type="number" v-model.lazy="numberModel">
  <p>{{ numberModel +1000 }}, {{ typeof numberModel }}</p>

  <select v-model="selectModel">
    <option value="summer">여름</option>
    <option value="winter">겨울</option>
  </select>
  <h2>{{ selectModel }}</h2>
  <textarea v-model="textModel"></textarea>

  <hr>
  <div>
  <input type="checkbox" v-model="city" value="서울">서울
  <input type="checkbox" v-model="city" value="대구">대구
  <input type="checkbox" v-model="city" value="구미">구미
  <input type="checkbox" v-model="city" value="서산">서산
  <p>{{ city }}</p>
</div>
<input type="checkbox" v-model="cData" >
<p>{{ cData }}</p>
<input type="checkbox" v-model="chData"  true-value="참" false-value="거짓">
<p>{{ chData }}</p>
<div>
<input type="radio" v-model="hobby" value="Reading">독서
<input type="radio" v-model="hobby" value="Movie">영화
<input type="radio" v-model="hobby" value="Jogging">조깅
 <p>{{ hobby }}</p>
</div>
<img v-bind:style="styleData" v-bind:src="imgUrl">
<img v-bind:style="backSetting" v-bind:src="imgUrl">

<div class="container" v-bind:class="myClass">Class Binding Second</div> 
    
<div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}">Class Binding First</div>
 
</div>
 </template>
 <script>
export default{
  data(){
    return{
      title : '연습문제',
      tagList : '<strong> Today is ....</strong>',
      tagName : 'bindTest',
      valueModel : 'v-model',
      numberModel : 0,
      selectModel : 'winter',
      textModel : '백견불여일타',
      city : [],
      hobby : '',
    cData : false,
    chData : false,
    styleData : {
      // 'background-color' : 'skyblue' //파스칼 표기법 말고 카멜표기법 쓰자
      backgroundColor : 'red',
      width : '200px',
    },
    backSetting : 'background-color : skyblue; width : 200px;',   //세세한 변경이 안되기 때문에 지양한다.
    imgUrl : 'https://kr.vuejs.org/images/logo.png',
    isActive : false,
    myClass : 'active'
    }
  },
  computed: {
    hasError : function(){
      return !this.isActive
    }
  }
}
</script>
