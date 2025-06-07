<template>
  <div>
    <div class="modal fade" tabindex="-1" :id="modalId">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <form @submit.prevent="$emit('submitForm', $event.target)" enctype="multipart/form-data">
            <div class="modal-header">
              <h5 class="modal-title fw-bold">{{ title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <div class="modal-body">
              <slot name="content"></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['submitForm']);
const props = defineProps({
  title: {
    type: String,
    default: 'Заголовок'
  },
  modalId: {
    type: String,
    default: 'exampleModal'
  }
})
</script>