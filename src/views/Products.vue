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
    <div v-for="(card, index) in store.products"
         :key="index"
         class="col">
      <div :class="['card h-100 cursor-pointer', {'select': card['selected']}]"
           @click="card['selected'] ? store.removeProductFromState(card.id) : store.addProductInState(card.id)">
        <img :src="card.img" class="card-img-top" alt="card-img">
        <div class="card-body">
          <h6 class="fw-bold mb-1">{{card.title}}</h6>
          <p class="card-text">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <modal-component
    ref="modalForProduct"
    :modal-id="`modalForProduct`"
    title="Тут будет ЗАГЛОВок ВСЕХ Выбранных"
    @submit-form="sendData">

    <template v-slot:content>
      <div class="row row-cols-md-2 row-cols-1">
        <div class="col">
          <div class="d-flex flex-column gap-3">
            <img class="card-img-top" alt="product">
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
import { ref } from 'vue'
import { useStore } from '@/store.js'
import ModalComponent from '@/components/ModalComponent.vue'
import Overlay from '@/components/Overlay.vue'

const store = useStore();

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
}
</script>
