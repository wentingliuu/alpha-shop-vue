import Vue from 'vue'
import Router from 'vue-router'
import Checkout from '../views/Checkout.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkout'
  },
  {
    path: '/checkout',
    name: 'check-out',
    component: Checkout
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new Router({
  routes
})

export default router
