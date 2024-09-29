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
          if(this.query) {
            response = await axios.get(`/categories?name=${this.query}`);
          }
          else {
            response = await axios.get(`/categories`);
          }

        }

        if(response.data.length > 0) {
          if(this.query) {
            this.cardsData = response.data[0].products;
          } else {
            response.data.forEach((category) => {
              this.cardsData.push(...category.products);
            });
            this.cardsData = this.shuffleArray(this.cardsData);
          }
        }
      } catch (error) {
        console.error("Помилка при завантаженні категорії:",error);
      }
    },

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  },

  mounted() {
    this.fetchCategoryData();
  }
}
</script>

<style scoped>

</style>
