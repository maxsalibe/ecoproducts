import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Carrito from '../views/Carrito.vue'
import Productos from '../views/Productos.vue'
import CargarUserForm from '../views/CargarUserForm.vue'
import HomeUsuario from '../views/HomeUsuario.vue'
import HomeAdmin from '../views/HomeAdmin.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homeUsuario',
      name: 'homeUsuario',
      component: HomeUsuario
    },
    {
      path: '/homeAdmin',
      name: 'homeAdmin',
      component: HomeAdmin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: CargarUserForm
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: Carrito
    },
    {
      path: '/productos',
      name: 'productos',
      component: Productos
    }
  
  ]
});

export default router;
