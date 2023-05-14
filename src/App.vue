<script>
//import { createApp } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import router from './router/index';
import Navbar from './components/Navbar.vue';
//import 'bootstrap/dist/css/bootstrap.css';


// tira error en el export
export default defineComponent({
   name: 'App',
  components: {
    Navbar
  }
});
</script>

<template>
<div id="app">
  
<Navbar />

  <h3>Hola desde App.vue</h3>
</div>
</template>

<style scoped>

</style>
