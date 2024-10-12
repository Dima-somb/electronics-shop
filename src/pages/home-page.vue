<template>
  <app-carousel></app-carousel>
  <div class="home-content">
    <app-categories></app-categories>
    <app-brands></app-brands>
    <app-cards-information
        class="container"
        v-if="powerSupplies.length > 0"
        :cards-data="powerSupplies"
        title="Підживи свої гаджети"
    ></app-cards-information>
    <app-cards-information
        class="container"
        v-if="smartphones.length > 0"
        :cards-data="smartphones"
        title="Техніка, що завжди під рукою"
    ></app-cards-information>
    <app-cards-information
        class="container"
        v-if="laptops.length > 0"
        :cards-data="laptops"
        title="Весь світ в твоїх руках"
    ></app-cards-information>
  </div>
</template>

<script>
import AppCarousel from "@/components/carousel";
import AppCategories from "@/components/app-categories";
import AppBrands from "@/components/app-brands";
import AppCardsInformation from "@/components/cards-information";
import ApiService from "@/api-service";
export default {
  name: "home-page",
  components: {AppCardsInformation, AppBrands, AppCategories, AppCarousel},
  data() {
    return {
      powerSupplies: [],
      smartphones: [],
      laptops: []
    }
  },

  methods: {
    async fetchCategoryData(queryParam, category) {
      ApiService.getCategories(queryParam)
          .then((response) => {
            if(response.data.length > 0)  {
              const products = response.data[0].products.slice(0,6);
                  if (category === 'power-supplies') {
                    this.powerSupplies = products;
                  } else if (category === 'smartphones') {
                    this.smartphones = products;
                  } else if (category === 'laptops') {
                    this.laptops = products;
                  }
                }
          }).catch(console.log)
    }
  },

  created() {
    this.fetchCategoryData('power-supplies', 'power-supplies');
    this.fetchCategoryData('smartphones', 'smartphones');
    this.fetchCategoryData('laptops', 'laptops');
  }
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
