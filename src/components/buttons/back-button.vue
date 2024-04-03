<template>
  <button class="flex flex-row gap-4 w-full rounded-full justify-center px-8 py-2 bg-crt-5 border-b-4 border-crt-0" @click="goBack">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
    Back to town
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.push({ name: 'town' });
};
</script>