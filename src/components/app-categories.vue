<template>
  <div class="container categories-section mt-3">
    <div class="d-flex flex-wrap justify-content-sm-center justify-content-lg-between">
      <div class="card mb-3 mx-lg-0 mx-md-3" v-for="(category, index) in categories" :key="index">
        <router-link class="card-link" :to="{ name: 'Electronic', params: { prm: category.param}, query: {name: category.tech}}">
          <div class="card-body">
            <div class="d-flex">
              <div class="categories-section__icon me-3">
                <i class="bi bi-phone" :class="category.icon"></i>
              </div>
              <div class="categories-section__text" v-html="category.title"></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="">
        <button type="button" class="btn btn-lg btn btn-outline-primary all-categories">Усі категорії</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-categories",
  data() {
    return {
      categories: [
        {title: 'Смартфони, <br> телефони', param: 'categories', tech: 'smartphones', icon: 'bi-phone'},
        {title: 'Телевізор', param: 'categories', tech: 'televisions', icon: 'bi-tv'},
        {title: 'Ноутбуки', param: 'categories', tech: 'laptops', icon: 'bi-laptop'},
        {title: 'Електроживлення', param: 'categories', tech: 'power-supplies', icon: 'bi-battery-charging'},
      ]
    }
  }
}
</script>

<style scoped>
.card {
  transition: all 0.5s;
  min-width: 18rem;
}

/*.all-categories {*/
/*  background: #2c80e5;*/
/*}*/
@media (max-width: 768px) {
  .card {
    min-width: 100%
  }
}


 .categories-section .card > a {
   text-decoration: none;
   color: black;
   text-transform: uppercase;
 }

 .categories-section .card:hover {
   transform: scale(1.1);
 }

 .categories-section__icon i {
   font-size: 40px;
 }

 .categories-section__text {
   font-size: 16px;
   align-content: center;
 }
</style>
