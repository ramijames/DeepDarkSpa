<template>
  <PageLayout>
      <ul>
        <li><img :src="user.picture" alt="Profile" class="profile__avatar" /></li>
        <li>{{ user.name }}</li>
        <li>{{ user.given_name }}</li>
        <li>{{ user.family_name }}</li>
        <li>{{ user.sub }}</li>
        <li>{{ user.email }}</li>
        <li>{{ user.nickname }}</li>
        <li>{{ user.locale }}</li>
        <li>{{ user.updated_at }}</li>
        <li>{{ user.email_verified }}</li>
      </ul>
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/components/page-layout.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();

const code = user ? JSON.stringify(user.value, null, 2) : "";
</script>
