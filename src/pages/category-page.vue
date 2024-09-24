<template>
  <div class="container">
    <h1>{{categoryTitle}}</h1>
    <p>{{qvr}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "category-page",
  props: ['prm'],
  data() {
    return {
      cardsData: []
    }
  },
  computed: {
    categoryTitle() {
      switch (this.prm) {
        case 'smartphones':
          return 'Смартфони';
        case 'televisions':
          return 'Телевізори';
        case 'laptops':
          return 'Ноутбуки';
        case 'power-supplies':
          return 'Електроживлення';
        case 'xiaomi':
          return 'Xiaomi';
        case 'samsung':
          return 'Samsung';
        case 'baseus':
          return 'Baseus';
        case 'dyson':
          return 'Dyson';
        default:
          return 'Невідома категорія';
      }
    },
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
          this.cardsData = response.data[0].products;
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
