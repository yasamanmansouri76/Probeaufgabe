<template>
  <div>
    <span class="font-semibold block">Title</span>
    <span class="text-zinc-500 block">Subtitle</span>
    <ProductItem />
  </div>
</template>

<script lang="ts">
import ProductItem from "@/components/product/product-item.vue";

export default {
  components: {
    ProductItem,
  },
};
</script>
