<template>
  <div id="app">
    <div class="container">
      <h1>Carrito de Compras</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <input type="number" v-model="item.quantity" @input="updateTotal(item)">
            </td>
            <td>{{ item.total }}</td>
          </tr>
        </tbody>
      </table>
      <h3>Total: {{ total }}</h3>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>