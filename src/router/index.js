import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/red',
    name: 'Red',
    component: () => import(/* webpackChunkName: "about" */ '../views/Red.vue')
  },
  {
    path: '/Yellow',
    name: 'Red',
    component: () => import(/* webpackChunkName: "about" */ '../views/Yellow.vue')
  },
  {
    path: '/Green',
    name: 'Red',
    component: () => import(/* webpackChunkName: "about" */ '../views/Green.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
