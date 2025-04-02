<!-- layouts/DefaultHeader.vue -->
 <template >
   <nav class="container justify-content-center nav">
     <router-link class="nav-link"  to="/">Home</router-link> | 
     <router-link class="nav-link" :to="{ name : 'cus'}">전체조회</router-link> | 
     <router-link class="nav-link" :to="{ name : 'cusInfo'}">단건조회</router-link> | 
     <router-link class="nav-link" :to="{ name : 'cusAdd'}">등록</router-link> 
   </nav>
 </template>