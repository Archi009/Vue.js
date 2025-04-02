<!-- views/CustomerUpdate.vue -->
 <template>
   <div class="container">
    <div class="row">
      <label >아이디</label>
      <input type="text" v-model="info.id" readonly>
    </div>
    <div class="row">
      <label >이름</label>
      <input type="text" v-model="info.name" >
    </div>
    <div class="row">
      <label >이메일</label>
      <input type="text" v-model="info.email">
    </div>
    <div class="row">
      <label >연락처</label>
      <input type="text" v-model="info.phone">
    </div>
    <div class="row">
      <label >주소</label>
      <input type="text" v-model="info.address">
    </div>
    <div class="row">
      <button class="btn btn-info" @click="udateCustomer">수정</button>
    </div>
  </div>
 </template>
 <script>
 import axios from 'axios'
 export default {

  name:'',
  components: {},
  data() {
    return {
      info:{
        id : null,
        name : null,
        email : null,
        phone : null,
        address : null,
      }
    };
  },
  beforeCreate() {}, 
  created() {
    // 수정 1) 사용자가 선택한 대상의 원래 데이터 조회
    // => 단건조회
    const selectId = this.$route.params.custId;
    this.getCustomerInfo(selectId)
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beformUnmount() {}, 
  unmounted() {}, 
  methods: {
    async udateCustomer(){
      // 수정 2) 사용자가 버튼을 클릭했을 때 서버에 전송
      // =>등록
      let updateData = {
        name : this.info.name,
        email : this.info.email,
        phone : this.info.phone,
        address : this.info.address
      }
    let ajaxRes =  await axios.put(`/api/customers/${this.info.id}`, updateData)
                              .catch(err => console.log(err))
      let sqlRes = ajaxRes.data
      console.log(sqlRes);
      let affectedRows = sqlRes.affectedRows;                   //Auto increament사용시 
      if(affectedRows > 0){
        alert('정상작동 되었습니다.')
      }else{
        alert('작동되지 않았습니다.')
      
    }
    },
    async getCustomerInfo (id){
      let ajaxRes = await axios.get(`/api/customers/${id}`)
                            .catch(err=>console.log(err))
      this.info = ajaxRes.data
    }
  }
 }
 </script>