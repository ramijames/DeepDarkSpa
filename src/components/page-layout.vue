<template>
  <div class="h-full mx-auto page-layout flex flex-col px-8">
    <NavBar />
    <!-- <MobileNavBar /> -->
    <slot />
    <!-- <PageFooter /> -->
  </div>
</template>

<script setup>
import NavBar from "@/components/navigation/desktop/nav-bar.vue";
import MobileNavBar from "@/components/navigation/mobile/mobile-nav-bar.vue";
// import PageFooter from "@/components/page-footer.vue";
</script>
