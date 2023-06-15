<template>

    <section id="hero" class="hero d-flex align-items-center section-bg">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2>Compra nuestros mejores productos <b>Eco-Friendly</b></h2>
          <p>Bienvenid@ a nuestra tiene online
            <br/>Tenemos los mejores precios y la mejor calidad!</p>
          <div class="d-flex">
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img src="@/assets/bannerHomeUsuario.jpg" height="400">
        </div>
      </div>
    </div>
  </section><!-- End Hero Section -->

  <section id="menu" class="menu">
      <div class="container">

        <div class="section-header">
          <h2>Nuestros productos</h2>
          <p>Mira nuestros <span>Eco-Productos</span></p>
        </div>

        <ul class="nav nav-tabs d-flex justify-content-center">         

        </ul>

        <div class="tab-content">

          <div class="tab-pane fade active show" id="menu-starters">

            <ul style="display: flex;">

              <li v-for="producto in productos" :key="producto.id">
                 <div class="row">
                 <div class="col-lg-4">
                 <img :src="producto.imagen" class="menu-img img-fluid" alt="">
                  <h4>Nombre</h4>
                  <h3>{{producto.nombre}}</h3>
                   <h4>Descripcion</h4>
                  <p>{{producto.descripcion}}</p>
                   <h4>Precio</h4>
                  <p>{{producto.precio}}</p>
                 </div>
                  </div>
              </li>

            </ul>
          </div><!-- End Starter Menu Content -->



        </div>

      </div>
    </section><!-- End Menu Section -->
</template>

<script>
import ProductService from '../Service/ProductService'

export default {
 name:'HomeUsuario',

  async mounted(){
    this.productos = await ProductService.listar();
    
  },

  data(){
    return{
      productos:[],
    };
  }

}

</script>
 
<style>

ul li{

min-width: 200px;
list-style: none;

}
</style>