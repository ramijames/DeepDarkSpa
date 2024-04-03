<template>
  <div class="flex flex-row gap-4">
    <BackButton />
  </div>
</template>

<script setup>
import BackButton from "@/components/buttons/back-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated } = useAuth0();
</script>
