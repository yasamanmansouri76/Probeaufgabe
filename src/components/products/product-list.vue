<template>
  <div class="p-2">
    <span class="font-semibold block">{{ headerTitle }}</span>
    <span class="text-zinc-500 block mb-2">{{ headerSubtitle }}</span>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @click="handleProductItem(product.id)"
    />
  </div>
</template>

<script lang="ts">
import { mapActions } from "pinia";
import ProductItem from "@/components/products/product-item.vue";
import { getProductsList } from "@/services/products";
import { useProductsStore } from "@/store/products";

export default {
  components: {
    ProductItem,
  },

  data() {
    return {
      products: [],
      headerTitle: null,
      headerSubtitle: null,
    };
  },

  methods: {
    ...mapActions(useProductsStore, ["setProducts"]),
    async getProducts() {
      const { data, statusCode } = await getProductsList();
      if (statusCode.value === 200) {
        this.products = data.value.products;
        this.headerSubtitle = data.value.header.headerDescription;
        this.headerTitle = data.value.header.headerTitle;
        this.setProducts(this.products);
      }
    },
    handleProductItem(productId) {
      this.$router.push({ path: "/details", query: { id: productId } });
    },
  },

  beforeMount() {
    this.getProducts();
  },
};
</script>
