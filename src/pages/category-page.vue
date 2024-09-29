<template>
  <div class="container">
    <app-cards-information v-if="cardsData && cardsData.length > 0" :cardsData="cardsData"></app-cards-information>
  </div>
</template>

<script>
import axios from "axios";
import AppCardsInformation from "@/components/cards-information";

export default {
  name: "category-page",
  components: {AppCardsInformation},
  props: ['prm'],
  data() {
    return {
      cardsData: []
    }
  },
  computed: {
    query() {
      return this.$route.query.name;
    }
  },

  methods: {
    async fetchCategoryData() {
      try {
        let response = '';
        if(this.prm === 'brands') {
          response = await axios.get(`/brands?name=${this.query}`);
        } else {
          response = await axios.get(`/categories?name=${this.query}`);
        }

        if(response.data.length > 0) {
          this.cardsData = response.data[0].products
        }
      } catch (error) {
        console.error("Помилка при завантаженні категорії:",error);
      }
    }
  },

  mounted() {
    this.fetchCategoryData();
  }
}
</script>

<style scoped>

</style>
