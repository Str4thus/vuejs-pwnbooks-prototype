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
    path: '/books',
    name: 'Books',
    component: () => import('../views/Books.vue')
  },
  {
    path: '/command-library',
    name: 'CommandLibrary',
    component: () => import('../views/CommandLibrary.vue')
  },
  {
    path: '/network-map',
    name: 'NetworkMap',
    component: () => import('../views/NetworkMap.vue')
  },
  {
    path: '/Pwn',
    name: 'Pwn',
    component: () => import('../views/Pwn.vue')
  },
  {
    path: '/shells',
    name: 'Shells',
    component: () => import('../views/Shells.vue')
  },

  {
    path: '/test',
    name: 'Testing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Testing.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
