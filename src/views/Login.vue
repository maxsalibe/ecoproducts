<template>
  
  <form>
    <div class="form-titulo-div-login">
      <label for="Titulo" class="form-titulo-lab">Login</label>
    </div>
  <div class="mb-3">
    <label for="username" class="form-label">Correo electrónico</label>
  
    <input type="email" class="form-control" v-model="usuario.email" aria-describedby="emailHelp" required>
    <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Contraseña</label>
    <input type="password" class="form-control" v-model="usuario.passw" required>
  </div>
 
  <button @click="logear" class="btn btn-primary">Ingresar</button>
</form>
</template>

<script>
import { useLoginStore } from "../stores/login";

export default {
  setup() {
    const { login } = useLoginStore(); 
    return { login };
  },
  data() {
    return {
      usuario: { email: "", passw: "" },
    };
  },
  methods: {
    logear() {
      // consultar api  (proxima clase)
      // hardcodeo
      if (
        this.usuario.email == "usuario@test.com" &&
        this.usuario.passw == "123456"
      ) {
        this.login({email:this.usuario.email, permissions:[]})
        this.$router.push("/homeUsuario");
      } else if ( 
        this.usuario.email == "admin@test.com" &&
        this.usuario.passw == "123456"
      ) {
        this.login({email:this.usuario.email, permissions:['homeAdmin']})
        this.$router.push("/");
      } else {
        alert("Credenciales erroneas");
      }
    },
  },
};
</script>

<style>
.form-titulo-div-login{
  font-size: 2.5rem;
}
</style>