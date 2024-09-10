<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="slide slide-1"></div>
      </div>
      <div class="carousel-item">
        <div class="slide slide-2"></div>
      </div>
      <div class="carousel-item">
        <div class="slide slide-3"></div>
      </div>
      <div class="carousel-item">
        <div class="slide slide-4"></div>
      </div>
      <div class="carousel-item">
        <div class="slide slide-5"></div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "app-carousel"
}
</script>

<style scoped>
.carousel {
  position: absolute;
  top: 0;
  z-index: -9999;
}
.slide {
  min-width: 100vw;
  min-height: 700px;
  background-size: cover;
  background-position: center;
}

.slide-1 {
  background-image: url('../assets/images/gross-camera.jpg');
}
.slide-2 {
  background-image: url('../assets/images/airpods.jpg');
}

.slide-3 {
  background-image: url('../assets/images/nature.jpg');
}

.slide-4 {
  background-image: url('../assets/images/pen-phone.jpg');
}

.slide-5 {
  background-image: url('../assets/images/night-camera.jpg');
}

</style>
