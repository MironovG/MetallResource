<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
    </div>
    <div class="carousel-inner px-md-4 px-0">
      <div class="carousel-item active">
        <div class="row g-4 align-items-stretch">
          <!-- Левый блок -->
          <div class="col-12 col-md-6">
            <div class="rounded-3 bg-white p-4 h-100 d-flex flex-column">
              <img src="/public/main.webp" class="carousel-item-img mb-3" alt="">
              <div class="row">
                <div class="col-12 col-md-8">
                <span>
                  ООО «МеталлРесурс НТ» является производителем металлоконструкций <br> по чертежам заказчика
                </span>
                </div>
                <div class="col-12 col-md-4 d-flex align-items-center">
                  <button class="btn btn_write-us"
                          data-bs-toggle="modal"
                          data-bs-target="#sendRequest">
                    Написать нам
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Правый блок -->
          <div v-show="!isMobile" class="col-12 col-md-6">
            <div class="rounded-3 bg-white p-4 h-100">
              <div class="d-flex align-items-center gap-3 mb-4">
                <img src="/public/metal.png" alt="">
                <span class="fw-bold fs-5">Металлопрокат оптом и в розницу в Санкт-Петербурге и области</span>
              </div>
              <p>Компания ООО "МеталлРесурс НТ" - это официальный представитель признанных лидеров металлургии России и
                стран СНГ.</p>
              <p>Высококвалифицированные специалисты помогут в выборе необходимой продукции, а также быстро произведут
                расчет стоимости заказа.</p>
              <p>Наша компания – это официальный представитель признанных лидеров металлургии.</p>
              <p>Наши цены весьма гибкие и лояльные, для постоянных клиентов предусмотрены скидки.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Второй слайд -->
      <div class="carousel-item">
        <div class="row g-4 align-items-stretch">
          <!-- Левый блок -->
          <div class="col-12 col-md-6">
            <div class="rounded-3 bg-white p-4 h-100 d-flex flex-column">
              <img src="/public/refactorMetal.jpg" class="carousel-item-img mb-3" alt="">
              <div class="row">
                <div class="col-12 col-md-8">
                <span>
                  Надежный поставщик металлопроката <br> в Санкт-Петербурге и области
                </span>
                </div>
                <div class="col-12 col-md-4 d-flex align-items-center">
                  <button class="btn btn_write-us "
                          data-bs-toggle="modal"
                          data-bs-target="#sendRequest">
                    Написать нам
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Правый блок -->
          <div v-show="!isMobile" class="col-12 col-md-6">
            <div class="rounded-3 bg-white p-4 h-100">
              <div class="d-flex align-items-center gap-3 mb-4">
                <img src="/public/equip.png" alt="" />
                <span class="fw-bold fs-5">Надежный поставщик металлопроката <br/> в Санкт-Петербурге и области</span>
              </div>
              <p>Услуги по резке металла в Санкт-Петербурге</p>
              <p>Выбирая ООО "МеталлРесурс НТ" в качестве поставщика, Вы получаете надежного партнера, способного
                удовлетворить все Ваши потребности по металлопрокату на долгое время.</p>
              <p>Наша работа окончательно убедит Вас в том, что мы - это то, что Вам нужно.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <button class="carousel-control-prev carousel-btn" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Предыдущий</span>
    </button>
    <button class="carousel-control-next carousel-btn" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Следующий</span>
    </button>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const isMobile = computed(() => {
  return window.innerWidth < 768
});

</script>