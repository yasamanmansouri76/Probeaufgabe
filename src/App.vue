<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import Header from "@/components/layout/header.vue";

export default {
  components: {
    Header,
  },
};
</script>
