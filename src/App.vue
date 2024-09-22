<template>
  <header class="mt-2">
  <top-nav-menu></top-nav-menu>
  <top-search></top-search>
  </header>
  <div class="main">
<!--    <home-page></home-page>-->
    <detail-page></detail-page>
  </div>
    <app-footer></app-footer>
</template>

<script>


import TopNavMenu from "@/components/top-nav-menu";
import TopSearch from "@/components/top-search";
import AppFooter from "@/components/app-footer";
import DetailPage from "@/pages/detail-page";
export default {
  name: 'App',
  components: {DetailPage, AppFooter, TopSearch, TopNavMenu},
}
</script>

<style>

</style>
