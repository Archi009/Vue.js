<!-- views/TextModal.vue-->
 <template>
  <Layout>
    <template v-slot:header>
      <h1>팝업 제목</h1>
    </template>

    <!--이름 없는 슬롯을 불러 올때는 default-->
    <template v-slot:default>
      <p>컨텐츠</p>
      <p>컨텐츠2</p>
    </template>
    <template v-slot:footer>
      <button type="button">닫기</button>
    </template>
  </Layout>
 </template>
 <script>
 import Layout from './ModalLayout.vue';
 export default {
  name:'',
  components: { Layout },
  data() {
    return {
      sampleData: ''
    };
  },
  
  methods: {}
 }
 </script>