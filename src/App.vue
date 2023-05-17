<script>
import { RouterLink, RouterView } from 'vue-router'
import {Router} from './router/index'
import Navbar from './components/Navbar.vue'
import 'bootstrap/dist/css/bootstrap.css'

// tira error en el export
export default {
   name: 'App',
  components: {
    Navbar
  }
}
</script>

<template>

<div> 
<Navbar />
  <h3>Hola desde App.vue</h3>
</div>
</template>

<style scoped>

</style>
