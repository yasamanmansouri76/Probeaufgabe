<template>
  <div class="h-screen">
    <FilterNav />
    <ProductList />
  </div>
</template>

<script lang="ts">
import FilterNav from "@/components/products/filter-nav.vue";
import ProductList from "@/components/products/product-list.vue";

export default {
  components: {
    FilterNav,
    ProductList,
  },
};
</script>
