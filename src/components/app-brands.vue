<template>
  <div class="container categories-section">
      <h2 class="my-lg-5 text-center brands__title">Обирай найкраще</h2>
    <div class="d-flex flex-wrap justify-content-sm-center justify-content-lg-between">
      <div class="card mb-3 mx-lg-0 mx-md-3">
        <a href="https://example.com" class="card-link">
          <div class="card-body">
            <div class="d-flex justify-content-center brands__image-wrapper">
                <img class="brands__image" src="../assets/images/xiaomiBrand.svg">
            </div>

          </div>
        </a>
      </div>
      <div class="card mb-3 mx-lg-0 mx-md-3">
        <a href="https://example.com" class="card-link">
          <div class="card-body">
            <div class="d-flex brands__image-wrapper">
              <img class="brands__image" src="../assets/images/samsungBrand.svg">
            </div>

          </div>
        </a>
      </div>
      <div class="card mb-3 mx-lg-0 mx-md-3">
        <a href="https://example.com" class="card-link">
          <div class="card-body">
            <div class="d-flex brands__image-wrapper">
              <img class="brands__image" src="../assets/images/dyson-logo.svg">
            </div>

          </div>
        </a>
      </div>
      <div class="card mb-3 mx-lg-0 mx-md-3">
        <a href="https://example.com" class="card-link">
          <div class="card-body">
            <div class="d-flex brands__image-wrapper">
              <img class="brands__image" src="../assets/images/baseus-logo.svg">
            </div>

          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-brands"
}
</script>

<style scoped>
.card {
  transition: all 0.5s;
  width: 18rem;
}

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

.brands__title {
  color: #333;
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .05rem;
  line-height: 3.2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.brands__image {
  width: 100%;
  max-height: 100%;
}

.brands__image-wrapper {
  max-height: 50px;
}
</style>

