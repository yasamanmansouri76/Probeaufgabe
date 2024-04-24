<template>
  <div
    class="flex border border-zinc-500 rounded-md mb-2 p-2"
    :class="[isAvailable ? 'flex-row' : 'flex-row-reverse	']"
  >
    <img :src="product.imageURL" class="h-14 w-14 mr-2" />
    <div class="text-xs grow">
      <div class="flex items-center justify-between mb-1">
        <span class="font-semibold">{{ product.name }}</span>
        <span v-if="isAvailable" class="date text-zinc-500">{{ date }}</span>
      </div>
      <p class="text-zinc-500 clamp mb-1">{{ product.description }}</p>
      <div v-if="isAvailable">
        <span>Price: </span>
        <span class="text-zinc-500"
          >{{ product.price.value }} {{ product.price.currency }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },

  computed: {
    isAvailable() {
      return this.product.available;
    },
    date() {
      return new Date(this.product.releaseDate).toLocaleDateString("en-US");
    },
  },
};
</script>

<style scoped>
.clamp {
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}

.date {
  font-size: 0.6rem;
}
</style>
