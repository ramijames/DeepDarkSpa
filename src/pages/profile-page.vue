<template>
  <PageLayout>
    <main class="mx-auto max-w-7xl mt-4 relative h-60 profile-bg">
      <section class="user-image absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-4 border-crt-9">
        <img :src="user.picture" alt="Profile" class="profile__avatar" />
      </section>
    </main>
    <h1 class="text-5xl text-center font-bold uppercase text-crt-9 oswald w-full pb-2 mt-8 mb-24">{{ user.name }}</h1>
    <section class="max-w-7xl mx-auto flex flex-row">
      <div class="w-1/3">
        <h2 class="text-3xl font-bold uppercase text-crt-F oswald">Profile</h2>
      </div>
      <div class="w-2/3">
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
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/components/page-layout.vue";
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

.user-image {
  bottom:-4rem;
}

</style>
