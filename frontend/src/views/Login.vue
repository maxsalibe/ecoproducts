<template>
  
    <form>
      <div class="form-titulo-div-login">
        <label for="Titulo" class="form-titulo-lab">Login</label>
      </div>
    <div class="mb-3">
      <label for="username" class="form-label">Correo electrónico</label>
    
      <input type="email" class="form-control" v-model="usuario.email" aria-describedby="emailHelp" required> 
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Contraseña</label>
      <input type="password" class="form-control" v-model="usuario.passw" required>
    </div>
   <div>
    <div class="row">
      <button @click="loggear" class="btn btn-primary">Ingresar</button>
    </div>
    <br/>
  <div class="row">
    <router-link to="/signup">¿No tenés cuenta? Registrate acá</router-link>
  </div>
   </div>
  </form>
  </template>
  
  <script>
  import { useLoginStore } from "../stores/login";
  import LoginService from '../Service/LoginService';
  import SignUp from "./SignUp.vue";
  
  export default {
    
  
    name:"Login",
    setup() {
      const { login } = useLoginStore(); 
      return { login };
    },
    async mounted(){
      this.usuarios = await LoginService.listar();
      
    },
    data() {
      return {
        usuario: { email: "", passw: "", tipoUsuario:"" },
        usuarios:[],
      };
    },
    
    methods: {
      loggear() {
  
        const user = this.usuarios.find((usuario) => usuario.email === this.usuario.email && usuario.password === this.usuario.passw);
        
        if (user) {
          if(user.tipoUsuario)
          {
            this.login({email:this.usuario.email, permissions:['homeAdmin'], tipoUser:user.tipoUsuario})
            this.$router.push("/homeAdmin");
          }
          else
          {
            this.login({email:this.usuario.email, permissions:[], tipoUser:user.tipoUsuario})
            this.$router.push("/homeUsuario");
          }      
      } else {
        alert("Credenciales erroneas");
      }
  
      }
    },
  };
  
  </script>
  
  <style>
  .form-titulo-div-login{
    font-size: 2.5rem;
  }
  </style>