<template>
  <button class="px-8 py-2 bg-crt-4 border-b-4 border-crt-0" @click="handleLogout">Log Out</button>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { logout } = useAuth0();

const handleLogout = () =>
  logout({
    logoutParams: {
      returnTo: window.location.origin,
    }
  });
</script>
