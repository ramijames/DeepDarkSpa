<template>
  <HomePageLayout>
    <main class="h-screen min-h-screen relative flex flex-col hp-bg">
      <img src="@/assets/images/deep-dark-logo.png" class="w-96 mx-auto h-auto mt-12 mb-0" id="homepage-logo" alt="Deep Dark" />
      <h1 class="big-text poppins-extrabold mx-auto">GET LOST</h1>
      <!-- <img src="@/assets/images/itsalive.png" class="woman-left" alt="It's Alive!" /> -->
      <section class="itsalive"></section>
      <section class="flex flex-row justify-center gap-4 absolute bottom-10 mx-auto w-full z-10">
        <template v-if="!isAuthenticated">
          <SignupButton />
          <LoginButton />
        </template>
        <template v-if="isAuthenticated">
          <LoginButton />
        </template>
      </section>
    </main>
    <section class="flex flex-col justify-center explainer py-48 relative">
      <h2 class="medium-text poppins-extrabold mx-auto mb-8">What lurks below?</h2>
      <section class="mx-auto mb-8 text-center main-text z-10">
        <h3 class="text-2xl mt-4 max-w-96 mx-auto">In the world of the Deep Dark, you build dungeons and create exciting experiences for adventurers seeking riches, fame, and glory.</h3>
      </section>
      <p class="text-center max-w-3xl mx-auto mt-4 z-10">The Deep Dark is a platform for creating and sharing tabletop role-playing game (TTRPG) content. You can create dungeons, monsters, and adventures for your friends to play through. You can also play through the content created by others.</p>
      <section class="w-full absolute bottom-0 rocks z-0"></section>
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

#homepage-logo {
  filter: drop-shadow(0 0 10px #9200E7);
}

.big-text {
  font-size: 20vw;
  text-shadow: 0 8px 0px #8f0f39, 0 16px 0px #9200E7, 0 6px 12px rgba(0, 0, 0, .6), 0 38px 22px #540483bd;
  line-height: 20vw;
}

.medium-text {
  font-size: 6vw;
  text-shadow: 0 8px 0px #8f0f39, 0 16px 0px #9200E7, 0 6px 12px rgba(0, 0, 0, .6), 0 38px 22px #540483bd;
  line-height: 6vw;
}

.hp-bg {
  background-color: #0B0610;
  background-image: url("@/assets/images/red-sky.jpg");
  background-repeat: no-repeat;
  background-position: bottom center;
  transition: all 0.5s ease-in-out;
}

@media only screen and (max-width: 600px) {
  .hp-bg {
    background-position: bottom left;
  }
}

.itsalive {
  position:absolute;
  width:auto;
  height: 100vh;
  bottom:0;
  left:0;
  right:0;
  background-image: url("@/assets/images/itsalive.png");
  background-size: cover;
  background-position: bottom center;
  transition: all 0.5s ease-in-out;
  filter: drop-shadow(0 0 10px #000000e0);
}

@media only screen and (min-width: 1400px) {
  .itsalive {
    position:absolute;
    width:auto;
    height: 100vh;
    bottom:-25%;
    left:0;
    right:0;
    background-image: url("@/assets/images/itsalive.png");
    background-size: cover;
    background-position: bottom center;
  }
}

@media only screen and (max-width: 600px) {
  .itsalive {
    background-position: bottom left;
  }
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
  background-position: top center;
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