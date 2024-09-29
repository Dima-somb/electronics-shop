<template>
  <div class="container mt-sm-3 mt-lg-0 mb-lg-3 search">
    <div class="row">
      <div class="col-lg-12">
        <div class="input-group">
          <input class="form-control form-control-lg"
                 type="text" placeholder="Пошук серед більше ніж 300 000 товарів"
                 aria-label="Search example"
                 v-model="searchTerm"
                 @input="filterProducts"
          >
          <button class="btn btn-primary" type="button"><i class="bi bi-search"></i></button>
        </div>
        <div class="list-group search-container p-2" v-if="filteredProducts.length > 0">
          <a href="#" class="list-group-item list-group-item-action search__link" v-for="product in filteredProducts" :key="product.id" aria-current="true">
            {{ product }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "top-search",

  data() {
    return {
      products: [],
      filteredProducts: [],
      searchTerm: ''
    }
  },

  methods: {
    async fetchProducts() {
      try {
        const fetchedProducts = await axios.get(`/categories`);

        if(fetchedProducts.data.length > 0) {
          this.products = fetchedProducts.data.flatMap(category => category.products.map(product => product.name));
        }

      } catch (e) {
        console.log(e)
      }
    },

    filterProducts() {
      if(this.searchTerm) {
        this.filteredProducts = this.products.filter(product =>
            product.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      } else {
        this.filteredProducts = ''
      }
    }
  },

  created() {
    this.fetchProducts();
  }
}
</script>

<style scoped>
.search__link {
  border: 0;
}

.search-container {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
