import Vue from 'vue'
import VueRouter from 'vue-router'
import Green from '../views/Green.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Green',
    component: Green
  },
  {
    path: '/red',
    name: 'Red',
    component: () => import('../views/Red.vue')
  },
  {
    path: '/Yellow',
    name: 'Yellow',
    component: () => import('../views/Yellow.vue')
  },
  {
    path: '/Green',
    name: 'Green',
    component: () => import('../views/Green.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
