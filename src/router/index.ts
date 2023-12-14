import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/account'
      },
      {
        path: 'account',
        component: () => import('@/views/Account.vue')
      },
      {
        path: 'card',
        component: () => import('@/views/Card.vue')
      },
      {
        path: 'send',
        component: () => import('@/views/Send.vue')
      },
      {
        path: 'activity',
        component: () => import('@/views/Activity.vue')
      },
      {
        path: 'more',
        component: () => import('@/views/More.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
