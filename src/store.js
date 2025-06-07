import { defineStore } from 'pinia'

export const useStore = defineStore('state', {
  state: () => ({
    products: [],
    services: [],
  }),
  actions: {
    addProductInState(productId) {
      this.products.push(productId)
    },

    removeProductFromState(productId) {
      this.products.splice(this.products.indexOf(productId), 1);
    },

    addServiceInState(productId) {
      this.services.push(productId)
    },

    removeServiceFromState(productId) {
      this.services.splice(this.services.indexOf(productId), 1);
    },
  }
})