<template>
  <MainLayout>
    <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2 flex">
      <div class="md:flex gap-4 justify-between mx-auto">
        <div class="md:w-[60%]">
          <img
            v-if="firstImage"
            class="rounded-lg object-fit max-w-screen-lg"
            :src="firstImage"
          />
          <div
            v-if="images.length"
            class="flex items-center justify-center mt-2"
          >
            <div v-for="(image, index) in images" :key="index">
              <img
                @mouseover="firstImage = image"
                @click="firstImage = image"
                width="100"
                class="rounded-md object-fit border-[3px] cursor-pointer"
                :class="firstImage === image ? 'border-[#FF5353]' : ''"
                :src="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-[40%] text-lg">
        <div v-if="product && product.data.name">
          <p class="mb-2">{{ product.data.name }}</p>
          <p class="font-light mb-2">{{ product.data.desc }}</p>
          <p class="mb-2 font-bold">${{ product.data.price }}</p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const route = useRoute();
const product = ref();
const images = ref([]);
const firstImage = ref(null);

onBeforeMount(async () => {
  product.value = await useFetch(
    `https://mp-ecommerce-test-36ayz.ondigitalocean.app/products/${route.params.id}`
  );
  images.value = product.value.data.additionalImageUrls;
  firstImage.value = images.value[0];
});
</script>
