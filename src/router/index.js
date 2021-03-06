import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Coinbase from '../views/Coinbase.vue'
import Inbox from '../views/Inbox.vue'
import TuplesPricing from '../views/TuplesPricing.vue'
import Kaban from '../views/Kaban.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/coinbase',
    name: 'cionbase',
    component: Coinbase
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: Inbox
  },
  {
    path: '/price',
    name: 'price',
    component: TuplesPricing
  },
  {
    path: '/kaban',
    name: 'kaban',
    component: Kaban
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router