<template>
  <div
    :id="`ProductCard${product.id}`"
    class="bg-white inline-block rounded hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] cursor-pointer"
  >
    <NuxtLink :to="`/product/${product.id}`">
      <div class="relative">
        <img
          class="rounded-t"
          :src="
            product.defaultImageUrl ||
            'https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x500.png'
          "
          @load="imageLoaded = true"
        />

        <div v-if="!imageLoaded" class="rounded-t">... loading</div>
      </div>

      <div id="ProductDetails" class="p-2">
        <span class="flex items-center justify-start gap-3 px-1 pt-1">
          <span class="text-[#FF6674] font-semibold">${{ product.price }}</span>
        </span>

        <p class="px-1 pt-0.5 text-xs text-[#252525] font-bold">
          {{ product.name }}
        </p>

        <p class="px-1 pb-1">
          <span class="text-[#009A66] text-xs font-regular">{{
            formattedDays
          }}</span>
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { defineProps, computed, toRefs, ref } from "vue";

const props = defineProps(["product"]);
const { product } = toRefs(props);

const [year, day, month] = product.value.createdAt.split("-");
const pastDate = new Date(`${year}-${month}-${day}`);
const currentDate = new Date();

const imageLoaded = ref(false);

const formattedDays = computed(() => {
  const timeDifference = currentDate - pastDate;
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysPassed === 0) {
    return "Added Today";
  } else {
    return `added ${daysPassed} ${daysPassed === 1 ? "day" : "days"} ago`;
  }
});
</script>
