<template>
 <div class="container my-5">
   <h1>Ordering page</h1>

   <pre>{{orderingData}}</pre>
 </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ordering-page",
  computed: {
    ...mapState({
      orderingData: (state) => state.orderingData,
    }),
  },

  data() {
    return {

    }
  },

mounted() {
    this.$store.commit('loadOrderingData');
}
</script>

<style scoped>

</style>
