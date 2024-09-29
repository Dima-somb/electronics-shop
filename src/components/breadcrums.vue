<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="container my-3">
    <ol class="breadcrumb">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <router-link v-if="index !== breadcrumbs.length - 1" :to="crumb.path">
          {{ crumb.name }}
        </router-link>
        <span v-else>{{ crumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "app-breadcrumbs",
  computed: {
    breadcrumbs() {
      const crumbs = [];
      if (this.$route.path !== '/' && this.$route.path !== '/categories/categories') {
        crumbs.push({ name: 'Головна', path: '/' });
      }
      let currentCategory = '';

      switch (this.$route.query.name) {
        case 'smartphones':
          currentCategory = 'Смартфони';
          break;
        case 'televisions':
          currentCategory =  'Телевізори';
          break;
        case 'laptops':
          currentCategory =  'Ноутбуки';
          break;
        case 'power-supplies':
          currentCategory =  'Електроживлення';
          break;
        case 'xiaomi':
          currentCategory =  'Xiaomi';
          break;
        case 'samsung':
          currentCategory =  'Samsung';
          break;
        case 'baseus':
          currentCategory =  'Baseus';
          break;
        case 'dyson':
          currentCategory =  'Dyson';
          break;
        default:
          currentCategory =  '';
      }

      if (currentCategory) {
        crumbs.push({ name: currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1), path: `/categories/${currentCategory}` });
      }
      return crumbs;
    }
  },
}
</script>

<style scoped>

</style>
