<template>
  <header class="mt-2">
  <top-nav-menu></top-nav-menu>
  <top-search></top-search>
  </header>
  <div class="main">
    <home-page></home-page>
  </div>
    <app-footer></app-footer>
</template>

<script>


import TopNavMenu from "@/components/top-nav-menu";
import HomePage from "@/pages/home-page";
import TopSearch from "@/components/top-search";
import AppFooter from "@/components/app-footer";
export default {
  name: 'App',
  components: {AppFooter, TopSearch, HomePage, TopNavMenu},
}
</script>

<style>

</style>
