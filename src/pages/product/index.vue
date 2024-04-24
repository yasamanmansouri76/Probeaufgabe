<template>
  <div class="h-screen">
    <FilterNav />
    <ProductList />
  </div>
</template>

<script lang="ts">
import FilterNav from "@/components/product/filter-nav.vue";
import ProductList from "@/components/product/product-list.vue";

export default {
  components: {
    FilterNav,
    ProductList,
  },
};
</script>
