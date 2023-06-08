<template>
    <div>
        <h2>Listado de Productos</h2>


        <table class="table table-light">
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th> <router-link to="/cargarproducto">Agregar</router-link> </th>
            </thead>
            <tbody>
                <tr v-for="producto in productos" :key="producto.id">
                    <td>{{ producto.id }}</td>
                    <td>{{ producto.nombre }}</td>
                    <td>{{ producto.precio }}</td>
                    <td>
                        <button @click="editarProducto(producto.id)">Editar</button>
                        <button @click="eliminarProducto(producto.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ProductService from '../Service/ProductService'

export default {

    async mounted() {
        this.productos = await ProductService.listar();
        console.log(this.productos);
    },


    editarProducto(producto) {
        // Navegar a la página de edición con los datos del producto como parámetros
        this.$router.push("/editarproducto/" + producto.id);
    },

    data() {
        return {
            productos: [],
            producto: {},
        };
    },
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