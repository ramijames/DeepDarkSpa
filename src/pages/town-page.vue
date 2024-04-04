<template>
  <PageLayout class="town-bg w-full h-full">
    <main class="h-full w-full mx-auto flex flex-col justify-end">
      <div class="town-ui flex flex-row gap-2 mx-auto p-12 justify-center">
        <router-link to="/character" class="w-1/4 self-center button bg-crt-0 text-center py-4  border-4 border-white">Character</router-link>
        <router-link to="/dreamforge" class="w-1/4 self-center button bg-crt-0 text-center py-4  border-4 border-white">Dreamforge</router-link>
        <router-link to="/dungeon" class="w-1/4 self-center button bg-crt-0 text-center py-4  border-4 border-white">Dungeon</router-link>
        <router-link to="/profile" class="w-1/4 self-center button bg-crt-0 text-center py-4  border-4 border-white">Profile</router-link>
      </div>
      
    </main>
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
  background-image: url("@/assets/images/town-bg.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.town-ui {
  background-image: url("@/assets/images/town_ui.png");
  background-size: 100%;
  width: 600px;
  height: 180px;
}

.choose {
  text-shadow: 0 4px 0px #51027e, 0 6px 12px rgba(0, 0, 0, .6), 0 38px 22px #540483bd;
}

</style>
