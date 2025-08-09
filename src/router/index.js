import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Products from '@/views/Products.vue'
import Services from '@/views/Services.vue'
import Partners from '@/views/Partners.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners
    },
  ]
})

export default router
