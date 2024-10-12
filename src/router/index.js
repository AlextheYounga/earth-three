import { createRouter, createWebHistory } from 'vue-router'
import EarthView from '../views/EarthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'earth',
      component: EarthView
    },
  ]
})

export default router
