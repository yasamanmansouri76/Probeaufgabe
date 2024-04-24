import { defineStore } from "pinia";

export const useProductsStore = defineStore("porducts", {
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts: (state) => state.products,
  },
  actions: {
    setProducts(value: Object) {
      this.products = value;
    },
  },
});
