<template>
  <div class="h-screen flex flex-col">
    <FilterNav />
    <div class="grow">dfsd</div>
    <FilterNav />
  </div>
</template>

<script lang="ts">
import FilterNav from "@/components/product/filter-nav.vue";

export default {
  components: {
    FilterNav,
  },
};
</script>
