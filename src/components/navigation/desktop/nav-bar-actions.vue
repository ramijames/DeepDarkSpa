<template>
  <BackButton />
</template>

<script setup>
import BackButton from "@/components/buttons/back-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated } = useAuth0();
</script>
