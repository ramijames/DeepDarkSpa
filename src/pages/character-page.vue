<template>
  <PageLayout class="character-bg w-full h-full">
    character
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/components/page-layout.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();

</script>

<style scoped>

.character-bg {
  background-color: #0B0610;
  background-image: url("@/assets/images/character-bg.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

</style>
