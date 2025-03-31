<!-- views/DataBinding.vue-->
 <template>
  <!--HTML-->
  <div>
    <!--이중괄호-->
    <h1>{{ title }}</h1>
    <!-- directive : Vue 의 명령 수행, 'v-' 접두어 사용-->
    <h2 v-text="title" id="home"></h2>
    <p v-html="tagList"></p>
    <p v-text="tagList" v-bind:name="tagName"></p> <!-- bind directive 가 모든 directive의 원형이다. (ex: v-bind:html="" == v-html="") -->
    <!-- v-bind directive : 단방향 바인딩 -->
    <!-- v-model directive : 양방향 바인딩-->
     <!-- 실시간으로 변형 -->
     <input type="text" v-model="valueModel">
     <p>{{ valueModel + 1000 }}, {{ typeof valueModel }}</p> <!-- input의 기본 값은 String -->

     <input type="number" v-model.lazy="numberModel">         <!-- lazy : 강제 지연 ; focus이동이나 enter 이후 작동-->
     <p>{{ numberModel + 1000 }}, {{ typeof numberModel }}</p> 

     <select v-model="selectModel">
      <option value="summer">여름</option>
      <option value="winter">겨울</option>
     </select>
     <p>{{ selectModel }}</p>

     <textarea v-model="textModel"></textarea>

     <hr>
     <input type="checkbox" v-model="chData" true-value="여" false-value="부">
     <p>{{ chData }}</p>

     <div><!--여러개의 체크박스가 v-model로 묶였을때 체크 박스의 값은 덮어 쓰는게 아니라 배열로 묶인다-->
      <input type="checkbox" v-model="city" value="서울" >서울
      <input type="checkbox" v-model="city" value="대구" >대구
      <p>{{ city }}</p>
    </div>

    <div>
      <input type="radio" v-model="hobby" value="Reading">독서
      <input type="radio" v-model="hobby" value="Movie">영화
      <input type="radio" v-model="hobby" value="Sports">운동
      <p>{{ hobby }}</p>
    </div>

    <img v-bind:style="styleData" v-bind:src="imgUrl">

    <img v-bind:style="backSetting" v-bind:src="imgUrl">

    <div class="container" v-bind:class="myClass">Class Binding Second</div> <!-- 여러개의 값을 가질 수 있기때문에 일반 class binding class  둘 다 적용된다. ( 고정 스타일을 하나 적용하고 변화 시킬 값을 따로 하나 지정 가능)-->
    
    <div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}">Class Binding First</div>
  </div>
 </template>
 <script>
  //Vue 객체의 데이터, 기능
 export default {
  data(){ // 데이터 바인딩에 사용하는 데이터들 (CRUD)
    return{
    title : 'Hello, Vue.js',
    tagList : '<strong>Today is ...</strong>',
    tagName : 'bindTest',
    valueModel : 'Korea',
    numberModel : 0,
    selectModel : 'winter',
    textModel : '백견불려일타',
    chData : '여',
    city : [],    //받아 주는 변수에 []배열 선언
    hobby : '',
    styleData : {
      // 'background-color' : 'skyblue' //파스칼 표기법 말고 카멜표기법 쓰자
      backgroundColor : 'red',
      width : '200px',
    },
    backSetting : 'background-color : skyblue; width : 200px;',   //세세한 변경이 안되기 때문에 지양한다.
    imgUrl : 'https://kr.vuejs.org/images/logo.png',
    isActive : false,
    // hasError : !this.isActive,
    myClass : 'active'
    }
  },
  computed : {
    hasError : function(){
      return  !this.isActive
    }
  },
 
 }

</script>
 <style>
  /*CSS*/
  .text-red{
    color: red;
  }
  .container{
    width : 100%;
    height : 200px;
  }
  .active{
    background-color: aquamarine;
    font-weight: bold;
  }
</style>