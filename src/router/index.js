import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Carrito from '../views/Carrito.vue'
import Productos from '../views/Productos.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/',
      name: 'Carrito',
      component: Carrito
    },
    {
      path: '/',
      name: 'Productos',
      component: Productos
    },

  
  ]
})

export default router
