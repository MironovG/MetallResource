<template>
  <div class="row mb-4">
    <div class="col-12">
      <div class="d-flex align-items-center justify-content-center gap-3">
        <h4 class="m-0">Продукция</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" fill="#10109FFF" class="bi bi-basket-3"
             viewBox="0 0 16 16" stroke="#10109FFF">
          <path
            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
        </svg>
      </div>
    </div>
  </div>

  <div v-show="store.isSomeSelected" class="row">
    <div id="selectResult" class="col-10"></div>
    <div class="col-2">
      <select-result v-show="store.isSomeSelected" />
    </div>
  </div>

  <teleport defer to="#selectResult" :disabled="!store.isSomeSelected">
    <div class="row row-cols-1 row-cols-md-4 gy-4">
      <div v-for="(card, index) in store.products"
           :key="index"
           class="col">
        <div :class="['card h-100 cursor-pointer', {'select': card['selected']}]"
             @click="card['selected'] ? store.removeProductFromState(card.id) : store.addProductInState(card.id)">
          <img :src="card.img" class="card-img-top" alt="card-img">
          <div class="card-body">
            <h6 class="fw-bold mb-1">{{ card.title }}</h6>
            <p class="card-text">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </teleport>

</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/store.js'
import SelectResult from '@/components/SelectResult.vue'

const store = useStore()

const modalForProduct = ref(null)
const btnCloseModal = ref(null)


</script>
