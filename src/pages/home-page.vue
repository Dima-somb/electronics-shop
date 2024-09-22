<template>
  <app-carousel></app-carousel>
  <div class="home-content">
    <app-categories></app-categories>
    <app-brands></app-brands>
    <app-cards-information></app-cards-information>
  </div>
</template>

<script>
import AppCarousel from "@/components/carousel";
import AppCategories from "@/components/app-categories";
import AppBrands from "@/components/app-brands";
import AppCardsInformation from "@/components/cards-information";
export default {
  name: "home-page",
  components: {AppCardsInformation, AppBrands, AppCategories, AppCarousel}
}
</script>

<style scoped>
@media (max-width: 768px) {
    .home-content {
      top: 0;
      margin-top: 50px;
    }
  }
</style>
