<template>
  <PageLayout class="profile-bg w-full">
    <section class="flex flex-row justify-center mt-8">
      <img :src="user.picture" alt="Profile" class="w-44 h-44 rounded-full overflow-hidden border-4 border-crt-5" />
    </section>
    <h1 class="mx-auto max-w-xl text-5xl text-center font-bold text-crt-F oswald w-full pb-14 mt-8">
      {{ user.name }}
    </h1>
    <section class="max-w-xl mx-auto flex flex-col">
      <div class="w-full mb-8 border-b-2 border-crt-F pb-8">
        <h2 class="text-2xl text-crt-F ">Profile</h2>
      </div>
      <div class="w-full">
        <div class="flex flex-row justify-between mt-4">
          <p class="text-base text-crt-F">Email</p>
          <p class="text-base text-crt-C">{{ user.email }}</p>
        </div>
        <div class="flex flex-row justify-between mt-4">
          <p class="text-base text-crt-F">Nickname</p>
          <p class="text-base text-crt-C">{{ user.nickname }}</p>
        </div>
        <div class="flex flex-row justify-between mt-4">
          <p class="text-base text-crt-F">Locale</p>
          <p class="text-base text-crt-C">{{ user.locale }}</p>
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
  background-color: #0B0610;
  background-image: url("@/assets/images/profile-bg-shifted.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100%;
}

</style>
