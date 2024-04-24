<template>
  <div class="h-screen">
    <FilterNav @filter="filter" />
    <ProductList
      :products="shownProducts"
      :header-title="headerTitle"
      :header-subtitle="headerSubtitle"
    />
  </div>
</template>

<script lang="ts">
import FilterNav from "@/components/products/filter-nav.vue";
import ProductList from "@/components/products/product-list.vue";
import { getProductsList } from "@/services/products";
import { useStorage } from "@vueuse/core";

export default {
  data() {
    return {
      products: [],
      shownProducts: [],
      headerSubtitle: "",
      headerTitle: "",
    };
  },

  components: {
    FilterNav,
    ProductList,
  },

  methods: {
    async getProducts() {
      const { data, statusCode } = await getProductsList();
      if (statusCode.value === 200) {
        this.products = data.value.products;
        this.shownProducts = data.value.products;
        this.headerSubtitle = data.value.header.headerDescription;
        this.headerTitle = data.value.header.headerTitle;
        useStorage("productsArray", this.products);
      }
    },
    filter(value) {
      if (value === "availables") {
        this.shownProducts = this.products.filter((item) => item.available);
      } else if (value === "all") {
        this.shownProducts = this.products;
      } else {
        const wishList = useStorage("wishListArray", []).value;
        this.shownProducts = wishList;
      }
    },
  },

  beforeMount() {
    this.getProducts();
  },
};
</script>
