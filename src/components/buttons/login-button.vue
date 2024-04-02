<template>
  <button class="px-16 py-4 text-xl bg-crt-4 border-b-4 border-crt-0" @click="handleLogin">Log In</button>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: "/profile",
    },
    authorizationParams: {
      prompt: "login",
    }
  });
};
</script>