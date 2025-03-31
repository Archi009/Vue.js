<template>         <!--화면은 있지만 데이터가 없어 script구문이 필요 없었다.-->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/databinding">databinding</router-link>|
    <router-link :to="{name : 'listBind'}">listbinding</router-link>| <!--<router-link v-bind:to="{name : 'listbinding'}">listbinding</router-link> 앞의 것과 같다 -->
    <router-link :to="{name : 'ifBind'}">ifbinding</router-link>
  </nav>
  <router-view/>  <!-- 호출한 라우터를 불러 오는 곳 -->
  <hr>
  <!-- <DataBinding/> -->
  <!-- <DataBinding/> -->
   <test-binding/>
</template>
<script>
// 컴포넌트 추가 1) 자식 컴포넌트로 등록
// => 특정 페이지의 조각을 구성
import DataBinding from './views/DataBinding.vue';
import TestBinding from './views/TestBinding.vue'
export default{
  components : {  //페이지를 구성하는 컴포넌트들을 담는다.
    DataBinding,                   //자식컴포넌트로 등록할 경우 이를 태그처럼 인식한다.
    TestBinding
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
