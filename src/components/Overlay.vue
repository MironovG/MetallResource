<template>
  <div :class="['overlay d-flex align-items-center justify-content-center', {'d-none' : !isShowOverlay}]">
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Загрузка...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isShowOverlay :{
    type: Boolean,
    default: false
  }
})
</script>
