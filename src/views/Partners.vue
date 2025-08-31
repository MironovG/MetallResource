<template>
  <div class="container">
    <div class="d-flex justify-content-center mb-4">
      <h2 class="text-center">Наши партнеры</h2>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div v-for="partner in partners" :key="partner.id" class="col d-flex">
        <div class="flip-container d-flex">
          <div class="flipper w-100">
            <div class="card shadow border border-2 rounded-4 p-3 d-flex flex-column h-100 front-card">
              <div class="d-flex justify-content-center p-3">
                <img :src="partner.image" class="partner-image" :alt="partner.name">
              </div>
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 class="card-title text-center">{{ partner.name }}</h5>
                <p class="card-text text-center">{{ partner.shortDescription }}</p>
              </div>
            </div>

            <div class="card shadow border border-2 rounded-4 p-3 d-flex flex-column h-100 back-card">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 class="card-title text-center">{{ partner.name }}</h5>
                <p class="card-text text-center">{{ partner.fullDescription }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const partners = ref([
  {
    id: 1,
    name: 'Ашинский металлургический завод',
    image: 'partners/amet.png',
    shortDescription: 'Крупное металлургическое предприятие в Уральском регионе.',
    fullDescription: 'АО «Ашинский метзавод» — один из ключевых производителей листового проката, товаров для машиностроения и других отраслей. Завод известен своим высококачественным нержавеющим прокатом и широким ассортиментом продукции.'
  },
  {
    id: 2,
    name: 'ЕВРАЗ',
    image: 'partners/evraz.jpg',
    shortDescription: 'Одна из крупнейших сталелитейных и горнодобывающих компаний.',
    fullDescription: 'ЕВРАЗ — вертикально интегрированная горнодобывающая и металлургическая компания с активами по всему миру. Компания производит стальной прокат, рельсы, трубы и является одним из лидеров в производстве ванадия.'
  },
  {
    id: 3,
    name: 'Мечел',
    image: 'partners/mechel.jpg',
    shortDescription: 'Международная горнодобывающая и металлургическая компания.',
    fullDescription: 'Группа «Мечел» — одна из ведущих мировых компаний в горнодобывающей и металлургической отраслях. Компания производит широкий спектр продукции, включая уголь, железную руду, сталь и ферросплавы.'
  },
  {
    id: 4,
    name: 'Нижнетагильский трубный завод Металлинвест',
    image: 'partners/nntz.jpeg',
    shortDescription: 'Крупный российский производитель стальных электросварных труб.',
    fullDescription: 'Нижнетагильский трубный завод Металлинвест (НТТЗМ) — один из ведущих производителей электросварных профильных и круглых труб. Завод оснащен современным оборудованием и обеспечивает продукцией строительные, нефтегазовые и промышленные предприятия.'
  },
  {
    id: 5,
    name: 'Объединенная металлургическая компания',
    image: 'partners/omk.png',
    shortDescription: 'Крупный российский производитель стальных труб, железнодорожных колес и рессор.',
    fullDescription: 'ОМК — ведущий российский производитель широкого спектра металлопродукции. Компания является одним из лидеров на рынке труб для нефтегазовой отрасли, а также производит железнодорожные колеса и другую продукцию.'
  },
  {
    id: 6,
    name: 'Русская горно-металлургическая компания',
    image: 'partners/rgmk.png',
    shortDescription: 'Один из крупнейших дистрибьюторов металлопроката на российском рынке.',
    fullDescription: 'РГМК — крупный металлотрейдер, предоставляющий полный спектр услуг по поставкам и обработке металлопроката. Компания имеет широкую сеть региональных складов и предлагает услуги по резке и комплектации заказов.'
  },
  {
    id: 7,
    name: 'Северсталь',
    image: 'partners/seversteel.jpeg',
    shortDescription: 'Одна из ведущих металлургических и горнодобывающих компаний.',
    fullDescription: '«Северсталь» — вертикально интегрированная сталелитейная и горнодобывающая компания с активами в России. Компания производит широкий спектр продукции, от листового проката до труб большого диаметра.'
  },
  {
    id: 8,
    name: 'Трубная металлургическая компания',
    image: 'partners/tmk.svg',
    shortDescription: 'Лидер в производстве стальных труб для нефтегазового сектора.',
    fullDescription: 'ТМК — мировой лидер в производстве стальных труб, которые используются в нефтегазовой, энергетической, строительной и других отраслях. Компания имеет разветвленную сеть заводов и научно-исследовательских центров.'
  }
]);
</script>

<style scoped>
.flip-container {
  perspective: 1000px;
  cursor: pointer;
  height: 100%;
}

.flipper {
  transition: transform 0.8s;
  transform-style: preserve-3d;
  width: 100%;
  position: relative;
  height: 100%;
}

.flip-container:hover .flipper {
  transform: rotateY(180deg);
}

.front-card, .back-card {
  height: 100%;
  backface-visibility: hidden;
}

.front-card {
  z-index: 2;
  transform: rotateY(0deg);
}

.back-card {
  transform: rotateY(180deg);
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.partner-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>