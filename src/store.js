import { defineStore } from 'pinia'
import { cards, services } from '@/views/data/cards.js'

export const useStore = defineStore('state', {
  state: () => ({
    products: cards,
    services: services,
  }),
  actions: {
    addProductInState(productId) {
      const selectProduct = this.products.find(product => product.id === productId);
      selectProduct['selected'] = true;
    },

    removeProductFromState(productId) {
      const removedService = this.products.find(product => product.id === productId);
      delete removedService['selected'];
    },

    addServiceInState(serviceId) {
      const selectProduct = this.services.find(product => product.id === serviceId);
      selectProduct['selected'] = true;
    },

    removeServiceFromState(serviceId) {
      const removedService = this.services.find(product => product.id === serviceId);
      delete removedService['selected'];
    },

    resetAllSelected() {
      for (let item of [...this.products, ...this.services]) {
        if ('selected' in item) {
          delete item['selected'];
        }
      }
    }
  },

  getters: {
    selectedProduct() {
      return this.products.filter(product => 'selected' in product)
    },

    selectedServices() {
      return this.services.filter(service => 'selected' in service)
    },
    
    isSomeSelected() {
      return [...this.products, ...this.services].some(item => 'selected' in item);
    }
  }
})