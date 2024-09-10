<template>
  <div class="container categories-section">
    <div class="d-flex flex-wrap justify-content-sm-center justify-content-lg-between">
      <div class="card mb-3 mx-lg-0 mx-md-3">
        <a href="https://example.com" class="card-link">
          <div class="card-body">
            <div class="d-flex">
              <div class="categories-section__icon me-3">
                <i class="bi bi-phone"></i>
              </div>
              <div class="categories-section__text">Смартфони, <br> телефони</div>
            </div>

          </div>
        </a>
      </div>
      <div class="card mb-3 mx-lg-0 mx-md-3" style="width: 18rem;">
        <a href="https://example.com" class="card-link">
          <div class="card-body">
            <div class="d-flex">
              <div class="categories-section__icon me-3">
                <i class="bi bi-tv"></i>
              </div>
              <div class="categories-section__text">Телевізори</div>
            </div>

          </div>
        </a>
      </div>
      <div class="card mb-3 mx-lg-0 mx-md-3" style="width: 18rem;">
        <a href="https://example.com" class="card-link">
          <div class="card-body">
            <div class="d-flex">
              <div class="categories-section__icon me-3">
                <i class="bi bi-laptop"></i>
              </div>
              <div class="categories-section__text">Ноутбуки</div>
            </div>

          </div>
        </a>
      </div>
      <div class="card mb-3 mx-lg-0 mx-md-3" style="width: 18rem;">
        <a href="https://example.com" class="card-link">
          <div class="card-body">
            <div class="d-flex">
              <div class="categories-section__icon me-3">
                <i class="bi bi-battery-charging"></i>
              </div>
              <div class="categories-section__text">Електроживлення</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-categories"
}
</script>

<style scoped>
.card {
  transition: all 0.5s;
  min-width: 18rem;
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

 .categories-section__icon i {
   font-size: 40px;
 }

 .categories-section__text {
   font-size: 16px;
   align-content: center;
 }
</style>
