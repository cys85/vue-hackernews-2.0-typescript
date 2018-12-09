import Vue from 'vue'
import Router, { RouterOptions } from 'vue-router'

Vue.use(Router)

// route-level code splitting

export function createRouter (): Router {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.view.vue'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/Order.view.vue'),
      },
      {
        path: '/waybill',
        name: 'waybill',
        component: () => import('../views/Waybill.view.vue'),
      },
      {
        path: '/fee',
        name: 'fee',
        component: () => import('../views/Fee.view.vue'),
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/My.view.vue'),
      },
    ]
  } as RouterOptions)
}
