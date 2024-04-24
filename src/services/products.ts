import { useFetch } from "@vueuse/core";

export function getProductsList() {
  return useFetch(
    "https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json"
  )
    .get()
    .json();
}
