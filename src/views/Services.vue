<template>
  <div class="row mb-4">
    <div class="col-12">
      <div class="d-flex align-items-center justify-content-center gap-2">
        <h4 class="m-0">Услуги</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" fill="currentColor" class="bi bi-sliders"
             viewBox="0 0 16 16" stroke="orange">
          <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
        </svg>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-2 gy-4">
    <div v-for="(service, index) in services"
         :key="index"
         class="col">
      <div class="h-100 cursor-pointer d-flex align-items-center gap-5 bg-light p-4 border rounded-3"
           data-bs-toggle="modal" data-bs-target="#modalForProduct">
        <img :src="service.img" class="card-img-service rounded-circle" alt="card-img-service">
        <div class="card-body d-flex flex-column gap-1">
          <p class="fs-5 fw-bold mb-0">{{service.title}}</p>
          <p class="card-text">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const services = ref([
  {
    img: '/public/products/color-metal.jpg',
    title: 'Плазменная резка',
    description: 'Преимущества такой резки: высокая скорость, точность, отличное качество. Применяется при изготовлении деталей сложной формы.'
  },
  {
    img: '/public/products/armatura.jpg',
    title: 'Лазерная резка',
    description: 'Главный плюс резки - отсутствие деформации поверхности изделия. Максимальная точность разреза, высокая скорость.'
  },
  {
    img: '/public/products/balka-dvutavrovaya.jpg',
    title: 'Гидроабразивная резка',
    description: 'Изделие обрабатывается при помощи сверхмощной струи воды с примесью различных абразивов. '
  },
  {
    img: '/public/products/shveller.jpg',
    title: 'Резка углошлифовальной машиной',
    description: 'Резка и обработка металла производится угловой шлифовальной машиной (болгаркой).'
  },
  {
    img: '/public/products/ugolok.jpg',
    title: 'Ленточнопильная резка',
    description: 'Такая резка идеально подходит для круглой и профильной трубы, уголка, швеллера, круга, квадрата. '
  },
  {
    img: '/public/products/listovoj-prokat_2b.jpg',
    title: 'Листовой прокат',
    description: 'Листовой прокат – металлические листы разной толщины, используемые в машиностроении, строительстве и производстве. Доступен в горячекатаном и холоднокатаном исполнении.'
  },
  {
    img: '/public/products/profilnaya_truba_stat_2.jpg',
    title: 'Рубка металла на гильотине',
    description: 'Этот способ отличается минимальными потерями исходного материала при производстве. '
  },
  {
    img: '/public/products/truba-vus-2_0x0_33f.jpg',
    title: 'Токарно-фрезерные работы',
    description: 'Наша компания предоставляет целый спектр токарно-фрезерных работ (под заказ).'
  },
  {
    img: '/public/products/polosa.jpg',
    title: 'Гибка металла',
    description: 'Изготовление нестандартных позиций. '
  },
  {
    img: '/public/products/krug_metall.jpg',
    title: 'Термическая обработка металла',
    description: 'Отжиг, дальнейшая нормализация, закалка и отпуск стали. '
  },
  {
    img: '/public/products/katanka-6-mm.jpg',
    title: 'Производство армокаркасов и арматурной сетки',
    description: 'Незаменимы для укрепления фундамента, железобетонных конструкций.'
  },
  {
    img: '/public/products/nastil.jpg',
    title: 'Доставка и комплектация',
    description: 'Доставка металлопроката собственным автотранспортом.'
  },
  {
    img: '/public/products/setka-svarnaya.jpg',
    title: 'Услуги экспедитора',
    description: 'Организация доставки груза с гарантией сохранности.'
  },
])
</script>