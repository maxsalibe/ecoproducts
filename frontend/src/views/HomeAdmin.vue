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

}
</script>

<style></style>