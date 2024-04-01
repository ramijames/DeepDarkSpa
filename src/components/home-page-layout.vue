<template>
  <div class="w-full h-full homepage-layout flex flex-col px-8">
    <!-- <NavBar /> -->
    <!-- <MobileNavBar /> -->
    <slot /> <!-- This pulls in the content from the home-page.vue file -->
    <!-- <PageFooter /> -->
  </div>
</template>

<script setup>
// import NavBar from "@/components/navigation/desktop/nav-bar.vue";
// import MobileNavBar from "@/components/navigation/mobile/mobile-nav-bar.vue";
// import PageFooter from "@/components/page-footer.vue";
</script>
