<template>
  <div class="flex flex-row gap-4">
    <template v-if="!isAuthenticated">
      <SignupButton v-if="!isAuthenticated" />
      <LoginButton v-if="!isAuthenticated" />
    </template>
    <template v-if="isAuthenticated">
      <!-- Enter Dungeon -->
    </template>
  </div>
</template>

<script setup>
import LoginButton from "@/components/buttons/login-button.vue";
import SignupButton from "@/components/buttons/signup-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated } = useAuth0();
</script>
