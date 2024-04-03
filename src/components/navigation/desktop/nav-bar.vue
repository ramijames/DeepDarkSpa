<template>
  <nav class="flex flex-col justify-between w-full mx-auto max-w-xl py-4 gap-4">
      <NavBarBrand class="flex flex-row justify-center w-full" />
      <section v-if="router.currentRoute.value.name !== 'town'" class="flex flex-row justify-center w-full">
        <NavBarActions class="flex flex-row justify-center w-full" />
      </section>
    <!-- <section class="flex flex-row justify-end gap-8">
      <NavBarTabs />
      <NavBarButtons />
    </section> -->
  </nav>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import NavBarBrand from "@/components/navigation/desktop/nav-bar-brand.vue";
import NavBarActions from "@/components/navigation/desktop/nav-bar-actions.vue";
const router = useRouter();
const isTownRoute = ref(false);

console.log(router.currentRoute.value.name);

watchEffect(() => {
  isTownRoute.value = router.currentRoute.value.name === 'town';
});
</script>
