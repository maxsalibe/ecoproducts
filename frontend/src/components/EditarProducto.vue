<template>
    <router-link to="/homeAdmin">Volver</router-link>
    
    <h1>Editar producto</h1>

    <form @submit.prevent="guardar" action="#" method="put" enctype="multipart/form-data">

        <label for="nombre">Nombre:</label>
        <input v-model= "producto.nombre" type="text" id="nombre" name="nombre" required><br><br>

        <label for="descripcion">Descripción:</label>
        <input v-model= "producto.descripcion" type="text" id="descripcion" name="descripcion" required><br><br>

        <label for="precio">Precio:</label>
        <input v-model= "producto.precio" type="number" id="precio" name="precio" step="0.01" required><br><br>

        <label for="imagen">Imagen:</label>
        <input v-model= "producto.imagen" type="text" id="imagen" name="imagen" accept="image/*" required><br><br>

        <input @click="guardar()" value="Cargar Producto">

    
    </form>
</template>
<script>
import { defineComponent } from 'vue';
import ProductService from '../Service/ProductService'

export default defineComponent({
    name: 'CargarProductoForm',

    mounted(){
        console.log(this.$router.params.id);
    },

    methods: {
        guardar() {

            ProductService.actualizar(this.producto.id, this.producto).then(() => {
                
                })   
        }
    }
});
</script>

<style>
body {
    font-family: Arial, sans-serif;
}

h2 {
    text-align: center;
}

form {
    width: 400px;
    margin: 0 auto;
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="text"],
input[type="number"],
input[type="file"] {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}

input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
}
</style>