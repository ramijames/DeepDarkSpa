<template>
  <div class="page-layout flex flex-col px-8">
    <NavBar />
    <!-- <MobileNavBar /> -->
    <div class="">
      <slot />
    </div>
    <!-- <PageFooter /> -->
  </div>
</template>

<script setup>
import NavBar from "@/components/navigation/desktop/nav-bar.vue";
import MobileNavBar from "@/components/navigation/mobile/mobile-nav-bar.vue";
// import PageFooter from "@/components/page-footer.vue";
</script>
