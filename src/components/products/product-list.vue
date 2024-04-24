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
import ProductItem from "@/components/products/product-item.vue";

export default {
  components: {
    ProductItem,
  },

  props: {
    products: {
      type: Array,
      default: null,
    },
    headerSubtitle: {
      type: String,
      default: "",
    },
    headerTitle: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleProductItem(productId) {
      this.$router.push({ path: "/details", query: { id: productId } });
    },
  },
};
</script>
