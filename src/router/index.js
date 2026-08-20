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
      component: DashboardPage,
      meta: { requiresAuth: true }
    },
  ],
})

router.beforeEach((to) => {
  // 1. Vérifier si l'utilisateur est connecté
  // (Ex: présence d'un token dans le localStorage ou état dans un store Pinia)
  const isAuthenticated = localStorage.getItem('token') !== null

  // 2. Vérifier si la page de destination (to) nécessite une connexion
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Si oui et non connecté -> on redirige vers le login
    return '/login'
  }
})

export default router
