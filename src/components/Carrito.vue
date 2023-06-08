<template>
    <div>
      <div v-if="productos.length === 0">
        <p>No hay productos en el carrito.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="producto in productos" :key="producto.nombre">
            {{ producto.nombre }} - {{ producto.precio }}
            <button @click="agregarProducto(producto)">Agregar</button>
          </li>
        </ul>
        <p>Total: {{ calcularTotal() }}</p>
        <button @click="vaciarCarrito">Vaciar carrito</button>
        <button @click="realizarCompra" :disabled="carrito.length === 0">Realizar compra</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productos: [
          { nombre: "Jabón verde", descripcion: "No contamina", precio: 10 },
          { nombre: "Shampoo suave", descripcion: "Para todo tipo de cabello", precio: 15 },
          { nombre: "Crema hidratante", descripcion: "Fórmula enriquecida con vitaminas", precio: 20 }
        ],
        carrito: []
      }
    },
    methods: {
      calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.carrito.length; i++) {
          total += this.carrito[i].precio
        }
        return total;
      },
      agregarProducto(producto) {
        this.carrito.push(producto)
      },
      vaciarCarrito() {
        this.carrito = []
      },
      realizarCompra() {
        alert("¡Compra realizada! Gracias por su compra.");
        this.vaciarCarrito();
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  