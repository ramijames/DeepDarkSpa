<template>
  <button class="pixelify px-8 py-2 bg-crt-0 border-4 border-white self-center" @click="goBack">
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