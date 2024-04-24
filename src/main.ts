import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/pages/products/index.vue";
import ProductDetails from "@/pages/products/details.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ProductList },
    { path: "/details", component: ProductDetails },
  ],
});

app.use(router);
app.mount("#app");
