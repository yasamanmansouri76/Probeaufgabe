<template>
  <div>
    <span class="font-semibold block">{{ headerTitle }}</span>
    <span class="text-zinc-500 block">{{ headerSubtitle }}</span>
    <ProductItem />
  </div>
</template>

<script lang="ts">
import ProductItem from "@/components/product/product-item.vue";
import { getProductsList } from "@/services/products";

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
    async getProducts() {
      const { data, statusCode } = await getProductsList();
      if (statusCode.value === 200) {
        this.products = data.value.products;
        this.headerSubtitle = data.value.header.headerDescription;
        this.headerTitle = data.value.header.headerTitle;
      }
    },
  },

  beforeMount() {
    this.getProducts();
  },
};
</script>
