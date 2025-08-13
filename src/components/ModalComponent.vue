<template>
  <div class="modal fade" tabindex="-1" id="sendRequest">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="sendData" enctype="multipart/form-data">
          <div class="modal-header">
            <h5 class="modal-title fw-bold">Отравить запрос</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4">
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

              <div class="col-8">
                <div class="d-flex flex-column gap-3">
                  <label for="name" class="form-label">ФИО
                    <input type="text" name="name" required class="form-control" id="name"
                           placeholder="Иванов Иван Иванович">
                  </label>

                  <label for="email" class="form-label">Адрес электронной почты
                    <input type="email" name="email" required class="form-control" id="email"
                           placeholder="name@example.com">
                  </label>

                  <label for="formFileMultiple" class="form-label">Прикрепите файл
                    <input name="files" class="form-control" type="file" id="formFileMultiple" multiple>
                  </label>

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
import { ref } from 'vue'
import Overlay from '@/components/Overlay.vue'

const store = useStore()

const emit = defineEmits(['submitForm'])

const isShowOverlay = ref(false)

const sendData = async (form) => {
  isShowOverlay.value = true
  const formData = new FormData(form)
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