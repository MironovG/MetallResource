<template>
  <div class="row mb-4">
    <div class="col-12">
      <div class="d-flex align-items-center justify-content-center gap-3">
        <h4 class="m-0">Продукция</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" fill="orange" class="bi bi-basket-3" viewBox="0 0 16 16" stroke="orange">
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
        </svg>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-4 gy-4">
    <div v-for="(card, index) in cards"
         :key="index"
         class="col">
      <div class="card h-100 cursor-pointer"
           @click="Object.assign(currentSelectedProduct, card);"
           data-bs-toggle="modal" data-bs-target="#modalForProduct">
        <img :src="card.img" class="card-img-top" alt="card-img">
        <div class="card-body">
          <p class="fs-5 fw-bold mb-1">{{card.title}}</p>
          <p class="card-text">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <modal-component
    ref="modalForProduct"
    :modal-id="`modalForProduct`"
    :title="currentSelectedProduct?.title"
    @submit-form="sendData">

    <template v-slot:content>
      <div class="row row-cols-md-2 row-cols-1">
        <div class="col">
          <div class="d-flex flex-column gap-3">
            <img :src="currentSelectedProduct?.img" class="card-img-top" alt="product">
            <span class="text-gray">
              Заявка будет отравлена по данному товару
            </span>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column gap-3">
            <label for="name" class="form-label">ФИО
              <input type="text" name="name" required class="form-control" id="name" placeholder="Иванов Иван Иванович">
            </label>

            <label for="email" class="form-label">Адрес электронной почты
              <input type="email" name="email" required class="form-control" id="email" placeholder="name@example.com">
            </label>

            <label for="formFileMultiple" class="form-label">Прикрепите файл
              <input name="files" class="form-control" type="file" id="formFileMultiple" multiple>
            </label>

          </div>
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <button type="button" ref="btnCloseModal" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
      <button type="submit" class="btn btn-primary px-4">Оформить заявку</button>
    </template>
  </modal-component>
  <overlay :is-show-overlay="isShowOverlay"></overlay>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ModalComponent from '@/components/ModalComponent.vue'
import Overlay from '@/components/Overlay.vue'

const currentSelectedProduct = reactive({});
const modalForProduct = ref(null);
const btnCloseModal = ref(null);

const isShowOverlay = ref(false);

const sendData = async (form) => {
  isShowOverlay.value = true;
  const formData = new FormData(form);
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData,
  });

  console.log(res);
}

const cards = ref([
  {
    img: '/public/products/color-metal.jpg',
    title: 'Цветной металл',
    description: 'Цветные металлы, такие как медь, алюминий и латунь, обладают высокой коррозионной стойкостью и отличной электропроводностью. Применяются в электротехнике, строительстве и машиностроении.'
  },
  {
    img: '/public/products/armatura.jpg',
    title: 'Арматура',
    description: 'Арматура используется для усиления железобетонных конструкций, обеспечивая прочность и долговечность. Доступна в различных классах и диаметрах, применяется в строительстве и промышленности.'
  },
  {
    img: '/public/products/balka-dvutavrovaya.jpg',
    title: 'Балка двутавровая',
    description: 'Двутавровая балка – это прочный металлический профиль, широко используемый в строительстве для возведения несущих конструкций, мостов и перекрытий, обеспечивая высокую устойчивость к нагрузкам.'
  },
  {
    img: '/public/products/shveller.jpg',
    title: 'Швеллер',
    description: 'Швеллер – металлический профиль с П-образным сечением, применяемый в строительстве, машиностроении и производстве металлоконструкций для усиления прочности конструкций.'
  },
  {
    img: '/public/products/ugolok.jpg',
    title: 'Уголок стальной',
    description: 'Стальной уголок – универсальный элемент для создания каркасов, опорных конструкций и армирования. Отличается высокой жесткостью и устойчивостью к нагрузкам.'
  },
  {
    img: '/public/products/listovoj-prokat_2b.jpg',
    title: 'Листовой прокат',
    description: 'Листовой прокат – металлические листы разной толщины, используемые в машиностроении, строительстве и производстве. Доступен в горячекатаном и холоднокатаном исполнении.'
  },
  {
    img: '/public/products/profilnaya_truba_stat_2.jpg',
    title: 'Труба профильная',
    description: 'Профильная труба с прямоугольным или квадратным сечением применяется в строительстве, мебельной и машиностроительной отраслях благодаря высокой прочности и удобству монтажа.'
  },
  {
    img: '/public/products/truba-vus-2_0x0_33f.jpg',
    title: 'Труба круглая, ВУС, ППУ',
    description: 'Круглые трубы, а также трубы с ВУС (внешним усиленным слоем) и ППУ (пенополиуретановой изоляцией) применяются в нефтегазовой сфере, водоснабжении и отоплении, обеспечивая надежную защиту от коррозии.'
  },
  {
    img: '/public/products/polosa.jpg',
    title: 'Полоса стальная',
    description: 'Стальная полоса используется в строительстве, производстве металлоконструкций, а также для изготовления кованных изделий и крепежных элементов.'
  },
  {
    img: '/public/products/krug_metall.jpg',
    title: 'Круг стальной',
    description: 'Стальной круг – прокатный продукт, применяемый в машиностроении, строительстве и производстве деталей. Отличается высокой прочностью и стойкостью к нагрузкам.'
  },
  {
    img: '/public/products/katanka-6-mm.jpg',
    title: 'Проволока стальная',
    description: 'Стальная проволока широко применяется в строительстве, производстве сеток, канатов и крепежных изделий. Отличается высокой гибкостью и прочностью.'
  },
  {
    img: '/public/products/nastil.jpg',
    title: 'Профнастил',
    description: 'Профнастил – это металлические листы с гофрированной поверхностью, используемые для кровли, ограждений и облицовки зданий. Обеспечивает долговечность и устойчивость к погодным условиям.'
  },
  {
    img: '/public/products/setka-svarnaya.jpg',
    title: 'Сетка сварная',
    description: 'Сварная сетка используется в строительстве, сельском хозяйстве и промышленности для армирования конструкций, изготовления заборов и перегородок.'
  },
  {
    img: '/public/products/specstal.webp',
    title: 'Спецстали и сплавы',
    description: 'Специальные стали и сплавы обладают особыми свойствами, такими как повышенная прочность, жаростойкость и коррозионная стойкость, применяются в авиации, судостроении и машиностроении.'
  },
  {
    img: '/public/products/prokat-nerzhaveyushhij_1b.jpg',
    title: 'Нержавеющая сталь',
    description: 'Нержавеющая сталь устойчива к коррозии, что делает ее идеальным материалом для медицинского оборудования, пищевой промышленности, строительства и машиностроения.'
  },
  {
    img: '/public/products/zapornay_truba.jpg',
    title: 'Трубозапорная арматура',
    description: 'Трубозапорная арматура включает в себя вентили, задвижки и краны, используемые в трубопроводных системах для регулирования потоков жидкостей и газов.'
  }
])
</script>
