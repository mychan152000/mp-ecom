import { defineStore } from "pinia";
import { PRODUCT_STORE, TProduct, TProductStoreState } from "./contants";

export const useProductStore = defineStore(PRODUCT_STORE, {
  state: (): TProductStoreState => ({
    products: [],
  }),
  actions: {
    setListOfProducts(products: TProduct[]) {
      this.products = products
    },
  },
  persist: true,
});
