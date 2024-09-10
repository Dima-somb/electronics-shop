<template>
  <app-carousel></app-carousel>
  <div class="home-content">
    <app-categories></app-categories>
  </div>
</template>

<script>
import AppCarousel from "@/components/carousel";
import AppCategories from "@/components/app-categories";
export default {
  name: "home-page",
  components: {AppCategories, AppCarousel}
}
</script>

<style scoped>
  .home-content {
    top: 575px;
    position: relative;
  }

  @media (max-width: 768px) {
    .home-content {
      top: 0;
      margin-top: 50px;
    }
  }
</style>
