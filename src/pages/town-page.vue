<template>
  <PageLayout class="town-bg w-full h-full">
    <main class="h-full w-full mx-auto max-w-xl flex flex-col justify-end pb-8 gap-2">
      <router-link to="/dreamforge" class="button rounded-full flex flex-row gap-4 w-full justify-center px-8 py-2 bg-crt-5 border-b-4 border-crt-0">Dreamforge</router-link>
      <router-link to="/dungeon" class="button rounded-full flex flex-row gap-4 w-full justify-center px-8 py-2 bg-crt-5 border-b-4 border-crt-0">Dungeon</router-link>
      <router-link to="/profile" class="button rounded-full flex flex-row gap-4 w-full justify-center px-8 py-2 bg-crt-5 border-b-4 border-crt-0">Profile</router-link>
    </main>
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/components/page-layout.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();

const code = user ? JSON.stringify(user.value, null, 2) : "";
</script>

<style scoped>

.town-bg {
  background-color: #0B0610;
  background-image: url("@/assets/images/town-bg.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.choose {
  text-shadow: 0 4px 0px #51027e, 0 6px 12px rgba(0, 0, 0, .6), 0 38px 22px #540483bd;
}

</style>
