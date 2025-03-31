// main.js
import { createApp } from 'vue' //최상위객체(root)생성                  //import 는 node가 가지고있는 require과 같은 개념
//  Root Vue 객체 정의 파일 가져오기
import App from './App.vue'     //  vue로 끝나는 파일들 = 하나하나가 component

// import App from './components/CommonComponent.vue' test용
// Vue Router 가져오기
import router from './router'

createApp(App)
.use(router)      
.mount('#app')    // 실제 DOM 에 연결하는 순간 ../../public/index.html ('#app')의 위치
