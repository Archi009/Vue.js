import { createRouter, createWebHistory } from 'vue-router'
import Cus from '@/views/CustomerList.vue'
import CusInfo from '@/views/CustomerInfo.vue'
import CusAdd from '@/views/CustomerAdd.vue'
import CusMod from '@/views/CustomerUpdate.vue'
// query 방식은 ? 를 통해서 경로와 값이 구분된다.
// param 방식은 파라매터도 경로값에 포함 되기때문에 반드시 값이 필요한 경우에만 쓴다.
const routes = [
 
  {
    path : '/',
    redirect: {name : 'cus'}
    
  } 
,
  {
    path : '/cus',
    name : 'cus',
    component : Cus
  },
  {
    path : '/cusInfo',
    name : 'cusInfo',
    component : CusInfo
  },
  {
    path : '/cusAdd',
    name : 'cusAdd',
    component : CusAdd
  },
   {
    path : '/cusMod/:custId',
    name : 'cusMod',
    component : CusMod
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
