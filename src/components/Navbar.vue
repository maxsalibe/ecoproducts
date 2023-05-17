<template>
  <header id="header" class="header fixed-top d-flex align-items-center" style="background-color: white;">
    <div class="container d-flex align-items-center justify-content-between">

    <nav class=" navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/productos">Eco-Products</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/homeUsuario">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/carrito">Carrito</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/login">Login</router-link></li>
            <li><router-link class="dropdown-item" to="/signup">Sign up</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
</header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
   name:'Navbar'
});
</script>

<style scoped>

</style>