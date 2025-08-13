<template>
  <Header />
  <main>
    <div class="container">
      <RouterView />
    </div>
    <ModalComponent/>
  </main>
  <Footer />
</template>

<script setup>
import ModalComponent from '@/components/ModalComponent.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
