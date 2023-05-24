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

          <li class="nav-item">
            <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
              <h4>Descuentos</h4>
            </a>
          </li>

          <!-- <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
              <h4>Breakfast</h4>
            </a>
        </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
              <h4>Lunch</h4>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
              <h4>Dinner</h4>
            </a>
          </li> -->

        </ul>

        <div class="tab-content">

          <div class="tab-pane fade active show" id="menu-starters">

            <!-- <div class="tab-header text-center">
              <p>Menu</p>
              <h3>Starters</h3>
            </div> -->

            <div class="row">

              <div class="col-lg-4">
                <a href="../assets/img/menu/menu-item-1.jpeg" class="glightbox"><img src="../assets/img/menu/menu-item-1.jpeg" class="menu-img img-fluid" alt=""></a>
                <h4>Bamboo Cotton</h4>
                <p class="ingredients">
                  Pads de limpieza reciclable
                </p>
                <p class="price">
                  $5.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="../assets/img/menu/menu-item-2.jpg" class="glightbox"><img src="../assets/img/menu/menu-item-2.jpg" class="menu-img img-fluid" alt=""></a>
                <h4>GuppyFriend</h4>
                <p class="ingredients">
                  Filtros para lavarropas
                </p>
                <p class="price">
                  $14.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="../assets/img/menu/menu-item-3.jpeg" class="glightbox"><img src="../assets/img/menu/menu-item-3.jpeg" class="menu-img img-fluid" alt=""></a>
                <h4>PADX</h4>
                <p class="ingredients">
                  Utensillos para compostar
                </p>
                <p class="price">
                  $8.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="../assets/img/menu/menu-item-4.jpeg" class="glightbox"><img src="../assets/img/menu/menu-item-4.jpeg" class="menu-img img-fluid" alt=""></a>
                <h4>Misfits Market</h4>
                <p class="ingredients">
                  Envio de fruta organica
                </p>
                <p class="price">
                  $12.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="../assets/img/menu/menu-item-5.jpeg" class="glightbox"><img src="../assets/img/menu/menu-item-5.jpeg" class="menu-img img-fluid" alt=""></a>
                <h4>Bees Wrap</h4>
                <p class="ingredients">
                  Envoltorios hechos con tela y cera de abejas
                </p>
                <p class="price">
                  $12.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="../assets/img/menu/menu-item-6.jpg" class="glightbox"><img src="../assets/img/menu/menu-item-6.jpg" class="menu-img img-fluid" alt=""></a>
                <h4>Gift Card</h4>
                <p class="ingredients">
                  Tarjeta de regalo
                </p>
                <p class="price">
                  $300
                </p>
              </div><!-- Menu Item -->

            </div>
          </div><!-- End Starter Menu Content -->



        </div>

      </div>
    </section><!-- End Menu Section -->
</template>

<script>
export default {
 name:'HomeUsuario',
}

</script>
 
<style>

</style>