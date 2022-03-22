import Vue from 'vue'
import Router from 'vue-router'
import Checkout from '../views/Checkout.vue'
import NotFound from '../views/NotFound.vue'
import store from './../store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkout/1'
  },
  {
    path: '/checkout',
    name: 'check-out',
    component: Checkout,
    children: [
      {
        path: '1',
        name: '1',
        component: () => import('../components/FormOne.vue')
      },
      {
        path: '2',
        name: '2',
        component: () => import('../components/FormTwo.vue')
      },
      {
        path: '3',
        name: '3',
        component: () => import('../components/FormThree.vue')
      }
    ]
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

router.beforeEach((to, from, next) => {
  store.commit('setCurrentStep', Number(to.name))
  next()
})

export default router
