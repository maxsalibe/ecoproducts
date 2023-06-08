<template>
  
    <div class="form-titulo-div-signup">
      <label for="Titulo" class="form-titulo-lab">Registrarse</label>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Correo electrónico</label>
      <input type="email" class="form-control" id="email" v-model="usuario.email">
      <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Contraseña</label>
      <input type="password" class="form-control" id="password" v-model="usuario.password">

    </div>
    <div class="mb-3">
      <label for="confirmPassword">Confirmar contraseña:</label>
      <input type="password"  class="form-control" id="confirmPassword" v-model="confirmPassword" required>
    </div>


    <button @click="agregar" class="btn btn-primary">Ingresar</button>
  
</template>

<script>
import LoginService from '../Service/LoginService';

export default {
  data() {
    return {
      usuario: {
        email: '',
        password: '',
        tipoUsuario:'usuario'
      },
      confirmPassword: ''
    };
  },
  methods: {
    async agregar() {

      if (this.usuario.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
      }

      try {

        await LoginService.crear(this.usuario);

        alert('Se agregó el usuario correctamente, puede dirigirse al login');
        this.$router.push('/login');
      }
      catch (error) {
        alert('Se produjo un error de conexion: ' + error)
      }


    }
  }
}
</script>

<style>
.form-titulo-div-signup {
  font-size: 2.5rem;
}
</style>