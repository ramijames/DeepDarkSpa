<template>
  <button class="px-16 py-4 text-xl bg-crt-5 border-b-4 border-crt-0" @click="handleSignUp">Sign Up</button>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleSignUp = () => {
  loginWithRedirect({
    appState: {
      target: "/profile",
    },
    authorizationParams: {
      prompt: "login",
      screen_hint: "signup",
    }
  });
};
</script>

<style scoped>



</style>