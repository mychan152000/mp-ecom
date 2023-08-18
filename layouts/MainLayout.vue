<template>
  <div id="MainLayout" class="w-full fixed z-50">
    <div id="MainHeader" class="flex items-center w-full bg-white">
      <div
        class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto text-4xl	"
      >
        <NuxtLink to="/"> My Basic Store </NuxtLink>
      </div>
    </div>
  </div>
  <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
  <slot />

  <div class="lg:pt-[150px] md:pt-[130px] pb-[80px]" />
</template>

<script setup></script>
