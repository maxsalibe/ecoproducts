<script>
//import { createApp } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Router from './router/index';
import Navbar from './components/Navbar.vue';
import 'bootstrap/dist/css/bootstrap.css';


// tira error en el export
export default defineComponent({
   name: 'App',
  components: {
    Navbar
  }
});
</script>

<template>
<div>
  
<Navbar />

  <div class="container mt-5">
</div>
  <RouterView />
</div>
 

    
  

</template>

<style>
.Navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999; /* Asegura que el navbar se muestre por encima de otros elementos */
}

.banner-container {
  margin-top: 60px; /* Ajusta el valor según el espacio deseado entre el navbar y la imagen */
}

.content-container {
  margin-top: 20px; /* Ajusta el valor según el espacio deseado entre el navbar y el contenido */
  padding-top: 20px; /* Ajusta el valor según el espacio deseado entre el navbar y el contenido */
}

</style>
