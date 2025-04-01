<template>
  <div>
    <input type="text" v-model.lazy="selected">
    <component v-bind:is="selected"></component>                <!-- 동적 컴포넌트--><!-- is : 자식 컴포넌트 중 출력하고 싶은 컴포넌트의 이름-->
    <!-- <PropsCom/>      정적 컴포넌트 -->
  </div>
</template>
<script>
import PropsCom from './components/PropComponent.vue';
import TextModal from './views/TextModal.vue';
export default {
  // name:'',
  data() {
    return {
      selected : 'PropsCom',
    };
  },
  components: { 
    PropsCom, //       'PropsCom' : PropsCom 
    TextModal
  },
  created(){
    console.log('App.vue Created');
  },
  mounted(){
    console.log('App.vue Mounted');
  }
}
</script>