<template>
    <table class="table table-light">
        <thead>
            <th><button>Agregar</button></th>
            <th>dos</th>
            <th>tres</th>
            
        </thead>
        <tbody>
            <tr v-for="producto in productos" :key="producto.id"></tr>
            <td>{{ producto.id }}</td>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.precio }}</td>
             
        </tbody>
    </table>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
    
    const session = JSON.parse(sessionStorage.getItem('userInfo'));
    if (session.tipoUsuario !== 'Admin') {
      // Redirigir al home de usuario normal
      next('/homeUsuario');
    } else {
      next();
    }
  },
}
</script>

<style></style>