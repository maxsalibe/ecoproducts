<template>
  
  <div class="container">
    
    <h1>Carrito de compras</h1>
    <div class="row">
      <div class="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index">
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>
                <button @click="addToCart(index)" class="btn btn-primary">
                  Añadir al carrito
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4">
        <h2>Carrito</h2>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(item, index) in cart"
            :key="index"
          >
            {{ item.name }} - {{ item.price }}
            <button
              @click="removeFromCart(index)"
              class="btn btn-danger btn-sm"
            >
              Remover
            </button>
          </li>
        </ul>
        <h3>Total: {{ total }}</h3>
      </div>
    
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ProductService from '../Service/ProductService';

export default defineComponent({
   name:'carrito',

  methods: {
    addToCart(index) {
      this.cart.push(this.products[index]);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
  /*computed: {
    total() {
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    },
  }*/
});
</script>
