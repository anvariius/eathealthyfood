import { createRouter, createWebHistory } from 'vue-router'
import SettingsView from '@/views/SettingsView';
import ProductView from '@/views/ProductView'

const routes = [
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
