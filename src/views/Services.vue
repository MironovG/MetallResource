<template>
  <div class="row mb-4">
    <div class="col-12">
      <div class="d-flex align-items-center justify-content-center gap-2">
        <h4 class="m-0">Услуги</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" fill="currentColor" class="bi bi-sliders"
             viewBox="0 0 16 16" stroke="#10109FFF">
          <path fill-rule="evenodd"
                d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
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
    <div class="row row-cols-1 row-cols-md-2 gy-4">
      <div v-for="(service, index) in store.services"
           :key="index"
           class="col">
        <div :class="['h-100 service-card cursor-pointer d-flex align-items-center gap-5 bg-light p-4 border rounded-3',
      {'select': service['selected']}]"
             @click="service['selected'] ? store.removeServiceFromState(service.id) : store.addServiceInState(service.id)">
          <img :src="service.img" class="card-img-service rounded-circle" alt="card-img-service">
          <div class="card-body d-flex flex-column gap-1">
            <p class="fs-5 fw-bold mb-0">{{ service.title }}</p>
            <p class="card-text">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { useStore } from '@/store.js'
import SelectResult from '@/components/SelectResult.vue'

const store = useStore()


</script>