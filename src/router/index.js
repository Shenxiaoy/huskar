import VueRouter from 'vue-router'
import Vue from 'vue'
import test from '../pages/rect'

Vue.use(VueRouter)
const routes = [
  {path: '/test1', component: test}
]

const router = new VueRouter({
  routes
})
export default router