<template>
  <HomePageLayout>
    <main class="w-full h-full flex flex-col justify-center hp-bg">
      <p class="text-center flex flex-row justify-center">
        <img src="@/assets/images/deep-dark-logo.png" class="w-1/2 h-auto mb-8" alt="Deep Dark" />
      </p>
      <section class="mx-auto mb-8 text-center main-text">
        <h2 class="text-5xl font-bold uppercase text-crt-4 oswald">Create nightmares</h2>
        <h2 class="text-5xl font-bold uppercase mb-4 text-crt-5 oswald">Experience dreams</h2>
        <h3></h3>
      </section>
      <section class="flex flex-row justify-center gap-4">
        <template v-if="!isAuthenticated">
          <SignupButton v-if="!isAuthenticated" />
          <LoginButton v-if="!isAuthenticated" />
        </template>
        <template v-if="isAuthenticated">
          <LogoutButton v-if="isAuthenticated" />
        </template>
      </section>
      
    </main>
  </HomePageLayout>
</template>

<script setup>
import HomePageLayout from "@/components/home-page-layout.vue";

import LoginButton from "@/components/buttons/login-button.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import SignupButton from "@/components/buttons/signup-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated } = useAuth0();

</script>

<style scoped>

.hp-bg {
  background-image: url("@/assets/images/hp-bg.png");
  background-size: cover;
  background-position: center;
}

.main-text h2,
.main-text h3 {
  text-shadow: 0 4px 0 rgba(0, 0, 0, 1);
}

</style>