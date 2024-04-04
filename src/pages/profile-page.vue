<template>
  <PageLayout class="profile-bg w-full flex flex-col justify-between mb-8">
    <section class="w-full max-w-xl mx-auto flex flex-col">
      <section class="flex flex-row justify-center mx-auto mt-8 ring-4 ring-crt-5 ring-offset-0 w-44 h-44 rounded-full">
        <img :src="user.picture" alt="Profile" class="w-44 h-44 rounded-full overflow-hidden border-4 border-crt-F" />
      </section>
      <h1 class="deep-dark-shadow mx-auto max-w-xl text-4xl text-center font-bold text-crt-F poppins-extrabold w-full pb-14 mt-8">
        {{ user.name }}
      </h1>
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
    <LogoutButton class="w-full max-w-xl mx-auto" v-if="!isAuthenticated" />
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/components/page-layout.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();

const code = user ? JSON.stringify(user.value, null, 2) : "";
</script>

<style>

.profile-pic {
  box-shadow: inset 0 0 10px rgba(255,255,255,1);
}

.profile-bg {
  background-color: #0B0610;
  background-image: url("@/assets/images/profile-bg.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100%;
}

</style>
