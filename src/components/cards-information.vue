<template>
  <div class="container cards-information mb-lg-5">
    <div class="d-flex flex-wrap justify-content-between">
      <div class="mb-5" v-for="(card, index) in cards" :key="index">
        <div class="card cards-information-block">
          <div class="card-body">
            <img
                @mouseenter="card.hovered = true"
                @mouseleave="card.hovered = false"
                :src="card.hovered ? card.hoverImage : card.defaultImage"
                class="card-img-top"
                alt="Card image"
            >

             <div class="cards-information__title">
               <a href="#">Зарядна станція EcoFlow RIVER 2 Pro</a>
             </div>
              <div class="mt-3 fw-bolder cards-information__price"><span>2333 ₴</span></div>
            <div class="d-flex mt-2">
              <div class="btn btn-outline-secondary icon-button cart-button">
                <i class="bi bi-cart"></i>
                <span class="cart-text">Купити</span>
              </div>
              <div class="btn btn-outline-secondary icon-button">
                <i class="bi bi-heart"></i>
              </div>
              <div class="btn btn-outline-secondary icon-button">
                <i class="bi bi-arrows"></i>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="cards-information-block__cashback">
                <span class="fw-bolder">Кешбек 139 ₴</span>
              </div>
              <div class="cards-information-block__stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-cards-information",
  data() {
    return {
      cards: [
        {
          defaultImage: require('@/assets/images/EcoFlow-RIVER-2-Pro-38-Picture-01-228x228.webp'),
          hoverImage: require('../assets/images/eco-flow-river-2.webp'),
          hovered: false
        },
        {
          defaultImage: require('@/assets/images/EcoFlow-RIVER-2-Pro-38-Picture-01-228x228.webp'),
          hoverImage: require('../assets/images/eco-flow-river-2.webp'),
          hovered: false
        },
        {
          defaultImage: require('@/assets/images/EcoFlow-RIVER-2-Pro-38-Picture-01-228x228.webp'),
          hoverImage: require('../assets/images/eco-flow-river-2.webp'),
          hovered: false
        },
        {
          defaultImage: require('@/assets/images/EcoFlow-RIVER-2-Pro-38-Picture-01-228x228.webp'),
          hoverImage: require('../assets/images/eco-flow-river-2.webp'),
          hovered: false
        },
        {
          defaultImage: require('@/assets/images/EcoFlow-RIVER-2-Pro-38-Picture-01-228x228.webp'),
          hoverImage: require('../assets/images/eco-flow-river-2.webp'),
          hovered: false
        },
        {
          defaultImage: require('@/assets/images/EcoFlow-RIVER-2-Pro-38-Picture-01-228x228.webp'),
          hoverImage: require('../assets/images/eco-flow-river-2.webp'),
          hovered: false
        },
      ]
    }
  },

}
</script>

<style scoped>

.cards-information__title a {
  color: #000;
  text-decoration: none;
  line-height: 1.25rem;
  white-space: normal;
  transition: all .1s linear;
  hyphens: auto;
}

.cards-information__title a:hover {
  color: #2c80e5;
  text-decoration: underline;
}
.icon-button {
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  border-color: #c4c4c4 !important;
  transition: width 0.3s ease;
  overflow: hidden;
  position: relative;
}

.cards-information__price {
  font-size: 1.25rem;
  line-height: 1;
  display: inline-block;
  vertical-align: bottom;
}

.icon-button:first-child:hover {
  width: 250px;
}

.cart-button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40px;
  transition: width 0.3s ease;
}

.cart-text {
  opacity: 0;
  white-space: nowrap;
  transition: opacity 0.3s ease;
  margin-left: 8px;
  font-size: 12px;
}

.cards-information-block {
  transition: transform .5s;
  width: 12.8rem;
}
.cards-information-block:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.cards-information-block:hover .cart-button {
  width: 210px;
}

.cards-information-block:hover .cart-button .cart-text {
  opacity: 1;
}

.cards-information-block__cashback{
  color: #2c80e5;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 5px;
}

.cards-information-block__stars {
  color: #ffb700;
}

@media(max-width: 434px) {
  .cards-information-block {
    width: 10.4rem;
  }
}
</style>
