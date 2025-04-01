<!-- componemts/PageTitle.vue-->
<template>
  <h2>{{ title }}</h2>
</template>
<script>
export default {
  /*components: {},
    data() {
      return {
        title: 'Hello, World!'
      };
    },*/
  props : ['title'],                   //부모가 넘겨준 값 Read Only
  created(){
    console.log('PageTitle.vue Created');
  },
  mounted(){
    console.log('PageTitle.vue Mounted');
  }
}
</script>