import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import NewsPage from '@/views/NewsPage.vue'
import TodoPage from '@/views/TodoPage.vue'
import TheNewsPage from '@/views/TheNewsPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'

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
      name: "News",
      path: "/news",
      component: NewsPage
    },
    {
      name: "Todo",
      path: "/todo",
      component: TodoPage
    },
    {
      name: "OneNews",
      path: "/news/:id",
      component: TheNewsPage
    },
    {
      name: "Login",
      path: "/login",
      component: LoginPage
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      component: DashboardPage
    },
  ],
})

export default router
