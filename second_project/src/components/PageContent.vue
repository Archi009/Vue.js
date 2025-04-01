<!-- component/PageContent-->
  <template>
  <table>
    <tr>
      <th>제목</th>
      <td>{{ title }}</td>
      <th>조회수</th>
      <td>{{ readInfo }}</td>
    </tr>
    <tr>
      <th>작성자</th>
      <td>{{ writer }}</td>
      <th>작성일자</th>
      <td>{{ regdate }}</td>
    </tr>
    <tr>
      <th>내용</th>
      <td width="200px;" height="100px">{{ content }}</td>
    </tr>
    <tr>
      <button @click="updateInfo">업데이트</button>
    </tr>
  </table>
  </template>
  <script>
  export default {
  name:'',
  //props : ['title','writer','regdate','content','count'], 배열로 대상을 받는다
  props :{
    title : String,
    count : {
      type : Number,
      default : 0
    },
    writer : {
      type : [String, Object],
      default : function(){
        return {first : 'Adward', second : 'Ian'}
      }
    },
    regdate : {
      required : true,
      validator : function(value){
        // yyyy-MM-dd
        // 정규 표현식
        let format = /[1-2][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/
        return format.test(value)
      }
    },
    content : String
  },

  components: {},
  data() {
    return {
      sampleData: ''
    };
  },
  beforeCreate() {}, 
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beformUnmount() {}, 
  unmounted() {}, 
  methods: {
    updateInfo(){//custom event의 이름은 케밥 표기법을 쓰자
      this.$emit('update-info',this.readInfo)
    }
  },
  computed : {
    readInfo(){
      return this.count + 1
    }
  }
  }
  </script>