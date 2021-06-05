<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: { HelloWorld },
};
</script>

<style>
#app {
  @apply antialiased flex flex-col items-center mt-4;
}
</style>
