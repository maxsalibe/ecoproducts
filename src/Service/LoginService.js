import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://647e8d04c246f166da8f267b.mockapi.io/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {

    
    async listar(){
        try{
            const response = await apiClient.get('/usuario') // completar
            return response.data
        }catch (error){
            throw "Error de conexion con la API"
        }
    },


    //     try {
    //   const response = await apiClient.post('/login', {
    //     email: this.usuario.email,
    //     password: this.usuario.passw
    //   });

    //   // Verificar la respuesta de la API
    //   if (response.status === 200) {
    //     // Login exitoso
    //     const userData = response.data;
    //     this.login({
    //       email: userData.email,
    //       permissions: userData.permissions
    //     });

    //     // Redireccionar a la página correspondiente
    //     if (userData.permissions.includes('homeAdmin')) {
    //       this.$router.push('/');
    //     } else {
    //       this.$router.push('/homeUsuario');
    //     }
    //   } else {
    //     // Login fallido
    //     alert('Credenciales incorrectas');
    //   }
    // } catch (error) {
    //   console.error('Error al iniciar sesión', error);
    //   alert('Ocurrió un error al iniciar sesión');
    // }
    // },

    async crear(usuario){
        try{
          const response = await apiClient.post('/usuario', usuario) 
          return response.data
        }catch(error){
          throw "Error de conexion"
        
    }
    },
    async eliminar(idUsuario) {
        try {
            await apiClient.delete("/usuario/:id" + idUsuario) // completar
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async actualizar(id, elem) {
        try {
            await apiClient.put("/usuario/:id" + id, elem) // completar
        } catch (error) {
            throw "Error de conexion"
        }
    },



    

}

