<!-- views/CustomerInfo.vue -->
 <template>
  <div class="container text-center">
    <!-- content영역 -->
    <div class="row">
      <div class="row">
        <div class="col-4">아이디</div>
        <div class="col-8">{{ customer.id }}</div>
      </div>
      <div class="row">
        <div class="col-4">이름</div>
        <div class="col-8">{{ customer.name }}</div>
      </div>
      <div class="row">
        <div class="col-4">이메일</div>
        <div class="col-8">{{ customer.email }}</div>
      </div>
      <div class="row">
        <div class="col-4">연락처</div>
        <div class="col-8">{{ customer.phone }}</div>
      </div>
      <div class="row">
        <div class="col-4">주소</div>
        <div class="col-8">{{ customer.address }}</div>
      </div>
    </div>
    <!-- 버튼 영역 -->
    <div class="row  gx-5">
      <button class="col btn btn-info" @click="goToUpdateInfo">
        수정
      </button>
      <button class="col btn btn-success" @click="toToCustomerList">
        목록
      </button>
      <button class="col btn btn-danger" @click="delInfo">
        삭제
      </button>
    </div>
  </div>
</template>
 <script>
import axios from 'axios'
import CustomerUpdate from './CustomerUpdate.vue' 
export default {
  name:'',
  components: {
    CustomerUpdate
  },
  data() {
    return {
      customer: {}
    };
  },
  beforeCreate() {}, 
  created() {
    const selectId = this.$route.query.id;  //router를 통해서 정보를 받을 때는 $route라고 받는다.
    
    this.getCustomerInfo(selectId)
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beformUnmount() {}, 
  unmounted() {
    
  }, 
  methods: {
    async getCustomerInfo (id){
      let ajaxRes = await axios.get(`/api/customers/${id}`)
                            .catch(err=>console.log(err))
           this.customer= ajaxRes.data
    },
    goToUpdateInfo(){
    this.$router.push({name : 'cusMod',params : {custId : this.customer.id}})
    },
    toToCustomerList(){
      this.$router.push('/cus')  //path값으로 이동시키는 클래식한 방식
    },
    async delInfo(){
      if(confirm(`삭제하시겠습니까?\n 진행하면 복구 되지 않습니다.`)){
        let ajaxRes = await axios.delete(`/api/customers/${this.customer.id}`)
                            .catch(err=>console.log(err))
      let result = ajaxRes.data
        if(result.affectedRows>0){
        this.$router.push({name : 'cus'})
       
      }else{
        alert('삭제가 되지 않았습니다.')
      }
       }else{
        return
       }
     
      
    }
  }
 }
 </script>