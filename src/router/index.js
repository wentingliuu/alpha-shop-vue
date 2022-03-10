import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(Router)

const routes = [
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
