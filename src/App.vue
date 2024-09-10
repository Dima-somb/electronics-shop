<template>
  <header class="mt-2">
  <top-nav-menu></top-nav-menu>
  <top-search></top-search>
  </header>

  <div class="main">
    <home-page></home-page>
  </div>
</template>

<script>


import TopNavMenu from "@/components/top-nav-menu";
import HomePage from "@/pages/home-page";
import TopSearch from "@/components/top-search";
export default {
  name: 'App',
  components: {TopSearch, HomePage, TopNavMenu},
}
</script>

<style>
</style>
