<template>
  <header id="header" class="header fixed-top d-flex align-items-center" style="background-color: white;">
    <div class="container d-flex align-items-center justify-content-between">

    <nav class=" navbar navbar-expand-lg bg-body-tertiary ml-auto">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/homeUsuario">Eco-Products</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   <!--  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/homeUsuario">Home</router-link>
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
    </div>-->
  </div>
</nav>
<nav class="navbar navbar-expand-sm" style="margin-left: 80%;">
<div class="container-fluid">
  <ul class="navbar-nav">
    <li class="nav-item">
          <router-link class="nav-link bi bi-cart4" to="/carrito"></router-link>
        </li>
      </ul>
      
        <li class="nav-item" style="list-style-type: none;">
          
          <router-link v-if="nombreUsuario === ''" to="/login">Login</router-link>
          
        </li>

       
        <li v-if="nombreUsuario !== ''" class="nav-item dropdown" style="list-style-type: none;">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ nombreUsuario }}</a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" @click="cerrarSesion" to="/login">Cerrar Sesión</router-link></li>
            </ul> 
        </li> 
  </div>
</nav>
</div>
</header>
</template>

<script>


export default {
  name:'Navbar',
  data() {
    return {
      nombreUsuario: '', 
      tipoUsuario:''// Supongamos que esta es la variable que indica el nombre del usuario
    };
  },
  created() {
    const session = JSON.parse(sessionStorage.getItem('userInfo'));
    if(session!= null)
    {
      this.nombreUsuario = session.email.split("@").shift();
      this.tipoUsuario = session.tipoUsuario;
    }
    
  },
  methods: {
    cerrarSesion() {
      
      sessionStorage.removeItem('userInfo');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>

.header{
  border-style: solid;
    border-bottom-color: black;
}
.bi-cart4{
font-size: 2rem;
display: flex;
}

</style>