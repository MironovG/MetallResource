<template>
  <div class="modal fade" tabindex="-1" id="sendRequest">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="sendData" enctype="multipart/form-data">
          <div class="modal-header px-5">
            <h5 class="modal-title fw-bold">Отравить запрос</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
          </div>
          <div class="modal-body px-5">
            <div class="row">
              <div class="d-none d-md-block col-4">
                <div v-if="store.selectedServices?.length"
                     :class="['d-flex flex-column gap-2 pb-2', {'border-bottom': store.selectedProduct?.length}]">
                  <h6 class="mb-0 fw-bold">Выбранные услуги:</h6>
                  <div class="d-flex">
                    <img v-for="(elem, index) in store.selectedServices.slice(0, 4)"
                         :key="index"
                         :src="elem.img"
                         class="stacked-image"
                         :style="{ 'z-index': 10 - index }">
                  </div>

                  <div class="d-flex flex-column gap-2 flex-wrap">
                    <span v-for="(item, index) in store.selectedServices" :key="index">
                   {{item.title}}
                  </span>
                  </div>
                </div>
                <div v-if="store.selectedProduct?.length"
                     :class="['d-flex flex-column gap-2', {'mt-2': store.selectedServices?.length}]">
                  <h6 class="mb-0 fw-bold">Выбранные продукты:</h6>
                  <div class="d-flex">
                    <img v-for="(elem, index) in store.selectedProduct.slice(0, 4)"
                         :key="index"
                         :src="elem.img"
                         class="stacked-image"
                         :style="{ 'z-index': 10 - index }">
                  </div>

                  <div class="d-flex flex-column gap-2 flex-wrap">
                    <span v-for="(item, index) in store.selectedProduct" :key="index">
                   {{item.title}}
                  </span>
                  </div>
                </div>

              </div>

              <div :class="isSomeSelected ? 'col-8' : 'col-12'">
                <div class="d-flex flex-column gap-3">
                  <label for="name" class="form-label">ФИО
                    <input type="text" name="name" required class="form-control" id="name"
                           placeholder="Иванов Иван Иванович">
                  </label>

                  <label for="name" class="form-label">Номер телефона
                    <input type="text" name="phone" class="form-control" id="phone"
                           placeholder="8-999-999-99-99">
                  </label>

                  <label for="email" class="form-label">Адрес электронной почты
                    <input type="email" name="email" required class="form-control" id="email"
                           placeholder="name@example.com">
                  </label>

                  <label for="formFileMultiple" class="form-label">Прикрепите файл
                    <input name="files" class="form-control" type="file" id="formFileMultiple" multiple>
                  </label>

                  <div class="form-check">
                    <input class="form-check-input p-2" type="checkbox" required  id="agree">
                    <label class="form-check-label" for="agree">
                      Я даю согласие на обработку моих персональных данных в соответствии с Политикой конфиденциальности.
                    </label>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" ref="btnCloseModal" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
            <button type="submit" class="btn btn-primary px-4">Оформить заявку</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <overlay :is-show-overlay="isShowOverlay"></overlay>
</template>

<script setup>
import { useStore } from '@/store'
import { computed, ref } from 'vue'
import Overlay from '@/components/Overlay.vue'

const store = useStore()

const isShowOverlay = ref(false);

const isSomeSelected = computed(() => [...store.selectedProduct, ...store.selectedServices].length > 0);

const sendData = async ({target}) => {
  document.querySelector('[data-bs-dismiss]').click();
  isShowOverlay.value = true
  const formData = new FormData(target);
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData
  })
}
</script>

<style scoped>
.stacked-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid white;
  position: relative;
}

.stacked-image:not(:first-child) {
  margin-left: -35px;
}
</style>