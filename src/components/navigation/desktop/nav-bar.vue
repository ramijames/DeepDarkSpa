<template>
  <nav class="flex flex-row justify-between w-full p-4 gap-4">
    <section class="flex flex-row justify-start">
      <NavBarBrand />
    </section>
    <section class="flex flex-row justify-end gap-8">
      <NavBarTabs />
      <NavBarButtons />
    </section>
  </nav>
</template>

<script setup>
import NavBarBrand from "@/components/navigation/desktop/nav-bar-brand.vue";
import NavBarButtons from "@/components/navigation/desktop/nav-bar-buttons.vue";
import NavBarTabs from "@/components/navigation/desktop/nav-bar-tabs.vue";
</script>
