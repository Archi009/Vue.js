<!-- component/RefComponent.vue-->
 <template>
  <div>
    <input type="text" v-model.number="content">
    <p>{{ content }}</p>
    <button ref="btn" @click="plusCount">더하기</button>
  </div>
 </template>
 <script>
 export default {
  name:'',
  components: {},
  data() {
    return {
    content : '',
    };
  },
  beforeCreate() {}, 
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.$refs.btn); //ref를 통해서 태그 자체에 접근 할 수 있다.
    this.$refs.btn.click()
  },
  beforeUpdate() {},
  updated() {},
  beformUnmount() {}, 
  unmounted() {}, 
  methods: {
    plusCount(){
      // alert('버튼을 클릭했습니다.')
      if((typeof this.content)=='number'){
        let sum=this.content + 100
        this.content = sum
      }else{
        alert('데이터 타입이 숫자가 아닙니다.')
      }
    }
  }
 }
 </script>