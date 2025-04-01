<!-- components/PropsComponent.vue-->
<template>
  <div>
    <PageTitle title="First!"/>  <!--리터럴 값을 넘겨줌-->
    <!-- <PageTitle title="Today is.."/> -->
      <hr>
    <PageContent  v-bind:title="header"
                  v-bind:count="(10+15)"
                  :writer="['Adward']" 
                  :regdate="20241205"
                  :content="{
                            first :'Node.js',
                            second : 'Vue.js'
                            }"
                            />
                            <hr>
    <PageContent v-bind="info" @update-info="handler"/>
    <hr>
    <RefCom ref="child" />
    <hr>
    <label> 부모 데이터 :<input type="number" v-model="num"></label>
    <button  @click="chidHandler">자식 제어</button>
    <!--bind directive = 변수-->
  </div>
</template>
<script>
import PageTitle from './PageTitle.vue';
import PageContent from './PageContent.vue';
import RefCom from './RefComponent.vue';
export default {
  
  components: {
    PageTitle,
    PageContent,
    RefCom
  },
  data() {
    return {
      header : '게시글 조회',
      info : {
        title : 'Today is ',
        count : 5,
        writer : 'Adward',
        regdate : '2024-11-19',
        content : 'No content'
      },
      num : 0
    }
  },
  created(){
    console.log('PropComponent.vue Created');
  },
  mounted(){
    console.log('PropComponent.vue Mounted');
  },
  methods : {
    handler (readInfo){
      alert('자식 컴포넌트 요청')
      this.info.count = readInfo
      // 자식 컴포넌트의 emit을 기반으로 넘긴 데이터가 매개변수로 넘어옴
    },
    chidHandler(){
      // 1) 자식 컴포넌트의 함수 직접 호출
      this.$refs.child.plusCount()
      // 2) 자식 컴포넌트의 태그에 직접 접근
      let RefCom = this.$refs.child
      RefCom.$refs.btn.click()
    }
  },
  watch:{
    num(){
       this.$refs.child.content = this.num
    }
  }
}
</script>