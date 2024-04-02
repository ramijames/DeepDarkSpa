<template>
  <PageLayout>
    <section class="flex flex-row justify-between max-w-xl mx-auto mt-8">
      <img :src="user.picture" alt="Profile" class="w-24 h-24 rounded-full overflow-hidden border-4 border-crt-9" />
    </section>
    <h1 class="mx-auto max-w-xl text-5xl text-left font-bold uppercase text-crt-9 oswald w-full pb-2 mt-8 mb-4">
      {{ user.name }}
    </h1>
    <section class="max-w-xl mx-auto flex flex-col">
      <div class="w-full">
        <h2 class="text-3xl font-bold uppercase text-crt-F oswald">Profile</h2>
      </div>
      <div class="w-full">
        <div class="flex flex-row justify-between mt-4">
          <p class="text-base text-crt-F oswald">Email</p>
          <p class="text-base text-crt-F oswald">{{ user.email }}</p>
        </div>
        <div class="flex flex-row justify-between mt-4">
          <p class="text-base text-crt-F oswald">Nickname</p>
          <p class="text-base text-crt-F oswald">{{ user.nickname }}</p>
        </div>
        <div class="flex flex-row justify-between mt-4">
          <p class="text-base text-crt-F oswald">Locale</p>
          <p class="text-base text-crt-F oswald">{{ user.locale }}</p>
        </div>
      </div>
    </section>
    <section class="max-w-xl mx-auto flex flex-col justify-start mt-16">
      <LogoutButton class="" v-if="!isAuthenticated" />
    </section>
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

.profile-bg {
  background-image: url("@/assets/images/hp-bg.png");
  background-size: cover;
  background-position: center;
}

</style>
