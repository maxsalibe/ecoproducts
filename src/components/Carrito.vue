<template>
  <div>
    <ul class="list-group">
      <li
        v-for="producto in productos"
        :key="producto.nombre"
        class="list-group-item"
      >
        {{ producto.nombre }} - Precio: ${{ producto.precio }}
        <button
          @click="agregarProducto(producto)"
          class="btn btn-primary btn-sm"
        >
          Agregar
        </button>
      </li>
    </ul>
    <div>
      <p v-if="carrito.length > 0" class="mt-3">
        Total: ${{ calcularTotal() }}
      </p>
      <p v-if="carrito.length > 0">Productos agregados:</p>
      <ul v-if="carrito.length > 0">
        <li v-for="producto in carrito" :key="producto.nombre">
          {{ producto.nombre }} - Precio: ${{ producto.precio }}
          <button
            @click="eliminarProducto(producto)"
            class="btn btn-danger btn-sm"
          >
            Eliminar
          </button>
        </li>
      </ul>
      <button @click="vaciarCarrito" class="btn btn-danger">
        Vaciar carrito
      </button>
      <button
        @click="realizarCompra"
        :disabled="carrito.length === 0"
        class="btn btn-success"
      >
        Realizar compra
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [
        { nombre: "Jabón verde", descripcion: "No contamina", precio: 10 },
        {
          nombre: "Shampoo suave",
          descripcion: "Para todo tipo de cabello",
          precio: 15,
        },
        {
          nombre: "Crema hidratante",
          descripcion: "Fórmula enriquecida con vitaminas",
          precio: 20,
        },
      ],
      carrito: [],
    };
  },
  methods: {
    calcularTotal() {
      let total = 0;
      for (let i = 0; i < this.carrito.length; i++) {
        total += this.carrito[i].precio;
      }
      return total;
    },
    agregarProducto(producto) {
      this.carrito.push(producto);
    },
    eliminarProducto(producto) {
      const index = this.carrito.indexOf(producto);
      if (index > -1) {
        this.carrito.splice(index, 1);
      }
    },
    vaciarCarrito() {
      this.carrito = [];
    },
    realizarCompra() {
      alert("Compra realizada. Gracias por su compra.");
      alert("Vuelva prontos...");
      this.vaciarCarrito();
    },
  },
};
</script>

<style scoped>
.alert {
  margin-top: 1rem;
}

.list-group {
  margin-top: 1rem;
}

.btn {
  margin-top: 1rem;
}
</style>
