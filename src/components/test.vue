<template>
  <h1>cardsData {{cardsData}}</h1>
</template>

<script>
export default {
  name: "app-test",
  props: {
    cardsData: {
      type: Array,
      required: true,
      default: () => []
    },
  },

  data() {
    return {
      cards: []
    }
  },
  watch: {
    cardsData: {
      handler() {
        this.updateCards();
      },
      immediate: true, // Викликати одразу при монтуванні
    }
  },
  methods: {
    updateCards() {
      console.log('cardsData', this.cardsData)
      console.log('works')
      if(this.cardsData.length > 0) {
        this.cards = this.cardsData?.map((card) => {
          return {
            id: card.id,
            title: card.name,
            link: card.link,
            price: card.price,
            rate: card.rate,
            cashback: card.cashback,
            defaultImage: card.imageUrl,
            hoverImage: card.imageUrl1,
            hovered: card.hovered
          };
        });
      }
    }
  },
}
</script>

<style scoped>

</style>
