<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <LoadingVue v-if="isLoading">Loading...</LoadingVue>
      <div v-else>
        <div class="grid grid-cols-4 gap-4">
          <div v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { ref, onBeforeMount } from "vue";
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const productStore = useProductStore();

let isLoading = ref(true);

const products = computed(() => {
  return productStore.products;
});
onBeforeMount(async () => {
  try {
    const { data } = await useFetch(
      "https://mp-ecommerce-test-36ayz.ondigitalocean.app/products"
    );
    productStore.setListOfProducts(data);
    isLoading.value = false;
  } catch (error) {
    console.error("Error fetching products:", error);
    isLoading.value = false;
  }
});
</script>
