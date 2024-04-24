import { defineStore } from "pinia";

export const useProductsStore = defineStore("porducts", {
  state: () => ({
    activeProduct: {},
  }),
  getters: {
    getActiveProduct: (state) => state.activeProduct,
  },
  actions: {
    setActiveProduct(value: object) {
      this.activeProduct = value;
    },
  },
});
