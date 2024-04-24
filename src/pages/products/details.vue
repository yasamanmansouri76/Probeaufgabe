<template>
  <div class="p-3 text-sm">
    <div class="flex">
      <img :src="activeProduct.imageURL" class="h-14 w-14 mr-2" />
      <div>
        <span class="font-semibold">{{ activeProduct.name }}</span>
        <div>
          <span>Price: </span>
          <span class="text-zinc-500">
            {{ activeProduct.price.value }} {{ activeProduct.price.currency }}
          </span>
        </div>
        <span class="date text-zinc-500">{{ date }}</span>
      </div>
    </div>
    <p class="text-xs text-zinc-500 mt-2">{{ activeProduct.description }}</p>
    <button class="bg-sky-700 text-center text-white w-full p-1 my-3">
      Remember
    </button>
    <span class="font-semibold block">Description</span>
    <p class="text-xs text-zinc-500">
      {{ activeProduct.longDescription }}
    </p>
  </div>
</template>

<script lang="ts">
import { useStorage } from "@vueuse/core";

export default {
  data() {
    return {
      activeProduct: {},
      productId: this.$route.query.id,
    };
  },

  computed: {
    date() {
      return new Date(this.activeProduct.releaseDate).toLocaleDateString(
        "en-US"
      );
    },
  },

  beforeMount() {
    const myArray = useStorage("productsArray", []);

    this.activeProduct = myArray.value[0].find(
      (item) => item.id.toString() === this.productId
    );
  },
};
</script>

<style scoped>
.date {
  font-size: 0.6rem;
}
</style>
