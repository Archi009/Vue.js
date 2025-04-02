<!-- views/CustomerList -->

<template>
  <div class="container">
  <table class="table">
    <caption>Total : {{ count }}</caption>
    <thead>
      <tr>
        <th>No</th>
        <th>name</th>
        <th>phone</th>
        <th>addr</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="count > 0">                          <!-- 태그 하나에 for directive와 if directive를 함께 사용하지 말자-->
        <tr v-for="(cus,idx) in customerList" :key="cus.id" @click="goToCustomerInfo(cus.id)">
          <td>{{ idx + 1 }}</td>
          <td>{{ cus.name }}</td>
          <td>{{ cus.phone }}</td>
          <td>{{ cus.address }}</td>
        </tr>
      </template>
      <tr v-else>
        <td colspan="4">
          현재 데이터가 존재하지 않습니다.
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
import axios from "axios";  // => AJAX

export default {
  name:'',
  components: {},
  data() {
    return {
      customerList: [],
    };
  },
  beforeCreate() {}, 
  created() {
    // 컴포넌트가 초기화할 데이터 구축
    this.getCustomerList()
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beformUnmount() {}, 
  unmounted() {}, 
  methods: {//http://localhost:3000/customers
    async getCustomerList(){
      let ajaxRes = await axios.get(`/api/customers`)
                          .catch(err => console.log(err))
      this.customerList = ajaxRes.data
    },
    goToCustomerInfo(id){
      this.$router.push({ name : 'cusInfo', query : {id}});            //router를 통해 정보를 보낼때는 $router를 사용한다     //백단과 프론트단의 라우트명을 동일하게 만들면 안된다!!!!
      // router 를 이용해서 데이터를 넘기는 두가지 방식
      // query : { key : value } => ?key=value
      // params
      // 1) route 의 path 속성 : '/target/:uId'
      // 2) params : { uId : value } => /target/value
    }
  },
  computed : {
    count(){
      return this.customerList.length
    }
  }

}
</script>