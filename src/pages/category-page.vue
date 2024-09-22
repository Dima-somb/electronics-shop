<template>
  <div class="container">
    <h1>{{categoryTitle}}</h1>
  </div>
</template>

<script>
export default {
  name: "category-page",
  props: ['category'],
  computed: {
    categoryTitle() {
      switch (this.category) {
        case 'smartphones':
          return 'Смартфони';
        case 'televisions':
          return 'Телевізори';
        case 'laptops':
          return 'Ноутбуки';
        case 'power-supplies':
          return 'Електроживлення';
        default:
          return 'Невідома категорія';
      }
    }
  }
}
</script>

<style scoped>

</style>
