<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <LoadingVue v-if="isLoading">Loading...</LoadingVue>
      <div v-else>
        <div class="my-2">
          <select v-model="selectedSort" class="form-select">
            <option v-for="sort in sorts" :value="sort.key" :key="sort.key">
              {{ sort.label }}
            </option>
          </select>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <div v-for="product in sortedProducts" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { ref, onBeforeMount, computed } from "vue";
import { useProductStore } from "@/stores/products";

const productStore = useProductStore();
let isLoading = ref(true);
const sorts = [
  { key: 1, label: "newest" },
  { key: 2, label: "price: low to high" },
];

const selectedSort = ref("");
const products = computed(() => {
  return productStore.products;
});

const sortedProducts = computed(() => {
  if (selectedSort.value === 1) {
    return [...products.value].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (selectedSort.value === 2) {
    return [...products.value].sort((a, b) => a.price - b.price);
  } else {
    return products.value;
  }
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
