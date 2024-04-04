<template>
  <PageLayout class="dreamforge-bg w-full h-full">
    dreamforge
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/components/page-layout.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();
</script>

<style scoped>

.town-bg {
  background-color: #0B0610;
  background-image: url("@/assets/images/dreamforge-bg.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.forge {
  text-shadow: 0 4px 0px #51027e, 0 6px 12px rgba(0, 0, 0, .6), 0 38px 22px #540483bd;
}

</style>
