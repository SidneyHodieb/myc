import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import addSource from '../views/addSource/column'
import format from '../views/addSource/components/format'
import card from '../views/addSource/components/card'
import trigger from '../views/addSource/components/trigger'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addsource',
    name: 'addSource',
    component: addSource,
    children: [
      {
        path: 'format',
        component: format
      },
      {
        path: 'card',
        name:card,
        component: card
      },
      {
        path: 'trigger',
        component: trigger
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
