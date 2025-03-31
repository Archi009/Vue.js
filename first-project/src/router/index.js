import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 컴포넌트 추가 2) 페이지 단위로 호출
// @ = src기준 절대경로
import ListBinding from '@/views/ListBinding.vue'
import DataBinding from '@/views/DataBinding.vue'
import IfBinding from '@/views/IfBinding.vue'

const routes = [ //라우터 등록!=> 컴포넌트화 , 라우터 링크화 가능!!!!!
  {
    path: '/',  // 접속 경로
    name: 'home', // 라우터 이름
    component: HomeView // 출력할 컴포넌트
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/dataBinding',
    name : 'dataBinding',
    component : DataBinding
  },
  {
    path : '/listBinding',
    name : 'listBind',
    component : ListBinding
  },
  {
    path : '/ifBinding',
    name : 'ifBind',
    component : IfBinding
  }  
]

const router = createRouter({  //vue router 를 생성하는 함수
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
