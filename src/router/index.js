import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Carrito from '../views/Carrito.vue'
import SignUp from '../views/SignUp.vue'
import HomeUsuario from '../views/HomeUsuario.vue'
import HomeAdmin from '../views/HomeAdmin.vue'
import CargarProducto from '../components/CargarProducto.vue'
import EditarProducto from '../components/EditarProducto.vue'

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
      component: SignUp
    },
  
    {
      path: '/carrito',
      name: 'carrito',
      component: Carrito
    },
    {
      path: '/cargarproducto',
      name: 'cargarproducto',
      component: CargarProducto
    },
    {
      path: '/editarproducto/:id',
      name: 'editarproducto',
      component: EditarProducto
    },

  ]
});

export default router;
