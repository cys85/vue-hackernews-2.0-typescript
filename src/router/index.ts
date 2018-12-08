import Vue from 'vue'
import Router, { RouterOptions } from 'vue-router'

Vue.use(Router)

// route-level code splitting
import MainLayout from '../layouts/MainLayout.vue';

export function createRouter (): Router {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: [
      {
        path: '/',
        name: 'home',
        component: MainLayout,
         children: [
          {
            path: '/home',
            name: 'index',
            component: () => import('../views/Home.vue'),
          },
          {
            path: '/list-demo',
            name: 'list-demo',
            component: () => import('../views/vant-demo/ListDemo.vue'),
          }
        ]
      },
    ]
  } as RouterOptions)
}
