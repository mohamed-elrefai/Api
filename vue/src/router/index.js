import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/signup',
    name: 'Register',
    component: Register
  },
  {
    path: '/signin',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
