<!-- views/CustomerAdd.vue -->
 <template>
  <div class="container">
    <div class="row">
      <label >이름</label>
      <input type="text" v-model="info.name" >
      <div class="form-text text-success" :class="{'warning':!nameOk}">
        등록가능한 이름입니다.
      </div>
      <div class="form-text text-danger" :class="{'warning':nameOk}">
        이름이 입력되지 않았습니다.
      </div>
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
      <button class="btn btn-info" @click="addCustomer" :disabled="!nameOk">등록</button>
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
        name : null,
        email : null,
        phone : null,
        address : null,
      }
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
    async addCustomer(){
    let ajaxRes =  await axios.post(`/api/customers`, this.info)
                              .catch(err => console.log(err))
      let sqlRes = ajaxRes.data
      let custId = sqlRes.insertId;                   //Auto increament사용시 
      if(custId > 0){
        alert('정상작동 되었습니다.')
        this.$router.push({name:'cusInfo',query:{id:custId}})
      }else{
        alert('작동되지 않았습니다.')
      }
    }
  },
  computed : {
    nameOk(){
      return this.info.name != null && this.info.name != '';
    }
  }
 }
 </script>
 <style>
  .warning{
    display: none;
  }
</style>