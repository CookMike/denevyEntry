import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import ThankYou from '../views/ThankYou.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/store', name: 'Store', component: Store },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/thank-you', name: 'ThankYou', component: ThankYou }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || "/",
  routes
})

export default router
