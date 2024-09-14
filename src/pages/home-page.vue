<template>
  <app-carousel></app-carousel>
  <div class="home-content">
    <app-categories></app-categories>
    <app-brands></app-brands>
  </div>
</template>

<script>
import AppCarousel from "@/components/carousel";
import AppCategories from "@/components/app-categories";
import AppBrands from "@/components/app-brands";
export default {
  name: "home-page",
  components: {AppBrands, AppCategories, AppCarousel}
}
</script>

<style scoped>
  /*.home-content {*/
  /*  top: 575px;*/
  /*  position: relative;*/
  /*}*/

  @media (max-width: 768px) {
    .home-content {
      top: 0;
      margin-top: 50px;
    }
  }
</style>
