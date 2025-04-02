<template >
  <!-- Header Component -->
   <Deheader/>
  <router-view/>
  <!-- Footer Component -->
</template>

<script>
import Deheader from '@/layouts/DefaultHeader.vue'

export default {
  components:{
    Deheader
  }
}
</script>


