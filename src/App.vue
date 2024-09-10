<template>
  <top-nav-menu></top-nav-menu>
  <top-search></top-search>
  <home-page></home-page>
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
