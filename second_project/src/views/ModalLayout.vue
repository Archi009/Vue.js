<!--views/ModalLayout.vue-->

<template>
 <div class="modal-container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
 </div>
</template>
<script>
export default {
  name:'',
  components: {},
  data() {
    return {
      sampleData: ''
    };
  },
  methods: {}
}
</script>
<style scoped>
.modal-container{
  text-align: center;
  max-width: 40em;
  padding: 2em;
}
</style>