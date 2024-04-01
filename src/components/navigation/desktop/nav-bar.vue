<template>
  <nav class="flex flex-row justify-between w-full p-4">
    <NavBarBrand />
    <NavBarTabs />
    <NavBarButtons />
  </nav>
</template>

<script setup>
import NavBarBrand from "@/components/navigation/desktop/nav-bar-brand.vue";
import NavBarButtons from "@/components/navigation/desktop/nav-bar-buttons.vue";
import NavBarTabs from "@/components/navigation/desktop/nav-bar-tabs.vue";
</script>
