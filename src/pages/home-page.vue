<template>
  <HomePageLayout>
    <main class="h-screen relative flex flex-col justify-start hp-bg">
      <p class="text-center flex flex-row justify-center">
        <img src="@/assets/images/deep-dark-logo.png" class="w-1/2 max-w-96 h-auto mt-24 mb-8" alt="Deep Dark" />
      </p>
      <section class="mx-auto mb-8 text-center main-text z-10">
        <h2 class="text-7xl max-w-96 mx-auto mb-8 font-bold uppercase oswald">Create nightmares, <span class="dreams">experience dreams</span></h2>
      </section>
      <section class="flex flex-row justify-center gap-4 mb-48 z-10">
        <template v-if="!isAuthenticated">
          <SignupButton />
          <LoginButton />
        </template>
        <template v-if="isAuthenticated">
          <LoginButton />
        </template>
      </section>
      <section class="w-full absolute bottom-0 rocks"></section>
    </main>
    <section class="explainer py-48">
      <h2 class="text-4xl text-center font-bold uppercase oswald">What lurks in the Deep Dark?</h2>
      <section class="mx-auto mb-8 text-center main-text z-10">
        <h3 class="text-2xl mt-4 max-w-96 mx-auto">In the world of the Deep Dark, you build dungeons and create exciting experiences for adventurers seeking riches, fame, and glory.</h3>
      </section>
      <p class="text-center max-w-3xl mx-auto mt-4">The Deep Dark is a platform for creating and sharing tabletop role-playing game (TTRPG) content. You can create dungeons, monsters, and adventures for your friends to play through. You can also play through the content created by others.</p>
    </section>
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
  background-color: #0B0610;
  background-image: url("@/assets/images/red-sky.jpg");
  background-repeat: no-repeat;
  background-position: center;
}

.rocks {
  background-image: url("@/assets/images/dark-rocks.png");
  background-size: cover;
  background-position: top center;
  height:300px;
}

.explainer {
  background-color: #2C0217;
  background-image: url("@/assets/images/skullman.jpg");
  background-repeat: no-repeat;
  background-position: center;
}

.main-text h2 {
  color:#F9EAEF;
  text-shadow: 0 4px 0px #8f0f39, 0 6px 12px rgba(0, 0, 0, .6), 0 38px 22px #540483bd;
}

.main-text span.dreams {
  color:#F9EEFE;
  text-shadow: 0 4px 0px #9200E7, 0 6px 12px rgba(0, 0, 0, .6), 0 38px 22px #540483bd;
}

.main-text h3 {
  text-shadow: 0 2px 0px #8f0f39;
}

</style>