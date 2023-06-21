import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import PersonalData from '@/views/PersonalData'
import Address from '@/views/Address'
import Password from '@/views/Password'
import Success from '@/views/Success'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/new-account',
    name: 'new-account',
    component: PersonalData
  },
  {
    path: '/address',
    name: 'address',
    component: Address
  },
  {
    path: '/password',
    name: 'password',
    component: Password
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
