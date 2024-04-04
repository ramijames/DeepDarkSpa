<template>
  <nav class="flex flex-row py-4 gap-4 justify-between">
    <NavBarBrand />
    <BackButton v-if="router.currentRoute.value.name !== 'town'" />
  </nav>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import NavBarBrand from "@/components/navigation/desktop/nav-bar-brand.vue";
import BackButton from "@/components/buttons/back-button.vue";
const router = useRouter();
const isTownRoute = ref(false);

console.log(router.currentRoute.value.name);

watchEffect(() => {
  isTownRoute.value = router.currentRoute.value.name === 'town';
});
</script>
