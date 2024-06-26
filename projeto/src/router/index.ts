import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/utilitarios',
    name: 'utilitarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/UtilitariosView.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsuariosView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
