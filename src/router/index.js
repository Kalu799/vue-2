import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import NewsPage from '@/views/NewsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomePage
    },
    {
      name: "About",
      path: "/about",
      component: AboutPage
    },
    {
      name: "Favoris",
      path: "/news",
      component: NewsPage
    },
  ],
})

export default router
