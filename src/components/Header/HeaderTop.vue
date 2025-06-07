<template>
  <div class="header_top">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <div class="d-flex align-items-center gap-2">
                <a href="/"><img width="72" height="72" src="/public/logoMain.webp" alt="logo"></a>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-md-5">
                  <li
                    v-for="tab in tabs"
                    :key="tab.id"
                    class="nav-item">
                    <router-link :to="{name: tab.name}" class="nav-link" :active-class="'active'"> {{ tab.title }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tabs = ref([
  { name: 'home', title: 'О компании', id: 2 },
  { name: 'products', title: 'Продукция', id: 3 },
  { name: 'services', title: 'Услуги', id: 4 },
  { name: 'home', title: 'Партнеры', id: 5 }
]);
</script>