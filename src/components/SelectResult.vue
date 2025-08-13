<template>
  <div class="p-3 rounded border border-light position-sticky select-result">
    <div class="d-flex flex-column gap-3">
      <span class="fw-bold fs-5 text-center">Выбрано:</span>
      <span v-if="store.selectedProduct?.length" class="text-center">Продукция ({{ store.selectedProduct.length }})</span>
      <span v-if="store.selectedServices?.length" class="text-center">Услуги ({{ store.selectedServices.length }})</span>
      <button class="btn-form p-1"
              data-bs-toggle="modal"
              data-bs-target="#sendRequest">Оформить заявку</button>
      <button class="btn-form bg-danger-subtle p-1 text-white"
              @click="store.resetAllSelected">
        Сбросить все
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()
</script>

<style scoped>
.select-result {
  top: 12%;
  transition: 0.4s;
}

.btn-form.bg-danger-subtle {
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }
}
</style>

